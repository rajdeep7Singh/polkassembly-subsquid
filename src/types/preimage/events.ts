import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v9420: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v9420.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v9420: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v9420.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v9420: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v9420.H256,
        })
    ),
}
