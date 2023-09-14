
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { getDelegateData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { NoOpenVoteFound, TooManyOpenDelegations, TooManyOpenVotes } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { addDelegatedVotesReferendum, getAllNestedDelegations, removeDelegatedVotesOngoingReferenda, removeVote } from './helpers'
import { StandardVoteBalance, ConvictionVote, VoteType, VotingDelegation, Proposal, ProposalType, ConvictionDelegatedVotes } from '../../../model'
import { getConvictionDelegatedVotesCount } from '../../utils/votes'

export async function handleDelegate(ctx: BatchContext<Store, unknown>,
    item: CallItem<'ConvictionVoting.delegate', { call: { args: true; origin: true}, extrinsic: true }>,
    header: SubstrateBlock): Promise<void> {
    if (!(item.call as any).success) return
    const { to, lockPeriod, balance, track } = getDelegateData(ctx, item.call)
    const toWallet = ss58codec.encode(to)
    let from = getOriginAccountId(item.call.origin)
    if(!from){
        from = getOriginAccountId(item.extrinsic.call.origin)
    }
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track } })

    if (delegations != null && delegations != undefined && delegations.length > 1) {
        ctx.log.warn(TooManyOpenDelegations(header.height, track, from))
    }

    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAtBlock: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })

    if (delegations.length > 0) {
        const delegation = delegations[0]
        delegation.endedAtBlock = header.height
        delegation.endedAt = new Date(header.timestamp)
        await ctx.store.save(delegation)
        //remove votes for ongoing referenda
        for (let i = 0; i < ongoingReferenda.length; i++) {
            const referendum = ongoingReferenda[i]
            if(referendum.index || referendum.index === 0){
                await removeVote(ctx, from, referendum.index, header.height, header.timestamp, false)
            }
        }
    }

    // await removeDelegatedVotesOngoingReferenda(ctx, from, header.height, header.timestamp, track)

    await ctx.store.insert(
        new VotingDelegation({
            id: `${await ctx.store.count(VotingDelegation)}`,
            createdAtBlock: header.height,
            from: from,
            to: toWallet,
            balance,
            lockPeriod,
            track,
            createdAt: new Date(header.timestamp),
        })
    )
    // add votes for ongoing referenda for this track
    let votingPower = BigInt(0)
    const nestedDelegations = await getAllNestedDelegations(ctx, from, track)
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index === undefined || referendum.index === null){
            continue
        }
        const votes = await ctx.store.find(ConvictionVote, { where: { voter: toWallet, proposalIndex: referendum.index, removedAtBlock: IsNull() } })
        if(votes){
            if (votes.length > 1) {
                ctx.log.warn(TooManyOpenVotes(header.height, referendum.index, toWallet))
                return
            }
            else if (votes.length === 0) {
                //to wallet didn't vote yet
                ctx.log.warn(NoOpenVoteFound(header.height, referendum.index, toWallet))
                return
            }
            const vote = votes[0]
            const voteBalance = new StandardVoteBalance({
                value: balance,
            })
            const voter = from
            const count = await getConvictionDelegatedVotesCount(ctx)
            if (lockPeriod === 0 && balance) {
                votingPower = balance/BigInt(10)
            }else{
                votingPower = balance ? BigInt(lockPeriod) * balance : BigInt(0)
            }

            const { delegatedVotes, delegatedVotePower } = await addDelegatedVotesReferendum(ctx, header.height, header.timestamp, referendum, nestedDelegations, vote)

            delegatedVotes.push(
                new ConvictionDelegatedVotes ({
                    id: `${count.toString().padStart(8, '0')}`,
                    voter,
                    createdAtBlock: header.height,
                    decision: vote.decision,
                    lockPeriod,
                    proposalIndex: referendum.index,
                    balance: voteBalance,
                    votingPower,
                    type: VoteType.ReferendumV2,
                    createdAt: new Date(header.timestamp),
                    delegatedTo: vote
                })
            )

            vote.delegatedVotingPower = vote.delegatedVotingPower ? delegatedVotePower + votingPower + vote.delegatedVotingPower : delegatedVotePower + votingPower
            vote.totalVotingPower = vote.selfVotingPower ? vote.delegatedVotingPower + vote.selfVotingPower : delegatedVotePower

            await ctx.store.save(vote)
            await ctx.store.insert(delegatedVotes)
        }
    }
}