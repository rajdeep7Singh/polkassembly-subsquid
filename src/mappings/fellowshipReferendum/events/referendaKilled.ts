import { ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event, Block } from '../../../processor'
import { updateProposalStatus } from '../../utils/proposals'
import { getKilledData } from './getters'
import {createTally} from '../../utils/proposals'
import { Store } from '@subsquid/typeorm-store'

export async function handleKilled(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { index, tally } = getKilledData(ctx, item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.Killed,
        extrinsicIndex,
        data: {
            tally: tallyData
        }
    })
}