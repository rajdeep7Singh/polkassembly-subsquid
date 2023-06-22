import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v9290 from './v9290'
import * as v9360 from './v9360'
import * as v9420 from './v9420'

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

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('AllianceMotion.Executed') === 'c0a7075d1db65c853af68dee8fccfd68bc709058c1c831fa5759250c8549e688'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9420(): {proposalHash: Uint8Array, result: v9420.Type_100} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipCollective.Voted') === '1e8b7638b00c21d8eb4a245b3849c29dcbe5d497fb1ea94e10366bbe62298459'
    }

    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    get asV9420(): {who: Uint8Array, poll: number, vote: v9420.VoteRecord, tally: v9420.Tally} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV9420(): {index: number} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Cancelled') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
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

    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV9420(): {index: number} {
        assert(this.isV9420)
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

    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV9420(): {index: number} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Confirmed') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DecisionDepositPlaced') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV9420(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DecisionStarted') === '7b43b10b87be9de2cade1d415477351c543262308d97fdd478a291867bdc26a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV9420(): {index: number, track: number, proposal: v9420.Bounded, tally: v9420.Tally} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Killed') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been killed.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.MetadataCleared') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get asV9420(): {index: number, hash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been set.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.MetadataSet') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been set.
     */
    get asV9420(): {index: number, hash: Uint8Array} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Rejected') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV9420(): {index: number, track: number, proposal: v9420.Bounded} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.TimedOut') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV9420(): {hash: Uint8Array} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV9420(): {hash: Uint8Array} {
        assert(this.isV9420)
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
    get isV9420(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV9420(): {hash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Dispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Dispatched some task.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '154dd24b4e6cd6cd4e2529e62ebb06fadb719be62866fec5887d179577869c45'
    }

    /**
     * Dispatched some task.
     */
    get asV9420(): {task: [number, number], id: (Uint8Array | undefined), result: v9420.Type_100} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Scheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Scheduled some task.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV9420(): {when: number, index: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}
