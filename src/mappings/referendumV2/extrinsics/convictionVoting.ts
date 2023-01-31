import { CallHandlerContext } from '../../types/contexts'
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
} from '../../../model'
import { getOriginAccountId } from '../../../common/tools'
import { getVotesCount } from '../../utils/votes'
import { getVoteData } from './getters'
import { getAllNestedDelegations, removeDelegatedVotesReferendum } from './helpers'
import { addDelegatedVotesReferendumV2 }  from './helpers'
import { IsNull } from 'typeorm'
import { randomUUID } from 'crypto'

export async function handleConvictionVote(ctx: CallHandlerContext) {
    if (!ctx.call.success) return

    const { index, vote } = getVoteData(ctx)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2 } })
    if (!proposal || proposal.trackNumber === undefined || proposal.trackNumber === null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }

    const from = getOriginAccountId(ctx.call.origin)

    if(!from){
        ctx.log.warn('No from address found for Conviction.vote call')
        return
    }

    const votes = await ctx.store.find(ConvictionVote, { where: { voter: from, proposalIndex: index, removedAtBlock: IsNull() } })
    if (votes.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenVotes(ctx.block.height, index, from))
    }

    if (votes.length > 0) {
        const vote = votes[0]
        vote.removedAtBlock = ctx.block.height
        vote.removedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(vote)
    }

    const nestedDelegations = await getAllNestedDelegations(ctx, from, proposal.trackNumber)
    await removeDelegatedVotesReferendum(ctx, ctx.block.height, ctx.block.timestamp, index, nestedDelegations)

    let decision: VoteDecision
    switch (vote.type) {
        case 'Standard':
            decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'Split':
            decision = VoteDecision.abstain
            break
        
        case 'SplitAbstain':
            decision = VoteDecision.abstain
            break
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
    else if (vote.type === 'SplitAbstain') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
            abstain: vote.abstain,
        })
    }

    const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new ConvictionVote({
            id: randomUUID(),
            voter: ctx.call.origin ? getOriginAccountId(ctx.call.origin) : null,
            createdAtBlock: ctx.block.height,
            proposalIndex: index,
            proposalId: proposal.id,
            decision,
            lockPeriod,
            proposal,
            balance,
            isDelegated: false,
            createdAt: new Date(ctx.block.timestamp),
            type: VoteType.ReferendumV2,
        })
    )
    await addDelegatedVotesReferendumV2(ctx, from, ctx.block.height, ctx.block.timestamp, proposal, nestedDelegations, proposal.trackNumber)

}
