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
    DemocracySecondedEvent,
    DemocracyVotedEvent,
} from '../../../types/events'
import { Event } from '../../../types/support'
import { AccountVote } from '../../../types/v1001'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export function getCancelledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyCancelledEvent(ctx, itemEvent)
    if (event.isV900) {
        return event.asV900
    } else if (event.isV1201) {
        return event.asV1201.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyExecutedEvent(ctx, itemEvent)
    if (event.isV900) {
        return event.asV900[0]
    } else if (event.isV1201) {
        return event.asV1201.refIndex
    } else if (event.isV1300) {
        return event.asV1300.refIndex
    } else if (event.isV1401) {
        return event.asV1401.refIndex
    } else if (event.isV1606) {
        return event.asV1606.refIndex
    } else {
        const data = ctx._chain.decodeEvent(itemEvent)
        return data.refIndex
    }
}

export function getNotPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyNotPassedEvent(ctx, itemEvent)
    if (event.isV900) {
        return event.asV900
    } else if (event.isV1201) {
        return event.asV1201.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyPassedEvent(ctx, itemEvent)
    if (event.isV900) {
        return event.asV900
    } else if (event.isV1201) {
        return event.asV1201.refIndex
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
    if (event.isV900) {
        const [hash, index] = event.asV900
        return {
            hash,
            index,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, refIndex: index } = event.asV1201
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
    if (event.isV900) {
        const [hash, index] = event.asV900
        return {
            hash,
            index,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, refIndex: index } = event.asV1201
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
    if (event.isV900) {
        const [hash, provider, deposit] = event.asV900
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, who: provider, deposit } = event.asV1201
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
    if (event.isV900) {
        const [hash, provider, deposit] = event.asV900
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, provider, deposit } = event.asV1201
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
    if (event.isV900) {
        const [hash, provider, deposit] = event.asV900
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, provider, deposit } = event.asV1201
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
    if (event.isV1001) {
        const [seconder, propIndex] = event.asV1001
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    } else if (event.isV1201) {
        const { who: seconder, proposalIndex: propIndex } = event.asV1201
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    } else if (event.isV1300) {
        const { seconder, propIndex } = event.asV1300
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface DemocracyVotedData {
    accountId: Uint8Array
    refIndex: number
    vote: AccountVote
}

export function getDemocracyVotedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): DemocracyVotedData {
    const event = new DemocracyVotedEvent(ctx, itemEvent)
    if (event.isV1001) {
        const [accountId, refIndex, vote] = event.asV1001
        return {
            accountId,
            refIndex,
            vote,
        }
    } else if (event.isV1201) {
        const { who: accountId, refIndex, vote } = event.asV1201
        return {
            accountId,
            refIndex,
            vote,
        }
    } else if (event.isV1300) {
        const { voter: accountId, refIndex, vote } = event.asV1300
        return {
            accountId,
            refIndex,
            vote,
        }
    }else {
        throw new UnknownVersionError(event.constructor.name)
    }
}