import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v2 from './v2'

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
    get isV2(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get asV2(): {index: number, beneficiary: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get asV2(): {index: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is cancelled.
     */
    get asV2(): {index: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get asV2(): {index: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty expiry is extended.
     */
    get asV2(): {index: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * New bounty proposal.
     */
    get asV2(): {index: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get asV2(): {index: number, bond: bigint} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('ChildBounties.Added') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is added.
     */
    get asV2(): {index: number, childIndex: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('ChildBounties.Awarded') === '0a085a42ecce2b9e3c0b81694d10406a346b17c1ef5e244816a4e7d7438840da'
    }

    /**
     * A child-bounty is awarded to a beneficiary.
     */
    get asV2(): {index: number, childIndex: number, beneficiary: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('ChildBounties.Canceled') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is cancelled.
     */
    get asV2(): {index: number, childIndex: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('ChildBounties.Claimed') === 'dfad8943decb48ed737eb4081add3d6fcb6f4dea668600b36619e88a793cd08e'
    }

    /**
     * A child-bounty is claimed by beneficiary.
     */
    get asV2(): {index: number, childIndex: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV2(): {proposalHash: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV2(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV2(): {proposalHash: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2(): {proposalHash: Uint8Array, result: v2.Type_86} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV2(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV2(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV2(): {hash: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV2(): {hash: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV2(): {hash: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV2(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV2(): {proposalIndex: number} {
        assert(this.isV2)
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
    get isV2(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV2(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV2)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.SpendApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new spend proposal has been approved.
     */
    get isV2(): boolean {
        return this._chain.getEventHash('Treasury.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asV2(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV2)
        return this._chain.decodeEvent(this.event)
    }
}
