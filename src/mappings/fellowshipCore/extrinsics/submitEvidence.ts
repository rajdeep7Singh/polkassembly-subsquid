
import { ActivityType } from '../../../model'
import { createMetaActions } from '../../utils/proposals'
import { getEvidenceData } from './getters'
import { ProcessorContext, Call, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { getOriginAccountId, ss58codec } from '../../../common/tools'

export async function handleEvidenceSubmission(ctx: ProcessorContext<Store>,
    item: Call,
    header: Block) {
    if (!(item as any).success) return
    const who = getOriginAccountId(item.origin)
    if(!who){
        return;
    }
    const { wish, evidence } = getEvidenceData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await createMetaActions(ctx, header, extrinsicIndex, {
        who: ss58codec.encode(who),
        wish,
        evidence,
        activityType: ActivityType.EvidenceSubmitted
    })
}