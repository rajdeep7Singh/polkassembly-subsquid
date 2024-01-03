import { submitted, 
    cancelled, 
    approved,
    killed,
    confirmAborted,
    confirmStarted,
    decisionDepositPlaced,
    decisionStarted,
    confirmed,
    rejected,
    timedOut,
    metadataSet,
    metadataCleared } from '../../../types/referenda/events'
import { UnknownVersionError } from '../../../common/errors'
import { TallyData } from '../../types/data'
import { Event } from '../../../processor'
interface ReferendumEventData {
    index: number
    track: number
    hash: string
}


export function getEventData(itemEvent: Event): ReferendumEventData {
    if (submitted.v100.is(itemEvent)) {
        const {index, track, proposal } = submitted.v100.decode(itemEvent)
        let hash = null;
        if(proposal.__kind == "Inline") {
            hash = proposal.value
        }
        else{
            hash = proposal.hash
        }
        return {
            index,
            track,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaData {
    tally: TallyData,
    index: number,
}

export function getCancelledData(itemEvent: Event): ReferendaData {
    if (cancelled.v100.is(itemEvent)) {
        const { index, tally } = cancelled.v100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaIndexData {
    index: number
}

export function getApprovedData(itemEvent: Event): ReferendaIndexData {
    if (approved.v100.is(itemEvent)) {
        const { index } = approved.v100.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getKilledData(itemEvent: Event): ReferendaData {
    if (killed.v100.is(itemEvent)) {
        const { index, tally } = killed.v100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getTimedOutData(itemEvent: Event): ReferendaData {
    if (timedOut.v100.is(itemEvent)) {
        const { index, tally } = timedOut.v100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRejectedData(itemEvent: Event): ReferendaData {
    if (rejected.v100.is(itemEvent)) {
        const { index, tally } = rejected.v100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmAbortedData(itemEvent: Event): ReferendaIndexData {
    if (confirmAborted.v100.is(itemEvent)) {
        const { index } = confirmAborted.v100.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmedData(itemEvent: Event): ReferendaData {
    if (confirmed.v100.is(itemEvent)) {
        const { index, tally } = confirmed.v100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmStartedData(itemEvent: Event): ReferendaIndexData {
    if (confirmStarted.v100.is(itemEvent)) {
        const { index } = confirmStarted.v100.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaDepositData {
    index: number,
    who: string,
    amount: bigint,
}

export function getDecisionDepositPlacedData(itemEvent: Event): ReferendaDepositData {
    if (decisionDepositPlaced.v100.is(itemEvent)) {
        const { index, who, amount } = decisionDepositPlaced.v100.decode(itemEvent)
        return {
            index,
            who,
            amount
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaDecisionStartedData {
    index: number,
    tally: TallyData,
    track: number,
    hash: string,
}

export function getDecisionStartedData(itemEvent: Event): ReferendaDecisionStartedData {
    if (decisionStarted.v100.is(itemEvent)) {
        let hash = undefined;
        const { index, track, proposal, tally} = decisionStarted.v100.decode(itemEvent)
        if(proposal.__kind == "Inline") {
            hash = proposal.value
        }
        else{
            hash = proposal.hash
        }
        return {
            index,
            track,
            tally,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
export interface ReferendaMetadataSetData {
    index: number,
    hash: string,
}

export function getMetadataSetData(itemEvent: Event): ReferendaMetadataSetData {
    if (metadataSet.v140.is(itemEvent)) {
        const { index, hash } = metadataSet.v140.decode(itemEvent)
        return {
            index,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaMetadataCleared {
    index: number,
    hash: string,
}

export function getMetadataClearedData(itemEvent: Event): ReferendaMetadataCleared {
    if (metadataCleared.v140.is(itemEvent)) {
        const { index, hash } = metadataCleared.v140.decode(itemEvent)
        return {
            index,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}