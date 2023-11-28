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
    if (event.isV172) {
        return event.asV172
    } else if (event.isV176) {
        return event.asV176.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeClosedEvent(ctx, itemEvent)
    if (event.isV172) {
        return event.asV172[0]
    } else if (event.isV176) {
        return event.asV176.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeDisapprovedEvent(ctx, itemEvent)
    if (event.isV172) {
        return event.asV172
    } else if (event.isV176) {
        return event.asV176.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeExecutedEvent(ctx, itemEvent)
    if (event.isV172) {
        return event.asV172[0]
    } else if (event.isV176) {
        return event.asV176.proposalHash
    } else if (event.isV177) {
        return event.asV177.proposalHash
    } else if (event.isV181) {
        return event.asV181.proposalHash
    } else if (event.isV184) {
        return event.asV184.proposalHash
    } else if (event.isV194) {
        return event.asV194.proposalHash
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
    if (event.isV172) {
        const [proposer, index, hash, threshold] = event.asV172
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV176) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV176
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
    if (event.isV172) {
        const [voter, hash, decision] = event.asV172
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV176) {
        const { account, proposalHash, voted } = event.asV176
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
