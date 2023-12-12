import { MissingProposalRecordWarn } from '../../../common/errors'
import { getOriginAccountId } from '../../../common/tools'
import { Proposal, ProposalType } from '../../../model'
import { getAccepterCuratorData } from './getters'
import { Call, ProcessorContext } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleAcceptCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!(item as any).success) return

    const { index } = getAccepterCuratorData(ctx, item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    const origin = getOriginAccountId(item.origin)
    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }
    proposal.curator = getOriginAccountId(item.origin)

    await ctx.store.save(proposal)
}
