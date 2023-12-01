
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
    if (approved.collectivesV9290.is(itemEvent)) {
        return approved.collectivesV9290.decode(itemEvent).proposalHash
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
    if (closed.collectivesV9290.is(itemEvent)) {
        const data = closed.collectivesV9290.decode(itemEvent)
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
    if (disapproved.collectivesV9290.is(itemEvent)) {
        return disapproved.collectivesV9290.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface ExecutedData {
    proposalHash: string
    err: boolean
}

export function getExecutedData(ctx: ProcessorContext<Store>, itemEvent: Event): ExecutedData {
    if (executed.collectivesV9290.is(itemEvent)) {
        const {proposalHash, result} = executed.collectivesV9290.decode(itemEvent)
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
    }else if (executed.collectivesV9320.is(itemEvent)) {
        const {proposalHash, result} = executed.collectivesV9320.decode(itemEvent)
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
    }else if (executed.collectivesV9420.is(itemEvent)) {
        const {proposalHash, result} = executed.collectivesV9420.decode(itemEvent)
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
    }else if (executed.collectivesV9430.is(itemEvent)) {
        const {proposalHash, result} = executed.collectivesV9430.decode(itemEvent)
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
    if (proposed.collectivesV9290.is(itemEvent)) {
        const {account, proposalIndex, proposalHash, threshold} = proposed.collectivesV9290.decode(itemEvent)
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
    if (voted.collectivesV9290.is(itemEvent)) {
        const {account, proposalHash, voted: vote, yes, no} = voted.collectivesV9290.decode(itemEvent)
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