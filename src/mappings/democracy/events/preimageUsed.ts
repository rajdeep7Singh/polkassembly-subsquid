import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageUsedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageUsed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.PreimageUsed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    let { hash } = getPreimageUsedData(ctx, item.event)
    
    if(hash instanceof Uint8Array) {
        hash = toHex(hash)
    }
    
    await updatePreimageStatus(ctx, header, hash, {
        status: ProposalStatus.Invalid,
    })
}
