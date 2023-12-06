import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyCanceledData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleCanceled(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Bounties.BountyCanceled', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getBountyCanceledData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Cancelled,
        isEnded: true,
    })
}