import { UnknownVersionError } from '../../../common/errors'
import {
    TipsNewTipEvent,
    TipsTipClosedEvent,
    TipsTipRetractedEvent,
    TipsTipSlashedEvent
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ClosedData {
    hash: Uint8Array
    reward: bigint
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ClosedData {
    const event = new TipsTipClosedEvent(ctx, itemEvent)
    if (event.isV16) {
        const [ hash, who, reward ] = event.asV16
        return {
            hash,
            reward,
        }
    } else if (event.isV38) {
        const { tipHash: hash, payout: reward } = event.asV38
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface NewTipData {
    hash: Uint8Array
}

export function getNewTipData(ctx: BatchContext<Store, unknown>, itemEvent: Event): NewTipData {
    const event = new TipsNewTipEvent(ctx, itemEvent)
    if (event.isV16) {
        const hash = event.asV16
        return {
            hash,
        }
    }else if (event.isV38) {
        const { tipHash: hash } = event.asV38
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface RectractedData {
    hash: Uint8Array
}

export function getRectractedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): RectractedData {
    const event = new TipsTipRetractedEvent(ctx, itemEvent)
    if (event.isV16) {
        const hash  = event.asV16
        return {
            hash,
        }
    } else if (event.isV38) {
        const { tipHash: hash } = event.asV38
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface SlashedData {
    hash: Uint8Array
}

export function getSlashedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): SlashedData {
    const event = new TipsTipSlashedEvent(ctx, itemEvent)
    if (event.isV16) {
        const [hash ] = event.asV16
        return {
            hash,
        }
    } else if (event.isV38) {
        const { tipHash: hash } = event.asV38
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
