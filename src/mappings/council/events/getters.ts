import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    GeneralCouncilApprovedEvent,
    GeneralCouncilClosedEvent,
    GeneralCouncilDisapprovedEvent,
    GeneralCouncilExecutedEvent,
    GeneralCouncilProposedEvent,
    GeneralCouncilVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export function getApprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new GeneralCouncilApprovedEvent(ctx, itemEvent)
    if (event.isV2000) {
        return event.asV2000
    } else if (event.isV2011) {
        return event.asV2011.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new GeneralCouncilClosedEvent(ctx, itemEvent)
    if (event.isV2000) {
        return event.asV2000[0]
    } else if (event.isV2011) {
        return event.asV2011.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new GeneralCouncilDisapprovedEvent(ctx, itemEvent)
    if (event.isV2000) {
        return event.asV2000
    } else if (event.isV2011) {
        return event.asV2011.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): Uint8Array {
    const event = new GeneralCouncilExecutedEvent(ctx, itemEvent)
    if (event.isV2000) {
        return event.asV2000[0]
    } else if (event.isV2011) {
        return event.asV2011.proposalHash
    } else if (event.isV2032) {
        return event.asV2032.proposalHash
    } else if (event.isV2040) {
        return event.asV2040.proposalHash
    } else if (event.isV2060) {
        return event.asV2060.proposalHash
    } else if (event.isV2110) {
        return event.asV2110.proposalHash
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
    const event = new GeneralCouncilProposedEvent(ctx, itemEvent)
    if (event.isV2000) {
        const [proposer, index, hash, threshold] = event.asV2000
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    }else if (event.isV2011) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV2011
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
    const event = new GeneralCouncilVotedEvent(ctx, itemEvent)
    if (event.isV2000) {
        const [voter, hash, decision] = event.asV2000
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV2011) {
        const { account, proposalHash, voted } = event.asV2011
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
