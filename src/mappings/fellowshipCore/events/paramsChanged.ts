import { getParamsChangedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { createMetaActions } from '../../utils/proposals'
import { ActivityType } from '../../../model'

export async function handleParamsChanged(ctx: ProcessorContext<Store>, item: Event, header: Block) {
    const params = getParamsChangedData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await createMetaActions(ctx, header, extrinsicIndex, {
        activityType: ActivityType.ParamsChanged,
        params,
    })
}