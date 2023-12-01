import { toHex } from '@subsquid/substrate-processor'
import { getUnscrupulousItemRemovedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { Announcements, AnnouncementType } from '../../../model'

export async function handleUnscrupulousItemRemoved(ctx: ProcessorContext<Store>, itemEvent: Event, header: any) {
    const data = getUnscrupulousItemRemovedData(ctx, itemEvent)
    let type = null;
    let announcementData = null;
    for(const item of data){
        const hexHash = item.value
        if(item.__kind == 'AccountId'){
            type = AnnouncementType.Account
        }
        else if(item.__kind == 'Website'){
            type = AnnouncementType.Website
        }
        if(type){
            announcementData = await ctx.store.get(Announcements, { where: { hash: hexHash, type }})
        }
        else{
            announcementData = await ctx.store.get(Announcements, { where: { hash: hexHash }})

        }
        if(!announcementData) {
            ctx.log.warn(`Announcement with hash ${hexHash} not found`)
            return
        }
        announcementData.isRemoved = true
        announcementData.updatedAt = new Date(header.timestamp)
        announcementData.updatedAtBlock = header.height

        await ctx.store.save(announcementData)

    }

}