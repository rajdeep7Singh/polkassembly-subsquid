import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getRectractedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleRetracted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getRectractedData(item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, hash, ProposalType.Tip, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Retracted,
    })
}