import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getDecisionStartedData } from './getters'
import {createTally} from '../../utils/proposals'
import { toHex } from '@subsquid/substrate-processor'

export async function handleDecisionStarted(ctx: EventHandlerContext) {
    const { index, tally, track, hash } = getDecisionStartedData(ctx)

    const tallyData = createTally(tally)

    await updateProposalStatus(ctx, index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.Deciding,
        data: {
            tally: tallyData,
            trackNumber: track,
            hash: toHex(hash)
        }
    })
}