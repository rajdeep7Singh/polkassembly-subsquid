import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v28 from '../v28'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v28: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v28.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v28: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v28.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v28: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v28.H256,
        })
    ),
}
