import { getOriginAccountId } from '../../../common/tools'
import { CallHandlerContext } from '../../types/contexts' 
import { NoDelegationFound, TooManyOpenDelegations } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { removeDelegatedVotesOngoingReferenda, removeVote } from './helpers'
import { Proposal, ProposalType } from '../../../model'
import { getUndelegateData } from './getters'
import {
    VotingDelegation
} from '../../../model'

export async function handleUndelegate(ctx: CallHandlerContext): Promise<void> {
    if (!(ctx.call as any).success) return
    const from = getOriginAccountId(ctx.call.origin)
    const { track } = getUndelegateData(ctx)
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track } })
    if (delegations.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenDelegations(ctx.block.height, track, from))
    }
    else if (delegations.length === 0) {
        //should never be the case
        ctx.log.warn(NoDelegationFound(ctx.block.height, track, from))
        return
    }
    const delegation = delegations[0]
    delegation.endedAtBlock = ctx.block.height
    delegation.endedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(delegation)
    //remove currently delegated votes from ongoing referenda for this wallet
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index == undefined || referendum.index == null){
            continue
        }
        await removeVote(ctx, from, referendum.index, ctx.block.height, ctx.block.timestamp, false, true, delegation.to)
    }
    await removeDelegatedVotesOngoingReferenda(ctx, from, ctx.block.height, ctx.block.timestamp, track)
}
