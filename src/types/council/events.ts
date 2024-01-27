import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v200 from '../v200'
import * as v1000 from '../v1000'
import * as v1200 from '../v1200'
import * as v10009 from '../v10009'
import * as v10040 from '../v10040'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v200: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v200.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v200.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'Council.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v200: new EventType(
        'Council.Voted',
        sts.struct({
            account: v200.AccountId32,
            proposalHash: v200.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'Council.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v200: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v200.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v200: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v200.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v200: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v200.H256,
            result: sts.result(() => sts.unit(), () => v200.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v1000: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v1000.H256,
            result: sts.result(() => sts.unit(), () => v1000.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v1200: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v1200.H256,
            result: sts.result(() => sts.unit(), () => v1200.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v10009: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v10009.H256,
            result: sts.result(() => sts.unit(), () => v10009.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v10040: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v10040.H256,
            result: sts.result(() => sts.unit(), () => v10040.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v200: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v200.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
