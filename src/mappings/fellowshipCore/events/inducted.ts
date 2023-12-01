import { getInductedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { createMetaActions } from '../../utils/proposals'
import { ActivityType } from '../../../model'
import { ss58codec } from '../../../common/tools'

export async function handleInducted(ctx: ProcessorContext<Store>, item: Event, header: Block) {
    const { who } = getInductedData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`
    if(!who){
        return;
    }

    await createMetaActions(ctx, header, extrinsicIndex, {
        who: ss58codec.encode(who),
        activityType: ActivityType.Inducted
    })
}