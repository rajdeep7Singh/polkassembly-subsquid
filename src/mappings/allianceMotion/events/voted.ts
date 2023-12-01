import { Proposal, ProposalStatus, ProposalType, Vote, VoteDecision, VoteType } from '../../../model'
import { createTally } from '../../utils/proposals'
import { getVotedData } from './getters'
import { Block, ProcessorContext, Event} from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '../../../common/tools'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { randomUUID } from 'crypto'

export async function handleVoted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { account, proposalHash, vote, yes, no} = getVotedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const proposal = await ctx.store.get(Proposal, {
        where: {
            type: ProposalType.AllianceMotion, 
            hash: proposalHash
        },
        order: {
            createdAtBlock: 'DESC'
        }
    })

    if(!proposal || proposal.index == undefined || proposal.index == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.AllianceMotion, proposalHash))
        return
    }
    const tallyData = createTally({ayes: yes as unknown as bigint, nays: no as unknown as bigint})

    proposal.tally = tallyData
    await ctx.store.save(proposal)

    const decision: VoteDecision = vote ? VoteDecision.yes : VoteDecision.no
    
    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(account),
            blockNumber: header.height,
            decision: decision,
            proposalIndex: proposal.index,
            proposal,
            timestamp: new Date(header.timestamp),
            type: VoteType.AllianceMotion,
            extrinsicIndex
        })
    )
}