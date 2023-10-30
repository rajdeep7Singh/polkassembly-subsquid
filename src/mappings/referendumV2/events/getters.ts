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
    if (submitted.v1900.is(itemEvent)) {
        const {index, track, proposalHash } = submitted.v1900.decode(itemEvent)
        return {
            index,
            track,
            hash: proposalHash
        }
    } else if (submitted.v2000.is(itemEvent)) {
        const {index, track, proposal } = submitted.v2000.decode(itemEvent)
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
    if(cancelled.v1900.is(itemEvent)){
        const { index, tally } = cancelled.v1900.decode(itemEvent)
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
    if(approved.v1900.is(itemEvent)){
        const { index } = approved.v1900.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getKilledData(itemEvent: Event): ReferendaData {
    if(killed.v1900.is(itemEvent)){
        const { index, tally } = killed.v1900.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getTimedOutData(itemEvent: Event): ReferendaData {
    if(timedOut.v1900.is(itemEvent)){
        const { index, tally } = timedOut.v1900.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRejectedData(itemEvent: Event): ReferendaData {
    if(rejected.v1900.is(itemEvent)){
        const { index, tally } = rejected.v1900.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmAbortedData(itemEvent: Event): ReferendaIndexData {
    if(confirmAborted.v1900.is(itemEvent)){
        const { index } = confirmAborted.v1900.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmedData(itemEvent: Event): ReferendaData {
    if(confirmed.v1900.is(itemEvent)){
        const { index, tally } = confirmed.v1900.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmStartedData(itemEvent: Event): ReferendaIndexData {
    if(confirmStarted.v1900.is(itemEvent)){
        const { index } = confirmStarted.v1900.decode(itemEvent)
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
    if(decisionDepositPlaced.v1900.is(itemEvent)){
        const { index, who, amount } = decisionDepositPlaced.v1900.decode(itemEvent)
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
    if(decisionStarted.v1900.is(itemEvent)){
        const { index, track, tally, proposalHash } = decisionStarted.v1900.decode(itemEvent)
        return {
            index,
            track,
            tally,
            hash: proposalHash
        }
    }else if(decisionStarted.v2000.is(itemEvent)){
        const { index, track, tally, proposal } = decisionStarted.v2000.decode(itemEvent)
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
