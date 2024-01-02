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
    if (cancelled.v25.is(itemEvent)) {
        return cancelled.v25.decode(itemEvent)
    } else if (cancelled.v10400.decode(itemEvent)) {
        return cancelled.v10400.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): number {
    if (executed.v25.is(itemEvent)) {
        return executed.v25.decode(itemEvent)[0]
    } else if (executed.v2800.is(itemEvent)) {
        return executed.v2800.decode(itemEvent)[0]
    } else if (executed.v10500.is(itemEvent)) {
        return executed.v10500.decode(itemEvent).refIndex
    } else if (executed.v10400.is(itemEvent)) {
        return executed.v10400.decode(itemEvent).refIndex
    } else if (executed.v10700.is(itemEvent)) {
        return executed.v10700.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v25.is(itemEvent)) {
        return notPassed.v25.decode(itemEvent)
    } else if (notPassed.v10400.is(itemEvent)) {
        return notPassed.v10400.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v25.is(itemEvent)) {
        return passed.v25.decode(itemEvent)
    } else if (passed.v10400.is(itemEvent)) {
        return passed.v10400.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageInvalidData {
    hash: string
    index: number
}

export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
    if (preimageInvalid.v25.is(itemEvent)) {
        const [hash, index] = preimageInvalid.v25.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageInvalid.v10400.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageInvalid.v10400.decode(itemEvent)
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
    if (preimageMissing.v25.is(itemEvent)) {
        const [hash, index] = preimageMissing.v25.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageMissing.v10400.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageMissing.v10400.decode(itemEvent)
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
    if (preimageNoted.v25.is(itemEvent)) {
        const [hash, provider, deposit] = preimageNoted.v25.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageNoted.v10400.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v10400.decode(itemEvent)
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
    if (preimageReaped.v25.is(itemEvent)) {
        const [hash, provider, deposit] = preimageReaped.v25.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageNoted.v10400.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v10400.decode(itemEvent)
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
    if (preimageUsed.v25.is(itemEvent)) {
        const [hash, provider, deposit] = preimageUsed.v25.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageUsed.v10400.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageUsed.v10400.decode(itemEvent)
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
    if (seconded.v10500.is(itemEvent)) {
        const {seconder, propIndex} = seconded.v10500.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}