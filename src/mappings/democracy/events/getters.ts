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
    if (cancelled.v9.decode(itemEvent)) {
        return cancelled.v9.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): number {
    if (executed.v9.is(itemEvent)) {
        return executed.v9.decode(itemEvent).refIndex
    } else if (executed.v13.is(itemEvent)) {
        return executed.v13.decode(itemEvent).refIndex
    } else if (executed.v20.is(itemEvent)) {
        return executed.v20.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v9.is(itemEvent)) {
        return notPassed.v9.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v9.is(itemEvent)) {
        return passed.v9.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageInvalidData {
    hash: string
    index: number
}

export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
    if (preimageInvalid.v9.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageInvalid.v9.decode(itemEvent)
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
    if (preimageMissing.v9.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageMissing.v9.decode(itemEvent)
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
    if (preimageNoted.v9.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v9.decode(itemEvent)
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
    if (preimageNoted.v9.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v9.decode(itemEvent)
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
    if (preimageUsed.v9.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageUsed.v9.decode(itemEvent)
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
    if (seconded.v13.is(itemEvent)) {
        const {seconder, propIndex} = seconded.v13.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}