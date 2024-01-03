import {  UnknownVersionError } from '../../../common/errors'
import { delegate, removeOtherVote, removeVote, vote } from '../../../types/democracy/calls'
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

export function getVoteData(itemCall: any): DemocracyVoteCallData {
    if (vote.v1.is(itemCall)) {
        const { refIndex, vote: voteData } = vote.v1.decode(itemCall)
        if (voteData.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'Standard',
                    value: voteData.vote,
                    balance: voteData.balance,
                },
            }
        } else {
            return {
                index: refIndex,
                vote: {
                    type: 'Split',
                    aye: voteData.aye,
                    nay: voteData.nay,
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

export function getDelegateData(itemCall: any): ConvictionVoteDelegateCallData {
    if (delegate.v1.is(itemCall)) {
        const { to, conviction, balance } = delegate.v1.decode(itemCall)
        return {
            to: to,
            lockPeriod: convictionToLockPeriod(conviction.__kind),
            balance
        }
    } else if (delegate.v3.is(itemCall)) {
        const { to, conviction, balance } = delegate.v3.decode(itemCall)
        return {
            to: to.__kind != "Index" ? to.value : null,
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

export function getRemoveVoteData(itemCall: any): ConvictionVotingRemoveVoteCallData {
    if (removeVote.v1.is(itemCall)) {
        const eventData = removeVote.v1.decode(itemCall)
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

export function getRemoveOtherVoteData(itemCall: any): ConvictionVotingRemoveOtherVoteCallData {
    if (removeOtherVote.v1.is(itemCall)) {
        const { target, index } = removeOtherVote.v1.decode(itemCall)
        return {
            target,
            index
        }
    } else if (removeOtherVote.v3.is(itemCall)) {
        const { target, index } = removeOtherVote.v3.decode(itemCall)
        return {
            target:target.__kind != "Index" ? target.value : null,
            index
        }
    }else {
        throw new UnknownVersionError(itemCall.name)
    }
}
