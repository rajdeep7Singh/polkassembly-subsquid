import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v40 from './v40'
import * as v701 from './v701'
import * as v900 from './v900'
import * as v1200 from './v1200'
import * as v1300 from './v1300'
import * as v1400 from './v1400'
import * as v1603 from './v1603'
import * as v1900 from './v1900'
import * as v2000 from './v2000'

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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV40(): number {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV1200(): {refIndex: number} {
    assert(this.isV1200)
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
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV40(): [number, boolean] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get isV701(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '8d7c54bbac5b548a558504b413146fe5bff0b9275a2e7f4c831a148273ee173a'
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get asV701(): [number, Result<null, v701.DispatchError>] {
    assert(this.isV701)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV900(): [number, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '1f0fb32f2f0aaba231b69023c5858e85b8bfd660b5ce8c47d1b99b39602e4963'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1200(): {refIndex: number, result: Result<null, v1200.DispatchError>} {
    assert(this.isV1200)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1300(): {refIndex: number, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1400(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1400(): {refIndex: number, result: Result<null, v1400.DispatchError>} {
    assert(this.isV1400)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1603(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '2abe2e7ca2af8b119eb4f3a1f669843943049e3f4e2f613fc3b077115902ca2b'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1603(): {refIndex: number, result: Result<null, v1603.DispatchError>} {
    assert(this.isV1603)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV40(): number {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV1200(): {refIndex: number} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV40(): number {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV1200(): {refIndex: number} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV40(): [Uint8Array, number] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV1200(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV40(): [Uint8Array, number] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV1200(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV40(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd47be2e4a05481fd42e21a0e80292e7b68789de4198c4087194b44ca5b857093'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV1200(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV40(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '79380123f072831563a9a29ef7dd7d312f309e2ba7fb0a62b701bc6410ad30b7'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV1200(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV40(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '84e66e8024f25586e9c223173463c55e83f2ff96130417e7f93374803337e024'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV1200(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV40(): [number, bigint] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV1200(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV40(): [number, v40.VoteThreshold] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has begun.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV1200(): {refIndex: number, threshold: v1200.VoteThreshold} {
    assert(this.isV1200)
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
  get isV40(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV40(): [number, bigint, Uint8Array[]] {
    assert(this.isV40)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV1200(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === '2b043f58d8d5c231c7840a8ddeda0d0c9db1b6f9985329aaaac42d4661be939e'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV1200(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
    assert(this.isV1200)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has ben cleared.
   */
  get asV1900(): {hash: Uint8Array} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been noted.
   */
  get asV1900(): {hash: Uint8Array} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been requested.
   */
  get asV1900(): {hash: Uint8Array} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A referendum has been approved and its proposal has been scheduled.
   */
  get asV1900(): {index: number} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.Cancelled') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV1900(): {index: number, tally: v1900.Tally} {
    assert(this.isV1900)
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

  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  get asV1900(): {index: number} {
    assert(this.isV1900)
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

  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  get asV1900(): {index: number} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.Confirmed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
  }

  /**
   * A referendum has ended its confirmation phase and is ready for approval.
   */
  get asV1900(): {index: number, tally: v1900.Tally} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.DecisionDepositPlaced') === '5f4efdfb06509d37b98e33824ae6590ba8b3edb296ad4f18a1153ccb231b91e1'
  }

  /**
   * The decision deposit has been placed.
   */
  get asV1900(): {index: number, who: Uint8Array, amount: bigint} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.DecisionStarted') === 'e483ba61ca292dfe5c261bb23b4be45bd4e5054b6c1a5711ee9f8eeb2603caf6'
  }

  /**
   * A referendum has moved into the deciding phase.
   */
  get asV1900(): {index: number, track: number, proposalHash: Uint8Array, tally: v1900.Tally} {
    assert(this.isV1900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has moved into the deciding phase.
   */
  get isV2000(): boolean {
    return this._chain.getEventHash('Referenda.DecisionStarted') === '93e86498f68feebf124dad7a87010c14ba0e2cc07333331054e866079ff834a5'
  }

  /**
   * A referendum has moved into the deciding phase.
   */
  get asV2000(): {index: number, track: number, proposal: v2000.Bounded, tally: v2000.Tally} {
    assert(this.isV2000)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.Killed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
  }

  /**
   * A referendum has been killed.
   */
  get asV1900(): {index: number, tally: v1900.Tally} {
    assert(this.isV1900)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.Rejected') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV1900(): {index: number, tally: v1900.Tally} {
    assert(this.isV1900)
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
   * A referendum has being submitted.
   */
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.Submitted') === 'f3d99a635e6a54348c4a26958c1b599626768cff5c94d3044d6e0da21078da90'
  }

  /**
   * A referendum has being submitted.
   */
  get asV1900(): {index: number, track: number, proposalHash: Uint8Array} {
    assert(this.isV1900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has being submitted.
   */
  get isV2000(): boolean {
    return this._chain.getEventHash('Referenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
  }

  /**
   * A referendum has being submitted.
   */
  get asV2000(): {index: number, track: number, proposal: v2000.Bounded} {
    assert(this.isV2000)
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
  get isV1900(): boolean {
    return this._chain.getEventHash('Referenda.TimedOut') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
  }

  /**
   * A referendum has been timed out without being decided.
   */
  get asV1900(): {index: number, tally: v1900.Tally} {
    assert(this.isV1900)
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
  get isV47(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV47(): [number, bigint, Uint8Array] {
    assert(this.isV47)
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
   *  New proposal. \[proposal_index\]
   */
  get isV47(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV47(): number {
    assert(this.isV47)
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
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV47(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV47(): [number, bigint] {
    assert(this.isV47)
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
