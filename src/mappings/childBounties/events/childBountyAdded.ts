
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createChildBounty } from '../../utils/proposals'
import { getChildBountyAddedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { parentIndex, childIndex } = getChildBountyAddedData(item)

    const storageData = await storage.childBounties.getChildBounties(ctx, parentIndex, childIndex, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.ChildBounty, childIndex))
        return
    }

    const origin = item.extrinsic?.call?.origin
    let proposer;
    if(origin){
        proposer = getOriginAccountId(origin)
    }

    const extrinsicIndex = `${header.height}-${item.index}`


    const { value, fee, description, curatorDeposit } = storageData

    await createChildBounty(ctx, header, extrinsicIndex, {
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