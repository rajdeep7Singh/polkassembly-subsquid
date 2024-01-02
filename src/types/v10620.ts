import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_Attestation | Call_AuraExt | Call_Authorship | Call_Balances | Call_Council | Call_Ctype | Call_Delegation | Call_Democracy | Call_Did | Call_DidLookup | Call_Indices | Call_KiltLaunch | Call_ParachainStaking | Call_ParachainSystem | Call_Preimage | Call_Proxy | Call_Scheduler | Call_Session | Call_System | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_Treasury | Call_Utility | Call_Vesting | Call_Web3Names

export interface Call_Attestation {
    __kind: 'Attestation'
    value: AttestationCall
}

export interface Call_AuraExt {
    __kind: 'AuraExt'
    value: AuraExtCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_Ctype {
    __kind: 'Ctype'
    value: CtypeCall
}

export interface Call_Delegation {
    __kind: 'Delegation'
    value: DelegationCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_Did {
    __kind: 'Did'
    value: DidCall
}

export interface Call_DidLookup {
    __kind: 'DidLookup'
    value: DidLookupCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_KiltLaunch {
    __kind: 'KiltLaunch'
    value: KiltLaunchCall
}

export interface Call_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_Web3Names {
    __kind: 'Web3Names'
    value: Web3NamesCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type Web3NamesCall = Web3NamesCall_ban | Web3NamesCall_claim | Web3NamesCall_reclaim_deposit | Web3NamesCall_release_by_owner | Web3NamesCall_unban

/**
 * Ban a name.
 * 
 * A banned name cannot be claimed by anyone. The name's deposit
 * is returned to the original payer.
 * 
 * The origin must be the ban origin.
 * 
 * Emits `Web3NameBanned` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Banned, Owner, Names storage entries + origin check
 * - Writes: Names, Owner, Banned storage entries + currency deposit
 *   release
 * # </weight>
 */
export interface Web3NamesCall_ban {
    __kind: 'ban'
    name: BoundedVec
}

/**
 * Assign the specified name to the owner as specified in the
 * origin.
 * 
 * The name must not have already been claimed by someone else and the
 * owner must not already own another name.
 * 
 * Emits `Web3NameClaimed` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Names, Owner, Banned storage entries + available currency
 *   check + origin check
 * - Writes: Names, Owner storage entries + currency deposit reserve
 * # </weight>
 */
export interface Web3NamesCall_claim {
    __kind: 'claim'
    name: BoundedVec
}

/**
 * Release the provided name from its owner.
 * 
 * The origin must be the account that paid for the name's deposit.
 * 
 * Emits `Web3NameReleased` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Owner storage entry + origin check
 * - Writes: Names, Owner storage entries + currency deposit release
 * # </weight>
 */
export interface Web3NamesCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    name: BoundedVec
}

/**
 * Release the provided name from its owner.
 * 
 * The origin must be the owner of the specified name.
 * 
 * Emits `Web3NameReleased` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Names storage entry + origin check
 * - Writes: Names, Owner storage entries + currency deposit release
 * # </weight>
 */
export interface Web3NamesCall_release_by_owner {
    __kind: 'release_by_owner'
}

/**
 * Unban a name.
 * 
 * Make a name claimable again.
 * 
 * The origin must be the ban origin.
 * 
 * Emits `Web3NameUnbanned` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Banned storage entry + origin check
 * - Writes: Banned storage entry deposit release
 * # </weight>
 */
export interface Web3NamesCall_unban {
    __kind: 'unban'
    name: BoundedVec
}

export type BoundedVec = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_force_vested_transfer | VestingCall_merge_schedules | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

/**
 * Force a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * NOTE: This will unlock all schedules through the current block.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 4 Reads, 4 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 * # </weight>
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
 * the highest possible start and end blocks. If both schedules have already started the
 * current block will be used as the schedule start; with the caveat that if one schedule
 * is finished by the current block, the other will be treated as the new merged schedule,
 * unmodified.
 * 
 * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
 * NOTE: This will unlock all schedules through the current block prior to merging.
 * NOTE: If both schedules have ended by the current block, no new schedule will be created
 * and both will be removed.
 * 
 * Merged schedule attributes:
 * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
 *   current_block)`.
 * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
 * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `schedule1_index`: index of the first schedule to merge.
 * - `schedule2_index`: index of the second schedule to merge.
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 2 Reads, 2 Writes
 *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * Unlock any vested funds of a `target` account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account
 * # </weight>
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * Create a vested transfer.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account receiving the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * NOTE: This will unlock all schedules through the current block.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: bigint
}

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

export type AccountId32 = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

export type OriginCaller = OriginCaller_Council | OriginCaller_Did | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_188
}

export interface OriginCaller_Did {
    __kind: 'Did'
    value: DidRawOrigin
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_189
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export type RawOrigin = RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_None {
    __kind: 'None'
}

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export type Void = never

export type Type_189 = Type_189_Member | Type_189_Members | Type_189__Phantom

export interface Type_189_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_189_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_189__Phantom {
    __kind: '_Phantom'
}

export interface DidRawOrigin {
    id: AccountId32
    submitter: AccountId32
}

export type Type_188 = Type_188_Member | Type_188_Members | Type_188__Phantom

export interface Type_188_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_188_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_188__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1).
 * - DbReads: `Proposals`, `Approvals`
 * - DbWrite: `Approvals`
 * # </weight>
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `ProposalCount`, `origin account`
 * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 * # </weight>
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `Proposals`, `rejected proposer account`
 * - DbWrites: `Proposals`, `rejected proposer account`
 * # </weight>
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: AccountId32
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: AccountId32
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: AccountId32
    add: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: Perbill
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

export type Perbill = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

export interface SessionKeys {
    aura: Public
}

export type Public = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: bigint
    index: number
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: MaybeHashed
}

export type MaybeHashed = MaybeHashed_Hash | MaybeHashed_Value

export interface MaybeHashed_Hash {
    __kind: 'Hash'
    value: H256
}

export interface MaybeHashed_Value {
    __kind: 'Value'
    value: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: AccountId32
    proxyType: ProxyType
    delay: bigint
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 * 
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 * 
 * No more than `MaxPending` announcements may be made at any one time.
 * 
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: AccountId32
    callHash: H256
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 * Requires a `Signed` origin.
 * 
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 * 
 * Fails if there are insufficient funds to pay for deposit.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 * TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
    __kind: 'anonymous'
    proxyType: ProxyType
    delay: bigint
    index: number
}

/**
 * Removes a previously spawned anonymous proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `anonymous` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `anonymous` to create this account.
 * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `anonymous`.
 * - `height`: The height of the chain when the call to `anonymous` was processed.
 * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created anonymous
 * account whose `anonymous` call has corresponding parameters.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_kill_anonymous {
    __kind: 'kill_anonymous'
    spawner: AccountId32
    proxyType: ProxyType
    index: number
    height: bigint
    extIndex: number
}

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: AccountId32
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: AccountId32
    real: AccountId32
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * Remove the given announcement of a delegate.
 * 
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: AccountId32
    callHash: H256
}

/**
 * Remove a given announcement.
 * 
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: AccountId32
    callHash: H256
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `anonymous`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * Unregister a proxy account for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: AccountId32
    proxyType: ProxyType
    delay: bigint
}

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_NonDepositClaiming | ProxyType_NonTransfer | ProxyType_ParachainStaking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_NonDepositClaiming {
    __kind: 'NonDepositClaiming'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_ParachainStaking {
    __kind: 'ParachainStaking'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * Clear an unrequested preimage from the runtime storage.
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Bytes
}

export interface ParachainInherentData {
    validationData: V1PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Bytes
}

export type Id = number

export interface InboundDownwardMessage {
    sentAt: number
    msg: Bytes
}

export interface StorageProof {
    trieNodes: Bytes[]
}

export interface V1PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainStakingCall = ParachainStakingCall_cancel_leave_candidates | ParachainStakingCall_candidate_stake_less | ParachainStakingCall_candidate_stake_more | ParachainStakingCall_delegate_another_candidate | ParachainStakingCall_delegator_stake_less | ParachainStakingCall_delegator_stake_more | ParachainStakingCall_execute_leave_candidates | ParachainStakingCall_force_new_round | ParachainStakingCall_force_remove_candidate | ParachainStakingCall_init_leave_candidates | ParachainStakingCall_join_candidates | ParachainStakingCall_join_delegators | ParachainStakingCall_leave_delegators | ParachainStakingCall_revoke_delegation | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_set_inflation | ParachainStakingCall_set_max_candidate_stake | ParachainStakingCall_set_max_selected_candidates | ParachainStakingCall_unlock_unstaked

/**
 * Revert the previously requested exit of the network of a collator
 * candidate. On success, adds back the candidate to the TopCandidates
 * and updates the collators.
 * 
 * Requires the candidate to previously have called
 * `init_leave_candidates`.
 * 
 * Emits `CollatorCanceledExit`.
 * 
 * # <weight>
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators for this
 * candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: [Origin Account], TotalCollatorStake, TopCandidates,
 *   CandidatePool
 * - Writes: TotalCollatorStake, CandidatePool, TopCandidates
 * # </weight>
 */
export interface ParachainStakingCall_cancel_leave_candidates {
    __kind: 'cancel_leave_candidates'
}

/**
 * Stake less funds for a collator candidate.
 * 
 * If the new amount of staked fund is not large enough, the account
 * could be removed from the set of collator candidates and not be
 * considered for authoring the next blocks.
 * 
 * This operation affects the pallet's total stake amount.
 * 
 * The unstaked funds are not released immediately to the account, but
 * they will be available after `StakeDuration` blocks.
 * 
 * The resulting total amount of funds staked must be within the
 * allowed range as set in the pallet's configuration.
 * 
 * Emits `CollatorStakedLess`.
 * 
 * # <weight>
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators for this
 * candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: [Origin Account], Unstaking, TopCandidates,
 *   MaxSelectedCandidates, CandidatePool
 * - Writes: Unstaking, CandidatePool, TotalCollatorStake
 * # </weight>
 */
export interface ParachainStakingCall_candidate_stake_less {
    __kind: 'candidate_stake_less'
    less: bigint
}

/**
 * Stake more funds for a collator candidate.
 * 
 * If not in the set of candidates, staking enough funds allows the
 * account to be added to it. The larger amount of funds, the higher
 * chances to be selected as the author of the next block.
 * 
 * This operation affects the pallet's total stake amount.
 * 
 * The resulting total amount of funds staked must be within the
 * allowed range as set in the pallet's configuration.
 * 
 * Emits `CollatorStakedMore`.
 * 
 * # <weight>
 * Weight: O(N + D + U) where  where N is `MaxSelectedCandidates`
 * bounded by `MaxTopCandidates`, D is the number of delegators for
 * this candidate bounded by `MaxDelegatorsPerCollator` and U is the
 * number of locked unstaking requests bounded by `MaxUnstakeRequests`.
 * - Reads: [Origin Account], Locks, TotalCollatorStake,
 *   MaxCollatorCandidateStake, TopCandidates, CandidatePool
 * - Writes: Locks, TotalCollatorStake, CandidatePool, TopCandidates
 * # </weight>
 */
export interface ParachainStakingCall_candidate_stake_more {
    __kind: 'candidate_stake_more'
    more: bigint
}

/**
 * Delegate another collator's candidate by staking some funds and
 * increasing the pallet's as well as the collator's total stake.
 * 
 * The account that wants to delegate cannot be part of the collator
 * candidates set as well.
 * 
 * The caller _must_ have delegated before. Otherwise,
 * `join_delegators` should be called.
 * 
 * If the delegator has already delegated the maximum number of
 * collator candidates, this operation will fail.
 * 
 * The amount staked must be larger than the minimum required to become
 * a delegator as set in the pallet's configuration.
 * 
 * As only `MaxDelegatorsPerCollator` are allowed to delegate a given
 * collator, the amount staked must be larger than the lowest one in
 * the current set of delegator for the operation to be meaningful.
 * 
 * The collator's total stake as well as the pallet's total stake are
 * increased accordingly.
 * 
 * NOTE: This transaction is expected to throw until we increase
 * `MaxCollatorsPerDelegator` by at least one, since it is currently
 * set to one.
 * 
 * Emits `Delegation`.
 * Emits `DelegationReplaced` if the candidate has
 * `MaxDelegatorsPerCollator` many delegations but this delegator
 * staked more than one of the other delegators of this candidate.
 * 
 * # <weight>
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators for this
 * candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: [Origin Account], DelegatorState, TopCandidates,
 *   MaxSelectedCandidates, CandidatePool, LastDelegation, Round
 * - Writes: Locks, CandidatePool, DelegatorState, TotalCollatorStake,
 *   LastDelegation
 * # </weight>
 */
export interface ParachainStakingCall_delegate_another_candidate {
    __kind: 'delegate_another_candidate'
    collator: MultiAddress
    amount: bigint
}

/**
 * Reduce the stake for delegating a collator candidate.
 * 
 * If the new amount of staked fund is not large enough, the collator
 * could be removed from the set of collator candidates and not be
 * considered for authoring the next blocks.
 * 
 * The unstaked funds are not release immediately to the account, but
 * they will be available after `StakeDuration` blocks.
 * 
 * The remaining staked funds must still be larger than the minimum
 * required by this pallet to maintain the status of delegator.
 * 
 * The resulting total amount of funds staked must be within the
 * allowed range as set in the pallet's configuration.
 * 
 * Emits `DelegatorStakedLess`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *   TopCandidates, CandidatePool, MaxSelectedCandidates
 * - Writes: Unstaking, DelegatorState, CandidatePool,
 *   TotalCollatorStake
 * # </weight>
 */
export interface ParachainStakingCall_delegator_stake_less {
    __kind: 'delegator_stake_less'
    candidate: MultiAddress
    less: bigint
}

/**
 * Increase the stake for delegating a collator candidate.
 * 
 * If not in the set of candidates, staking enough funds allows the
 * collator candidate to be added to it.
 * 
 * Emits `DelegatorStakedMore`.
 * 
 * # <weight>
 * Weight: O(N) + O(D) where N is `MaxSelectedCandidates` bounded
 * by `MaxTopCandidates` and D the number of total delegators for
 * this collator bounded by `MaxCollatorsPerDelegator`.
 * bounded by `MaxUnstakeRequests`.
 * - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *   Locks, TopCandidates, CandidatePool, MaxSelectedCandidates
 * - Writes: Unstaking, Locks, DelegatorState, CandidatePool,
 *   TotalCollatorStake
 * # </weight>
 */
export interface ParachainStakingCall_delegator_stake_more {
    __kind: 'delegator_stake_more'
    candidate: MultiAddress
    more: bigint
}

/**
 * Execute the network exit of a candidate who requested to leave at
 * least `ExitQueueDelay` rounds ago. Prepares unstaking of the
 * candidates and their delegators stake which can be unlocked via
 * `unlock_unstaked` after waiting at least `StakeDuration` many
 * blocks.
 * 
 * Requires the candidate to previously have called
 * `init_leave_candidates`.
 * 
 * The exit request can be reversed by calling
 * `cancel_leave_candidates`.
 * 
 * Emits `CollatorLeft`.
 * 
 * # <weight>
 * Weight: O(N + D + U) where  where N is `MaxSelectedCandidates`
 * bounded by `MaxTopCandidates`, D is the number of delegators for
 * this candidate bounded by `MaxDelegatorsPerCollator` and U is the
 * number of locked unstaking requests bounded by `MaxUnstakeRequests`.
 * - Reads: CandidatePool, Round, D * DelegatorState, D
 *   * BlockNumber, D * Unstaking
 * - Writes: D * Unstaking, D * DelegatorState, Total
 * - Kills: CandidatePool, DelegatorState
 * # </weight>
 */
export interface ParachainStakingCall_execute_leave_candidates {
    __kind: 'execute_leave_candidates'
    collator: MultiAddress
}

/**
 * Forces the start of the new round in the next block.
 * 
 * The new round will be enforced via <T as
 * ShouldEndSession<_>>::should_end_session.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account]
 * - Writes: ForceNewRound
 * # </weight>
 */
export interface ParachainStakingCall_force_new_round {
    __kind: 'force_new_round'
}

/**
 * Forcedly removes a collator candidate from the TopCandidates and
 * clears all associated storage for the candidate and their
 * delegators.
 * 
 * Prepares unstaking of the candidates and their delegators stake
 * which can be unlocked via `unlock_unstaked` after waiting at
 * least `StakeDuration` many blocks.
 * 
 * Emits `CandidateRemoved`.
 * 
 * # <weight>
 * - The transaction's complexity is mainly dependent on updating the
 *   `SelectedCandidates` storage in `select_top_candidates` which in
 *   return depends on the number of `MaxSelectedCandidates` (N).
 * - For each N, we read `CandidatePool` from the storage.
 * ---------
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators of the
 * collator candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: MaxCollatorCandidateStake, 2 * N * CandidatePool,
 *   TopCandidates, BlockNumber, D * DelegatorState, D * Unstaking
 * - Writes: MaxCollatorCandidateStake, N * CandidatePool, D *
 *   DelegatorState, (D + 1) * Unstaking
 * - Kills: CandidatePool, DelegatorState for all delegators which only
 *   delegated to the candidate
 * # </weight>
 */
export interface ParachainStakingCall_force_remove_candidate {
    __kind: 'force_remove_candidate'
    collator: MultiAddress
}

/**
 * Request to leave the set of collator candidates.
 * 
 * On success, the account is immediately removed from the candidate
 * pool to prevent selection as a collator in future validation rounds,
 * but unstaking of the funds is executed with a delay of
 * `StakeDuration` blocks.
 * 
 * The exit request can be reversed by calling
 * `cancel_leave_candidates`.
 * 
 * This operation affects the pallet's total stake amount. It is
 * updated even though the funds of the candidate who signaled to leave
 * are still locked for `ExitDelay` + `StakeDuration` more blocks.
 * 
 * NOTE: Upon starting a new session_i in `new_session`, the current
 * top candidates are selected to be block authors for session_i+1. Any
 * changes to the top candidates afterwards do not effect the set of
 * authors for session_i+1.
 * Thus, we have to make sure none of these collators can
 * leave before session_i+1 ends by delaying their
 * exit for `ExitDelay` many blocks.
 * 
 * Emits `CollatorScheduledExit`.
 * 
 * # <weight>
 * - The transaction's complexity is mainly dependent on updating the
 *   `SelectedCandidates` storage in `select_top_candidates` which in
 *   return depends on the number of `MaxSelectedCandidates` (N).
 * - For each N, we read `CandidatePool` from the storage.
 * ---------
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators for this
 * candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: [Origin Account], TopCandidates, (N + 1) * CandidatePool,
 *   TotalCollatorStake
 * - Writes: CandidatePool, TopCandidates, TotalCollatorStake
 * # </weight>
 */
export interface ParachainStakingCall_init_leave_candidates {
    __kind: 'init_leave_candidates'
}

/**
 * Join the set of collator candidates.
 * 
 * In the next blocks, if the collator candidate has enough funds
 * staked to be included in any of the top `MaxSelectedCandidates`
 * positions, it will be included in the set of potential authors that
 * will be selected by the stake-weighted random selection function.
 * 
 * The staked funds of the new collator candidate are added to the
 * total stake of the system.
 * 
 * The total amount of funds staked must be within the allowed range as
 * set in the pallet's configuration.
 * 
 * The dispatch origin must not be already part of the collator
 * candidates nor of the delegators set.
 * 
 * Emits `JoinedCollatorCandidates`.
 * 
 * # <weight>
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators for this
 * candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: [Origin Account], DelegatorState,
 *   MaxCollatorCandidateStake, Locks, TotalCollatorStake,
 *   TopCandidates, MaxSelectedCandidates, CandidatePool,
 * - Writes: Locks, TotalCollatorStake, CandidatePool, TopCandidates,
 * # </weight>
 */
export interface ParachainStakingCall_join_candidates {
    __kind: 'join_candidates'
    stake: bigint
}

/**
 * Join the set of delegators by delegating to a collator candidate.
 * 
 * The account that wants to delegate cannot be part of the collator
 * candidates set as well.
 * 
 * The caller must _not_ have delegated before. Otherwise,
 * `delegate_another_candidate` should be called.
 * 
 * The amount staked must be larger than the minimum required to become
 * a delegator as set in the pallet's configuration.
 * 
 * As only `MaxDelegatorsPerCollator` are allowed to delegate a given
 * collator, the amount staked must be larger than the lowest one in
 * the current set of delegator for the operation to be meaningful.
 * 
 * The collator's total stake as well as the pallet's total stake are
 * increased accordingly.
 * 
 * Emits `Delegation`.
 * Emits `DelegationReplaced` if the candidate has
 * `MaxDelegatorsPerCollator` many delegations but this delegator
 * staked more than one of the other delegators of this candidate.
 * 
 * # <weight>
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators for this
 * candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: [Origin Account], DelegatorState, TopCandidates,
 *   MaxSelectedCandidates, CandidatePool, LastDelegation, Round
 * - Writes: Locks, CandidatePool, DelegatorState, TotalCollatorStake,
 *   LastDelegation
 * # </weight>
 */
export interface ParachainStakingCall_join_delegators {
    __kind: 'join_delegators'
    collator: MultiAddress
    amount: bigint
}

/**
 * Leave the set of delegators and, by implication, revoke all ongoing
 * delegations.
 * 
 * All staked funds are not unlocked immediately, but they are added to
 * the queue of pending unstaking, and will effectively be released
 * after `StakeDuration` blocks from the moment the delegator leaves.
 * 
 * This operation reduces the total stake of the pallet as well as the
 * stakes of all collators that were delegated, potentially affecting
 * their chances to be included in the set of candidates in the next
 * rounds.
 * 
 * Emits `DelegatorLeft`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of delegations for this delegator
 * which is bounded by by `MaxCollatorsPerDelegator`.
 * - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *   TopCandidates, MaxSelectedCandidates, C * CandidatePool,
 * - Writes: Unstaking, CandidatePool, TotalCollatorStake,
 * - Kills: DelegatorState
 * # </weight>
 */
export interface ParachainStakingCall_leave_delegators {
    __kind: 'leave_delegators'
}

/**
 * Terminates an ongoing delegation for a given collator candidate.
 * 
 * The staked funds are not unlocked immediately, but they are added to
 * the queue of pending unstaking, and will effectively be released
 * after `StakeDuration` blocks from the moment the delegation is
 * terminated.
 * 
 * This operation reduces the total stake of the pallet as well as the
 * stakes of the collator involved, potentially affecting its chances
 * to be included in the set of candidates in the next rounds.
 * 
 * Emits `DelegatorLeft`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of delegations for this delegator
 * which is bounded by by `MaxCollatorsPerDelegator`.
 * - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *   Locks, TopCandidates, CandidatePool, MaxSelectedCandidates
 * - Writes: Unstaking, Locks, DelegatorState, CandidatePool,
 *   TotalCollatorStake
 * - Kills: DelegatorState if the delegator has not delegated to
 *   another collator
 * # </weight>
 */
export interface ParachainStakingCall_revoke_delegation {
    __kind: 'revoke_delegation'
    collator: MultiAddress
}

/**
 * Set the number of blocks each validation round lasts.
 * 
 * If the new value is less than the length of the current round, the
 * system will immediately move to the next round in the next block.
 * 
 * The new value must be higher than the minimum allowed as set in the
 * pallet's configuration.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `BlocksPerRoundSet`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Round
 * - Writes: Round
 * # </weight>
 */
export interface ParachainStakingCall_set_blocks_per_round {
    __kind: 'set_blocks_per_round'
    new: bigint
}

/**
 * Set the annual inflation rate to derive per-round inflation.
 * 
 * The inflation details are considered valid if the annual reward rate
 * is approximately the per-block reward rate multiplied by the
 * estimated* total number of blocks per year.
 * 
 * The estimated average block time is twelve seconds.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `RoundInflationSet`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account]
 * - Writes: InflationConfig
 * # </weight>
 */
export interface ParachainStakingCall_set_inflation {
    __kind: 'set_inflation'
    collatorMaxRatePercentage: Perquintill
    collatorAnnualRewardRatePercentage: Perquintill
    delegatorMaxRatePercentage: Perquintill
    delegatorAnnualRewardRatePercentage: Perquintill
}

/**
 * Set the maximal amount a collator can stake. Existing stakes are not
 * changed.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `MaxCandidateStakeChanged`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], MaxCollatorCandidateStake
 * - Writes: Round
 * # </weight>
 */
export interface ParachainStakingCall_set_max_candidate_stake {
    __kind: 'set_max_candidate_stake'
    new: bigint
}

/**
 * Set the maximum number of collator candidates that can be selected
 * at the beginning of each validation round.
 * 
 * Changes are not applied until the start of the next round.
 * 
 * The new value must be higher than the minimum allowed as set in the
 * pallet's configuration.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `MaxSelectedCandidatesSet`.
 * 
 * 
 * # <weight>
 * - The transaction's complexity is mainly dependent on updating the
 *   `SelectedCandidates` storage in `select_top_candidates` which in
 *   return depends on the number of `MaxSelectedCandidates` (N).
 * - For each N, we read `CandidatePool` from the storage.
 * ---------
 * Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 * `MaxTopCandidates` and D is the number of delegators of a
 * candidate bounded by `MaxDelegatorsPerCollator`.
 * - Reads: MaxSelectedCandidates, TopCandidates, N * CandidatePool
 * - Writes: MaxSelectedCandidates
 * # </weight>
 */
export interface ParachainStakingCall_set_max_selected_candidates {
    __kind: 'set_max_selected_candidates'
    new: number
}

/**
 * Unlock all previously staked funds that are now available for
 * unlocking by the origin account after `StakeDuration` blocks have
 * elapsed.
 * 
 * Weight: O(U) where U is the number of locked unstaking requests
 * bounded by `MaxUnstakeRequests`.
 * - Reads: [Origin Account], Unstaking, Locks
 * - Writes: Unstaking, Locks
 * - Kills: Unstaking & Locks if no balance is locked anymore
 * # </weight>
 */
export interface ParachainStakingCall_unlock_unstaked {
    __kind: 'unlock_unstaked'
    target: MultiAddress
}

export type Perquintill = bigint

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type KiltLaunchCall = KiltLaunchCall_change_transfer_account | KiltLaunchCall_force_unlock | KiltLaunchCall_locked_transfer | KiltLaunchCall_migrate_genesis_account | KiltLaunchCall_migrate_multiple_genesis_accounts

/**
 * Forcedly change the transfer account to the specified account.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account]
 * - Writes: TransferAccount
 * # </weight>
 */
export interface KiltLaunchCall_change_transfer_account {
    __kind: 'change_transfer_account'
    transferAccount: MultiAddress
}

/**
 * Forcedly remove KILT balance locks via sudo for the specified block
 * number.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `Unlocked`.
 * 
 * # <weight>
 * - The transaction's complexity is proportional to the size of
 *   storage entries in `UnlockingAt` (N) which is practically uncapped
 *   but in theory it should be `MaxClaims` at most.
 * ---------
 * Weight: O(N) where N is the number of accounts for which the lock
 * will be removed for the given block.
 * - Reads: UnlockingAt, [Origin Account]
 * - Kills: UnlockingAt (if N > 0), Locks (if N > 0), BalanceLocks (if
 *   N > 0)
 * # </weight>
 */
export interface KiltLaunchCall_force_unlock {
    __kind: 'force_unlock'
    block: bigint
}

/**
 * Transfer KILT locked tokens to another account similar to
 * `pallet_vesting::vested_transfer`.
 * 
 * Expects the source to have a KILT balance lock and at least the
 * specified amount available as balance locked with LockId
 * `KILT_LAUNCH_ID`.
 * 
 * Calls `migrate_kilt_balance_lock` internally.
 * 
 * Emits `LockedTransfer` and if target does not have KILT balance
 * lockup prior to transfer `AddedKiltLock`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Locks, Balance, BalanceLocks, UnlockingAt
 * - Writes: Locks, Balance, BalanceLocks, UnlockingAt
 * - Kills (if source transfers all locked balance): Locks,
 *   BalanceLocks, UnlockingAt
 * # </weight>
 */
export interface KiltLaunchCall_locked_transfer {
    __kind: 'locked_transfer'
    target: MultiAddress
    amount: bigint
}

/**
 * Transfer tokens and vesting information or the KILT balance lock
 * from an unowned source address to an account owned by the target.
 * 
 * If vesting info or a KILT balance lock has been set up for the
 * source account in the genesis block via `GenesisBuild`, then
 * the corresponding locked/vested information and balance is migrated
 * automatically. Please note that even though this extrinsic supports
 * migrating both the KILT balance lock as well as vesting in one call,
 * all source accounts should only contain either a KILT balance lock
 * or vesting.
 * 
 * Additionally, for vesting we already unlock the
 * usable balance until the current block. This should enable the user
 * to pay the transaction fees for the next call of `vest` which is
 * always required to be explicitly called in order to unlock (more)
 * balance from vesting.
 * 
 * NOTE: Setting the KILT balance lock actually only occurs in this
 * call (and not when building the genesis block in `GenesisBuild`) to
 * avoid overhead from handling locks when migrating. We can do so
 * because all target accounts are not owned by anyone and thus these
 * cannot sign and/or call any extrinsics.
 * 
 * The dispatch origin must be TransferAccount.
 * 
 * Emits either `AddedVesting` or `AddedKiltLock`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], TransferAccount, Locks, Balance, Vesting,
 *   BalanceLocks
 * - Writes: Locks, Balance, UnownedAccount, Vesting (if source is
 *   vesting), BalanceLocks (if source is locking), UnlockingAt (if
 *   source is locking)
 * - Kills (for source): Locks, Balance, UnownedAccount, Vesting (if
 *   source is vesting), BalanceLocks (if source is locking)
 * # </weight>
 */
export interface KiltLaunchCall_migrate_genesis_account {
    __kind: 'migrate_genesis_account'
    source: MultiAddress
    target: MultiAddress
}

/**
 * Transfer all balances, vesting information and KILT balance locks
 * from multiple source addresses to the same target address.
 * 
 * See `migrate_genesis_account` for details as we run the same logic
 * for each source address.
 * 
 * The dispatch origin must be TransferAccount.
 * 
 * Emits N events which are either `AddedVesting` or `AddedKiltLock`.
 * 
 * # <weight>
 * - The transaction's complexity is proportional to the size of
 *   `sources` (N) which is capped at CompactAssignments::LIMIT
 *   (MaxClaims)
 * ---------
 * Weight: O(N) where N is the number of source addresses.
 * - Reads: [Origin Account], TransferAccount, UnownedAccount, Locks,
 *   Balance, Vesting, BalanceLocks
 * - Writes: Locks, Balance, Vesting (if any source is vesting),
 *   BalanceLocks (if aby source is locking), UnlockingAt (if any
 *   source is locking)
 * - Kills (for sources): Locks, Balance, UnownedAccount, Vesting (if
 *   any source is vesting), BalanceLocks (if any source is locking)
 * # </weight>
 */
export interface KiltLaunchCall_migrate_multiple_genesis_accounts {
    __kind: 'migrate_multiple_genesis_accounts'
    sources: MultiAddress[]
    target: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_force_transfer | IndicesCall_free | IndicesCall_freeze | IndicesCall_transfer

/**
 * Assign an previously unassigned index.
 * 
 * Payment: `Deposit` is reserved from the sender account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be claimed. This must not be in use.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One reserve operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: bigint
}

/**
 * Force an index to an account. This doesn't require a deposit. If the index is already
 * held, then any deposit is reimbursed to its current owner.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `index`: the index to be (re-)assigned.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - Up to one reserve operation.
 * - One event.
 * -------------------
 * - DB Weight:
 *    - Reads: Indices Accounts, System Account (original owner)
 *    - Writes: Indices Accounts, System Account (original owner)
 * # </weight>
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: AccountId32
    index: bigint
    freeze: boolean
}

/**
 * Free up an index owned by the sender.
 * 
 * Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 * - `index`: the index to be freed. This must be owned by the sender.
 * 
 * Emits `IndexFreed` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One reserve operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: bigint
}

/**
 * Freeze an index so it will always point to the sender account. This consumes the
 * deposit.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must have a
 * non-frozen account `index`.
 * 
 * - `index`: the index to be frozen in place.
 * 
 * Emits `IndexFrozen` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - Up to one slash operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: bigint
}

/**
 * Assign an index already owned by the sender to another account. The balance reservation
 * is effectively transferred to the new account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be re-assigned. This must be owned by the sender.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One transfer operation.
 * - One event.
 * -------------------
 * - DB Weight:
 *    - Reads: Indices Accounts, System Account (recipient)
 *    - Writes: Indices Accounts, System Account (recipient)
 * # </weight>
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: AccountId32
    index: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DidLookupCall = DidLookupCall_associate_account | DidLookupCall_associate_sender | DidLookupCall_reclaim_deposit | DidLookupCall_remove_account_association | DidLookupCall_remove_sender_association

/**
 * Associate the given account to the DID that authorized this call.
 * 
 * The account has to sign the DID and a blocknumber after which the
 * signature expires in order to authorize the association.
 * 
 * The signature will be checked against the scale encoded tuple of the
 * method specific id of the did identifier and the block number after
 * which the signature should be regarded invalid.
 * 
 * Emits `AssociationEstablished` and, optionally, `AssociationRemoved`
 * if there was a previous association for the account.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_associate_account {
    __kind: 'associate_account'
    account: AccountId32
    expiration: bigint
    proof: MultiSignature
}

/**
 * Associate the sender of the call to the DID that authorized this
 * call.
 * 
 * Emits `AssociationEstablished` and, optionally, `AssociationRemoved`
 * if there was a previous association for the account.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_associate_sender {
    __kind: 'associate_sender'
}

/**
 * Remove the association of the provided account. This call can only
 * be called from the deposit owner. The reserved deposit will be
 * freed.
 * 
 * Emits `AssociationRemoved`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids
 * - Writes: ConnectedDids
 * # </weight>
 */
export interface DidLookupCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    account: AccountId32
}

/**
 * Remove the association of the provided account ID. This call doesn't
 * require the authorization of the account ID, but the associated DID
 * needs to match the DID that authorized this call.
 * 
 * Emits `AssociationRemoved`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_remove_account_association {
    __kind: 'remove_account_association'
    account: AccountId32
}

/**
 * Remove the association of the sender account. This call doesn't
 * require the authorization of the DID, but requires a signed origin.
 * 
 * Emits `AssociationRemoved`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_remove_sender_association {
    __kind: 'remove_sender_association'
}

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Signature
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export type Signature = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DidCall = DidCall_add_key_agreement_key | DidCall_add_service_endpoint | DidCall_create | DidCall_delete | DidCall_reclaim_deposit | DidCall_remove_attestation_key | DidCall_remove_delegation_key | DidCall_remove_key_agreement_key | DidCall_remove_service_endpoint | DidCall_set_attestation_key | DidCall_set_authentication_key | DidCall_set_delegation_key | DidCall_submit_did_call

/**
 * Add a single new key agreement key to the DID.
 * 
 * The new key is added to the set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_add_key_agreement_key {
    __kind: 'add_key_agreement_key'
    newKey: DidEncryptionKey
}

/**
 * Add a new service endpoint under the given DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did, ServiceEndpoints, DidEndpointsCount
 * - Writes: Did, ServiceEndpoints, DidEndpointsCount
 * # </weight>
 */
export interface DidCall_add_service_endpoint {
    __kind: 'add_service_endpoint'
    serviceEndpoint: DidEndpoint
}

/**
 * Store a new DID on chain, after verifying that the creation
 * operation has been signed by the KILT account associated with the
 * identifier of the DID being created and that a DID with the same
 * identifier has not previously existed on (and then deleted from) the
 * chain.
 * 
 * There must be no DID information stored on chain under the same DID
 * identifier.
 * 
 * The new keys added with this operation are stored under the DID
 * identifier along with the block number in which the operation was
 * executed.
 * 
 * The dispatch origin can be any KILT account with enough funds to
 * execute the extrinsic and it does not have to be tied in any way to
 * the KILT account identifying the DID subject.
 * 
 * Emits `DidCreated`.
 * 
 * # <weight>
 * - The transaction's complexity is mainly dependent on the number of
 *   new key agreement keys and the number of new service endpoints
 *   included in the operation.
 * ---------
 * Weight: O(K) + O(N) where K is the number of new key agreement
 * keys bounded by `MaxNewKeyAgreementKeys`, while N is the number of
 * new service endpoints bounded by `MaxNumberOfServicesPerDid`.
 * - Reads: [Origin Account], Did, DidBlacklist
 * - Writes: Did (with K new key agreement keys), ServiceEndpoints
 *   (with N new service endpoints), DidEndpointsCount
 * # </weight>
 */
export interface DidCall_create {
    __kind: 'create'
    details: DidCreationDetails
    signature: DidSignature
}

/**
 * Delete a DID from the chain and all information associated with it,
 * after verifying that the delete operation has been signed by the DID
 * subject using the authentication key currently stored on chain.
 * 
 * The referenced DID identifier must be present on chain before the
 * delete operation is evaluated.
 * 
 * After it is deleted, a DID with the same identifier cannot be
 * re-created ever again.
 * 
 * As the result of the deletion, all traces of the DID are removed
 * from the storage, which results in the invalidation of all
 * attestations issued by the DID subject.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidDeleted`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Kills: Did entry associated to the DID identifier
 * # </weight>
 */
export interface DidCall_delete {
    __kind: 'delete'
    endpointsToRemove: number
}

/**
 * Reclaim a deposit for a DID. This will delete the DID and all
 * information associated with it, after verifying that the caller is
 * the owner of the deposit.
 * 
 * The referenced DID identifier must be present on chain before the
 * delete operation is evaluated.
 * 
 * After it is deleted, a DID with the same identifier cannot be
 * re-created ever again.
 * 
 * As the result of the deletion, all traces of the DID are removed
 * from the storage, which results in the invalidation of all
 * attestations issued by the DID subject.
 * 
 * Emits `DidDeleted`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Kills: Did entry associated to the DID identifier
 * # </weight>
 */
export interface DidCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    didSubject: AccountId32
    endpointsToRemove: number
}

/**
 * Remove the DID attestation key.
 * 
 * The old key is deleted from the set of public keys if
 * it is not used in any other part of the DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_remove_attestation_key {
    __kind: 'remove_attestation_key'
}

/**
 * Remove the DID delegation key.
 * 
 * The old key is deleted from the set of public keys if
 * it is not used in any other part of the DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_remove_delegation_key {
    __kind: 'remove_delegation_key'
}

/**
 * Remove a DID key agreement key from both its set of key agreement
 * keys and as well as its public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_remove_key_agreement_key {
    __kind: 'remove_key_agreement_key'
    keyId: H256
}

/**
 * Remove the service with the provided ID from the DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], ServiceEndpoints, DidEndpointsCount
 * - Writes: Did, ServiceEndpoints, DidEndpointsCount
 * # </weight>
 */
export interface DidCall_remove_service_endpoint {
    __kind: 'remove_service_endpoint'
    serviceId: Bytes
}

/**
 * Set or update the DID attestation key.
 * 
 * If an old key existed, it is deleted from the set of public keys if
 * it is not used in any other part of the DID. The new key is added to
 * the set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_set_attestation_key {
    __kind: 'set_attestation_key'
    newKey: DidVerificationKey
}

/**
 * Update the DID authentication key.
 * 
 * The old key is deleted from the set of public keys if it is
 * not used in any other part of the DID. The new key is added to the
 * set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_set_authentication_key {
    __kind: 'set_authentication_key'
    newKey: DidVerificationKey
}

/**
 * Set or update the DID delegation key.
 * 
 * If an old key existed, it is deleted from the set of public keys if
 * it is not used in any other part of the DID. The new key is added to
 * the set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_set_delegation_key {
    __kind: 'set_delegation_key'
    newKey: DidVerificationKey
}

/**
 * Proxy a dispatchable call of another runtime extrinsic that
 * supports a DID origin.
 * 
 * The referenced DID identifier must be present on chain before the
 * operation is dispatched.
 * 
 * A call submitted through this extrinsic must be signed with the
 * right DID key, depending on the call. This information is provided
 * by the `DidAuthorizedCallOperation` parameter, which specifies the
 * DID subject acting as the origin of the call, the DID's tx counter
 * (nonce), the dispatchable to call in case signature verification
 * succeeds, the type of DID key to use to verify the operation
 * signature, and the block number the operation was targeting for
 * inclusion, when it was created and signed.
 * 
 * In case the signature is incorrect, the nonce is not valid, the
 * required key is not present for the specified DID, or the block
 * specified is too old the verification fails and the call is not
 * dispatched. Otherwise, the call is properly dispatched with a
 * `DidOrigin` origin indicating the DID subject.
 * 
 * A successful dispatch operation results in the tx counter associated
 * with the given DID to be incremented, to mitigate replay attacks.
 * 
 * The dispatch origin can be any KILT account with enough funds to
 * execute the extrinsic and it does not have to be tied in any way to
 * the KILT account identifying the DID subject.
 * 
 * Emits `DidCallDispatched`.
 * 
 * # <weight>
 * Weight: O(1) + weight of the dispatched call
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_submit_did_call {
    __kind: 'submit_did_call'
    didCall: DidAuthorizedCallOperation
    signature: DidSignature
}

export interface DidAuthorizedCallOperation {
    did: AccountId32
    txCounter: bigint
    call: Call
    blockNumber: bigint
    submitter: AccountId32
}

export type DidVerificationKey = DidVerificationKey_Ecdsa | DidVerificationKey_Ed25519 | DidVerificationKey_Sr25519

export interface DidVerificationKey_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface DidVerificationKey_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface DidVerificationKey_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export type DidSignature = DidSignature_Ecdsa | DidSignature_Ed25519 | DidSignature_Sr25519

export interface DidSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface DidSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Signature
}

export interface DidSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export interface DidCreationDetails {
    did: AccountId32
    submitter: AccountId32
    newKeyAgreementKeys: DidEncryptionKey[]
    newAttestationKey?: (DidVerificationKey | undefined)
    newDelegationKey?: (DidVerificationKey | undefined)
    newServiceDetails: DidEndpoint[]
}

export interface DidEndpoint {
    id: Bytes
    serviceTypes: Bytes[]
    urls: Bytes[]
}

export type DidEncryptionKey = DidEncryptionKey_X25519

export interface DidEncryptionKey_X25519 {
    __kind: 'X25519'
    value: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_queued | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_enact_proposal | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_propose | DemocracyCall_reap_preimage | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * Cancel a proposal queued for enactment.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `which`: The index of the referendum to cancel.
 * 
 * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: number
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
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
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: AccountId32
    conviction: Conviction
    balance: bigint
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: H256
    index: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *   Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: H256
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: H256
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: H256
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *   `FastTrackVotingPeriod` if too low.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: bigint
    delay: bigint
}

/**
 * Register the preimage for an upcoming proposal. This requires the proposal to be
 * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 * the preimage has not been uploaded before and matches some imminent proposal,
 * no fee is paid.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Bytes
}

/**
 * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Bytes
}

/**
 * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 * in the dispatch queue but does require a deposit, returned once enacted.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Bytes
}

/**
 * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Bytes
}

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 * 
 * Weight: `O(p)`
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: H256
    value: bigint
}

/**
 * Remove an expired proposal preimage and collect the deposit.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `proposal_hash`: The preimage hash of a proposal.
 * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
 *   weighted according to this value with no refund.
 * 
 * This will only work after `VotingPeriod` blocks from the time that the preimage was
 * noted, if it's the same account doing it. If it's a different account, then it'll only
 * work an additional `EnactmentPeriod` later.
 * 
 * Emits `PreimageReaped`.
 * 
 * Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: H256
    proposalLenUpperBound: number
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
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: AccountId32
    index: number
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
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *   proposal. Extrinsic is weighted according to this value with no refund.
 * 
 * Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
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
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: AccountId32
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
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
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

export type Conviction = Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x | Conviction_None

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export interface Conviction_None {
    __kind: 'None'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DelegationCall = DelegationCall_add_delegation | DelegationCall_create_hierarchy | DelegationCall_reclaim_deposit | DelegationCall_remove_delegation | DelegationCall_revoke_delegation

/**
 * Create a new delegation node.
 * 
 * The new delegation node represents a new trust hierarchy that
 * considers the new node as its root. The owner of this node has full
 * control over any of its direct and indirect descendants.
 * 
 * For the creation to succeed, the delegatee must provide a valid
 * signature over the (blake256) hash of the creation operation details
 * which include (in order) delegation id, root node id, parent id, and
 * permissions of the new node.
 * 
 * There must be no delegation with the same id stored on chain.
 * Furthermore, the referenced root and parent nodes must already be
 * present on chain and contain the valid permissions and revocation
 * status (i.e., not revoked).
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Requires the sender of the transaction to have a reservable balance
 * of at least `Deposit` many tokens.
 * 
 * Emits `DelegationCreated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Roots, Delegations
 * - Writes: Delegations
 * # </weight>
 */
export interface DelegationCall_add_delegation {
    __kind: 'add_delegation'
    delegationId: H256
    parentId: H256
    delegate: AccountId32
    permissions: Permissions
    delegateSignature: DidSignature
}

/**
 * Create a new delegation root associated with a given CType hash.
 * 
 * The new root will allow a new trust hierarchy to be created by
 * adding children delegations to the root.
 * 
 * There must be no delegation with the same ID stored on chain, while
 * there must be already a CType with the given hash stored in the
 * CType pallet.
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Requires the sender of the transaction to have a reservable balance
 * of at least `Deposit` many tokens.
 * 
 * Emits `RootCreated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Roots, CTypes
 * - Writes: Roots
 * # </weight>
 */
export interface DelegationCall_create_hierarchy {
    __kind: 'create_hierarchy'
    rootNodeId: H256
    ctypeHash: H256
}

/**
 * Reclaim the deposit for a delegation node (potentially a root
 * node), removing the node and all its children.
 * 
 * Returns the delegation deposit to the deposit owner for each
 * removed DelegationNode by unreserving it.
 * 
 * Removing a delegation node results in the trust hierarchy starting
 * from the given node being removed. Nevertheless, removal starts
 * from the leave nodes upwards, so if the operation ends prematurely
 * because it runs out of gas, the delegation state would be consistent
 * as no child would "survive" its parent. As a consequence, if the
 * given node is removed, the trust hierarchy with the node as root is
 * to be considered removed.
 * 
 * The dispatch origin must be signed by the delegation deposit owner.
 * 
 * `DepositReclaimed`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of children of the delegation
 * node which is bounded by `max_removals`.
 * - Reads: [Origin Account], Roots, C * Delegations, C * Children.
 * - Writes: Roots, 2 * C * Delegations
 * # </weight>
 */
export interface DelegationCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    delegationId: H256
    maxRemovals: number
}

/**
 * Remove a delegation node (potentially a root node) and all its
 * children.
 * 
 * Returns the delegation deposit to the deposit owner for each
 * removed DelegationNode by unreserving it.
 * 
 * Removing a delegation node results in the trust hierarchy starting
 * from the given node being removed. Nevertheless, removal starts
 * from the leave nodes upwards, so if the operation ends prematurely
 * because it runs out of gas, the delegation state would be consistent
 * as no child would "survive" its parent. As a consequence, if the
 * given node is removed, the trust hierarchy with the node as root is
 * to be considered removed.
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Emits C * `DelegationRemoved`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of children of the delegation
 * node which is bounded by `max_children`.
 * - Reads: [Origin Account], Roots, C * Delegations, C * Children.
 * - Writes: Roots, 2 * C * Delegations
 * # </weight>
 */
export interface DelegationCall_remove_delegation {
    __kind: 'remove_delegation'
    delegationId: H256
    maxRemovals: number
}

/**
 * Revoke a delegation node (potentially a root node) and all its
 * children.
 * 
 * Does not refund the delegation back to the deposit owner as the
 * node is still stored on chain. Requires to additionally call
 * `remove_delegation` to unreserve the deposit.
 * 
 * Revoking a delegation node results in the trust hierarchy starting
 * from the given node being revoked. Nevertheless, revocation starts
 * from the leave nodes upwards, so if the operation ends prematurely
 * because it runs out of gas, the delegation state would be consistent
 * as no child would "survive" its parent. As a consequence, if the
 * given node is revoked, the trust hierarchy with the node as root is
 * to be considered revoked.
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Emits C * `DelegationRevoked`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of children of the delegation
 * node which is bounded by `max_children`.
 * - Reads: [Origin Account], Roots, C * Delegations, C * Children.
 * - Writes: Roots, C * Delegations
 * # </weight>
 */
export interface DelegationCall_revoke_delegation {
    __kind: 'revoke_delegation'
    delegationId: H256
    maxParentChecks: number
    maxRevocations: number
}

export interface Permissions {
    bits: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CtypeCall = CtypeCall_add

/**
 * Create a new CType from the given unique CType hash and associates
 * it with its creator.
 * 
 * A CType with the same hash must not be stored on chain.
 * 
 * Emits `CTypeCreated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Ctypes, Balance
 * - Writes: Ctypes, Balance
 * # </weight>
 */
export interface CtypeCall_add {
    __kind: 'add'
    ctype: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_keep_alive

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    newFree: bigint
    newReserved: bigint
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export interface Header {
    parentHash: H256
    number: bigint
    stateRoot: H256
    extrinsicsRoot: H256
    digest: Digest
}

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Bytes, Bytes]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Bytes, Bytes]
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Bytes, Bytes]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuraExtCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AttestationCall = AttestationCall_add | AttestationCall_reclaim_deposit | AttestationCall_remove | AttestationCall_revoke

/**
 * Create a new attestation.
 * 
 * The attester can optionally provide a reference to an existing
 * delegation that will be saved along with the attestation itself in
 * the form of an attested delegation.
 * 
 * The referenced CType hash must already be present on chain.
 * 
 * If an optional delegation id is provided, the dispatch origin must
 * be the owner of the delegation. Otherwise, it could be any
 * `DelegationEntityId`.
 * 
 * Emits `AttestationCreated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Ctype, Attestations
 * - Reads if delegation id is provided: Delegations, Roots,
 *   DelegatedAttestations
 * - Writes: Attestations, (DelegatedAttestations)
 * # </weight>
 */
export interface AttestationCall_add {
    __kind: 'add'
    claimHash: H256
    ctypeHash: H256
    delegationId?: (H256 | undefined)
}

/**
 * Reclaim a storage deposit by removing an attestation
 * 
 * Emits `DepositReclaimed`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Attestations, DelegatedAttestations
 * - Writes: Attestations, DelegatedAttestations
 * # </weight>
 */
export interface AttestationCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    claimHash: H256
}

/**
 * Remove an attestation.
 * 
 * The origin must be either the creator of the attestation or an
 * entity which is an ancestor of the attester in the delegation tree,
 * i.e., it was either the delegator of the attester or an ancestor
 * thereof.
 * 
 * Emits `AttestationRemoved`.
 * 
 * # <weight>
 * Weight: O(P) where P is the number of steps required to verify that
 * the dispatch Origin controls the delegation entitled to revoke the
 * attestation. It is bounded by `max_parent_checks`.
 * - Reads: [Origin Account], Attestations, delegation::Roots
 * - Reads per delegation step P: delegation::Delegations
 * - Writes: Attestations, DelegatedAttestations
 * # </weight>
 */
export interface AttestationCall_remove {
    __kind: 'remove'
    claimHash: H256
    maxParentChecks: number
}

/**
 * Revoke an existing attestation.
 * 
 * The revoker must be either the creator of the attestation being
 * revoked or an entity that in the delegation tree is an ancestor of
 * the attester, i.e., it was either the delegator of the attester or
 * an ancestor thereof.
 * 
 * Emits `AttestationRevoked`.
 * 
 * # <weight>
 * Weight: O(P) where P is the number of steps required to verify that
 * the dispatch Origin controls the delegation entitled to revoke the
 * attestation. It is bounded by `max_parent_checks`.
 * - Reads: [Origin Account], Attestations, delegation::Roots
 * - Reads per delegation step P: delegation::Delegations
 * - Writes: Attestations, DelegatedAttestations
 * # </weight>
 */
export interface AttestationCall_revoke {
    __kind: 'revoke'
    claimHash: H256
    maxParentChecks: number
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Attestation: AttestationCall,
        AuraExt: AuraExtCall,
        Authorship: AuthorshipCall,
        Balances: BalancesCall,
        Council: CouncilCall,
        Ctype: CtypeCall,
        Delegation: DelegationCall,
        Democracy: DemocracyCall,
        Did: DidCall,
        DidLookup: DidLookupCall,
        Indices: IndicesCall,
        KiltLaunch: KiltLaunchCall,
        ParachainStaking: ParachainStakingCall,
        ParachainSystem: ParachainSystemCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        Web3Names: Web3NamesCall,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const Web3NamesCall: sts.Type<Web3NamesCall> = sts.closedEnum(() => {
    return  {
        ban: sts.enumStruct({
            name: BoundedVec,
        }),
        claim: sts.enumStruct({
            name: BoundedVec,
        }),
        reclaim_deposit: sts.enumStruct({
            name: BoundedVec,
        }),
        release_by_owner: sts.unit(),
        unban: sts.enumStruct({
            name: BoundedVec,
        }),
    }
})

export const BoundedVec = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_vested_transfer: sts.enumStruct({
            source: MultiAddress,
            target: MultiAddress,
            schedule: VestingInfo,
        }),
        merge_schedules: sts.enumStruct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        }),
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: MultiAddress,
        }),
        vested_transfer: sts.enumStruct({
            target: MultiAddress,
            schedule: VestingInfo,
        }),
    }
})

export const VestingInfo: sts.Type<VestingInfo> = sts.struct(() => {
    return  {
        locked: sts.bigint(),
        perBlock: sts.bigint(),
        startingBlock: sts.bigint(),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const AccountId32 = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Call,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        dispatch_as: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_188,
        Did: DidRawOrigin,
        TechnicalCommittee: Type_189,
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_189: sts.Type<Type_189> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const DidRawOrigin: sts.Type<DidRawOrigin> = sts.struct(() => {
    return  {
        id: AccountId32,
        submitter: AccountId32,
    }
})

export const Type_188: sts.Type<Type_188> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: AccountId32,
        }),
        change_key: sts.enumStruct({
            new: AccountId32,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: AccountId32,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: AccountId32,
        }),
        swap_member: sts.enumStruct({
            remove: AccountId32,
            add: AccountId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        fill_block: sts.enumStruct({
            ratio: Perbill,
        }),
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

export const Perbill = sts.number()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return  {
        aura: Public,
    }
})

export const Public = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.bigint(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_after: sts.enumStruct({
            after: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
    }
})

export const MaybeHashed: sts.Type<MaybeHashed> = sts.closedEnum(() => {
    return  {
        Hash: H256,
        Value: Call,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: AccountId32,
            proxyType: ProxyType,
            delay: sts.bigint(),
        }),
        announce: sts.enumStruct({
            real: AccountId32,
            callHash: H256,
        }),
        anonymous: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.bigint(),
            index: sts.number(),
        }),
        kill_anonymous: sts.enumStruct({
            spawner: AccountId32,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.bigint(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: AccountId32,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        proxy_announced: sts.enumStruct({
            delegate: AccountId32,
            real: AccountId32,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        reject_announcement: sts.enumStruct({
            delegate: AccountId32,
            callHash: H256,
        }),
        remove_announcement: sts.enumStruct({
            real: AccountId32,
            callHash: H256,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: AccountId32,
            proxyType: ProxyType,
            delay: sts.bigint(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
        NonDepositClaiming: sts.unit(),
        NonTransfer: sts.unit(),
        ParachainStaking: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return  {
        note_preimage: sts.enumStruct({
            bytes: sts.bytes(),
        }),
        request_preimage: sts.enumStruct({
            hash: H256,
        }),
        unnote_preimage: sts.enumStruct({
            hash: H256,
        }),
        unrequest_preimage: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
        }),
        enact_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_validation_data: sts.enumStruct({
            data: ParachainInherentData,
        }),
        sudo_send_upward_message: sts.enumStruct({
            message: sts.bytes(),
        }),
    }
})

export const ParachainInherentData: sts.Type<ParachainInherentData> = sts.struct(() => {
    return  {
        validationData: V1PersistedValidationData,
        relayChainState: StorageProof,
        downwardMessages: sts.array(() => InboundDownwardMessage),
        horizontalMessages: sts.array(() => sts.tuple(() => [Id, sts.array(() => InboundHrmpMessage)])),
    }
})

export const InboundHrmpMessage: sts.Type<InboundHrmpMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        data: sts.bytes(),
    }
})

export const Id = sts.number()

export const InboundDownwardMessage: sts.Type<InboundDownwardMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        msg: sts.bytes(),
    }
})

export const StorageProof: sts.Type<StorageProof> = sts.struct(() => {
    return  {
        trieNodes: sts.array(() => sts.bytes()),
    }
})

export const V1PersistedValidationData: sts.Type<V1PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParachainStakingCall: sts.Type<ParachainStakingCall> = sts.closedEnum(() => {
    return  {
        cancel_leave_candidates: sts.unit(),
        candidate_stake_less: sts.enumStruct({
            less: sts.bigint(),
        }),
        candidate_stake_more: sts.enumStruct({
            more: sts.bigint(),
        }),
        delegate_another_candidate: sts.enumStruct({
            collator: MultiAddress,
            amount: sts.bigint(),
        }),
        delegator_stake_less: sts.enumStruct({
            candidate: MultiAddress,
            less: sts.bigint(),
        }),
        delegator_stake_more: sts.enumStruct({
            candidate: MultiAddress,
            more: sts.bigint(),
        }),
        execute_leave_candidates: sts.enumStruct({
            collator: MultiAddress,
        }),
        force_new_round: sts.unit(),
        force_remove_candidate: sts.enumStruct({
            collator: MultiAddress,
        }),
        init_leave_candidates: sts.unit(),
        join_candidates: sts.enumStruct({
            stake: sts.bigint(),
        }),
        join_delegators: sts.enumStruct({
            collator: MultiAddress,
            amount: sts.bigint(),
        }),
        leave_delegators: sts.unit(),
        revoke_delegation: sts.enumStruct({
            collator: MultiAddress,
        }),
        set_blocks_per_round: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_inflation: sts.enumStruct({
            collatorMaxRatePercentage: Perquintill,
            collatorAnnualRewardRatePercentage: Perquintill,
            delegatorMaxRatePercentage: Perquintill,
            delegatorAnnualRewardRatePercentage: Perquintill,
        }),
        set_max_candidate_stake: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_max_selected_candidates: sts.enumStruct({
            new: sts.number(),
        }),
        unlock_unstaked: sts.enumStruct({
            target: MultiAddress,
        }),
    }
})

export const Perquintill = sts.bigint()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const KiltLaunchCall: sts.Type<KiltLaunchCall> = sts.closedEnum(() => {
    return  {
        change_transfer_account: sts.enumStruct({
            transferAccount: MultiAddress,
        }),
        force_unlock: sts.enumStruct({
            block: sts.bigint(),
        }),
        locked_transfer: sts.enumStruct({
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        migrate_genesis_account: sts.enumStruct({
            source: MultiAddress,
            target: MultiAddress,
        }),
        migrate_multiple_genesis_accounts: sts.enumStruct({
            sources: sts.array(() => MultiAddress),
            target: MultiAddress,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            new: AccountId32,
            index: sts.bigint(),
            freeze: sts.boolean(),
        }),
        free: sts.enumStruct({
            index: sts.bigint(),
        }),
        freeze: sts.enumStruct({
            index: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            new: AccountId32,
            index: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DidLookupCall: sts.Type<DidLookupCall> = sts.closedEnum(() => {
    return  {
        associate_account: sts.enumStruct({
            account: AccountId32,
            expiration: sts.bigint(),
            proof: MultiSignature,
        }),
        associate_sender: sts.unit(),
        reclaim_deposit: sts.enumStruct({
            account: AccountId32,
        }),
        remove_account_association: sts.enumStruct({
            account: AccountId32,
        }),
        remove_sender_association: sts.unit(),
    }
})

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: Signature,
        Sr25519: sts.bytes(),
    }
})

export const Signature = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DidCall: sts.Type<DidCall> = sts.closedEnum(() => {
    return  {
        add_key_agreement_key: sts.enumStruct({
            newKey: DidEncryptionKey,
        }),
        add_service_endpoint: sts.enumStruct({
            serviceEndpoint: DidEndpoint,
        }),
        create: sts.enumStruct({
            details: DidCreationDetails,
            signature: DidSignature,
        }),
        delete: sts.enumStruct({
            endpointsToRemove: sts.number(),
        }),
        reclaim_deposit: sts.enumStruct({
            didSubject: AccountId32,
            endpointsToRemove: sts.number(),
        }),
        remove_attestation_key: sts.unit(),
        remove_delegation_key: sts.unit(),
        remove_key_agreement_key: sts.enumStruct({
            keyId: H256,
        }),
        remove_service_endpoint: sts.enumStruct({
            serviceId: sts.bytes(),
        }),
        set_attestation_key: sts.enumStruct({
            newKey: DidVerificationKey,
        }),
        set_authentication_key: sts.enumStruct({
            newKey: DidVerificationKey,
        }),
        set_delegation_key: sts.enumStruct({
            newKey: DidVerificationKey,
        }),
        submit_did_call: sts.enumStruct({
            didCall: DidAuthorizedCallOperation,
            signature: DidSignature,
        }),
    }
})

export const DidAuthorizedCallOperation: sts.Type<DidAuthorizedCallOperation> = sts.struct(() => {
    return  {
        did: AccountId32,
        txCounter: sts.bigint(),
        call: Call,
        blockNumber: sts.bigint(),
        submitter: AccountId32,
    }
})

export const DidVerificationKey: sts.Type<DidVerificationKey> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const DidSignature: sts.Type<DidSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: Signature,
        Sr25519: sts.bytes(),
    }
})

export const DidCreationDetails: sts.Type<DidCreationDetails> = sts.struct(() => {
    return  {
        did: AccountId32,
        submitter: AccountId32,
        newKeyAgreementKeys: sts.array(() => DidEncryptionKey),
        newAttestationKey: sts.option(() => DidVerificationKey),
        newDelegationKey: sts.option(() => DidVerificationKey),
        newServiceDetails: sts.array(() => DidEndpoint),
    }
})

export const DidEndpoint: sts.Type<DidEndpoint> = sts.struct(() => {
    return  {
        id: sts.bytes(),
        serviceTypes: sts.array(() => sts.bytes()),
        urls: sts.array(() => sts.bytes()),
    }
})

export const DidEncryptionKey: sts.Type<DidEncryptionKey> = sts.closedEnum(() => {
    return  {
        X25519: sts.bytes(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        blacklist: sts.enumStruct({
            proposalHash: H256,
            maybeRefIndex: sts.option(() => sts.number()),
        }),
        cancel_proposal: sts.enumStruct({
            propIndex: sts.number(),
        }),
        cancel_queued: sts.enumStruct({
            which: sts.number(),
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: AccountId32,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: sts.number(),
        }),
        enact_proposal: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
        }),
        external_propose: sts.enumStruct({
            proposalHash: H256,
        }),
        external_propose_default: sts.enumStruct({
            proposalHash: H256,
        }),
        external_propose_majority: sts.enumStruct({
            proposalHash: H256,
        }),
        fast_track: sts.enumStruct({
            proposalHash: H256,
            votingPeriod: sts.bigint(),
            delay: sts.bigint(),
        }),
        note_imminent_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_imminent_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        propose: sts.enumStruct({
            proposalHash: H256,
            value: sts.bigint(),
        }),
        reap_preimage: sts.enumStruct({
            proposalHash: H256,
            proposalLenUpperBound: sts.number(),
        }),
        remove_other_vote: sts.enumStruct({
            target: AccountId32,
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            index: sts.number(),
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: AccountId32,
        }),
        veto_external: sts.enumStruct({
            proposalHash: H256,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return  {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DelegationCall: sts.Type<DelegationCall> = sts.closedEnum(() => {
    return  {
        add_delegation: sts.enumStruct({
            delegationId: H256,
            parentId: H256,
            delegate: AccountId32,
            permissions: Permissions,
            delegateSignature: DidSignature,
        }),
        create_hierarchy: sts.enumStruct({
            rootNodeId: H256,
            ctypeHash: H256,
        }),
        reclaim_deposit: sts.enumStruct({
            delegationId: H256,
            maxRemovals: sts.number(),
        }),
        remove_delegation: sts.enumStruct({
            delegationId: H256,
            maxRemovals: sts.number(),
        }),
        revoke_delegation: sts.enumStruct({
            delegationId: H256,
            maxParentChecks: sts.number(),
            maxRevocations: sts.number(),
        }),
    }
})

export const Permissions: sts.Type<Permissions> = sts.struct(() => {
    return  {
        bits: sts.number(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CtypeCall: sts.Type<CtypeCall> = sts.closedEnum(() => {
    return  {
        add: sts.enumStruct({
            ctype: sts.bytes(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuthorshipCall: sts.Type<AuthorshipCall> = sts.closedEnum(() => {
    return  {
        set_uncles: sts.enumStruct({
            newUncles: sts.array(() => Header),
        }),
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: H256,
        number: sts.bigint(),
        stateRoot: H256,
        extrinsicsRoot: H256,
        digest: Digest,
    }
})

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return  {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return  {
        Consensus: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Other: sts.bytes(),
        PreRuntime: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuraExtCall: sts.Type<AuraExtCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AttestationCall: sts.Type<AttestationCall> = sts.closedEnum(() => {
    return  {
        add: sts.enumStruct({
            claimHash: H256,
            ctypeHash: H256,
            delegationId: sts.option(() => H256),
        }),
        reclaim_deposit: sts.enumStruct({
            claimHash: H256,
        }),
        remove: sts.enumStruct({
            claimHash: H256,
            maxParentChecks: sts.number(),
        }),
        revoke: sts.enumStruct({
            claimHash: H256,
            maxParentChecks: sts.number(),
        }),
    }
})

export const H256 = sts.bytes()
