import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageUsedData } from './getters'

import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageUsed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageUsedData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updatePreimageStatus(ctx, header, hash,{
        status: ProposalStatus.Used,
        extrinsicIndex
    })
}
