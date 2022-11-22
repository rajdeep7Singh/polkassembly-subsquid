import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getTimedOutData } from './getters'
import {createTally} from '../../utils/proposals'

export async function handleTimedOut(ctx: EventHandlerContext) {
    const { index, tally } = getTimedOutData(ctx)

    const tallyData = createTally(tally)

    await updateProposalStatus(ctx, index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.TimedOut,
        data: {
            tally: tallyData
        }
    })
}