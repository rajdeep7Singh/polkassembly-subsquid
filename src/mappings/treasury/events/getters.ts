import { UnknownVersionError } from '../../../common/errors'
import { awarded, proposed, rejected } from '../../../types/treasury/events'
import { Event } from '../../../processor'
interface ProposedData {
    index: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v268.is(itemEvent)) {
        const index = proposed.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (proposed.v274.is(itemEvent)) {
        const { proposalIndex: index } = proposed.v274.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface RejectedData {
    index: number
}

export function getRejectedData(itemEvent: Event): RejectedData {
    if (rejected.v268.is(itemEvent)) {
        const [index] = rejected.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (rejected.v274.is(itemEvent)) {
        const { proposalIndex: index } = rejected.v274.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface AwarderData {
    index: number
}

export function getAwarderData(itemEvent: Event): AwarderData {
    if (awarded.v268.is(itemEvent)) {
        const [index] = awarded.v268.decode(itemEvent)
        return {
            index,
        }
    } else if (awarded.v274.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v274.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}