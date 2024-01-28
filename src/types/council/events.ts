import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v295 from '../v295'
import * as v297 from '../v297'
import * as v299 from '../v299'
import * as v300 from '../v300'
import * as v302 from '../v302'
import * as v48300 from '../v48300'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    v266: new EventType(
        'Council.Proposed',
        sts.tuple([v266.AccountId, v266.ProposalIndex, v266.Hash, v266.MemberCount])
    ),
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v297: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v297.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v297.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'Council.Voted',
    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    v266: new EventType(
        'Council.Voted',
        sts.tuple([v266.AccountId, v266.Hash, sts.boolean(), v266.MemberCount, v266.MemberCount])
    ),
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v297: new EventType(
        'Council.Voted',
        sts.struct({
            account: v297.AccountId32,
            proposalHash: v297.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'Council.Approved',
    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    v266: new EventType(
        'Council.Approved',
        v266.Hash
    ),
    /**
     * A motion was approved by the required threshold.
     */
    v297: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v297.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    v266: new EventType(
        'Council.Disapproved',
        v266.Hash
    ),
    /**
     * A motion was not approved by the required threshold.
     */
    v297: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v297.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    v266: new EventType(
        'Council.Executed',
        sts.tuple([v266.Hash, v266.DispatchResult])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    v295: new EventType(
        'Council.Executed',
        sts.tuple([v295.H256, sts.result(() => sts.unit(), () => v295.DispatchError)])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v297: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v297.H256,
            result: sts.result(() => sts.unit(), () => v297.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v299: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v299.H256,
            result: sts.result(() => sts.unit(), () => v299.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v300: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v300.H256,
            result: sts.result(() => sts.unit(), () => v300.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v302: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v302.H256,
            result: sts.result(() => sts.unit(), () => v302.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v48300: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v48300.H256,
            result: sts.result(() => sts.unit(), () => v48300.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    v266: new EventType(
        'Council.Closed',
        sts.tuple([v266.Hash, v266.MemberCount, v266.MemberCount])
    ),
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v297: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v297.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
