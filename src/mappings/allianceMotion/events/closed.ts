import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { createTally, updateProposalStatus } from '../../utils/proposals'
import { getClosedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { bigint } from '../../../model/generated/marshal'

export async function handleClosed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'AllianceMotion.Closed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { proposalHash, yesVotes, noVotes } = getClosedData(ctx, item.event)

    const hexHash = toHex(proposalHash)
    
    const tallyData = createTally({ayes: yesVotes as unknown as bigint, nays: noVotes as unknown as bigint})

    await updateProposalStatus(ctx, header, hexHash, ProposalType.AllianceMotion, {
        isEnded: true,
        status: ProposalStatus.Closed,
        data: {
            tally: tallyData 
        }
    })
}