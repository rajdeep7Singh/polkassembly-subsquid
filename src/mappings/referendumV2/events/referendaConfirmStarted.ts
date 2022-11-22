import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getConfirmStartedData } from './getters'

export async function handleConfirmStarted(ctx: EventHandlerContext) {
    const { index } = getConfirmStartedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.ConfirmStarted,
    })
}