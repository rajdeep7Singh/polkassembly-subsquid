import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v3000 from './v3000'
import * as v5000003 from './v5000003'

export class PipsPipClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Pips.PipClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Pip has been closed, bool indicates whether data is pruned
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('Pips.PipClosed') === 'a8f3f14dea1175626fd1efa16ff1e3486d9520e0e36e1aab1621bb1798c1140d'
    }

    /**
     *  Pip has been closed, bool indicates whether data is pruned
     */
    get asV3000(): [Uint8Array, number, boolean] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}

export class PipsPipSkippedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Pips.PipSkipped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A PIP in the snapshot queue was skipped.
     *  (gc_did, pip_id, new_skip_count)
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('Pips.PipSkipped') === '2689a7acb68157d8e7d95ebba8554091002bad7b3eb1bd2edc206cdd09f7eaf2'
    }

    /**
     *  A PIP in the snapshot queue was skipped.
     *  (gc_did, pip_id, new_skip_count)
     */
    get asV3000(): [Uint8Array, number, number] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}

export class PipsProposalCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Pips.ProposalCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A PIP was made with a `Balance` stake.
     * 
     *  # Parameters:
     * 
     *  Caller DID, Proposer, PIP ID, deposit, URL, description, expiry time, proposal data.
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('Pips.ProposalCreated') === '6beaf540c57d8f60dd6cd3a9881e674bcbe86779cd4961def7ff5ef6a3b74acc'
    }

    /**
     *  A PIP was made with a `Balance` stake.
     * 
     *  # Parameters:
     * 
     *  Caller DID, Proposer, PIP ID, deposit, URL, description, expiry time, proposal data.
     */
    get asV3000(): [Uint8Array, v3000.Proposer, number, bigint, (string | undefined), (string | undefined), v3000.MaybeBlock, v3000.ProposalData] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A PIP was made with a `Balance` stake.
     * 
     * # Parameters:
     * 
     * Caller DID, Proposer, PIP ID, deposit, URL, description, expiry time, proposal data.
     */
    get isV5000003(): boolean {
        return this._chain.getEventHash('Pips.ProposalCreated') === '49961ea21bbbea334cdf1754763b061bf9e19e995143c9811259c97671635e04'
    }

    /**
     * A PIP was made with a `Balance` stake.
     * 
     * # Parameters:
     * 
     * Caller DID, Proposer, PIP ID, deposit, URL, description, expiry time, proposal data.
     */
    get asV5000003(): [Uint8Array, v5000003.Proposer, number, bigint, (Uint8Array | undefined), (Uint8Array | undefined), v5000003.MaybeBlock, v5000003.ProposalData] {
        assert(this.isV5000003)
        return this._chain.decodeEvent(this.event)
    }
}

export class PipsProposalStateUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Pips.ProposalStateUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Triggered each time the state of a proposal is amended
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('Pips.ProposalStateUpdated') === '91d35f4fbec5564f298133ecceb3bb3befbd75c129c84c19f8a63aff881a5c7e'
    }

    /**
     *  Triggered each time the state of a proposal is amended
     */
    get asV3000(): [Uint8Array, number, v3000.ProposalState] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}

export class PipsVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Pips.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  `AccountId` voted `bool` on the proposal referenced by `PipId`
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('Pips.Voted') === 'db94c2881cc5f24e8653efa70acb4e7322644f259e0f2aaf7eeb63f6505c0761'
    }

    /**
     *  `AccountId` voted `bool` on the proposal referenced by `PipId`
     */
    get asV3000(): [Uint8Array, Uint8Array, number, boolean, bigint] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolymeshCommitteeFinalVotesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolymeshCommittee.FinalVotes')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Final votes on a motion (given hash)
     *  caller DID, ProposalIndex, Proposal hash, yes voters, no voter
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('PolymeshCommittee.FinalVotes') === 'e0deddaab194b37846d496b8e89ff9aab6c9c1e62eb0ae08a2b3e0450f52c4e6'
    }

    /**
     *  Final votes on a motion (given hash)
     *  caller DID, ProposalIndex, Proposal hash, yes voters, no voter
     */
    get asV3000(): [Uint8Array, number, Uint8Array, Uint8Array[], Uint8Array[]] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolymeshCommitteeProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolymeshCommittee.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
     *  Parameters: caller DID, proposal index, proposal hash.
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('PolymeshCommittee.Proposed') === 'b31f7cd7e8dd26f209fbf5109eb1dbeb7ba98430b2b5112289385ae5322062b5'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
     *  Parameters: caller DID, proposal index, proposal hash.
     */
    get asV3000(): [Uint8Array, number, Uint8Array] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolymeshCommitteeVoteRetractedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolymeshCommittee.VoteRetracted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A vote on a motion (given hash) has been retracted.
     *  caller DID, ProposalIndex, Proposal hash, vote that was retracted
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('PolymeshCommittee.VoteRetracted') === '9dbbfb179ba415fdfee3968a175d8e7cf096dfc936466b11ca8a89733e7bf1c5'
    }

    /**
     *  A vote on a motion (given hash) has been retracted.
     *  caller DID, ProposalIndex, Proposal hash, vote that was retracted
     */
    get asV3000(): [Uint8Array, number, Uint8Array, boolean] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolymeshCommitteeVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolymeshCommittee.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
     *  caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
     */
    get isV3000(): boolean {
        return this._chain.getEventHash('PolymeshCommittee.Voted') === '569f704f5f7c7080896dc8724b3c03eedce8f2160240cbf2e1a7fe48ba48248b'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
     *  caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
     */
    get asV3000(): [Uint8Array, number, Uint8Array, boolean, number, number, number] {
        assert(this.isV3000)
        return this._chain.decodeEvent(this.event)
    }
}
