import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v14 from '../v14'
import * as v26 from '../v26'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     * New proposal.
     */
    v14: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    v14: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v14.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    v14: new EventType(
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
    v26: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v26.AccountId32,
        })
    ),
}
