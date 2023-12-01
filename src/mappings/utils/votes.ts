// import { ConvictionVote, Vote } from '../../model'
// import { CommonHandlerContext } from '../types/contexts'

import { Store } from "@subsquid/typeorm-store"
import { ProcessorContext } from "../../processor"
import { Activity, MetaActions, Payout } from "../../model"

// const proposalsVotes = new Map<string, number>()

// export async function getVotesCount(ctx: CommonHandlerContext, proposalId: string) {
//     let count = proposalsVotes.get(proposalId)
//     if (count == null) {
//         count = await ctx.store.count(Vote, {
//             where: {
//                 proposalId,
//             },
//         })
//     }
//     proposalsVotes.set(proposalId, count + 1)
//     return count
// }

// const proposals = new Map<string, number>()

// export async function getConvictionVotesCount(ctx: CommonHandlerContext, proposalId: string) {
//     let count = proposals.get(proposalId)
//     if (count == null) {
//         count = await ctx.store.count(ConvictionVote, {
//             where: {
//                 proposalId,
//             },
//         })
//     }
//     proposals.set(proposalId, count + 1)
//     return count
// }

const activityCount = new Map<string, number>()

export async function getActivityCount(ctx: ProcessorContext<Store>) {
    let count = activityCount.get('activityCount')
    if (count == null) {
        count = await ctx.store.count(Activity)
    }
    activityCount.set('activityCount', count + 1)
    return count
}

const metaActionsCount = new Map<string, number>()

export async function getMetaActionsCount(ctx: ProcessorContext<Store>) {
    let count = metaActionsCount.get('metaActionsCount')
    if (count == null) {
        count = await ctx.store.count(MetaActions)
    }
    metaActionsCount.set('metaActionsCount', count + 1)
    return count
}

const payoutCount = new Map<string, number>()

export async function getSalaryPayoutCount(ctx: ProcessorContext<Store>) {
    let count = payoutCount.get('payoutCount')
    if (count == null) {
        count = await ctx.store.count(Payout)
    }
    payoutCount.set('payoutCount', count + 1)
    return count
}
