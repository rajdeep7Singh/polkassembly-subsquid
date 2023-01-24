import { Proposal, ConvictionVote, ProposalType, VoteType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { getRemoveOtherVoteData } from './getters'
import { IsNull } from 'typeorm'
import { NoOpenVoteFound, TooManyOpenVotes } from '../../../common/errors'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { getAllNestedDelegations, removeDelegatedVotesReferendum } from './helpers'
import { CallHandlerContext } from '../../types/contexts'

export async function handleRemoveOtherVote(ctx: CallHandlerContext): Promise<void> {
    if (!(ctx.call as any).success) return
    const { target, index } = getRemoveOtherVoteData(ctx)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2} })
    if (!referendum || referendum.index == undefined || referendum.index == null || referendum.trackNumber == undefined || referendum.trackNumber == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < ctx.block.height) {
        //ref already ended probably removing vote for democracy_unlock
        return
    }
    if (!target){
        return
    } 
    const wallet = ss58codec.encode(target)
    const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })
    if (votes.length > 1) {
        ctx.log.warn(TooManyOpenVotes(ctx.block.height, index, wallet))
    }
    else if (votes.length === 0) {
        ctx.log.warn(NoOpenVoteFound(ctx.block.height, index, wallet))
        return
    }
    const vote = votes[0]
    vote.removedAtBlock = ctx.block.height
    vote.removedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(vote)
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet, referendum.trackNumber)
    await removeDelegatedVotesReferendum(ctx, ctx.block.height, ctx.block.timestamp, index, nestedDelegations)
}
