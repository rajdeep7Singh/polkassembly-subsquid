import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyCanceledData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleCanceled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyCanceledData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Cancelled,
        isEnded: true,
        extrinsicIndex
    })
}