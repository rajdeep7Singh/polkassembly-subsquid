import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v1: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v1.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v1.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v1: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: v1.AccountId32,
            proposalHash: v1.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'TechnicalCommittee.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v1: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v1.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v1: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v1.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v1: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v1.H256,
            result: sts.result(() => sts.unit(), () => v1.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v7: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v7.H256,
            result: sts.result(() => sts.unit(), () => v7.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v1: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v1.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
