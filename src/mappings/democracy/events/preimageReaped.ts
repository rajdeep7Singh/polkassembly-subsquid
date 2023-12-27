import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageReapedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handlePreimageReaped(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageReapedData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updatePreimageStatus(ctx, header, hash, extrinsicIndex, {
        status: ProposalStatus.Reaped,
    })
}
