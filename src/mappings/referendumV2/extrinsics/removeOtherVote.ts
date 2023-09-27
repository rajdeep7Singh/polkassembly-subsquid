import { Proposal, ProposalType } from '../../../model'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { ss58codec } from '../../../common/tools'
import { getRemoveOtherVoteData } from './getters'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { removeVote } from './helpers'
import { updateCurveData } from '../../../common/curveData'

export async function handleRemoveOtherVote(ctx: BatchContext<Store, unknown>,
    item: CallItem<'ConvictionVoting.remove_other_vote', { call: { args: true; origin: true } }>,
    header: SubstrateBlock): Promise<void> {
    if (!(item.call as any).success) return
    const { target, index } = getRemoveOtherVoteData(ctx, item.call)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2} })
    if (!referendum || referendum.index == undefined || referendum.index == null || referendum.trackNumber == undefined || referendum.trackNumber == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        return
    }
    if (!target){
        return
    } 
    const wallet = ss58codec.encode(target)
    await removeVote(ctx, wallet, index, header.height, referendum.index, true)
    await updateCurveData(ctx, header, referendum)

}