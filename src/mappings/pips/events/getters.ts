import { UnknownVersionError } from '../../../common/errors'
import {
    PipsProposalCreatedEvent,
    PipsPipSkippedEvent,
    PipsProposalStateUpdatedEvent,
    PolymeshCommitteeVotedEvent,
    PolymeshCommitteeVoteRetractedEvent,
    PipsVotedEvent,
    PolymeshCommitteeProposedEvent
} from '../../../types/events'
import { Event } from '../../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'

interface PipCreatedData {
    did: Uint8Array
    pipType: ProposalType
    proposerAddress: Uint8Array | null
    pipId: number
    deposit: bigint
    url?: String | Uint8Array
    description?: String | Uint8Array
    expiryTime: number | null
    proposalData: Uint8Array
}

export function getPipCreatedEvent(ctx: BatchContext<Store, unknown>, itemEvent: Event): PipCreatedData {
    const event = new PipsProposalCreatedEvent(ctx, itemEvent)
    let pipType = null
    let proposerAddress = null
    let expiryTime = null
    let proposalData = null

    if (event.isV3000) {
        const [did, proposer, pipId, deposit, url, description, maybeBlock, proposalDataValue] = event.asV3000
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
    }else if(event.isV5000003){
        const [did, proposer, pipId, deposit, url, description, maybeBlock, proposalDataValue] = event.asV5000003
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
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface statusChangedData {
    index: number
    status: ProposalStatus
}

export function getStatusData(ctx: BatchContext<Store, unknown>, itemEvent: Event): statusChangedData {
    const event = new PipsProposalStateUpdatedEvent(ctx, itemEvent)
    if (event.isV3000) {
        const [identityId, pipId, status] = event.asV3000
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
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface skippedData {
    index: number
}

export function getPipSkippedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): skippedData {
    const event = new PipsPipSkippedEvent(ctx, itemEvent)
    if (event.isV3000) {
        const [identityId, pipId, newCount] = event.asV3000
        return {
            index: pipId
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface voteData {
    index: number
    did: Uint8Array
    hash: Uint8Array
    currentVote: boolean
    aye: number
    nay: number
    totalSeats: number
}

export function getVoteData(ctx: BatchContext<Store, unknown>, itemEvent: Event): voteData {
    const event = new PolymeshCommitteeVotedEvent(ctx, itemEvent)
    if (event.isV3000) {
        const [identityId, pipId, hash, currentVote, aye, nay, totalSeats] = event.asV3000
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
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface communityVoteData {
    index: number
    did: Uint8Array
    accountId: Uint8Array
    currentVote: boolean
    deposit: bigint
}

export function getCommunityVoteData(ctx: BatchContext<Store, unknown>, itemEvent: Event): communityVoteData {
    const event = new PipsVotedEvent(ctx, itemEvent)
    if (event.isV3000) {
        const [identityId, accountId, pipId, currentVote, deposit] = event.asV3000
        return {
            index: pipId,
            did: identityId,
            accountId,
            currentVote,
            deposit
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface voteRetractedData {
    index: number
    did: Uint8Array
    hash: Uint8Array
    currentVote: boolean
}

export function getVoteRetractedData (ctx: BatchContext<Store, unknown>, itemEvent: Event): voteRetractedData {
    const event = new PolymeshCommitteeVoteRetractedEvent(ctx, itemEvent)
    if (event.isV3000) {
        const [identityId, pipId, hash, currentVote ] = event.asV3000
        return {
            index: pipId,
            did: identityId,
            hash,
            currentVote,
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface polymeshCommitteeProposedData {
    index: number
    identityId: Uint8Array
    hash: Uint8Array
}

export function getPolymeshCommitteeProposedEvent(ctx: BatchContext<Store, unknown>, itemEvent: Event): polymeshCommitteeProposedData {
    const event = new PolymeshCommitteeProposedEvent(ctx, itemEvent)
    if (event.isV3000) {
        const [identityId, pipId, hash] = event.asV3000
        return {
            index: pipId,
            identityId,
            hash,
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}