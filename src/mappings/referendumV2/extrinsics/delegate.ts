
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { getDelegateData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { TooManyOpenDelegations, TooManyOpenVotes } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { addDelegatedVotesReferendumV2, getDelegations, removeVote } from './utils'
import { StandardVoteBalance, ConvictionVote, VoteType, VotingDelegation, Proposal, ProposalType, ConvictionDelegatedVotes, DelegationType, FlattenedConvictionVotes, VoteDecision } from '../../../model'
import { randomUUID } from 'crypto'
import { Call, ProcessorContext } from '../../../processor'
import { sendGovEvent } from '../../utils/proposals'
import { EGovEvent } from '../../../common/types'

export async function handleDelegate(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const { to, lockPeriod, balance, track } = getDelegateData(item)
    const toWallet = ss58codec.encode(to)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from){
        return
    }
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track, type: DelegationType.OpenGov } })

    if (delegations != null && delegations != undefined && delegations.length > 1) {
        ctx.log.warn(TooManyOpenDelegations(header.height, track, from))
    }

    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAtBlock: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })

    if (delegations.length > 0) {
        const delegation = delegations[0]
        delegation.endedAtBlock = header.height
        delegation.endedAt = new Date(header.timestamp)
        await ctx.store.save(delegation)
        for (let i = 0; i < ongoingReferenda.length; i++) {
            const referendum = ongoingReferenda[i]
            if(referendum.index || referendum.index === 0){
                await removeVote(ctx, from, referendum.index, header.height, header.timestamp, false)
            }
        }
    }

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`
    
    await ctx.store.insert(
        new VotingDelegation({
            id: randomUUID(),
            createdAtBlock: header.height,
            from: from,
            to: toWallet,
            balance,
            lockPeriod,
            type: DelegationType.OpenGov,
            track,
            extrinsicIndex,
            createdAt: new Date(header.timestamp),
        })
    )

    let votingPower = BigInt(0)
    const nestedDelegations = await getDelegations(ctx, from, track)
    
    let delegatedVotes = [];
    let flattenedVotes = [];
    let convictionVotes = []

    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index === undefined || referendum.index === null){
            continue
        }
        const votes = await ctx.store.find(ConvictionVote, { where: { voter: toWallet, proposalIndex: referendum.index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })

        if(votes) {
            if (votes.length > 1) {
                ctx.log.warn(TooManyOpenVotes(header.height, referendum.index, toWallet))
                continue
            }
            else if (votes.length === 0) {
                // ctx.log.warn(NoOpenVoteFound(header.height, referendum.index, toWallet))
                continue
            }
            const vote = votes[0]
            if(vote.decision != VoteDecision.abstain){
                try{
                    const voteBalance = new StandardVoteBalance({
                        value: balance,
                    })
                    const voter = from
                    if (lockPeriod === 0 && balance) {
                        votingPower = balance/BigInt(10)
                    }else{
                        votingPower = balance ? BigInt(lockPeriod) * balance : BigInt(0)
                    }
                    const { delegatedVotesNested, delegatedVotePower, flattenedVotesNested } = await addDelegatedVotesReferendumV2(ctx, header.height, header.timestamp, nestedDelegations, vote)
                    delegatedVotes.push(
                        new ConvictionDelegatedVotes ({
                            id: randomUUID(),
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
                        }), ...delegatedVotesNested
                    )
                    flattenedVotes.push(
                        new FlattenedConvictionVotes({
                            id: randomUUID(),
                            voter: voter,
                            parentVote: vote,
                            isDelegated: true,
                            delegatedTo: toWallet,
                            proposalIndex: referendum.index,
                            proposal: referendum,
                            createdAtBlock: header.height,
                            removedAtBlock: null,
                            createdAt: new Date(header.timestamp),
                            removedAt: null,
                            decision: vote.decision,
                            balance: voteBalance,
                            lockPeriod: lockPeriod,
                            type: VoteType.ReferendumV2,
                        }), ...flattenedVotesNested
                    )
                    vote.delegatedVotingPower = vote.delegatedVotingPower ? delegatedVotePower + votingPower + vote.delegatedVotingPower : delegatedVotePower + votingPower
                    vote.totalVotingPower = vote.selfVotingPower ? vote.delegatedVotingPower + vote.selfVotingPower : delegatedVotePower

                    convictionVotes.push(vote)
                }
                catch(e){
                    ctx.log.error(`Something went wrong at block ${header.height} in convictionVoting.delegate with error: ${e}`)
                }
            }
        }
    }
    await ctx.store.save(convictionVotes)
    await ctx.store.insert(delegatedVotes)
    await ctx.store.insert(flattenedVotes)

    await sendGovEvent(ctx, {
        event: EGovEvent.DELEGATED,
        address: from,
        addressTo: toWallet
    })
}