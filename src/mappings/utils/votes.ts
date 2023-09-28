import { ConvictionDelegatedVotes, ConvictionVote, FlattenedConvictionVotes, Vote } from '../../model'
import { CommonHandlerContext } from '../types/contexts'
import { Store } from '@subsquid/typeorm-store'
import { BatchContext } from '@subsquid/substrate-processor'

const proposalsVotes = new Map<string, number>()

export async function getVotesCount(ctx: CommonHandlerContext, proposalId: string) {
    let count = proposalsVotes.get(proposalId)
    if (count == null) {
        count = await ctx.store.count(Vote, {
            where: {
                proposalId,
            },
        })
    }
    proposalsVotes.set(proposalId, count + 1)
    return count
}

const proposals = new Map<number, number>()

export async function getConvictionVotesCount(ctx: BatchContext<Store, unknown>, proposalId: number) {
    let count = proposals.get(proposalId)
    if (count == null) {
        count = await ctx.store.count(ConvictionVote, {
            where: {
                proposalIndex: proposalId,
            },
        })
    }
    proposals.set(proposalId, count + 1)
    return count
}

const delegatedVotesCount = new Map<String, number>()

export async function getConvictionDelegatedVotesCount(ctx: BatchContext<Store, unknown>) {
    let count = delegatedVotesCount.get('delegatedVoteCount')
    if (count == null) {
        count = await ctx.store.count(ConvictionDelegatedVotes)
    }
    delegatedVotesCount.set('delegatedVoteCount', count + 1)
    return count
}

const flattenedVotesCount = new Map<String, number>()

export async function getFlattenedConvictionVotesCount(ctx: BatchContext<Store, unknown>) {
    let count = flattenedVotesCount.get('flattenedVoteCount')
    if (count == null) {
        count = await ctx.store.count(FlattenedConvictionVotes)
    }
    flattenedVotesCount.set('flattenedVoteCount', count + 1)
    return count
}