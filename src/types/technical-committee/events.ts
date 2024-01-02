import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v25 from '../v25'
import * as v2800 from '../v2800'
import * as v10400 from '../v10400'
import * as v10500 from '../v10500'
import * as v10700 from '../v10700'
import * as v10890 from '../v10890'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    v25: new EventType(
        'TechnicalCommittee.Proposed',
        sts.tuple([v25.AccountId, v25.ProposalIndex, v25.Hash, v25.MemberCount])
    ),
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v10400: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v10400.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v10400.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    v25: new EventType(
        'TechnicalCommittee.Voted',
        sts.tuple([v25.AccountId, v25.Hash, sts.boolean(), v25.MemberCount, v25.MemberCount])
    ),
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v10400: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: v10400.AccountId32,
            proposalHash: v10400.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'TechnicalCommittee.Approved',
    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    v25: new EventType(
        'TechnicalCommittee.Approved',
        v25.Hash
    ),
    /**
     * A motion was approved by the required threshold.
     */
    v10400: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v10400.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    v25: new EventType(
        'TechnicalCommittee.Disapproved',
        v25.Hash
    ),
    /**
     * A motion was not approved by the required threshold.
     */
    v10400: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v10400.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    v25: new EventType(
        'TechnicalCommittee.Executed',
        sts.tuple([v25.Hash, v25.DispatchResult])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    v2800: new EventType(
        'TechnicalCommittee.Executed',
        sts.tuple([v2800.H256, sts.result(() => sts.unit(), () => v2800.DispatchError)])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v10400: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v10400.H256,
            result: sts.result(() => sts.unit(), () => v10400.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v10500: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v10500.H256,
            result: sts.result(() => sts.unit(), () => v10500.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v10700: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v10700.H256,
            result: sts.result(() => sts.unit(), () => v10700.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v10890: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v10890.H256,
            result: sts.result(() => sts.unit(), () => v10890.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    v25: new EventType(
        'TechnicalCommittee.Closed',
        sts.tuple([v25.Hash, v25.MemberCount, v25.MemberCount])
    ),
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v10400: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v10400.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
