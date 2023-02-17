import { randomUUID } from 'crypto'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { toHex } from '@subsquid/substrate-processor'
import { Proposal, ProposalType, SplitVoteBalance, StandardVoteBalance, Vote, VoteBalance, VoteType } from '../../../model'
import { getDemocracyVotedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { VoteDecision } from '../../../model'

export async function handleDemocracyVotes(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.Voted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { accountId, refIndex, vote } = getDemocracyVotedData(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, { where: { index: refIndex, type: ProposalType.Referendum } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, refIndex))
        return
    }

    let decision: VoteDecision
    switch (vote.__kind) {
        case 'Standard':
            decision = vote.vote < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'Split':
            decision = VoteDecision.abstain
            break
    }

    let lockPeriod: number | undefined
    let balance: VoteBalance | undefined
    if (vote.__kind === 'Split') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
        })
    } else if (vote.__kind === 'Standard') {
        balance = new StandardVoteBalance({
            value: vote.balance,
        })
        lockPeriod = vote.vote < 128 ? vote.vote : vote.vote - 128
    }

    //const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: toHex(accountId),
            blockNumber: header.height,
            decision: VoteDecision.yes,
            proposal,
            balance: balance,
            timestamp: new Date(header.timestamp),
            type: VoteType.DemocracyProposal,
        })
    )
}