import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { getDelegateData } from './getters'
import { CallHandlerContext } from '../../types/contexts'
import { NoOpenVoteFound, TooManyOpenDelegations, TooManyOpenVotes } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { addOngoingReferendaDelegatedVotes, removeDelegatedVotesOngoingReferenda, removeVote } from './helpers'
import { StandardVoteBalance, ConvictionVote, VoteType, VotingDelegation, Proposal, ProposalType } from '../../../model'
import { getConvictionVotesCount } from '../../utils/votes'

export async function handleDelegate(ctx: CallHandlerContext): Promise<void> {
    if (!(ctx.call as any).success) return
    const { to, lockPeriod, balance, track } = getDelegateData(ctx)
    const toWallet = ss58codec.encode(to)
    const from = getOriginAccountId(ctx.call.origin)
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track } })

    if (delegations.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenDelegations(ctx.block.height, track, from))
    }
    //get ongoingReferenda for track
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAtBlock: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })
    if (delegations.length > 0) {
        const delegation = delegations[0]
        delegation.endedAtBlock = ctx.block.height
        delegation.endedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(delegation)
        //remove votes for ongoing referenda
        for (let i = 0; i < ongoingReferenda.length; i++) {
            const referendum = ongoingReferenda[i]
            if(referendum.index || referendum.index === 0){
                await removeVote(ctx, from, referendum.index, ctx.block.height, ctx.block.timestamp, false, true, delegation.to)
            }
        }
    }

    await removeDelegatedVotesOngoingReferenda(ctx, from, ctx.block.height, ctx.block.timestamp, track)

    await ctx.store.insert(
        new VotingDelegation({
            id: `${await ctx.store.count(VotingDelegation)}`,
            createdAtBlock: ctx.block.height,
            from: from,
            to: toWallet,
            balance,
            lockPeriod,
            track,
            createdAt: new Date(ctx.block.timestamp),
        })
    )
    // add votes for ongoing referenda for this track
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index === undefined || referendum.index === null){
            continue
        }
        const votes = await ctx.store.find(ConvictionVote, { where: { voter: toWallet, proposalIndex: referendum.index, removedAtBlock: IsNull() } })
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(ctx.block.height, referendum.index, toWallet))
            return
        }
        else if (votes.length === 0) {
            //to wallet didn't vote yet
            ctx.log.warn(NoOpenVoteFound(ctx.block.height, referendum.index, toWallet))
            return
        }
        const vote = votes[0]
        const voteBalance = new StandardVoteBalance({
            value: balance,
        })
        const voter = from
        const count = await getConvictionVotesCount(ctx, referendum.id)
        console.log('count', count)
        await ctx.store.insert(
            new ConvictionVote({
                id: `${referendum.id}-${count.toString().padStart(8, '0')}`,
                proposalIndex: referendum.index,
                voter,
                createdAtBlock: ctx.block.height,
                decision: vote.decision,
                lockPeriod,
                proposal: referendum,
                balance: voteBalance,
                createdAt: new Date(ctx.block.timestamp),
                delegatedTo: toWallet,
                isDelegated: true,
                type: VoteType.ReferendumV2,
            })
        )
    }
    await addOngoingReferendaDelegatedVotes(ctx, from, ctx.block, track)
}