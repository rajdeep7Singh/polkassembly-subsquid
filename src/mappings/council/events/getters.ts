import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    CouncilApprovedEvent,
    CouncilClosedEvent,
    CouncilDisapprovedEvent,
    CouncilExecutedEvent,
    CouncilProposedEvent,
    CouncilVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export function getApprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilApprovedEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilClosedEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200[0]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilDisapprovedEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200
    }else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilExecutedEvent(ctx, itemEvent)
    if (event.isV200) {
        return event.asV200[0]
    } else {
        const data = ctx._chain.decodeEvent(itemEvent)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export interface ProposedData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

export function getProposedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ProposedData {
    const event = new CouncilProposedEvent(ctx, itemEvent)
    if (event.isV200) {
        const [proposer, index, hash, threshold] = event.asV200
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    }else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface VotedData {
    voter: Uint8Array
    hash: Uint8Array
    decision: boolean
}

export function getVotedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): VotedData {
    const event = new CouncilVotedEvent(ctx, itemEvent)
    if (event.isV200) {
        const [voter, hash, decision] = event.asV200
        return {
            voter,
            hash,
            decision,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
