import { CallHandlerContext } from '../../types/contexts'
import { MissingProposalRecordWarn, TooManyOpenVotes } from '../../../common/errors'
import {
    Proposal,
    ProposalType,
    SplitVoteBalance,
    StandardVoteBalance,
    Vote,
    VoteBalance,
    VoteDecision,
    VoteType,
} from '../../../model'
import { getOriginAccountId } from '../../../common/tools'
import { getVoteData } from './getters'
import { randomUUID } from 'crypto'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { IsNull } from 'typeorm'

export async function handleVote(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.vote', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return

    const { index, vote } = getVoteData(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!proposal || !proposal.index) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }

    let decision: VoteDecision
    switch (vote.type) {
        case 'Standard':
            decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'Split':
            decision = VoteDecision.abstain
            break
    }
    const originAccountId = getOriginAccountId(item.call.origin)

    const votes = await ctx.store.find(Vote, { where: { voter: originAccountId, proposalIndex: proposal.index, removedAtBlock: IsNull() } })
    
    if (votes.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenVotes(header.height, index, originAccountId))
    }

    if (votes.length > 0) {
        const vote = votes[0]
        vote.removedAtBlock = header.height
        vote.removedAt = new Date(header.timestamp)
        await ctx.store.save(vote)
    }

    let lockPeriod: number | undefined
    let balance: VoteBalance | undefined
    if (vote.type === 'Split') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
        })
    } else if (vote.type === 'Standard') {
        balance = new StandardVoteBalance({
            value: vote.balance,
        })
        lockPeriod = vote.value < 128 ? vote.value : vote.value - 128
    }

    // const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: item.call.origin ? getOriginAccountId(item.call.origin) : null,
            blockNumber: header.height,
            proposalIndex: proposal.index,
            decision,
            lockPeriod,
            proposal,
            balance,
            timestamp: new Date(header.timestamp),
            type: VoteType.Referendum,
        })
    )
}

export async function handlePrecompileVote(ctx: BatchContext<Store, unknown>, item: any, header: SubstrateBlock, data:any, originAccountId: string, txnHash: string) {
    if (!item.success) return

    const [ index, aye, amount, conviction ] = data

    const refIndex = index.toNumber()

    const proposal = await ctx.store.get(Proposal, { where: { index: refIndex , type: ProposalType.Referendum } })
    if (!proposal || !proposal.index) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }

    const votes = await ctx.store.find(Vote, { where: { voter: originAccountId, proposalIndex: proposal.index, removedAtBlock: IsNull() } })
    
    if (votes.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenVotes(header.height, index, originAccountId))
    }

    if (votes.length > 0) {
        const vote = votes[0]
        vote.removedAtBlock = header.height
        vote.removedAt = new Date(header.timestamp)
        await ctx.store.save(vote)
    }

    const decision: VoteDecision = aye ? VoteDecision.yes : VoteDecision.no

    let lockPeriod: number | undefined
    let balance: VoteBalance | undefined
    balance = new StandardVoteBalance({
        value: amount.toBigInt(),
    })

    lockPeriod = conviction.toNumber()

    // const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: originAccountId,
            blockNumber: header.height,
            proposalIndex: proposal.index,
            decision,
            lockPeriod,
            proposal,
            balance,
            timestamp: new Date(header.timestamp),
            type: VoteType.Referendum,
            txnHash: txnHash
        })
    )
}