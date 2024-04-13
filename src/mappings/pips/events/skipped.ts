import { ProposalStatus } from '../../../model'
import { ProcessorContext, Event } from '../../../processor';
import { updateProposalStatus } from '../../utils/proposals'
import { getPipSkippedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handlePipSkipped(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const {index } = getPipSkippedData(item)

    await updateProposalStatus(ctx, header, index, {
        status: ProposalStatus.Skipped,
    })
}