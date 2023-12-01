import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getApprovedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const hash = getApprovedData(ctx, item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, hash, ProposalType.AllianceMotion, {
        isEnded: true,
        status: ProposalStatus.Approved,
        extrinsicIndex
    })
}