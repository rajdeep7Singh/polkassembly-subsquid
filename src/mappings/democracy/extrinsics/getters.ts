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
    if (vote.v25.is(itemCall)) {
        const { refIndex, vote: voteData } = vote.v25.decode(itemCall)
        if (voteData.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'Standard',
                    value: voteData.value.vote,
                    balance: voteData.value.balance,
                },
            }
        } else {
            return {
                index: refIndex,
                vote: {
                    type: 'Split',
                    aye: voteData.value.aye,
                    nay: voteData.value.nay,
                },
            }
        }
    } else if (vote.v2800.is(itemCall)) {
        const { refIndex, vote: voteData } = vote.v2800.decode(itemCall)
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
    if (delegate.v25.is(itemCall)) {
        const { to, conviction, balance } = delegate.v25.decode(itemCall)
        return {
            to: to,
            lockPeriod: convictionToLockPeriod(conviction.__kind),
            balance
        }
    } else if (delegate.v10750.is(itemCall)) {
        const { to, conviction, balance } = delegate.v10750.decode(itemCall)
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
    if (removeVote.v25.is(itemCall)) {
        const eventData = removeVote.v25.decode(itemCall)
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
    if (removeOtherVote.v25.is(itemCall)) {
        const { target, index } = removeOtherVote.v25.decode(itemCall)
        return {
            target,
            index
        }
    } else if (removeOtherVote.v10750.is(itemCall)) {
        const { target, index } = removeOtherVote.v10750.decode(itemCall)
        return {
            target:target.__kind != "Index" ? target.value : null,
            index
        }
    }else {
        throw new UnknownVersionError(itemCall.name)
    }
}
