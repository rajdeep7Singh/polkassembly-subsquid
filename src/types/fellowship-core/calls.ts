import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as collectivesV1000000 from '../collectivesV1000000'

export const bump =  {
    name: 'FellowshipCore.bump',
    /**
     * See [`Pallet::bump`].
     */
    collectivesV1000000: new CallType(
        'FellowshipCore.bump',
        sts.struct({
            who: collectivesV1000000.AccountId32,
        })
    ),
}

export const setParams =  {
    name: 'FellowshipCore.set_params',
    /**
     * See [`Pallet::set_params`].
     */
    collectivesV1000000: new CallType(
        'FellowshipCore.set_params',
        sts.struct({
            params: collectivesV1000000.ParamsType,
        })
    ),
}

export const approve =  {
    name: 'FellowshipCore.approve',
    /**
     * See [`Pallet::approve`].
     */
    collectivesV1000000: new CallType(
        'FellowshipCore.approve',
        sts.struct({
            who: collectivesV1000000.AccountId32,
            atRank: sts.number(),
        })
    ),
}

export const induct =  {
    name: 'FellowshipCore.induct',
    /**
     * See [`Pallet::induct`].
     */
    collectivesV1000000: new CallType(
        'FellowshipCore.induct',
        sts.struct({
            who: collectivesV1000000.AccountId32,
        })
    ),
}

export const promote =  {
    name: 'FellowshipCore.promote',
    /**
     * See [`Pallet::promote`].
     */
    collectivesV1000000: new CallType(
        'FellowshipCore.promote',
        sts.struct({
            who: collectivesV1000000.AccountId32,
            toRank: sts.number(),
        })
    ),
}

export const submitEvidence =  {
    name: 'FellowshipCore.submit_evidence',
    /**
     * See [`Pallet::submit_evidence`].
     */
    collectivesV1000000: new CallType(
        'FellowshipCore.submit_evidence',
        sts.struct({
            wish: collectivesV1000000.Wish,
            evidence: sts.bytes(),
        })
    ),
}
