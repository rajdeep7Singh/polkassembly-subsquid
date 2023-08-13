import { EventHandlerContext } from '../../types/contexts'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getStatusData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleStatusChange(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Pips.ProposalStateUpdated', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const {index, status} = getStatusData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, {
        status,
        isEnded: true ? [ProposalStatus.Executed, ProposalStatus.Rejected, ProposalStatus.Closed].includes(status as ProposalStatus): undefined,
    })
}