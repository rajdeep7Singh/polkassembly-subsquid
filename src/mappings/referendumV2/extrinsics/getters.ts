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
    else if(event.isV9340){
        const { pollIndex, vote } = event.asV9340
        if (vote.__kind === 'Standard') {
            return {
                index: pollIndex,
                vote: {
                    type: 'Standard',
                    balance: vote.balance,
                    value: vote.vote
                },
            }
        }
        else if (vote.__kind === 'Split') {
            return {
                index: pollIndex,
                vote: {
                    type: 'Split',
                    aye: vote.aye,
                    nay: vote.nay,
                },
            }
        }
        else{
            return {
                index: pollIndex,
                vote: {
                    type: 'SplitAbstain',
                    aye: vote.aye,
                    nay: vote.nay,
                    abstain: vote.abstain,
                },
            }
        }
    }  
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
