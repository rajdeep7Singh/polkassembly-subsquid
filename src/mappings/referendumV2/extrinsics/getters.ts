import { IsNull } from 'typeorm'
import { TooManyOpenVotes, UnknownVersionError } from '../../../common/errors'
import { ConvictionVote, VotingDelegation } from '../../../model'
import { ConvictionVotingDelegateCall, ConvictionVotingRemoveOtherVoteCall, ConvictionVotingRemoveVoteCall, ConvictionVotingUndelegateCall, ConvictionVotingVoteCall } from '../../../types/calls'
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
    | {
          type: 'SplitAbstain'
          aye: bigint
          nay: bigint
          abstain: bigint
    }


interface DemocracyVoteCallData {
    index: number
    vote: DemocracyVote
}

export function getVoteData(ctx: CallContext): DemocracyVoteCallData {
    const event = new ConvictionVotingVoteCall(ctx)
    if (event.isV1900) {
        const { pollIndex, vote } = event.asV1900
        if(vote.__kind === 'Standard') {
            return {
                index: pollIndex,
                vote: {
                    type: 'Standard',
                    balance: vote.balance,
                    value: vote.vote
                },
            }
        }
         else {
            return {
                index: pollIndex,
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
    track: number
    to: any
    lockPeriod: number
    balance?: bigint
}

export function getDelegateData(ctx: CallContext): ConvictionVoteDelegateCallData {
    const event = new ConvictionVotingDelegateCall(ctx)
   
    if (event.isV1900) {
        //{ class, to, conviction, balance}
        const eventData = event.asV1900
        return {
            track: eventData.class,
            to: eventData.to,
            lockPeriod:convictionToLockPeriod(eventData.conviction.__kind),
            balance: eventData.balance
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
export interface ConvictionVoteUndelegateCallData {
    track: number
}

export function getUndelegateData(ctx: CallContext): ConvictionVoteUndelegateCallData {
    const event = new ConvictionVotingUndelegateCall(ctx)
   
    if (event.isV1900) {
        const eventData = event.asV1900
        return {
            track: eventData.class
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ConvictionVotingRemoveVoteCallData {
    index: number
    track: number | undefined
}

export function getRemoveVoteData(ctx: CallContext): ConvictionVotingRemoveVoteCallData {
    const event = new ConvictionVotingRemoveVoteCall(ctx)
    if (event.isV1900) {
        const eventData = event.asV1900
        return {
            index: eventData.index,
            track: eventData.class
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface ConvictionVotingRemoveOtherVoteCallData {
    index: number
    track: number | undefined
    target: Uint8Array | null
}

export function getRemoveOtherVoteData(ctx: CallContext): ConvictionVotingRemoveOtherVoteCallData {
    const event = new ConvictionVotingRemoveOtherVoteCall(ctx)
    if (event.isV1900) {
        const eventData = event.asV1900
        return {
            index: eventData.index,
            track: eventData.class,
            target: eventData.target
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}