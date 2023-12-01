import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    collectivesV9420: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: collectivesV9420.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    collectivesV9420: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: collectivesV9420.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    collectivesV9420: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: collectivesV9420.H256,
        })
    ),
}
