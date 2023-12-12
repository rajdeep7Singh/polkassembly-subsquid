
import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getClosedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleClosed(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const hash = getClosedData(ctx, item)

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, hash, ProposalType.TechCommitteeProposal, {
        isEnded: true,
        status: ProposalStatus.Closed,
        extrinsicIndex
    })
}