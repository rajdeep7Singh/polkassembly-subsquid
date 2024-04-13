import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v3000 from '../v3000'

export const proposed =  {
    name: 'PolymeshCommittee.Proposed',
    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
     *  Parameters: caller DID, proposal index, proposal hash.
     */
    v3000: new EventType(
        'PolymeshCommittee.Proposed',
        sts.tuple([v3000.IdentityId, v3000.ProposalIndex, v3000.Hash])
    ),
}

export const voted =  {
    name: 'PolymeshCommittee.Voted',
    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
     *  caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
     */
    v3000: new EventType(
        'PolymeshCommittee.Voted',
        sts.tuple([v3000.IdentityId, v3000.ProposalIndex, v3000.Hash, sts.boolean(), v3000.MemberCount, v3000.MemberCount, v3000.MemberCount])
    ),
}

export const voteRetracted =  {
    name: 'PolymeshCommittee.VoteRetracted',
    /**
     *  A vote on a motion (given hash) has been retracted.
     *  caller DID, ProposalIndex, Proposal hash, vote that was retracted
     */
    v3000: new EventType(
        'PolymeshCommittee.VoteRetracted',
        sts.tuple([v3000.IdentityId, v3000.ProposalIndex, v3000.Hash, sts.boolean()])
    ),
}

export const finalVotes =  {
    name: 'PolymeshCommittee.FinalVotes',
    /**
     *  Final votes on a motion (given hash)
     *  caller DID, ProposalIndex, Proposal hash, yes voters, no voter
     */
    v3000: new EventType(
        'PolymeshCommittee.FinalVotes',
        sts.tuple([v3000.IdentityId, v3000.ProposalIndex, v3000.Hash, sts.array(() => v3000.IdentityId), sts.array(() => v3000.IdentityId)])
    ),
}
