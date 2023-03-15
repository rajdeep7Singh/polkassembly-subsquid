import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDisapprovedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleDisApproved(ctx: BatchContext<Store, unknown>,
    item: EventItem<'AllianceMotion.Disapproved', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const hash = getDisapprovedData(ctx, item.event)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.AllianceMotion, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
    })
}