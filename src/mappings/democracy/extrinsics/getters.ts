import {  UnknownVersionError } from '../../../common/errors'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { DemocracyDelegateCall, DemocracyRemoveOtherVoteCall, DemocracyRemoveVoteCall, DemocracyVoteCall } from '../../../types/calls'
import { convictionToLockPeriod } from './utils'

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
    if (event.isV9300) {
        const { refIndex, vote } = event.asV9300
        if (vote.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'Standard',
                    value: vote.vote,
                    balance: vote.balance,
                },
            }
        } else {
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

export interface ConvictionVoteDelegateCallData {
    to: any
    lockPeriod: number
    balance?: bigint
}

export function getDelegateData(ctx: BatchContext<Store, unknown>, itemCall: any): ConvictionVoteDelegateCallData {
    const event = new DemocracyDelegateCall(ctx, itemCall)
    if (event.isV9300) {
        const { to, conviction, balance } = event.asV9300
        return {
            to: to.value,
            lockPeriod: convictionToLockPeriod(conviction.__kind),
            balance
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
export interface ConvictionVoteUndelegateCallData {
    track: number
}

export interface ConvictionVotingRemoveVoteCallData {
    index: number
}

export function getRemoveVoteData(ctx: BatchContext<Store, unknown>, itemCall: any): ConvictionVotingRemoveVoteCallData {
    const event = new DemocracyRemoveVoteCall(ctx, itemCall)
    if (event.isV9300) {
        const eventData = event.asV9300
        return {
            index: eventData.index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ConvictionVotingRemoveOtherVoteCallData {
    index: number
    target: Uint8Array | null
}

export function getRemoveOtherVoteData(ctx: BatchContext<Store, unknown>, itemCall: any): ConvictionVotingRemoveOtherVoteCallData {
    const event = new DemocracyRemoveOtherVoteCall(ctx, itemCall)
    if (event.isV9300) {
        const { target, index } = event.asV9300
        return {
            target: target.value,
            index
        }
    }else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
