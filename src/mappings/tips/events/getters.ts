import { UnknownVersionError } from '../../../common/errors'
import {
    newTip,
    tipClosed,
    tipRetracted,
    tipSlashed
} from '../../../types/tips/events'

import { Event } from '../../../processor'
interface ClosedData {
    hash: string
    reward: bigint
}


export function getClosedData(itemEvent: Event): ClosedData {
    if (tipClosed.v10700.is(itemEvent)) {
        const { tipHash: hash, payout: reward } = tipClosed.v10700.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface NewTipData {
    hash: string
}

export function getNewTipData(itemEvent: Event): NewTipData {
    if (newTip.v10700.is(itemEvent)) {
        const { tipHash: hash } = newTip.v10700.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface RectractedData {
    hash: string
}

export function getRectractedData(itemEvent: Event): RectractedData {
    if (tipRetracted.v10700.is(itemEvent)) {
        const { tipHash: hash } = tipRetracted.v10700.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface SlashedData {
    hash: string
}

export function getSlashedData(itemEvent: Event): SlashedData {
    if (tipSlashed.v10700.is(itemEvent)) {
        const { tipHash: hash } = tipSlashed.v10700.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
