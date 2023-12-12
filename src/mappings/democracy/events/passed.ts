import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getPassedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handlePassed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const index = getPassedData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Passed,
        extrinsicIndex
    })
}
