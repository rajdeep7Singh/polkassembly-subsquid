import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v1 from './v1'

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
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV1(): {bountyId: number} {
        assert(this.isV1)
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
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV1(): {bountyId: number} {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV1)
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
     * curator, parent bounty must be in active state, for this call to
     * work. We allow child-bounty curator and T::RejectOrigin to execute
     * this call irrespective of the parent bounty state.
     * 
     * If this function is called by the `RejectOrigin` or the
     * parent bounty curator, we assume that the child-bounty curator is
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
    get isV1(): boolean {
        return this._chain.getCallHash('ChildBounties.unassign_curator') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
    }

    /**
     * Unassign curator from a child-bounty.
     * 
     * The dispatch origin for this call can be either `RejectOrigin`, or
     * the curator of the parent bounty, or any signed origin.
     * 
     * For the origin other than T::RejectOrigin and the child-bounty
     * curator, parent bounty must be in active state, for this call to
     * work. We allow child-bounty curator and T::RejectOrigin to execute
     * this call irrespective of the parent bounty state.
     * 
     * If this function is called by the `RejectOrigin` or the
     * parent bounty curator, we assume that the child-bounty curator is
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
    get asV1(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '789db36a1c43e1ffdad52288f8573a492f529890632f51821e7bd1d74ba6cffc'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV1(): {to: v1.MultiAddress, conviction: v1.Conviction, balance: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '43d317508cc3ba04dcadb411eb6499f25532d64ab5a169b27410116c72f40a26'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV1(): {target: v1.MultiAddress, index: number} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV1(): {index: number} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV1(): null {
        assert(this.isV1)
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
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     */
    get isV1(): boolean {
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
     */
    get asV1(): {refIndex: number, vote: v1.AccountVote} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}
