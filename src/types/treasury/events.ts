import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v34 from '../v34'
import * as v41 from '../v41'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal. \[proposal_index\]
     */
    v26: new EventType(
        'Treasury.Proposed',
        v26.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v34: new EventType(
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
    v26: new EventType(
        'Treasury.Awarded',
        sts.tuple([v26.ProposalIndex, v26.Balance, v26.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v34: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v34.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v26: new EventType(
        'Treasury.Rejected',
        sts.tuple([v26.ProposalIndex, v26.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v34: new EventType(
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
    v41: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v41.AccountId32,
        })
    ),
}
