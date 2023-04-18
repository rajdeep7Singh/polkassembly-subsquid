import { toHex } from '@subsquid/substrate-processor'
import { AnnouncementType } from '../../../model'
import { createAnnouncements } from '../../utils/proposals'
import { getAnnouncedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '../../../common/tools'

export async function handleAnnounced(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Alliance.Announced', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { announcementHash, codec, version} = getAnnouncedData(ctx, item.event)
    const hexHash = toHex(announcementHash.digest)
 
    await createAnnouncements(ctx, header, {
        hash: hexHash,
        codec: codec,
        version: version,
        announcement: announcementHash,
        code: announcementHash.code,
    },  AnnouncementType.Announcement)
}