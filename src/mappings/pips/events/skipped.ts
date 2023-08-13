import { ProposalStatus } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getPipSkippedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handlePipSkipped(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Pips.PipSkipped', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const {index } = getPipSkippedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, {
        status: ProposalStatus.Skipped,
    })
}