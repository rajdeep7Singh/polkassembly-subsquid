import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v1055 from './v1055'
import * as v9111 from './v9111'
import * as v9320 from './v9320'
import * as v9340 from './v9340'

export class BountiesAcceptCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Bounties.accept_curator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get asV2028(): {bountyId: number} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }
}

export class BountiesUnassignCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Bounties.unassign_curator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Unassign curator from a bounty.
   * 
   *  This function can only be called by the `RejectOrigin` a signed origin.
   * 
   *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
   *  or inactive. As a result, we will slash the curator when possible.
   * 
   *  If the origin is the curator, we take this as a sign they are unable to do their job and
   *  they willingly give up. We could slash them, but for now we allow them to recover their
   *  deposit and exit without issue. (We may want to change this if it is abused.)
   * 
   *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
   *  anyone in the community to call out that a curator is not doing their due diligence, and
   *  we should pick a new curator. In this case the curator should also be slashed.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   *  Unassign curator from a bounty.
   * 
   *  This function can only be called by the `RejectOrigin` a signed origin.
   * 
   *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
   *  or inactive. As a result, we will slash the curator when possible.
   * 
   *  If the origin is the curator, we take this as a sign they are unable to do their job and
   *  they willingly give up. We could slash them, but for now we allow them to recover their
   *  deposit and exit without issue. (We may want to change this if it is abused.)
   * 
   *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
   *  anyone in the community to call out that a curator is not doing their due diligence, and
   *  we should pick a new curator. In this case the curator should also be slashed.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get asV2028(): {bountyId: number} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }
}

export class ChildBountiesAcceptCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ChildBounties.accept_curator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Accept the curator role for the child-bounty.
   * 
   * The dispatch origin for this call must be the curator of this
   * child-bounty.
   * 
   * A deposit will be reserved from the curator and refund upon
   * successful payout or cancellation.
   * 
   * Fee for curator is deducted from curator fee of parent bounty.
   * 
   * Parent bounty must be in active state, for this child-bounty call to
   * work.
   * 
   * Child-bounty must be in "CuratorProposed" state, for processing the
   * call. And state of child-bounty is moved to "Active" on successful
   * call completion.
   * 
   * - `parent_bounty_id`: Index of parent bounty.
   * - `child_bounty_id`: Index of child bounty.
   */
  get isV9190(): boolean {
    return this._chain.getCallHash('ChildBounties.accept_curator') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
  }

  /**
   * Accept the curator role for the child-bounty.
   * 
   * The dispatch origin for this call must be the curator of this
   * child-bounty.
   * 
   * A deposit will be reserved from the curator and refund upon
   * successful payout or cancellation.
   * 
   * Fee for curator is deducted from curator fee of parent bounty.
   * 
   * Parent bounty must be in active state, for this child-bounty call to
   * work.
   * 
   * Child-bounty must be in "CuratorProposed" state, for processing the
   * call. And state of child-bounty is moved to "Active" on successful
   * call completion.
   * 
   * - `parent_bounty_id`: Index of parent bounty.
   * - `child_bounty_id`: Index of child bounty.
   */
  get asV9190(): {parentBountyId: number, childBountyId: number} {
    assert(this.isV9190)
    return this._chain.decodeCall(this.call)
  }
}

export class ChildBountiesUnassignCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ChildBounties.unassign_curator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unassign curator from a child-bounty.
   * 
   * The dispatch origin for this call can be either `RejectOrigin`, or
   * the curator of the parent bounty, or any signed origin.
   * 
   * For the origin other than T::RejectOrigin and the child-bounty
   * curator, parent-bounty must be in active state, for this call to
   * work. We allow child-bounty curator and T::RejectOrigin to execute
   * this call irrespective of the parent-bounty state.
   * 
   * If this function is called by the `RejectOrigin` or the
   * parent-bounty curator, we assume that the child-bounty curator is
   * malicious or inactive. As a result, child-bounty curator deposit is
   * slashed.
   * 
   * If the origin is the child-bounty curator, we take this as a sign
   * that they are unable to do their job, and are willingly giving up.
   * We could slash the deposit, but for now we allow them to unreserve
   * their deposit and exit without issue. (We may want to change this if
   * it is abused.)
   * 
   * Finally, the origin can be anyone iff the child-bounty curator is
   * "inactive". Expiry update due of parent bounty is used to estimate
   * inactive state of child-bounty curator.
   * 
   * This allows anyone in the community to call out that a child-bounty
   * curator is not doing their due diligence, and we should pick a new
   * one. In this case the child-bounty curator deposit is slashed.
   * 
   * State of child-bounty is moved to Added state on successful call
   * completion.
   * 
   * - `parent_bounty_id`: Index of parent bounty.
   * - `child_bounty_id`: Index of child bounty.
   */
  get isV9190(): boolean {
    return this._chain.getCallHash('ChildBounties.unassign_curator') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
  }

  /**
   * Unassign curator from a child-bounty.
   * 
   * The dispatch origin for this call can be either `RejectOrigin`, or
   * the curator of the parent bounty, or any signed origin.
   * 
   * For the origin other than T::RejectOrigin and the child-bounty
   * curator, parent-bounty must be in active state, for this call to
   * work. We allow child-bounty curator and T::RejectOrigin to execute
   * this call irrespective of the parent-bounty state.
   * 
   * If this function is called by the `RejectOrigin` or the
   * parent-bounty curator, we assume that the child-bounty curator is
   * malicious or inactive. As a result, child-bounty curator deposit is
   * slashed.
   * 
   * If the origin is the child-bounty curator, we take this as a sign
   * that they are unable to do their job, and are willingly giving up.
   * We could slash the deposit, but for now we allow them to unreserve
   * their deposit and exit without issue. (We may want to change this if
   * it is abused.)
   * 
   * Finally, the origin can be anyone iff the child-bounty curator is
   * "inactive". Expiry update due of parent bounty is used to estimate
   * inactive state of child-bounty curator.
   * 
   * This allows anyone in the community to call out that a child-bounty
   * curator is not doing their due diligence, and we should pick a new
   * one. In this case the child-bounty curator deposit is slashed.
   * 
   * State of child-bounty is moved to Added state on successful call
   * completion.
   * 
   * - `parent_bounty_id`: Index of parent bounty.
   * - `child_bounty_id`: Index of child bounty.
   */
  get asV9190(): {parentBountyId: number, childBountyId: number} {
    assert(this.isV9190)
    return this._chain.decodeCall(this.call)
  }
}

export class ConvictionVotingVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ConvictionVoting.vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `poll_index`: The index of the poll to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of polls the voter has voted on.
   */
  get isV9320(): boolean {
    return this._chain.getCallHash('ConvictionVoting.vote') === 'd10ef1b298a681ecd2445c4d8c083dbabfcf6f60a2f8103238e6ab7895b95b86'
  }

  /**
   * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `poll_index`: The index of the poll to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of polls the voter has voted on.
   */
  get asV9320(): {pollIndex: number, vote: v9320.AccountVote} {
    assert(this.isV9320)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `poll_index`: The index of the poll to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of polls the voter has voted on.
   */
  get isV9340(): boolean {
    return this._chain.getCallHash('ConvictionVoting.vote') === 'c659a6e0d84861cd97f11d84780117a5b61201e70e1e5533a740761dc9489558'
  }

  /**
   * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `poll_index`: The index of the poll to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of polls the voter has voted on.
   */
  get asV9340(): {pollIndex: number, vote: v9340.Type_144} {
    assert(this.isV9340)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  # <weight>
   *  - O(1).
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '3a01fd8d5e95145a311b99cf21decce5be8578650f311f3a6091395407f5efe9'
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  # <weight>
   *  - O(1).
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get asV1020(): {refIndex: number, vote: number} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  The dispatch origin of this call must be _Signed_.
   * 
   *  - `ref_index`: The index of the referendum to vote for.
   *  - `vote`: The vote configuration.
   * 
   *  # <weight>
   *  - `O(1)`.
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get isV1055(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  The dispatch origin of this call must be _Signed_.
   * 
   *  - `ref_index`: The index of the referendum to vote for.
   *  - `vote`: The vote configuration.
   * 
   *  # <weight>
   *  - `O(1)`.
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get asV1055(): {refIndex: number, vote: v1055.AccountVote} {
    assert(this.isV1055)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get asV9111(): {refIndex: number, vote: v9111.AccountVote} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class FellowshipCollectiveVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'FellowshipCollective.vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add an aye or nay vote for the sender to the given proposal.
   * 
   * - `origin`: Must be `Signed` by a member account.
   * - `poll`: Index of a poll which is ongoing.
   * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
   * 
   * Transaction fees are be waived if the member is voting on any particular proposal
   * for the first time and the call is successful. Subsequent vote changes will charge a
   * fee.
   * 
   * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
   */
  get isV9320(): boolean {
    return this._chain.getCallHash('FellowshipCollective.vote') === '3b92ae59b712230cb36e2d4be01eaefb25ea0777001bbd698d8598221faca7d3'
  }

  /**
   * Add an aye or nay vote for the sender to the given proposal.
   * 
   * - `origin`: Must be `Signed` by a member account.
   * - `poll`: Index of a poll which is ongoing.
   * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
   * 
   * Transaction fees are be waived if the member is voting on any particular proposal
   * for the first time and the call is successful. Subsequent vote changes will charge a
   * fee.
   * 
   * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
   */
  get asV9320(): {poll: number, aye: boolean} {
    assert(this.isV9320)
    return this._chain.decodeCall(this.call)
  }
}

export class TipsTipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tips.tip')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Declare a tip value for an already-open tip.
   * 
   *  The dispatch origin for this call must be _Signed_ and the signing account must be a
   *  member of the `Tippers` set.
   * 
   *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
   *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
   *    account ID.
   *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
   *    value of active tippers will be given to the `who`.
   * 
   *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
   *  has started.
   * 
   *  # <weight>
   *  - Complexity: `O(T)` where `T` is the number of tippers.
   *    decoding `Tipper` vec of length `T`, insert tip and check closing,
   *    `T` is charged as upper bound given by `ContainsLengthBound`.
   *    The actual cost depends on the implementation of `T::Tippers`.
   * 
   *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
   *    is weighted as if almost full i.e of length `T-1`.
   *  - DbReads: `Tippers`, `Tips`
   *  - DbWrites: `Tips`
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Tips.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
  }

  /**
   *  Declare a tip value for an already-open tip.
   * 
   *  The dispatch origin for this call must be _Signed_ and the signing account must be a
   *  member of the `Tippers` set.
   * 
   *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
   *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
   *    account ID.
   *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
   *    value of active tippers will be given to the `who`.
   * 
   *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
   *  has started.
   * 
   *  # <weight>
   *  - Complexity: `O(T)` where `T` is the number of tippers.
   *    decoding `Tipper` vec of length `T`, insert tip and check closing,
   *    `T` is charged as upper bound given by `ContainsLengthBound`.
   *    The actual cost depends on the implementation of `T::Tippers`.
   * 
   *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
   *    is weighted as if almost full i.e of length `T-1`.
   *  - DbReads: `Tippers`, `Tips`
   *  - DbWrites: `Tips`
   *  # </weight>
   */
  get asV2028(): {hash: Uint8Array, tipValue: bigint} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryAcceptCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.accept_curator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get isV2025(): boolean {
    return this._chain.getCallHash('Treasury.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get asV2025(): {bountyId: number} {
    assert(this.isV2025)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryUnassignCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.unassign_curator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Unassign curator from a bounty.
   * 
   *  This function can only be called by the `RejectOrigin` a signed origin.
   * 
   *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
   *  or inactive. As a result, we will slash the curator when possible.
   * 
   *  If the origin is the curator, we take this as a sign they are unable to do their job and
   *  they willingly give up. We could slash them, but for now we allow them to recover their
   *  deposit and exit without issue. (We may want to change this if it is abused.)
   * 
   *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
   *  anyone in the community to call out that a curator is not doing their due diligence, and
   *  we should pick a new curator. In this case the curator should also be slashed.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get isV2025(): boolean {
    return this._chain.getCallHash('Treasury.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   *  Unassign curator from a bounty.
   * 
   *  This function can only be called by the `RejectOrigin` a signed origin.
   * 
   *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
   *  or inactive. As a result, we will slash the curator when possible.
   * 
   *  If the origin is the curator, we take this as a sign they are unable to do their job and
   *  they willingly give up. We could slash them, but for now we allow them to recover their
   *  deposit and exit without issue. (We may want to change this if it is abused.)
   * 
   *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
   *  anyone in the community to call out that a curator is not doing their due diligence, and
   *  we should pick a new curator. In this case the curator should also be slashed.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get asV2025(): {bountyId: number} {
    assert(this.isV2025)
    return this._chain.decodeCall(this.call)
  }
}
