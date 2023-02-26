import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getClosedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleClosed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'TechnicalCommittee.Closed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    let hash = getClosedData(ctx, item.event)
    
    if(hash instanceof Uint8Array) {
        hash = toHex(hash)
    }

    await updateProposalStatus(ctx, header, hash, ProposalType.TechCommitteeProposal, {
        isEnded: true,
        status: ProposalStatus.Closed,
    })
}