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
    if (approved.v5.is(itemEvent)) {
        return approved.v5.decode(itemEvent)
    } else if (approved.v8.is(itemEvent)) {
        return approved.v8.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v5.is(itemEvent)) {
        return closed.v5.decode(itemEvent)[0]
    } else if (closed.v8.is(itemEvent)) {
        return closed.v8.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v5.is(itemEvent)) {
        return disapproved.v5.decode(itemEvent)[0]
    } else if (disapproved.v8.is(itemEvent)) {
        return disapproved.v8.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v5.is(itemEvent)) {
        return executed.v5.decode(itemEvent)[0]
    } else if (executed.v8.is(itemEvent)) {
        return executed.v8.decode(itemEvent).proposalHash
    } else if (executed.v13.is(itemEvent)) {
        return executed.v13.decode(itemEvent).proposalHash
    } else if (executed.v20.is(itemEvent)) {
        return executed.v20.decode(itemEvent).proposalHash
    }  else if (executed.v32.is(itemEvent)) {
        return executed.v32.decode(itemEvent).proposalHash
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
    if (proposed.v5.is(itemEvent)) {
        const [proposer, index, hash, threshold] = proposed.v5.decode(itemEvent)
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (proposed.v8.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v8.decode(itemEvent)
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
    if (voted.v5.is(itemEvent)) {
        const [voter, hash, decision] = voted.v5.decode(itemEvent)
        return {
            voter,
            hash,
            decision,
        }
    } else if (voted.v8.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v8.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
