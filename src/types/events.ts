import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1606 from './v1606'

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
     * A referendum has been cancelled. \[ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A referendum has been cancelled. \[ref_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has been cancelled.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV1201(): {refIndex: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'c83a84e76e348dd28ec0b3d255b3b6614da57c66bcdca25e179abc516b1d0b15'
    }

    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    get asV900(): [number, v900.Type_43] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '0077901b6de880646efe44eef6ddcdc431a84c0fe153cc9f8e6e66c9354cbb13'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1201(): {refIndex: number, result: v1201.Type_41} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '1f8afbb40842c0eb231c4c0456dea31d665cbfc12f23138aebe104164e4f18dc'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1300(): {refIndex: number, result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '270512fa9651c9fa2eb584a439cab409bb758634bd42c08ad5fc0e9bbed943b0'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1401(): {refIndex: number, result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1606(): {refIndex: number, result: v1606.Type_47} {
        assert(this.isV1606)
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
     * A proposal has been rejected by referendum. \[ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A proposal has been rejected by referendum. \[ref_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV1201(): {refIndex: number} {
        assert(this.isV1201)
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
     * A proposal has been approved by referendum. \[ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A proposal has been approved by referendum. \[ref_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV1201(): {refIndex: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageInvalidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageInvalid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     * \[proposal_hash, ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     * \[proposal_hash, ref_index\]
     */
    get asV900(): [Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV1201(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageMissingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageMissing')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     * \[proposal_hash, ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     * \[proposal_hash, ref_index\]
     */
    get asV900(): [Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV1201(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageNoted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd47be2e4a05481fd42e21a0e80292e7b68789de4198c4087194b44ca5b857093'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV1201(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageReapedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageReaped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     * \[proposal_hash, provider, deposit, reaper\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     * \[proposal_hash, provider, deposit, reaper\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '79380123f072831563a9a29ef7dd7d312f309e2ba7fb0a62b701bc6410ad30b7'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV1201(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageUsedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageUsed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     * \[proposal_hash, provider, deposit\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     * \[proposal_hash, provider, deposit\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '84e66e8024f25586e9c223173463c55e83f2ff96130417e7f93374803337e024'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV1201(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
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
     * A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     * A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get asV900(): [number, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV1201(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracySecondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Seconded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has secconded a proposal
     */
    get isV1001(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
    }

    /**
     * An account has secconded a proposal
     */
    get asV1001(): [Uint8Array, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has secconded a proposal
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '64da6ce35c02cb0c27b0e16f55fa6a5bafc454011188894a92a86fae6c04c2aa'
    }

    /**
     * An account has secconded a proposal
     */
    get asV1201(): {who: Uint8Array, proposalIndex: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has secconded a proposal
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === 'd5bfb0eab019443031d55a3928d16d36f1028c536942730854c88b38b6f54e9e'
    }

    /**
     * An account has secconded a proposal
     */
    get asV1300(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV1300)
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
     * A referendum has begun. \[ref_index, threshold\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
    }

    /**
     * A referendum has begun. \[ref_index, threshold\]
     */
    get asV900(): [number, v900.VoteThreshold] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has begun.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV1201(): {refIndex: number, threshold: v1201.VoteThreshold} {
        assert(this.isV1201)
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
     * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
     * depositors\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
    }

    /**
     * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
     * depositors\]
     */
    get asV900(): [number, bigint, Uint8Array[]] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '2b043f58d8d5c231c7840a8ddeda0d0c9db1b6f9985329aaaac42d4661be939e'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV1201(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV2000(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has voted in a referendum
     */
    get isV1001(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '604da654023263e7aea05372e1eb33e38c4a6f4e84e160804c7879f6e1564022'
    }

    /**
     * An account has voted in a referendum
     */
    get asV1001(): [Uint8Array, number, v1001.AccountVote] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has voted in a referendum
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === 'f368480dd5ebfa5a0e2f0613bc234e6c02a38fc86dfc2ece938dee4f5a0483d1'
    }

    /**
     * An account has voted in a referendum
     */
    get asV1201(): {who: Uint8Array, refIndex: number, vote: v1201.AccountVote} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has voted in a referendum
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '0eaf760dcfa41dbcca324addedbf718eb01fd2ef951a16ed7fe4bb420e2ebf8a'
    }

    /**
     * An account has voted in a referendum
     */
    get asV1300(): {voter: Uint8Array, refIndex: number, vote: v1300.AccountVote} {
        assert(this.isV1300)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV2000(): {hash: Uint8Array} {
        assert(this.isV2000)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV2000(): {hash: Uint8Array} {
        assert(this.isV2000)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV2000(): {hash: Uint8Array} {
        assert(this.isV2000)
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
     * Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
    }

    /**
     * Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get asV900(): [number, bigint, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been allocated.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '6f95fbb8a91e310ee6d32f9a9933578e41f325c1506fac22a1f57925002cd904'
    }

    /**
     * Some funds have been allocated.
     */
    get asV1300(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV1300)
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
     * New proposal. \[proposal_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * New proposal. \[proposal_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New proposal.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV1300(): {proposalIndex: number} {
        assert(this.isV1300)
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
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get asV900(): [number, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV1300(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}
