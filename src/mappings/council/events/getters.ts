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
    if (event.isV16) {
        return event.asV16
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilClosedEvent(ctx, itemEvent)
    if (event.isV16) {
        return event.asV16[0]
    }    if (event.isV38) {
        return event.asV38.proposalHash
    }  else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilDisapprovedEvent(ctx, itemEvent)
    if (event.isV16) {
        return event.asV16
    }else if (event.asV38) {
        return event.asV38.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new CouncilExecutedEvent(ctx, itemEvent)
    if (event.isV16) {
        return event.asV16[0]
    } else if (event.isV25) {
        return event.asV25[0]
    } else if (event.isV38) {
        return event.asV38.proposalHash
    } else if (event.isV43) {
        return event.asV43.proposalHash
    } else if (event.isV81) {
        return event.asV81.proposalHash
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
    if (event.isV16) {
        const [account, proposalIndex, proposalHash, threshold ] = event.asV16
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    }else if (event.asV38) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV38
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    }  else {
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
    if (event.isV16) {
        const [ account, proposalHash, voted ] = event.asV16
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    }else if (event.isV38) {
        const { account, proposalHash, voted } = event.asV38
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
