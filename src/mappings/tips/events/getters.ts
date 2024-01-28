import { UnknownVersionError } from '../../../common/errors'
import {
    newTip,
    tipClosed,
    tipRetracted,
    tipSlashed
} from '../../../types/tips/events'
import {
    tipClosed as TipsClosedEvent,
    tipRetracted as TipsRetractedEvent,
    newTip as TipsNewTipEvent,
} from '../../../types/treasury/events'
import { Event } from '../../../processor'
interface ClosedData {
    hash: string
    reward: bigint
}

export function getClosedDataOld(itemEvent: Event): ClosedData {
    if (TipsClosedEvent.v266.is(itemEvent)) {
        const [hash, , reward] = TipsClosedEvent.v266.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): ClosedData {
    if (tipClosed.v283.is(itemEvent)) {
        const [hash, , reward] = tipClosed.v283.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else if (tipClosed.v297.is(itemEvent)) {
        const { tipHash: hash, payout: reward } = tipClosed.v297.decode(itemEvent)
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

export function getNewTipDataOld(itemEvent: Event): NewTipData {
    if (TipsNewTipEvent.v266.is(itemEvent)) {
        const hash = TipsNewTipEvent.v266.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNewTipData(itemEvent: Event): NewTipData {
    if (newTip.v283.is(itemEvent)) {
        const hash = newTip.v283.decode(itemEvent)
        return {
            hash,
        }
    } else if (newTip.v297.is(itemEvent)) {
        const { tipHash: hash } = newTip.v297.decode(itemEvent)
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

export function getRectractedDataOld(itemEvent: Event): RectractedData {
    if (TipsRetractedEvent.v266.is(itemEvent)) {
        const hash = TipsRetractedEvent.v266.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRectractedData(itemEvent: Event): RectractedData {
    if (tipRetracted.v283.is(itemEvent)) {
        const hash = tipRetracted.v283.decode(itemEvent)
        return {
            hash,
        }
    } else if (tipRetracted.v297.is(itemEvent)) {
        const { tipHash: hash } = tipRetracted.v297.decode(itemEvent)
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
    if (tipSlashed.v283.is(itemEvent)) {
        const [hash] = tipSlashed.v283.decode(itemEvent)
        return {
            hash,
        }
    } else if (tipSlashed.v297.is(itemEvent)) {
        const { tipHash: hash } = tipSlashed.v297.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
