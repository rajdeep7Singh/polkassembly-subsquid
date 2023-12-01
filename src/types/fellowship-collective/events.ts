import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'

export const memberAdded =  {
    name: 'FellowshipCollective.MemberAdded',
    /**
     * A member `who` has been added.
     */
    collectivesV9420: new EventType(
        'FellowshipCollective.MemberAdded',
        sts.struct({
            who: collectivesV9420.AccountId32,
        })
    ),
}

export const rankChanged =  {
    name: 'FellowshipCollective.RankChanged',
    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    collectivesV9420: new EventType(
        'FellowshipCollective.RankChanged',
        sts.struct({
            who: collectivesV9420.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const memberRemoved =  {
    name: 'FellowshipCollective.MemberRemoved',
    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    collectivesV9420: new EventType(
        'FellowshipCollective.MemberRemoved',
        sts.struct({
            who: collectivesV9420.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    collectivesV9420: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: collectivesV9420.AccountId32,
            poll: sts.number(),
            vote: collectivesV9420.VoteRecord,
            tally: collectivesV9420.Tally,
        })
    ),
}
