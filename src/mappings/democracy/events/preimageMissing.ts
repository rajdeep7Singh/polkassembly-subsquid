import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageMissingData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handlePreimageMissing(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageMissingData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updatePreimageStatus(ctx, header, hash, extrinsicIndex, {
        status: ProposalStatus.Missing,
    })
}
