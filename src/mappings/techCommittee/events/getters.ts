import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    TechnicalCommitteeApprovedEvent,
    TechnicalCommitteeClosedEvent,
    TechnicalCommitteeDisapprovedEvent,
    TechnicalCommitteeExecutedEvent,
    TechnicalCommitteeProposedEvent,
    TechnicalCommitteeVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export function getApprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeApprovedEvent(ctx, itemEvent)
    if (event.isV25) {
        return event.asV25
    } else if (event.isV10400) {
        return event.asV10400.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeClosedEvent(ctx, itemEvent)
    if (event.isV25) {
        return event.asV25[0]
    } else if (event.isV10400) {
        return event.asV10400.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeDisapprovedEvent(ctx, itemEvent)
    if (event.isV25) {
        return event.asV25
    } else if (event.isV10400) {
        return event.asV10400.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeExecutedEvent(ctx, itemEvent)
    if (event.isV25) {
        return event.asV25[0]
    } else if (event.isV2800) {
        return event.asV2800[0]
    } else if (event.isV10400) {
        return event.asV10400.proposalHash
    } else if (event.isV10500) {
        return event.asV10500.proposalHash
    } else if (event.isV10700) {
        return event.asV10700.proposalHash
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
    const event = new TechnicalCommitteeProposedEvent(ctx, itemEvent)
    if (event.isV25) {
        const [proposer, index, hash, threshold] = event.asV25
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV10400) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV10400
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface VotedData {
    voter: Uint8Array
    hash: Uint8Array
    decision: boolean
}

export function getVotedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): VotedData {
    const event = new TechnicalCommitteeVotedEvent(ctx, itemEvent)
    if (event.isV25) {
        const [voter, hash, decision] = event.asV25
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV10400) {
        const { account, proposalHash, voted } = event.asV10400
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
