import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import {  getClosedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleClosed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const hash = getClosedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.TechCommitteeProposal, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Closed,
    })
}