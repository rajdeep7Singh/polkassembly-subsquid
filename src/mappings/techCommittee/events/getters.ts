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
    if (approved.v268.is(itemEvent)) {
        return approved.v268.decode(itemEvent)
    } else if (approved.v274.is(itemEvent)) {
        return approved.v274.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v268.is(itemEvent)) {
        return closed.v268.decode(itemEvent)[0]
    } else if (closed.v274.is(itemEvent)) {
        return closed.v274.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v268.is(itemEvent)) {
        return disapproved.v268.decode(itemEvent)[0]
    } else if (disapproved.v274.is(itemEvent)) {
        return disapproved.v274.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v268.is(itemEvent)) {
        return executed.v268.decode(itemEvent)[0]
    } else if (executed.v274.is(itemEvent)) {
        return executed.v274.decode(itemEvent).proposalHash
    }  else if (executed.v283.is(itemEvent)) {
        return executed.v283.decode(itemEvent).proposalHash
    }else {
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
    if (proposed.v268.is(itemEvent)) {
        const [proposer, index, hash, threshold] = proposed.v268.decode(itemEvent)
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (proposed.v274.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v274.decode(itemEvent)
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
    if (voted.v268.is(itemEvent)) {
        const [voter, hash, decision] = voted.v268.decode(itemEvent)
        return {
            voter,
            hash,
            decision,
        }
    } else if (voted.v274.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v274.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
