import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const bump =  {
    name: 'FellowshipCore.bump',
    /**
     * See [`Pallet::bump`].
     */
    v1000000: new CallType(
        'FellowshipCore.bump',
        sts.struct({
            who: v1000000.AccountId32,
        })
    ),
}

export const setParams =  {
    name: 'FellowshipCore.set_params',
    /**
     * See [`Pallet::set_params`].
     */
    v1000000: new CallType(
        'FellowshipCore.set_params',
        sts.struct({
            params: v1000000.ParamsType,
        })
    ),
}

export const approve =  {
    name: 'FellowshipCore.approve',
    /**
     * See [`Pallet::approve`].
     */
    v1000000: new CallType(
        'FellowshipCore.approve',
        sts.struct({
            who: v1000000.AccountId32,
            atRank: sts.number(),
        })
    ),
}

export const induct =  {
    name: 'FellowshipCore.induct',
    /**
     * See [`Pallet::induct`].
     */
    v1000000: new CallType(
        'FellowshipCore.induct',
        sts.struct({
            who: v1000000.AccountId32,
        })
    ),
}

export const promote =  {
    name: 'FellowshipCore.promote',
    /**
     * See [`Pallet::promote`].
     */
    v1000000: new CallType(
        'FellowshipCore.promote',
        sts.struct({
            who: v1000000.AccountId32,
            toRank: sts.number(),
        })
    ),
}

export const submitEvidence =  {
    name: 'FellowshipCore.submit_evidence',
    /**
     * See [`Pallet::submit_evidence`].
     */
    v1000000: new CallType(
        'FellowshipCore.submit_evidence',
        sts.struct({
            wish: v1000000.Wish,
            evidence: sts.bytes(),
        })
    ),
}
