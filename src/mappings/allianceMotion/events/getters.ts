
import { UnknownVersionError } from '../../../common/errors'
import {
    AllianceMotionApprovedEvent, 
    AllianceMotionClosedEvent, 
    AllianceMotionDisapprovedEvent, 
    AllianceMotionExecutedEvent,
    AllianceMotionProposedEvent,
    AllianceMotionVotedEvent
} from '../../../types/events'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'


export function getApprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new AllianceMotionApprovedEvent(ctx, itemEvent)
    if (event.isV9290) {
        return event.asV9290.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface ClosedData{
    proposalHash: Uint8Array
    yesVotes: number
    noVotes: number
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ClosedData {
    const event = new AllianceMotionClosedEvent(ctx, itemEvent)
    if (event.isV9290) {
        return {
            proposalHash: event.asV9290.proposalHash,
            yesVotes: event.asV9290.yes,
            noVotes: event.asV9290.no
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDisapprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new AllianceMotionDisapprovedEvent(ctx, itemEvent)
    if (event.isV9290) {
        return event.asV9290.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface ExecutedData {
    proposalHash: Uint8Array
    err: boolean
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ExecutedData {
    const event = new AllianceMotionExecutedEvent(ctx, itemEvent)
    if (event.isV9290) {
        const {proposalHash, result} = event.asV9290
        if (result.__kind == 'Err') {
            return {
                proposalHash,
                err: true
            }
        }else {
            return {
                proposalHash,
                err: false
            }
        }
    }else if (event.isV9360) {
        const {proposalHash, result} = event.asV9360
        if (result.__kind == 'Err') {
            return {
                proposalHash,
                err: true
            }
        }else {
            return {
                proposalHash,
                err: false
            }
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface ProposedData {
    account: Uint8Array, 
    proposalIndex: number, 
    proposalHash: Uint8Array, 
    threshold: number
}

export function getProposedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ProposedData {
    const event = new AllianceMotionProposedEvent(ctx, itemEvent)
    if (event.isV9290) {
        const {account, proposalIndex, proposalHash, threshold} = event.asV9290
        return {
            account,
            proposalIndex,
            proposalHash,
            threshold
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface VotedData {
    account: Uint8Array, 
    proposalHash: Uint8Array, 
    voted: boolean, 
    yes: number, 
    no: number
}

export function getVotedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): VotedData {
    const event = new AllianceMotionVotedEvent(ctx, itemEvent)
    if (event.isV9290) {
        const {account, proposalHash, voted, yes, no} = event.asV9290
        return {
            account,
            proposalHash,
            voted,
            yes,
            no
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}