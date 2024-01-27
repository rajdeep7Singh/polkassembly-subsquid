import { UnknownVersionError } from '../../../common/errors'
import {
    cancelled,
    executed,
    notPassed,
    passed,
    preimageInvalid,
    preimageMissing,
    preimageNoted,
    preimageReaped,
    preimageUsed,
    seconded,
} from '../../../types/democracy/events'
import { Event } from '../../../processor'
import { ss58codec } from '../../../common/tools'
import { decodeHex } from '@subsquid/substrate-processor'

export function getCancelledData(itemEvent: Event): number {
    if (cancelled.v200.decode(itemEvent)) {
        return cancelled.v200.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): number {
    if (executed.v200.is(itemEvent)) {
        return executed.v200.decode(itemEvent).refIndex
    } else if (executed.v1000.is(itemEvent)) {
        return executed.v1000.decode(itemEvent).refIndex
    } else if (executed.v1200.is(itemEvent)) {
        return executed.v1200.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v200.is(itemEvent)) {
        return notPassed.v200.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v200.is(itemEvent)) {
        return passed.v200.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageInvalidData {
    hash: string
    index: number
}

export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
    if (preimageInvalid.v200.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageInvalid.v200.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageMissingData {
    hash: string
    index: number
}

export function getPreimageMissingData(itemEvent: Event): PreimageMissingData {
    if (preimageMissing.v200.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageMissing.v200.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface PreimageNotedData {
    hash: string
    provider: string
    deposit: bigint
}

export function getPreimageNotedData(itemEvent: Event): PreimageNotedData {
    if (preimageNoted.v200.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v200.decode(itemEvent)
        return {
            hash,
            provider: ss58codec.encode(decodeHex(provider)),
            deposit,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageReapedData {
    hash: string
    provider: string
    deposit: bigint
}

export function getPreimageReapedData(itemEvent: Event): PreimageNotedData {
    if (preimageNoted.v200.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v200.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageUsedData {
    hash: string
    provider: string
    deposit: bigint
}

export function getPreimageUsedData(itemEvent: Event): PreimageNotedData {
    if (preimageUsed.v200.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageUsed.v200.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface DemocracySecondedData {
    accountId: string
    refIndex: number
}

export function getDemocracySecondedData(itemEvent: Event): DemocracySecondedData {
    if (seconded.v1000.is(itemEvent)) {
        const {seconder, propIndex} = seconded.v1000.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}