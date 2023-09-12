import { UnknownVersionError } from '../../../common/errors'
import {
    DemocracyCancelledEvent,
    DemocracyProposalCanceledEvent,
    DemocracyExecutedEvent,
    DemocracyNotPassedEvent,
    DemocracyPassedEvent,
    DemocracyPreimageInvalidEvent,
    DemocracyPreimageMissingEvent,
    DemocracyPreimageNotedEvent,
    DemocracyPreimageReapedEvent,
    DemocracyPreimageUsedEvent,
    DemocracySecondedEvent,
} from '../../../types/events'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export function getCancelledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyCancelledEvent(ctx, itemEvent)
    if (event.isV266) {
        return event.asV266
    } else if (event.isV297) {
        return event.asV297.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalCancelledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyProposalCanceledEvent(ctx, itemEvent)
    if (event.isV43000) {
        return event.asV43000.propIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyExecutedEvent(ctx, itemEvent)
    if (event.isV266) {
        return event.asV266[0]
    } else if (event.isV293) {
        return event.asV293[0]
    } else if (event.isV295) {
        return event.asV295[0]
    }  else if (event.isV297) {
        return event.asV295[0]
    }  else if (event.isV297) {
        return event.asV297.refIndex
    }  else if (event.isV299) {
        return event.asV299.refIndex
    }  else if (event.isV300) {
        return event.asV300.refIndex
    }  else if (event.isV302) {
        return event.asV302.refIndex
    } else {
        const data = ctx._chain.decodeEvent(itemEvent)
        return data.refIndex
    }
}

export function getNotPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyNotPassedEvent(ctx, itemEvent)
    if (event.isV266) {
        return event.asV266
    } else if (event.isV297) {
        return event.asV297.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyPassedEvent(ctx, itemEvent)
    if (event.isV266) {
        return event.asV266
    } else if (event.isV297) {
        return event.asV297.refIndex
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
    if (event.isV266) {
        const [hash, index] = event.asV266
        return {
            hash,
            index,
        }
    } else if (event.isV297) {
        const { proposalHash: hash, refIndex: index } = event.asV297
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
    if (event.isV266) {
        const [hash, index] = event.asV266
        return {
            hash,
            index,
        }
    } else if (event.isV297) {
        const { proposalHash: hash, refIndex: index } = event.asV297
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
    if (event.isV266) {
        const [hash, provider, deposit] = event.asV266
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV297) {
        const { proposalHash: hash, who: provider, deposit } = event.asV297
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
    if (event.isV266) {
        const [hash, provider, deposit] = event.asV266
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV297) {
        const { proposalHash: hash, provider, deposit } = event.asV297
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
    if (event.isV266) {
        const [hash, provider, deposit] = event.asV266
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV297) {
        const { proposalHash: hash, provider, deposit } = event.asV297
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

export function getDemocracySecondedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): DemocracySecondedData {
    const event = new DemocracySecondedEvent(ctx, itemEvent)
    if (event.isV299) {
        const {seconder, propIndex} = event.asV299
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}