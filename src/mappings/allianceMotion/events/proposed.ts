import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus } from '../../../model'
import { createAllianceMotion } from '../../utils/proposals'
import { getApprovedData, getProposedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '../../../common/tools'

export async function handleProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'AllianceMotion.Proposed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { account, proposalIndex, proposalHash, threshold} = getProposedData(ctx, item.event)

    const hexHash = toHex(proposalHash)
    
    await createAllianceMotion(ctx, header, {
        index: proposalIndex,
        status: ProposalStatus.Proposed,
        hash: hexHash,
        threshold: threshold,
        proposer: ss58codec.encode(account),
    })
}