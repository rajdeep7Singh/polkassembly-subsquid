import { UnknownVersionError } from '../../../common/errors'
import {
    bountyExtended as TreasuryBountyExtendedEvent,
    bountyBecameActive as TreasuryBountyBecameActiveEvent,
    bountyCanceled as TreasuryBountyCanceledEvent,
    bountyAwarded as TreasuryBountyAwardedEvent,
    bountyClaimed as TreasuryBountyClaimedEvent,
    bountyProposed as TreasuryBountyProposedEvent,
    bountyRejected as TreasuryBountyRejectedEvent,
} from '../../../types/treasury/events'
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
    if (bountyAwarded.v283.is(itemEvent)) {
        const [index, beneficiary] = bountyAwarded.v283.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else if (bountyAwarded.v297.is(itemEvent)) {
        const { index, beneficiary } = bountyAwarded.v297.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    }  else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyAwardedDataOld(itemEvent: Event): BountyAwardedData {
    if (TreasuryBountyAwardedEvent.v266.is(itemEvent)) {
        const [index, beneficiary] = TreasuryBountyAwardedEvent.v266.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyBacameActiveData {
    index: number
}

export function getBountyBacameActiveDataOld(itemEvent: Event): BountyBacameActiveData {
    if (TreasuryBountyBecameActiveEvent.v266.is(itemEvent)) {
        const index = TreasuryBountyBecameActiveEvent.v266.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyBacameActiveData(itemEvent: Event): BountyBacameActiveData {
    if (bountyBecameActive.v283.is(itemEvent)) {
        const index = bountyBecameActive.v283.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyBecameActive.v297.is(itemEvent)) {
        const { index } = bountyBecameActive.v297.decode(itemEvent)
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

export function getBountyCanceledDataOld(itemEvent: Event): BountyCanceledData {
    if (TreasuryBountyCanceledEvent.v266.is(itemEvent)) {
        const index = TreasuryBountyCanceledEvent.v266.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyCanceledData(itemEvent: Event): BountyCanceledData {
    if (bountyCanceled.v283.is(itemEvent)) {
        const index = bountyCanceled.v283.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyCanceled.v297.is(itemEvent)) {
        const { index } = bountyCanceled.v297.decode(itemEvent)
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

export function getBountyClaimedDataOld(itemEvent: Event): BountyClaimedData {
    if (TreasuryBountyClaimedEvent.v266.is(itemEvent)) {
        const [index, payout, beneficiary] = TreasuryBountyClaimedEvent.v266.decode(itemEvent)
        return {
            index,
            beneficiary,
            payout,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyClaimedData(itemEvent: Event): BountyClaimedData {
    if (bountyClaimed.v283.is(itemEvent)) {
        const [index, payout, beneficiary] = bountyClaimed.v283.decode(itemEvent)
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (bountyClaimed.v297.is(itemEvent)) {
        const { index, payout, beneficiary } = bountyClaimed.v297.decode(itemEvent)
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

export function getBountyExtendedDataOld(itemEvent: Event): BountyExtendedData {
    if (TreasuryBountyExtendedEvent.v266.is(itemEvent)) {
        const index = TreasuryBountyExtendedEvent.v266.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyExtendedData(itemEvent: Event): BountyExtendedData {
    if (bountyExtended.v283.is(itemEvent)) {
        const index = bountyExtended.v283.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyExtended.v297.is(itemEvent)) {
        const { index } = bountyExtended.v297.decode(itemEvent)
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

export function getBountyProposedDataOld(itemEvent: Event): BountyProposedData {
    if (TreasuryBountyProposedEvent.v266.is(itemEvent)) {
        const index = TreasuryBountyProposedEvent.v266.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyProposedData(itemEvent: Event): BountyProposedData {
    if (bountyProposed.v283.is(itemEvent)) {
        const index = bountyProposed.v283.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyProposed.v297.is(itemEvent)) {
        const { index } = bountyProposed.v297.decode(itemEvent)
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

export function getBountyRejectedDataOld(itemEvent: Event): BountyRejectedData {
    if (TreasuryBountyRejectedEvent.v266.is(itemEvent)) {
        const [index] = TreasuryBountyRejectedEvent.v266.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyRejectedData(itemEvent: Event): BountyRejectedData {
    if (bountyRejected.v283.is(itemEvent)) {
        const [index] = bountyRejected.v283.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyRejected.v297.is(itemEvent)) {
        const { index } = bountyRejected.v297.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
