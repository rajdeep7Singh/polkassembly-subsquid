import {  UnknownVersionError } from '../../../common/errors'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { DemocracyDelegateCall, DemocracyRemoveOtherVoteCall, DemocracyRemoveVoteCall, DemocracyVoteCall, DemocracySecondCall } from '../../../types/calls'
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
    if (event.isV200) {
        const { refIndex, vote } = event.asV200
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
    if (event.isV200) {
        const { to, conviction, balance } = event.asV200
        return {
            to: to,
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
    if (event.isV200) {
        const eventData = event.asV200
        return {
            index: eventData.index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ConvictionVotingRemoveOtherVoteCallData {
    index: number
    target: any
}

export function getRemoveOtherVoteData(ctx: BatchContext<Store, unknown>, itemCall: any): ConvictionVotingRemoveOtherVoteCallData {
    const event = new DemocracyRemoveOtherVoteCall(ctx, itemCall)
    if (event.isV200) {
        const { target, index } = event.asV200
        return {
            target,
            index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
interface DemocracySecondCallData {
    index: number
    seconds: number
}

export function getSecondedData(ctx: BatchContext<Store, unknown>, itemCall: any): DemocracySecondCallData {
    const event = new DemocracySecondCall(ctx, itemCall)
    if (event.isV200) {
        const {proposal, secondsUpperBound} = event.asV200
        return {
            index: proposal,
            seconds: secondsUpperBound
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}