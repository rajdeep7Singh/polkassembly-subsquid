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
    if (event.isV0) {
        return event.asV0
    } else if (event.isV9140) {
        return event.asV9140.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeClosedEvent(ctx, itemEvent)
    if (event.isV0) {
        return event.asV0[0]
    } else if (event.isV9140) {
        return event.asV9140.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeDisapprovedEvent(ctx, itemEvent)
    if (event.isV0) {
        return event.asV0
    } else if (event.isV9140) {
        return event.asV9140.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new TechnicalCommitteeExecutedEvent(ctx, itemEvent)
    if (event.isV0) {
        return event.asV0[0]
    } else if (event.isV9110) {
        return event.asV9110[0]
    } else if (event.isV9140) {
        return event.asV9140.proposalHash
    }  else if (event.isV9170) {
        return event.asV9170.proposalHash
    }  else if (event.isV9190) {
        return event.asV9190.proposalHash
    }  else if (event.isV9340) {
        return event.asV9340.proposalHash
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
    if (event.isV0) {
        const [proposer, index, hash, threshold] = event.asV0
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV9140) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV9140
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
    if (event.isV0) {
        const [voter, hash, decision] = event.asV0
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV9140) {
        const { account, proposalHash, voted } = event.asV9140
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
