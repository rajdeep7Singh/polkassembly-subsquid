
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getExecutedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleExecuted(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const {proposalHash, result} = getExecutedData(ctx, item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, proposalHash, ProposalType.TechCommitteeProposal, {
        isEnded: true,
        status: result ? ProposalStatus.Executed : ProposalStatus.ExecutionFailed,
        extrinsicIndex
    })
}