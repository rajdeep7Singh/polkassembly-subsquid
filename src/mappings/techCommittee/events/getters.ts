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
    try{
        if (approved.v25.is(itemEvent)) {
            return approved.v25.decode(itemEvent)
        } else if (approved.v10400.is(itemEvent)) {
            return approved.v10400.decode(itemEvent).proposalHash
        } else {
            throw new UnknownVersionError(itemEvent.name)
        }
    }
    catch{
        return itemEvent.args
    }
}

export function getClosedData(itemEvent: Event): string {
    try{
        if (closed.v25.is(itemEvent)) {
            return closed.v25.decode(itemEvent)[0]
        } else if (closed.v10400.is(itemEvent)) {
            return closed.v10400.decode(itemEvent).proposalHash
        } else {
            throw new UnknownVersionError(itemEvent.name)
        }
    }catch {
        return itemEvent.args[0]
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v25.is(itemEvent)) {
        return disapproved.v25.decode(itemEvent)[0]
    } else if (disapproved.v10400.is(itemEvent)) {
        return disapproved.v10400.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    try{
        if (executed.v25.is(itemEvent)) {
            return executed.v25.decode(itemEvent)[0]
        } else if (executed.v2800.is(itemEvent)) {
            return executed.v2800.decode(itemEvent)[0]
        } else if (executed.v10400.is(itemEvent)) {
            return executed.v10400.decode(itemEvent).proposalHash
        } else if (executed.v10500.is(itemEvent)) {
            return executed.v10500.decode(itemEvent).proposalHash
        } else if (executed.v10700.is(itemEvent)) {
            return executed.v10700.decode(itemEvent).proposalHash
        } else if (executed.v10890.is(itemEvent)) {
            return executed.v10890.decode(itemEvent).proposalHash
        } else {
            throw new UnknownVersionError(itemEvent.name)
        }
    }catch {
        return itemEvent.args[0]
    }
}

export interface ProposedData {
    proposer: string
    index: number
    hash: string
    threshold: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    try{
        if (proposed.v25.is(itemEvent)) {
            const [proposer, index, hash, threshold] = proposed.v25.decode(itemEvent)
            return {
                proposer,
                index,
                hash,
                threshold,
            }
        } else if (proposed.v10400.is(itemEvent)) {
            const { account, proposalIndex, proposalHash, threshold } = proposed.v10400.decode(itemEvent)
            return {
                proposer: account,
                index: proposalIndex,
                hash: proposalHash,
                threshold,
            }
        } else {
            throw new UnknownVersionError(itemEvent.name)
        }
    }catch {
        return {
            proposer: itemEvent.args[0],
            index: itemEvent.args[1],
            hash: itemEvent.args[2],
            threshold: itemEvent.args[3],
        }
    }
}

export interface VotedData {
    voter: string
    hash: string
    decision: boolean
}

export function getVotedData(itemEvent: Event): VotedData {
    try{
        if (voted.v25.is(itemEvent)) {
            const [voter, hash, decision] = voted.v25.decode(itemEvent)
            return {
                voter,
                hash,
                decision,
            }
        } else if (voted.v10400.is(itemEvent)) {
            const { account, proposalHash, voted: voteData } = voted.v10400.decode(itemEvent)
            return {
                voter: account,
                hash: proposalHash,
                decision: voteData,
            }
        } else {
            throw new UnknownVersionError(itemEvent.name)
        }
    }
    catch{
        return {
            voter: itemEvent.args[0],
            hash: itemEvent.args[1],
            decision: itemEvent.args[2],
        }
    }
}
