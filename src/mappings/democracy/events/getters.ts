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
import { Store } from '@subsquid/typeorm-store'
import {Event} from '../../../processor'

export function getCancelledData(itemEvent: Event): number {
    if (cancelled.v34.is(itemEvent)) {
        return cancelled.v34.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): number {
    if (executed.v34.is(itemEvent)) {
        return executed.v34.decode(itemEvent).refIndex
    } else if (executed.v35.is(itemEvent)) {
        return executed.v35.decode(itemEvent).refIndex
    } else if (executed.v36.is(itemEvent)) {
        return executed.v36.decode(itemEvent).refIndex
    }else {
        throw new UnknownVersionError(itemEvent.name)
    } 
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v34.is(itemEvent)) {
        return notPassed.v34.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v34.is(itemEvent)) {
        return passed.v34.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageInvalidData {
    hash: string
    index: number
}

export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
    if (preimageInvalid.v34.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageInvalid.v34.decode(itemEvent)
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
    if (preimageMissing.v34.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageMissing.v34.decode(itemEvent)
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
    if (preimageNoted.v34.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v34.decode(itemEvent)
        return {
            hash,
            provider,
            deposit
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

export function getPreimageReapedData(itemEvent: Event): PreimageReapedData {
    if (preimageReaped.v34.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageReaped.v34.decode(itemEvent)
        return {
            hash,
            provider,
            deposit
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

export function getPreimageUsedData(itemEvent: Event): PreimageUsedData {
    if (preimageUsed.v34.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageUsed.v34.decode(itemEvent)
        return {
            hash,
            provider,
            deposit
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
    if (seconded.v34.is(itemEvent)) {
        const {seconder, propIndex} = seconded.v34.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}