import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v274 from '../v274'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal. \[proposal_index\]
     */
    v268: new EventType(
        'Treasury.Proposed',
        v268.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v274: new EventType(
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
    v268: new EventType(
        'Treasury.Awarded',
        sts.tuple([v268.ProposalIndex, v268.Balance, v268.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v274: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v274.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v268: new EventType(
        'Treasury.Rejected',
        sts.tuple([v268.ProposalIndex, v268.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v274: new EventType(
        'Treasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}
