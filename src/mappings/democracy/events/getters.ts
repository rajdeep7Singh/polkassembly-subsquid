import { UnknownVersionError } from '../../../common/errors'
import {
    DemocracyCancelledEvent,
    DemocracyExecutedEvent,
    DemocracyNotPassedEvent,
    DemocracyPassedEvent,
    DemocracyPreimageInvalidEvent,
    DemocracyPreimageMissingEvent,
    DemocracyPreimageNotedEvent,
    DemocracyPreimageReapedEvent,
    DemocracyPreimageUsedEvent,
} from '../../../types/events'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export function getCancelledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyCancelledEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyExecutedEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200[0]
    } else {
        const data = ctx._chain.decodeEvent(itemEvent)
        return data.refIndex
    }
}

export function getNotPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyNotPassedEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyPassedEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageInvalidData {
    hash: Uint8Array
    index: number
}

export function getPreimageInvalidData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageInvalidData {
    const event = new DemocracyPreimageInvalidEvent(ctx, itemEvent)
    if (event.isV200) {
        const [hash, index] = event.asV200
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageMissingData {
    hash: Uint8Array
    index: number
}

export function getPreimageMissingData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageMissingData {
    const event = new DemocracyPreimageMissingEvent(ctx, itemEvent)
    if (event.isV200) {
        const [hash, index] = event.asV200
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface PreimageNotedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageNotedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageNotedData {
    const event = new DemocracyPreimageNotedEvent(ctx, itemEvent)
    if (event.isV200) {
        const [hash, provider, deposit] = event.asV200
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageReapedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageReapedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageReapedData {
    const event = new DemocracyPreimageReapedEvent(ctx, itemEvent)
    if (event.isV200) {
        const [hash, provider, deposit] = event.asV200
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageUsedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageUsedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageUsedData {
    const event = new DemocracyPreimageUsedEvent(ctx, itemEvent)
    if (event.isV200) {
        const [hash, provider, deposit] = event.asV200
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface DemocracySecondedData {
    accountId: Uint8Array
    refIndex: number
}

// export function getDemocracySecondedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): DemocracySecondedData {
//     const event = new DemocracySecondedEvent(ctx, itemEvent)
//     if (event.isV9160) {
//         const {seconder, propIndex} = event.asV9160
//         return {
//             accountId: seconder,
//             refIndex: propIndex
//         }
//     }
//     else {
//         throw new UnknownVersionError(event.constructor.name)
//     }
// }