import { In, IsNull } from 'typeorm'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

import { NoOpenVoteFound, TooManyOpenVotes } from '../../../common/errors'
import { ConvictionDelegatedVotes, ConvictionVote, StandardVoteBalance, VoteType, VotingDelegation, FlattenedConvictionVotes, DelegationType } from '../../../model'
import { getConvictionDelegatedVotesCount, getFlattenedConvictionVotesCount } from '../../utils/votes'

export function convictionToLockPeriod(conviction: string): number {
    return conviction === 'None' ? 0 : Number(conviction[conviction.search(/\d/)])
}

export async function addDelegatedVotesReferendum(ctx: BatchContext<Store, unknown>, block: number, blockTime: number, nestedDelegations: VotingDelegation[], convictionVote: ConvictionVote): Promise<{delegatedVotes: ConvictionDelegatedVotes[], delegatedVotePower: bigint, flattenedVotes: FlattenedConvictionVotes[]}> {
    let votingPower = BigInt(0)
    const delegatedVotes = [];
    let delegatedVotePower = BigInt(0)
    const flattenedVotes = []
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
                id: `${convictionVote.proposalIndex}-${count.toString().padStart(8, '0')}`,
                voter: delegation.from,
                createdAtBlock: block,
                proposalIndex: convictionVote.proposalIndex,
                decision: convictionVote.decision,
                votingPower: votingPower,
                lockPeriod: delegation.lockPeriod,
                balance: voteBalance,
                createdAt: new Date(blockTime),
                delegatedTo: convictionVote,
                type: VoteType.Referendum,
            })
        )
        delegatedVotePower += votingPower
        const flattenedCount = await getFlattenedConvictionVotesCount(ctx)

        flattenedVotes.push(
            new FlattenedConvictionVotes({
                id: `${convictionVote.proposalIndex}-${flattenedCount.toString().padStart(8, '0')}`,
                voter: delegation.from,
                parentVote: convictionVote,
                isDelegated: true,
                delegatedTo: delegation.to,
                proposalIndex: convictionVote.proposalIndex,
                proposal: convictionVote.proposal,
                createdAtBlock: block,
                removedAtBlock: null,
                createdAt: new Date(blockTime),
                removedAt: null,
                decision: convictionVote.decision,
                balance: voteBalance,
                lockPeriod: delegation.lockPeriod,
                type: VoteType.Referendum,
            })
        )
    }
    return {
        delegatedVotes,
        delegatedVotePower,
        flattenedVotes
    }
}


export async function getDelegations(ctx: BatchContext<Store, unknown>, voter: string | undefined): Promise<any> {
    try{
        let delegations = await ctx.store.find(VotingDelegation, { where: { to: voter, endedAtBlock: IsNull(), type: DelegationType.Democracy } })
        if (delegations != null && delegations != undefined && delegations.length > 0) {
            let nestedDelegations = []
            for (let i = 0; i < delegations.length; i++) {
                const delegation = delegations[i]
                if(delegation.from == voter || delegation.to == voter){
                    continue
                }
                nestedDelegations.push(...(await getDelegations(ctx, delegation.from)))
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

export async function removeDelegatedVotesReferendum(ctx: BatchContext<Store, unknown>, block: number, blockTime: number, delegatedVotes: ConvictionDelegatedVotes[]): Promise<void> {
    const addresses: string[] = []
    for (let i = 0; i < delegatedVotes.length; i++) {
        const vote = delegatedVotes[i]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
        if(vote.voter){
            addresses.push(vote.voter)
        }
    }
    if(addresses.length > 0){
        await removeFlattenedVotes(ctx, addresses, delegatedVotes[0].proposalIndex, block, blockTime)
    }
}

export async function removeVote(ctx: BatchContext<Store, unknown>, wallet: string, proposalIndex: number, block: number, blockTime: number, shouldHaveVote: boolean): Promise<void> {
    const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex, removedAtBlock: IsNull(), type: VoteType.Referendum },
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
    await removeFlattenedVotes(ctx, [wallet], proposalIndex, block, blockTime)
}

export async function removeFlattenedVotes(ctx: BatchContext<Store, unknown>, wallet: string[], proposalIndex: number, block: number, blockTime: number): Promise<void> {
    const flattenedVotes = await ctx.store.find(FlattenedConvictionVotes, { where: { voter: In(wallet), proposalIndex, removedAtBlock: IsNull(), type: VoteType.Referendum } })
    
    for (let i = 0; i < flattenedVotes.length; i++) {
        const vote = flattenedVotes[i]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
    }
}