import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getApprovedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const hash = getApprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.CouncilMotion, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Approved,
    })
}