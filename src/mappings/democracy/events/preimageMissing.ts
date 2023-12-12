import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageMissingData } from './getters'

import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageMissing(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageMissingData(item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updatePreimageStatus(ctx, header, hash,{
        status: ProposalStatus.Missing,
        extrinsicIndex
    })
}
