
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { getDelegateData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { TooManyOpenDelegations, TooManyOpenVotes } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { addDelegatedVotesReferendumV2, getDelegations, removeVote } from './utils'
import { StandardVoteBalance, ConvictionVote, VoteType, VotingDelegation, Proposal, ProposalType, ConvictionDelegatedVotes, DelegationType, FlattenedConvictionVotes, VoteDecision } from '../../../model'
import { randomUUID } from 'crypto'

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
            createdAt: new Date(header.timestamp),
        })
    )
    if(header.height == 18337452){
        ctx.log.warn(`Culprit block ${header.height} added delegation from address ${from}, to address ${toWallet}`)
        for (let i = 0; i < ongoingReferenda.length; i++) {
            const referendum = ongoingReferenda[i]
            ctx.log.warn(`Culprit block ${header.height} active referendum ${referendum.index}`)
        }
    }
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
        if(header.height == 18337452){
            ctx.log.warn(`Culprit block ${header.height} at refIndex: ${referendum.index} looked for active vote and found ${votes} from wallet ${toWallet} because of delegation from ${from}`)
        }
        if(votes){
            if (votes.length > 1) {
                ctx.log.warn(TooManyOpenVotes(header.height, referendum.index, toWallet))
                return
            }
            else if (votes.length === 0) {
                // ctx.log.warn(NoOpenVoteFound(header.height, referendum.index, toWallet))
                return
            }
            const vote = votes[0]
            if(header.height == 18337452){
                ctx.log.warn(`Culprit block ${header.height} refIndex: ${referendum.index} found active vote ${vote.id} with decision ${vote.decision} from wallet ${toWallet} because of delegation from ${from}`)
            }
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
                    if(header.height == 18337452){
                        ctx.log.warn(`Culprit block ${header.height} refIndex: ${referendum.index} calculated initial voting power from wallet ${toWallet} because of delegation from ${from}`)
                    }
                    const { delegatedVotesNested, delegatedVotePower, flattenedVotesNested } = await addDelegatedVotesReferendumV2(ctx, header.height, header.timestamp, nestedDelegations, vote)
                    if(header.height == 18337452){
                        ctx.log.warn(`Culprit block ${header.height} refIndex: ${referendum.index} after function values delegatedVotes ${delegatedVotes}, delegatedVotePower ${delegatedVotePower}, flattenedVotes ${flattenedVotes} from wallet ${toWallet} because of delegation from ${from}`)
                    }
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
                    if(header.height == 18337452){
                        ctx.log.warn(`Culprit block ${header.height} refIndex: ${referendum.index} added parent delegated votes ${delegatedVotes} from wallet ${toWallet} because of delegation from ${from}`)
                    }

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
                    if(header.height == 18337452){
                        ctx.log.warn(`Culprit block ${header.height} refIndex: ${referendum.index} added flattened votes ${flattenedVotes} from wallet ${toWallet} because of delegation from ${from}`)
                    }
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
}