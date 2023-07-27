
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { getDelegateData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { NoOpenVoteFound, TooManyOpenDelegations, TooManyOpenVotes } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { addOngoingReferendaDelegatedVotes, removeDelegatedVotesOngoingReferenda, removeVote } from './helpers'
import { StandardVoteBalance, VoteType, VotingDelegation, Proposal, ProposalType, Vote } from '../../../model'
import { randomUUID } from 'crypto'

export async function handleDelegate(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.delegate', { call: { args: true; origin: true}, extrinsic: true }>,
    header: SubstrateBlock): Promise<void> {
    if (!(item.call as any).success) return
    const { to, lockPeriod, balance } = getDelegateData(ctx, item.call)
    const toWallet = ss58codec.encode(to)
    let from = getOriginAccountId(item.call.origin)
    if(!from){
        from = getOriginAccountId(item.extrinsic.call.origin)
    }
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull()} })

    if (delegations != null && delegations != undefined && delegations.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenDelegations(header.height, from))
    }
    //get ongoingReferenda for track
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAtBlock: IsNull(), type: ProposalType.Referendum } })
    if (delegations.length > 0) {
        const delegation = delegations[0]
        delegation.endedAtBlock = header.height
        delegation.endedAt = new Date(header.timestamp)
        await ctx.store.save(delegation)
        //remove votes for ongoing referenda
        for (let i = 0; i < ongoingReferenda.length; i++) {
            const referendum = ongoingReferenda[i]
            if(referendum.index || referendum.index === 0){
                await removeVote(ctx, from, referendum.index, header.height, header.timestamp, false, true, delegation.to)
            }
        }
    }

    await removeDelegatedVotesOngoingReferenda(ctx, from, header.height, header.timestamp)

    await ctx.store.insert(
        new VotingDelegation({
            id: `${await ctx.store.count(VotingDelegation)}`,
            createdAtBlock: header.height,
            from: from,
            to: toWallet,
            balance,
            lockPeriod,
            createdAt: new Date(header.timestamp),
        })
    )
    // add votes for ongoing referenda for this track
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index === undefined || referendum.index === null){
            continue
        }
        const votes = await ctx.store.find(Vote, { where: { voter: toWallet, proposalIndex: referendum.index, removedAtBlock: IsNull() } })
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
            // const count = await getConvictionVotesCount(ctx, referendum.id)
            await ctx.store.insert(
                new Vote({
                    id: randomUUID(),
                    proposalIndex: referendum.index,
                    voter,
                    blockNumber: header.height,
                    decision: vote.decision,
                    lockPeriod,
                    proposal: referendum,
                    balance: voteBalance,
                    timestamp: new Date(header.timestamp),
                    delegatedTo: toWallet,
                    isDelegated: true,
                    type: VoteType.Referendum,
                })
            )
        }
    }
    await addOngoingReferendaDelegatedVotes(ctx, from, header)
}