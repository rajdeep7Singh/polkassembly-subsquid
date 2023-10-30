import { getOriginAccountId } from '../../../common/tools'
import { NoDelegationFound, TooManyOpenDelegations } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { removeDelegatedVotesOngoingReferenda, removeVote } from './helpers'
import { Proposal, ProposalType } from '../../../model'
import { getUndelegateData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import {
    VotingDelegation
} from '../../../model'
import { Call, ProcessorContext } from '../../../processor'

export async function handleUndelegate(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const from = getOriginAccountId(item.origin)
    const { track } = getUndelegateData(ctx, item)
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track } })
    if (delegations.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenDelegations(header.height, track, from))
    }
    else if (delegations.length === 0) {
        //should never be the case
        ctx.log.warn(NoDelegationFound(header.height, track, from))
        return
    }
    const delegation = delegations[0]
    delegation.endedAtBlock = header.height
    delegation.endedAt = new Date(header.timestamp)
    await ctx.store.save(delegation)
    //remove currently delegated votes from ongoing referenda for this wallet
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index == undefined || referendum.index == null){
            continue
        }
        await removeVote(ctx, from, referendum.index, header.height, header.timestamp, false, true, delegation.to)
    }
    await removeDelegatedVotesOngoingReferenda(ctx, from, header.height, header.timestamp, track)
}

export async function handlePrecompileUndelegate(ctx: ProcessorContext<Store>, itemCall: any, header: any, data: any, originAccountId: any, txnHash?: string): Promise<void> {
    const [track] = data
    const from = originAccountId
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track } })
    if (delegations.length > 1) {
        //should never be the case
        ctx.log.warn(TooManyOpenDelegations(header.height, track, from))
    }
    else if (delegations.length === 0) {
        //should never be the case
        ctx.log.warn(NoDelegationFound(header.height, track, from))
        return
    }
    const delegation = delegations[0]
    delegation.endedAtBlock = header.height
    delegation.endedAt = new Date(header.timestamp)
    await ctx.store.save(delegation)
    //remove currently delegated votes from ongoing referenda for this wallet
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index == undefined || referendum.index == null){
            continue
        }
        await removeVote(ctx, from, referendum.index, header.height, header.timestamp, false, true, delegation.to, txnHash)
    }
    await removeDelegatedVotesOngoingReferenda(ctx, from, header.height, header.timestamp, track, txnHash)
}