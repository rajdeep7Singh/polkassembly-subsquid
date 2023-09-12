import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getProposalCancelledData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleProposalCancelled(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.PropoaslCanceled', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const index = getProposalCancelledData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.DemocracyProposal, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
    })
}
