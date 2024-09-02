import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus } from '../../../model'
import { updatePreimageStatusV2 } from '../../utils/proposals'
import { getPreimageRequestedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handlePreimageV2Requested(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageRequestedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updatePreimageStatusV2(ctx, header, hash, extrinsicIndex, {
        status: ProposalStatus.Requested,
    })
}