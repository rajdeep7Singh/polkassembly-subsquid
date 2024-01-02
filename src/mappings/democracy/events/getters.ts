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

export function getCancelledData(itemEvent: Event): number {
    if (cancelled.v273.is(itemEvent)) {
        return cancelled.v273.decode(itemEvent)
    } else if (cancelled.v274.decode(itemEvent)) {
        return cancelled.v274.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): number {
    if (executed.v273.is(itemEvent)) {
        return executed.v273.decode(itemEvent)[0]
    } else if (executed.v274.is(itemEvent)) {
        return executed.v274.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v273.is(itemEvent)) {
        return notPassed.v273.decode(itemEvent)
    } else if (notPassed.v274.is(itemEvent)) {
        return notPassed.v274.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v273.is(itemEvent)) {
        return passed.v273.decode(itemEvent)
    } else if (passed.v274.is(itemEvent)) {
        return passed.v274.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageInvalidData {
    hash: string
    index: number
}

export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
    if (preimageInvalid.v273.is(itemEvent)) {
        const [hash, index] = preimageInvalid.v273.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageInvalid.v274.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageInvalid.v274.decode(itemEvent)
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
    if (preimageMissing.v273.is(itemEvent)) {
        const [hash, index] = preimageMissing.v273.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageMissing.v274.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageMissing.v274.decode(itemEvent)
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
    if (preimageNoted.v273.is(itemEvent)) {
        const [hash, provider, deposit] = preimageNoted.v273.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageNoted.v274.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v274.decode(itemEvent)
        return {
            hash,
            provider,
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
    if (preimageReaped.v273.is(itemEvent)) {
        const [hash, provider, deposit] = preimageReaped.v273.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageNoted.v274.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v274.decode(itemEvent)
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
    if (preimageUsed.v273.is(itemEvent)) {
        const [hash, provider, deposit] = preimageUsed.v273.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageUsed.v274.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageUsed.v274.decode(itemEvent)
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
    if (seconded.v274.is(itemEvent)) {
        const {seconder, propIndex} = seconded.v274.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}