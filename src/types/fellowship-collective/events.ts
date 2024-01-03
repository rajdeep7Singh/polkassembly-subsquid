import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v100 from '../v100'

export const voted =  {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    v100: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: v100.AccountId32,
            poll: sts.number(),
            vote: v100.VoteRecord,
            tally: v100.Type_192,
        })
    ),
}
