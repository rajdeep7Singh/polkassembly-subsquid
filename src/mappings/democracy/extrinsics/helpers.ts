import { SubstrateBlock } from '@subsquid/substrate-processor'
import { IsNull } from 'typeorm'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

import { NoOpenVoteFound, TooManyOpenVotes } from '../../../common/errors'
import { ConvictionVote, Proposal, ProposalType, StandardVoteBalance, Vote, VoteType, VotingDelegation } from '../../../model'
import { randomUUID } from 'crypto'

export function convictionToLockPeriod(convictionKind: string): number {
    return convictionKind === 'None' ? 0 : Number(convictionKind[convictionKind.search(/\d/)])
}

export async function addDelegatedVotesReferendumV2(ctx: BatchContext<Store, unknown>, toWallet: string, block: number, blockTime: number, referendum: any, nestedDelegations: VotingDelegation[]): Promise<void> {
    //get top toWallet vote
    const votes = await ctx.store.find(Vote, { where: { voter: toWallet, proposalIndex: referendum.index, removedAtBlock: IsNull(), type: VoteType.Referendum } })
    if (votes.length > 1) {
        ctx.log.warn(TooManyOpenVotes(block, referendum.index, toWallet))
        return
    }
    else if (votes.length === 0) {
        //to wallet didn't vote yet
        // ctx.log.warn(NoOpenVoteFound(header.height, ongoingReferendum.index, toAddress))
        return
    }
    const vote = votes[0]
    for (let i = 0; i < nestedDelegations.length; i++) {
        //add votes
        const delegation = nestedDelegations[i]
        // const count = await getConvictionVotesCount(ctx, referendum.id)
        const voteBalance = new StandardVoteBalance({
            value: delegation.balance,
        })
        await ctx.store.insert(
            new Vote({
                id: randomUUID(),
                proposalIndex: referendum.index,
                voter: delegation.from,
                blockNumber: block,
                decision: vote.decision,
                lockPeriod: delegation.lockPeriod,
                proposal: referendum,
                balance: voteBalance,
                timestamp: new Date(blockTime),
                delegatedTo: delegation.to,
                type: VoteType.Referendum,
                isDelegated: true,
            })
        )
    }
}


export async function getAllNestedDelegations(ctx: BatchContext<Store, unknown>, voter: string | undefined): Promise<any> {
    try{
        let delegations = await ctx.store.find(VotingDelegation, { where: { to: voter, endedAtBlock: IsNull()} })
        if (delegations != null && delegations != undefined && delegations.length > 0) {
            let nestedDelegations = []
            for (let i = 0; i < delegations.length; i++) {
                const delegation = delegations[i]
                nestedDelegations.push(...(await getAllNestedDelegations(ctx, delegation.from)))
            }
            return [...delegations, ...nestedDelegations]
        }
        else {
            return []
        }
    }
    catch(e) {
        return []
    }
}

export async function removeDelegatedVotesOngoingReferenda(ctx: BatchContext<Store, unknown>, wallet: string | undefined, block: number, blockTime: number): Promise<void> {
    //get any ongoing referenda in this track
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), type: ProposalType.Referendum } })
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet)
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const ongoingReferendum = ongoingReferenda[i]
        if(ongoingReferendum.index === undefined || ongoingReferendum.index === null) {
            continue
        }
        await removeDelegatedVotesReferendum(ctx, block, blockTime, ongoingReferendum.index, nestedDelegations)
    }
}

export async function removeDelegatedVotesReferendum(ctx: BatchContext<Store, unknown>, block: number, blockTime: number, index: number, nestedDelegations: VotingDelegation[]): Promise<void> {
    for (let i = 0; i < nestedDelegations.length; i++) {
        const delegation = nestedDelegations[i]
        const votes = await ctx.store.find(Vote, { where: { voter: delegation.from, delegatedTo: delegation.to, proposalIndex: index, removedAtBlock: IsNull(), isDelegated: true } })
        if(votes){
            if (votes.length > 1) {
                ctx.log.warn(TooManyOpenVotes(block, index, delegation.from))
                return
            }
            else if (votes.length === 0) {
                return
            }
            const vote = votes[0]
            vote.removedAtBlock = block
            vote.removedAt = new Date(blockTime)
            await ctx.store.save(vote)
        }
    }
}

export async function removeVote(ctx: BatchContext<Store, unknown>, wallet: string | undefined, proposalIndex: number, block: number, blockTime: number, shouldHaveVote: boolean, isDelegated: boolean = false, delegatedTo?: string): Promise<void> {
    const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex, removedAtBlock: IsNull(), isDelegated, delegatedTo, type: VoteType.Referendum } })
    if(votes){
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(block, proposalIndex, wallet))
            return
        }
        else if (votes.length === 0 && shouldHaveVote) {
            ctx.log.warn(NoOpenVoteFound(block, proposalIndex, wallet))
            return
        }
        else if (votes.length === 0 && !shouldHaveVote) {
            return
        }
        const vote = votes[0]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
    }
}

export async function addOngoingReferendaDelegatedVotes(ctx: BatchContext<Store, unknown>, toWallet: string | undefined, header: SubstrateBlock,): Promise<void> {
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), type: ProposalType.Referendum } })
    const nestedDelegations = await getAllNestedDelegations(ctx, toWallet)
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const ongoingReferendum = ongoingReferenda[i]
        await addDelegatedVotesReferendum(ctx, toWallet, header.height, header.timestamp, ongoingReferendum, nestedDelegations)
    }
}

export async function addDelegatedVotesReferendum(ctx: BatchContext<Store, unknown>, toWallet: string | undefined, block: number, blockTime: number, referendum: any, nestedDelegations: VotingDelegation[]): Promise<void> {
    //get top toWallet vote
    const votes = await ctx.store.find(Vote, { where: { voter: toWallet, proposalIndex: referendum.index, removedAtBlock: IsNull() } })
    if(votes){
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(block, referendum.index, toWallet))
            return
        }
        else if (votes.length === 0) {
            //to wallet didn't vote yet
            // ctx.log.warn(NoOpenVoteFound(header.height, ongoingReferendum.index, toAddress))
            return
        }
        const vote = votes[0]
        for (let i = 0; i < nestedDelegations.length; i++) {
            //add votes
            const delegation = nestedDelegations[i]
            // const count = await getConvictionVotesCount(ctx, referendum.id)
            const voteBalance = new StandardVoteBalance({
                value: delegation.balance,
            })
            await ctx.store.insert(
                new Vote({
                    id: randomUUID(),
                    proposalIndex: referendum.index,
                    voter: delegation.from,
                    blockNumber: block,
                    decision: vote.decision,
                    lockPeriod: delegation.lockPeriod,
                    proposal: referendum,
                    balance: voteBalance,
                    timestamp: new Date(blockTime),
                    delegatedTo: delegation.to,
                    type: VoteType.Referendum,
                    isDelegated: true,
                })
            )
        }
    }
}