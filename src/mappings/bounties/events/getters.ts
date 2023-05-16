import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesBountyAwardedEvent,
    BountiesBountyBecameActiveEvent,
    BountiesBountyCanceledEvent,
    BountiesBountyClaimedEvent,
    BountiesBountyExtendedEvent,
    BountiesBountyProposedEvent,
    BountiesBountyRejectedEvent
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface BountyAwardedData {
    index: number
    beneficiary: Uint8Array
}

export function getBountyAwardedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyAwardedData {
    const event = new BountiesBountyAwardedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { index, beneficiary } = event.asV2
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyBacameActiveData {
    index: number
}

export function getBountyBacameActiveData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyBacameActiveData {
    const event = new BountiesBountyBecameActiveEvent(ctx, itemEvent)
    if (event.isV2) {
        const { index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyCanceledData {
    index: number
}

export function getBountyCanceledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyCanceledData {
    const event = new BountiesBountyCanceledEvent(ctx, itemEvent)
    if (event.isV2) {
        const { index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyClaimedData {
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

export function getBountyClaimedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyClaimedData {
    const event = new BountiesBountyClaimedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { index, payout, beneficiary } = event.asV2
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyExtendedData {
    index: number
}

export function getBountyExtendedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyExtendedData {
    const event = new BountiesBountyExtendedEvent(ctx,  itemEvent)
    if (event.isV2) {
        const { index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyProposedData {
    index: number
}

export function getBountyProposedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyProposedData {
    const event = new BountiesBountyProposedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyRejectedData {
    index: number
}

export function getBountyRejectedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyRejectedData {
    const event = new BountiesBountyRejectedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
