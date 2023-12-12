import { MissingProposalRecordWarn } from '../../../common/errors'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { getUnassingCuratorData } from './getters'

import { Call, ProcessorContext } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { updateProposalStatus } from '../../utils/proposals'

export async function handleUnassignCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!(item as any).success) return
    const { index } = getUnassingCuratorData(ctx, item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    proposal.curator = null
    await ctx.store.save(proposal)
    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.CuratorUnassigned,
        extrinsicIndex
    })
}