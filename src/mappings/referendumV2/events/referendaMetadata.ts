import { Proposal, ProposalType } from '../../../model'
import { getMetadataSetData, getMetadataClearedData } from './getters'
import { BatchContext, SubstrateBlock, toHex } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleMetadataSet(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Referenda.MetadataSet', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, hash } = getMetadataSetData(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2 } })
    if (!proposal) {
        ctx.log.warn(`Proposal with index ${index} not found for setting metadata at block ${header.height}`)
        return
    }

    proposal.metadata = toHex(hash)
    proposal.updatedAt = new Date(header.timestamp)
    proposal.updatedAtBlock = header.height

    await ctx.store.save(proposal)

}

export async function handleMetadataCleared(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Referenda.MetadataCleared', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getMetadataClearedData(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2 } })
    if (!proposal) {
        ctx.log.warn(`Proposal with index ${index} not found for setting metadata at block ${header.height}`)
        return
    }

    proposal.metadata = null
    proposal.updatedAt = new Date(header.timestamp)
    proposal.updatedAtBlock = header.height

    await ctx.store.save(proposal)

}