import { ReferendaSubmittedEvent, 
    ReferendaCancelledEvent, 
    ReferendaApprovedEvent,
    ReferendaKilledEvent,
    ReferendaConfirmAbortedEvent,
    ReferendaConfirmedEvent,
    ReferendaDecisionDepositPlacedEvent,
    ReferendaDecisionStartedEvent,
    ReferendaConfirmStartedEvent,
    ReferendaRejectedEvent,
    ReferendaTimedOutEvent } from '../../../types/events'
import { UnknownVersionError } from '../../../common/errors'
import { TallyData } from '../../types/data'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ReferendumEventData {
    index: number
    track: number
    hash: Uint8Array
}


export function getEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendumEventData {
    const event = new ReferendaSubmittedEvent(ctx, itemEvent)
    if (event.isV3) {
        const {index, track, proposalHash } = event.asV3
        let hash = null;
        return {
            index,
            track,
            hash: proposalHash
        }
    }else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ReferendaData {
    tally: TallyData,
    index: number,
}

export function getCancelledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaData {
    const event = new ReferendaCancelledEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index, tally } = event.asV3
        return {
            index,
            tally
        }
    } else if (event.isV6) {
        const { index, tally } = event.asV6
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ReferendaIndexData {
    index: number
}

export function getApprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaIndexData {
    const event = new ReferendaApprovedEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index } = event.asV3
        return {
            index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getKilledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaData {
    const event = new ReferendaKilledEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index, tally } = event.asV3
        return {
            index,
            tally
        }
    }else if (event.isV6) {
        const { index, tally } = event.asV6
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getTimedOutData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaData {
    const event = new ReferendaTimedOutEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index, tally } = event.asV3
        return {
            index,
            tally
        }
    }else if (event.isV6) {
        const { index, tally } = event.asV6
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getRejectedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaData {
    const event = new ReferendaRejectedEvent(ctx, itemEvent)
    if (event.isV6) {
        const { index, tally } = event.asV6
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getConfirmAbortedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaIndexData {
    const event = new ReferendaConfirmAbortedEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index } = event.asV3
        return {
            index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getConfirmedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaData {
    const event = new ReferendaConfirmedEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index, tally } = event.asV3
        return {
            index,
            tally
        }
    }else if (event.isV6) {
        const { index, tally } = event.asV6
        return {
            index,
            tally
        }
    }  else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getConfirmStartedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaIndexData {
    const event = new ReferendaConfirmStartedEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index } = event.asV3
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ReferendaDepositData {
    index: number,
    who: Uint8Array,
    amount: bigint,
}

export function getDecisionDepositPlacedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaDepositData {
    const event = new ReferendaDecisionDepositPlacedEvent(ctx, itemEvent)
    if (event.isV3) {
        const { index, who, amount } = event.asV3
        return {
            index,
            who,
            amount
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ReferendaDecisionStartedData {
    index: number,
    tally: TallyData,
    track: number,
    hash: Uint8Array,
}

export function getDecisionStartedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendaDecisionStartedData {
    const event = new ReferendaDecisionStartedEvent(ctx, itemEvent)
    if (event.isV3) {
        let hash = undefined;
        const { index, track, proposalHash, tally} = event.asV3
        return {
            index,
            track,
            tally,
            hash: proposalHash
        }
    }else if (event.isV6) {
        let hash = undefined;
        const { index, track, proposalHash, tally} = event.asV6
        return {
            index,
            track,
            tally,
            hash: proposalHash
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}