import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_Authorship | Call_Babe | Call_BagsList | Call_Balances | Call_Bounties | Call_CereDDCModule | Call_ChainBridge | Call_ChildBounties | Call_Contracts | Call_Council | Call_DdcMetricsOffchainWorker | Call_Democracy | Call_ElectionProviderMultiPhase | Call_Elections | Call_Erc20 | Call_Erc721 | Call_Grandpa | Call_Identity | Call_ImOnline | Call_Indices | Call_Multisig | Call_Proxy | Call_Recovery | Call_Scheduler | Call_Session | Call_Society | Call_Staking | Call_Sudo | Call_System | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_Tips | Call_Treasury | Call_Utility | Call_Vesting

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_BagsList {
    __kind: 'BagsList'
    value: BagsListCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_CereDDCModule {
    __kind: 'CereDDCModule'
    value: CereDDCModuleCall
}

export interface Call_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeCall
}

export interface Call_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_DdcMetricsOffchainWorker {
    __kind: 'DdcMetricsOffchainWorker'
    value: DdcMetricsOffchainWorkerCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Call_Erc20 {
    __kind: 'Erc20'
    value: Erc20Call
}

export interface Call_Erc721 {
    __kind: 'Erc721'
    value: Erc721Call
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
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

export interface Call_Tips {
    __kind: 'Tips'
    value: TipsCall
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
    startingBlock: number
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
    value: number
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

export type OriginCaller = OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_304
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_305
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

export type Type_305 = Type_305_Member | Type_305_Members | Type_305__Phantom

export interface Type_305_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_305_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_305__Phantom {
    __kind: '_Phantom'
}

export type Type_304 = Type_304_Member | Type_304_Members | Type_304__Phantom

export interface Type_304_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_304_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_304__Phantom {
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
export type TipsCall = TipsCall_close_tip | TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_slash_tip | TipsCall_tip | TipsCall_tip_new

/**
 * Close and payout a tip.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * The tip identified by `hash` must have finished its countdown period.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
 *   depends on the implementation of `T::Tippers`.
 * - DbReads: `Tips`, `Tippers`, `tip finder`
 * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 * # </weight>
 */
export interface TipsCall_close_tip {
    __kind: 'close_tip'
    hash: H256
}

/**
 * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R)` where `R` length of `reason`.
 *   - encoding and hashing of 'reason'
 * - DbReads: `Reasons`, `Tips`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_report_awesome {
    __kind: 'report_awesome'
    reason: Bytes
    who: AccountId32
}

/**
 * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 * If successful, the original deposit will be unreserved.
 * 
 * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 * must have been reported by the signing account through `report_awesome` (and not
 * through `tip_new`).
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * Emits `TipRetracted` if successful.
 * 
 * # <weight>
 * - Complexity: `O(1)`
 *   - Depends on the length of `T::Hash` which is fixed.
 * - DbReads: `Tips`, `origin account`
 * - DbWrites: `Reasons`, `Tips`, `origin account`
 * # </weight>
 */
export interface TipsCall_retract_tip {
    __kind: 'retract_tip'
    hash: H256
}

/**
 * Remove and slash an already-open tip.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * As a result, the finder is slashed and the deposits are lost.
 * 
 * Emits `TipSlashed` if successful.
 * 
 * # <weight>
 *   `T` is charged as upper bound given by `ContainsLengthBound`.
 *   The actual cost depends on the implementation of `T::Tippers`.
 * # </weight>
 */
export interface TipsCall_slash_tip {
    __kind: 'slash_tip'
    hash: H256
}

/**
 * Declare a tip value for an already-open tip.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *   account ID.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 * has started.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`, insert tip and check closing, `T` is charged as upper bound given by
 *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
 * 
 *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *   is weighted as if almost full i.e of length `T-1`.
 * - DbReads: `Tippers`, `Tips`
 * - DbWrites: `Tips`
 * # </weight>
 */
export interface TipsCall_tip {
    __kind: 'tip'
    hash: H256
    tipValue: bigint
}

/**
 * Give a tip for something new; no finder's fee will be taken.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
 *     `ContainsLengthBound`. The actual cost depends on the implementation of
 *     `T::Tippers`.
 *   - `O(R)`: hashing and encoding of reason of length `R`
 * - DbReads: `Tippers`, `Reasons`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_tip_new {
    __kind: 'tip_new'
    reason: Bytes
    who: AccountId32
    tipValue: bigint
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
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_kick | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_history_depth | StakingCall_set_invulnerables | StakingCall_set_payee | StakingCall_set_staking_configs | StakingCall_set_validator_count | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

/**
 * Take the origin account as a stash and lock up `value` of its balance. `controller` will
 * be the account that controls it.
 * 
 * `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 * Emits `Bonded`.
 * # <weight>
 * - Independent of the arguments. Moderate complexity.
 * - O(1).
 * - Three extra DB entries.
 * 
 * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 * unless the `origin` falls below _existential deposit_ and gets removed as dust.
 * ------------------
 * # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: MultiAddress
    value: bigint
    payee: RewardDestination
}

/**
 * Add some extra amount that have appeared in the stash `free_balance` into the balance up
 * for staking.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * Use this if there are additional funds in your stash account that you wish to bond.
 * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
 * any limitation on the amount that can be added.
 * 
 * Emits `Bonded`.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - O(1).
 * # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * Cancel enactment of a deferred slash.
 * 
 * Can be called by the `T::SlashCancelOrigin`.
 * 
 * Parameters: era and indices of the slashes for that era to kill.
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * Declare no desire to either validate or nominate.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains one read.
 * - Writes are limited to the `origin` account key.
 * # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * Declare a `controller` to stop participating as either a validator or nominator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_, but can be called by anyone.
 * 
 * If the caller is the same as the controller being targeted, then no further checks are
 * enforced, and this function behaves just like `chill`.
 * 
 * If the caller is different than the controller being targeted, the following conditions
 * must be met:
 * 
 * * `controller` must belong to a nominator who has become non-decodable,
 * 
 * Or:
 * 
 * * A `ChillThreshold` must be set and checked which defines how close to the max
 *   nominators or validators we must reach before users can start chilling one-another.
 * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
 *   how close we are to the threshold.
 * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
 *   if this is a person that should be chilled because they have not met the threshold
 *   bond required.
 * 
 * This can be helpful if bond requirements are updated, and we need to remove old users
 * who do not satisfy these requirements.
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: AccountId32
}

/**
 * Force a validator to have at least the minimum commission. This will not affect a
 * validator who already has a commission greater than or equal to the minimum. Any account
 * can call this.
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: AccountId32
}

/**
 * Force there to be a new era at the end of the next session. After this, it will be
 * reset to normal (non-forced) behaviour.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 * 
 * # <weight>
 * - No arguments.
 * - Weight: O(1)
 * - Write ForceEra
 * # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * Force there to be a new era at the end of sessions indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * Force there to be no new eras indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * Thus the election process may be ongoing when this is called. In this case the
 * election will continue until the next era is triggered.
 * 
 * # <weight>
 * - No arguments.
 * - Weight: O(1)
 * - Write: ForceEra
 * # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * Force a current staker to become completely unstaked, immediately.
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * Increments the ideal number of validators.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * Remove the given nominations from the calling validator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * - `who`: A list of nominator stash accounts who are nominating this validator which
 *   should no longer be nominating this validator.
 * 
 * Note: Making this call only makes sense if you first set the validator preferences to
 * block any further nominations.
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * Declare the desire to nominate `targets` for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - The transaction's complexity is proportional to the size of `targets` (N)
 * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
 * - Both the reads and writes follow a similar pattern.
 * # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * Pay out all the stakers behind a single validator for a single era.
 * 
 * - `validator_stash` is the stash account of the validator. Their nominators, up to
 *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 * - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 * The origin of this call must be _Signed_. Any account can call this function, even if
 * it is not one of the stakers.
 * 
 * # <weight>
 * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
 * - Contains a limited number of reads and writes.
 * -----------
 * N is the Number of payouts for the validator (including the validator)
 * Weight:
 * - Reward Destination Staked: O(N)
 * - Reward Destination Controller (Creating): O(N)
 * 
 *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
 *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
 * # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId32
    era: number
}

/**
 * Remove all data structures concerning a staker/stash once it is at a state where it can
 * be considered `dust` in the staking system. The requirements are:
 * 
 * 1. the `total_balance` of the stash is below existential deposit.
 * 2. or, the `ledger.total` of the stash is below existential deposit.
 * 
 * The former can happen in cases like a slash; the latter when a fully unbonded account
 * is still receiving staking rewards in `RewardDestination::Staked`.
 * 
 * It can be called by anyone, as long as `stash` meets the above requirements.
 * 
 * Refunds the transaction fees upon successful execution.
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * Rebond a portion of the stash scheduled to be unlocked.
 * 
 * The dispatch origin must be signed by the controller.
 * 
 * # <weight>
 * - Time complexity: O(L), where L is unlocking chunks
 * - Bounded by `MAX_UNLOCKING_CHUNKS`.
 * - Storage changes: Can't increase storage, only decrease it.
 * # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * Scale up the ideal number of validators by a factor.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 * (Re-)set the controller of a stash.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ----------
 * Weight: O(1)
 * DB Weight:
 * - Read: Bonded, Ledger New Controller, Ledger Old Controller
 * - Write: Bonded, Ledger New Controller, Ledger Old Controller
 * # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: MultiAddress
}

/**
 * Set `HistoryDepth` value. This function will delete any history information
 * when `HistoryDepth` is reduced.
 * 
 * Parameters:
 * - `new_history_depth`: The new history depth you would like to set.
 * - `era_items_deleted`: The number of items that will be deleted by this dispatch. This
 *   should report all the storage items that will be deleted by clearing old era history.
 *   Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an
 *   accurate number.
 * 
 * Origin must be root.
 * 
 * # <weight>
 * - E: Number of history depths removed, i.e. 10 -> 7 = 3
 * - Weight: O(E)
 * - DB Weight:
 *     - Reads: Current Era, History Depth
 *     - Writes: History Depth
 *     - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *     - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake,
 *       ErasStartSessionIndex
 * # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
}

/**
 * Set the validators who cannot be slashed (if any).
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId32[]
}

/**
 * (Re-)set the payment target for a controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ---------
 * - Weight: O(1)
 * - DB Weight:
 *     - Read: Ledger
 *     - Write: Payee
 * # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * Update the various staking configurations .
 * 
 * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
 * * `min_validator_bond`: The minimum active bond needed to be a validator.
 * * `max_nominator_count`: The max number of users who can be a nominator at once. When
 *   set to `None`, no limit is enforced.
 * * `max_validator_count`: The max number of users who can be a validator at once. When
 *   set to `None`, no limit is enforced.
 * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
 *   should be filled in order for the `chill_other` transaction to work.
 * * `min_commission`: The minimum amount of commission that each validators must maintain.
 *   This is checked only upon calling `validate`. Existing validators are not affected.
 * 
 * Origin must be Root to call this function.
 * 
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: bigint
    minValidatorBond: bigint
    maxNominatorCount?: (number | undefined)
    maxValidatorCount?: (number | undefined)
    chillThreshold?: (Percent | undefined)
    minCommission: Perbill
}

/**
 * Sets the ideal number of validators.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Weight: O(1)
 * Write: Validator Count
 * # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 * period ends. If this leaves an amount actively bonded less than
 * T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 * the funds out of management ready for transfer.
 * 
 * No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 * to be called first to remove some of the chunks (if possible).
 * 
 * If a user encounters the `InsufficientBond` error when calling this extrinsic,
 * they should call `chill` first in order to free up their bonded funds.
 * 
 * Emits `Unbonded`.
 * 
 * See also [`Call::withdraw_unbonded`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * Declare the desire to validate for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 * This essentially frees up that balance to be used by the stash account to do
 * whatever it wants.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller.
 * 
 * Emits `Withdrawn`.
 * 
 * See also [`Call::unbond`].
 * 
 * # <weight>
 * Complexity O(S) where S is the number of slashing spans to remove
 * NOTE: Weight annotation is the kill scenario, we refund otherwise.
 * # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type Percent = number

export type RewardDestination = RewardDestination_Account | RewardDestination_Controller | RewardDestination_None | RewardDestination_Staked | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId32
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SocietyCall = SocietyCall_bid | SocietyCall_defender_vote | SocietyCall_found | SocietyCall_judge_suspended_candidate | SocietyCall_judge_suspended_member | SocietyCall_payout | SocietyCall_set_max_members | SocietyCall_unbid | SocietyCall_unfound | SocietyCall_unvouch | SocietyCall_vote | SocietyCall_vouch

/**
 * A user outside of the society can make a bid for entry.
 * 
 * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
 * when the bid becomes a member, or if the bid calls `unbid`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `value`: A one time payment the bid would like to receive when joining the society.
 * 
 * # <weight>
 * Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
 * - Storage Reads:
 * 	- One storage read to check for suspended candidate. O(1)
 * 	- One storage read to check for suspended member. O(1)
 * 	- One storage read to retrieve all current bids. O(B)
 * 	- One storage read to retrieve all current candidates. O(C)
 * 	- One storage read to retrieve all members. O(M)
 * - Storage Writes:
 * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
 *    w/ read)
 * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
 * - Notable Computation:
 * 	- O(B + C + log M) search to check user is not already a part of society.
 * 	- O(log B) search to insert the new bid sorted.
 * - External Pallet Operations:
 * 	- One balance reserve operation. O(X)
 * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
 * - Events:
 * 	- One event for new bid.
 * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
 * 
 * Total Complexity: O(M + B + C + logM + logB + X)
 * # </weight>
 */
export interface SocietyCall_bid {
    __kind: 'bid'
    value: bigint
}

/**
 * As a member, vote on the defender.
 * 
 * The dispatch origin for this call must be _Signed_ and a member.
 * 
 * Parameters:
 * - `approve`: A boolean which says if the candidate should be
 * approved (`true`) or rejected (`false`).
 * 
 * # <weight>
 * - Key: M (len of members)
 * - One storage read O(M) and O(log M) search to check user is a member.
 * - One storage write to add vote to votes. O(1)
 * - One event.
 * 
 * Total Complexity: O(M + logM)
 * # </weight>
 */
export interface SocietyCall_defender_vote {
    __kind: 'defender_vote'
    approve: boolean
}

/**
 * Found the society.
 * 
 * This is done as a discrete action in order to allow for the
 * pallet to be included into a running chain and can only be done once.
 * 
 * The dispatch origin for this call must be from the _FounderSetOrigin_.
 * 
 * Parameters:
 * - `founder` - The first member and head of the newly founded society.
 * - `max_members` - The initial max number of members for the society.
 * - `rules` - The rules of this society concerning membership.
 * 
 * # <weight>
 * - Two storage mutates to set `Head` and `Founder`. O(1)
 * - One storage write to add the first member to society. O(1)
 * - One event.
 * 
 * Total Complexity: O(1)
 * # </weight>
 */
export interface SocietyCall_found {
    __kind: 'found'
    founder: AccountId32
    maxMembers: number
    rules: Bytes
}

/**
 * Allow suspended judgement origin to make judgement on a suspended candidate.
 * 
 * If the judgement is `Approve`, we add them to society as a member with the appropriate
 * payment for joining society.
 * 
 * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
 * to the society treasury, or we ban the voucher from vouching again.
 * 
 * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
 * through the induction process again.
 * 
 * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 * 
 * Parameters:
 * - `who` - The suspended candidate to be judged.
 * - `judgement` - `Approve`, `Reject`, or `Rebid`.
 * 
 * # <weight>
 * Key: B (len of bids), M (len of members), X (balance action)
 * - One storage read to check `who` is a suspended candidate.
 * - One storage removal of the suspended candidate.
 * - Approve Logic
 * 	- One storage read to get the available pot to pay users with. O(1)
 * 	- One storage write to update the available pot. O(1)
 * 	- One storage read to get the current block number. O(1)
 * 	- One storage read to get all members. O(M)
 * 	- Up to one unreserve currency action.
 * 	- Up to two new storage writes to payouts.
 * 	- Up to one storage write with O(log M) binary search to add a member to society.
 * - Reject Logic
 * 	- Up to one repatriate reserved currency action. O(X)
 * 	- Up to one storage write to ban the vouching member from vouching again.
 * - Rebid Logic
 * 	- Storage mutate with O(log B) binary search to place the user back into bids.
 * - Up to one additional event if unvouch takes place.
 * - One storage removal.
 * - One event for the judgement.
 * 
 * Total Complexity: O(M + logM + B + X)
 * # </weight>
 */
export interface SocietyCall_judge_suspended_candidate {
    __kind: 'judge_suspended_candidate'
    who: AccountId32
    judgement: Type_281
}

/**
 * Allow suspension judgement origin to make judgement on a suspended member.
 * 
 * If a suspended member is forgiven, we simply add them back as a member, not affecting
 * any of the existing storage items for that member.
 * 
 * If a suspended member is rejected, remove all associated storage items, including
 * their payouts, and remove any vouched bids they currently have.
 * 
 * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 * 
 * Parameters:
 * - `who` - The suspended member to be judged.
 * - `forgive` - A boolean representing whether the suspension judgement origin forgives
 *   (`true`) or rejects (`false`) a suspended member.
 * 
 * # <weight>
 * Key: B (len of bids), M (len of members)
 * - One storage read to check `who` is a suspended member. O(1)
 * - Up to one storage write O(M) with O(log M) binary search to add a member back to
 *   society.
 * - Up to 3 storage removals O(1) to clean up a removed member.
 * - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
 * - Up to one additional event if unvouch takes place.
 * - One storage removal. O(1)
 * - One event for the judgement.
 * 
 * Total Complexity: O(M + logM + B)
 * # </weight>
 */
export interface SocietyCall_judge_suspended_member {
    __kind: 'judge_suspended_member'
    who: AccountId32
    forgive: boolean
}

/**
 * Transfer the first matured payout for the sender and remove it from the records.
 * 
 * NOTE: This extrinsic needs to be called multiple times to claim multiple matured
 * payouts.
 * 
 * Payment: The member will receive a payment equal to their first matured
 * payout to their free balance.
 * 
 * The dispatch origin for this call must be _Signed_ and a member with
 * payouts remaining.
 * 
 * # <weight>
 * Key: M (len of members), P (number of payouts for a particular member)
 * - One storage read O(M) and O(log M) search to check signer is a member.
 * - One storage read O(P) to get all payouts for a member.
 * - One storage read O(1) to get the current block number.
 * - One currency transfer call. O(X)
 * - One storage write or removal to update the member's payouts. O(P)
 * 
 * Total Complexity: O(M + logM + P + X)
 * # </weight>
 */
export interface SocietyCall_payout {
    __kind: 'payout'
}

/**
 * Allows root origin to change the maximum number of members in society.
 * Max membership count must be greater than 1.
 * 
 * The dispatch origin for this call must be from _ROOT_.
 * 
 * Parameters:
 * - `max` - The maximum number of members for the society.
 * 
 * # <weight>
 * - One storage write to update the max. O(1)
 * - One event.
 * 
 * Total Complexity: O(1)
 * # </weight>
 */
export interface SocietyCall_set_max_members {
    __kind: 'set_max_members'
    max: number
}

/**
 * A bidder can remove their bid for entry into society.
 * By doing so, they will have their candidate deposit returned or
 * they will unvouch their voucher.
 * 
 * Payment: The bid deposit is unreserved if the user made a bid.
 * 
 * The dispatch origin for this call must be _Signed_ and a bidder.
 * 
 * Parameters:
 * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
 * 
 * # <weight>
 * Key: B (len of bids), X (balance unreserve)
 * - One storage read and write to retrieve and update the bids. O(B)
 * - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
 * - One event.
 * 
 * Total Complexity: O(B + X)
 * # </weight>
 */
export interface SocietyCall_unbid {
    __kind: 'unbid'
    pos: number
}

/**
 * Annul the founding of the society.
 * 
 * The dispatch origin for this call must be Signed, and the signing account must be both
 * the `Founder` and the `Head`. This implies that it may only be done when there is one
 * member.
 * 
 * # <weight>
 * - Two storage reads O(1).
 * - Four storage removals O(1).
 * - One event.
 * 
 * Total Complexity: O(1)
 * # </weight>
 */
export interface SocietyCall_unfound {
    __kind: 'unfound'
}

/**
 * As a vouching member, unvouch a bid. This only works while vouched user is
 * only a bidder (and not a candidate).
 * 
 * The dispatch origin for this call must be _Signed_ and a vouching member.
 * 
 * Parameters:
 * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
 * 
 * # <weight>
 * Key: B (len of bids)
 * - One storage read O(1) to check the signer is a vouching member.
 * - One storage mutate to retrieve and update the bids. O(B)
 * - One vouching storage removal. O(1)
 * - One event.
 * 
 * Total Complexity: O(B)
 * # </weight>
 */
export interface SocietyCall_unvouch {
    __kind: 'unvouch'
    pos: number
}

/**
 * As a member, vote on a candidate.
 * 
 * The dispatch origin for this call must be _Signed_ and a member.
 * 
 * Parameters:
 * - `candidate`: The candidate that the member would like to bid on.
 * - `approve`: A boolean which says if the candidate should be approved (`true`) or
 *   rejected (`false`).
 * 
 * # <weight>
 * Key: C (len of candidates), M (len of members)
 * - One storage read O(M) and O(log M) search to check user is a member.
 * - One account lookup.
 * - One storage read O(C) and O(C) search to check that user is a candidate.
 * - One storage write to add vote to votes. O(1)
 * - One event.
 * 
 * Total Complexity: O(M + logM + C)
 * # </weight>
 */
export interface SocietyCall_vote {
    __kind: 'vote'
    candidate: MultiAddress
    approve: boolean
}

/**
 * As a member, vouch for someone to join society by placing a bid on their behalf.
 * 
 * There is no deposit required to vouch for a new bid, but a member can only vouch for
 * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
 * the suspension judgement origin, the member will be banned from vouching again.
 * 
 * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
 * be paid as a portion of the reward the member will receive for joining the society.
 * 
 * The dispatch origin for this call must be _Signed_ and a member.
 * 
 * Parameters:
 * - `who`: The user who you would like to vouch for.
 * - `value`: The total reward to be paid between you and the candidate if they become
 * a member in the society.
 * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
 * the society. Tips larger than `value` will be saturated upon payout.
 * 
 * # <weight>
 * Key: B (len of bids), C (len of candidates), M (len of members)
 * - Storage Reads:
 * 	- One storage read to retrieve all members. O(M)
 * 	- One storage read to check member is not already vouching. O(1)
 * 	- One storage read to check for suspended candidate. O(1)
 * 	- One storage read to check for suspended member. O(1)
 * 	- One storage read to retrieve all current bids. O(B)
 * 	- One storage read to retrieve all current candidates. O(C)
 * - Storage Writes:
 * 	- One storage write to insert vouching status to the member. O(1)
 * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
 *    w/ read)
 * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
 * - Notable Computation:
 * 	- O(log M) search to check sender is a member.
 * 	- O(B + C + log M) search to check user is not already a part of society.
 * 	- O(log B) search to insert the new bid sorted.
 * - External Pallet Operations:
 * 	- One balance reserve operation. O(X)
 * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
 * - Events:
 * 	- One event for vouch.
 * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
 * 
 * Total Complexity: O(M + B + C + logM + logB + X)
 * # </weight>
 */
export interface SocietyCall_vouch {
    __kind: 'vouch'
    who: AccountId32
    value: bigint
    tip: bigint
}

export type Type_281 = Type_281_Approve | Type_281_Rebid | Type_281_Reject

export interface Type_281_Approve {
    __kind: 'Approve'
}

export interface Type_281_Rebid {
    __kind: 'Rebid'
}

export interface Type_281_Reject {
    __kind: 'Reject'
}

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
    grandpa: Public
    babe: Bytes
    imOnline: Bytes
    authorityDiscovery: Bytes
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
    when: number
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
    when: number
    maybePeriodic?: ([number, number] | undefined)
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
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: ([number, number] | undefined)
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
    after: number
    maybePeriodic?: ([number, number] | undefined)
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
export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_cancel_recovered | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_remove_recovery | RecoveryCall_set_recovered | RecoveryCall_vouch_recovery

/**
 * Send a call through a recovered account.
 * 
 * The dispatch origin for this call must be _Signed_ and registered to
 * be able to make calls on behalf of the recovered account.
 * 
 * Parameters:
 * - `account`: The recovered account you want to make a call on-behalf-of.
 * - `call`: The call you want to make with the recovered account.
 * 
 * # <weight>
 * - The weight of the `call` + 10,000.
 * - One storage lookup to check account is recovered by `who`. O(1)
 * # </weight>
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: AccountId32
    call: Call
}

/**
 * Cancel the ability to use `as_recovered` for `account`.
 * 
 * The dispatch origin for this call must be _Signed_ and registered to
 * be able to make calls on behalf of the recovered account.
 * 
 * Parameters:
 * - `account`: The recovered account you are able to call on-behalf-of.
 * 
 * # <weight>
 * - One storage mutation to check account is recovered by `who`. O(1)
 * # </weight>
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: AccountId32
}

/**
 * Allow a successful rescuer to claim their recovered account.
 * 
 * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
 * who has successfully completed the account recovery process: collected
 * `threshold` or more vouches, waited `delay_period` blocks since initiation.
 * 
 * Parameters:
 * - `account`: The lost account that you want to claim has been successfully recovered by
 *   you.
 * 
 * # <weight>
 * Key: F (len of friends in config), V (len of vouching friends)
 * - One storage read to get the recovery configuration. O(1), Codec O(F)
 * - One storage read to get the active recovery process. O(1), Codec O(V)
 * - One storage read to get the current block number. O(1)
 * - One storage write. O(1), Codec O(V).
 * - One event.
 * 
 * Total Complexity: O(F + V)
 * # </weight>
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: AccountId32
}

/**
 * As the controller of a recoverable account, close an active recovery
 * process for your account.
 * 
 * Payment: By calling this function, the recoverable account will receive
 * the recovery deposit `RecoveryDeposit` placed by the rescuer.
 * 
 * The dispatch origin for this call must be _Signed_ and must be a
 * recoverable account with an active recovery process for it.
 * 
 * Parameters:
 * - `rescuer`: The account trying to rescue this recoverable account.
 * 
 * # <weight>
 * Key: V (len of vouching friends)
 * - One storage read/remove to get the active recovery process. O(1), Codec O(V)
 * - One balance call to repatriate reserved. O(X)
 * - One event.
 * 
 * Total Complexity: O(V + X)
 * # </weight>
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: AccountId32
}

/**
 * Create a recovery configuration for your account. This makes your account recoverable.
 * 
 * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
 * will be reserved for storing the recovery configuration. This deposit is returned
 * in full when the user calls `remove_recovery`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
 *   ordered and contain no duplicate values.
 * - `threshold`: The number of friends that must vouch for a recovery attempt before the
 *   account can be recovered. Should be less than or equal to the length of the list of
 *   friends.
 * - `delay_period`: The number of blocks after a recovery attempt is initialized that
 *   needs to pass before the account can be recovered.
 * 
 * # <weight>
 * - Key: F (len of friends)
 * - One storage read to check that account is not already recoverable. O(1).
 * - A check that the friends list is sorted and unique. O(F)
 * - One currency reserve operation. O(X)
 * - One storage write. O(1). Codec O(F).
 * - One event.
 * 
 * Total Complexity: O(F + X)
 * # </weight>
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: AccountId32[]
    threshold: number
    delayPeriod: number
}

/**
 * Initiate the process for recovering a recoverable account.
 * 
 * Payment: `RecoveryDeposit` balance will be reserved for initiating the
 * recovery process. This deposit will always be repatriated to the account
 * trying to be recovered. See `close_recovery`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `account`: The lost account that you want to recover. This account needs to be
 *   recoverable (i.e. have a recovery configuration).
 * 
 * # <weight>
 * - One storage read to check that account is recoverable. O(F)
 * - One storage read to check that this recovery process hasn't already started. O(1)
 * - One currency reserve operation. O(X)
 * - One storage read to get the current block number. O(1)
 * - One storage write. O(1).
 * - One event.
 * 
 * Total Complexity: O(F + X)
 * # </weight>
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: AccountId32
}

/**
 * Remove the recovery process for your account. Recovered accounts are still accessible.
 * 
 * NOTE: The user must make sure to call `close_recovery` on all active
 * recovery attempts before calling this function else it will fail.
 * 
 * Payment: By calling this function the recoverable account will unreserve
 * their recovery configuration deposit.
 * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
 * 
 * The dispatch origin for this call must be _Signed_ and must be a
 * recoverable account (i.e. has a recovery configuration).
 * 
 * # <weight>
 * Key: F (len of friends)
 * - One storage read to get the prefix iterator for active recoveries. O(1)
 * - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
 * - One balance call to unreserved. O(X)
 * - One event.
 * 
 * Total Complexity: O(F + X)
 * # </weight>
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 * Allow ROOT to bypass the recovery process and set an a rescuer account
 * for a lost account directly.
 * 
 * The dispatch origin for this call must be _ROOT_.
 * 
 * Parameters:
 * - `lost`: The "lost account" to be recovered.
 * - `rescuer`: The "rescuer account" which can call as the lost account.
 * 
 * # <weight>
 * - One storage write O(1)
 * - One event
 * # </weight>
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: AccountId32
    rescuer: AccountId32
}

/**
 * Allow a "friend" of a recoverable account to vouch for an active recovery
 * process for that account.
 * 
 * The dispatch origin for this call must be _Signed_ and must be a "friend"
 * for the recoverable account.
 * 
 * Parameters:
 * - `lost`: The lost account that you want to recover.
 * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
 * 
 * The combination of these two parameters must point to an active recovery
 * process.
 * 
 * # <weight>
 * Key: F (len of friends in config), V (len of vouching friends)
 * - One storage read to get the recovery configuration. O(1), Codec O(F)
 * - One storage read to get the active recovery process. O(1), Codec O(V)
 * - One binary search to confirm caller is a friend. O(logF)
 * - One binary search to confirm caller has not already vouched. O(logV)
 * - One storage write. O(1), Codec O(V).
 * - One event.
 * 
 * Total Complexity: O(F + logF + V + logV)
 * # </weight>
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: AccountId32
    rescuer: AccountId32
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
    delay: number
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
    delay: number
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
    height: number
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
    delay: number
}

export type ProxyType = ProxyType_Any | ProxyType_Governance | ProxyType_NonTransfer | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: bigint
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Bytes
    storeCall: boolean
    maxWeight: bigint
}

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
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
    index: number
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
    index: number
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
    index: number
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
    index: number
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
    index: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * # <weight>
 * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
 *   length of `heartbeat.network_state.external_address`
 *   - `O(K)`: decoding of length `K`
 *   - `O(E)`: decoding/encoding of length `E`
 * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *   `ReceivedHeartbeats`
 * - DbWrites: `ReceivedHeartbeats`
 * # </weight>
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Bytes
}

export interface Heartbeat {
    blockNumber: number
    networkState: OpaqueNetworkState
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export interface OpaqueNetworkState {
    peerId: OpaquePeerId
    externalAddresses: OpaqueMultiaddr[]
}

export type OpaqueMultiaddr = Bytes

export type OpaquePeerId = Bytes

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * # <weight>
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 * - One storage mutation (codec `O(R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: AccountId32
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - One storage mutation `O(R + X)`.
 * - One event
 * # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 * - One balance-unreserve operation.
 * - `2` storage reads and `S + 2` storage deletions.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`.
 * - One balance-reserve operation.
 * - `S + 2` storage mutations.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-transfer operation.
 * - Up to one account-lookup operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: AccountId32
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * # <weight>
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 * - One balance reserve operation.
 * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * # <weight>
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 * - At most one balance operations.
 * - DB:
 *   - `P + S` storage mutations (codec complexity `O(1)`)
 *   - One storage read (codec complexity `O(P)`).
 *   - One storage write (codec complexity `O(S)`).
 *   - One storage-exists (`IdentityOf::contains_key`).
 * # </weight>
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (Bytes | undefined)
    image: Data
    twitter: Data
}

export type BitFlags = bigint

export type Judgement = Judgement_Erroneous | Judgement_FeePaid | Judgement_KnownGood | Judgement_LowQuality | Judgement_OutOfDate | Judgement_Reasonable | Judgement_Unknown

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Bytes
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Bytes
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Bytes
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall = GrandpaCall_note_stalled | GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned

/**
 * Note that the current authority set of the GRANDPA finality gadget has
 * stalled. This will trigger a forced authority set change at the beginning
 * of the next session, to be enacted `delay` blocks after that. The delay
 * should be high enough to safely assume that the block signalling the
 * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 * will start the new authority set using the given finalized block as base.
 * Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_217
    keyOwnerProof: MembershipProof
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 * 
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_217
    keyOwnerProof: MembershipProof
}

export interface MembershipProof {
    session: number
    trieNodes: Bytes[]
    validatorCount: number
}

export interface Type_217 {
    setId: bigint
    equivocation: Equivocation
}

export type Equivocation = Equivocation_Precommit | Equivocation_Prevote

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_225
}

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_219
}

export interface Type_219 {
    roundNumber: bigint
    identity: Public
    first: [Prevote, Signature]
    second: [Prevote, Signature]
}

export type Signature = Bytes

export interface Prevote {
    targetHash: H256
    targetNumber: number
}

export interface Type_225 {
    roundNumber: bigint
    identity: Public
    first: [Precommit, Signature]
    second: [Precommit, Signature]
}

export interface Precommit {
    targetHash: H256
    targetNumber: number
}

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export type Erc721Call = Erc721Call_burn | Erc721Call_mint | Erc721Call_transfer

/**
 * Remove token from the system
 */
export interface Erc721Call_burn {
    __kind: 'burn'
    id: bigint
}

/**
 * Creates a new token with the given token ID and metadata, and gives ownership to owner
 */
export interface Erc721Call_mint {
    __kind: 'mint'
    owner: AccountId32
    id: bigint
    metadata: Bytes
}

/**
 * Changes ownership of a token sender owns
 */
export interface Erc721Call_transfer {
    __kind: 'transfer'
    to: AccountId32
    id: bigint
}

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export type Erc20Call = Erc20Call_mint_erc721 | Erc20Call_remark | Erc20Call_transfer | Erc20Call_transfer_erc721 | Erc20Call_transfer_hash | Erc20Call_transfer_native

/**
 * Allows the bridge to issue new erc721 tokens
 */
export interface Erc20Call_mint_erc721 {
    __kind: 'mint_erc721'
    recipient: AccountId32
    id: bigint
    metadata: Bytes
}

/**
 * This can be called by the bridge to demonstrate an arbitrary call from a proposal.
 */
export interface Erc20Call_remark {
    __kind: 'remark'
    hash: H256
}

/**
 * Executes a simple currency transfer using the bridge account as the source
 */
export interface Erc20Call_transfer {
    __kind: 'transfer'
    to: AccountId32
    amount: bigint
}

/**
 * Transfer a non-fungible token (erc721) to a (whitelisted) destination chain.
 */
export interface Erc20Call_transfer_erc721 {
    __kind: 'transfer_erc721'
    recipient: Bytes
    tokenId: bigint
    destId: number
}

/**
 * Transfers an arbitrary hash to a (whitelisted) destination chain.
 */
export interface Erc20Call_transfer_hash {
    __kind: 'transfer_hash'
    hash: H256
    destId: number
}

/**
 * Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
 */
export interface Erc20Call_transfer_native {
    __kind: 'transfer_native'
    amount: bigint
    recipient: Bytes
    destId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionsCall = ElectionsCall_clean_defunct_voters | ElectionsCall_remove_member | ElectionsCall_remove_voter | ElectionsCall_renounce_candidacy | ElectionsCall_submit_candidacy | ElectionsCall_vote

/**
 * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 * deposit of the removed voters are returned.
 * 
 * This is an root function to be used only for cleaning the state.
 * 
 * The dispatch origin of this call must be root.
 * 
 * # <weight>
 * The total number of voters and those that are defunct must be provided as witness data.
 * # </weight>
 */
export interface ElectionsCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, a new phragmen election is started.
 * 
 * The dispatch origin of this call must be root.
 * 
 * Note that this does not affect the designated block number of the next election.
 * 
 * # <weight>
 * If we have a replacement, we use a small weight. Else, since this is a root call and
 * will go into phragmen, we assume full block for now.
 * # </weight>
 */
export interface ElectionsCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    hasReplacement: boolean
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface ElectionsCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 * Renounce one's intention to be a candidate for the next election round. 3 potential
 * outcomes exist:
 * 
 * - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *   unreserved, returned and origin is removed as a candidate.
 * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *   origin is removed as a runner-up.
 * - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *   removed as a member, consequently not being a candidate for the next round anymore.
 *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *   are immediately used. If the prime is renouncing, then no prime will exist until the
 *   next round.
 * 
 * The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 * # <weight>
 * The type of renouncing must be provided as witness data.
 * # </weight>
 */
export interface ElectionsCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 * Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 * All candidates are wiped at the end of the term. They either become a member/runner-up,
 * or leave the system while their deposit is slashed.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 * to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 * # <weight>
 * The number of current candidates must be provided as witness data.
 * # </weight>
 */
export interface ElectionsCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 * Vote for a set of candidates for the upcoming round of election. This can be called to
 * set the initial votes, or update already existing votes.
 * 
 * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 * reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 * The `votes` should:
 *   - not be empty.
 *   - be less than the number of possible candidates. Note that all current members and
 *     runners-up are also automatically candidates for the next round.
 * 
 * If `value` is more than `who`'s free balance, then the maximum of the two is used.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * It is the responsibility of the caller to **NOT** place all of their balance into the
 * lock and keep some for further operations.
 * 
 * # <weight>
 * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 * # </weight>
 */
export interface ElectionsCall_vote {
    __kind: 'vote'
    votes: AccountId32[]
    value: bigint
}

export type Renouncing = Renouncing_Candidate | Renouncing_Member | Renouncing_RunnerUp

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionProviderMultiPhaseCall = ElectionProviderMultiPhaseCall_governance_fallback | ElectionProviderMultiPhaseCall_set_emergency_election_result | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score | ElectionProviderMultiPhaseCall_submit | ElectionProviderMultiPhaseCall_submit_unsigned

/**
 * Trigger the governance fallback.
 * 
 * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
 * calling [`Call::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters?: (number | undefined)
    maybeMaxTargets?: (number | undefined)
}

/**
 * Set a solution in the queue, to be handed out to the client of this pallet in the next
 * call to `ElectionProvider::elect`.
 * 
 * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
 * 
 * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
 * feasibility check itself can in principle cause the election process to fail (due to
 * memory/weight constrains).
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [AccountId32, Support][]
}

/**
 * Set a new value for `MinimumUntrustedScore`.
 * 
 * Dispatch origin must be aligned with `T::ForceOrigin`.
 * 
 * This check can be turned off by setting the value to `None`.
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore?: (bigint[] | undefined)
}

/**
 * Submit a solution for the signed phase.
 * 
 * The dispatch origin fo this call must be __signed__.
 * 
 * The solution is potentially queued, based on the claimed score and processed at the end
 * of the signed phase.
 * 
 * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
 * might be rewarded, slashed, or get all or a part of the deposit back.
 * 
 * # <weight>
 * Queue size must be provided as witness data.
 * # </weight>
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
    numSignedSubmissions: number
}

/**
 * Submit a solution for the unsigned phase.
 * 
 * The dispatch origin fo this call must be __none__.
 * 
 * This submission is checked on the fly. Moreover, this unsigned solution is only
 * validated when submitted to the pool from the **local** node. Effectively, this means
 * that only active validators can submit this transaction when authoring a block (similar
 * to an inherent).
 * 
 * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
 * panic if the solution submitted by the validator is invalid in any way, effectively
 * putting their authoring reward at risk.
 * 
 * No deposit or reward is associated with this submission.
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export interface RawSolution {
    solution: NposSolution16
    score: bigint[]
    round: number
}

export interface NposSolution16 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
}

export interface Support {
    total: bigint
    voters: [AccountId32, bigint][]
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
    votingPeriod: number
    delay: number
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
    vote: number
    balance: bigint
}

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
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export type DdcMetricsOffchainWorkerCall = never

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
export type ContractsCall = ContractsCall_call | ContractsCall_instantiate | ContractsCall_instantiate_with_code | ContractsCall_remove_code | ContractsCall_upload_code

/**
 * Makes a call to an account, optionally transferring some balance.
 * 
 * # Parameters
 * 
 * * `dest`: Address of the contract to call.
 * * `value`: The balance to transfer from the `origin` to `dest`.
 * * `gas_limit`: The gas limit enforced when executing the constructor.
 * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
 *   caller to pay for the storage consumed.
 * * `data`: The input data to pass to the contract.
 * 
 * * If the account is a smart-contract account, the associated code will be
 * executed and any value will be transferred.
 * * If the account is a regular account, any value will be transferred.
 * * If no account exists and the call value is not less than `existential_deposit`,
 * a regular account will be created and any value will be transferred.
 */
export interface ContractsCall_call {
    __kind: 'call'
    dest: MultiAddress
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    data: Bytes
}

/**
 * Instantiates a contract from a previously deployed wasm binary.
 * 
 * This function is identical to [`Self::instantiate_with_code`] but without the
 * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
 * must be supplied.
 */
export interface ContractsCall_instantiate {
    __kind: 'instantiate'
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    codeHash: H256
    data: Bytes
    salt: Bytes
}

/**
 * Instantiates a new contract from the supplied `code` optionally transferring
 * some balance.
 * 
 * This dispatchable has the same effect as calling [`Self::upload_code`] +
 * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
 * also check the documentation of [`Self::upload_code`].
 * 
 * # Parameters
 * 
 * * `value`: The balance to transfer from the `origin` to the newly created contract.
 * * `gas_limit`: The gas limit enforced when executing the constructor.
 * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
 *   from the caller to pay for the storage consumed.
 * * `code`: The contract code to deploy in raw bytes.
 * * `data`: The input data to pass to the contract constructor.
 * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
 * 
 * Instantiation is executed as follows:
 * 
 * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
 *   code.
 * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
 * - The destination address is computed based on the sender, code_hash and the salt.
 * - The smart-contract account is created at the computed address.
 * - The `value` is transferred to the new account.
 * - The `deploy` function is executed in the context of the newly-created account.
 */
export interface ContractsCall_instantiate_with_code {
    __kind: 'instantiate_with_code'
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    code: Bytes
    data: Bytes
    salt: Bytes
}

/**
 * Remove the code stored under `code_hash` and refund the deposit to its owner.
 * 
 * A code can only be removed by its original uploader (its owner) and only if it is
 * not used by any contract.
 */
export interface ContractsCall_remove_code {
    __kind: 'remove_code'
    codeHash: H256
}

/**
 * Upload new `code` without instantiating a contract from it.
 * 
 * If the code does not already exist a deposit is reserved from the caller
 * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
 * depends on the instrumented size of the the supplied `code`.
 * 
 * If the code already exists in storage it will still return `Ok` and upgrades
 * the in storage version to the current
 * [`InstructionWeights::version`](InstructionWeights).
 * 
 * # Note
 * 
 * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
 * To avoid this situation a constructor could employ access control so that it can
 * only be instantiated by permissioned entities. The same is true when uploading
 * through [`Self::instantiate_with_code`].
 */
export interface ContractsCall_upload_code {
    __kind: 'upload_code'
    code: Bytes
    storageDepositLimit?: (bigint | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ChildBountiesCall = ChildBountiesCall_accept_curator | ChildBountiesCall_add_child_bounty | ChildBountiesCall_award_child_bounty | ChildBountiesCall_claim_child_bounty | ChildBountiesCall_close_child_bounty | ChildBountiesCall_propose_curator | ChildBountiesCall_unassign_curator

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
export interface ChildBountiesCall_accept_curator {
    __kind: 'accept_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * Add a new child-bounty.
 * 
 * The dispatch origin for this call must be the curator of parent
 * bounty and the parent bounty must be in "active" state.
 * 
 * Child-bounty gets added successfully & fund gets transferred from
 * parent bounty to child-bounty account, if parent bounty has enough
 * funds, else the call fails.
 * 
 * Upper bound to maximum number of active  child-bounties that can be
 * added are managed via runtime trait config
 * [`Config::MaxActiveChildBountyCount`].
 * 
 * If the call is success, the status of child-bounty is updated to
 * "Added".
 * 
 * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
 * - `value`: Value for executing the proposal.
 * - `description`: Text description for the child-bounty.
 */
export interface ChildBountiesCall_add_child_bounty {
    __kind: 'add_child_bounty'
    parentBountyId: number
    value: bigint
    description: Bytes
}

/**
 * Award child-bounty to a beneficiary.
 * 
 * The beneficiary will be able to claim the funds after a delay.
 * 
 * The dispatch origin for this call must be the master curator or
 * curator of this child-bounty.
 * 
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 * 
 * Child-bounty must be in active state, for processing the call. And
 * state of child-bounty is moved to "PendingPayout" on successful call
 * completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 * - `beneficiary`: Beneficiary account.
 */
export interface ChildBountiesCall_award_child_bounty {
    __kind: 'award_child_bounty'
    parentBountyId: number
    childBountyId: number
    beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded child-bounty after payout delay.
 * 
 * The dispatch origin for this call may be any signed origin.
 * 
 * Call works independent of parent bounty state, No need for parent
 * bounty to be in active state.
 * 
 * The Beneficiary is paid out with agreed bounty value. Curator fee is
 * paid & curator deposit is unreserved.
 * 
 * Child-bounty must be in "PendingPayout" state, for processing the
 * call. And instance of child-bounty is removed from the state on
 * successful call completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_claim_child_bounty {
    __kind: 'claim_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * Cancel a proposed or active child-bounty. Child-bounty account funds
 * are transferred to parent bounty account. The child-bounty curator
 * deposit may be unreserved if possible.
 * 
 * The dispatch origin for this call must be either parent curator or
 * `T::RejectOrigin`.
 * 
 * If the state of child-bounty is `Active`, curator deposit is
 * unreserved.
 * 
 * If the state of child-bounty is `PendingPayout`, call fails &
 * returns `PendingPayout` error.
 * 
 * For the origin other than T::RejectOrigin, parent bounty must be in
 * active state, for this child-bounty call to work. For origin
 * T::RejectOrigin execution is forced.
 * 
 * Instance of child-bounty is removed from the state on successful
 * call completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_close_child_bounty {
    __kind: 'close_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * Propose curator for funded child-bounty.
 * 
 * The dispatch origin for this call must be curator of parent bounty.
 * 
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 * 
 * Child-bounty must be in "Added" state, for processing the call. And
 * state of child-bounty is moved to "CuratorProposed" on successful
 * call completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 * - `curator`: Address of child-bounty curator.
 * - `fee`: payment fee to child-bounty curator for execution.
 */
export interface ChildBountiesCall_propose_curator {
    __kind: 'propose_curator'
    parentBountyId: number
    childBountyId: number
    curator: MultiAddress
    fee: bigint
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
export interface ChildBountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export type ChainBridgeCall = ChainBridgeCall_acknowledge_proposal | ChainBridgeCall_add_relayer | ChainBridgeCall_eval_vote_state | ChainBridgeCall_reject_proposal | ChainBridgeCall_remove_relayer | ChainBridgeCall_remove_resource | ChainBridgeCall_set_resource | ChainBridgeCall_set_threshold | ChainBridgeCall_whitelist_chain

/**
 * Commits a vote in favour of the provided proposal.
 * 
 * If a proposal with the given nonce and source chain ID does not already exist, it will
 * be created with an initial vote in favour from the caller.
 * 
 * # <weight>
 * - weight of proposed call, regardless of whether execution is performed
 * # </weight>
 */
export interface ChainBridgeCall_acknowledge_proposal {
    __kind: 'acknowledge_proposal'
    nonce: bigint
    srcId: number
    rId: Bytes
    call: Call
}

/**
 * Adds a new relayer to the relayer set.
 * 
 * # <weight>
 * - O(1) lookup and insert
 * # </weight>
 */
export interface ChainBridgeCall_add_relayer {
    __kind: 'add_relayer'
    v: AccountId32
}

/**
 * Evaluate the state of a proposal given the current vote threshold.
 * 
 * A proposal with enough votes will be either executed or cancelled, and the status
 * will be updated accordingly.
 * 
 * # <weight>
 * - weight of proposed call, regardless of whether execution is performed
 * # </weight>
 */
export interface ChainBridgeCall_eval_vote_state {
    __kind: 'eval_vote_state'
    nonce: bigint
    srcId: number
    prop: Call
}

/**
 * Commits a vote against a provided proposal.
 * 
 * # <weight>
 * - Fixed, since execution of proposal should not be included
 * # </weight>
 */
export interface ChainBridgeCall_reject_proposal {
    __kind: 'reject_proposal'
    nonce: bigint
    srcId: number
    rId: Bytes
    call: Call
}

/**
 * Removes an existing relayer from the set.
 * 
 * # <weight>
 * - O(1) lookup and removal
 * # </weight>
 */
export interface ChainBridgeCall_remove_relayer {
    __kind: 'remove_relayer'
    v: AccountId32
}

/**
 * Removes a resource ID from the resource mapping.
 * 
 * After this call, bridge transfers with the associated resource ID will
 * be rejected.
 * 
 * # <weight>
 * - O(1) removal
 * # </weight>
 */
export interface ChainBridgeCall_remove_resource {
    __kind: 'remove_resource'
    id: Bytes
}

/**
 * Stores a method name on chain under an associated resource ID.
 * 
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface ChainBridgeCall_set_resource {
    __kind: 'set_resource'
    id: Bytes
    method: Bytes
}

/**
 * Sets the vote threshold for proposals.
 * 
 * This threshold is used to determine how many votes are required
 * before a proposal is executed.
 * 
 * # <weight>
 * - O(1) lookup and insert
 * # </weight>
 */
export interface ChainBridgeCall_set_threshold {
    __kind: 'set_threshold'
    threshold: number
}

/**
 * Enables a chain ID as a source or destination for a bridge transfer.
 * 
 * # <weight>
 * - O(1) lookup and insert
 * # </weight>
 */
export interface ChainBridgeCall_whitelist_chain {
    __kind: 'whitelist_chain'
    id: number
}

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export type CereDDCModuleCall = CereDDCModuleCall_send_data

export interface CereDDCModuleCall_send_data {
    __kind: 'send_data'
    sendTo: AccountId32
    data: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall = BountiesCall_accept_curator | BountiesCall_approve_bounty | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry | BountiesCall_propose_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator

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
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 * 
 * The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 * - `bounty_id`: Bounty ID to claim.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 * 
 * Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 * - `bounty_id`: Bounty ID to cancel.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * Extend the expiry time of an active bounty.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 * Propose a new bounty.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 * 
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 * Assign a curator to a funded bounty.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
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
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
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
export type BagsListCall = BagsListCall_put_in_front_of | BagsListCall_rebag

/**
 * Move the caller's Id directly in front of `lighter`.
 * 
 * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
 * the account going in front of `lighter`.
 * 
 * Only works if
 * - both nodes are within the same bag,
 * - and `origin` has a greater `VoteWeight` than `lighter`.
 */
export interface BagsListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: AccountId32
}

/**
 * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
 * changed its weight that it should properly fall into a different bag than its current
 * one.
 * 
 * Anyone can call this function about any potentially dislocated account.
 * 
 * Will never return an error; if `dislocated` does not exist or doesn't need a rebag, then
 * it is a noop and fees are still collected from `origin`.
 */
export interface BagsListCall_rebag {
    __kind: 'rebag'
    dislocated: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BabeCall = BabeCall_plan_config_change | BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned

/**
 * Plan an epoch config change. The epoch config change is recorded and will be enacted on
 * the next call to `enact_epoch_change`. The config will be activated one epoch after.
 * Multiple calls to this method will replace any existing planned config change that had
 * not been enacted yet.
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

export interface EquivocationProof {
    offender: Bytes
    slot: Slot
    firstHeader: Header
    secondHeader: Header
}

export interface Header {
    parentHash: H256
    number: number
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

export type Slot = bigint

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export type AllowedSlots = AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots | AllowedSlots_PrimarySlots

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
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

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        BagsList: BagsListCall,
        Balances: BalancesCall,
        Bounties: BountiesCall,
        CereDDCModule: CereDDCModuleCall,
        ChainBridge: ChainBridgeCall,
        ChildBounties: ChildBountiesCall,
        Contracts: ContractsCall,
        Council: CouncilCall,
        DdcMetricsOffchainWorker: DdcMetricsOffchainWorkerCall,
        Democracy: DemocracyCall,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseCall,
        Elections: ElectionsCall,
        Erc20: Erc20Call,
        Erc721: Erc721Call,
        Grandpa: GrandpaCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        Indices: IndicesCall,
        Multisig: MultisigCall,
        Proxy: ProxyCall,
        Recovery: RecoveryCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Society: SocietyCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Tips: TipsCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

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
        startingBlock: sts.number(),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.number(),
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
        Council: Type_304,
        TechnicalCommittee: Type_305,
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

export const Type_305: sts.Type<Type_305> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_304: sts.Type<Type_304> = sts.closedEnum(() => {
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
export const TipsCall: sts.Type<TipsCall> = sts.closedEnum(() => {
    return  {
        close_tip: sts.enumStruct({
            hash: H256,
        }),
        report_awesome: sts.enumStruct({
            reason: sts.bytes(),
            who: AccountId32,
        }),
        retract_tip: sts.enumStruct({
            hash: H256,
        }),
        slash_tip: sts.enumStruct({
            hash: H256,
        }),
        tip: sts.enumStruct({
            hash: H256,
            tipValue: sts.bigint(),
        }),
        tip_new: sts.enumStruct({
            reason: sts.bytes(),
            who: AccountId32,
            tipValue: sts.bigint(),
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
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: MultiAddress,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: MultiAddress,
            call: Call,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Call,
            weight: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            controller: MultiAddress,
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        chill_other: sts.enumStruct({
            controller: AccountId32,
        }),
        force_apply_min_commission: sts.enumStruct({
            validatorStash: AccountId32,
        }),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        kick: sts.enumStruct({
            who: sts.array(() => MultiAddress),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => MultiAddress),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.enumStruct({
            controller: MultiAddress,
        }),
        set_history_depth: sts.enumStruct({
            newHistoryDepth: sts.number(),
            eraItemsDeleted: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: sts.bigint(),
            minValidatorBond: sts.bigint(),
            maxNominatorCount: sts.option(() => sts.number()),
            maxValidatorCount: sts.option(() => sts.number()),
            chillThreshold: sts.option(() => Percent),
            minCommission: Perbill,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        unbond: sts.enumStruct({
            value: sts.bigint(),
        }),
        validate: sts.enumStruct({
            prefs: ValidatorPrefs,
        }),
        withdraw_unbonded: sts.enumStruct({
            numSlashingSpans: sts.number(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export const Percent = sts.number()

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        Account: AccountId32,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SocietyCall: sts.Type<SocietyCall> = sts.closedEnum(() => {
    return  {
        bid: sts.enumStruct({
            value: sts.bigint(),
        }),
        defender_vote: sts.enumStruct({
            approve: sts.boolean(),
        }),
        found: sts.enumStruct({
            founder: AccountId32,
            maxMembers: sts.number(),
            rules: sts.bytes(),
        }),
        judge_suspended_candidate: sts.enumStruct({
            who: AccountId32,
            judgement: Type_281,
        }),
        judge_suspended_member: sts.enumStruct({
            who: AccountId32,
            forgive: sts.boolean(),
        }),
        payout: sts.unit(),
        set_max_members: sts.enumStruct({
            max: sts.number(),
        }),
        unbid: sts.enumStruct({
            pos: sts.number(),
        }),
        unfound: sts.unit(),
        unvouch: sts.enumStruct({
            pos: sts.number(),
        }),
        vote: sts.enumStruct({
            candidate: MultiAddress,
            approve: sts.boolean(),
        }),
        vouch: sts.enumStruct({
            who: AccountId32,
            value: sts.bigint(),
            tip: sts.bigint(),
        }),
    }
})

export const Type_281: sts.Type<Type_281> = sts.closedEnum(() => {
    return  {
        Approve: sts.unit(),
        Rebid: sts.unit(),
        Reject: sts.unit(),
    }
})

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
        grandpa: Public,
        babe: sts.bytes(),
        imOnline: sts.bytes(),
        authorityDiscovery: sts.bytes(),
    }
})

export const Public = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
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
export const RecoveryCall: sts.Type<RecoveryCall> = sts.closedEnum(() => {
    return  {
        as_recovered: sts.enumStruct({
            account: AccountId32,
            call: Call,
        }),
        cancel_recovered: sts.enumStruct({
            account: AccountId32,
        }),
        claim_recovery: sts.enumStruct({
            account: AccountId32,
        }),
        close_recovery: sts.enumStruct({
            rescuer: AccountId32,
        }),
        create_recovery: sts.enumStruct({
            friends: sts.array(() => AccountId32),
            threshold: sts.number(),
            delayPeriod: sts.number(),
        }),
        initiate_recovery: sts.enumStruct({
            account: AccountId32,
        }),
        remove_recovery: sts.unit(),
        set_recovered: sts.enumStruct({
            lost: AccountId32,
            rescuer: AccountId32,
        }),
        vouch_recovery: sts.enumStruct({
            lost: AccountId32,
            rescuer: AccountId32,
        }),
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
            delay: sts.number(),
        }),
        announce: sts.enumStruct({
            real: AccountId32,
            callHash: H256,
        }),
        anonymous: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.number(),
            index: sts.number(),
        }),
        kill_anonymous: sts.enumStruct({
            spawner: AccountId32,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
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
            delay: sts.number(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Governance: sts.unit(),
        NonTransfer: sts.unit(),
        Staking: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: sts.bigint(),
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: sts.bytes(),
            storeCall: sts.boolean(),
            maxWeight: sts.bigint(),
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId32),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: sts.number(),
        }),
        force_transfer: sts.enumStruct({
            new: AccountId32,
            index: sts.number(),
            freeze: sts.boolean(),
        }),
        free: sts.enumStruct({
            index: sts.number(),
        }),
        freeze: sts.enumStruct({
            index: sts.number(),
        }),
        transfer: sts.enumStruct({
            new: AccountId32,
            index: sts.number(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return  {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: sts.bytes(),
        }),
    }
})

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return  {
        blockNumber: sts.number(),
        networkState: OpaqueNetworkState,
        sessionIndex: sts.number(),
        authorityIndex: sts.number(),
        validatorsLen: sts.number(),
    }
})

export const OpaqueNetworkState: sts.Type<OpaqueNetworkState> = sts.struct(() => {
    return  {
        peerId: OpaquePeerId,
        externalAddresses: sts.array(() => OpaqueMultiaddr),
    }
})

export const OpaqueMultiaddr = sts.bytes()

export const OpaquePeerId = sts.bytes()

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        add_registrar: sts.enumStruct({
            account: AccountId32,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: sts.number(),
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: MultiAddress,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: MultiAddress,
            judgement: Judgement,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
        }),
        rename_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: AccountId32,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: BitFlags,
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => sts.tuple(() => [Data, Data])),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => sts.bytes()),
        image: Data,
        twitter: Data,
    }
})

export const BitFlags = sts.bigint()

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: sts.bigint(),
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: sts.bytes(),
        Keccak256: sts.bytes(),
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: sts.bytes(),
        ShaThree256: sts.bytes(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return  {
        note_stalled: sts.enumStruct({
            delay: sts.number(),
            bestFinalizedBlockNumber: sts.number(),
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_217,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_217,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const MembershipProof: sts.Type<MembershipProof> = sts.struct(() => {
    return  {
        session: sts.number(),
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: sts.number(),
    }
})

export const Type_217: sts.Type<Type_217> = sts.struct(() => {
    return  {
        setId: sts.bigint(),
        equivocation: Equivocation,
    }
})

export const Equivocation: sts.Type<Equivocation> = sts.closedEnum(() => {
    return  {
        Precommit: Type_225,
        Prevote: Type_219,
    }
})

export const Type_219: sts.Type<Type_219> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Prevote, Signature]),
        second: sts.tuple(() => [Prevote, Signature]),
    }
})

export const Signature = sts.bytes()

export const Prevote: sts.Type<Prevote> = sts.struct(() => {
    return  {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

export const Type_225: sts.Type<Type_225> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Precommit, Signature]),
        second: sts.tuple(() => [Precommit, Signature]),
    }
})

export const Precommit: sts.Type<Precommit> = sts.struct(() => {
    return  {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export const Erc721Call: sts.Type<Erc721Call> = sts.closedEnum(() => {
    return  {
        burn: sts.enumStruct({
            id: sts.bigint(),
        }),
        mint: sts.enumStruct({
            owner: AccountId32,
            id: sts.bigint(),
            metadata: sts.bytes(),
        }),
        transfer: sts.enumStruct({
            to: AccountId32,
            id: sts.bigint(),
        }),
    }
})

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export const Erc20Call: sts.Type<Erc20Call> = sts.closedEnum(() => {
    return  {
        mint_erc721: sts.enumStruct({
            recipient: AccountId32,
            id: sts.bigint(),
            metadata: sts.bytes(),
        }),
        remark: sts.enumStruct({
            hash: H256,
        }),
        transfer: sts.enumStruct({
            to: AccountId32,
            amount: sts.bigint(),
        }),
        transfer_erc721: sts.enumStruct({
            recipient: sts.bytes(),
            tokenId: sts.bigint(),
            destId: sts.number(),
        }),
        transfer_hash: sts.enumStruct({
            hash: H256,
            destId: sts.number(),
        }),
        transfer_native: sts.enumStruct({
            amount: sts.bigint(),
            recipient: sts.bytes(),
            destId: sts.number(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ElectionsCall: sts.Type<ElectionsCall> = sts.closedEnum(() => {
    return  {
        clean_defunct_voters: sts.enumStruct({
            numVoters: sts.number(),
            numDefunct: sts.number(),
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            hasReplacement: sts.boolean(),
        }),
        remove_voter: sts.unit(),
        renounce_candidacy: sts.enumStruct({
            renouncing: Renouncing,
        }),
        submit_candidacy: sts.enumStruct({
            candidateCount: sts.number(),
        }),
        vote: sts.enumStruct({
            votes: sts.array(() => AccountId32),
            value: sts.bigint(),
        }),
    }
})

export const Renouncing: sts.Type<Renouncing> = sts.closedEnum(() => {
    return  {
        Candidate: sts.number(),
        Member: sts.unit(),
        RunnerUp: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ElectionProviderMultiPhaseCall: sts.Type<ElectionProviderMultiPhaseCall> = sts.closedEnum(() => {
    return  {
        governance_fallback: sts.enumStruct({
            maybeMaxVoters: sts.option(() => sts.number()),
            maybeMaxTargets: sts.option(() => sts.number()),
        }),
        set_emergency_election_result: sts.enumStruct({
            supports: sts.array(() => sts.tuple(() => [AccountId32, Support])),
        }),
        set_minimum_untrusted_score: sts.enumStruct({
            maybeNextScore: sts.option(() => sts.array(() => sts.bigint())),
        }),
        submit: sts.enumStruct({
            rawSolution: RawSolution,
            numSignedSubmissions: sts.number(),
        }),
        submit_unsigned: sts.enumStruct({
            rawSolution: RawSolution,
            witness: SolutionOrSnapshotSize,
        }),
    }
})

export const SolutionOrSnapshotSize: sts.Type<SolutionOrSnapshotSize> = sts.struct(() => {
    return  {
        voters: sts.number(),
        targets: sts.number(),
    }
})

export const RawSolution: sts.Type<RawSolution> = sts.struct(() => {
    return  {
        solution: NposSolution16,
        score: sts.array(() => sts.bigint()),
        round: sts.number(),
    }
})

export const NposSolution16: sts.Type<NposSolution16> = sts.struct(() => {
    return  {
        votes1: sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
        votes2: sts.array(() => sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()]), sts.number()])),
        votes3: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes4: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes5: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes6: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes7: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes8: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes9: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes10: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes11: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes12: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes13: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes14: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes15: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes16: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
    }
})

export const Support: sts.Type<Support> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        voters: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
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
            votingPeriod: sts.number(),
            delay: sts.number(),
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
            vote: sts.number(),
            balance: sts.bigint(),
        }),
    }
})

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
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export const DdcMetricsOffchainWorkerCall: sts.Type<DdcMetricsOffchainWorkerCall> = sts.closedEnum(() => {
    return  {
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
export const ContractsCall: sts.Type<ContractsCall> = sts.closedEnum(() => {
    return  {
        call: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            data: sts.bytes(),
        }),
        instantiate: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            codeHash: H256,
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        instantiate_with_code: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            code: sts.bytes(),
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        remove_code: sts.enumStruct({
            codeHash: H256,
        }),
        upload_code: sts.enumStruct({
            code: sts.bytes(),
            storageDepositLimit: sts.option(() => sts.bigint()),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ChildBountiesCall: sts.Type<ChildBountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        add_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        award_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        close_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        propose_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
    }
})

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export const ChainBridgeCall: sts.Type<ChainBridgeCall> = sts.closedEnum(() => {
    return  {
        acknowledge_proposal: sts.enumStruct({
            nonce: sts.bigint(),
            srcId: sts.number(),
            rId: sts.bytes(),
            call: Call,
        }),
        add_relayer: sts.enumStruct({
            v: AccountId32,
        }),
        eval_vote_state: sts.enumStruct({
            nonce: sts.bigint(),
            srcId: sts.number(),
            prop: Call,
        }),
        reject_proposal: sts.enumStruct({
            nonce: sts.bigint(),
            srcId: sts.number(),
            rId: sts.bytes(),
            call: Call,
        }),
        remove_relayer: sts.enumStruct({
            v: AccountId32,
        }),
        remove_resource: sts.enumStruct({
            id: sts.bytes(),
        }),
        set_resource: sts.enumStruct({
            id: sts.bytes(),
            method: sts.bytes(),
        }),
        set_threshold: sts.enumStruct({
            threshold: sts.number(),
        }),
        whitelist_chain: sts.enumStruct({
            id: sts.number(),
        }),
    }
})

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export const CereDDCModuleCall: sts.Type<CereDDCModuleCall> = sts.closedEnum(() => {
    return  {
        send_data: sts.enumStruct({
            sendTo: AccountId32,
            data: sts.bytes(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BountiesCall: sts.Type<BountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
        approve_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        award_bounty: sts.enumStruct({
            bountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        close_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        extend_bounty_expiry: sts.enumStruct({
            bountyId: sts.number(),
            remark: sts.bytes(),
        }),
        propose_bounty: sts.enumStruct({
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        propose_curator: sts.enumStruct({
            bountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            bountyId: sts.number(),
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
export const BagsListCall: sts.Type<BagsListCall> = sts.closedEnum(() => {
    return  {
        put_in_front_of: sts.enumStruct({
            lighter: AccountId32,
        }),
        rebag: sts.enumStruct({
            dislocated: AccountId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return  {
        plan_config_change: sts.enumStruct({
            config: NextConfigDescriptor,
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const EquivocationProof: sts.Type<EquivocationProof> = sts.struct(() => {
    return  {
        offender: sts.bytes(),
        slot: Slot,
        firstHeader: Header,
        secondHeader: Header,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: H256,
        number: sts.number(),
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

export const Slot = sts.bigint()

export const NextConfigDescriptor: sts.Type<NextConfigDescriptor> = sts.closedEnum(() => {
    return  {
        V1: sts.enumStruct({
            c: sts.tuple(() => [sts.bigint(), sts.bigint()]),
            allowedSlots: AllowedSlots,
        }),
    }
})

export const AllowedSlots: sts.Type<AllowedSlots> = sts.closedEnum(() => {
    return  {
        PrimaryAndSecondaryPlainSlots: sts.unit(),
        PrimaryAndSecondaryVRFSlots: sts.unit(),
        PrimarySlots: sts.unit(),
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

export const H256 = sts.bytes()

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_UnknownAsset | TokenError_Unsupported | TokenError_WouldDie

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.number(),
    }
})

export interface ModuleError {
    index: number
    error: number
}

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token | DispatchError_TooManyConsumers

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}
