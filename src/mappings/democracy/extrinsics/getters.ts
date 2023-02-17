import { UnknownVersionError } from '../../../common/errors'
import { DemocracyVoteCall, DemocracySecondCall } from '../../../types/calls'
import { CallContext } from '../../types/contexts'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

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