import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v47 from '../v47'
import * as v1300 from '../v1300'
import * as v1800 from '../v1800'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal. \[proposal_index\]
     */
    v47: new EventType(
        'Treasury.Proposed',
        v47.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v1300: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    v47: new EventType(
        'Treasury.Awarded',
        sts.tuple([v47.ProposalIndex, v47.Balance, v47.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v1300: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v1300.AccountId20,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v47: new EventType(
        'Treasury.Rejected',
        sts.tuple([v47.ProposalIndex, v47.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v1300: new EventType(
        'Treasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v1800: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v1800.AccountId20,
        })
    ),
}
