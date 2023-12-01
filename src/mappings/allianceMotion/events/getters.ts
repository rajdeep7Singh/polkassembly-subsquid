
import { UnknownVersionError } from '../../../common/errors'
import {
    approved, 
    closed, 
    disapproved, 
    executed,
    proposed,
    voted
} from '../../../types/alliance-motion/events'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'


export function getApprovedData(ctx: ProcessorContext<Store>, itemEvent: Event): string {
    if (approved.v9290.is(itemEvent)) {
        return approved.v9290.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface ClosedData{
    proposalHash: string
    yesVotes: number
    noVotes: number
}

export function getClosedData(ctx: ProcessorContext<Store>, itemEvent: Event): ClosedData {
    if (closed.v9290.is(itemEvent)) {
        const data = closed.v9290.decode(itemEvent)
        return {
            proposalHash: data.proposalHash,
            yesVotes: data.yes,
            noVotes: data.no
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(ctx: ProcessorContext<Store>, itemEvent: Event): string {
    if (disapproved.v9290.is(itemEvent)) {
        return disapproved.v9290.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface ExecutedData {
    proposalHash: string
    err: boolean
}

export function getExecutedData(ctx: ProcessorContext<Store>, itemEvent: Event): ExecutedData {
    if (executed.v9290.is(itemEvent)) {
        const {proposalHash, result} = executed.v9290.decode(itemEvent)
        if (result.__kind == 'Err') {
            return {
                proposalHash,
                err: true
            }
        }else {
            return {
                proposalHash,
                err: false
            }
        }
    }else if (executed.v9360.is(itemEvent)) {
        const {proposalHash, result} = executed.v9360.decode(itemEvent)
        if (result.__kind == 'Err') {
            return {
                proposalHash,
                err: true
            }
        }else {
            return {
                proposalHash,
                err: false
            }
        }
    }else if (executed.v9420.is(itemEvent)) {
        const {proposalHash, result} = executed.v9420.decode(itemEvent)
        if (result.__kind == 'Err') {
            return {
                proposalHash,
                err: true
            }
        }else {
            return {
                proposalHash,
                err: false
            }
        }
    }else if (executed.v9430.is(itemEvent)) {
        const {proposalHash, result} = executed.v9430.decode(itemEvent)
        if (result.__kind == 'Err') {
            return {
                proposalHash,
                err: true
            }
        }else {
            return {
                proposalHash,
                err: false
            }
        }
    }else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface ProposedData {
    account: string, 
    proposalIndex: number, 
    proposalHash: string, 
    threshold: number
}

export function getProposedData(ctx: ProcessorContext<Store>, itemEvent: Event): ProposedData {
    if (proposed.v9290.is(itemEvent)) {
        const {account, proposalIndex, proposalHash, threshold} = proposed.v9290.decode(itemEvent)
        return {
            account,
            proposalIndex,
            proposalHash,
            threshold
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface VotedData {
    account: string, 
    proposalHash: string, 
    vote: boolean, 
    yes: number, 
    no: number
}

export function getVotedData(ctx: ProcessorContext<Store>, itemEvent: Event): VotedData {
    if (voted.v9290.is(itemEvent)) {
        const {account, proposalHash, voted: vote, yes, no} = voted.v9290.decode(itemEvent)
        return {
            account,
            proposalHash,
            vote,
            yes,
            no
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}