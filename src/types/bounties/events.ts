import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v283 from '../v283'
import * as v297 from '../v297'

export const bountyProposed =  {
    name: 'Bounties.BountyProposed',
    /**
     *  New bounty proposal. \[index\]
     */
    v283: new EventType(
        'Bounties.BountyProposed',
        v283.BountyIndex
    ),
    /**
     * New bounty proposal.
     */
    v297: new EventType(
        'Bounties.BountyProposed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyRejected =  {
    name: 'Bounties.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
     */
    v283: new EventType(
        'Bounties.BountyRejected',
        sts.tuple([v283.BountyIndex, v283.Balance])
    ),
    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    v297: new EventType(
        'Bounties.BountyRejected',
        sts.struct({
            index: sts.number(),
            bond: sts.bigint(),
        })
    ),
}

export const bountyBecameActive =  {
    name: 'Bounties.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. \[index\]
     */
    v283: new EventType(
        'Bounties.BountyBecameActive',
        v283.BountyIndex
    ),
    /**
     * A bounty proposal is funded and became active.
     */
    v297: new EventType(
        'Bounties.BountyBecameActive',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyAwarded =  {
    name: 'Bounties.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
     */
    v283: new EventType(
        'Bounties.BountyAwarded',
        sts.tuple([v283.BountyIndex, v283.AccountId])
    ),
    /**
     * A bounty is awarded to a beneficiary.
     */
    v297: new EventType(
        'Bounties.BountyAwarded',
        sts.struct({
            index: sts.number(),
            beneficiary: v297.AccountId32,
        })
    ),
}

export const bountyClaimed =  {
    name: 'Bounties.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
     */
    v283: new EventType(
        'Bounties.BountyClaimed',
        sts.tuple([v283.BountyIndex, v283.Balance, v283.AccountId])
    ),
    /**
     * A bounty is claimed by beneficiary.
     */
    v297: new EventType(
        'Bounties.BountyClaimed',
        sts.struct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: v297.AccountId32,
        })
    ),
}

export const bountyCanceled =  {
    name: 'Bounties.BountyCanceled',
    /**
     *  A bounty is cancelled. \[index\]
     */
    v283: new EventType(
        'Bounties.BountyCanceled',
        v283.BountyIndex
    ),
    /**
     * A bounty is cancelled.
     */
    v297: new EventType(
        'Bounties.BountyCanceled',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyExtended =  {
    name: 'Bounties.BountyExtended',
    /**
     *  A bounty expiry is extended. \[index\]
     */
    v283: new EventType(
        'Bounties.BountyExtended',
        v283.BountyIndex
    ),
    /**
     * A bounty expiry is extended.
     */
    v297: new EventType(
        'Bounties.BountyExtended',
        sts.struct({
            index: sts.number(),
        })
    ),
}
