import { UnknownVersionError } from '../../../common/errors'
import { ConvictionVotingVoteCall } from '../../../types/calls'
import { CallContext } from '../../types/contexts'

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

export function getVoteData(ctx: CallContext): DemocracyVoteCallData {
    const event = new ConvictionVotingVoteCall(ctx)
    if (event.isV9320) {
        const { pollIndex, vote } = event.asV9320
        if(vote.__kind === 'Standard') {
            return {
                index: pollIndex,
                vote: {
                    type: 'Standard',
                    balance: vote.balance,
                    value: vote.vote
                },
            }
        } else {
            return {
                index: pollIndex,
                vote: {
                    type: 'Split',
                    aye: vote.aye,
                    nay: vote.nay,
                },
            }
        }
    }  else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
