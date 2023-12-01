import { 
    submitted, 
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
    metadataCleared,
    metadataSet 
} from '../../../types/fellowship-referenda/events'
import {
    voted
} from '../../../types/fellowship-collective/events'
import { UnknownVersionError } from '../../../common/errors'
import { TallyData } from '../../types/data'
import { VoteDecision } from '../../../model'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

interface ReferendumEventData {
    index: number
    track: number
    hash: string
}

export function getEventData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendumEventData {
    if (submitted.collectivesV9420.is(itemEvent)) {
        const {index, track, proposal } = submitted.collectivesV9420.decode(itemEvent)
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

export function getCancelledData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaData {
    if (cancelled.collectivesV9420.is(itemEvent)) {
        const { index, tally } = cancelled.collectivesV9420.decode(itemEvent)
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

export function getApprovedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaIndexData {
    if (approved.collectivesV9420.is(itemEvent)) {
        const { index } = approved.collectivesV9420.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getKilledData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaData {
    if (killed.collectivesV9420.is(itemEvent)) {
        const { index, tally } = killed.collectivesV9420.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getTimedOutData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaIndexData {
    if (timedOut.collectivesV9420.is(itemEvent)) {
        const { index } = timedOut.collectivesV9420.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRejectedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaData {
    if (rejected.collectivesV9420.is(itemEvent)) {
        const { index, tally } = rejected.collectivesV9420.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmAbortedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaIndexData {
    if (confirmAborted.collectivesV9420.is(itemEvent)) {
        const { index } = confirmAborted.collectivesV9420.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaData {
    if (confirmed.collectivesV9420.is(itemEvent)) {
        const { index, tally } = confirmed.collectivesV9420.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmStartedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaIndexData {
    if (confirmStarted.collectivesV9420.is(itemEvent)) {
        const { index } = confirmStarted.collectivesV9420.decode(itemEvent)
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

export function getDecisionDepositPlacedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaDepositData {
    if (decisionDepositPlaced.collectivesV9420.is(itemEvent)) {
        const { index, who, amount } = decisionDepositPlaced.collectivesV9420.decode(itemEvent)
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

export function getDecisionStartedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaDecisionStartedData {
    if (decisionStarted.collectivesV9420.is(itemEvent)) {
        let hash = undefined;
        const { index, track, proposal, tally} = decisionStarted.collectivesV9420.decode(itemEvent)
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

interface FellowshipCollectiveVoteData {
    accountId: string, 
    index: number, 
    decision: VoteDecision,
    amount: number, 
    tally: TallyData

}

export function getFellowshipVoteData(ctx: ProcessorContext<Store>, itemEvent: Event): FellowshipCollectiveVoteData {
    if (voted.collectivesV9420.is(itemEvent)) {
        const { who, poll, vote, tally  } = voted.collectivesV9420.decode(itemEvent)
        const decision = vote.__kind == "Aye" ? VoteDecision.yes : VoteDecision.no
        const amount = vote.value
        return {
            accountId: who,
            index: poll,
            decision,
            amount,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
export interface ReferendaMetadataSetData {
    index: number,
    hash: string,
}

export function getMetadataSetData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaMetadataSetData {
    if (metadataSet.collectivesV9420.is(itemEvent)) {
        const { index, hash } = metadataSet.collectivesV9420.decode(itemEvent)
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

export function getMetadataClearedData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendaMetadataCleared {
    if (metadataSet.collectivesV9420.is(itemEvent)) {
        const { index, hash } = metadataSet.collectivesV9420.decode(itemEvent)
        return {
            index,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}