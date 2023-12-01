import { toHex } from '@subsquid/substrate-processor'
import { AnnouncementType } from '../../../model'
import { createAnnouncements } from '../../utils/proposals'
import { getAnnouncedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { CID, digest, varint } from 'multiformats';

export async function handleAnnounced(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { announcementHash, codec, version} = getAnnouncedData(ctx, item)
    const hexHash = announcementHash.digest
    
    let cid = null

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    if(version && codec && announcementHash.digest){
        const bytes = announcementHash.digest;
        const codeLen = varint.encodingLength(Number(announcementHash.code));
        const sizeLen = varint.encodingLength(bytes.length);
        const encoded = new Uint8Array(codeLen + sizeLen + bytes.length);
        varint.encodeTo(Number(announcementHash.code), encoded, 0);
        varint.encodeTo(bytes.length, encoded, codeLen);
        encoded.set(Buffer.from(bytes), codeLen + sizeLen);
        cid = CID.create( version == 'V1' ? 1 : 0, Number(codec), digest.decode(encoded)).toString()
    }
 
    await createAnnouncements(ctx, header, {
        hash: hexHash,
        codec: codec,
        version: version,
        announcement: announcementHash,
        code: announcementHash.code,
        extrinsicIndex,
        cid: cid ? cid.toString() : undefined,
    },  AnnouncementType.Announcement)
}