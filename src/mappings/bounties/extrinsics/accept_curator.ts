import { MissingProposalRecordWarn } from '../../../common/errors'
import { getOriginAccountId } from '../../../common/tools'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Proposal, ProposalType } from '../../../model'
import { CallHandlerContext } from '../../types/contexts'
import { getAccepterCuratorData } from './getters'

export async function handleAcceptCurator(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Bounties.accept_curator', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return

    const { index } = getAccepterCuratorData(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    const origin = getOriginAccountId(item.call.origin)
    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }
    proposal.curator = getOriginAccountId(item.call.origin)

    await ctx.store.save(proposal)
}
