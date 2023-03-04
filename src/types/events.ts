import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v9290 from './v9290'
import * as v9360 from './v9360'

export class AllianceAnnouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Alliance.Announced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new announcement has been proposed.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('Alliance.Announced') === '42aca67a73a993e08efa9bc4519331293236c174b1e2d0ebf3df573c905aa8ad'
    }

    /**
     * A new announcement has been proposed.
     */
    get asV9290(): {announcement: v9290.Cid} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceAnnouncementRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Alliance.AnnouncementRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An on-chain announcement has been removed.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('Alliance.AnnouncementRemoved') === '42aca67a73a993e08efa9bc4519331293236c174b1e2d0ebf3df573c905aa8ad'
    }

    /**
     * An on-chain announcement has been removed.
     */
    get asV9290(): {announcement: v9290.Cid} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceUnscrupulousItemAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Alliance.UnscrupulousItemAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Accounts or websites have been added into the list of unscrupulous items.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('Alliance.UnscrupulousItemAdded') === '7895c0e017a1f9bcc037db8e068780d02385e5a8800cc59cefca7359d0bd5c75'
    }

    /**
     * Accounts or websites have been added into the list of unscrupulous items.
     */
    get asV9290(): {items: v9290.UnscrupulousItem[]} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceUnscrupulousItemRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Alliance.UnscrupulousItemRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Accounts or websites have been removed from the list of unscrupulous items.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('Alliance.UnscrupulousItemRemoved') === '7895c0e017a1f9bcc037db8e068780d02385e5a8800cc59cefca7359d0bd5c75'
    }

    /**
     * Accounts or websites have been removed from the list of unscrupulous items.
     */
    get asV9290(): {items: v9290.UnscrupulousItem[]} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceMotionApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllianceMotion.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('AllianceMotion.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV9290(): {proposalHash: Uint8Array} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceMotionClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllianceMotion.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('AllianceMotion.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV9290(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceMotionDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllianceMotion.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('AllianceMotion.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV9290(): {proposalHash: Uint8Array} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceMotionExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllianceMotion.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('AllianceMotion.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9290(): {proposalHash: Uint8Array, result: v9290.Type_82} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9360(): boolean {
        return this._chain.getEventHash('AllianceMotion.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9360(): {proposalHash: Uint8Array, result: v9360.Type_82} {
        assert(this.isV9360)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceMotionProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllianceMotion.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('AllianceMotion.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV9290(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllianceMotionVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllianceMotion.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV9290(): boolean {
        return this._chain.getEventHash('AllianceMotion.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV9290(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV9290)
        return this._chain.decodeEvent(this.event)
    }
}
