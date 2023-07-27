import { Proposal, ConvictionVote, ProposalType, VoteType, Vote } from '../../../model'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { ss58codec } from '../../../common/tools'
import { getRemoveOtherVoteData } from './getters'
import { IsNull } from 'typeorm'
import { NoOpenVoteFound, TooManyOpenVotes } from '../../../common/errors'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { getAllNestedDelegations, removeDelegatedVotesReferendum } from './helpers'
// import { updateCurveData } from '../../../common/curveData'

export async function handleRemoveOtherVote(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.remove_other_vote', { call: { args: true; origin: true } }>,
    header: SubstrateBlock): Promise<void> {
    if (!(item.call as any).success) return
    const { target, index } = getRemoveOtherVoteData(ctx, item.call)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum} })
    if (!referendum || referendum.index == undefined || referendum.index == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        //ref already ended probably removing vote for democracy_unlock
        return
    }
    if (!target){
        return
    } 
    const wallet = ss58codec.encode(target)
    const votes = await ctx.store.find(Vote, { where: { voter: wallet, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.Referendum } })
    if(votes){
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(header.height, index, wallet))
        }
        else if (votes.length === 0) {
            ctx.log.warn(NoOpenVoteFound(header.height, index, wallet))
            return
        }
        const vote = votes[0]
        vote.removedAtBlock = header.height
        vote.removedAt = new Date(header.timestamp)
        await ctx.store.save(vote)
    }
    // await updateCurveData(ctx, header, referendum)
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet)
    await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, index, nestedDelegations)
}