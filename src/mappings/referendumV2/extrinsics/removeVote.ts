import { Proposal, ConvictionVote, ProposalType } from '../../../model'
import { getOriginAccountId } from '../../../common/tools'
import { getRemoveVoteData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { getAllNestedDelegations, removeDelegatedVotesReferendum, removeVote } from './helpers'
import { CallHandlerContext } from '../../types/contexts'

export async function handleRemoveVote(ctx: CallHandlerContext): Promise<void> {
    if (!(ctx.call as any).success) return
    const { index } = getRemoveVoteData(ctx)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2 } })
    if (!referendum || !referendum.index || !referendum.trackNumber) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < ctx.block.height) {
        //ref already ended probably removing vote for democracy_unlock
        return
    }
    const wallet = getOriginAccountId(ctx.call.origin)
    await removeVote(ctx, wallet, index, ctx.block.height, ctx.block.timestamp, true)
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet, referendum.trackNumber)
    await removeDelegatedVotesReferendum(ctx, ctx.block.height, ctx.block.timestamp, index, nestedDelegations)
}
