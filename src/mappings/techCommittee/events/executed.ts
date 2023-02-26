import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getExecutedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'


export async function handleExecuted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'TechnicalCommittee.Executed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    let hash = getExecutedData(ctx, item.event)
    
    if(hash instanceof Uint8Array) {
        hash = toHex(hash)
    }

    await updateProposalStatus(ctx, header, hash, ProposalType.TechCommitteeProposal, {
        isEnded: true,
        status: ProposalStatus.Executed,
    })
}