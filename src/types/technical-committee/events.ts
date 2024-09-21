import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v8 from '../v8'
import * as v13 from '../v13'
import * as v20 from '../v20'
import * as v32 from '../v32'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     * \[account, proposal_index, proposal_hash, threshold\]
     */
    v5: new EventType(
        'TechnicalCommittee.Proposed',
        sts.tuple([v5.AccountId32, sts.number(), v5.H256, sts.number()])
    ),
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v8: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v8.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v8.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     * \[account, proposal_hash, voted, yes, no\]
     */
    v5: new EventType(
        'TechnicalCommittee.Voted',
        sts.tuple([v5.AccountId32, v5.H256, sts.boolean(), sts.number(), sts.number()])
    ),
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v8: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: v8.AccountId32,
            proposalHash: v8.H256,
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
     * \[proposal_hash\]
     */
    v5: new EventType(
        'TechnicalCommittee.Approved',
        v5.H256
    ),
    /**
     * A motion was approved by the required threshold.
     */
    v8: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v8.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     * \[proposal_hash\]
     */
    v5: new EventType(
        'TechnicalCommittee.Disapproved',
        v5.H256
    ),
    /**
     * A motion was not approved by the required threshold.
     */
    v8: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v8.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    v5: new EventType(
        'TechnicalCommittee.Executed',
        sts.tuple([v5.H256, sts.result(() => sts.unit(), () => v5.DispatchError)])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v8: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v8.H256,
            result: sts.result(() => sts.unit(), () => v8.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v13: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v13.H256,
            result: sts.result(() => sts.unit(), () => v13.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v20: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v20.H256,
            result: sts.result(() => sts.unit(), () => v20.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v32: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v32.H256,
            result: sts.result(() => sts.unit(), () => v32.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     * \[proposal_hash, yes, no\]
     */
    v5: new EventType(
        'TechnicalCommittee.Closed',
        sts.tuple([v5.H256, sts.number(), sts.number()])
    ),
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v8: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v8.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
