import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v103000 from '../v103000'

export const voted =  {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    v103000: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: v103000.AccountId32,
            poll: sts.number(),
            vote: v103000.VoteRecord,
            tally: v103000.Type_360,
        })
    ),
}
