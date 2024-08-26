import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v53102 from '../v53102'

export const vote =  {
    name: 'ConvictionVoting.vote',
    /**
     * See [`Pallet::vote`].
     */
    v53102: new CallType(
        'ConvictionVoting.vote',
        sts.struct({
            pollIndex: sts.number(),
            vote: v53102.AccountVote,
        })
    ),
}

export const delegate =  {
    name: 'ConvictionVoting.delegate',
    /**
     * See [`Pallet::delegate`].
     */
    v53102: new CallType(
        'ConvictionVoting.delegate',
        sts.struct({
            class: sts.number(),
            to: v53102.MultiAddress,
            conviction: v53102.Conviction,
            balance: sts.bigint(),
        })
    ),
}

export const undelegate =  {
    name: 'ConvictionVoting.undelegate',
    /**
     * See [`Pallet::undelegate`].
     */
    v53102: new CallType(
        'ConvictionVoting.undelegate',
        sts.struct({
            class: sts.number(),
        })
    ),
}

export const removeVote =  {
    name: 'ConvictionVoting.remove_vote',
    /**
     * See [`Pallet::remove_vote`].
     */
    v53102: new CallType(
        'ConvictionVoting.remove_vote',
        sts.struct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        })
    ),
}

export const removeOtherVote =  {
    name: 'ConvictionVoting.remove_other_vote',
    /**
     * See [`Pallet::remove_other_vote`].
     */
    v53102: new CallType(
        'ConvictionVoting.remove_other_vote',
        sts.struct({
            target: v53102.MultiAddress,
            class: sts.number(),
            index: sts.number(),
        })
    ),
}
