import { UnknownVersionError } from '../../../common/errors'
import {
    TipsNewTipEvent,
    TipsTipClosedEvent,
    TipsTipRetractedEvent,
    TipsTipSlashedEvent,
    TreasuryNewTipEvent,
    TreasuryTipClosedEvent,
    TreasuryTipRetractedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ClosedData {
    hash: Uint8Array
    reward: bigint
}

export function getClosedDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): ClosedData {
    const event = new TreasuryTipClosedEvent(ctx, itemEvent)
    if (event.isV0) {
        const [hash, , reward] = event.asV0
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ClosedData {
    const event = new TipsTipClosedEvent(ctx, itemEvent)
    if (event.isV28) {
        const [hash, , reward] = event.asV28
        return {
            hash,
            reward,
        }
    } else if (event.isV9140) {
        const { tipHash: hash, payout: reward } = event.asV9140
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

export function getNewTipDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): NewTipData {
    const event = new TreasuryNewTipEvent(ctx, itemEvent)
    if (event.isV0) {
        const hash = event.asV0
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getNewTipData(ctx: BatchContext<Store, unknown>, itemEvent: Event): NewTipData {
    const event = new TipsNewTipEvent(ctx, itemEvent)
    if (event.isV28) {
        const hash = event.asV28
        return {
            hash,
        }
    } else if (event.isV9140) {
        const { tipHash: hash } = event.asV9140
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

export function getRectractedDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): RectractedData {
    const event = new TreasuryTipRetractedEvent(ctx, itemEvent)
    if (event.isV0) {
        const hash = event.asV0
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getRectractedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): RectractedData {
    const event = new TipsTipRetractedEvent(ctx, itemEvent)
    if (event.isV28) {
        const hash = event.asV28
        return {
            hash,
        }
    } else if (event.isV9140) {
        const { tipHash: hash } = event.asV9140
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
    if (event.isV28) {
        const [hash] = event.asV28
        return {
            hash,
        }
    } else if (event.isV9140) {
        const { tipHash: hash } = event.asV9140
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
