import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1000 from '../v1000'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v1000: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v1000.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v1000: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v1000.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v1000: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v1000.H256,
        })
    ),
}
