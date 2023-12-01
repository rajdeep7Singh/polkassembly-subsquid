
import { UnknownVersionError } from '../../../common/errors'
import {
    announced, 
    announcementRemoved, 
    unscrupulousItemAdded, 
    unscrupulousItemRemoved,
} from '../../../types/alliance/events'
import * as v9290 from '../../../types/collectivesV9290'
import { Store } from '@subsquid/typeorm-store'
import { Multihash } from '../../../types/collectivesV1000000'
import { ProcessorContext, Event } from '../../../processor'

interface announcedData {
    announcementHash: Multihash,
    codec: bigint,
    version: string,
}

export function getAnnouncedData(ctx: ProcessorContext<Store>, itemEvent: Event): announcedData  {
    if (announced.collectivesV9290.is(itemEvent)) {
        const { announcement } = announced.collectivesV9290.decode(itemEvent)
        return {
            announcementHash: announcement.hash,
            codec: announcement.codec,
            version: announcement.version.__kind,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getAnnouncementRemovedData(ctx: ProcessorContext<Store>, itemEvent: Event): announcedData {
    if (announcementRemoved.collectivesV9290.is(itemEvent)) {
        const { announcement } = announcementRemoved.collectivesV9290.decode(itemEvent)
        return {
            announcementHash: announcement.hash,
            codec: announcement.codec,
            version: announcement.version.__kind,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export type UnscrupulousItem = UnscrupulousItem_AccountId | UnscrupulousItem_Website

export interface UnscrupulousItem_AccountId {
    __kind: 'AccountId'
    value: Uint8Array
}

export interface UnscrupulousItem_Website {
    __kind: 'Website'
    value: Uint8Array
}


export function getUnscrupulousItemAddedData(ctx: ProcessorContext<Store>, itemEvent: Event): v9290.UnscrupulousItem[] {
    if (unscrupulousItemAdded.collectivesV9290.is(itemEvent)) {
        return unscrupulousItemAdded.collectivesV9290.decode(itemEvent).items

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getUnscrupulousItemRemovedData(ctx: ProcessorContext<Store>, itemEvent: Event): v9290.UnscrupulousItem[] {
    if (unscrupulousItemRemoved.collectivesV9290.is(itemEvent)) {
        return unscrupulousItemRemoved.collectivesV9290.decode(itemEvent).items

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}