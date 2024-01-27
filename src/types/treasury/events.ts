import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v200 from '../v200'
import * as v1000 from '../v1000'
import * as v10002 from '../v10002'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     * New proposal. \[proposal_index\]
     */
    v200: new EventType(
        'Treasury.Proposed',
        sts.number()
    ),
    /**
     * New proposal.
     */
    v1000: new EventType(
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
    v200: new EventType(
        'Treasury.Awarded',
        sts.tuple([sts.number(), sts.bigint(), v200.AccountId32])
    ),
    /**
     * Some funds have been allocated.
     */
    v1000: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v1000.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v200: new EventType(
        'Treasury.Rejected',
        sts.tuple([sts.number(), sts.bigint()])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v1000: new EventType(
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
    v10002: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v10002.AccountId32,
        })
    ),
}
