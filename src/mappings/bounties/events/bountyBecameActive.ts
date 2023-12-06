import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyBacameActiveData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleBecameActive(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Bounties.BountyBecameActive', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getBountyBacameActiveData(ctx, item.event)

    await updateProposalStatus(ctx, header,  index, ProposalType.Bounty, {
        status: ProposalStatus.Active,
    })
}