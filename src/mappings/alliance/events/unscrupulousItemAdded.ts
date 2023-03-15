import { toHex } from '@subsquid/substrate-processor'
import { AnnouncementType } from '../../../model'
import { createAnnouncements } from '../../utils/proposals'
import { getUnscrupulousItemAddedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleUnscrupulousItemAdded(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Alliance.UnscrupulousItemAdded', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const data = getUnscrupulousItemAddedData(ctx, item.event)
    let type = null;
    for(const item of data){
        const hexHash = toHex(item.value)
        if(item.__kind == 'AccountId'){
            type = AnnouncementType.Account
        }
        else if(item.__kind == 'Website'){
            type = AnnouncementType.Website
        }
        await createAnnouncements(ctx, header, {
            hash: hexHash,
        },  type)

    }
}