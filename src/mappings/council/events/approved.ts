import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getApprovedData } from './getters'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleApproved(ctx: ProcessorContext<Store>, item: Event, header: any) {
    const hash = getApprovedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, hash, ProposalType.CouncilMotion, {
        isEnded: true,
        status: ProposalStatus.Approved,
        extrinsicIndex
    })
}