import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v274 from '../v274'

export const bountyProposed =  {
    name: 'Bounties.BountyProposed',
    /**
     *  New bounty proposal. \[index\]
     */
    v268: new EventType(
        'Bounties.BountyProposed',
        v268.BountyIndex
    ),
    /**
     * New bounty proposal.
     */
    v274: new EventType(
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
    v268: new EventType(
        'Bounties.BountyRejected',
        sts.tuple([v268.BountyIndex, v268.Balance])
    ),
    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    v274: new EventType(
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
    v268: new EventType(
        'Bounties.BountyBecameActive',
        v268.BountyIndex
    ),
    /**
     * A bounty proposal is funded and became active.
     */
    v274: new EventType(
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
    v268: new EventType(
        'Bounties.BountyAwarded',
        sts.tuple([v268.BountyIndex, v268.AccountId])
    ),
    /**
     * A bounty is awarded to a beneficiary.
     */
    v274: new EventType(
        'Bounties.BountyAwarded',
        sts.struct({
            index: sts.number(),
            beneficiary: v274.AccountId32,
        })
    ),
}

export const bountyClaimed =  {
    name: 'Bounties.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
     */
    v268: new EventType(
        'Bounties.BountyClaimed',
        sts.tuple([v268.BountyIndex, v268.Balance, v268.AccountId])
    ),
    /**
     * A bounty is claimed by beneficiary.
     */
    v274: new EventType(
        'Bounties.BountyClaimed',
        sts.struct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: v274.AccountId32,
        })
    ),
}

export const bountyCanceled =  {
    name: 'Bounties.BountyCanceled',
    /**
     *  A bounty is cancelled. \[index\]
     */
    v268: new EventType(
        'Bounties.BountyCanceled',
        v268.BountyIndex
    ),
    /**
     * A bounty is cancelled.
     */
    v274: new EventType(
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
    v268: new EventType(
        'Bounties.BountyExtended',
        v268.BountyIndex
    ),
    /**
     * A bounty expiry is extended.
     */
    v274: new EventType(
        'Bounties.BountyExtended',
        sts.struct({
            index: sts.number(),
        })
    ),
}
