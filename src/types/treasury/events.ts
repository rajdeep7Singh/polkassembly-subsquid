import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v299 from '../v299'
import * as v43000 from '../v43000'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal. \[proposal_index\]
     */
    v266: new EventType(
        'Treasury.Proposed',
        v266.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v299: new EventType(
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
    v266: new EventType(
        'Treasury.Awarded',
        sts.tuple([v266.ProposalIndex, v266.Balance, v266.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v299: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v299.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v266: new EventType(
        'Treasury.Rejected',
        sts.tuple([v266.ProposalIndex, v266.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v299: new EventType(
        'Treasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const newTip =  {
    name: 'Treasury.NewTip',
    /**
     *  A new tip suggestion has been opened. \[tip_hash\]
     */
    v266: new EventType(
        'Treasury.NewTip',
        v266.Hash
    ),
}

export const tipClosed =  {
    name: 'Treasury.TipClosed',
    /**
     *  A tip suggestion has been closed. \[tip_hash, who, payout\]
     */
    v266: new EventType(
        'Treasury.TipClosed',
        sts.tuple([v266.Hash, v266.AccountId, v266.Balance])
    ),
}

export const tipRetracted =  {
    name: 'Treasury.TipRetracted',
    /**
     *  A tip suggestion has been retracted. \[tip_hash\]
     */
    v266: new EventType(
        'Treasury.TipRetracted',
        v266.Hash
    ),
}

export const bountyProposed =  {
    name: 'Treasury.BountyProposed',
    /**
     *  New bounty proposal. [index]
     */
    v266: new EventType(
        'Treasury.BountyProposed',
        v266.BountyIndex
    ),
}

export const bountyRejected =  {
    name: 'Treasury.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    v266: new EventType(
        'Treasury.BountyRejected',
        sts.tuple([v266.BountyIndex, v266.Balance])
    ),
}

export const bountyBecameActive =  {
    name: 'Treasury.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. [index]
     */
    v266: new EventType(
        'Treasury.BountyBecameActive',
        v266.BountyIndex
    ),
}

export const bountyAwarded =  {
    name: 'Treasury.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    v266: new EventType(
        'Treasury.BountyAwarded',
        sts.tuple([v266.BountyIndex, v266.AccountId])
    ),
}

export const bountyClaimed =  {
    name: 'Treasury.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    v266: new EventType(
        'Treasury.BountyClaimed',
        sts.tuple([v266.BountyIndex, v266.Balance, v266.AccountId])
    ),
}

export const bountyCanceled =  {
    name: 'Treasury.BountyCanceled',
    /**
     *  A bounty is cancelled. [index]
     */
    v266: new EventType(
        'Treasury.BountyCanceled',
        v266.BountyIndex
    ),
}

export const bountyExtended =  {
    name: 'Treasury.BountyExtended',
    /**
     *  A bounty expiry is extended. [index]
     */
    v266: new EventType(
        'Treasury.BountyExtended',
        v266.BountyIndex
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v43000: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v43000.AccountId32,
        })
    ),
}
