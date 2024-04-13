import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getStatusData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleStatusChange(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const {index, status} = getStatusData(item)

    await updateProposalStatus(ctx, header, index, {
        status,
        isEnded: true ? [ProposalStatus.Executed, ProposalStatus.Rejected, ProposalStatus.Closed].includes(status as ProposalStatus): undefined,
    })
}