import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageReapedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageReaped(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.PreimageReaped', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    let { hash } = getPreimageReapedData(ctx, item.event)

    if(hash instanceof Uint8Array) {
        hash = toHex(hash)
    }

    await updatePreimageStatus(ctx, header, hash,{
        status: ProposalStatus.Invalid,
    })
}
