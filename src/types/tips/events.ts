import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v283 from '../v283'
import * as v297 from '../v297'

export const newTip =  {
    name: 'Tips.NewTip',
    /**
     *  A new tip suggestion has been opened. \[tip_hash\]
     */
    v283: new EventType(
        'Tips.NewTip',
        v283.Hash
    ),
    /**
     * A new tip suggestion has been opened.
     */
    v297: new EventType(
        'Tips.NewTip',
        sts.struct({
            tipHash: v297.H256,
        })
    ),
}

export const tipClosed =  {
    name: 'Tips.TipClosed',
    /**
     *  A tip suggestion has been closed. \[tip_hash, who, payout\]
     */
    v283: new EventType(
        'Tips.TipClosed',
        sts.tuple([v283.Hash, v283.AccountId, v283.Balance])
    ),
    /**
     * A tip suggestion has been closed.
     */
    v297: new EventType(
        'Tips.TipClosed',
        sts.struct({
            tipHash: v297.H256,
            who: v297.AccountId32,
            payout: sts.bigint(),
        })
    ),
}

export const tipRetracted =  {
    name: 'Tips.TipRetracted',
    /**
     *  A tip suggestion has been retracted. \[tip_hash\]
     */
    v283: new EventType(
        'Tips.TipRetracted',
        v283.Hash
    ),
    /**
     * A tip suggestion has been retracted.
     */
    v297: new EventType(
        'Tips.TipRetracted',
        sts.struct({
            tipHash: v297.H256,
        })
    ),
}

export const tipSlashed =  {
    name: 'Tips.TipSlashed',
    /**
     *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
     */
    v283: new EventType(
        'Tips.TipSlashed',
        sts.tuple([v283.Hash, v283.AccountId, v283.Balance])
    ),
    /**
     * A tip suggestion has been slashed.
     */
    v297: new EventType(
        'Tips.TipSlashed',
        sts.struct({
            tipHash: v297.H256,
            finder: v297.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
