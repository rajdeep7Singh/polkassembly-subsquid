import { toHex } from '@subsquid/substrate-processor'
import { Proposal, ProposalStatus, ProposalType, Vote, VoteDecision, VoteType } from '../../../model'
import { createTally } from '../../utils/proposals'
import { getVotedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '../../../common/tools'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { randomUUID } from 'crypto'

export async function handleVoted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'AllianceMotion.Proposed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { account, proposalHash, voted, yes, no} = getVotedData(ctx, item.event)

    const hexHash = toHex(proposalHash)

    const proposal = await ctx.store.get(Proposal, {
        where: {
            type: ProposalType.AllianceMotion, 
            hash: hexHash
        }
    })

    if(!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.AllianceMotion, hexHash))
        return
    }
    const tallyData = createTally({ayes: yes as unknown as bigint, nays: no as unknown as bigint})

    proposal.tally = tallyData
    await ctx.store.save(proposal)

    const decision: VoteDecision = voted ? VoteDecision.yes : VoteDecision.no
    
    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(account),
            blockNumber: header.height,
            decision: decision,
            proposal,
            timestamp: new Date(header.timestamp),
            type: VoteType.AllianceMotion,
        })
    )
}