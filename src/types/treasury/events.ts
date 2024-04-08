import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v13 from '../v13'
import * as v23 from '../v23'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     * New proposal. \[proposal_index\]
     */
    v5: new EventType(
        'Treasury.Proposed',
        sts.number()
    ),
    /**
     * New proposal.
     */
    v13: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    v5: new EventType(
        'Treasury.Awarded',
        sts.tuple([sts.number(), sts.bigint(), v5.AccountId32])
    ),
    /**
     * Some funds have been allocated.
     */
    v13: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v13.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v5: new EventType(
        'Treasury.Rejected',
        sts.tuple([sts.number(), sts.bigint()])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v13: new EventType(
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
    v23: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v23.AccountId32,
        })
    ),
}
