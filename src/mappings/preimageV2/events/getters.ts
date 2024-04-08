import { UnknownVersionError } from '../../../common/errors'
import {
    noted,
    requested,
    cleared
} from '../../../types/preimage/events'
import { Event } from '../../../processor'
interface PreimageNotedData {
    hash: string
}

export function getPreimageNotedData(itemEvent: Event): PreimageNotedData {
    if (noted.v13.is(itemEvent)) {
        const { hash } = noted.v13.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageRequestedData {
    hash: string
}

export function getPreimageRequestedData(itemEvent: Event): PreimageRequestedData {
    if (requested.v13.is(itemEvent)) {
        const {hash} = requested.v13.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageClearedData {
    hash: Uint8Array
}

export function getPreimageClearedData(itemEvent: Event): PreimageRequestedData {
    if (cleared.v13.is(itemEvent)) {
        const {hash} = cleared.v13.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}