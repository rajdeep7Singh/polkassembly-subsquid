import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDisapprovedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleDisApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const hash = getDisapprovedData(ctx, item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, hash, ProposalType.AllianceMotion, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
        extrinsicIndex
        
    })
}