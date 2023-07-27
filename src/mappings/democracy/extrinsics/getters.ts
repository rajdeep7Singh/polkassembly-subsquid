import { IsNull } from 'typeorm'
import { TooManyOpenVotes, UnknownVersionError } from '../../../common/errors'
import { ConvictionVote, VotingDelegation } from '../../../model'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { DemocracyDelegateCall, DemocracyRemoveOtherVoteCall, DemocracyRemoveVoteCall, DemocracyVoteCall } from '../../../types/calls'
import { CallContext, CallHandlerContext } from '../../types/contexts'
import { convictionToLockPeriod } from './helpers'

type DemocracyVote =
    | {
          type: 'Standard'
          balance?: bigint
          value: number
      }
    | {
          type: 'Split'
          aye: bigint
          nay: bigint
      }


interface DemocracyVoteCallData {
    index: number
    vote: DemocracyVote
}

export function getVoteData(ctx: BatchContext<Store, unknown>, itemCall: any): DemocracyVoteCallData {
    const event = new DemocracyVoteCall(ctx, itemCall)
    if(event.isV266){
        const { refIndex, vote } = event.asV266
        if (vote.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'Standard',
                    balance: vote.value.balance,
                    value: vote.value.vote
                },
            }
        }
        else {
            return {
                index: refIndex,
                vote: {
                    type: 'Split',
                    aye: vote.value.aye,
                    nay: vote.value.nay,
                },
            }
        }
    }else if(event.isV295){
        const { refIndex, vote } = event.asV295
        if (vote.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'Standard',
                    balance: vote.balance,
                    value: vote.vote
                },
            }
        }
        else {
            return {
                index: refIndex,
                vote: {
                    type: 'Split',
                    aye: vote.aye,
                    nay: vote.nay,
                },
            }
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface DemocracyVoteDelegateCallData {
    to: any
    lockPeriod: number
    balance?: bigint
}

export function getDelegateData(ctx: BatchContext<Store, unknown>, itemCall: any): DemocracyVoteDelegateCallData {
    const event = new DemocracyDelegateCall(ctx, itemCall)
   
    if (event.isV266) {
        //{ class, to, conviction, balance}
        const eventData = event.asV266
        return {
            to: eventData.to,
            lockPeriod:convictionToLockPeriod(eventData.conviction.__kind),
            balance: eventData.balance
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
// export interface DemocracyVoteUndelegateCallData {
//     index: number
// }

// export function getUndelegateData(ctx: BatchContext<Store, unknown>, itemCall: any): DemocracyVoteUndelegateCallData {
//     const event = new DemocracyUndelegateCall(ctx, itemCall)
   
//     if (event.isV266) {
//         const eventData = event.asV266
//         return {
            
//         }
//     } else {
//         throw new UnknownVersionError(event.constructor.name)
//     }
// }

export interface DemocracyRemoveVoteCallData {
    index: number
}

export function getRemoveVoteData(ctx: BatchContext<Store, unknown>, itemCall: any): DemocracyRemoveVoteCallData {
    const event = new DemocracyRemoveVoteCall(ctx, itemCall)
    if (event.isV266) {
        const eventData = event.asV266
        return {
            index: eventData.index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface DemocracyRemoveOtherVoteCallData {
    target: any
    index: number
}

export function getRemoveOtherVoteData(ctx: BatchContext<Store, unknown>, itemCall: any): DemocracyRemoveOtherVoteCallData {
    const event = new DemocracyRemoveOtherVoteCall(ctx, itemCall)
    if (event.isV266) {
        const { target, index} = event.asV266
        return {
            index: index,
            target: target
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}