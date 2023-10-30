import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1900 from '../v1900'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v1900: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v1900.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v1900: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v1900.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v1900: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v1900.H256,
        })
    ),
}
