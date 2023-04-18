import { toHex } from '@subsquid/substrate-processor'
import { AnnouncementType } from '../../../model'
import { createAnnouncements } from '../../utils/proposals'
import { getAnnouncedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { CID, digest, varint } from 'multiformats';

export async function handleAnnounced(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Alliance.Announced', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { announcementHash, codec, version} = getAnnouncedData(ctx, item.event)
    const hexHash = toHex(announcementHash.digest)
    
    let cid = null

    if(version && codec && announcementHash.digest){
        const bytes = announcementHash.digest;
        const codeLen = varint.encodingLength(Number(announcementHash.code));
        const sizeLen = varint.encodingLength(bytes.length);
        const encoded = new Uint8Array(codeLen + sizeLen + bytes.length);
        varint.encodeTo(Number(announcementHash.code), encoded, 0);
        varint.encodeTo(bytes.length, encoded, codeLen);
        encoded.set(bytes, codeLen + sizeLen);
        cid = CID.create( version == 'V1' ? 1 : 0, Number(codec), digest.decode(encoded)).toString()
    }
 
    await createAnnouncements(ctx, header, {
        hash: hexHash,
        codec: codec,
        version: version,
        announcement: announcementHash,
        code: announcementHash.code,
        cid: cid ? cid.toString() : undefined,
    },  AnnouncementType.Announcement)
}