import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v10500 from '../v10500'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v10500: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v10500.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v10500: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v10500.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v10500: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v10500.H256,
        })
    ),
}
