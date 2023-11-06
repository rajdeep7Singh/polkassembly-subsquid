import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v49 from '../v49'
import * as v1300 from '../v1300'
import * as v1801 from '../v1801'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal. \[proposal_index\]
     */
    v49: new EventType(
        'Treasury.Proposed',
        v49.ProposalIndex
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
    v49: new EventType(
        'Treasury.Awarded',
        sts.tuple([v49.ProposalIndex, v49.Balance, v49.AccountId])
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
    v49: new EventType(
        'Treasury.Rejected',
        sts.tuple([v49.ProposalIndex, v49.Balance])
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
    v1801: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v1801.AccountId20,
        })
    ),
}
