import { UnknownVersionError } from '../../../common/errors'
import {
    bountyAwarded,
    bountyBecameActive,
    bountyCanceled,
    bountyClaimed,
    bountyExtended,
    bountyProposed,
    bountyRejected,
} from '../../../types/bounties/events'
import { ProcessorContext, Event } from '../../../processor'

import { Store } from '@subsquid/typeorm-store'

interface BountyAwardedData {
    index: number
    beneficiary: string
}

export function getBountyAwardedData(ctx: ProcessorContext<Store>, itemEvent: Event): BountyAwardedData {
    if (bountyAwarded.v40.is(itemEvent)) {
        const { index, beneficiary } = bountyAwarded.v40.decode(itemEvent)
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

export function getBountyBacameActiveData(ctx: ProcessorContext<Store>, itemEvent: Event): BountyBacameActiveData {
    if (bountyBecameActive.v40.is(itemEvent)) {
        const { index } = bountyBecameActive.v40.decode(itemEvent)
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

export function getBountyCanceledData(ctx: ProcessorContext<Store>, itemEvent: Event): BountyCanceledData {
    if (bountyCanceled.v40.is(itemEvent)) {
        const { index } = bountyCanceled.v40.decode(itemEvent)
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

export function getBountyClaimedData(ctx: ProcessorContext<Store>, itemEvent: Event): BountyClaimedData {
    if (bountyClaimed.v40.is(itemEvent)) {
        const { index, payout, beneficiary } = bountyClaimed.v40.decode(itemEvent)
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

export function getBountyExtendedData(ctx: ProcessorContext<Store>, itemEvent: Event): BountyExtendedData {
    if (bountyExtended.v40.is(itemEvent)) {
        const { index } = bountyExtended.v40.decode(itemEvent)
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

export function getBountyProposedData(ctx: ProcessorContext<Store>, itemEvent: Event): BountyProposedData {
    if (bountyProposed.v40.is(itemEvent)) {
        const { index } = bountyProposed.v40.decode(itemEvent)
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

export function getBountyRejectedData(ctx: ProcessorContext<Store>, itemEvent: Event): BountyRejectedData {
    if (bountyRejected.v40.is(itemEvent)) {
        const { index } = bountyExtended.v40.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
