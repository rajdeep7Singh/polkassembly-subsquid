import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'

export const newTip =  {
    name: 'Tips.NewTip',
    /**
     * A new tip suggestion has been opened.
     */
    v9300: new EventType(
        'Tips.NewTip',
        sts.struct({
            tipHash: v9300.H256,
        })
    ),
}

export const tipClosed =  {
    name: 'Tips.TipClosed',
    /**
     * A tip suggestion has been closed.
     */
    v9300: new EventType(
        'Tips.TipClosed',
        sts.struct({
            tipHash: v9300.H256,
            who: v9300.AccountId32,
            payout: sts.bigint(),
        })
    ),
}

export const tipRetracted =  {
    name: 'Tips.TipRetracted',
    /**
     * A tip suggestion has been retracted.
     */
    v9300: new EventType(
        'Tips.TipRetracted',
        sts.struct({
            tipHash: v9300.H256,
        })
    ),
}

export const tipSlashed =  {
    name: 'Tips.TipSlashed',
    /**
     * A tip suggestion has been slashed.
     */
    v9300: new EventType(
        'Tips.TipSlashed',
        sts.struct({
            tipHash: v9300.H256,
            finder: v9300.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
