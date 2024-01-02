import {sts, Result, Option, Bytes, BitSequence} from './support'

export type ProposalIndex = number

export interface TreasuryProposal {
    proposer: AccountId
    value: Balance
    beneficiary: AccountId
    bond: Balance
}

export type Balance = bigint

export const TreasuryProposal: sts.Type<TreasuryProposal> = sts.struct(() => {
    return  {
        proposer: AccountId,
        value: Balance,
        beneficiary: AccountId,
        bond: Balance,
    }
})

export type Proposal = Proposal_Authorship | Proposal_Balances | Proposal_Council | Proposal_Democracy | Proposal_Indices | Proposal_KiltLaunch | Proposal_ParachainStaking | Proposal_ParachainSystem | Proposal_Scheduler | Proposal_Session | Proposal_Sudo | Proposal_System | Proposal_TechnicalCommittee | Proposal_TechnicalMembership | Proposal_Timestamp | Proposal_Treasury | Proposal_Utility | Proposal_Vesting

export interface Proposal_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Proposal_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Proposal_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Proposal_KiltLaunch {
    __kind: 'KiltLaunch'
    value: KiltLaunchCall
}

export interface Proposal_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Proposal_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Proposal_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Proposal_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Proposal_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Proposal_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export type VestingCall = VestingCall_force_vested_transfer | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

/**
 *  Force a vested transfer.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `source`: The account whose funds should be transferred.
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 4 Reads, 4 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 *  # </weight>
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: LookupSource
    target: LookupSource
    schedule: VestingInfo
}

/**
 *  Unlock any vested funds of the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
 *  locked under this pallet.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 2 Reads, 2 Writes
 *      - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 *  Unlock any vested funds of a `target` account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account whose vested funds should be unlocked. Must have funds still
 *  locked under this pallet.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account
 *  # </weight>
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: LookupSource
}

/**
 *  Create a vested transfer.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: LookupSource
    schedule: VestingInfo
}

export interface VestingInfo {
    locked: Balance
    perBlock: Balance
    startingBlock: BlockNumber
}

export type BlockNumber = bigint

export type LookupSource = LookupSource_Address20 | LookupSource_Address32 | LookupSource_Id | LookupSource_Index | LookupSource_Raw

export interface LookupSource_Address20 {
    __kind: 'Address20'
    value: H160
}

export interface LookupSource_Address32 {
    __kind: 'Address32'
    value: H256
}

export interface LookupSource_Id {
    __kind: 'Id'
    value: AccountId
}

export interface LookupSource_Index {
    __kind: 'Index'
    value: number
}

export interface LookupSource_Raw {
    __kind: 'Raw'
    value: Bytes
}

export type H256 = Bytes

export type H160 = Bytes

export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Type_53
}

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Type_53[]
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Type_53[]
}

export type Type_53 = Type_53_Authorship | Type_53_Balances | Type_53_Council | Type_53_Democracy | Type_53_Indices | Type_53_KiltLaunch | Type_53_ParachainStaking | Type_53_ParachainSystem | Type_53_Scheduler | Type_53_Session | Type_53_Sudo | Type_53_System | Type_53_TechnicalCommittee | Type_53_TechnicalMembership | Type_53_Timestamp | Type_53_Treasury | Type_53_Utility | Type_53_Vesting

export interface Type_53_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_53_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_53_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Type_53_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Type_53_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Type_53_KiltLaunch {
    __kind: 'KiltLaunch'
    value: KiltLaunchCall
}

export interface Type_53_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Type_53_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Type_53_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Type_53_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_53_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Type_53_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_53_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Type_53_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Type_53_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_53_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Type_53_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_53_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1).
 *  - DbReads: `Proposals`, `Approvals`
 *  - DbWrite: `Approvals`
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `ProposalCount`, `origin account`
 *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: LookupSource
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `Proposals`, `rejected proposer account`
 *  - DbWrites: `Proposals`, `rejected proposer account`
 *  # </weight>
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: AccountId
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId[]
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: AccountId
    add: AccountId
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Hash
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Hash
    index: number
    approve: boolean
}

export type MemberCount = number

export type SystemCall = SystemCall_fill_block | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_changes_trie_config | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: Perbill
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Key
    subkeys: number
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Key[]
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 *  Make some on-chain remark and emit event.
 * 
 *  # <weight>
 *  - `O(b)` where b is the length of the remark.
 *  - 1 event.
 *  # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig?: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: KeyValue[]
}

export type KeyValue = [StorageKey, StorageData]

export type StorageData = Bytes

export type StorageKey = Bytes

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export type Key = Bytes

export type Perbill = number

export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: LookupSource
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Type_53
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
 *  a given account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: LookupSource
    call: Type_53
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 *  This function does not check the weight of the call, and instead allows the
 *  Sudo user to specify the weight of the call.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - The weight of this call is defined by the caller.
 *  # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Type_53
    weight: Weight
}

export type Weight = bigint

export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: Keys
    proof: Bytes
}

export type Keys = Bytes

export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 *  Cancel an anonymously scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.15 + 2.869 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: BlockNumber
    index: number
}

/**
 *  Cancel a named scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 24.91 + 2.907 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 *  Anonymously schedule a task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.29 + .126 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda
 *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_53
}

/**
 *  Anonymously schedule a task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_53
}

/**
 *  Schedule a named task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 29.6 + .159 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_53
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`](Self::schedule_named).
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_53
}

export type Priority = number

export type Period = [BlockNumber, number]

export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_upgrade_block | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Hash
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

/**
 *  Force an already scheduled validation function upgrade to happen on a particular block.
 * 
 *  Note that coordinating this block for the upgrade has to happen independently on the
 *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
 *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
 *  if done wrong.
 */
export interface ParachainSystemCall_set_upgrade_block {
    __kind: 'set_upgrade_block'
    relayChainBlock: RelayChainBlockNumber
}

/**
 *  Set the current validation data.
 * 
 *  This should be invoked exactly once per block. It will panic at the finalization
 *  phase if the call was not invoked.
 * 
 *  The dispatch origin for this call must be `Inherent`
 * 
 *  As a side effect, this function upgrades the current validation function
 *  if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: UpwardMessage
}

export type UpwardMessage = Bytes

export interface ParachainInherentData {
    validationData: PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [ParaId, InboundHrmpMessage[]][]
}

export interface InboundHrmpMessage {
    sentAt: BlockNumber
    data: Bytes
}

export type ParaId = number

export interface InboundDownwardMessage {
    pubSentAt: BlockNumber
    pubMsg: DownwardMessage
}

export type DownwardMessage = Bytes

export interface StorageProof {
    trieNodes: Bytes[]
}

export interface PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: RelayChainBlockNumber
    relayParentStorageRoot: Hash
    maxPovSize: number
}

export type HeadData = Bytes

export type RelayChainBlockNumber = number

export type ParachainStakingCall = ParachainStakingCall_cancel_leave_candidates | ParachainStakingCall_candidate_stake_less | ParachainStakingCall_candidate_stake_more | ParachainStakingCall_delegate_another_candidate | ParachainStakingCall_delegator_stake_less | ParachainStakingCall_delegator_stake_more | ParachainStakingCall_execute_leave_candidates | ParachainStakingCall_force_new_round | ParachainStakingCall_force_remove_candidate | ParachainStakingCall_init_leave_candidates | ParachainStakingCall_join_candidates | ParachainStakingCall_join_delegators | ParachainStakingCall_leave_delegators | ParachainStakingCall_revoke_delegation | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_set_inflation | ParachainStakingCall_set_max_candidate_stake | ParachainStakingCall_set_max_selected_candidates | ParachainStakingCall_unlock_unstaked

/**
 *  Revert the previously requested exit of the network of a collator
 *  candidate. On success, adds back the candidate to the TopCandidates
 *  and updates the SelectedCandidates.
 * 
 *  Requires the candidate to previously have called
 *  `init_leave_candidates`.
 * 
 *  Emits `CollatorCanceledExit`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) + O(C) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates` and C the size of the TopCandidates (bounded
 *  by MaxTopCandidates)
 *  - Reads: [Origin Account], Total, TopCandidates,
 *    MaxSelectedCandidates, (N + 1) * CollatorState
 *  - Writes: Total, CollatorState, TopCandidates, SelectedCandidates
 *  # </weight>
 */
export interface ParachainStakingCall_cancel_leave_candidates {
    __kind: 'cancel_leave_candidates'
}

/**
 *  Stake less funds for a collator candidate.
 * 
 *  If the new amount of staked fund is not large enough, the account
 *  could be removed from the set of collator candidates and not be
 *  considered for authoring the next blocks.
 * 
 *  This operation affects the pallet's total stake amount.
 * 
 *  The unstaked funds are not release immediately to the account, but
 *  they will be available after `StakeDuration` blocks.
 * 
 *  The resulting total amount of funds staked must be within the
 *  allowed range as set in the pallet's configuration.
 * 
 *  Emits `CollatorStakedLess`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates`
 *  - Reads: [Origin Account], Unstaking, TopCandidates,
 *    MaxSelectedCandidates, N * CollatorState
 *  - Writes: Unstaking, CollatorState, Total, SelectedCandidates
 *  # </weight>
 */
export interface ParachainStakingCall_candidate_stake_less {
    __kind: 'candidate_stake_less'
    less: BalanceOf
}

/**
 *  Stake more funds for a collator candidate.
 * 
 *  If not in the set of candidates, staking enough funds allows the
 *  account to be added to it. The larger amount of funds, the higher
 *  chances to be selected as the author of the next block.
 * 
 *  This operation affects the pallet's total stake amount.
 * 
 *  The resulting total amount of funds staked must be within the
 *  allowed range as set in the pallet's configuration.
 * 
 *  Emits `CollatorStakedMore`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates`
 *  - Reads: [Origin Account], Locks, TotalStake,
 *    MaxCollatorCandidateStake, TopCandidates, (N + 1)
 *    * CollatorState
 *  - Writes: Locks, TotalStake, CollatorState, TopCandidates,
 *    SelectedCandidates
 *  # </weight>
 */
export interface ParachainStakingCall_candidate_stake_more {
    __kind: 'candidate_stake_more'
    more: BalanceOf
}

/**
 *  Delegate another collator's candidate by staking some funds and
 *  increasing the pallet's as well as the collator's total stake.
 * 
 *  The account that wants to delegate cannot be part of the collator
 *  candidates set as well.
 * 
 *  The caller _must_ have delegated before. Otherwise,
 *  `join_delegators` should be called.
 * 
 *  If the delegator has already delegated the maximum number of
 *  collator candidates, this operation will fail.
 * 
 *  The amount staked must be larger than the minimum required to become
 *  a delegator as set in the pallet's configuration.
 * 
 *  As only `MaxDelegatorsPerCollator` are allowed to delegate a given
 *  collator, the amount staked must be larger than the lowest one in
 *  the current set of delegator for the operation to be meaningful.
 * 
 *  The collator's total stake as well as the pallet's total stake are
 *  increased accordingly.
 * 
 *  NOTE: This transaction is expected to throw until we increase
 *  `MaxCollatorsPerDelegator` by at least one, since it is currently
 *  set to one.
 * 
 *  Emits `Delegation`.
 *  Emits `DelegationReplaced` if the candidate has
 *  `MaxDelegatorsPerCollator` many delegations but this delegator
 *  staked more than one of the other delegators of this candidate.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) + O(D) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates` and D is the number of delegators for this
 *  collator bounded by `MaxDelegatorsPerCollator`.
 *  - Reads: [Origin Account], DelegatorState, TopCandidates,
 *    MaxSelectedCandidates, (N + 1) * CollatorState, LastDelegation,
 *    Round
 *  - Writes: Locks, CollatorState, DelegatorState, Total,
 *    SelectedCandidates, LastDelegation
 *  # </weight>
 */
export interface ParachainStakingCall_delegate_another_candidate {
    __kind: 'delegate_another_candidate'
    collator: LookupSource
    amount: BalanceOf
}

/**
 *  Reduce the stake for delegating a collator candidate.
 * 
 *  If the new amount of staked fund is not large enough, the collator
 *  could be removed from the set of collator candidates and not be
 *  considered for authoring the next blocks.
 * 
 *  The unstaked funds are not release immediately to the account, but
 *  they will be available after `StakeDuration` blocks.
 * 
 *  The remaining staked funds must still be larger than the minimum
 *  required by this pallet to maintain the status of delegator.
 * 
 *  The resulting total amount of funds staked must be within the
 *  allowed range as set in the pallet's configuration.
 * 
 *  Emits `DelegatorStakedLess`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) + O(D) where N is `MaxSelectedCandidates` bounded
 *  by `MaxTopCandidates` and D the number of total delegators for
 *  this collator bounded by `MaxCollatorsPerDelegator`.
 *  - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *    TopCandidates, (N + 1) * CollatorState, MaxSelectedCandidates
 *  - Writes: Unstaking, DelegatorState, CollatorState, Total,
 *    SelectedCandidates
 *  # </weight>
 */
export interface ParachainStakingCall_delegator_stake_less {
    __kind: 'delegator_stake_less'
    candidate: LookupSource
    less: BalanceOf
}

/**
 *  Increase the stake for delegating a collator candidate.
 * 
 *  If not in the set of candidates, staking enough funds allows the
 *  collator candidate to be added to it.
 * 
 *  Emits `DelegatorStakedMore`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) + O(D) where N is `MaxSelectedCandidates` bounded
 *  by `MaxTopCandidates` and D the number of total delegators for
 *  this collator bounded by `MaxCollatorsPerDelegator`.
 *  - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *    Locks, TopCandidates, (N + 1) * CollatorState,
 *    MaxSelectedCandidates
 *  - Writes: Unstaking, Locks, DelegatorState, CollatorState, Total,
 *    SelectedCandidates
 *  # </weight>
 */
export interface ParachainStakingCall_delegator_stake_more {
    __kind: 'delegator_stake_more'
    candidate: LookupSource
    more: BalanceOf
}

/**
 *  Execute the network exit of a candidate who requested to leave at
 *  least `ExitQueueDelay` rounds ago. Prepares unstaking of the
 *  candidates and their delegators stake which can be unlocked via
 *  `unlock_unstaked` after waiting at least `StakeDuration` many
 *  blocks.
 * 
 *  Requires the candidate to previously have called
 *  `init_leave_candidates`.
 * 
 *  The exit request can be reversed by calling
 *  `cancel_leave_candidates`.
 * 
 *  Emits `CollatorLeft`.
 * 
 *  # <weight>
 *  Weight: O(D) where D is the number of delegators of the collator
 *  candidate bounded by `MaxDelegatorsPerCollator`
 *  - Reads: CollatorState, Round, D * DelegatorState, D
 *    * BlockNumber, D * Unstaking
 *  - Writes: D * Unstaking, D * DelegatorState, Total
 *  - Kills: CollatorState, DelegatorState
 *  # </weight>
 */
export interface ParachainStakingCall_execute_leave_candidates {
    __kind: 'execute_leave_candidates'
    collator: LookupSource
}

/**
 *  Forces the start of the new round in the next block.
 * 
 *  The new round will be enforced via <T as
 *  ShouldEndSession<_>>::should_end_session.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  - Reads: [Origin Account]
 *  - Writes: ForceNewRound
 *  # </weight>
 */
export interface ParachainStakingCall_force_new_round {
    __kind: 'force_new_round'
}

/**
 *  Forcedly removes a collator candidate from the TopCandidates and
 *  clears all associated storage for the candidate and their
 *  delegators.
 * 
 *  Prepares unstaking of the candidates and their delegators stake
 *  which can be unlocked via `unlock_unstaked` after waiting at
 *  least `StakeDuration` many blocks.
 * 
 *  Emits `CandidateRemoved`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N + D) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates` and D is the number of delegators of the
 *  collator candidate bounded by `MaxDelegatorsPerCollator`
 *  - Reads: MaxCollatorCandidateStake, 2 * N * CollatorState,
 *    TopCandidates, BlockNumber, D * DelegatorState, D * Unstaking
 *  - Writes: MaxCollatorCandidateStake, N * CollatorState,
 *    SelectedCandidates, D * DelegatorState, (D + 1) * Unstaking
 *  - Kills: CollatorState, DelegatorState for all delegators which only
 *    delegated to the candidate
 *  # </weight>
 */
export interface ParachainStakingCall_force_remove_candidate {
    __kind: 'force_remove_candidate'
    collator: LookupSource
}

/**
 *  Request to leave the set of collator candidates.
 * 
 *  On success, the account is immediately removed from the candidate
 *  pool to prevent selection as a collator in future validation rounds,
 *  but unstaking of the funds is executed with a delay of
 *  `StakeDuration` blocks.
 * 
 *  The exit request can be reversed by calling
 *  `cancel_leave_candidates`.
 * 
 *  The total stake of the pallet is not affected by this operation
 *  until the funds are released after `StakeDuration` blocks.
 * 
 *  NOTE: Upon starting a new session_i in `new_session`, the current
 *  top candidates are selected to be block authors for session_i+1. Any
 *  changes to the top candidates afterwards do not effect the set of
 *  authors for session_i+1.
 *  Thus, we have to make sure none of these collators can
 *  leave before session_i+1 ends by keeping them in the ExitQueue for
 *  at least 2 sessions (= 2 rounds), e.g., the current (i) and the next
 *  one (i+1).
 * 
 *  Emits `CollatorScheduledExit`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates`
 *  - Reads: [Origin Account], TopCandidates, ExitQueue, (N + 1) *
 *    CollatorState * N
 *  - Writes: CollatorState, TopCandidates, ExitQueue,
 *    SelectedCandidates
 *  # </weight>
 */
export interface ParachainStakingCall_init_leave_candidates {
    __kind: 'init_leave_candidates'
}

/**
 *  Join the set of collator candidates.
 * 
 *  In the next blocks, if the collator candidate has enough funds
 *  staked to be included in any of the top `MaxSelectedCandidates`
 *  positions, it will be included in the set of potential authors that
 *  will be selected by the stake-weighted random selection function.
 * 
 *  The staked funds of the new collator candidate are added to the
 *  total stake of the system.
 * 
 *  The total amount of funds staked must be within the allowed range as
 *  set in the pallet's configuration.
 * 
 *  The dispatch origin must not be already part of the collator
 *  candidates nor of the delegators set.
 * 
 *  Emits `JoinedCollatorCandidates`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) + O(C) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates` and C the size of the TopCandidates (bounded
 *  by MaxTopCandidates)
 *  - Reads: [Origin Account], DelegatorState,
 *    MaxCollatorCandidateStake, Locks, TotalStake, TopCandidates,
 *    MaxSelectedCandidates, (N + 1) * CollatorState, CandidateCount
 *  - Writes: Locks, TotalStake, CollatorState, TopCandidates,
 *    SelectedCandidates, CandidateCount
 *  # </weight>
 */
export interface ParachainStakingCall_join_candidates {
    __kind: 'join_candidates'
    stake: BalanceOf
}

/**
 *  Join the set of delegators by delegating to a collator candidate.
 * 
 *  The account that wants to delegate cannot be part of the collator
 *  candidates set as well.
 * 
 *  The caller must _not_ have delegated before. Otherwise,
 *  `delegate_another_candidate` should be called.
 * 
 *  The amount staked must be larger than the minimum required to become
 *  a delegator as set in the pallet's configuration.
 * 
 *  As only `MaxDelegatorsPerCollator` are allowed to delegate a given
 *  collator, the amount staked must be larger than the lowest one in
 *  the current set of delegator for the operation to be meaningful.
 * 
 *  The collator's total stake as well as the pallet's total stake are
 *  increased accordingly.
 * 
 *  Emits `Delegation`.
 *  Emits `DelegationReplaced` if the candidate has
 *  `MaxDelegatorsPerCollator` many delegations but this delegator
 *  staked more than one of the other delegators of this candidate.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) + O(D) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates` and D is the number of delegators for this
 *  collator bounded by `MaxDelegatorsPerCollator`.
 *  - Reads: [Origin Account], DelegatorState, TopCandidates,
 *    MaxSelectedCandidates, (N + 2) * CollatorState, LastDelegation,
 *    Round
 *  - Writes: Locks, CollatorState, DelegatorState, Total,
 *    SelectedCandidates, LastDelegation
 *  # </weight>
 */
export interface ParachainStakingCall_join_delegators {
    __kind: 'join_delegators'
    collator: LookupSource
    amount: BalanceOf
}

/**
 *  Leave the set of delegators and, by implication, revoke all ongoing
 *  delegations.
 * 
 *  All staked funds are not unlocked immediately, but they are added to
 *  the queue of pending unstaking, and will effectively be released
 *  after `StakeDuration` blocks from the moment the delegator leaves.
 * 
 *  This operation reduces the total stake of the pallet as well as the
 *  stakes of all collators that were delegated, potentially affecting
 *  their chances to be included in the set of candidates in the next
 *  rounds.
 * 
 *  Emits `DelegatorLeft`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  - If the numbers of delegators per collator (1 at genesis) and
 *    collators per delegator (25 at genesis) increased from the initial
 *    config at some point, the O(C * D) could weigh in more at that
 *    point.
 *  ---------
 *  Weight: O(N) + O(C * D) where N is `MaxSelectedCandidates` bounded
 *  by `MaxTopCandidates`, C the number collators for this
 *  delegator bounded by `MaxCollatorsPerDelegator` and D the number of
 *  total delegators for each C bounded by `MaxCollatorsPerDelegator`.
 *  - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *    TopCandidates, MaxSelectedCandidates, (N + 1) * CollatorState,
 *    CandidateCount
 *  - Writes: Unstaking, CollatorState, Total, SelectedCandidates,
 *    CandidateCount
 *  - Kills: DelegatorState
 *  # </weight>
 */
export interface ParachainStakingCall_leave_delegators {
    __kind: 'leave_delegators'
}

/**
 *  Terminates an ongoing delegation for a given collator candidate.
 * 
 *  The staked funds are not unlocked immediately, but they are added to
 *  the queue of pending unstaking, and will effectively be released
 *  after `StakeDuration` blocks from the moment the delegation is
 *  terminated.
 * 
 *  This operation reduces the total stake of the pallet as well as the
 *  stakes of the collator involved, potentially affecting its chances
 *  to be included in the set of candidates in the next rounds.
 * 
 *  Emits `DelegatorLeft`.
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) + O(D) where N is `MaxSelectedCandidates` bounded
 *  by `MaxTopCandidates` and D the number of total delegators for
 *  this collator bounded by `MaxCollatorsPerDelegator`.
 *  - Reads: [Origin Account], DelegatorState, BlockNumber, Unstaking,
 *    Locks, TopCandidates, (N + 1) * CollatorState,
 *    MaxSelectedCandidates
 *  - Writes: Unstaking, Locks, DelegatorState, CollatorState, Total,
 *    SelectedCandidates
 *  - Kills: DelegatorState if the delegator has not delegated to
 *    another collator
 *  # </weight>
 */
export interface ParachainStakingCall_revoke_delegation {
    __kind: 'revoke_delegation'
    collator: LookupSource
}

/**
 *  Set the number of blocks each validation round lasts.
 * 
 *  If the new value is less than the length of the current round, the
 *  system will immediately move to the next round in the next block.
 * 
 *  The new value must be higher than the minimum allowed as set in the
 *  pallet's configuration.
 * 
 *  The dispatch origin must be Root.
 * 
 *  Emits `BlocksPerRoundSet`.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  - Reads: [Origin Account], Round
 *  - Writes: Round
 *  # </weight>
 */
export interface ParachainStakingCall_set_blocks_per_round {
    __kind: 'set_blocks_per_round'
    new: BlockNumber
}

/**
 *  Set the annual inflation rate to derive per-round inflation.
 * 
 *  The inflation details are considered valid if the annual reward rate
 *  is approximately the per-block reward rate multiplied by the
 *  estimated* total number of blocks per year.
 * 
 *  The estimated average block time is twelve seconds.
 * 
 *  The dispatch origin must be Root.
 * 
 *  Emits `RoundInflationSet`.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  - Reads: [Origin Account]
 *  - Writes: InflationConfig
 *  # </weight>
 */
export interface ParachainStakingCall_set_inflation {
    __kind: 'set_inflation'
    collatorMaxRatePercentage: Perquintill
    collatorAnnualRewardRatePercentage: Perquintill
    delegatorMaxRatePercentage: Perquintill
    delegatorAnnualRewardRatePercentage: Perquintill
}

/**
 *  Set the maximal amount a collator can stake. Existing stakes are not
 *  changed.
 * 
 *  The dispatch origin must be Root.
 * 
 *  Emits `MaxCandidateStakeChanged`.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  - Reads: [Origin Account], MaxCollatorCandidateStake
 *  - Writes: Round
 *  # </weight>
 */
export interface ParachainStakingCall_set_max_candidate_stake {
    __kind: 'set_max_candidate_stake'
    new: BalanceOf
}

/**
 *  Set the maximum number of collator candidates that can be selected
 *  at the beginning of each validation round.
 * 
 *  Changes are not applied until the start of the next round.
 * 
 *  The new value must be higher than the minimum allowed as set in the
 *  pallet's configuration.
 * 
 *  The dispatch origin must be Root.
 * 
 *  Emits `MaxSelectedCandidatesSet`.
 * 
 * 
 *  # <weight>
 *  - The transaction's complexity is mainly dependent on updating the
 *    `SelectedCandidates` storage in `select_top_candidates` which in
 *    return depends on the number of `MaxSelectedCandidates` (N).
 *  - For each N, we read `CollatorState` from the storage.
 *  ---------
 *  Weight: O(N) where N is `MaxSelectedCandidates` bounded by
 *  `MaxTopCandidates`
 *  - Reads: MaxSelectedCandidates, TopCandidates, N * CollatorState
 *  - Writes: MaxSelectedCandidates
 *  # </weight>
 */
export interface ParachainStakingCall_set_max_selected_candidates {
    __kind: 'set_max_selected_candidates'
    new: number
}

/**
 *  Unlock all previously staked funds that are now available for
 *  unlocking by the origin account after `StakeDuration` blocks have
 *  elapsed.
 * 
 *  Weight: O(U) where U is the number of locked unstaking requests
 *  bounded by `MaxUnstakeRequests`.
 *  - Reads: [Origin Account], Unstaking, Locks
 *  - Writes: Unstaking, Locks
 *  - Kills: Unstaking & Locks if no balance is locked anymore
 *  # </weight>
 */
export interface ParachainStakingCall_unlock_unstaked {
    __kind: 'unlock_unstaked'
    target: LookupSource
}

export type Perquintill = bigint

export type BalanceOf = bigint

export type KiltLaunchCall = KiltLaunchCall_change_transfer_account | KiltLaunchCall_force_unlock | KiltLaunchCall_locked_transfer | KiltLaunchCall_migrate_genesis_account | KiltLaunchCall_migrate_multiple_genesis_accounts

/**
 *  Forcedly change the transfer account to the specified account.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  - Reads: [Origin Account]
 *  - Writes: TransferAccount
 *  # </weight>
 */
export interface KiltLaunchCall_change_transfer_account {
    __kind: 'change_transfer_account'
    transferAccount: LookupSource
}

/**
 *  Forcely remove KILT balance locks via sudo for the specified block
 *  number.
 * 
 *  The dispatch origin must be Root.
 * 
 *  Emits `Unlocked`.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of
 *    storage entries in `UnlockingAt` (N) which is practically uncapped
 *    but in theory it should be `MaxClaims` at most.
 *  ---------
 *  Weight: O(N) where N is the number of accounts for which the lock
 *  will be removed for the given block.
 *  - Reads: UnlockingAt, [Origin Account]
 *  - Kills: UnlockingAt (if N > 0), Locks (if N > 0), BalanceLocks (if
 *    N > 0)
 *  # </weight>
 */
export interface KiltLaunchCall_force_unlock {
    __kind: 'force_unlock'
    block: BlockNumber
}

/**
 *  Transfer KILT locked tokens to another account similar to
 *  `pallet_vesting::vested_transfer`.
 * 
 *  Expects the source to have a KILT balance lock and at least the
 *  specified amount available as balance locked with LockId
 *  `KILT_LAUNCH_ID`.
 * 
 *  Calls `migrate_kilt_balance_lock` internally.
 * 
 *  Emits `LockedTransfer` and if target does not have KILT balance
 *  lockup prior to transfer `AddedKiltLock`.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  - Reads: [Origin Account], Locks, Balance, BalanceLocks, UnlockingAt
 *  - Writes: Locks, Balance, BalanceLocks, UnlockingAt
 *  - Kills (if source transfers all locked balance): Locks,
 *    BalanceLocks, UnlockingAt
 *  # </weight>
 */
export interface KiltLaunchCall_locked_transfer {
    __kind: 'locked_transfer'
    target: LookupSource
    amount: Balance
}

/**
 *  Transfer tokens and vesting information or the KILT balance lock
 *  from an unowned source address to an account owned by the target.
 * 
 *  If vesting info or a KILT balance lock has been set up for the
 *  source account in the genesis block via `GenesisBuild`, then
 *  the corresponding locked/vested information and balance is migrated
 *  automatically. Please note that even though this extrinsic supports
 *  migrating both the KILT balance lock as well as vesting in one call,
 *  all source accounts should only contain either a KILT balance lock
 *  or vesting.
 * 
 *  Additionally, for vesting we already unlock the
 *  usable balance until the current block. This should enable the user
 *  to pay the transaction fees for the next call of `vest` which is
 *  always required to be explicitly called in order to unlock (more)
 *  balance from vesting.
 * 
 *  NOTE: Setting the KILT balance lock actually only occurs in this
 *  call (and not when building the genesis block in `GenesisBuild`) to
 *  avoid overhead from handling locks when migrating. We can do so
 *  because all target accounts are not owned by anyone and thus these
 *  cannot sign and/or call any extrinsics.
 * 
 *  The dispatch origin must be TransferAccount.
 * 
 *  Emits either `AddedVesting` or `AddedKiltLock`.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  - Reads: [Origin Account], TransferAccount, Locks, Balance, Vesting,
 *    BalanceLocks
 *  - Writes: Locks, Balance, UnownedAccount, Vesting (if source is
 *    vesting), BalanceLocks (if source is locking), UnlockingAt (if
 *    source is locking)
 *  - Kills (for source): Locks, Balance, UnownedAccount, Vesting (if
 *    source is vesting), BalanceLocks (if source is locking)
 *  # </weight>
 */
export interface KiltLaunchCall_migrate_genesis_account {
    __kind: 'migrate_genesis_account'
    source: LookupSource
    target: LookupSource
}

/**
 *  Transfer all balances, vesting information and KILT balance locks
 *  from multiple source addresses to the same target address.
 * 
 *  See `migrate_genesis_account` for details as we run the same logic
 *  for each source address.
 * 
 *  The dispatch origin must be TransferAccount.
 * 
 *  Emits N events which are either `AddedVesting` or `AddedKiltLock`.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of
 *    `sources` (N) which is capped at CompactAssignments::LIMIT
 *    (MaxClaims)
 *  ---------
 *  Weight: O(N) where N is the number of source addresses.
 *  - Reads: [Origin Account], TransferAccount, UnownedAccount, Locks,
 *    Balance, Vesting, BalanceLocks
 *  - Writes: Locks, Balance, Vesting (if any source is vesting),
 *    BalanceLocks (if aby source is locking), UnlockingAt (if any
 *    source is locking)
 *  - Kills (for sources): Locks, Balance, UnownedAccount, Vesting (if
 *    any source is vesting), BalanceLocks (if any source is locking)
 *  # </weight>
 */
export interface KiltLaunchCall_migrate_multiple_genesis_accounts {
    __kind: 'migrate_multiple_genesis_accounts'
    sources: LookupSource[]
    target: LookupSource
}

export type IndicesCall = IndicesCall_claim | IndicesCall_force_transfer | IndicesCall_free | IndicesCall_freeze | IndicesCall_transfer

/**
 *  Assign an previously unassigned index.
 * 
 *  Payment: `Deposit` is reserved from the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be claimed. This must not be in use.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: AccountIndex
}

/**
 *  Force an index to an account. This doesn't require a deposit. If the index is already
 *  held, then any deposit is reimbursed to its current owner.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `index`: the index to be (re-)assigned.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (original owner)
 *     - Writes: Indices Accounts, System Account (original owner)
 *  # </weight>
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: AccountId
    index: AccountIndex
    freeze: boolean
}

/**
 *  Free up an index owned by the sender.
 * 
 *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 *  - `index`: the index to be freed. This must be owned by the sender.
 * 
 *  Emits `IndexFreed` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: AccountIndex
}

/**
 *  Freeze an index so it will always point to the sender account. This consumes the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must have a
 *  non-frozen account `index`.
 * 
 *  - `index`: the index to be frozen in place.
 * 
 *  Emits `IndexFrozen` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one slash operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: AccountIndex
}

/**
 *  Assign an index already owned by the sender to another account. The balance reservation
 *  is effectively transferred to the new account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be re-assigned. This must be owned by the sender.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One transfer operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (recipient)
 *     - Writes: Indices Accounts, System Account (recipient)
 *  # </weight>
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: AccountId
    index: AccountIndex
}

export type AccountIndex = number

export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_queued | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_enact_proposal | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_propose | DemocracyCall_reap_preimage | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 *  Permanently place a proposal into the blacklist. This prevents it from ever being
 *  proposed again.
 * 
 *  If called on a queued public or external proposal, then this will result in it being
 *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 *  then it will be cancelled.
 * 
 *  The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 *  - `proposal_hash`: The proposal hash to blacklist permanently.
 *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 *  cancelled.
 * 
 *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *    reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Hash
    maybeRefIndex?: (ReferendumIndex | undefined)
}

/**
 *  Remove a proposal.
 * 
 *  The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 *  - `prop_index`: The index of the proposal to cancel.
 * 
 *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: ReferendumIndex
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 *  Delegate the voting power (with some given conviction) of the sending account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 * 
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: AccountId
    conviction: Conviction
    balance: BalanceOf
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: ReferendumIndex
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Hash
    index: ReferendumIndex
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: Hash
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: Hash
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: Hash
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  The dispatch of this call must be `FastTrackOrigin`.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `FastTrackVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 * 
 *  Emits `Started`.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Hash
    votingPeriod: BlockNumber
    delay: BlockNumber
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 *  the preimage has not been uploaded before and matches some imminent proposal,
 *  no fee is paid.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Bytes
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Bytes
}

/**
 *  Propose a sensitive action to be taken.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender must
 *  have funds to cover the deposit.
 * 
 *  - `proposal_hash`: The hash of the proposal preimage.
 *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 *  Emits `Proposed`.
 * 
 *  Weight: `O(p)`
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: Hash
    value: bigint
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proposal_hash`: The preimage hash of a proposal.
 *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
 *    Extrinsic is weighted according to this value with no refund.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 * 
 *  Emits `PreimageReaped`.
 * 
 *  Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: Hash
    proposalLenUpperBound: number
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If the `target` is equal to the signer, then this function is exactly equivalent to
 *  `remove_vote`. If not equal to the signer, then the vote must have expired,
 *  either because the referendum was cancelled, because the voter lost the referendum or
 *  because the conviction period is over.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account of the vote to be removed; this account must have voted for
 *    referendum `index`.
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: AccountId
    index: ReferendumIndex
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If:
 *  - the referendum was cancelled, or
 *  - the referendum is ongoing, or
 *  - the referendum has ended such that
 *    - the vote of the account was in opposition to the result; or
 *    - there was no conviction to the account's vote; or
 *    - the account made a split vote
 *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
 *  funds being available.
 * 
 *  If, however, the referendum has ended and:
 *  - it finished corresponding to the vote of the account, and
 *  - the account made a standard vote with conviction, and
 *  - the lock period of the conviction is not over
 *  ...then the lock will be aggregated into the overall account's lock, which may involve
 *  *overlocking* (where the two locks are combined into a single lock that is the maximum
 *  of both the amount locked and the time is it locked for).
 * 
 *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *  registered for referendum `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: ReferendumIndex
}

/**
 *  Signals agreement with a particular proposal.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender
 *  must have funds to cover the deposit, equal to the original deposit.
 * 
 *  - `proposal`: The index of the proposal to second.
 *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *    proposal. Extrinsic is weighted according to this value with no refund.
 * 
 *  Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
}

/**
 *  Undelegate the voting power of the sending account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be
 *  currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: AccountId
}

/**
 *  Veto and blacklist the external proposal hash.
 * 
 *  The dispatch origin of this call must be `VetoOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 *  Emits `Vetoed`.
 * 
 *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Hash
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
 *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    value: AccountVoteSplit
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    value: AccountVoteStandard
}

export interface AccountVoteStandard {
    vote: Vote
    balance: Balance
}

export type Vote = number

export interface AccountVoteSplit {
    aye: Balance
    nay: Balance
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

export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Hash
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Hash
    index: number
    approve: boolean
}

export type BalancesCall = BalancesCall_force_transfer | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_keep_alive

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: LookupSource
    dest: LookupSource
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Transfer the entire transferable balance from the caller account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *  transferred by this function. To ensure that this function results in a killed account,
 *  you might need to prepare the account by removing any reference counters, storage
 *  deposits, etc...
 * 
 *  The dispatch origin of this call must be Signed.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *    of the funds the account has, causing the sender account to be killed (false), or
 *    transfer everything except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 *    # <weight>
 *  - O(1). Just like transfer, but reading the user's transferable balance first.
 *    #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: LookupSource
    keepAlive: boolean
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Pallet.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: LookupSource
    value: bigint
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export interface Header {
    parentHash: Hash
    number: bigint
    stateRoot: Hash
    extrinsicsRoot: Hash
    digest: Digest
}

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_ChangesTrieSignal | DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal | DigestItem_SealV0

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: AuthorityId[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Hash
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: Consensus
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: PreRuntime
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: Seal
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: SealV0
}

export type SealV0 = [bigint, Signature]

export type Signature = Bytes

export type Seal = [ConsensusEngineId, Bytes]

export type PreRuntime = [ConsensusEngineId, Bytes]

export type Consensus = [ConsensusEngineId, Bytes]

export type ConsensusEngineId = Bytes

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value?: (ChangesTrieConfiguration | undefined)
}

export type AuthorityId = Bytes

export const Proposal: sts.Type<Proposal> = sts.closedEnum(() => {
    return  {
        Authorship: AuthorshipCall,
        Balances: BalancesCall,
        Council: CouncilCall,
        Democracy: DemocracyCall,
        Indices: IndicesCall,
        KiltLaunch: KiltLaunchCall,
        ParachainStaking: ParachainStakingCall,
        ParachainSystem: ParachainSystemCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_vested_transfer: sts.enumStruct({
            source: LookupSource,
            target: LookupSource,
            schedule: VestingInfo,
        }),
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: LookupSource,
        }),
        vested_transfer: sts.enumStruct({
            target: LookupSource,
            schedule: VestingInfo,
        }),
    }
})

export const VestingInfo: sts.Type<VestingInfo> = sts.struct(() => {
    return  {
        locked: Balance,
        perBlock: Balance,
        startingBlock: BlockNumber,
    }
})

export const LookupSource: sts.Type<LookupSource> = sts.closedEnum(() => {
    return  {
        Address20: H160,
        Address32: H256,
        Id: AccountId,
        Index: sts.number(),
        Raw: sts.bytes(),
    }
})

export const H256 = sts.bytes()

export const H160 = sts.bytes()

export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Type_53,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Type_53),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Type_53),
        }),
    }
})

export const Type_53: sts.Type<Type_53> = sts.closedEnum(() => {
    return  {
        Authorship: AuthorshipCall,
        Balances: BalancesCall,
        Council: CouncilCall,
        Democracy: DemocracyCall,
        Indices: IndicesCall,
        KiltLaunch: KiltLaunchCall,
        ParachainStaking: ParachainStakingCall,
        ParachainSystem: ParachainSystemCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: LookupSource,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
    }
})

export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: AccountId,
        }),
        change_key: sts.enumStruct({
            new: AccountId,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: AccountId,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId),
        }),
        set_prime: sts.enumStruct({
            who: AccountId,
        }),
        swap_member: sts.enumStruct({
            remove: AccountId,
            add: AccountId,
        }),
    }
})

export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: Hash,
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        fill_block: sts.enumStruct({
            ratio: Perbill,
        }),
        kill_prefix: sts.enumStruct({
            prefix: Key,
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => Key),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_changes_trie_config: sts.enumStruct({
            changesTrieConfig: sts.option(() => ChangesTrieConfiguration),
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
            items: sts.array(() => KeyValue),
        }),
    }
})

export const KeyValue = sts.tuple(() => [StorageKey, StorageData])

export const StorageData = sts.bytes()

export const StorageKey = sts.bytes()

export const ChangesTrieConfiguration: sts.Type<ChangesTrieConfiguration> = sts.struct(() => {
    return  {
        digestInterval: sts.number(),
        digestLevels: sts.number(),
    }
})

export const Key = sts.bytes()

export const Perbill = sts.number()

export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: LookupSource,
        }),
        sudo: sts.enumStruct({
            call: Type_53,
        }),
        sudo_as: sts.enumStruct({
            who: LookupSource,
            call: Type_53,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Type_53,
            weight: Weight,
        }),
    }
})

export const Weight = sts.bigint()

export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: Keys,
            proof: sts.bytes(),
        }),
    }
})

export const Keys = sts.bytes()

export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: BlockNumber,
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_53,
        }),
        schedule_after: sts.enumStruct({
            after: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_53,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_53,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_53,
        }),
    }
})

export const Priority = sts.number()

export const Period = sts.tuple(() => [BlockNumber, sts.number()])

export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: Hash,
        }),
        enact_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_upgrade_block: sts.enumStruct({
            relayChainBlock: RelayChainBlockNumber,
        }),
        set_validation_data: sts.enumStruct({
            data: ParachainInherentData,
        }),
        sudo_send_upward_message: sts.enumStruct({
            message: UpwardMessage,
        }),
    }
})

export const UpwardMessage = sts.bytes()

export const ParachainInherentData: sts.Type<ParachainInherentData> = sts.struct(() => {
    return  {
        validationData: PersistedValidationData,
        relayChainState: StorageProof,
        downwardMessages: sts.array(() => InboundDownwardMessage),
        horizontalMessages: sts.array(() => sts.tuple(() => [ParaId, sts.array(() => InboundHrmpMessage)])),
    }
})

export const InboundHrmpMessage: sts.Type<InboundHrmpMessage> = sts.struct(() => {
    return  {
        sentAt: BlockNumber,
        data: sts.bytes(),
    }
})

export const ParaId = sts.number()

export const InboundDownwardMessage: sts.Type<InboundDownwardMessage> = sts.struct(() => {
    return  {
        pubSentAt: BlockNumber,
        pubMsg: DownwardMessage,
    }
})

export const DownwardMessage = sts.bytes()

export const StorageProof: sts.Type<StorageProof> = sts.struct(() => {
    return  {
        trieNodes: sts.array(() => sts.bytes()),
    }
})

export const PersistedValidationData: sts.Type<PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: RelayChainBlockNumber,
        relayParentStorageRoot: Hash,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

export const RelayChainBlockNumber = sts.number()

export const ParachainStakingCall: sts.Type<ParachainStakingCall> = sts.closedEnum(() => {
    return  {
        cancel_leave_candidates: sts.unit(),
        candidate_stake_less: sts.enumStruct({
            less: BalanceOf,
        }),
        candidate_stake_more: sts.enumStruct({
            more: BalanceOf,
        }),
        delegate_another_candidate: sts.enumStruct({
            collator: LookupSource,
            amount: BalanceOf,
        }),
        delegator_stake_less: sts.enumStruct({
            candidate: LookupSource,
            less: BalanceOf,
        }),
        delegator_stake_more: sts.enumStruct({
            candidate: LookupSource,
            more: BalanceOf,
        }),
        execute_leave_candidates: sts.enumStruct({
            collator: LookupSource,
        }),
        force_new_round: sts.unit(),
        force_remove_candidate: sts.enumStruct({
            collator: LookupSource,
        }),
        init_leave_candidates: sts.unit(),
        join_candidates: sts.enumStruct({
            stake: BalanceOf,
        }),
        join_delegators: sts.enumStruct({
            collator: LookupSource,
            amount: BalanceOf,
        }),
        leave_delegators: sts.unit(),
        revoke_delegation: sts.enumStruct({
            collator: LookupSource,
        }),
        set_blocks_per_round: sts.enumStruct({
            new: BlockNumber,
        }),
        set_inflation: sts.enumStruct({
            collatorMaxRatePercentage: Perquintill,
            collatorAnnualRewardRatePercentage: Perquintill,
            delegatorMaxRatePercentage: Perquintill,
            delegatorAnnualRewardRatePercentage: Perquintill,
        }),
        set_max_candidate_stake: sts.enumStruct({
            new: BalanceOf,
        }),
        set_max_selected_candidates: sts.enumStruct({
            new: sts.number(),
        }),
        unlock_unstaked: sts.enumStruct({
            target: LookupSource,
        }),
    }
})

export const Perquintill = sts.bigint()

export const KiltLaunchCall: sts.Type<KiltLaunchCall> = sts.closedEnum(() => {
    return  {
        change_transfer_account: sts.enumStruct({
            transferAccount: LookupSource,
        }),
        force_unlock: sts.enumStruct({
            block: BlockNumber,
        }),
        locked_transfer: sts.enumStruct({
            target: LookupSource,
            amount: Balance,
        }),
        migrate_genesis_account: sts.enumStruct({
            source: LookupSource,
            target: LookupSource,
        }),
        migrate_multiple_genesis_accounts: sts.enumStruct({
            sources: sts.array(() => LookupSource),
            target: LookupSource,
        }),
    }
})

export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: AccountIndex,
        }),
        force_transfer: sts.enumStruct({
            new: AccountId,
            index: AccountIndex,
            freeze: sts.boolean(),
        }),
        free: sts.enumStruct({
            index: AccountIndex,
        }),
        freeze: sts.enumStruct({
            index: AccountIndex,
        }),
        transfer: sts.enumStruct({
            new: AccountId,
            index: AccountIndex,
        }),
    }
})

export const AccountIndex = sts.number()

export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        blacklist: sts.enumStruct({
            proposalHash: Hash,
            maybeRefIndex: sts.option(() => ReferendumIndex),
        }),
        cancel_proposal: sts.enumStruct({
            propIndex: sts.number(),
        }),
        cancel_queued: sts.enumStruct({
            which: ReferendumIndex,
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: AccountId,
            conviction: Conviction,
            balance: BalanceOf,
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: ReferendumIndex,
        }),
        enact_proposal: sts.enumStruct({
            proposalHash: Hash,
            index: ReferendumIndex,
        }),
        external_propose: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_default: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_majority: sts.enumStruct({
            proposalHash: Hash,
        }),
        fast_track: sts.enumStruct({
            proposalHash: Hash,
            votingPeriod: BlockNumber,
            delay: BlockNumber,
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
            proposalHash: Hash,
            value: sts.bigint(),
        }),
        reap_preimage: sts.enumStruct({
            proposalHash: Hash,
            proposalLenUpperBound: sts.number(),
        }),
        remove_other_vote: sts.enumStruct({
            target: AccountId,
            index: ReferendumIndex,
        }),
        remove_vote: sts.enumStruct({
            index: ReferendumIndex,
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: AccountId,
        }),
        veto_external: sts.enumStruct({
            proposalHash: Hash,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: Hash,
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: LookupSource,
            dest: LookupSource,
            value: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: LookupSource,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: LookupSource,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
    }
})

export const AuthorshipCall: sts.Type<AuthorshipCall> = sts.closedEnum(() => {
    return  {
        set_uncles: sts.enumStruct({
            newUncles: sts.array(() => Header),
        }),
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: Hash,
        number: sts.bigint(),
        stateRoot: Hash,
        extrinsicsRoot: Hash,
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
        AuthoritiesChange: sts.array(() => AuthorityId),
        ChangesTrieRoot: Hash,
        ChangesTrieSignal: ChangesTrieSignal,
        Consensus: Consensus,
        Other: sts.bytes(),
        PreRuntime: PreRuntime,
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: Seal,
        SealV0: SealV0,
    }
})

export const SealV0 = sts.tuple(() => [sts.bigint(), Signature])

export const Signature = sts.bytes()

export const Seal = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const PreRuntime = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const Consensus = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const ConsensusEngineId = sts.bytes()

export const ChangesTrieSignal: sts.Type<ChangesTrieSignal> = sts.closedEnum(() => {
    return  {
        NewConfiguration: sts.option(() => ChangesTrieConfiguration),
    }
})

export const AuthorityId = sts.bytes()

export type ReferendumIndex = number

export type ReferendumInfo = ReferendumInfo_Finished | ReferendumInfo_Ongoing

export interface ReferendumInfo_Finished {
    __kind: 'Finished'
    value: ReferendumInfoFinished
}

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export interface ReferendumStatus {
    end: BlockNumber
    proposalHash: Hash
    threshold: VoteThreshold
    delay: BlockNumber
    tally: Tally
}

export interface Tally {
    ayes: Balance
    nays: Balance
    turnout: Balance
}

export type VoteThreshold = VoteThreshold_SimpleMajority | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SuperMajorityApprove

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export interface ReferendumInfoFinished {
    approved: boolean
    end: BlockNumber
}

export const ReferendumInfo: sts.Type<ReferendumInfo> = sts.closedEnum(() => {
    return  {
        Finished: ReferendumInfoFinished,
        Ongoing: ReferendumStatus,
    }
})

export const ReferendumStatus: sts.Type<ReferendumStatus> = sts.struct(() => {
    return  {
        end: BlockNumber,
        proposalHash: Hash,
        threshold: VoteThreshold,
        delay: BlockNumber,
        tally: Tally,
    }
})

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: Balance,
        nays: Balance,
        turnout: Balance,
    }
})

export const ReferendumInfoFinished: sts.Type<ReferendumInfoFinished> = sts.struct(() => {
    return  {
        approved: sts.boolean(),
        end: BlockNumber,
    }
})

export type PreimageStatus = PreimageStatus_Available | PreimageStatus_Missing

export interface PreimageStatus_Available {
    __kind: 'Available'
    value: PreimageStatusAvailable
}

export interface PreimageStatus_Missing {
    __kind: 'Missing'
    value: BlockNumber
}

export interface PreimageStatusAvailable {
    data: Bytes
    provider: AccountId
    deposit: Balance
    since: BlockNumber
    expiry?: (BlockNumber | undefined)
}

export const PreimageStatus: sts.Type<PreimageStatus> = sts.closedEnum(() => {
    return  {
        Available: PreimageStatusAvailable,
        Missing: BlockNumber,
    }
})

export const PreimageStatusAvailable: sts.Type<PreimageStatusAvailable> = sts.struct(() => {
    return  {
        data: sts.bytes(),
        provider: AccountId,
        deposit: Balance,
        since: BlockNumber,
        expiry: sts.option(() => BlockNumber),
    }
})

export type AccountId = Bytes

export type Hash = Bytes

export type PropIndex = number

export const BalanceOf = sts.bigint()

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

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: AccountVoteSplit,
        Standard: AccountVoteStandard,
    }
})

export const AccountVoteStandard: sts.Type<AccountVoteStandard> = sts.struct(() => {
    return  {
        vote: Vote,
        balance: Balance,
    }
})

export const Vote = sts.number()

export const AccountVoteSplit: sts.Type<AccountVoteSplit> = sts.struct(() => {
    return  {
        aye: Balance,
        nay: Balance,
    }
})

export const TaskAddress = sts.tuple(() => [BlockNumber, sts.number()])

export const BlockNumber = sts.bigint()

export const MemberCount = sts.number()

export const ProposalIndex = sts.number()

export const Hash = sts.bytes()

export const DispatchResult = sts.result(() => sts.unit(), () => DispatchError)

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: DispatchErrorModule,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
        Transactional: TransactionalError,
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return  {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
        UnknownAsset: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_Overflow | TokenError_Underflow | TokenError_UnknownAsset | TokenError_WouldDie

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

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export const DispatchErrorModule: sts.Type<DispatchErrorModule> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.number(),
    }
})

export interface DispatchErrorModule {
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

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token | DispatchError_Transactional

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
    value: DispatchErrorModule
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

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export const ReferendumIndex = sts.number()

export const AccountId = sts.bytes()

export const Balance = sts.bigint()

export const PropIndex = sts.number()
