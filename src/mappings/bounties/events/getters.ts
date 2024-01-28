import { UnknownVersionError } from '../../../common/errors'
import {
    bountyAwarded,
    bountyBecameActive,
    bountyCanceled,
    bountyClaimed,
    bountyExtended,
    bountyProposed,
    bountyRejected
} from '../../../types/bounties/events'
import {Event} from '../../../processor'

interface BountyAwardedData {
    index: number
    beneficiary: string
}

export function getBountyAwardedData(itemEvent: Event): BountyAwardedData {
    if (bountyAwarded.v35.is(itemEvent)) {
        const { index, beneficiary } = bountyAwarded.v35.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    }  else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyBacameActiveData {
    index: number
}

export function getBountyBacameActiveData(itemEvent: Event): BountyBacameActiveData {
    if (bountyBecameActive.v35.is(itemEvent)) {
        const { index } = bountyBecameActive.v35.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyCanceledData {
    index: number
}

export function getBountyCanceledData(itemEvent: Event): BountyCanceledData {
    if (bountyCanceled.v35.is(itemEvent)) {
        const { index } = bountyCanceled.v35.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyClaimedData {
    index: number
    payout: bigint
    beneficiary: string
}

export function getBountyClaimedData(itemEvent: Event): BountyClaimedData {
    if (bountyClaimed.v35.is(itemEvent)) {
        const { index, payout, beneficiary } = bountyClaimed.v35.decode(itemEvent)
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyExtendedData {
    index: number
}

export function getBountyExtendedData(itemEvent: Event): BountyExtendedData {
    if (bountyExtended.v35.is(itemEvent)) {
        const { index } = bountyExtended.v35.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyProposedData {
    index: number
}

export function getBountyProposedData(itemEvent: Event): BountyProposedData {
    if (bountyProposed.v35.is(itemEvent)) {
        const { index } = bountyProposed.v35.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyRejectedData {
    index: number
}

export function getBountyRejectedData(itemEvent: Event): BountyRejectedData {
    if (bountyRejected.v35.is(itemEvent)) {
        const { index } = bountyRejected.v35.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
