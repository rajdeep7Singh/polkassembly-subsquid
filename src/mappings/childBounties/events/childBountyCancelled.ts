import { ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event } from '../../../processor'
import { updateProposalStatus } from '../../utils/proposals'
import { getChildBountyCancelledData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleCancelled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { parentIndex, childIndex } = getChildBountyCancelledData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, childIndex, ProposalType.ChildBounty, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
    })
}