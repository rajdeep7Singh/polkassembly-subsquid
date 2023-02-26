import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v25 from './v25'
import * as v2800 from './v2800'
import * as v10400 from './v10400'
import * as v10500 from './v10500'
import * as v10700 from './v10700'
import * as v10890 from './v10890'

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
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV25(): Uint8Array {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV10400(): {proposalHash: Uint8Array} {
        assert(this.isV10400)
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
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get asV25(): [Uint8Array, number, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV10400(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV10400)
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
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV25(): Uint8Array {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV10400(): {proposalHash: Uint8Array} {
        assert(this.isV10400)
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
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'eb6c0803dfad4e3340b12cc0c4a0ca51f49dadb65479069ab9acd1d79c047005'
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV25(): [Uint8Array, v25.DispatchResult] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV2800(): boolean {
        return this._chain.getEventHash('Council.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV2800(): [Uint8Array, v2800.Type_32] {
        assert(this.isV2800)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Council.Executed') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10400(): {proposalHash: Uint8Array, result: v10400.Type_34} {
        assert(this.isV10400)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10500(): boolean {
        return this._chain.getEventHash('Council.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10500(): {proposalHash: Uint8Array, result: v10500.Type_35} {
        assert(this.isV10500)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10700(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10700(): {proposalHash: Uint8Array, result: v10700.Type_36} {
        assert(this.isV10700)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10890(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10890(): {proposalHash: Uint8Array, result: v10890.Type_42} {
        assert(this.isV10890)
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
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV25(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV10400(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV10400)
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
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get asV25(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV10400(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV10400)
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
     *  A referendum has been cancelled. \[ref_index\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A referendum has been cancelled. \[ref_index\]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has been cancelled.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV10400(): {refIndex: number} {
        assert(this.isV10400)
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
     *  A proposal has been enacted. \[ref_index, result\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '793d244b7772e41ea3547e8cb9b7ecf56dd3233246cc9b61f2b0706b6fd27629'
    }

    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    get asV25(): [number, v25.DispatchResult] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    get isV2800(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'c83a84e76e348dd28ec0b3d255b3b6614da57c66bcdca25e179abc516b1d0b15'
    }

    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    get asV2800(): [number, v2800.Type_32] {
        assert(this.isV2800)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '0077901b6de880646efe44eef6ddcdc431a84c0fe153cc9f8e6e66c9354cbb13'
    }

    /**
     * A proposal has been enacted.
     */
    get asV10400(): {refIndex: number, result: v10400.Type_34} {
        assert(this.isV10400)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV10500(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '270512fa9651c9fa2eb584a439cab409bb758634bd42c08ad5fc0e9bbed943b0'
    }

    /**
     * A proposal has been enacted.
     */
    get asV10500(): {refIndex: number, result: v10500.Type_35} {
        assert(this.isV10500)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV10700(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV10700(): {refIndex: number, result: v10700.Type_36} {
        assert(this.isV10700)
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
     *  A proposal has been rejected by referendum. \[ref_index\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been rejected by referendum. \[ref_index\]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV10400(): {refIndex: number} {
        assert(this.isV10400)
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
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV10400(): {refIndex: number} {
        assert(this.isV10400)
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
     *  A proposal could not be executed because its preimage was invalid.
     *  \[proposal_hash, ref_index\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was invalid.
     *  \[proposal_hash, ref_index\]
     */
    get asV25(): [Uint8Array, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV10400(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV10400)
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
     *  A proposal could not be executed because its preimage was missing.
     *  \[proposal_hash, ref_index\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was missing.
     *  \[proposal_hash, ref_index\]
     */
    get asV25(): [Uint8Array, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV10400(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV10400)
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
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get asV25(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV10400(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV10400)
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
     *  A registered preimage was removed and the deposit collected by the reaper.
     *  \[proposal_hash, provider, deposit, reaper\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
    }

    /**
     *  A registered preimage was removed and the deposit collected by the reaper.
     *  \[proposal_hash, provider, deposit, reaper\]
     */
    get asV25(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV10400(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV10400)
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
     *  A proposal preimage was removed and used (the deposit was returned).
     *  \[proposal_hash, provider, deposit\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     *  \[proposal_hash, provider, deposit\]
     */
    get asV25(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV10400(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV10400)
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
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get asV25(): [number, bigint] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV10400(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV10400)
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
    get isV10500(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asV10500(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV10500)
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
     *  A referendum has begun. \[ref_index, threshold\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
    }

    /**
     *  A referendum has begun. \[ref_index, threshold\]
     */
    get asV25(): [number, v25.VoteThreshold] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has begun.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV10400(): {refIndex: number, threshold: v10400.VoteThreshold} {
        assert(this.isV10400)
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
     *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
    }

    /**
     *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
     */
    get asV25(): [number, bigint, Uint8Array[]] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV10400(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV10400)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV10890(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV10890(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV10890)
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
    get isV10500(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asV10500(): {voter: Uint8Array, refIndex: number, vote: v10500.AccountVote} {
        assert(this.isV10500)
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
    get isV10500(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV10500(): {hash: Uint8Array} {
        assert(this.isV10500)
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
    get isV10500(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV10500(): {hash: Uint8Array} {
        assert(this.isV10500)
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
    get isV10500(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV10500(): {hash: Uint8Array} {
        assert(this.isV10500)
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
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV25(): Uint8Array {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV10400(): {proposalHash: Uint8Array} {
        assert(this.isV10400)
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
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get asV25(): [Uint8Array, number, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV10400(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV10400)
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
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV25(): Uint8Array {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV10400(): {proposalHash: Uint8Array} {
        assert(this.isV10400)
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
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'eb6c0803dfad4e3340b12cc0c4a0ca51f49dadb65479069ab9acd1d79c047005'
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV25(): [Uint8Array, v25.DispatchResult] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV2800(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV2800(): [Uint8Array, v2800.Type_32] {
        assert(this.isV2800)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10400(): {proposalHash: Uint8Array, result: v10400.Type_34} {
        assert(this.isV10400)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10500(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10500(): {proposalHash: Uint8Array, result: v10500.Type_35} {
        assert(this.isV10500)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10700(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10700(): {proposalHash: Uint8Array, result: v10700.Type_36} {
        assert(this.isV10700)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10890(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10890(): {proposalHash: Uint8Array, result: v10890.Type_42} {
        assert(this.isV10890)
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
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV25(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV10400(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV10400)
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
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get asV25(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV10400(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV10400(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV10400)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsNewTipEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.NewTip')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new tip suggestion has been opened.
     */
    get isV10700(): boolean {
        return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A new tip suggestion has been opened.
     */
    get asV10700(): {tipHash: Uint8Array} {
        assert(this.isV10700)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsTipClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.TipClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A tip suggestion has been closed.
     */
    get isV10700(): boolean {
        return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
    }

    /**
     * A tip suggestion has been closed.
     */
    get asV10700(): {tipHash: Uint8Array, who: Uint8Array, payout: bigint} {
        assert(this.isV10700)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsTipRetractedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.TipRetracted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A tip suggestion has been retracted.
     */
    get isV10700(): boolean {
        return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A tip suggestion has been retracted.
     */
    get asV10700(): {tipHash: Uint8Array} {
        assert(this.isV10700)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsTipSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.TipSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A tip suggestion has been slashed.
     */
    get isV10700(): boolean {
        return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
    }

    /**
     * A tip suggestion has been slashed.
     */
    get asV10700(): {tipHash: Uint8Array, finder: Uint8Array, deposit: bigint} {
        assert(this.isV10700)
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
     *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get asV25(): [number, bigint, Uint8Array] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been allocated.
     */
    get isV10500(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV10500(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV10500)
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
     *  New proposal. \[proposal_index\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New proposal. \[proposal_index\]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New proposal.
     */
    get isV10500(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV10500(): {proposalIndex: number} {
        assert(this.isV10500)
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
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get asV25(): [number, bigint] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV10500(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV10500(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV10500)
        return this._chain.decodeEvent(this.event)
    }
}
