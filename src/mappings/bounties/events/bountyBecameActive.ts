import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyBacameActiveData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleBecameActive(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyBacameActiveData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header,  index, ProposalType.Bounty, {
        status: ProposalStatus.Active,
        extrinsicIndex
    })
}