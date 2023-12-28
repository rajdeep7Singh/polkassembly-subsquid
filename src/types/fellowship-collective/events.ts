import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'

export const voted =  {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    v9320: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: v9320.AccountId32,
            poll: sts.number(),
            vote: v9320.VoteRecord,
            tally: v9320.Type_441,
        })
    ),
}
