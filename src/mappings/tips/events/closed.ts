import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getClosedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'


export async function handleClosed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash, reward } = getClosedData( item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, hash, ProposalType.Tip, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Closed,
        data: {
            reward,
        },
    })
}