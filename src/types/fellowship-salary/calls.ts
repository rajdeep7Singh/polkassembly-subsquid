import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const init =  {
    name: 'FellowshipSalary.init',
    /**
     * See [`Pallet::init`].
     */
    v1000000: new CallType(
        'FellowshipSalary.init',
        sts.unit()
    ),
}

export const bump =  {
    name: 'FellowshipSalary.bump',
    /**
     * See [`Pallet::bump`].
     */
    v1000000: new CallType(
        'FellowshipSalary.bump',
        sts.unit()
    ),
}
