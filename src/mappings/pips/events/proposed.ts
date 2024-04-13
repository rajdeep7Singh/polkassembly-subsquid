import { ss58codec } from '../../../common/tools'
import { getPipCreatedEvent, getPolymeshCommitteeProposedEvent } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { storage } from '../../../storage'
import { createPip, getDecodedCall } from '../../utils/proposals'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event } from '../../../processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {

    const { did, pipType, proposerAddress, pipId, deposit, url, description, expiryTime, proposalData } = getPipCreatedEvent(item)

    const proposal = await ctx.store.get(Proposal, { where: { index: pipId } })
    
    let decodedProposerAddress = proposerAddress

    if(!proposerAddress){
        const didStorageData = await storage.pips.getSubstrateAddressOfDid(ctx, did, header)
        if(didStorageData){
            decodedProposerAddress = didStorageData
        }
    }

    const decodedCall = await getDecodedCall(ctx, pipId, header, item)

    if(proposal){
        proposal.identity = did
        proposal.proposer = decodedProposerAddress ? ss58codec.encode(decodedProposerAddress) : undefined
        proposal.url = url ? url.toString() : undefined
        proposal.description = description ? description.toString() : undefined
        proposal.deposit = deposit
        proposal.expiryTime = expiryTime
        proposal.proposalArguments = decodedCall

        await ctx.store.save(proposal)
    }
    else{
        await createPip(ctx, header, {
            hash: proposalData,
            did: did,
            index: pipId,
            url: url ? url.toString() : undefined,
            description: description ? description.toString() : undefined,
            proposer: decodedProposerAddress ? ss58codec.encode(decodedProposerAddress) : undefined,
            status: ProposalStatus.Proposed,
            deposit: deposit,
            expiryTime: expiryTime,
            proposedCall: decodedCall,
        }, pipType)
    }
}

export async function handlePolymeshCommitteeProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, identityId, hash } = getPolymeshCommitteeProposedEvent(item)

    const proposal = await ctx.store.get(Proposal, { where: { index: index } })

    if(proposal){
        return
    }

    await getDecodedCall(ctx, index, header, item)
    let decodedProposerAddress = null
    const didStorageData = await storage.pips.getSubstrateAddressOfDid(ctx, identityId, header)
    if(didStorageData){
        decodedProposerAddress = didStorageData
    }

    await createPip(ctx, header, {
        hash,
        did: identityId,
        index: index,
        proposer: decodedProposerAddress ? ss58codec.encode(decodedProposerAddress) : undefined,
        status: ProposalStatus.Proposed,
        proposedCall: await getDecodedCall(ctx, index, header, item),
    }, ProposalType.TechnicalCommittee
    )
}

