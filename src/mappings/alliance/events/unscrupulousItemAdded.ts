import { toHex } from '@subsquid/substrate-processor'
import { AnnouncementType } from '../../../model'
import { createAnnouncements } from '../../utils/proposals'
import { getUnscrupulousItemAddedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleUnscrupulousItemAdded(ctx: ProcessorContext<Store>, itemEvent: Event, header: Block) {
    const data = getUnscrupulousItemAddedData(ctx, itemEvent)
    let type = null;
    for(const item of data){
        const hexHash = item.value
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