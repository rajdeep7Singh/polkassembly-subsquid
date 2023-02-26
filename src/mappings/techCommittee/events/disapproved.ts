import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDissaprovedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleDisapproved(ctx: BatchContext<Store, unknown>,
    item: EventItem<'TechnicalCommittee.Disapproved', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    let hash = getDissaprovedData(ctx, item.event)

    if(hash instanceof Uint8Array) {
        hash = toHex(hash)
    }
    await updateProposalStatus(ctx, header, hash, ProposalType.TechCommitteeProposal, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
    })
}