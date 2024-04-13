import { UnknownVersionError } from '../../../common/errors'
import {
    voted,
    voteRetracted,
    finalVotes,
    proposed
} from '../../../types/polymesh-committee/events'
import {
    proposalCreated,
    pipSkipped,
    proposalStateUpdated,
    voted as pipsVoted,
} from '../../../types/pips/events'
import { Event } from '../../../processor'
import { ss58codec } from '../../../common/tools'
import { decodeHex } from '@subsquid/substrate-processor'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { polymeshCommittee } from '../../../types/events'

interface PipCreatedData {
    did: string
    pipType: ProposalType
    proposerAddress: string | null
    pipId: number
    deposit: bigint
    url?: String
    description?: String
    expiryTime: number | null
    proposalData: string
}

export function getPipCreatedEvent(itemEvent: Event): PipCreatedData {
    let pipType = null
    let proposerAddress = null
    let expiryTime = null
    let proposalData = null

    if (proposalCreated.v3000.is(itemEvent)) {
        const [did, proposer, pipId, deposit, url, description, maybeBlock, proposalDataValue] = proposalCreated.v3000.decode(itemEvent)
        proposalData = proposalDataValue.value
        if(maybeBlock.__kind == "Some"){
            expiryTime = maybeBlock.value
        }
        if(proposer.__kind == 'Community'){
            pipType = ProposalType.Community
            proposerAddress = proposer.value
        }
        else{
            if(proposer.value.__kind == "Technical"){
                pipType = ProposalType.TechnicalCommittee
            }else{
                pipType = ProposalType.UpgradeCommittee
            }
        }

        return {
            did,
            pipType,
            proposerAddress,
            pipId,
            deposit,
            url,
            description,
            expiryTime,
            proposalData,

        }
    }else if(proposalCreated.v5000003.is(itemEvent)){
        const [did, proposer, pipId, deposit, url, description, maybeBlock, proposalDataValue] = proposalCreated.v5000003.decode(itemEvent)
        proposalData = proposalDataValue.value
        if(maybeBlock.__kind == "Some"){
            expiryTime = maybeBlock.value
        }
        if(proposer.__kind == 'Community'){
            pipType = ProposalType.Community
            proposerAddress = proposer.value
        }
        else{
            if(proposer.value.__kind == "Technical"){
                pipType = ProposalType.TechnicalCommittee
            }else{
                pipType = ProposalType.UpgradeCommittee
            }
        }

        return {
            did,
            pipType,
            proposerAddress,
            pipId,
            deposit,
            url,
            description,
            expiryTime,
            proposalData,

        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface statusChangedData {
    index: number
    status: ProposalStatus
}

export function getStatusData(itemEvent: Event): statusChangedData {
    if (proposalStateUpdated.v3000.is(itemEvent)) {
        const [identityId, pipId, status] = proposalStateUpdated.v3000.decode(itemEvent)
        let proposalStatus = ProposalStatus.Proposed
        switch (status.__kind){
            case 'Pending':
                proposalStatus = ProposalStatus.Pending
                break
            case 'Rejected':
                proposalStatus = ProposalStatus.Rejected
                break
            case 'Scheduled':
                proposalStatus = ProposalStatus.Scheduled
                break
            case 'Expired':
                proposalStatus = ProposalStatus.Expired
                break
            case 'Rejected':
                proposalStatus = ProposalStatus.Rejected
                break
            case 'Executed':
                proposalStatus = ProposalStatus.Executed
        }
        return {
            index: pipId,
            status: proposalStatus,
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface skippedData {
    index: number
}

export function getPipSkippedData(itemEvent: Event): skippedData {
    if (pipSkipped.v3000.is(itemEvent)) {
        const [identityId, pipId, newCount] = pipSkipped.v3000.decode(itemEvent)
        return {
            index: pipId
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface voteData {
    index: number
    did: string
    hash: string
    currentVote: boolean
    aye: number
    nay: number
    totalSeats: number
}

export function getVoteData(itemEvent: Event): voteData {
    if (voted.v3000.is(itemEvent)) {
        const [identityId, pipId, hash, currentVote, aye, nay, totalSeats] = voted.v3000.decode(itemEvent)
        return {
            index: pipId,
            did: identityId,
            hash,
            currentVote,
            aye,
            nay,
            totalSeats
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface communityVoteData {
    index: number
    did: string
    accountId: string
    currentVote: boolean
    deposit: bigint
}

export function getCommunityVoteData(itemEvent: Event): communityVoteData {
    if (pipsVoted.v3000.is(itemEvent)) {
        const [identityId, accountId, pipId, currentVote, deposit] = pipsVoted.v3000.decode(itemEvent)
        return {
            index: pipId,
            did: identityId,
            accountId,
            currentVote,
            deposit
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface voteRetractedData {
    index: number
    did: string
    hash: string
    currentVote: boolean
}

export function getVoteRetractedData (itemEvent: Event): voteRetractedData {
    if (voteRetracted.v3000.is(itemEvent)) {
        const [identityId, pipId, hash, currentVote ] = voteRetracted.v3000.decode(itemEvent)
        return {
            index: pipId,
            did: identityId,
            hash,
            currentVote,
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface polymeshCommitteeProposedData {
    index: number
    identityId: string
    hash: string
}

export function getPolymeshCommitteeProposedEvent(itemEvent: Event): polymeshCommitteeProposedData {
    if (proposed.v3000.is(itemEvent)) {
        const [identityId, pipId, hash] = proposed.v3000.decode(itemEvent)
        return {
            index: pipId,
            identityId,
            hash,
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface polymeshCommitteeFinalVotesData {
    index: number
    identityId: string
    hash: string
    ayes: string[]
    nays: string[]
}

export function getPolymeshCommitteeFinalVotesDataEvent(itemEvent: Event): polymeshCommitteeFinalVotesData {
    if (finalVotes.v3000.is(itemEvent)) {
        const [identityId, pipId, hash, ayes, nays] = finalVotes.v3000.decode(itemEvent)
        return {
            index: pipId,
            identityId,
            hash,
            ayes,
            nays
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}