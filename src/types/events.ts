import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v110 from './v110'
import * as v121 from './v121'

export class BountiesBountyAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyAwarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get asV110(): {index: number, beneficiary: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyBecameActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyBecameActive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get asV110(): {index: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is cancelled.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is cancelled.
     */
    get asV110(): {index: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get asV110(): {index: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyExtendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyExtended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty expiry is extended.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty expiry is extended.
     */
    get asV110(): {index: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyProposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New bounty proposal.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * New bounty proposal.
     */
    get asV110(): {index: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get asV110(): {index: number, bond: bigint} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Added')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is added.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('ChildBounties.Added') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is added.
     */
    get asV110(): {index: number, childIndex: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is awarded to a beneficiary.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('ChildBounties.Awarded') === '0a085a42ecce2b9e3c0b81694d10406a346b17c1ef5e244816a4e7d7438840da'
    }

    /**
     * A child-bounty is awarded to a beneficiary.
     */
    get asV110(): {index: number, childIndex: number, beneficiary: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Canceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is cancelled.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('ChildBounties.Canceled') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is cancelled.
     */
    get asV110(): {index: number, childIndex: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is claimed by beneficiary.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('ChildBounties.Claimed') === 'dfad8943decb48ed737eb4081add3d6fcb6f4dea668600b36619e88a793cd08e'
    }

    /**
     * A child-bounty is claimed by beneficiary.
     */
    get asV110(): {index: number, childIndex: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV110(): {proposalHash: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV110(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV110(): {proposalHash: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV110(): {proposalHash: Uint8Array, result: v110.Type_65} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV110(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV110(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV110(): {refIndex: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyNotPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.NotPassed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV110(): {refIndex: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Passed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV110(): {refIndex: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV110(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Started')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has begun.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV110(): {refIndex: number, threshold: v110.VoteThreshold} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyTabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Tabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV110(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipCollectiveVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipCollective.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipCollective.Voted') === '1e8b7638b00c21d8eb4a245b3849c29dcbe5d497fb1ea94e10366bbe62298459'
    }

    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    get asV121(): {who: Uint8Array, poll: number, vote: v121.VoteRecord, tally: v121.Type_312} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV121(): {index: number} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Cancelled') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV121(): {index: number, tally: v121.Type_312} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaConfirmAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.ConfirmAborted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV121(): {index: number} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaConfirmStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.ConfirmStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV121(): {index: number} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaConfirmedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Confirmed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Confirmed') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV121(): {index: number, tally: v121.Type_312} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaDecisionDepositPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.DecisionDepositPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been placed.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DecisionDepositPlaced') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV121(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaDecisionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.DecisionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DecisionStarted') === '7b43b10b87be9de2cade1d415477351c543262308d97fdd478a291867bdc26a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV121(): {index: number, track: number, proposal: v121.Bounded, tally: v121.Type_312} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Killed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been killed.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Killed') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been killed.
     */
    get asV121(): {index: number, tally: v121.Type_312} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Rejected') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV121(): {index: number, tally: v121.Type_312} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaSubmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Submitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been submitted.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV121(): {index: number, track: number, proposal: v121.Bounded} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.TimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get isV121(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.TimedOut') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV121(): {index: number, tally: v121.Type_312} {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Cleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has ben cleared.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV110(): {hash: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Noted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been noted.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV110(): {hash: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Requested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been requested.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV110(): {hash: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV110(): {index: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.Cancelled') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV110(): {index: number, tally: v110.Tally} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmAborted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV110(): {index: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV110(): {index: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Confirmed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.Confirmed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV110(): {index: number, tally: v110.Tally} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been placed.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositPlaced') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV110(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.DecisionStarted') === '93e86498f68feebf124dad7a87010c14ba0e2cc07333331054e866079ff834a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV110(): {index: number, track: number, proposal: v110.Bounded, tally: v110.Tally} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Killed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been killed.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.Killed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been killed.
     */
    get asV110(): {index: number, tally: v110.Tally} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.Rejected') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV110(): {index: number, tally: v110.Tally} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Submitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been submitted.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV110(): {index: number, track: number, proposal: v110.Bounded} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.TimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Referenda.TimedOut') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV110(): {index: number, tally: v110.Tally} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV110(): {proposalHash: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV110(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV110(): {proposalHash: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV110(): {proposalHash: Uint8Array, result: v110.Type_65} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV110(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV110(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds have been allocated.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV110(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New proposal.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV110(): {proposalIndex: number} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV110(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}
