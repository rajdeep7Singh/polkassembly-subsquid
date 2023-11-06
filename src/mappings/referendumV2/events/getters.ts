import { submitted, 
    cancelled, 
    approved,
    killed,
    confirmAborted,
    confirmed,
    decisionDepositPlaced,
    decisionStarted,
    confirmStarted,
    rejected,
    timedOut } from '../../../types/referenda/events' 
import { UnknownVersionError } from '../../../common/errors'
import { TallyData } from '../../types/data'
import {Event} from '../../../processor'

interface ReferendumEventData {
    index: number
    track: number
    hash: string
}

export function getEventData(itemEvent: Event): ReferendumEventData {
    if (submitted.v2100.is(itemEvent)) {
        const {index, track, proposal } = submitted.v2100.decode(itemEvent)
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
    }else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaData {
    tally: TallyData,
    index: number,
}

export function getCancelledData(itemEvent: Event): ReferendaData {
    if(cancelled.v2100.is(itemEvent)){
        const { index, tally } = cancelled.v2100.decode(itemEvent)
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
    if(approved.v2100.is(itemEvent)){
        const { index } = approved.v2100.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getKilledData(itemEvent: Event): ReferendaData {
    if(killed.v2100.is(itemEvent)){
        const { index, tally } = killed.v2100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getTimedOutData(itemEvent: Event): ReferendaData {
    if(timedOut.v2100.is(itemEvent)){
        const { index, tally } = timedOut.v2100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRejectedData(itemEvent: Event): ReferendaData {
    if(rejected.v2100.is(itemEvent)){
        const { index, tally } = rejected.v2100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmAbortedData(itemEvent: Event): ReferendaIndexData {
    if(confirmAborted.v2100.is(itemEvent)){
        const { index } = confirmAborted.v2100.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmedData(itemEvent: Event): ReferendaData {
    if(confirmed.v2100.is(itemEvent)){
        const { index, tally } = confirmed.v2100.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmStartedData(itemEvent: Event): ReferendaIndexData {
    if(confirmStarted.v2100.is(itemEvent)){
        const { index } = confirmStarted.v2100.decode(itemEvent)
        return {
            index,
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

export function getDecisionDepositPlacedData( itemEvent: Event): ReferendaDepositData {
    if(decisionDepositPlaced.v2100.is(itemEvent)){
        const { index, who, amount } = decisionDepositPlaced.v2100.decode(itemEvent)
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
    if(decisionStarted.v2100.is(itemEvent)){
        const { index, track, tally, proposal } = decisionStarted.v2100.decode(itemEvent)
        let hash = null;
        if(proposal.__kind == "Inline") {
            hash = proposal.value
        }
        else{
            hash = proposal.hash
        }
        return {
            index,
            tally,
            track,
            hash
        }
    }  else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
