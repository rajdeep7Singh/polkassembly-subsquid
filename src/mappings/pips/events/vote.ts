import { randomUUID } from 'crypto'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { Proposal, StandardVoteBalance, Vote, VoteDecision } from '../../../model'
import { getVoteData, getVoteRetractedData, getCommunityVoteData, getPolymeshCommitteeFinalVotesDataEvent } from './getters'
import { In, IsNull } from 'typeorm'
import { BatchContext, SubstrateBlock, toHex } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { storage } from '../../../storage'
import { ss58codec } from '../../../common/tools'
import { createTally } from '../../utils/proposals'

export async function handleVote(ctx: BatchContext<Store, unknown>,
    item: EventItem<'PolymeshCommittee.Voted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, did, hash, currentVote, aye, nay, totalSeats } = getVoteData(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, { where: { index } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(index))
        console.log(`MissingProposalRecordWarn at block ${header.height} for proposal ${index}`)
        return
    }
    const decision = currentVote ? VoteDecision.yes : VoteDecision.no

    const hexDid = toHex(did)
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

    const vote = await ctx.store.get(Vote, {where: {proposalIndex: index, identityId: hexDid, removedAtBlock: IsNull()}})

    if (vote){
        vote.removedAtBlock = header.height
        vote.removedAt = new Date(header.timestamp)

        await ctx.store.save(vote)
    }

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            identityId: hexDid,
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

export async function handleVoteRetracted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'PolymeshCommittee.VoteRetracted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, did, hash, currentVote } = getVoteRetractedData(ctx, item.event)
    const proposal = await ctx.store.get(Proposal, { where: { index } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(index))
        return
    }

    const decision = currentVote ? VoteDecision.yes : VoteDecision.no

    const vote = await ctx.store.get(Vote, { where: { proposalIndex: index, identityId: toHex(did), decision: decision, removedAtBlock: IsNull() } })

    if (!vote) {
        ctx.log.warn(`Vote for proposal ${index} by ${toHex(did)} is not found`)
        return
    }

    vote.removedAt = new Date(header.timestamp)
    vote.removedAtBlock = header.height

    await ctx.store.save(vote)

}

export async function handleCommunityVote(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Pips.Voted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, did, accountId, currentVote, deposit } = getCommunityVoteData(ctx, item.event)
    
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

    const hexDid = toHex(did)
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

export async function handlePolymeshCommitteefinalVotesData(ctx: BatchContext<Store, unknown>,
    item: EventItem<'PolymeshCommittee.FinalVotes', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock){
        const { identityId, index, hash, ayes, nays } = getPolymeshCommitteeFinalVotesDataEvent(ctx, item.event)

        const proposal = await ctx.store.get(Proposal, { where: { index } })
        if (!proposal) {
            ctx.log.warn(MissingProposalRecordWarn(index))
            console.log(`MissingProposalRecordWarn at block ${header.height} for proposal ${index}`)
            return
        }

        const hexAyes = ayes.map((aye) => toHex(aye))
        const hexNays = nays.map((nay) => toHex(nay))

        const obj: any = {}
        
        for (let i = 0; i < hexAyes.length; i++){
            obj[hexAyes[i]] = VoteDecision.yes
        }

        for (let i = 0; i < hexNays.length; i++){
            obj[hexNays[i]] = VoteDecision.no
        }

        const votes = await ctx.store.find(Vote, { where: { proposalIndex: index, identityId: In([...hexAyes, ...hexNays]), removedAtBlock: IsNull()} })

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
            if(toHex(ayes[k]) in obj){
                const hexDid = toHex(ayes[k])
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
            if(toHex(nays[k]) in obj){
                const hexDid = toHex(nays[k])
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