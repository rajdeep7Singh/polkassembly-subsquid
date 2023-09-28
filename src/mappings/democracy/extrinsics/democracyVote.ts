import { MissingProposalRecordWarn, TooManyOpenVotes } from '../../../common/errors'
import {
    ConvictionVote,
    Proposal,
    ProposalType,
    SplitVoteBalance,
    StandardVoteBalance,
    Vote,
    VoteBalance,
    VoteDecision,
    VoteType,
    FlattenedConvictionVotes
} from '../../../model'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { getOriginAccountId } from '../../../common/tools'
import { getConvictionVotesCount, getFlattenedConvictionVotesCount } from '../../utils/votes'
import { getVoteData, getSecondedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { getDelegations, removeDelegatedVotesReferendum, addDelegatedVotesReferendum } from './utils'
import { IsNull } from 'typeorm'
import { randomUUID } from 'crypto'


export async function handleVote(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.vote', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!(item.call as any).success) return

    const { index, vote } = getVoteData(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }

    const from = getOriginAccountId(item.call.origin)

    if(!from){
        ctx.log.warn('No from address found for Conviction.vote call')
        return
    }

    const votes = await ctx.store.find(ConvictionVote, { where: { voter: from, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.Referendum } })
    if(votes){
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(header.height, index, from))
        }

        if (votes.length > 0) {
            const vote = votes[0]
            vote.removedAtBlock = header.height
            vote.removedAt = new Date(header.timestamp)
            const flattenedVote = await ctx.store.get(FlattenedConvictionVotes, { where: { voter: from, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.Referendum } })
            if(flattenedVote){
                flattenedVote.removedAtBlock = header.height
                flattenedVote.removedAt = new Date(header.timestamp)
                await ctx.store.save(flattenedVote)
            }
            await ctx.store.save(vote)
            const delegatedVotes = vote.delegatedVotes
            if(delegatedVotes){
                await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, delegatedVotes)
            }
        }
    }

    const nestedDelegations = await getDelegations(ctx, from)

    let decision: VoteDecision | undefined = undefined
    switch (vote.type) {
        case 'Standard':
            decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'Split':
            decision = VoteDecision.abstain
            break
    }

    let lockPeriod: number | undefined
    let balance: VoteBalance | undefined
    let votingPower: bigint | undefined = BigInt(0)
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
        if (lockPeriod === 0 && vote.balance) {
            votingPower = vote.balance/BigInt(10)
        }
        else{
            votingPower = lockPeriod && vote.balance ? (vote.balance) * BigInt(lockPeriod) : BigInt(0)
        }

    }

    const count = await getConvictionVotesCount(ctx, index)

    const convictionVote = new ConvictionVote({
        id: `${index}-${count.toString().padStart(8, '0')}`,
        voter: item.call.origin ? getOriginAccountId(item.call.origin) : null,
        createdAtBlock: header.height,
        proposalIndex: index,
        proposalId: proposal.id,
        decision,
        lockPeriod,
        proposal,
        balance,
        createdAt: new Date(header.timestamp),
        selfVotingPower: votingPower,
        type: VoteType.Referendum,
    })

    const flattenedCount = await getFlattenedConvictionVotesCount(ctx)

    const { delegatedVotes, delegatedVotePower, flattenedVotes } = await addDelegatedVotesReferendum(ctx, header.height, header.timestamp, nestedDelegations, convictionVote)
    
    convictionVote.delegatedVotingPower = convictionVote.delegatedVotingPower ? convictionVote.delegatedVotingPower + delegatedVotePower : delegatedVotePower
    convictionVote.totalVotingPower = votingPower + convictionVote.delegatedVotingPower

    await ctx.store.insert(convictionVote)

    await ctx.store.insert(delegatedVotes)

    flattenedVotes.push(new FlattenedConvictionVotes({
        id: `${index}-${flattenedCount.toString().padStart(8, '0')}`,
        voter: item.call.origin ? getOriginAccountId(item.call.origin) : null,
        parentVote: convictionVote,
        isDelegated: false,
        delegatedTo: null,
        proposalIndex: index,
        proposal: proposal,
        createdAtBlock: header.height,
        removedAtBlock: null,
        createdAt: new Date(header.timestamp),
        removedAt: null,
        decision: decision,
        balance: balance,
        lockPeriod: lockPeriod,
        type: VoteType.Referendum,
    }))

    await ctx.store.insert(flattenedVotes)
}

export async function handleDemocracySeconds(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.second', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    const { index, seconds } = getSecondedData(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.DemocracyProposal } })
    if (!proposal || proposal.index === undefined || proposal.index === null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.DemocracyProposal, index))
        return
    }

    //const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: item.call.origin ? getOriginAccountId(item.call.origin) : null,
            blockNumber: header.height,
            decision: VoteDecision.yes,
            proposal,
            proposalIndex: proposal.index,
            balance: new StandardVoteBalance({
                value: BigInt(0),
            }),
            timestamp: new Date(header.timestamp),
            type: VoteType.DemocracyProposal,
        })
    )
}