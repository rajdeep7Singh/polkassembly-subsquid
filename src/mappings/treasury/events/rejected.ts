import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getRejectedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleRejected(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getRejectedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.TreasuryProposal, {
        isEnded: true,
        status: ProposalStatus.Rejected,
        extrinsicIndex
    })
}
