import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getExecutedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleExecuted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'AllianceMotion.Executed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { proposalHash, err} = getExecutedData(ctx, item.event)

    const hexHash = toHex(proposalHash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.AllianceMotion, {
        isEnded: true,
        status: err ? ProposalStatus.NotPassed : ProposalStatus.Executed,
    })
}