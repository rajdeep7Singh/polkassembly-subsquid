import { IsNull } from 'typeorm'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

import { NoOpenVoteFound, TooManyOpenVotes } from '../../../common/errors'
import { ConvictionDelegatedVotes, ConvictionVote, Proposal, ProposalType, StandardVoteBalance, VoteType, VotingDelegation } from '../../../model'
import { getConvictionDelegatedVotesCount } from '../../utils/votes'

export function convictionToLockPeriod(conviction: string): number {
    return conviction === 'None' ? 0 : Number(conviction[conviction.search(/\d/)])
}

export async function addDelegatedVotesReferendumV2(ctx: BatchContext<Store, unknown>, toWallet: string, block: number, blockTime: number, nestedDelegations: VotingDelegation[], track: number, convictionVote: ConvictionVote): Promise<{delegatedVotes: ConvictionDelegatedVotes[], delegatedVotePower: bigint}> {
    let votingPower = BigInt(0)
    const delegatedVotes = [];
    let delegatedVotePower = BigInt(0)
    for (let i = 0; i < nestedDelegations.length; i++) {
        const delegation = nestedDelegations[i]
        const count = await getConvictionDelegatedVotesCount(ctx)
        const voteBalance = new StandardVoteBalance({
            value: delegation.balance,
        })
        if (delegation.lockPeriod === 0 && delegation.balance) {
            votingPower = delegation.balance/BigInt(10)
        }else{
            votingPower = delegation.balance ? BigInt(delegation.lockPeriod) * delegation.balance : BigInt(0)
        }      
        delegatedVotes.push(
            new ConvictionDelegatedVotes({
                id: `${count.toString().padStart(8, '0')}`,
                voter: delegation.from,
                createdAtBlock: block,
                proposalIndex: convictionVote.proposalIndex,
                decision: convictionVote.decision,
                votingPower: votingPower,
                lockPeriod: delegation.lockPeriod,
                balance: voteBalance,
                createdAt: new Date(blockTime),
                delegatedTo: convictionVote,
                type: VoteType.ReferendumV2,
            })
        )
        delegatedVotePower += votingPower
    }
    return {
        delegatedVotes,
        delegatedVotePower
    }
}


export async function getAllNestedDelegations(ctx: BatchContext<Store, unknown>, voter: string | undefined, track: number): Promise<any> {
    try{
        let delegations = await ctx.store.find(VotingDelegation, { where: { to: voter, endedAtBlock: IsNull(), track} })
        if (delegations != null && delegations != undefined && delegations.length > 0) {
            let nestedDelegations = []
            for (let i = 0; i < delegations.length; i++) {
                const delegation = delegations[i]
                if(delegation.from == voter || delegation.to == voter){
                    continue
                }
                nestedDelegations.push(...(await getAllNestedDelegations(ctx, delegation.from, track)))
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

export async function removeDelegatedVotesOngoingReferenda(ctx: BatchContext<Store, unknown>, wallet: string | undefined, block: number, blockTime: number, track: number): Promise<void> {
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const ongoingReferendum = ongoingReferenda[i]
        if(ongoingReferendum.index === undefined || ongoingReferendum.index === null) {
            continue
        }
        const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex: ongoingReferendum.index, removedAtBlock: IsNull() } })
        if(votes){
            if (votes.length > 1) {
                ctx.log.warn(TooManyOpenVotes(block, ongoingReferendum.index, wallet))
                return
            } else if (votes.length === 0) {
                return
            }
            const vote = votes[0]
            if(vote.delegatedVotes){
                await removeDelegatedVotesReferendum(ctx, block, blockTime, vote.delegatedVotes)
            }
        }
    }
}

export async function removeDelegatedVotesReferendum(ctx: BatchContext<Store, unknown>, block: number, blockTime: number, delegatedVotes: ConvictionDelegatedVotes[]): Promise<void> {
    for (let i = 0; i < delegatedVotes.length; i++) {
        const vote = delegatedVotes[i]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
    }
}

export async function removeVote(ctx: BatchContext<Store, unknown>, wallet: string | undefined, proposalIndex: number, block: number, blockTime: number, shouldHaveVote: boolean): Promise<void> {
    const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 },
        relations: {
            delegatedVotes: true
        }
    })
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
        if(vote.delegatedVotes){
            await removeDelegatedVotesReferendum(ctx, block, blockTime, vote.delegatedVotes)
        }
    }
}

export async function addDelegatedVotesReferendum(ctx: BatchContext<Store, unknown>, block: number, blockTime: number, referendum: any, nestedDelegations: VotingDelegation[], vote: ConvictionVote): Promise<{delegatedVotes: ConvictionDelegatedVotes[], delegatedVotePower: bigint}> {
    let votingPower = BigInt(0)
    const delegatedVotes = []
    let delegatedVotePower = BigInt(0)

    for (let i = 0; i < nestedDelegations.length; i++) {
        const delegation = nestedDelegations[i]
        const count = await getConvictionDelegatedVotesCount(ctx)
        const voteBalance = new StandardVoteBalance({
            value: delegation.balance,
        })
        if (delegation.lockPeriod === 0 && delegation.balance) {
            votingPower = delegation.balance/BigInt(10)
        }else{
            votingPower = delegation.balance ? BigInt(delegation.lockPeriod) * delegation.balance : BigInt(0)
        }
        delegatedVotes.push(
            new ConvictionDelegatedVotes({
                id: `${count.toString().padStart(8, '0')}`,
                proposalIndex: referendum.index,
                voter: delegation.from,
                createdAtBlock: block,
                decision: vote.decision,
                votingPower: votingPower,
                lockPeriod: delegation.lockPeriod,
                balance: voteBalance,
                createdAt: new Date(blockTime),
                delegatedTo: vote,
                type: VoteType.ReferendumV2,
            })
        )
        delegatedVotePower += votingPower
    }
    return { delegatedVotes, delegatedVotePower }
}