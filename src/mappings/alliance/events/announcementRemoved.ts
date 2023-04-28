import { toHex } from '@subsquid/substrate-processor'
import { Announcements, ProposalStatus, StatusHistory } from '../../../model'
import { getAnnouncementRemovedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto'

export async function handleAnnouncementRemoved(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Alliance.AnnouncementRemoved', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { announcementHash } = getAnnouncementRemovedData(ctx, item.event)

    const hexHash = toHex(announcementHash.digest)
    
    const announcementData = await ctx.store.get(Announcements, { where: { hash: hexHash } })

    if(!announcementData) {
        ctx.log.warn(`Announcement with hash ${hexHash} not found`)
        return
    }

    announcementData.isRemoved = true
    announcementData.updatedAt = new Date(header.timestamp)
    announcementData.updatedAtBlock = header.height
    announcementData.status = ProposalStatus.Removed

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: announcementData.updatedAtBlock,
            timestamp: announcementData.updatedAt,
            status: announcementData.status,
            announcement: announcementData,
        })
    )
    

    await ctx.store.save(announcementData)

}