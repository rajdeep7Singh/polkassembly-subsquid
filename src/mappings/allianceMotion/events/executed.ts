import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getExecutedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleExecuted(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { proposalHash, err} = getExecutedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`


    await updateProposalStatus(ctx, header, proposalHash, ProposalType.AllianceMotion, {
        isEnded: true,
        status: err ? ProposalStatus.NotPassed : ProposalStatus.Executed,
        extrinsicIndex
    })
}