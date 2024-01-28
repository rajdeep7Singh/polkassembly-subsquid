import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    approved,
    closed,
    disapproved,
    executed,
    proposed,
    voted,
} from '../../../types/technical-committee/events'

import { Event } from '../../../processor'

export function getApprovedData(itemEvent: Event): string {
    if (approved.v21.is(itemEvent)) {
        return approved.v21.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v21.is(itemEvent)) {
        return closed.v21.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v21.is(itemEvent)) {
        return disapproved.v21.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v21.is(itemEvent)) {
        return executed.v21.decode(itemEvent).proposalHash
    } else if (executed.v28.is(itemEvent)) {
        return executed.v28.decode(itemEvent).proposalHash
    } else if (executed.v35.is(itemEvent)) {
        return executed.v35.decode(itemEvent).proposalHash
    }else if (executed.v42.is(itemEvent)) {
        return executed.v42.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ProposedData {
    proposer: string
    index: number
    hash: string
    threshold: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v21.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v21.decode(itemEvent)
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface VotedData {
    voter: string
    hash: string
    decision: boolean
}

export function getVotedData(itemEvent: Event): VotedData {
    if (voted.v21.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v21.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
