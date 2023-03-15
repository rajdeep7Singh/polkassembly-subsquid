import { toHex } from '@subsquid/substrate-processor'
import { getUnscrupulousItemRemovedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { Announcements, AnnouncementType } from '../../../model'

export async function handleUnscrupulousItemRemoved(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Alliance.UnscrupulousItemRemoved', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const data = getUnscrupulousItemRemovedData(ctx, item.event)
    let type = null;
    let announcementData = null;
    for(const item of data){
        const hexHash = toHex(item.value)
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