import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v25 from '../v25'
import * as v10500 from '../v10500'
import * as v10720 from '../v10720'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal. \[proposal_index\]
     */
    v25: new EventType(
        'Treasury.Proposed',
        v25.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v10500: new EventType(
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
    v25: new EventType(
        'Treasury.Awarded',
        sts.tuple([v25.ProposalIndex, v25.Balance, v25.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v10500: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v10500.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v25: new EventType(
        'Treasury.Rejected',
        sts.tuple([v25.ProposalIndex, v25.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v10500: new EventType(
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
    v10720: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v10720.AccountId32,
        })
    ),
}
