import { toHex } from '@subsquid/substrate-processor'
import { ss58codec } from '../../../common/tools'
import { getPipCreatedEvent, getPolymeshCommitteeProposedEvent } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { storage } from '../../../storage'
import { createPip, getDecodedCall } from '../../utils/proposals'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'

export async function handleProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Pips.ProposalCreated', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {

    const { did, pipType, proposerAddress, pipId, deposit, url, description, expiryTime, proposalData } = getPipCreatedEvent(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, { where: { index: pipId } })
    
    let decodedProposerAddress = proposerAddress

    const hexDid = toHex(did)
    if(!proposerAddress){
        const didStorageData = await storage.pips.getSubstrateAddressOfDid(ctx, did, header)
        if(didStorageData){
            decodedProposerAddress = didStorageData
        }
    }

    const decodedCall = await getDecodedCall(ctx, pipId, header)

    if(proposal){
        proposal.identity = hexDid
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
            hash: toHex(proposalData),
            did: hexDid,
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

export async function handlePolymeshCommitteeProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'PolymeshCommittee.Proposed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, identityId, hash } = getPolymeshCommitteeProposedEvent(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, { where: { index: index } })

    if(proposal){
        return
    }

    await getDecodedCall(ctx, index, header)
    let decodedProposerAddress = null
    const didStorageData = await storage.pips.getSubstrateAddressOfDid(ctx, identityId, header)
    if(didStorageData){
        decodedProposerAddress = didStorageData
    }

    await createPip(ctx, header, {
        hash: toHex(hash),
        did: toHex(identityId),
        index: index,
        proposer: decodedProposerAddress ? ss58codec.encode(decodedProposerAddress) : undefined,
        status: ProposalStatus.Proposed,
        proposedCall: await getDecodedCall(ctx, index, header),
    }, ProposalType.TechnicalCommittee
    )
}

