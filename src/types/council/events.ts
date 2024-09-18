import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2100 from '../v2100'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v2100: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v2100.AccountId20,
            proposalIndex: sts.number(),
            proposalHash: v2100.H256,
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
    v2100: new EventType(
        'Council.Voted',
        sts.struct({
            account: v2100.AccountId20,
            proposalHash: v2100.H256,
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
    v2100: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v2100.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v2100: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v2100.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v2100: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v2100.H256,
            result: sts.result(() => sts.unit(), () => v2100.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v2100: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v2100.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
