import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageInvalidData } from './getters'

import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageInvalid(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageInvalidData(item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updatePreimageStatus(ctx, header, hash,{
        status: ProposalStatus.Invalid,
        extrinsicIndex
    })
}
