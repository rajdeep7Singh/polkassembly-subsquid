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
    if (event.isV1000) {
        return event.asV1000
    } else if (event.isV1002) {
        return event.asV1002.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilClosedEvent(ctx, itemEvent)
    if (event.isV1000) {
        return event.asV1000[0]
    } else if (event.isV1002) {
        return event.asV1002.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilDisapprovedEvent(ctx, itemEvent)
    if (event.isV1000) {
        return event.asV1000
    } else if (event.isV1002) {
        return event.asV1002.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilExecutedEvent(ctx, itemEvent)
    if (event.isV1000) {
        return event.asV1000[0]
    }else if (event.isV1002) {
        return event.asV1002.proposalHash
    } else if (event.isV1007) {
        return event.asV1007.proposalHash
    } else if (event.isV1016) {
        return event.asV1016.proposalHash
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
    if (event.isV1000) {
        const [proposer, index, hash, threshold] = event.asV1000
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV1002) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV1002
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
    const event = new CouncilVotedEvent(ctx, itemEvent)
    if (event.isV1000) {
        const [voter, hash, decision] = event.asV1000
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV1002) {
        const { account, proposalHash, voted } = event.asV1002
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
