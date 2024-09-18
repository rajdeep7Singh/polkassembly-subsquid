import { UnknownVersionError } from '../../../common/errors'
import {
    cancelled,
    notPassed,
    passed,
    seconded,
} from '../../../types/democracy/events'
import { Event } from '../../../processor'
import { ss58codec } from '../../../common/tools'
import { decodeHex } from '@subsquid/substrate-processor'

export function getCancelledData(itemEvent: Event): number {
    if (cancelled.v2100.decode(itemEvent)) {
        return cancelled.v2100.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

// export function getExecutedData(itemEvent: Event): number {
//     if (executed.v0.is(itemEvent)) {
//         return executed.v0.decode(itemEvent)[0]
//     } else if (executed.v9090.is(itemEvent)) {
//         return executed.v9090.decode(itemEvent)[0]
//     } else if (executed.v9110.is(itemEvent)) {
//         return executed.v9110.decode(itemEvent)[0]
//     } else if (executed.v9140.is(itemEvent)) {
//         return executed.v9140.decode(itemEvent).refIndex
//     } else if (executed.v9170.is(itemEvent)) {
//         return executed.v9170.decode(itemEvent).refIndex
//     } else if (executed.v9190.is(itemEvent)) {
//         return executed.v9190.decode(itemEvent).refIndex
//     } else {
//         throw new UnknownVersionError(itemEvent.name)
//     }
// }

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v2100.is(itemEvent)) {
        return notPassed.v2100.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v2100.is(itemEvent)) {
        return passed.v2100.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

// export interface PreimageInvalidData {
//     hash: string
//     index: number
// }

// export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
//     if (preimageInvalid.v0.is(itemEvent)) {
//         const [hash, index] = preimageInvalid.v0.decode(itemEvent)
//         return {
//             hash,
//             index,
//         }
//     } else if (preimageInvalid.v9140.is(itemEvent)) {
//         const { proposalHash: hash, refIndex: index } = preimageInvalid.v9140.decode(itemEvent)
//         return {
//             hash,
//             index,
//         }
//     } else {
//         throw new UnknownVersionError(itemEvent.name)
//     }
// }

// export interface PreimageMissingData {
//     hash: string
//     index: number
// }

// export function getPreimageMissingData(itemEvent: Event): PreimageMissingData {
//     if (preimageMissing.v0.is(itemEvent)) {
//         const [hash, index] = preimageMissing.v0.decode(itemEvent)
//         return {
//             hash,
//             index,
//         }
//     } else if (preimageMissing.v9140.is(itemEvent)) {
//         const { proposalHash: hash, refIndex: index } = preimageMissing.v9140.decode(itemEvent)
//         return {
//             hash,
//             index,
//         }
//     } else {
//         throw new UnknownVersionError(itemEvent.name)
//     }
// }

// interface PreimageNotedData {
//     hash: string
//     provider: string
//     deposit: bigint
// }

// export function getPreimageNotedData(itemEvent: Event): PreimageNotedData {
//     if (preimageNoted.v0.is(itemEvent)) {
//         const [hash, provider, deposit] = preimageNoted.v0.decode(itemEvent)
//         return {
//             hash,
//             provider: ss58codec.encode(decodeHex(provider)),
//             deposit,
//         }
//     } else if (preimageNoted.v9140.is(itemEvent)) {
//         const { proposalHash: hash, who: provider, deposit } = preimageNoted.v9140.decode(itemEvent)
//         return {
//             hash,
//             provider: ss58codec.encode(decodeHex(provider)),
//             deposit,
//         }
//     } else {
//         throw new UnknownVersionError(itemEvent.name)
//     }
// }

// export interface PreimageReapedData {
//     hash: string
//     provider: string
//     deposit: bigint
// }

// export function getPreimageReapedData(itemEvent: Event): PreimageNotedData {
//     if (preimageReaped.v0.is(itemEvent)) {
//         const [hash, provider, deposit] = preimageReaped.v0.decode(itemEvent)
//         return {
//             hash,
//             provider,
//             deposit,
//         }
//     } else if (preimageNoted.v9140.is(itemEvent)) {
//         const { proposalHash: hash, who: provider, deposit } = preimageNoted.v9140.decode(itemEvent)
//         return {
//             hash,
//             provider,
//             deposit,
//         }
//     } else {
//         throw new UnknownVersionError(itemEvent.name)
//     }
// }

// export interface PreimageUsedData {
//     hash: string
//     provider: string
//     deposit: bigint
// }

// export function getPreimageUsedData(itemEvent: Event): PreimageNotedData {
//     if (preimageUsed.v0.is(itemEvent)) {
//         const [hash, provider, deposit] = preimageUsed.v0.decode(itemEvent)
//         return {
//             hash,
//             provider,
//             deposit,
//         }
//     } else if (preimageUsed.v9140.is(itemEvent)) {
//         const { proposalHash: hash, provider, deposit } = preimageUsed.v9140.decode(itemEvent)
//         return {
//             hash,
//             provider,
//             deposit,
//         }
//     } else {
//         throw new UnknownVersionError(itemEvent.name)
//     }
// }

interface DemocracySecondedData {
    accountId: string
    refIndex: number
}

export function getDemocracySecondedData(itemEvent: Event): DemocracySecondedData {
    if (seconded.v2100.is(itemEvent)) {
        const {seconder, propIndex} = seconded.v2100.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}