import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'

export const vote =  {
    name: 'Democracy.vote',
    /**
     * See [`Pallet::vote`].
     */
    v5000: new CallType(
        'Democracy.vote',
        sts.struct({
            refIndex: sts.number(),
            vote: v5000.AccountVote,
        })
    ),
}

export const delegate =  {
    name: 'Democracy.delegate',
    /**
     * See [`Pallet::delegate`].
     */
    v5000: new CallType(
        'Democracy.delegate',
        sts.struct({
            to: v5000.MultiAddress,
            conviction: v5000.Conviction,
            balance: sts.bigint(),
        })
    ),
}

export const undelegate =  {
    name: 'Democracy.undelegate',
    /**
     * See [`Pallet::undelegate`].
     */
    v5000: new CallType(
        'Democracy.undelegate',
        sts.unit()
    ),
}

export const removeVote =  {
    name: 'Democracy.remove_vote',
    /**
     * See [`Pallet::remove_vote`].
     */
    v5000: new CallType(
        'Democracy.remove_vote',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const removeOtherVote =  {
    name: 'Democracy.remove_other_vote',
    /**
     * See [`Pallet::remove_other_vote`].
     */
    v5000: new CallType(
        'Democracy.remove_other_vote',
        sts.struct({
            target: v5000.MultiAddress,
            index: sts.number(),
        })
    ),
}
