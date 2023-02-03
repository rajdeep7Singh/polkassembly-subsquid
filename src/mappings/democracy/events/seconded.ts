import { randomUUID } from 'crypto'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, StandardVoteBalance, Vote, VoteType } from '../../../model'
import { getDemocracySecondedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { VoteDecision } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

export async function handleDemocracySeconds(ctx: EventHandlerContext) {
    const { accountId, refIndex } = getDemocracySecondedData(ctx)

    const amount = undefined;

    const proposal = await ctx.store.get(Proposal, { where: { index: refIndex, type: ProposalType.DemocracyProposal } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.FellowshipReferendum, refIndex))
        return
    }

    //const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(accountId),
            blockNumber: ctx.block.height,
            decision: VoteDecision.yes,
            proposal,
            balance: new StandardVoteBalance({
                value: amount ? BigInt(amount) : BigInt(0),
            }),
            timestamp: new Date(ctx.block.timestamp),
            type: VoteType.DemocracyProposal,
        })
    )
}