
import { UnknownVersionError } from '../../../common/errors'
import {
    AllianceAnnouncedEvent, 
    AllianceAnnouncementRemovedEvent, 
    AllianceUnscrupulousItemAddedEvent, 
    AllianceUnscrupulousItemRemovedEvent,
} from '../../../types/events'
import * as v9290 from '../../../types/v9370'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { Multihash } from '../../../types/v9290'

interface announcedData {
    announcementHash: Multihash,
    codec: bigint,
    version: string,
}

export function getAnnouncedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): announcedData  {
    const event = new AllianceAnnouncedEvent(ctx, itemEvent)
    if (event.isV9290) {
        const { announcement } = event.asV9290
        return {
            announcementHash: announcement.hash,
            codec: announcement.codec,
            version: announcement.version.__kind,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getAnnouncementRemovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): announcedData {
    const event = new AllianceAnnouncementRemovedEvent(ctx, itemEvent)
    if (event.isV9290) {
        const { announcement } = event.asV9290
        return {
            announcementHash: announcement.hash,
            codec: announcement.codec,
            version: announcement.version.__kind,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
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


export function getUnscrupulousItemAddedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): v9290.UnscrupulousItem[] {
    const event = new AllianceUnscrupulousItemAddedEvent(ctx, itemEvent)
    if (event.isV9290) {
        return event.asV9290.items

    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getUnscrupulousItemRemovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): v9290.UnscrupulousItem[] {
    const event = new AllianceUnscrupulousItemRemovedEvent(ctx, itemEvent)
    if (event.isV9290) {
        return event.asV9290.items

    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}