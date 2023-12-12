import { Proposal, ProposalType } from '../../../model'
import { Store } from '@subsquid/typeorm-store'
import { getOriginAccountId } from '../../../common/tools'
import { getRemoveVoteData } from './getters'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { removeVote } from './utils'
import { ProcessorContext, Call } from '../../../processor'

export async function handleRemoveVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) : Promise<void> {
    if (!(item as any).success) return
    const { index } = getRemoveVoteData(ctx, item)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!referendum || referendum.index == undefined || referendum.index == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        return
    }
    const wallet = getOriginAccountId(item.origin)
    if(!wallet){
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await removeVote(ctx, wallet, index, header.height, header.timestamp, true, extrinsicIndex)
}