import { randomUUID } from 'crypto'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { Proposal, StandardVoteBalance, Vote, VoteDecision } from '../../../model'
import { getVoteData, getVoteRetractedData, getCommunityVoteData, getPolymeshCommitteeFinalVotesDataEvent } from './getters'
import { In, IsNull } from 'typeorm'
import { Store } from '@subsquid/typeorm-store'
import { storage } from '../../../storage'
import { ss58codec } from '../../../common/tools'
import { createTally } from '../../utils/proposals'
import { ProcessorContext, Event } from '../../../processor'

export async function handleVote(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, did, hash, currentVote, aye, nay, totalSeats } = getVoteData(item)

    const proposal = await ctx.store.get(Proposal, { where: { index } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(index))
        console.log(`MissingProposalRecordWarn at block ${header.height} for proposal ${index}`)
        return
    }
    const decision = currentVote ? VoteDecision.yes : VoteDecision.no

    let decodedProposerAddress = null
    const didStorageData = await storage.pips.getSubstrateAddressOfDid(ctx, did, header)
    if(didStorageData){
        decodedProposerAddress = didStorageData
    }
    const tally = {
        ayes: aye,
        nays: nay,
        totalSeats: totalSeats,
    }
    proposal.tally = createTally(tally)

    const vote = await ctx.store.get(Vote, {where: {proposalIndex: index, identityId: did, removedAtBlock: IsNull()}})

    if (vote){
        vote.removedAtBlock = header.height
        vote.removedAt = new Date(header.timestamp)

        await ctx.store.save(vote)
    }

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            identityId: did,
            voter: decodedProposerAddress ? ss58codec.encode(decodedProposerAddress) : null,
            proposalIndex: index,
            blockNumber: header.height,
            decision,
            proposal,
            timestamp: new Date(header.timestamp),
        })
    )
    await ctx.store.save(proposal)
}

export async function handleVoteRetracted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, did, hash, currentVote } = getVoteRetractedData(item)
    const proposal = await ctx.store.get(Proposal, { where: { index } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(index))
        return
    }

    const decision = currentVote ? VoteDecision.yes : VoteDecision.no

    const vote = await ctx.store.get(Vote, { where: { proposalIndex: index, identityId: did, decision: decision, removedAtBlock: IsNull() } })

    if (!vote) {
        ctx.log.warn(`Vote for proposal ${index} by ${did} is not found`)
        return
    }

    vote.removedAt = new Date(header.timestamp)
    vote.removedAtBlock = header.height

    await ctx.store.save(vote)

}

export async function handleCommunityVote(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, did, accountId, currentVote, deposit } = getCommunityVoteData(item)
    
    const proposal = await ctx.store.get(Proposal, { where: { index } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(index))
        console.log(`MissingProposalRecordWarn at block ${header.height} for proposal ${index}`)
        return
    }

    const decision = currentVote ? VoteDecision.yes : VoteDecision.no

    const balance = new StandardVoteBalance({
        value: deposit,
    })

    const hexDid = did
    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            identityId: hexDid,
            voter: ss58codec.encode(accountId),
            proposalIndex: index,
            balance,
            blockNumber: header.height,
            decision,
            proposal,
            timestamp: new Date(header.timestamp),
        })
    )
}

export async function handlePolymeshCommitteefinalVotesData(ctx: ProcessorContext<Store>,
    item: Event,
    header: any){
        const { identityId, index, hash, ayes, nays } = getPolymeshCommitteeFinalVotesDataEvent(item)

        const proposal = await ctx.store.get(Proposal, { where: { index } })
        if (!proposal) {
            ctx.log.warn(MissingProposalRecordWarn(index))
            console.log(`MissingProposalRecordWarn at block ${header.height} for proposal ${index}`)
            return
        }

        const obj: any = {}
        
        for (let i = 0; i < ayes.length; i++){
            obj[ayes[i]] = VoteDecision.yes
        }

        for (let i = 0; i < nays.length; i++){
            obj[nays[i]] = VoteDecision.no
        }

        const votes = await ctx.store.find(Vote, { where: { proposalIndex: index, identityId: In([...ayes, ...nays]), removedAtBlock: IsNull()} })

        for (const i in obj){
            for (let j = 0; j < votes.length; j++){
                const id = votes[j].identityId
                if(id == i){
                    if(obj[i] != votes[j].decision){
                        votes[j].decision = obj[i]
                    }
                    delete obj[i]
                }
            }
        }

        for (let k = 0; k < ayes.length; k++){
            if(ayes[k] in obj){
                const hexDid = ayes[k]
                let decodedProposerAddress = null
                const didStorageData = await storage.pips.getSubstrateAddressOfDid(ctx, ayes[k], header)
                if(didStorageData){
                    decodedProposerAddress = didStorageData
                }
                await ctx.store.insert(
                    new Vote({
                        id: randomUUID(),
                        identityId: hexDid,
                        voter: decodedProposerAddress ? ss58codec.encode(decodedProposerAddress) : null,
                        proposalIndex: index,
                        blockNumber: header.height,
                        decision: VoteDecision.yes,
                        proposal,
                        timestamp: new Date(header.timestamp),
                    })
                )
            }
        }

        for (let k = 0; k < nays.length; k++){
            if(nays[k] in obj){
                let decodedProposerAddress = null
                const didStorageData = await storage.pips.getSubstrateAddressOfDid(ctx, ayes[k], header)
                if(didStorageData){
                    decodedProposerAddress = didStorageData
                }
                await ctx.store.insert(
                    new Vote({
                        id: randomUUID(),
                        identityId: nays[k],
                        voter: decodedProposerAddress ? ss58codec.encode(decodedProposerAddress) : null,
                        proposalIndex: index,
                        blockNumber: header.height,
                        decision: VoteDecision.no,
                        proposal,
                        timestamp: new Date(header.timestamp),
                    })
                )
            }
        }

        await ctx.store.save(votes)
        
        let tally;
        if (!proposal.tally) {
            tally = {
                ayes: ayes.length,
                nays: nays.length,
                totalSeats: 0,
            }
            proposal.tally = createTally(tally)
        }
        else {
            proposal.tally.nays = BigInt(nays?.length)
            proposal.tally.ayes = BigInt(ayes?.length)
        }
        
        await ctx.store.save(proposal)
    }