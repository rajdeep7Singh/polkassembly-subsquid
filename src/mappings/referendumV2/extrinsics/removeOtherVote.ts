import { Proposal, ProposalType } from '../../../model'
import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '../../../common/tools'
import { getRemoveOtherVoteData } from './getters'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { removeVote } from './utils'
import { updateCurveData } from '../../../common/curveData'
import { Call, ProcessorContext } from '../../../processor'

export async function handleRemoveOtherVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const { target, index } = getRemoveOtherVoteData(item)
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