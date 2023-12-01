import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updatePreimageStatusV2 } from '../../utils/proposals'
import { getPreimageRequestedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageV2Requested(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { hash } = getPreimageRequestedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updatePreimageStatusV2(ctx, header, hash, {
        status: ProposalStatus.Requested,
        extrinsicIndex
    })
}