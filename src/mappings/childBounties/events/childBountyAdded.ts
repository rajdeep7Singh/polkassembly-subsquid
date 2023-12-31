
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createChildBounty } from '../../utils/proposals'
import { getChildBountyAddedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'ChildBounties.Added', { event: { args: true; extrinsic: { hash: true, call: {origin: true} } } }>,
    header: SubstrateBlock) {
    const { parentIndex, childIndex } = getChildBountyAddedData(ctx, item.event)

    const storageData = await storage.childBounties.getChildBounties(ctx, parentIndex, childIndex, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.ChildBounty, childIndex))
        return
    }
    const origin = item.event.extrinsic?.call?.origin
    let proposer;
    if(origin){
        proposer = getOriginAccountId(origin)
    }

    const { value, fee, description, curatorDeposit } = storageData

    await createChildBounty(ctx, header, {
        index: childIndex,
        parentBountyIndex: parentIndex,
        status: ProposalStatus.Added,
        proposer,
        reward: value,
        fee: fee,
        curatorDeposit: curatorDeposit,
        description: description,
    })
}