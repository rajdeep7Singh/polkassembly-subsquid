import {  UnknownVersionError } from '../../../common/errors'
import { Store } from '@subsquid/typeorm-store'
import { delegate, removeOtherVote, removeVote, vote } from '../../../types/democracy/calls'
import { convictionToLockPeriod } from './utils'
import { ProcessorContext } from '../../../processor'

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

export function getVoteData(ctx: ProcessorContext<Store>, itemCall: any): DemocracyVoteCallData {
    if (vote.v34.is(itemCall)) {
        const { refIndex, vote: votedData } = vote.v34.decode(itemCall)
        if (votedData.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'Standard',
                    value: votedData.vote,
                    balance: votedData.balance,
                },
            }
        } else {
            return {
                index: refIndex,
                vote: {
                    type: 'Split',
                    aye: votedData.aye,
                    nay: votedData.nay,
                },
            }
        }
    }   
    else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export interface ConvictionVoteDelegateCallData {
    to: any
    lockPeriod: number
    balance?: bigint
}

export function getDelegateData(ctx: ProcessorContext<Store>, itemCall: any): ConvictionVoteDelegateCallData {
    if (delegate.v34.is(itemCall)) {
        const { to, conviction, balance } = delegate.v34.decode(itemCall)
        return {
            to: to,
            lockPeriod: convictionToLockPeriod(conviction.__kind),
            balance
        }
    } else if(delegate.v42.is(itemCall)) {
        const { to, conviction, balance } = delegate.v42.decode(itemCall)
        return {
            to: to.__kind != "Index" ? to.value : undefined,
            lockPeriod: convictionToLockPeriod(conviction.__kind),
            balance
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}
export interface ConvictionVoteUndelegateCallData {
    track: number
}

export interface ConvictionVotingRemoveVoteCallData {
    index: number
}

export function getRemoveVoteData(ctx: ProcessorContext<Store>, itemCall: any): ConvictionVotingRemoveVoteCallData {
    if (removeVote.v34.is(itemCall)) {
        const eventData = removeVote.v34.decode(itemCall)
        return {
            index: eventData.index,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export interface ConvictionVotingRemoveOtherVoteCallData {
    index: number
    target: string | null
}

export function getRemoveOtherVoteData(ctx: ProcessorContext<Store>, itemCall: any): ConvictionVotingRemoveOtherVoteCallData {
    if (removeOtherVote.v34.is(itemCall)) {
        const { target, index } = removeOtherVote.v34.decode(itemCall)
        return {
            target,
            index
        }
    } else if (removeOtherVote.v42.is(itemCall)) {
        const { target, index } = removeOtherVote.v42.decode(itemCall)
        return {
            target: target.__kind != "Index" ? target.value : null,
            index
        }
    }else {
        throw new UnknownVersionError(itemCall.name)
    }
}
