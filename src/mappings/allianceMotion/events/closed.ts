import { ProposalStatus, ProposalType } from '../../../model'
import { createTally, updateProposalStatus } from '../../utils/proposals'
import { getClosedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleClosed(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { proposalHash, yesVotes, noVotes } = getClosedData(ctx, item)
    
    const tallyData = createTally({ayes: yesVotes as unknown as bigint, nays: noVotes as unknown as bigint})

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, proposalHash, ProposalType.AllianceMotion, {
        isEnded: true,
        status: ProposalStatus.Closed,
        extrinsicIndex,
        data: {
            tally: tallyData 
        }
    })
}