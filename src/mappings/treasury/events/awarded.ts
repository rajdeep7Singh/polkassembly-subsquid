import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getAwarderData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleAwarded(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getAwarderData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.TreasuryProposal, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        extrinsicIndex
    })
}
