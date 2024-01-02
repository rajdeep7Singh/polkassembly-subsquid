import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v10700 from '../v10700'

export const newTip =  {
    name: 'Tips.NewTip',
    /**
     * A new tip suggestion has been opened.
     */
    v10700: new EventType(
        'Tips.NewTip',
        sts.struct({
            tipHash: v10700.H256,
        })
    ),
}

export const tipClosed =  {
    name: 'Tips.TipClosed',
    /**
     * A tip suggestion has been closed.
     */
    v10700: new EventType(
        'Tips.TipClosed',
        sts.struct({
            tipHash: v10700.H256,
            who: v10700.AccountId32,
            payout: sts.bigint(),
        })
    ),
}

export const tipRetracted =  {
    name: 'Tips.TipRetracted',
    /**
     * A tip suggestion has been retracted.
     */
    v10700: new EventType(
        'Tips.TipRetracted',
        sts.struct({
            tipHash: v10700.H256,
        })
    ),
}

export const tipSlashed =  {
    name: 'Tips.TipSlashed',
    /**
     * A tip suggestion has been slashed.
     */
    v10700: new EventType(
        'Tips.TipSlashed',
        sts.struct({
            tipHash: v10700.H256,
            finder: v10700.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
