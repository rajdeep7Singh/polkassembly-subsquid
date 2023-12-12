import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, Vote, VoteDecision, VoteType } from '../../../model'
import { getVotedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto'


export async function handleVoted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { voter, hash, decision } = getVotedData(ctx, item)

    const proposal = await ctx.store.get(Proposal, {
        where: { hash: hash, type: ProposalType.CouncilMotion },
    })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.CouncilMotion, hash))
        return
    }

    // const count = await getVotesCount(ctx, proposal.id)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(voter),
            blockNumber: header.height,
            decision: decision ? VoteDecision.yes : VoteDecision.no,
            proposal,
            timestamp: new Date(header.timestamp),
            type: VoteType.Motion,
            extrinsicIndex
        })
    )
}