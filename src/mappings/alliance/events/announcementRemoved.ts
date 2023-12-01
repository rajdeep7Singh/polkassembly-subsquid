import { toHex } from '@subsquid/substrate-processor'
import { Announcements, ProposalStatus, StatusHistory } from '../../../model'
import { getAnnouncementRemovedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto'

export async function handleAnnouncementRemoved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { announcementHash } = getAnnouncementRemovedData(ctx, item)

    const hexHash = announcementHash.digest
    
    const announcementData = await ctx.store.get(Announcements, { where: { hash: hexHash } })

    if(!announcementData) {
        ctx.log.warn(`Announcement with hash ${hexHash} not found`)
        return
    }

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    announcementData.isRemoved = true
    announcementData.updatedAt = new Date(header.timestamp)
    announcementData.updatedAtBlock = header.height
    announcementData.status = ProposalStatus.Removed

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: announcementData.updatedAtBlock ? header.timestamp : null,
            timestamp: announcementData.updatedAt,
            status: announcementData.status,
            extrinsicIndex,
            announcement: announcementData,
        })
    )
    

    await ctx.store.save(announcementData)

}