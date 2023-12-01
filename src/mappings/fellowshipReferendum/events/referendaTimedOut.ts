
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getTimedOutData } from './getters'
import {createTally} from '../../utils/proposals'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleTimedOut(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { index } = getTimedOutData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.TimedOut,
        extrinsicIndex
    })
}