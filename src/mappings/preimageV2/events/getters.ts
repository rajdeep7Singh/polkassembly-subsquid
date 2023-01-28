import { UnknownVersionError } from '../../../common/errors'
import {
    PreimageNotedEvent,
    PreimageRequestedEvent,
    PreimageClearedEvent
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface PreimageNotedData {
    hash: Uint8Array
}

export function getPreimageNotedData(ctx: EventContext): PreimageNotedData {
    const event = new PreimageNotedEvent(ctx)
    if (event.isV1900) {
        const { hash } = event.asV1900
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageRequestedData {
    hash: Uint8Array
}

export function getPreimageRequestedData(ctx: EventContext): PreimageRequestedData {
    const event = new PreimageRequestedEvent(ctx)
    if (event.isV1900) {
        const {hash} = event.asV1900
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageClearedData {
    hash: Uint8Array
}

export function getPreimageClearedData(ctx: EventContext): PreimageClearedData {
    const event = new PreimageClearedEvent(ctx)
    if (event.isV1900) {
        const {hash} = event.asV1900
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}