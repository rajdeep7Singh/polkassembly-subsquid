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
    if (cancelled.v266.is(itemEvent)) {
        return cancelled.v266.decode(itemEvent)
    } else if (cancelled.v297.decode(itemEvent)) {
        return cancelled.v297.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): number {
    if (executed.v266.is(itemEvent)) {
        return executed.v266.decode(itemEvent)[0]
    } else if (executed.v293.is(itemEvent)) {
        return executed.v293.decode(itemEvent)[0]
    } else if (executed.v295.is(itemEvent)) {
        return executed.v295.decode(itemEvent)[0]
    } else if (executed.v297.is(itemEvent)) {
        return executed.v297.decode(itemEvent).refIndex
    } else if (executed.v299.is(itemEvent)) {
        return executed.v299.decode(itemEvent).refIndex
    } else if (executed.v300.is(itemEvent)) {
        return executed.v300.decode(itemEvent).refIndex
    } else if (executed.v302.is(itemEvent)) {
        return executed.v302.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v266.is(itemEvent)) {
        return notPassed.v266.decode(itemEvent)
    } else if (notPassed.v297.is(itemEvent)) {
        return notPassed.v297.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v266.is(itemEvent)) {
        return passed.v266.decode(itemEvent)
    } else if (passed.v297.is(itemEvent)) {
        return passed.v297.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageInvalidData {
    hash: string
    index: number
}

export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
    if (preimageInvalid.v266.is(itemEvent)) {
        const [hash, index] = preimageInvalid.v266.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageInvalid.v297.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageInvalid.v297.decode(itemEvent)
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
    if (preimageMissing.v266.is(itemEvent)) {
        const [hash, index] = preimageMissing.v266.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageMissing.v297.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageMissing.v297.decode(itemEvent)
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
    if (preimageNoted.v266.is(itemEvent)) {
        const [hash, provider, deposit] = preimageNoted.v266.decode(itemEvent)
        return {
            hash,
            provider: ss58codec.encode(decodeHex(provider)),
            deposit,
        }
    } else if (preimageNoted.v297.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v297.decode(itemEvent)
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
    if (preimageReaped.v266.is(itemEvent)) {
        const [hash, provider, deposit] = preimageReaped.v266.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageNoted.v297.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v297.decode(itemEvent)
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
    if (preimageUsed.v266.is(itemEvent)) {
        const [hash, provider, deposit] = preimageUsed.v266.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageUsed.v297.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageUsed.v297.decode(itemEvent)
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
    if (seconded.v299.is(itemEvent)) {
        const {seconder, propIndex} = seconded.v299.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}