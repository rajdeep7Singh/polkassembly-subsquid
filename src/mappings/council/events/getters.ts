import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    approved,
    closed,
    disapproved,
    executed,
    proposed,
    voted,
} from '../../../types/council/events'

import { Event } from '../../../processor'

export function getApprovedData(itemEvent: Event): string {
    if (approved.v266.is(itemEvent)) {
        return approved.v266.decode(itemEvent)
    } else if (approved.v297.is(itemEvent)) {
        return approved.v297.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v266.is(itemEvent)) {
        return closed.v266.decode(itemEvent)[0]
    } else if (closed.v297.is(itemEvent)) {
        return closed.v297.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v266.is(itemEvent)) {
        return disapproved.v266.decode(itemEvent)[0]
    } else if (disapproved.v297.is(itemEvent)) {
        return disapproved.v297.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v266.is(itemEvent)) {
        return executed.v266.decode(itemEvent)[0]
    } else if (executed.v295.is(itemEvent)) {
        return executed.v295.decode(itemEvent)[0]
    } else if (executed.v297.is(itemEvent)) {
        return executed.v297.decode(itemEvent).proposalHash
    } else if (executed.v299.is(itemEvent)) {
        return executed.v299.decode(itemEvent).proposalHash
    } else if (executed.v300.is(itemEvent)) {
       return executed.v300.decode(itemEvent).proposalHash
    }else if (executed.v302.is(itemEvent)) {
        return executed.v302.decode(itemEvent).proposalHash
     } else if (executed.v48300.is(itemEvent)) {
        return executed.v48300.decode(itemEvent).proposalHash
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
    if (proposed.v266.is(itemEvent)) {
        const [proposer, index, hash, threshold] = proposed.v266.decode(itemEvent)
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (proposed.v297.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v297.decode(itemEvent)
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
    if (voted.v266.is(itemEvent)) {
        const [voter, hash, decision] = voted.v266.decode(itemEvent)
        return {
            voter,
            hash,
            decision,
        }
    } else if (voted.v297.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v297.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
