import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyExtendedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleExtended(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyExtendedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Extended,
        extrinsicIndex
    })
}
