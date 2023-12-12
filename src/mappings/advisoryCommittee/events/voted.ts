import { toHex } from '@subsquid/substrate-processor'
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
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const proposal = await ctx.store.get(Proposal, {
        where: { hash: hash, type: ProposalType.AdvisoryCommittee, endedAt: undefined },
    })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.AdvisoryCommittee, hash))
        return
    }

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