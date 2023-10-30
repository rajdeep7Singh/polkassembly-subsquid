import { Proposal, ConvictionVote, ProposalType, VoteType } from '../../../model'
// import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
// import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { toHex } from '@subsquid/substrate-processor'
import { getRemoveOtherVoteData } from './getters'
import { IsNull } from 'typeorm'
import { NoOpenVoteFound, TooManyOpenVotes } from '../../../common/errors'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { getAllNestedDelegations, removeDelegatedVotesReferendum } from './helpers'
// import { CallHandlerContext } from '../../types/contexts'
// import { updateCurveData } from '../../../common/curveData'
import { Call, ProcessorContext } from '../../../processor'

export async function handleRemoveOtherVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const { target, index } = getRemoveOtherVoteData(ctx, item)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2} })
    if (!referendum || referendum.index == undefined || referendum.index == null || referendum.trackNumber == undefined || referendum.trackNumber == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        //ref already ended probably removing vote for democracy_unlock
        return
    }
    if (!target){
        return
    } 
    // const wallet = toHex(target)
    const wallet = target
    const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })
    if (votes.length > 1) {
        ctx.log.warn(TooManyOpenVotes(header.height, index, wallet))
    }
    else if (votes.length === 0) {
        ctx.log.warn(NoOpenVoteFound(header.height, index, wallet))
        return
    }
    const vote = votes[0]
    vote.removedAtBlock = header.height
    vote.removedAt = new Date(header.timestamp)
    await ctx.store.save(vote)
    // await updateCurveData(ctx, header, referendum)
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet, referendum.trackNumber)
    await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, index, nestedDelegations)
}

export async function handlePrecompileRemoveOtherVote(ctx: ProcessorContext<Store>, itemCall: any, header: any, data: any, originAccountId: any, txnHash?: string): Promise<void> {
    const [ wallet, track, index ] = data

    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2} })
    if (!referendum || referendum.index == undefined || referendum.index == null || referendum.trackNumber == undefined || referendum.trackNumber == null) {   
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        //ref already ended probably removing vote for democracy_unlock
        return
    }
    if (!wallet){
        return
    } 
    const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })
    if (votes.length > 1) {
        ctx.log.warn(TooManyOpenVotes(header.height, index, wallet))
    }
    else if (votes.length === 0) {
        ctx.log.warn(NoOpenVoteFound(header.height, index, wallet))
        return
    }
    const vote = votes[0]
    vote.removedAtBlock = header.height
    vote.removedAt = new Date(header.timestamp)
    vote.txnHash = txnHash
    await ctx.store.save(vote)
    // await updateCurveData(ctx, header, referendum)
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet, referendum.trackNumber)
    await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, index, nestedDelegations, txnHash)
}