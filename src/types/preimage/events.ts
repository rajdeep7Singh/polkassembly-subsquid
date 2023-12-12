import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v34 from '../v34'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v34: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v34.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v34: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v34.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v34: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v34.H256,
        })
    ),
}
