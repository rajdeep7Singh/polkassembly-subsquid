import { Proposal, ProposalType } from '../../../model'
import { Store } from '@subsquid/typeorm-store'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { getOriginAccountId } from '../../../common/tools'
import { getRemoveVoteData } from './getters'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { getAllNestedDelegations, removeDelegatedVotesReferendum, removeVote } from './helpers'
// import { CallHandlerContext } from '../../types/contexts'
// import { updateCurveData } from '../../../common/curveData'

export async function handleRemoveVote(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.remove_vote', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) : Promise<void> {
    if (!(item.call as any).success) return
    const { index } = getRemoveVoteData(ctx, item.call)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!referendum || referendum.index == undefined || referendum.index == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        //ref already ended probably removing vote for democracy_unlock
        return
    }
    const wallet = getOriginAccountId(item.call.origin)
    await removeVote(ctx, wallet, index, header.height, header.timestamp, true)
    // await updateCurveData(ctx, header, referendum)
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet)
    await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, index, nestedDelegations)
}