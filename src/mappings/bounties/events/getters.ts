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
    if (bountyAwarded.v268.is(itemEvent)) {
        const [index, beneficiary] = bountyAwarded.v268.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else if (bountyAwarded.v274.is(itemEvent)) {
        const { index, beneficiary } = bountyAwarded.v274.decode(itemEvent)
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
    if (bountyBecameActive.v268.is(itemEvent)) {
        const index = bountyBecameActive.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyBecameActive.v274.is(itemEvent)) {
        const { index } = bountyBecameActive.v274.decode(itemEvent)
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
    if (bountyCanceled.v268.is(itemEvent)) {
        const index = bountyCanceled.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyCanceled.v274.is(itemEvent)) {
        const { index } = bountyCanceled.v274.decode(itemEvent)
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
    if (bountyClaimed.v268.is(itemEvent)) {
        const [index, payout, beneficiary] = bountyClaimed.v268.decode(itemEvent)
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (bountyClaimed.v274.is(itemEvent)) {
        const { index, payout, beneficiary } = bountyClaimed.v274.decode(itemEvent)
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
    if (bountyExtended.v268.is(itemEvent)) {
        const index = bountyExtended.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyExtended.v274.is(itemEvent)) {
        const { index } = bountyExtended.v274.decode(itemEvent)
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
    if (bountyProposed.v268.is(itemEvent)) {
        const index = bountyProposed.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyProposed.v274.is(itemEvent)) {
        const { index } = bountyProposed.v274.decode(itemEvent)
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
    if (bountyRejected.v268.is(itemEvent)) {
        const [index] = bountyRejected.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyRejected.v274.is(itemEvent)) {
        const { index } = bountyRejected.v274.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
