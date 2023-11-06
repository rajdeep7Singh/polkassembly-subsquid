import { ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event, Block } from '../../../processor'
import { updateProposalStatus } from '../../utils/proposals'
import { getCancelledData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleCancelled(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const index = getCancelledData(ctx, item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
        extrinsicIndex,
    })
}