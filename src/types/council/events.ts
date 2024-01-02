import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v274 from '../v274'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    v268: new EventType(
        'Council.Proposed',
        sts.tuple([v268.AccountId, v268.ProposalIndex, v268.Hash, v268.MemberCount])
    ),
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v274: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v274.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v274.H256,
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
    v268: new EventType(
        'Council.Voted',
        sts.tuple([v268.AccountId, v268.Hash, sts.boolean(), v268.MemberCount, v268.MemberCount])
    ),
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v274: new EventType(
        'Council.Voted',
        sts.struct({
            account: v274.AccountId32,
            proposalHash: v274.H256,
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
    v268: new EventType(
        'Council.Approved',
        v268.Hash
    ),
    /**
     * A motion was approved by the required threshold.
     */
    v274: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v274.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    v268: new EventType(
        'Council.Disapproved',
        v268.Hash
    ),
    /**
     * A motion was not approved by the required threshold.
     */
    v274: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v274.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    v268: new EventType(
        'Council.Executed',
        sts.tuple([v268.Hash, v268.DispatchResult])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v274: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v274.H256,
            result: sts.result(() => sts.unit(), () => v274.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    v268: new EventType(
        'Council.Closed',
        sts.tuple([v268.Hash, v268.MemberCount, v268.MemberCount])
    ),
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v274: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v274.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
