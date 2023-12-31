import { MissingProposalRecordWarn } from '../../../common/errors'
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { getProposeCuratorData } from './getters'
import { BatchContext, SubstrateBlock, toHex } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { updateProposalStatus } from '../../utils/proposals'



export async function handleProposeCurator(ctx: BatchContext<Store, unknown>,
    item: CallItem<'ChildBounties.propose_curator', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return

    const { parentBountyId, childBountyId, curator, fee } = getProposeCuratorData(ctx, item.call)

    if(!curator || typeof curator == 'number'){
        return
    }

    const proposal = await ctx.store.get(Proposal, { where: { index: childBountyId, parentBountyIndex: parentBountyId, type: ProposalType.ChildBounty  } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ChildBounty, childBountyId))
        return
    }

    const origin = getOriginAccountId(item.call.origin)
    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }

    proposal.curator = ss58codec.encode(curator)
    proposal.fee = fee
    await ctx.store.save(proposal)

    await updateProposalStatus(ctx, header, childBountyId, ProposalType.ChildBounty, {
        status: ProposalStatus.CuratorProposed,
    })

}
