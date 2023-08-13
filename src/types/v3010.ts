import type {Result, Option} from './support'

export interface Pip {
    id: number
    proposal: Type_145
    state: ProposalState
    proposer: Proposer
}

export type Type_145 = Type_145_System | Type_145_Babe | Type_145_Timestamp | Type_145_Indices | Type_145_Authorship | Type_145_Balances | Type_145_Identity | Type_145_CddServiceProviders | Type_145_PolymeshCommittee | Type_145_CommitteeMembership | Type_145_TechnicalCommittee | Type_145_TechnicalCommitteeMembership | Type_145_UpgradeCommittee | Type_145_UpgradeCommitteeMembership | Type_145_MultiSig | Type_145_Bridge | Type_145_Staking | Type_145_Offences | Type_145_Session | Type_145_AuthorityDiscovery | Type_145_Grandpa | Type_145_ImOnline | Type_145_RandomnessCollectiveFlip | Type_145_Sudo | Type_145_Asset | Type_145_CapitalDistribution | Type_145_Checkpoint | Type_145_ComplianceManager | Type_145_CorporateAction | Type_145_CorporateBallot | Type_145_Pips | Type_145_Portfolio | Type_145_ProtocolFee | Type_145_Scheduler | Type_145_Settlement | Type_145_Statistics | Type_145_Sto | Type_145_Treasury | Type_145_Utility | Type_145_Base | Type_145_ExternalAgents | Type_145_Relayer | Type_145_Rewards

export interface Type_145_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_145_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Type_145_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_145_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Type_145_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_145_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_145_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Type_145_CddServiceProviders {
    __kind: 'CddServiceProviders'
    value: CddServiceProvidersCall
}

export interface Type_145_PolymeshCommittee {
    __kind: 'PolymeshCommittee'
    value: PolymeshCommitteeCall
}

export interface Type_145_CommitteeMembership {
    __kind: 'CommitteeMembership'
    value: CommitteeMembershipCall
}

export interface Type_145_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Type_145_TechnicalCommitteeMembership {
    __kind: 'TechnicalCommitteeMembership'
    value: TechnicalCommitteeMembershipCall
}

export interface Type_145_UpgradeCommittee {
    __kind: 'UpgradeCommittee'
    value: UpgradeCommitteeCall
}

export interface Type_145_UpgradeCommitteeMembership {
    __kind: 'UpgradeCommitteeMembership'
    value: UpgradeCommitteeMembershipCall
}

export interface Type_145_MultiSig {
    __kind: 'MultiSig'
    value: MultiSigCall
}

export interface Type_145_Bridge {
    __kind: 'Bridge'
    value: BridgeCall
}

export interface Type_145_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Type_145_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Type_145_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_145_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Type_145_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Type_145_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Type_145_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Type_145_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Type_145_Asset {
    __kind: 'Asset'
    value: AssetCall
}

export interface Type_145_CapitalDistribution {
    __kind: 'CapitalDistribution'
    value: CapitalDistributionCall
}

export interface Type_145_Checkpoint {
    __kind: 'Checkpoint'
    value: CheckpointCall
}

export interface Type_145_ComplianceManager {
    __kind: 'ComplianceManager'
    value: ComplianceManagerCall
}

export interface Type_145_CorporateAction {
    __kind: 'CorporateAction'
    value: CorporateActionCall
}

export interface Type_145_CorporateBallot {
    __kind: 'CorporateBallot'
    value: CorporateBallotCall
}

export interface Type_145_Pips {
    __kind: 'Pips'
    value: PipsCall
}

export interface Type_145_Portfolio {
    __kind: 'Portfolio'
    value: PortfolioCall
}

export interface Type_145_ProtocolFee {
    __kind: 'ProtocolFee'
    value: ProtocolFeeCall
}

export interface Type_145_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Type_145_Settlement {
    __kind: 'Settlement'
    value: SettlementCall
}

export interface Type_145_Statistics {
    __kind: 'Statistics'
    value: StatisticsCall
}

export interface Type_145_Sto {
    __kind: 'Sto'
    value: StoCall
}

export interface Type_145_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Type_145_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_145_Base {
    __kind: 'Base'
    value: BaseCall
}

export interface Type_145_ExternalAgents {
    __kind: 'ExternalAgents'
    value: ExternalAgentsCall
}

export interface Type_145_Relayer {
    __kind: 'Relayer'
    value: RelayerCall
}

export interface Type_145_Rewards {
    __kind: 'Rewards'
    value: RewardsCall
}

export type ProposalState = ProposalState_Pending | ProposalState_Rejected | ProposalState_Scheduled | ProposalState_Failed | ProposalState_Executed | ProposalState_Expired

export interface ProposalState_Pending {
    __kind: 'Pending'
}

export interface ProposalState_Rejected {
    __kind: 'Rejected'
}

export interface ProposalState_Scheduled {
    __kind: 'Scheduled'
}

export interface ProposalState_Failed {
    __kind: 'Failed'
}

export interface ProposalState_Executed {
    __kind: 'Executed'
}

export interface ProposalState_Expired {
    __kind: 'Expired'
}

export type Proposer = Proposer_Community | Proposer_Committee

export interface Proposer_Community {
    __kind: 'Community'
    value: Uint8Array
}

export interface Proposer_Committee {
    __kind: 'Committee'
    value: Committee
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - Base Weight: 0.665 µs, independent of remark length.
 *  - No DB operations.
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
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
    code: Uint8Array
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
    code: Uint8Array
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
    changesTrieConfig: (ChangesTrieConfiguration | undefined)
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
    items: [Uint8Array, Uint8Array][]
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
    keys: Uint8Array[]
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
    prefix: Uint8Array
    subkeys: number
}

export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
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

export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

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
    index: number
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
    new: Uint8Array
    index: number
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
    index: number
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
    new: Uint8Array
    index: number
    freeze: boolean
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
    index: number
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_transfer_with_memo | BalancesCall_deposit_block_reward_reserve_balance | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_burn_account_balance

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
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
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account.
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Transfer the native currency with the help of identifier string
 *  this functionality can help to differentiate the transfers.
 * 
 *  # <weight>
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account.
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer_with_memo {
    __kind: 'transfer_with_memo'
    dest: LookupSource
    value: bigint
    memo: (Uint8Array | undefined)
}

/**
 *  Move some POLYX from balance of self to balance of BRR.
 */
export interface BalancesCall_deposit_block_reward_reserve_balance {
    __kind: 'deposit_block_reward_reserve_balance'
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 * 
 *  The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 * 
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
 *  Burns the given amount of tokens from the caller's free, unlocked balance.
 */
export interface BalancesCall_burn_account_balance {
    __kind: 'burn_account_balance'
    amount: bigint
}

export type IdentityCall = IdentityCall_cdd_register_did | IdentityCall_invalidate_cdd_claims | IdentityCall_remove_secondary_keys | IdentityCall_accept_primary_key | IdentityCall_change_cdd_requirement_for_mk_rotation | IdentityCall_join_identity_as_key | IdentityCall_leave_identity_as_key | IdentityCall_add_claim | IdentityCall_revoke_claim | IdentityCall_set_permission_to_signer | IdentityCall_legacy_set_permission_to_signer | IdentityCall_freeze_secondary_keys | IdentityCall_unfreeze_secondary_keys | IdentityCall_add_authorization | IdentityCall_remove_authorization | IdentityCall_add_secondary_keys_with_authorization | IdentityCall_add_investor_uniqueness_claim | IdentityCall_gc_add_cdd_claim | IdentityCall_gc_revoke_cdd_claim | IdentityCall_add_investor_uniqueness_claim_v2 | IdentityCall_revoke_claim_by_index | IdentityCall_rotate_primary_key_to_secondary

/**
 *  Register `target_account` with a new Identity.
 * 
 *  # Failure
 *  - `origin` has to be a active CDD provider. Inactive CDD providers cannot add new
 *  claims.
 *  - `target_account` (primary key of the new Identity) can be linked to just one and only
 *  one identity.
 *  - External secondary keys can be linked to just one identity.
 * 
 *  # Weight
 *  `7_000_000_000 + 600_000 * secondary_keys.len()`
 */
export interface IdentityCall_cdd_register_did {
    __kind: 'cdd_register_did'
    targetAccount: Uint8Array
    secondaryKeys: SecondaryKey[]
}

/**
 *  Invalidates any claim generated by `cdd` from `disable_from` timestamps.
 * 
 *  You can also define an expiration time,
 *  which will invalidate all claims generated by that `cdd` and remove it as CDD member group.
 */
export interface IdentityCall_invalidate_cdd_claims {
    __kind: 'invalidate_cdd_claims'
    cdd: Uint8Array
    disableFrom: bigint
    expiry: (bigint | undefined)
}

/**
 *  Removes specified secondary keys of a DID if present.
 * 
 *  # Failure
 *  It can only called by primary key owner.
 * 
 *  # Weight
 *  `950_000_000 + 60_000 * signers_to_remove.len()`
 */
export interface IdentityCall_remove_secondary_keys {
    __kind: 'remove_secondary_keys'
    signersToRemove: Signatory[]
}

/**
 *  Call this with the new primary key. By invoking this method, caller accepts authorization
 *  to become the new primary key of the issuing identity. If a CDD service provider approved
 *  this change (or this is not required), primary key of the DID is updated.
 * 
 *  The caller (new primary key) must be either a secondary key of the issuing identity, or
 *  unlinked to any identity.
 * 
 *  Differs from rotate_primary_key_to_secondary in that it will unlink the old primary key
 *  instead of leaving it as a secondary key.
 * 
 *  # Arguments
 *  * `owner_auth_id` Authorization from the owner who initiated the change
 *  * `cdd_auth_id` Authorization from a CDD service provider
 */
export interface IdentityCall_accept_primary_key {
    __kind: 'accept_primary_key'
    rotationAuthId: bigint
    optionalCddAuthId: (bigint | undefined)
}

/**
 *  Set if CDD authorization is required for updating primary key of an identity.
 *  Callable via root (governance)
 * 
 *  # Arguments
 *  * `auth_required` CDD Authorization required or not
 */
export interface IdentityCall_change_cdd_requirement_for_mk_rotation {
    __kind: 'change_cdd_requirement_for_mk_rotation'
    authRequired: boolean
}

/**
 *  Join an identity as a secondary key.
 */
export interface IdentityCall_join_identity_as_key {
    __kind: 'join_identity_as_key'
    authId: bigint
}

/**
 *  Leave the secondary key's identity.
 */
export interface IdentityCall_leave_identity_as_key {
    __kind: 'leave_identity_as_key'
}

/**
 *  Adds a new claim record or edits an existing one.
 * 
 *  Only called by did_issuer's secondary key.
 */
export interface IdentityCall_add_claim {
    __kind: 'add_claim'
    target: Uint8Array
    claim: Claim
    expiry: (bigint | undefined)
}

/**
 *  Marks the specified claim as revoked.
 */
export interface IdentityCall_revoke_claim {
    __kind: 'revoke_claim'
    target: Uint8Array
    claim: Claim
}

/**
 *  Sets permissions for an specific `target_key` key.
 * 
 *  Only the primary key of an identity is able to set secondary key permissions.
 */
export interface IdentityCall_set_permission_to_signer {
    __kind: 'set_permission_to_signer'
    signer: Signatory
    perms: Permissions
}

/**
 *  This function is a workaround for https://github.com/polkadot-js/apps/issues/3632
 *  It sets permissions for an specific `target_key` key.
 *  Only the primary key of an identity is able to set secondary key permissions.
 */
export interface IdentityCall_legacy_set_permission_to_signer {
    __kind: 'legacy_set_permission_to_signer'
    signer: Signatory
    permissions: LegacyPermissions
}

/**
 *  It disables all secondary keys at `did` identity.
 * 
 *  # Errors
 * 
 */
export interface IdentityCall_freeze_secondary_keys {
    __kind: 'freeze_secondary_keys'
}

/**
 *  Re-enables all secondary keys of the caller's identity.
 */
export interface IdentityCall_unfreeze_secondary_keys {
    __kind: 'unfreeze_secondary_keys'
}

/**
 *  Adds an authorization.
 */
export interface IdentityCall_add_authorization {
    __kind: 'add_authorization'
    target: Signatory
    data: AuthorizationData
    expiry: (bigint | undefined)
}

/**
 *  Removes an authorization.
 *  _auth_issuer_pays determines whether the issuer of the authorisation pays the transaction fee
 */
export interface IdentityCall_remove_authorization {
    __kind: 'remove_authorization'
    target: Signatory
    authId: bigint
    authIssuerPays: boolean
}

/**
 *  It adds secondary keys to target identity `id`.
 *  Keys are directly added to identity because each of them has an authorization.
 * 
 *  Arguments:
 *      - `origin` Primary key of `id` identity.
 *      - `id` Identity where new secondary keys will be added.
 *      - `additional_keys` New secondary items (and their authorization data) to add to target
 *      identity.
 * 
 *  Failure
 *      - It can only called by primary key owner.
 *      - Keys should be able to linked to any identity.
 */
export interface IdentityCall_add_secondary_keys_with_authorization {
    __kind: 'add_secondary_keys_with_authorization'
    additionalKeys: SecondaryKeyWithAuth[]
    expiresAt: bigint
}

/**
 *  Add `Claim::InvestorUniqueness` claim for a given target identity.
 * 
 *  # <weight>
 *   Weight of the this extrinsic is depend on the computation that used to validate
 *   the proof of claim, which will be a constant independent of user inputs.
 *  # </weight>
 * 
 *  # Arguments
 *  * origin - Who provides the claim to the user? In this case, it's the user's account id as the user provides.
 *  * target - `IdentityId` to which the claim gets assigned.
 *  * claim - `InvestorUniqueness` claim details.
 *  * proof - To validate the self attestation.
 *  * expiry - Expiry of claim.
 * 
 *  # Errors
 *  * `DidMustAlreadyExist` Target should already been a part of the ecosystem.
 *  * `ClaimVariantNotAllowed` When origin trying to pass claim variant other than `InvestorUniqueness`.
 *  * `ConfidentialScopeClaimNotAllowed` When issuer is different from target or CDD_ID is invalid for given user.
 *  * `InvalidScopeClaim When proof is invalid.
 */
export interface IdentityCall_add_investor_uniqueness_claim {
    __kind: 'add_investor_uniqueness_claim'
    target: Uint8Array
    claim: Claim
    proof: Uint8Array
    expiry: (bigint | undefined)
}

/**
 *  Assuming this is executed by the GC voting majority, adds a new cdd claim record.
 */
export interface IdentityCall_gc_add_cdd_claim {
    __kind: 'gc_add_cdd_claim'
    target: Uint8Array
}

/**
 *  Assuming this is executed by the GC voting majority, removes an existing cdd claim record.
 */
export interface IdentityCall_gc_revoke_cdd_claim {
    __kind: 'gc_revoke_cdd_claim'
    target: Uint8Array
}

export interface IdentityCall_add_investor_uniqueness_claim_v2 {
    __kind: 'add_investor_uniqueness_claim_v2'
    target: Uint8Array
    scope: Scope
    claim: Claim
    proof: ScopeClaimProof
    expiry: (bigint | undefined)
}

/**
 *  Revokes a specific claim using its [Claim Unique Index](/pallet_identity/index.html#claim-unique-index) composed by `target`,
 *  `claim_type`, and `scope`.
 * 
 *  Please note that `origin` must be the issuer of the target claim.
 * 
 *  # Errors
 *  - `TargetHasNonZeroBalanceAtScopeId` when you try to revoke a `InvestorUniqueness*`
 *  claim, and `target` identity still have any balance on the given `scope`.
 */
export interface IdentityCall_revoke_claim_by_index {
    __kind: 'revoke_claim_by_index'
    target: Uint8Array
    claimType: ClaimType
    scope: (Scope | undefined)
}

/**
 *  Call this with the new primary key. By invoking this method, caller accepts authorization
 *  to become the new primary key of the issuing identity. If a CDD service provider approved
 *  this change, (or this is not required), primary key of the DID is updated.
 * 
 *  The caller (new primary key) must be either a secondary key of the issuing identity, or
 *  unlinked to any identity.
 * 
 *  Differs from accept_primary_key in that it will leave the old primary key as a secondary
 *  key with the permissions specified in the corresponding RotatePrimaryKeyToSecondary authorization
 *  instead of unlinking the old primary key.
 * 
 *  # Arguments
 *  * `owner_auth_id` Authorization from the owner who initiated the change
 *  * `cdd_auth_id` Authorization from a CDD service provider
 */
export interface IdentityCall_rotate_primary_key_to_secondary {
    __kind: 'rotate_primary_key_to_secondary'
    authId: bigint
    optionalCddAuthId: (bigint | undefined)
}

export type CddServiceProvidersCall = CddServiceProvidersCall_set_active_members_limit | CddServiceProvidersCall_disable_member | CddServiceProvidersCall_add_member | CddServiceProvidersCall_remove_member | CddServiceProvidersCall_swap_member | CddServiceProvidersCall_reset_members | CddServiceProvidersCall_abdicate_membership

/**
 *  Change this group's limit for how many concurrent active members they may be.
 * 
 *  # Arguments
 *  * `limit` - the number of active members there may be concurrently.
 */
export interface CddServiceProvidersCall_set_active_members_limit {
    __kind: 'set_active_members_limit'
    limit: number
}

/**
 *  Disables a member at specific moment.
 * 
 *  Please note that if member is already revoked (a "valid member"), its revocation
 *  time-stamp will be updated.
 * 
 *  Any disabled member should NOT allow to act like an active member of the group. For
 *  instance, a disabled CDD member should NOT be able to generate a CDD claim. However any
 *  generated claim issued before `at` would be considered as a valid one.
 * 
 *  If you want to invalidate any generated claim, you should use `Self::remove_member`.
 * 
 *  # Arguments
 *  * `at` - Revocation time-stamp.
 *  * `who` - Target member of the group.
 *  * `expiry` - Time-stamp when `who` is removed from CDD. As soon as it is expired, the
 *  generated claims will be "invalid" as `who` is not considered a member of the group.
 */
export interface CddServiceProvidersCall_disable_member {
    __kind: 'disable_member'
    who: Uint8Array
    expiry: (bigint | undefined)
    at: (bigint | undefined)
}

/**
 *  Adds a member `who` to the group. May only be called from `AddOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `AddOrigin` or root
 *  * `who` - IdentityId to be added to the group.
 */
export interface CddServiceProvidersCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 *  Removes a member `who` from the set. May only be called from `RemoveOrigin` or root.
 * 
 *  Any claim previously generated by this member is not valid as a group claim. For
 *  instance, if a CDD member group generated a claim for a target identity and then it is
 *  removed, that claim will be invalid.  In case you want to keep the validity of generated
 *  claims, you have to use `Self::disable_member` function
 * 
 *  # Arguments
 *  * `origin` - Origin representing `RemoveOrigin` or root
 *  * `who` - IdentityId to be removed from the group.
 */
export interface CddServiceProvidersCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 *  Swaps out one member `remove` for another member `add`.
 * 
 *  May only be called from `SwapOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `SwapOrigin` or root
 *  * `remove` - IdentityId to be removed from the group.
 *  * `add` - IdentityId to be added in place of `remove`.
 */
export interface CddServiceProvidersCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 *  Changes the membership to a new set, disregarding the existing membership.
 *  May only be called from `ResetOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `ResetOrigin` or root
 *  * `members` - New set of identities
 */
export interface CddServiceProvidersCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 *  Allows the calling member to *unilaterally quit* without this being subject to a GC
 *  vote.
 * 
 *  # Arguments
 *  * `origin` - Member of committee who wants to quit.
 * 
 *  # Error
 * 
 *  * Only primary key can abdicate.
 *  * Last member of a group cannot abdicate.
 */
export interface CddServiceProvidersCall_abdicate_membership {
    __kind: 'abdicate_membership'
}

export type PolymeshCommitteeCall = PolymeshCommitteeCall_set_vote_threshold | PolymeshCommitteeCall_set_release_coordinator | PolymeshCommitteeCall_set_expires_after | PolymeshCommitteeCall_vote_or_propose | PolymeshCommitteeCall_vote

/**
 *  Change the vote threshold the determines the winning proposal.
 *  For e.g., for a simple majority use (1, 2) which represents the in-equation ">= 1/2".
 * 
 *  # Arguments
 *  * `n` - Numerator of the fraction representing vote threshold.
 *  * `d` - Denominator of the fraction representing vote threshold.
 */
export interface PolymeshCommitteeCall_set_vote_threshold {
    __kind: 'set_vote_threshold'
    n: number
    d: number
}

/**
 *  Changes the release coordinator.
 * 
 *  # Arguments
 *  * `id` - The DID of the new release coordinator.
 * 
 *  # Errors
 *  * `NotAMember`, If the new coordinator `id` is not part of the committee.
 */
export interface PolymeshCommitteeCall_set_release_coordinator {
    __kind: 'set_release_coordinator'
    id: Uint8Array
}

/**
 *  Changes the time after which a proposal expires.
 * 
 *  # Arguments
 *  * `expiry` - The new expiry time.
 */
export interface PolymeshCommitteeCall_set_expires_after {
    __kind: 'set_expires_after'
    expiry: MaybeBlock
}

/**
 *  Proposes to the committee that `call` should be executed in its name.
 *  Alternatively, if the hash of `call` has already been recorded, i.e., already proposed,
 *  then this call counts as a vote, i.e., as if `vote_by_hash` was called.
 * 
 *  # Weight
 * 
 *  The weight of this dispatchable is that of `call` as well as the complexity
 *  for recording the vote itself.
 * 
 *  # Arguments
 *  * `approve` - is this an approving vote?
 *    If the proposal doesn't exist, passing `false` will result in error `FirstVoteReject`.
 *  * `call` - the call to propose for execution.
 * 
 *  # Errors
 *  * `FirstVoteReject`, if `call` hasn't been proposed and `approve == false`.
 *  * `NotAMember`, if the `origin` is not a member of this committee.
 */
export interface PolymeshCommitteeCall_vote_or_propose {
    __kind: 'vote_or_propose'
    approve: boolean
    call: Type_145
}

/**
 *  Votes `approve`ingly (or not, if `false`)
 *  on an existing `proposal` given by its hash, `index`.
 * 
 *  # Arguments
 *  * `proposal` - A hash of the proposal to be voted on.
 *  * `index` - The proposal index.
 *  * `approve` - If `true` than this is a `for` vote, and `against` otherwise.
 * 
 *  # Errors
 *  * `NotAMember`, if the `origin` is not a member of this committee.
 */
export interface PolymeshCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

export type CommitteeMembershipCall = CommitteeMembershipCall_set_active_members_limit | CommitteeMembershipCall_disable_member | CommitteeMembershipCall_add_member | CommitteeMembershipCall_remove_member | CommitteeMembershipCall_swap_member | CommitteeMembershipCall_reset_members | CommitteeMembershipCall_abdicate_membership

/**
 *  Change this group's limit for how many concurrent active members they may be.
 * 
 *  # Arguments
 *  * `limit` - the number of active members there may be concurrently.
 */
export interface CommitteeMembershipCall_set_active_members_limit {
    __kind: 'set_active_members_limit'
    limit: number
}

/**
 *  Disables a member at specific moment.
 * 
 *  Please note that if member is already revoked (a "valid member"), its revocation
 *  time-stamp will be updated.
 * 
 *  Any disabled member should NOT allow to act like an active member of the group. For
 *  instance, a disabled CDD member should NOT be able to generate a CDD claim. However any
 *  generated claim issued before `at` would be considered as a valid one.
 * 
 *  If you want to invalidate any generated claim, you should use `Self::remove_member`.
 * 
 *  # Arguments
 *  * `at` - Revocation time-stamp.
 *  * `who` - Target member of the group.
 *  * `expiry` - Time-stamp when `who` is removed from CDD. As soon as it is expired, the
 *  generated claims will be "invalid" as `who` is not considered a member of the group.
 */
export interface CommitteeMembershipCall_disable_member {
    __kind: 'disable_member'
    who: Uint8Array
    expiry: (bigint | undefined)
    at: (bigint | undefined)
}

/**
 *  Adds a member `who` to the group. May only be called from `AddOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `AddOrigin` or root
 *  * `who` - IdentityId to be added to the group.
 */
export interface CommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 *  Removes a member `who` from the set. May only be called from `RemoveOrigin` or root.
 * 
 *  Any claim previously generated by this member is not valid as a group claim. For
 *  instance, if a CDD member group generated a claim for a target identity and then it is
 *  removed, that claim will be invalid.  In case you want to keep the validity of generated
 *  claims, you have to use `Self::disable_member` function
 * 
 *  # Arguments
 *  * `origin` - Origin representing `RemoveOrigin` or root
 *  * `who` - IdentityId to be removed from the group.
 */
export interface CommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 *  Swaps out one member `remove` for another member `add`.
 * 
 *  May only be called from `SwapOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `SwapOrigin` or root
 *  * `remove` - IdentityId to be removed from the group.
 *  * `add` - IdentityId to be added in place of `remove`.
 */
export interface CommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 *  Changes the membership to a new set, disregarding the existing membership.
 *  May only be called from `ResetOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `ResetOrigin` or root
 *  * `members` - New set of identities
 */
export interface CommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 *  Allows the calling member to *unilaterally quit* without this being subject to a GC
 *  vote.
 * 
 *  # Arguments
 *  * `origin` - Member of committee who wants to quit.
 * 
 *  # Error
 * 
 *  * Only primary key can abdicate.
 *  * Last member of a group cannot abdicate.
 */
export interface CommitteeMembershipCall_abdicate_membership {
    __kind: 'abdicate_membership'
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_vote_threshold | TechnicalCommitteeCall_set_release_coordinator | TechnicalCommitteeCall_set_expires_after | TechnicalCommitteeCall_vote_or_propose | TechnicalCommitteeCall_vote

/**
 *  Change the vote threshold the determines the winning proposal.
 *  For e.g., for a simple majority use (1, 2) which represents the in-equation ">= 1/2".
 * 
 *  # Arguments
 *  * `n` - Numerator of the fraction representing vote threshold.
 *  * `d` - Denominator of the fraction representing vote threshold.
 */
export interface TechnicalCommitteeCall_set_vote_threshold {
    __kind: 'set_vote_threshold'
    n: number
    d: number
}

/**
 *  Changes the release coordinator.
 * 
 *  # Arguments
 *  * `id` - The DID of the new release coordinator.
 * 
 *  # Errors
 *  * `NotAMember`, If the new coordinator `id` is not part of the committee.
 */
export interface TechnicalCommitteeCall_set_release_coordinator {
    __kind: 'set_release_coordinator'
    id: Uint8Array
}

/**
 *  Changes the time after which a proposal expires.
 * 
 *  # Arguments
 *  * `expiry` - The new expiry time.
 */
export interface TechnicalCommitteeCall_set_expires_after {
    __kind: 'set_expires_after'
    expiry: MaybeBlock
}

/**
 *  Proposes to the committee that `call` should be executed in its name.
 *  Alternatively, if the hash of `call` has already been recorded, i.e., already proposed,
 *  then this call counts as a vote, i.e., as if `vote_by_hash` was called.
 * 
 *  # Weight
 * 
 *  The weight of this dispatchable is that of `call` as well as the complexity
 *  for recording the vote itself.
 * 
 *  # Arguments
 *  * `approve` - is this an approving vote?
 *    If the proposal doesn't exist, passing `false` will result in error `FirstVoteReject`.
 *  * `call` - the call to propose for execution.
 * 
 *  # Errors
 *  * `FirstVoteReject`, if `call` hasn't been proposed and `approve == false`.
 *  * `NotAMember`, if the `origin` is not a member of this committee.
 */
export interface TechnicalCommitteeCall_vote_or_propose {
    __kind: 'vote_or_propose'
    approve: boolean
    call: Type_145
}

/**
 *  Votes `approve`ingly (or not, if `false`)
 *  on an existing `proposal` given by its hash, `index`.
 * 
 *  # Arguments
 *  * `proposal` - A hash of the proposal to be voted on.
 *  * `index` - The proposal index.
 *  * `approve` - If `true` than this is a `for` vote, and `against` otherwise.
 * 
 *  # Errors
 *  * `NotAMember`, if the `origin` is not a member of this committee.
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_set_active_members_limit | TechnicalCommitteeMembershipCall_disable_member | TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_swap_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_abdicate_membership

/**
 *  Change this group's limit for how many concurrent active members they may be.
 * 
 *  # Arguments
 *  * `limit` - the number of active members there may be concurrently.
 */
export interface TechnicalCommitteeMembershipCall_set_active_members_limit {
    __kind: 'set_active_members_limit'
    limit: number
}

/**
 *  Disables a member at specific moment.
 * 
 *  Please note that if member is already revoked (a "valid member"), its revocation
 *  time-stamp will be updated.
 * 
 *  Any disabled member should NOT allow to act like an active member of the group. For
 *  instance, a disabled CDD member should NOT be able to generate a CDD claim. However any
 *  generated claim issued before `at` would be considered as a valid one.
 * 
 *  If you want to invalidate any generated claim, you should use `Self::remove_member`.
 * 
 *  # Arguments
 *  * `at` - Revocation time-stamp.
 *  * `who` - Target member of the group.
 *  * `expiry` - Time-stamp when `who` is removed from CDD. As soon as it is expired, the
 *  generated claims will be "invalid" as `who` is not considered a member of the group.
 */
export interface TechnicalCommitteeMembershipCall_disable_member {
    __kind: 'disable_member'
    who: Uint8Array
    expiry: (bigint | undefined)
    at: (bigint | undefined)
}

/**
 *  Adds a member `who` to the group. May only be called from `AddOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `AddOrigin` or root
 *  * `who` - IdentityId to be added to the group.
 */
export interface TechnicalCommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 *  Removes a member `who` from the set. May only be called from `RemoveOrigin` or root.
 * 
 *  Any claim previously generated by this member is not valid as a group claim. For
 *  instance, if a CDD member group generated a claim for a target identity and then it is
 *  removed, that claim will be invalid.  In case you want to keep the validity of generated
 *  claims, you have to use `Self::disable_member` function
 * 
 *  # Arguments
 *  * `origin` - Origin representing `RemoveOrigin` or root
 *  * `who` - IdentityId to be removed from the group.
 */
export interface TechnicalCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 *  Swaps out one member `remove` for another member `add`.
 * 
 *  May only be called from `SwapOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `SwapOrigin` or root
 *  * `remove` - IdentityId to be removed from the group.
 *  * `add` - IdentityId to be added in place of `remove`.
 */
export interface TechnicalCommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 *  Changes the membership to a new set, disregarding the existing membership.
 *  May only be called from `ResetOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `ResetOrigin` or root
 *  * `members` - New set of identities
 */
export interface TechnicalCommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 *  Allows the calling member to *unilaterally quit* without this being subject to a GC
 *  vote.
 * 
 *  # Arguments
 *  * `origin` - Member of committee who wants to quit.
 * 
 *  # Error
 * 
 *  * Only primary key can abdicate.
 *  * Last member of a group cannot abdicate.
 */
export interface TechnicalCommitteeMembershipCall_abdicate_membership {
    __kind: 'abdicate_membership'
}

export type UpgradeCommitteeCall = UpgradeCommitteeCall_set_vote_threshold | UpgradeCommitteeCall_set_release_coordinator | UpgradeCommitteeCall_set_expires_after | UpgradeCommitteeCall_vote_or_propose | UpgradeCommitteeCall_vote

/**
 *  Change the vote threshold the determines the winning proposal.
 *  For e.g., for a simple majority use (1, 2) which represents the in-equation ">= 1/2".
 * 
 *  # Arguments
 *  * `n` - Numerator of the fraction representing vote threshold.
 *  * `d` - Denominator of the fraction representing vote threshold.
 */
export interface UpgradeCommitteeCall_set_vote_threshold {
    __kind: 'set_vote_threshold'
    n: number
    d: number
}

/**
 *  Changes the release coordinator.
 * 
 *  # Arguments
 *  * `id` - The DID of the new release coordinator.
 * 
 *  # Errors
 *  * `NotAMember`, If the new coordinator `id` is not part of the committee.
 */
export interface UpgradeCommitteeCall_set_release_coordinator {
    __kind: 'set_release_coordinator'
    id: Uint8Array
}

/**
 *  Changes the time after which a proposal expires.
 * 
 *  # Arguments
 *  * `expiry` - The new expiry time.
 */
export interface UpgradeCommitteeCall_set_expires_after {
    __kind: 'set_expires_after'
    expiry: MaybeBlock
}

/**
 *  Proposes to the committee that `call` should be executed in its name.
 *  Alternatively, if the hash of `call` has already been recorded, i.e., already proposed,
 *  then this call counts as a vote, i.e., as if `vote_by_hash` was called.
 * 
 *  # Weight
 * 
 *  The weight of this dispatchable is that of `call` as well as the complexity
 *  for recording the vote itself.
 * 
 *  # Arguments
 *  * `approve` - is this an approving vote?
 *    If the proposal doesn't exist, passing `false` will result in error `FirstVoteReject`.
 *  * `call` - the call to propose for execution.
 * 
 *  # Errors
 *  * `FirstVoteReject`, if `call` hasn't been proposed and `approve == false`.
 *  * `NotAMember`, if the `origin` is not a member of this committee.
 */
export interface UpgradeCommitteeCall_vote_or_propose {
    __kind: 'vote_or_propose'
    approve: boolean
    call: Type_145
}

/**
 *  Votes `approve`ingly (or not, if `false`)
 *  on an existing `proposal` given by its hash, `index`.
 * 
 *  # Arguments
 *  * `proposal` - A hash of the proposal to be voted on.
 *  * `index` - The proposal index.
 *  * `approve` - If `true` than this is a `for` vote, and `against` otherwise.
 * 
 *  # Errors
 *  * `NotAMember`, if the `origin` is not a member of this committee.
 */
export interface UpgradeCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

export type UpgradeCommitteeMembershipCall = UpgradeCommitteeMembershipCall_set_active_members_limit | UpgradeCommitteeMembershipCall_disable_member | UpgradeCommitteeMembershipCall_add_member | UpgradeCommitteeMembershipCall_remove_member | UpgradeCommitteeMembershipCall_swap_member | UpgradeCommitteeMembershipCall_reset_members | UpgradeCommitteeMembershipCall_abdicate_membership

/**
 *  Change this group's limit for how many concurrent active members they may be.
 * 
 *  # Arguments
 *  * `limit` - the number of active members there may be concurrently.
 */
export interface UpgradeCommitteeMembershipCall_set_active_members_limit {
    __kind: 'set_active_members_limit'
    limit: number
}

/**
 *  Disables a member at specific moment.
 * 
 *  Please note that if member is already revoked (a "valid member"), its revocation
 *  time-stamp will be updated.
 * 
 *  Any disabled member should NOT allow to act like an active member of the group. For
 *  instance, a disabled CDD member should NOT be able to generate a CDD claim. However any
 *  generated claim issued before `at` would be considered as a valid one.
 * 
 *  If you want to invalidate any generated claim, you should use `Self::remove_member`.
 * 
 *  # Arguments
 *  * `at` - Revocation time-stamp.
 *  * `who` - Target member of the group.
 *  * `expiry` - Time-stamp when `who` is removed from CDD. As soon as it is expired, the
 *  generated claims will be "invalid" as `who` is not considered a member of the group.
 */
export interface UpgradeCommitteeMembershipCall_disable_member {
    __kind: 'disable_member'
    who: Uint8Array
    expiry: (bigint | undefined)
    at: (bigint | undefined)
}

/**
 *  Adds a member `who` to the group. May only be called from `AddOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `AddOrigin` or root
 *  * `who` - IdentityId to be added to the group.
 */
export interface UpgradeCommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 *  Removes a member `who` from the set. May only be called from `RemoveOrigin` or root.
 * 
 *  Any claim previously generated by this member is not valid as a group claim. For
 *  instance, if a CDD member group generated a claim for a target identity and then it is
 *  removed, that claim will be invalid.  In case you want to keep the validity of generated
 *  claims, you have to use `Self::disable_member` function
 * 
 *  # Arguments
 *  * `origin` - Origin representing `RemoveOrigin` or root
 *  * `who` - IdentityId to be removed from the group.
 */
export interface UpgradeCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 *  Swaps out one member `remove` for another member `add`.
 * 
 *  May only be called from `SwapOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `SwapOrigin` or root
 *  * `remove` - IdentityId to be removed from the group.
 *  * `add` - IdentityId to be added in place of `remove`.
 */
export interface UpgradeCommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 *  Changes the membership to a new set, disregarding the existing membership.
 *  May only be called from `ResetOrigin` or root.
 * 
 *  # Arguments
 *  * `origin` - Origin representing `ResetOrigin` or root
 *  * `members` - New set of identities
 */
export interface UpgradeCommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 *  Allows the calling member to *unilaterally quit* without this being subject to a GC
 *  vote.
 * 
 *  # Arguments
 *  * `origin` - Member of committee who wants to quit.
 * 
 *  # Error
 * 
 *  * Only primary key can abdicate.
 *  * Last member of a group cannot abdicate.
 */
export interface UpgradeCommitteeMembershipCall_abdicate_membership {
    __kind: 'abdicate_membership'
}

export type MultiSigCall = MultiSigCall_create_multisig | MultiSigCall_create_or_approve_proposal_as_identity | MultiSigCall_create_or_approve_proposal_as_key | MultiSigCall_create_proposal_as_identity | MultiSigCall_create_proposal_as_key | MultiSigCall_approve_as_identity | MultiSigCall_approve_as_key | MultiSigCall_reject_as_identity | MultiSigCall_reject_as_key | MultiSigCall_accept_multisig_signer_as_identity | MultiSigCall_accept_multisig_signer_as_key | MultiSigCall_add_multisig_signer | MultiSigCall_remove_multisig_signer | MultiSigCall_add_multisig_signers_via_creator | MultiSigCall_remove_multisig_signers_via_creator | MultiSigCall_change_sigs_required | MultiSigCall_make_multisig_signer | MultiSigCall_make_multisig_primary | MultiSigCall_execute_scheduled_proposal

/**
 *  Creates a multisig
 * 
 *  # Arguments
 *  * `signers` - Signers of the multisig (They need to accept authorization before they are actually added).
 *  * `sigs_required` - Number of sigs required to process a multi-sig tx.
 */
export interface MultiSigCall_create_multisig {
    __kind: 'create_multisig'
    signers: Signatory[]
    sigsRequired: bigint
}

/**
 *  Creates a multisig proposal if it hasn't been created or approves it if it has.
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal` - Proposal to be voted on.
 *  * `expiry` - Optional proposal expiry time.
 *  * `auto_close` - Close proposal on receiving enough reject votes.
 *  If this is 1 out of `m` multisig, the proposal will be immediately executed.
 */
export interface MultiSigCall_create_or_approve_proposal_as_identity {
    __kind: 'create_or_approve_proposal_as_identity'
    multisig: Uint8Array
    proposal: Proposal
    expiry: (bigint | undefined)
    autoClose: boolean
}

/**
 *  Creates a multisig proposal if it hasn't been created or approves it if it has.
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal` - Proposal to be voted on.
 *  * `expiry` - Optional proposal expiry time.
 *  * `auto_close` - Close proposal on receiving enough reject votes.
 *  If this is 1 out of `m` multisig, the proposal will be immediately executed.
 */
export interface MultiSigCall_create_or_approve_proposal_as_key {
    __kind: 'create_or_approve_proposal_as_key'
    multisig: Uint8Array
    proposal: Proposal
    expiry: (bigint | undefined)
    autoClose: boolean
}

/**
 *  Creates a multisig proposal
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal` - Proposal to be voted on.
 *  * `expiry` - Optional proposal expiry time.
 *  * `auto_close` - Close proposal on receiving enough reject votes.
 *  If this is 1 out of `m` multisig, the proposal will be immediately executed.
 */
export interface MultiSigCall_create_proposal_as_identity {
    __kind: 'create_proposal_as_identity'
    multisig: Uint8Array
    proposal: Proposal
    expiry: (bigint | undefined)
    autoClose: boolean
}

/**
 *  Creates a multisig proposal
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal` - Proposal to be voted on.
 *  * `expiry` - Optional proposal expiry time.
 *  * `auto_close` - Close proposal on receiving enough reject votes.
 *  If this is 1 out of `m` multisig, the proposal will be immediately executed.
 */
export interface MultiSigCall_create_proposal_as_key {
    __kind: 'create_proposal_as_key'
    multisig: Uint8Array
    proposal: Proposal
    expiry: (bigint | undefined)
    autoClose: boolean
}

/**
 *  Approves a multisig proposal using the caller's identity.
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal_id` - Proposal id to approve.
 *  If quorum is reached, the proposal will be immediately executed.
 */
export interface MultiSigCall_approve_as_identity {
    __kind: 'approve_as_identity'
    multisig: Uint8Array
    proposalId: bigint
}

/**
 *  Approves a multisig proposal using the caller's secondary key (`AccountId`).
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal_id` - Proposal id to approve.
 *  If quorum is reached, the proposal will be immediately executed.
 */
export interface MultiSigCall_approve_as_key {
    __kind: 'approve_as_key'
    multisig: Uint8Array
    proposalId: bigint
}

/**
 *  Rejects a multisig proposal using the caller's identity.
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal_id` - Proposal id to reject.
 *  If quorum is reached, the proposal will be immediately executed.
 */
export interface MultiSigCall_reject_as_identity {
    __kind: 'reject_as_identity'
    multisig: Uint8Array
    proposalId: bigint
}

/**
 *  Rejects a multisig proposal using the caller's secondary key (`AccountId`).
 * 
 *  # Arguments
 *  * `multisig` - MultiSig address.
 *  * `proposal_id` - Proposal id to reject.
 *  If quorum is reached, the proposal will be immediately executed.
 */
export interface MultiSigCall_reject_as_key {
    __kind: 'reject_as_key'
    multisig: Uint8Array
    proposalId: bigint
}

/**
 *  Accepts a multisig signer authorization given to signer's identity.
 * 
 *  # Arguments
 *  * `auth_id` - Auth id of the authorization.
 */
export interface MultiSigCall_accept_multisig_signer_as_identity {
    __kind: 'accept_multisig_signer_as_identity'
    authId: bigint
}

/**
 *  Accepts a multisig signer authorization given to signer's key (AccountId).
 * 
 *  # Arguments
 *  * `auth_id` - Auth id of the authorization.
 */
export interface MultiSigCall_accept_multisig_signer_as_key {
    __kind: 'accept_multisig_signer_as_key'
    authId: bigint
}

/**
 *  Adds a signer to the multisig. This must be called by the multisig itself.
 * 
 *  # Arguments
 *  * `signer` - Signatory to add.
 */
export interface MultiSigCall_add_multisig_signer {
    __kind: 'add_multisig_signer'
    signer: Signatory
}

/**
 *  Removes a signer from the multisig. This must be called by the multisig itself.
 * 
 *  # Arguments
 *  * `signer` - Signatory to remove.
 */
export interface MultiSigCall_remove_multisig_signer {
    __kind: 'remove_multisig_signer'
    signer: Signatory
}

/**
 *  Adds a signer to the multisig. This must be called by the creator identity of the
 *  multisig.
 * 
 *  # Arguments
 *  * `multisig` - Address of the multi sig
 *  * `signers` - Signatories to add.
 * 
 *  # Weight
 *  `900_000_000 + 3_000_000 * signers.len()`
 */
export interface MultiSigCall_add_multisig_signers_via_creator {
    __kind: 'add_multisig_signers_via_creator'
    multisig: Uint8Array
    signers: Signatory[]
}

/**
 *  Removes a signer from the multisig.
 *  This must be called by the creator identity of the multisig.
 * 
 *  # Arguments
 *  * `multisig` - Address of the multisig.
 *  * `signers` - Signatories to remove.
 * 
 *  # Weight
 *  `900_000_000 + 3_000_000 * signers.len()`
 */
export interface MultiSigCall_remove_multisig_signers_via_creator {
    __kind: 'remove_multisig_signers_via_creator'
    multisig: Uint8Array
    signers: Signatory[]
}

/**
 *  Changes the number of signatures required by a multisig. This must be called by the
 *  multisig itself.
 * 
 *  # Arguments
 *  * `sigs_required` - New number of required signatures.
 */
export interface MultiSigCall_change_sigs_required {
    __kind: 'change_sigs_required'
    sigsRequired: bigint
}

/**
 *  Adds a multisig as a signer of current did if the current did is the creator of the
 *  multisig.
 * 
 *  # Arguments
 *  * `multisig` - multi sig address
 */
export interface MultiSigCall_make_multisig_signer {
    __kind: 'make_multisig_signer'
    multisig: Uint8Array
}

/**
 *  Adds a multisig as the primary key of the current did if the current DID is the creator
 *  of the multisig.
 * 
 *  # Arguments
 *  * `multi_sig` - multi sig address
 */
export interface MultiSigCall_make_multisig_primary {
    __kind: 'make_multisig_primary'
    multisig: Uint8Array
    optionalCddAuthId: (bigint | undefined)
}

/**
 *  Root callable extrinsic, used as an internal call for executing scheduled multisig proposal.
 */
export interface MultiSigCall_execute_scheduled_proposal {
    __kind: 'execute_scheduled_proposal'
    multisig: Uint8Array
    proposalId: bigint
    multisigDid: Uint8Array
    proposalWeight: bigint
}

export type BridgeCall = BridgeCall_change_controller | BridgeCall_change_admin | BridgeCall_change_timelock | BridgeCall_freeze | BridgeCall_unfreeze | BridgeCall_change_bridge_limit | BridgeCall_change_bridge_exempted | BridgeCall_force_handle_bridge_tx | BridgeCall_batch_propose_bridge_tx | BridgeCall_propose_bridge_tx | BridgeCall_handle_bridge_tx | BridgeCall_freeze_txs | BridgeCall_unfreeze_txs | BridgeCall_handle_scheduled_bridge_tx | BridgeCall_add_freeze_admin | BridgeCall_remove_freeze_admin | BridgeCall_remove_txs

/**
 *  Changes the controller account as admin.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_change_controller {
    __kind: 'change_controller'
    controller: Uint8Array
}

/**
 *  Changes the bridge admin key.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_change_admin {
    __kind: 'change_admin'
    admin: Uint8Array
}

/**
 *  Changes the timelock period.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_change_timelock {
    __kind: 'change_timelock'
    timelock: number
}

/**
 *  Freezes transaction handling in the bridge module if it is not already frozen. When the
 *  bridge is frozen, attempted transactions get postponed instead of getting handled.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_freeze {
    __kind: 'freeze'
}

/**
 *  Unfreezes transaction handling in the bridge module if it is frozen.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_unfreeze {
    __kind: 'unfreeze'
}

/**
 *  Changes the bridge limits.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 *  - `DivisionByZero` if `duration` is zero.
 */
export interface BridgeCall_change_bridge_limit {
    __kind: 'change_bridge_limit'
    amount: bigint
    duration: number
}

/**
 *  Changes the bridge limit exempted list.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_change_bridge_exempted {
    __kind: 'change_bridge_exempted'
    exempted: [Uint8Array, boolean][]
}

/**
 *  Forces handling a transaction by bypassing the bridge limit and timelock.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 *  - `NoValidCdd` if `bridge_tx.recipient` does not have a valid CDD claim.
 */
export interface BridgeCall_force_handle_bridge_tx {
    __kind: 'force_handle_bridge_tx'
    bridgeTx: BridgeTx
}

/**
 *  Proposes a vector of bridge transactions. The vector is processed until the first
 *  proposal which causes an error, in which case the error is returned and the rest of
 *  proposals are not processed.
 * 
 *  ## Errors
 *  - `ControllerNotSet` if `Controllers` was not set.
 * 
 *  # Weight
 *  `500_000_000 + 7_000_000 * bridge_txs.len()`
 */
export interface BridgeCall_batch_propose_bridge_tx {
    __kind: 'batch_propose_bridge_tx'
    bridgeTxs: BridgeTx[]
}

/**
 *  Proposes a bridge transaction, which amounts to making a multisig proposal for the
 *  bridge transaction if the transaction is new or approving an existing proposal if the
 *  transaction has already been proposed.
 * 
 *  ## Errors
 *  - `ControllerNotSet` if `Controllers` was not set.
 */
export interface BridgeCall_propose_bridge_tx {
    __kind: 'propose_bridge_tx'
    bridgeTx: BridgeTx
}

/**
 *  Handles an approved bridge transaction proposal.
 * 
 *  ## Errors
 *  - `BadCaller` if `origin` is not `Self::controller` or  `Self::admin`.
 *  - `TimelockedTx` if the transaction status is `Timelocked`.
 *  - `ProposalAlreadyHandled` if the transaction status is `Handled`.
 */
export interface BridgeCall_handle_bridge_tx {
    __kind: 'handle_bridge_tx'
    bridgeTx: BridgeTx
}

/**
 *  Freezes given bridge transactions.
 *  If any bridge txn is already handled then this function will just ignore it and process next one.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 * 
 *  # Weight
 *  `400_000_000 + 2_000_000 * bridge_txs.len()`
 */
export interface BridgeCall_freeze_txs {
    __kind: 'freeze_txs'
    bridgeTxs: BridgeTx[]
}

/**
 *  Unfreezes given bridge transactions.
 *  If any bridge txn is already handled then this function will just ignore it and process next one.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 * 
 *  # Weight
 *  `400_000_000 + 7_000_000 * bridge_txs.len()`
 */
export interface BridgeCall_unfreeze_txs {
    __kind: 'unfreeze_txs'
    bridgeTxs: BridgeTx[]
}

/**
 *  Root callable extrinsic, used as an internal call to handle a scheduled timelocked bridge transaction.
 * 
 *  # Errors
 *  - `BadOrigin` if `origin` is not root.
 *  - `ProposalAlreadyHandled` if transaction status is `Handled`.
 *  - `FrozenTx` if transaction status is `Frozen`.
 */
export interface BridgeCall_handle_scheduled_bridge_tx {
    __kind: 'handle_scheduled_bridge_tx'
    bridgeTx: BridgeTx
}

/**
 *  Add a freeze admin.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_add_freeze_admin {
    __kind: 'add_freeze_admin'
    freezeAdmin: Uint8Array
}

/**
 *  Remove a freeze admin.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 */
export interface BridgeCall_remove_freeze_admin {
    __kind: 'remove_freeze_admin'
    freezeAdmin: Uint8Array
}

/**
 *  Remove given bridge transactions.
 * 
 *  ## Errors
 *  - `BadAdmin` if `origin` is not `Self::admin()` account.
 *  - `NotFrozen` if a tx in `bridge_txs` is not frozen.
 */
export interface BridgeCall_remove_txs {
    __kind: 'remove_txs'
    bridgeTxs: BridgeTx[]
}

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_add_permissioned_validator | StakingCall_remove_permissioned_validator | StakingCall_validate_cdd_expiry_nominators | StakingCall_set_commission_cap | StakingCall_set_min_bond_threshold | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_set_history_depth | StakingCall_reap_stash | StakingCall_submit_election_solution | StakingCall_submit_election_solution_unsigned | StakingCall_payout_stakers_by_system | StakingCall_change_slashing_allowed_for | StakingCall_update_permissioned_validator_intended_count

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
 *  ------------------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
 *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: LookupSource
    value: bigint
    payee: RewardDestination
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
 *  that can be added.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
 *  it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  - One DB entry.
 *  ------------
 *  DB Weight:
 *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
 *  - Write: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *  period ends. If this leaves an amount actively bonded less than
 *  T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *  the funds out of management ready for transfer.
 * 
 *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 *  to be called first to remove some of the chunks (if possible).
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Unbonded`.
 * 
 *  See also [`Call::withdraw_unbonded`].
 * 
 *  # <weight>
 *  - Independent of the arguments. Limited but potentially exploitable complexity.
 *  - Contains a limited number of reads.
 *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
 *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
 *    The only way to clean the aforementioned storage item is also user-controlled via
 *    `withdraw_unbonded`.
 *  - One DB entry.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, \[Origin Account\]
 *  - Write: Locks, Ledger, \[Origin Account\]
 *  </weight>
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Withdrawn`.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
 *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
 *   indirectly user-controlled. See [`unbond`] for more detail.
 *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
 *  - Writes are limited to the `origin` account key.
 *  ---------------
 *  Complexity O(S) where S is the number of slashing spans to remove
 *  Update:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
 *  - Writes: [Origin Account], Locks, Ledger
 *  Kill:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
 *    Account], Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
 *    [Origin Account], Locks
 *  - Writes Each: SpanSlash * S
 *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 *  Declare the desire to validate for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  -----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Era Election Status, Ledger
 *  - Write: Nominators, Validators
 *  # </weight>
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 *  Declare the desire to nominate `targets` for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era. This can only be called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `targets` (N)
 *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
 *  - Both the reads and writes follow a similar pattern.
 *  ---------
 *  Weight: O(N)
 *  where N is the number of targets
 *  DB Weight:
 *  - Reads: Era Election Status, Ledger, Current Era
 *  - Writes: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: LookupSource[]
}

/**
 *  Declare no desire to either validate or nominate.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  --------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger
 *  - Write: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 *  (Re-)set the payment target for a controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ---------
 *  - Weight: O(1)
 *  - DB Weight:
 *      - Read: Ledger
 *      - Write: Payee
 *  # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 *  (Re-)set the controller of a stash.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
 *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
 *  # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: LookupSource
}

/**
 *  Sets the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  Write: Validator Count
 *  # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 *  Increments the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 *  Scale up the ideal number of validators by a factor.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
}

/**
 *  Governance committee on 2/3 rds majority can introduce a new potential identity
 *  to the pool of permissioned entities who can run validators. Staking module uses `PermissionedIdentity`
 *  to ensure validators have completed KYB compliance and considers them for validation.
 * 
 *  # Arguments
 *  * origin Required origin for adding a potential validator.
 *  * identity Validator's IdentityId.
 *  * intended_count No. of validators given identity intends to run.
 */
export interface StakingCall_add_permissioned_validator {
    __kind: 'add_permissioned_validator'
    identity: Uint8Array
    intendedCount: (number | undefined)
}

/**
 *  Remove an identity from the pool of (wannabe) validator identities. Effects are known in the next session.
 *  Staking module checks `PermissionedIdentity` to ensure validators have
 *  completed KYB compliance
 * 
 *  # Arguments
 *  * origin Required origin for removing a potential validator.
 *  * identity Validator's IdentityId.
 */
export interface StakingCall_remove_permissioned_validator {
    __kind: 'remove_permissioned_validator'
    identity: Uint8Array
}

/**
 *  Validate the nominators CDD expiry time.
 * 
 *  If an account from a given set of address is nominating then
 *  check the CDD expiry time of it and if it is expired
 *  then the account should be unbonded and removed from the nominating process.
 * 
 *  #<weight>
 *  - Depends on passed list of AccountId.
 *  - Depends on the no. of claim issuers an accountId has for the CDD expiry.
 *  #</weight>
 */
export interface StakingCall_validate_cdd_expiry_nominators {
    __kind: 'validate_cdd_expiry_nominators'
    targets: Uint8Array[]
}

/**
 *  Changes commission rate which applies to all validators. Only Governance
 *  committee is allowed to change this value.
 * 
 *  # Arguments
 *  * `new_cap` the new commission cap.
 */
export interface StakingCall_set_commission_cap {
    __kind: 'set_commission_cap'
    newCap: number
}

/**
 *  Changes min bond value to be used in validate(). Only Governance
 *  committee is allowed to change this value.
 * 
 *  # Arguments
 *  * `new_value` the new minimum
 */
export interface StakingCall_set_min_bond_threshold {
    __kind: 'set_min_bond_threshold'
    newValue: bigint
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 *  Set the validators who cannot be slashed (if any).
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - O(V)
 *  - Write: Invulnerables
 *  # </weight>
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  O(S) where S is the number of slashing spans to be removed
 *  Reads: Bonded, Slashing Spans, Account, Locks
 *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
 *  Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 *  Cancel enactment of a deferred slash.
 * 
 *  Can be called by the `T::SlashCancelOrigin`.
 * 
 *  Parameters: era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  Complexity: O(U + S)
 *  with U unapplied slashes weighted with U=1000
 *  and S is the number of slash indices to be canceled.
 *  - Read: Unapplied Slashes
 *  - Write: Unapplied Slashes
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 *  Pay out all the stakers behind a single validator for a single era.
 * 
 *  - `validator_stash` is the stash account of the validator. Their nominators, up to
 *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 *  - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 *  The origin of this call must be _Signed_. Any account can call this function, even if
 *  it is not one of the stakers.
 * 
 *  This can only be called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
 *  - Contains a limited number of reads and writes.
 *  -----------
 *  N is the Number of payouts for the validator (including the validator)
 *  Weight:
 *  - Reward Destination Staked: O(N)
 *  - Reward Destination Controller (Creating): O(N)
 *  DB Weight:
 *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
 *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
 *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
 *  - Write Each: System Account, Locks, Ledger (3 items)
 *  # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
}

/**
 *  Rebond a portion of the stash scheduled to be unlocked.
 * 
 *  The dispatch origin must be signed by the controller, and it can be only called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: O(L), where L is unlocking chunks
 *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
 *  - Storage changes: Can't increase storage, only decrease it.
 *  ---------------
 *  - DB Weight:
 *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
 *      - Writes: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 *  Set `HistoryDepth` value. This function will delete any history information
 *  when `HistoryDepth` is reduced.
 * 
 *  Parameters:
 *  - `new_history_depth`: The new history depth you would like to set.
 *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
 *     This should report all the storage items that will be deleted by clearing old
 *     era history. Needed to report an accurate weight for the dispatch. Trusted by
 *     `Root` to report an accurate number.
 * 
 *  Origin must be root.
 * 
 *  # <weight>
 *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
 *  - Weight: O(E)
 *  - DB Weight:
 *      - Reads: Current Era, History Depth
 *      - Writes: History Depth
 *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
 *  # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
}

/**
 *  Remove all data structure concerning a staker/stash once its balance is at the minimum.
 *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
 *  and the target `stash` must have no funds left beyond the ED.
 * 
 *  This can be called from any origin.
 * 
 *  - `stash`: The stash account to reap. Its balance must be zero.
 * 
 *  # <weight>
 *  Complexity: O(S) where S is the number of slashing spans on the account.
 *  DB Weight:
 *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
 *  - Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 *  Submit an election result to the chain. If the solution:
 * 
 *  1. is valid.
 *  2. has a better score than a potentially existing solution on chain.
 * 
 *  then, it will be _put_ on chain.
 * 
 *  A solution consists of two pieces of data:
 * 
 *  1. `winners`: a flat vector of all the winners of the round.
 *  2. `assignments`: the compact version of an assignment vector that encodes the edge
 *     weights.
 * 
 *  Both of which may be computed using _phragmen_, or any other algorithm.
 * 
 *  Additionally, the submitter must provide:
 * 
 *  - The `score` that they claim their solution has.
 * 
 *  Both validators and nominators will be represented by indices in the solution. The
 *  indices should respect the corresponding types ([`ValidatorIndex`] and
 *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
 *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
 *  solution to be rejected. These two storage items are set during the election window and
 *  may be used to determine the indices.
 * 
 *  A solution is valid if:
 * 
 *  0. It is submitted when [`EraElectionStatus`] is `Open`.
 *  1. Its claimed score is equal to the score computed on-chain.
 *  2. Presents the correct number of winners.
 *  3. All indexes must be value according to the snapshot vectors. All edge values must
 *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
 *     or billion).
 *  4. For each edge, all targets are actually nominated by the voter.
 *  5. Has correct self-votes.
 * 
 *  A solutions score is consisted of 3 parameters:
 * 
 *  1. `min { support.total }` for each support of a winner. This value should be maximized.
 *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
 *  3. `sum { support.total^2 }` for each support of a winner. This value should be
 *     minimized (to ensure less variance)
 * 
 *  # <weight>
 *  The transaction is assumed to be the longest path, a better solution.
 *    - Initial solution is almost the same.
 *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
 *  # </weight>
 */
export interface StakingCall_submit_election_solution {
    __kind: 'submit_election_solution'
    winners: number[]
    compact: CompactAssignments
    score: bigint[]
    era: number
    size: ElectionSize
}

/**
 *  Unsigned version of `submit_election_solution`.
 * 
 *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
 *  from the local node to be included. In other words, only the block author can include a
 *  transaction in the block.
 * 
 *  # <weight>
 *  See [`submit_election_solution`].
 *  # </weight>
 */
export interface StakingCall_submit_election_solution_unsigned {
    __kind: 'submit_election_solution_unsigned'
    winners: number[]
    compact: CompactAssignments
    score: bigint[]
    era: number
    size: ElectionSize
}

/**
 *  System version of `payout_stakers()`. Only be called by the root origin.
 */
export interface StakingCall_payout_stakers_by_system {
    __kind: 'payout_stakers_by_system'
    validatorStash: Uint8Array
    era: number
}

/**
 *  Switch slashing status on the basis of given `SlashingSwitch`. Can only be called by root.
 * 
 *  # Arguments
 *  * origin - AccountId of root.
 *  * slashing_switch - Switch used to set the targets for slashing.
 */
export interface StakingCall_change_slashing_allowed_for {
    __kind: 'change_slashing_allowed_for'
    slashingSwitch: SlashingSwitch
}

/**
 *  Update the intended validator count for a given DID.
 * 
 *  # Arguments
 *  * origin which must be the required origin for adding a potential validator.
 *  * identity to add as a validator.
 *  * new_intended_count New value of intended count.
 */
export interface StakingCall_update_permissioned_validator_intended_count {
    __kind: 'update_permissioned_validator_intended_count'
    identity: Uint8Array
    newIntendedCount: number
}

export type OffencesCall = never

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

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
    keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]
    proof: Uint8Array
}

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
 *  - DbWrites per key id: `KeyOwnder`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

export type AuthorityDiscoveryCall = never

export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Note that the current authority set of the GRANDPA finality gadget has
 *  stalled. This will trigger a forced authority set change at the beginning
 *  of the next session, to be enacted `delay` blocks after that. The delay
 *  should be high enough to safely assume that the block signalling the
 *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 *  will start the new authority set using the given finalized block as base.
 *  Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 *  # <weight>
 *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
 *    and E is length of `heartbeat.network_state.external_address`
 *    - `O(K)`: decoding of length `K`
 *    - `O(E)`: decoding/encoding of length `E`
 *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *    `ReceivedHeartbeats`
 *  - DbWrites: `ReceivedHeartbeats`
 *  # </weight>
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Uint8Array
}

export type RandomnessCollectiveFlipCall = never

export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

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
    call: Type_145
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
    call: Type_145
    weight: bigint
}

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
    call: Type_145
}

export type AssetCall = AssetCall_register_ticker | AssetCall_accept_ticker_transfer | AssetCall_accept_asset_ownership_transfer | AssetCall_create_asset | AssetCall_freeze | AssetCall_unfreeze | AssetCall_rename_asset | AssetCall_issue | AssetCall_redeem | AssetCall_make_divisible | AssetCall_add_documents | AssetCall_remove_documents | AssetCall_set_funding_round | AssetCall_update_identifiers | AssetCall_claim_classic_ticker | AssetCall_reserve_classic_ticker | AssetCall_controller_transfer | AssetCall_register_custom_asset_type

/**
 *  Registers a new ticker or extends validity of an existing ticker.
 *  NB: Ticker validity does not get carry forward when renewing ticker.
 * 
 *  # Arguments
 *  * `origin` It contains the secondary key of the caller (i.e. who signed the transaction to execute this function).
 *  * `ticker` ticker to register.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_register_ticker {
    __kind: 'register_ticker'
    ticker: Uint8Array
}

/**
 *  Accepts a ticker transfer.
 * 
 *  Consumes the authorization `auth_id` (see `pallet_identity::consume_auth`).
 *  NB: To reject the transfer, call remove auth function in identity module.
 * 
 *  # Arguments
 *  * `origin` It contains the secondary key of the caller (i.e. who signed the transaction to execute this function).
 *  * `auth_id` Authorization ID of ticker transfer authorization.
 * 
 *  ## Errors
 *  - `AuthorizationError::BadType` if `auth_id` is not a valid ticket transfer authorization.
 * 
 */
export interface AssetCall_accept_ticker_transfer {
    __kind: 'accept_ticker_transfer'
    authId: bigint
}

/**
 *  This function is used to accept a token ownership transfer.
 *  NB: To reject the transfer, call remove auth function in identity module.
 * 
 *  # Arguments
 *  * `origin` It contains the secondary key of the caller (i.e. who signed the transaction to execute this function).
 *  * `auth_id` Authorization ID of the token ownership transfer authorization.
 */
export interface AssetCall_accept_asset_ownership_transfer {
    __kind: 'accept_asset_ownership_transfer'
    authId: bigint
}

/**
 *  Initializes a new security token, with the initiating account as its owner.
 *  The total supply will initially be zero. To mint tokens, use `issue`.
 * 
 *  # Arguments
 *  * `origin` - contains the secondary key of the caller (i.e. who signed the transaction to execute this function).
 *  * `name` - the name of the token.
 *  * `ticker` - the ticker symbol of the token.
 *  * `divisible` - a boolean to identify the divisibility status of the token.
 *  * `asset_type` - the asset type.
 *  * `identifiers` - a vector of asset identifiers.
 *  * `funding_round` - name of the funding round.
 *  * `disable_iu` - whether or not investor uniqueness enforcement should be disabled.
 *    This cannot be changed after creating the asset.
 * 
 *  ## Errors
 *  - `InvalidAssetIdentifier` if any of `identifiers` are invalid.
 *  - `MaxLengthOfAssetNameExceeded` if `name`'s length exceeds `T::AssetNameMaxLength`.
 *  - `FundingRoundNameMaxLengthExceeded` if the name of the funding round is longer that
 *  `T::FundingRoundNameMaxLength`.
 *  - `AssetAlreadyCreated` if asset was already created.
 *  - `TickerTooLong` if `ticker`'s length is greater than `config.max_ticker_length` chain
 *  parameter.
 *  - `TickerNotAscii` if `ticker` is not yet registered, and contains non-ascii printable characters (from code 32 to 126) or any character after first occurrence of `\0`.
 * 
 *  ## Permissions
 *  * Portfolio
 */
export interface AssetCall_create_asset {
    __kind: 'create_asset'
    name: string
    ticker: Uint8Array
    divisible: boolean
    assetType: AssetType
    identifiers: AssetIdentifier[]
    fundingRound: (string | undefined)
    disableIu: boolean
}

/**
 *  Freezes transfers and minting of a given token.
 * 
 *  # Arguments
 *  * `origin` - the secondary key of the sender.
 *  * `ticker` - the ticker of the token.
 * 
 *  ## Errors
 *  - `AlreadyFrozen` if `ticker` is already frozen.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_freeze {
    __kind: 'freeze'
    ticker: Uint8Array
}

/**
 *  Unfreezes transfers and minting of a given token.
 * 
 *  # Arguments
 *  * `origin` - the secondary key of the sender.
 *  * `ticker` - the ticker of the frozen token.
 * 
 *  ## Errors
 *  - `NotFrozen` if `ticker` is not frozen yet.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_unfreeze {
    __kind: 'unfreeze'
    ticker: Uint8Array
}

/**
 *  Renames a given token.
 * 
 *  # Arguments
 *  * `origin` - the secondary key of the sender.
 *  * `ticker` - the ticker of the token.
 *  * `name` - the new name of the token.
 * 
 *  ## Errors
 *  - `MaxLengthOfAssetNameExceeded` if length of `name` is greater than
 *  `T::AssetNameMaxLength`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_rename_asset {
    __kind: 'rename_asset'
    ticker: Uint8Array
    name: string
}

/**
 *  Issue, or mint, new tokens to the caller,
 *  which must be an authorized external agent.
 * 
 *  # Arguments
 *  * `origin` is a signer that has permissions to act as an agent of `ticker`.
 *  * `ticker` of the token.
 *  * `amount` of tokens that get issued.
 * 
 *  # Permissions
 *  * Asset
 *  * Portfolio
 */
export interface AssetCall_issue {
    __kind: 'issue'
    ticker: Uint8Array
    amount: bigint
}

/**
 *  Redeems existing tokens by reducing the balance of the caller's default portfolio and the total supply of the token
 * 
 *  # Arguments
 *  * `origin` is a signer that has permissions to act as an agent of `ticker`.
 *  * `ticker` Ticker of the token.
 *  * `value` Amount of tokens to redeem.
 * 
 *  # Errors
 *  - `Unauthorized` If called by someone without the appropriate external agent permissions
 *  - `InvalidGranularity` If the amount is not divisible by 10^6 for non-divisible tokens
 *  - `InsufficientPortfolioBalance` If the caller's default portfolio doesn't have enough free balance
 * 
 *  # Permissions
 *  * Asset
 *  * Portfolio
 */
export interface AssetCall_redeem {
    __kind: 'redeem'
    ticker: Uint8Array
    value: bigint
}

/**
 *  Makes an indivisible token divisible.
 * 
 *  # Arguments
 *  * `origin` is a signer that has permissions to act as an agent of `ticker`.
 *  * `ticker` Ticker of the token.
 * 
 *  ## Errors
 *  - `AssetAlreadyDivisible` if `ticker` is already divisible.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_make_divisible {
    __kind: 'make_divisible'
    ticker: Uint8Array
}

/**
 *  Add documents for a given token.
 * 
 *  # Arguments
 *  * `origin` is a signer that has permissions to act as an agent of `ticker`.
 *  * `ticker` Ticker of the token.
 *  * `docs` Documents to be attached to `ticker`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_add_documents {
    __kind: 'add_documents'
    docs: Document[]
    ticker: Uint8Array
}

/**
 *  Remove documents for a given token.
 * 
 *  # Arguments
 *  * `origin` is a signer that has permissions to act as an agent of `ticker`.
 *  * `ticker` Ticker of the token.
 *  * `ids` Documents ids to be removed from `ticker`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_remove_documents {
    __kind: 'remove_documents'
    ids: number[]
    ticker: Uint8Array
}

/**
 *  Sets the name of the current funding round.
 * 
 *  # Arguments
 *  * `origin` - a signer that has permissions to act as an agent of `ticker`.
 *  * `ticker` - the ticker of the token.
 *  * `name` - the desired name of the current funding round.
 * 
 *  ## Errors
 *  - `FundingRoundNameMaxLengthExceeded` if length of `name` is greater than
 *  `T::FundingRoundNameMaxLength`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_set_funding_round {
    __kind: 'set_funding_round'
    ticker: Uint8Array
    name: string
}

/**
 *  Updates the asset identifiers.
 * 
 *  # Arguments
 *  * `origin` - a signer that has permissions to act as an agent of `ticker`.
 *  * `ticker` - the ticker of the token.
 *  * `identifiers` - the asset identifiers to be updated in the form of a vector of pairs
 *     of `IdentifierType` and `AssetIdentifier` value.
 * 
 *  ## Errors
 *  - `InvalidAssetIdentifier` if `identifiers` contains any invalid identifier.
 * 
 *  # Permissions
 *  * Asset
 */
export interface AssetCall_update_identifiers {
    __kind: 'update_identifiers'
    ticker: Uint8Array
    identifiers: AssetIdentifier[]
}

/**
 *  Claim a systematically reserved Polymath Classic (PMC) `ticker`
 *  and transfer it to the `origin`'s identity.
 * 
 *  To verify that the `origin` is in control of the Ethereum account on the books,
 *  an `ethereum_signature` containing the `origin`'s DID as the message
 *  must be provided by that Ethereum account.
 * 
 *  # Errors
 *  - `NoSuchClassicTicker` if this is not a systematically reserved PMC ticker.
 *  - `TickerAlreadyRegistered` if the ticker was already registered, e.g., by `origin`.
 *  - `TickerRegistrationExpired` if the ticker's registration has expired.
 *  - `BadOrigin` if not signed.
 *  - `InvalidEthereumSignature` if the `ethereum_signature` is not valid.
 *  - `NotAnOwner` if the ethereum account is not the owner of the PMC ticker.
 */
export interface AssetCall_claim_classic_ticker {
    __kind: 'claim_classic_ticker'
    ticker: Uint8Array
    ethereumSignature: Uint8Array
}

/**
 *  Reserve a Polymath Classic (PMC) ticker.
 *  Must be called by root, and assigns the ticker to a systematic DID.
 * 
 *  # Arguments
 *  * `origin` which must be root.
 *  * `classic_ticker_import` specification for the PMC ticker.
 *  * `contract_did` to reserve the ticker to if `classic_ticker_import.is_contract` holds.
 *  * `config` to use for expiry and ticker length.
 * 
 *  # Errors
 *  * `AssetAlreadyCreated` if `classic_ticker_import.ticker` was created as an asset.
 *  * `TickerTooLong` if the `config` considers the `classic_ticker_import.ticker` too long.
 *  * `TickerAlreadyRegistered` if `classic_ticker_import.ticker` was already registered.
 */
export interface AssetCall_reserve_classic_ticker {
    __kind: 'reserve_classic_ticker'
    classicTickerImport: ClassicTickerImport
    contractDid: Uint8Array
    config: TickerRegistrationConfig
}

/**
 *  Forces a transfer of token from `from_portfolio` to the caller's default portfolio.
 * 
 *  # Arguments
 *  * `origin` Must be an external agent with appropriate permissions for a given ticker.
 *  * `ticker` Ticker symbol of the asset.
 *  * `value`  Amount of tokens need to force transfer.
 *  * `from_portfolio` From whom portfolio tokens gets transferred.
 */
export interface AssetCall_controller_transfer {
    __kind: 'controller_transfer'
    ticker: Uint8Array
    value: bigint
    fromPortfolio: PortfolioId
}

/**
 *  Registers a custom asset type.
 * 
 *  The provided `ty` will be bound to an ID in storage.
 *  The ID can then be used in `AssetType::Custom`.
 *  Should the `ty` already exist in storage, no second ID is assigned to it.
 * 
 *  # Arguments
 *  * `origin` who called the extrinsic.
 *  * `ty` contains the string representation of the asset type.
 */
export interface AssetCall_register_custom_asset_type {
    __kind: 'register_custom_asset_type'
    ty: Uint8Array
}

export type CapitalDistributionCall = CapitalDistributionCall_distribute | CapitalDistributionCall_claim | CapitalDistributionCall_push_benefit | CapitalDistributionCall_reclaim | CapitalDistributionCall_remove_distribution

/**
 *  Start and attach a capital distribution, to the CA identified by `ca_id`,
 *  with `amount` funds in `currency` withdrawn from `portfolio` belonging to `origin`'s DID.
 * 
 *  The distribution will commence at `payment_at` and expire at `expires_at`,
 *  if provided, or if `None`, then there's no expiry.
 * 
 *  The funds will be locked in `portfolio` from when `distribute` is called.
 *  When there's no expiry, some funds may be locked indefinitely in `portfolio`,
 *  due to claimants not withdrawing or no benefits being pushed to them.
 *  For indivisible currencies, unlocked amounts, of less than one whole unit,
 *  will not be transferable from `portfolio`.
 *  However, if we imagine that users `Alice` and `Bob` both are entitled to 1.5 units,
 *  and only receive `1` units each, then `0.5 + 0.5 = 1` units are left in `portfolio`,
 *  which is now transferrable.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the CA to start a capital distribution for.
 *  - `portfolio` specifies the portfolio number of the agent to distribute `amount` from.
 *  - `currency` to withdraw and distribute from the `portfolio`.
 *  - `per_share` amount of `currency` to withdraw and distribute.
 *     Specified as a per-million, i.e. `1 / 10^6`th of one `currency` token.
 *  - `amount` of `currency` to withdraw and distribute at most.
 *  - `payment_at` specifies when benefits may first be pushed or claimed.
 *  - `expires_at` specifies, if provided, when remaining benefits are forfeit
 *     and may be reclaimed by `origin`.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `DistributingAsset` if `ca_id.ticker == currency`.
 *  - `ExpiryBeforePayment` if `expires_at.unwrap() <= payment_at`.
 *  - `NoSuchCA` if `ca_id` does not identify an existing CA.
 *  - `NoRecordDate` if CA has no record date.
 *  - `RecordDateAfterStart` if CA's record date > payment_at.
 *  - `UnauthorizedCustodian` if the caller is not the custodian of `portfolio`.
 *  - `InsufficientPortfolioBalance` if `portfolio` has less than `amount` of `currency`.
 *  - `InsufficientBalance` if the protocol fee couldn't be charged.
 *  - `CANotBenefit` if the CA is not of kind PredictableBenefit/UnpredictableBenefit
 * 
 *  # Permissions
 *  * Asset
 *  * Portfolio
 */
export interface CapitalDistributionCall_distribute {
    __kind: 'distribute'
    caId: CAId
    portfolio: (bigint | undefined)
    currency: Uint8Array
    perShare: bigint
    amount: bigint
    paymentAt: bigint
    expiresAt: (bigint | undefined)
}

/**
 *  Claim a benefit of the capital distribution attached to `ca_id`.
 * 
 *  Taxes are withheld as specified by the CA.
 *  Post-tax earnings are then transferred to the default portfolio of the `origin`'s DID.
 * 
 *  All benefits are rounded by truncation, down to first integer below.
 *  Moreover, before post-tax earnings, in indivisible currencies are transferred,
 *  they are rounded down to a whole unit.
 * 
 *  ## Arguments
 *  - `origin` which must be a holder of the asset and eligible for the distribution.
 *  - `ca_id` identifies the CA to start a capital distribution for.
 * 
 *  # Errors
 *  - `HolderAlreadyPaid` if `origin`'s DID has already received its benefit.
 *  - `NoSuchDistribution` if there's no capital distribution for `ca_id`.
 *  - `CannotClaimBeforeStart` if `now < payment_at`.
 *  - `CannotClaimAfterExpiry` if `now > expiry_at.unwrap()`.
 *  - `NoSuchCA` if `ca_id` does not identify an existing CA.
 *  - `NotTargetedByCA` if the CA does not target `origin`'s DID.
 *  - `BalanceAmountProductOverflowed` if `ba = balance * amount` would overflow.
 *  - `BalanceAmountProductSupplyDivisionFailed` if `ba * supply` would overflow.
 *  - Other errors can occur if the compliance manager rejects the transfer.
 */
export interface CapitalDistributionCall_claim {
    __kind: 'claim'
    caId: CAId
}

/**
 *  Push benefit of an ongoing distribution to the given `holder`.
 * 
 *  Taxes are withheld as specified by the CA.
 *  Post-tax earnings are then transferred to the default portfolio of the `origin`'s DID.
 * 
 *  All benefits are rounded by truncation, down to first integer below.
 *  Moreover, before post-tax earnings, in indivisible currencies are transferred,
 *  they are rounded down to a whole unit.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the CA with a capital distributions to push benefits for.
 *  - `holder` to push benefits to.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchDistribution` if there's no capital distribution for `ca_id`.
 *  - `CannotClaimBeforeStart` if `now < payment_at`.
 *  - `CannotClaimAfterExpiry` if `now > expiry_at.unwrap()`.
 *  - `NoSuchCA` if `ca_id` does not identify an existing CA.
 *  - `NotTargetedByCA` if the CA does not target `holder`.
 *  - `BalanceAmountProductOverflowed` if `ba = balance * amount` would overflow.
 *  - `BalanceAmountProductSupplyDivisionFailed` if `ba * supply` would overflow.
 *  - Other errors can occur if the compliance manager rejects the transfer.
 */
export interface CapitalDistributionCall_push_benefit {
    __kind: 'push_benefit'
    caId: CAId
    holder: Uint8Array
}

/**
 *  Assuming a distribution has expired,
 *  unlock the remaining amount in the distributor portfolio.
 * 
 *  ## Arguments
 *  - `origin` which must be the creator of the capital distribution tied to `ca_id`.
 *  - `ca_id` identifies the CA with a capital distribution to reclaim for.
 * 
 *  # Errors
 *  - `NoSuchDistribution` if there's no capital distribution for `ca_id`.
 *  - `AlreadyReclaimed` if this function has already been called successfully.
 *  - `NotExpired` if `now < expiry`.
 */
export interface CapitalDistributionCall_reclaim {
    __kind: 'reclaim'
    caId: CAId
}

/**
 *  Removes a distribution that hasn't started yet,
 *  unlocking the full amount in the distributor portfolio.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the CA with a not-yet-started capital distribution to remove.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchDistribution` if there's no capital distribution for `ca_id`.
 *  - `DistributionStarted` if `payment_at <= now`.
 */
export interface CapitalDistributionCall_remove_distribution {
    __kind: 'remove_distribution'
    caId: CAId
}

export type CheckpointCall = CheckpointCall_create_checkpoint | CheckpointCall_set_schedules_max_complexity | CheckpointCall_create_schedule | CheckpointCall_remove_schedule

/**
 *  Creates a single checkpoint at the current time.
 * 
 *  # Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ticker`.
 *  - `ticker` to create the checkpoint for.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if the DID of `origin` isn't a permissioned agent for `ticker`.
 *  - `CounterOverflow` if the total checkpoint counter would overflow.
 */
export interface CheckpointCall_create_checkpoint {
    __kind: 'create_checkpoint'
    ticker: Uint8Array
}

/**
 *  Sets the max complexity of a schedule set for an arbitrary ticker to `max_complexity`.
 *  The new maximum is not enforced retroactively,
 *  and only applies once new schedules are made.
 * 
 *  Must be called as a PIP (requires "root").
 * 
 *  # Arguments
 *  - `origin` is the root origin.
 *  - `max_complexity` allowed for an arbitrary ticker's schedule set.
 */
export interface CheckpointCall_set_schedules_max_complexity {
    __kind: 'set_schedules_max_complexity'
    maxComplexity: bigint
}

/**
 *  Creates a schedule generating checkpoints
 *  in the future at either a fixed time or at intervals.
 * 
 *  The schedule starts out with `strong_ref_count(schedule_id) <- 0`.
 * 
 *  # Arguments
 *  - `origin` is a signer that has permissions to act as owner of `ticker`.
 *  - `ticker` to create the schedule for.
 *  - `schedule` that will generate checkpoints.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if the DID of `origin` isn't a permissioned agent for `ticker`.
 *  - `ScheduleDurationTooShort` if the schedule duration is too short.
 *  - `InsufficientAccountBalance` if the protocol fee could not be charged.
 *  - `CounterOverflow` if the schedule ID or total checkpoint counters would overflow.
 *  - `FailedToComputeNextCheckpoint` if the next checkpoint for `schedule` is in the past.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CheckpointCall_create_schedule {
    __kind: 'create_schedule'
    ticker: Uint8Array
    schedule: ScheduleSpec
}

/**
 *  Removes the checkpoint schedule of an asset identified by `id`.
 * 
 *  # Arguments
 *  - `origin` is a signer that has permissions to act as owner of `ticker`.
 *  - `ticker` to remove the schedule from.
 *  - `id` of the schedule, when it was created by `created_schedule`.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if the DID of `origin` isn't a permissioned agent for `ticker`.
 *  - `NoCheckpointSchedule` if `id` does not identify a schedule for this `ticker`.
 *  - `ScheduleNotRemovable` if `id` exists but is not removable.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CheckpointCall_remove_schedule {
    __kind: 'remove_schedule'
    ticker: Uint8Array
    id: bigint
}

export type ComplianceManagerCall = ComplianceManagerCall_add_compliance_requirement | ComplianceManagerCall_remove_compliance_requirement | ComplianceManagerCall_replace_asset_compliance | ComplianceManagerCall_reset_asset_compliance | ComplianceManagerCall_pause_asset_compliance | ComplianceManagerCall_resume_asset_compliance | ComplianceManagerCall_add_default_trusted_claim_issuer | ComplianceManagerCall_remove_default_trusted_claim_issuer | ComplianceManagerCall_change_compliance_requirement

/**
 *  Adds a compliance requirement to an asset's compliance by ticker.
 *  If the compliance requirement is a duplicate, it does nothing.
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker
 *  * ticker - Symbol of the asset
 *  * sender_conditions - Sender transfer conditions.
 *  * receiver_conditions - Receiver transfer conditions.
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_add_compliance_requirement {
    __kind: 'add_compliance_requirement'
    ticker: Uint8Array
    senderConditions: Condition[]
    receiverConditions: Condition[]
}

/**
 *  Removes a compliance requirement from an asset's compliance.
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker
 *  * ticker - Symbol of the asset
 *  * id - Compliance requirement id which is need to be removed
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_remove_compliance_requirement {
    __kind: 'remove_compliance_requirement'
    ticker: Uint8Array
    id: number
}

/**
 *  Replaces an asset's compliance by ticker with a new compliance.
 * 
 *  Compliance requirements will be sorted (ascending by id) before
 *  replacing the current requirements.
 * 
 *  # Arguments
 *  * `ticker` - the asset ticker,
 *  * `asset_compliance - the new asset compliance.
 * 
 *  # Errors
 *  * `Unauthorized` if `origin` is not the owner of the ticker.
 *  * `DuplicateAssetCompliance` if `asset_compliance` contains multiple entries with the same `requirement_id`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_replace_asset_compliance {
    __kind: 'replace_asset_compliance'
    ticker: Uint8Array
    assetCompliance: ComplianceRequirement[]
}

/**
 *  Removes an asset's compliance
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker
 *  * ticker - Symbol of the asset
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_reset_asset_compliance {
    __kind: 'reset_asset_compliance'
    ticker: Uint8Array
}

/**
 *  Pauses the verification of conditions for `ticker` during transfers.
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker
 *  * ticker - Symbol of the asset
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_pause_asset_compliance {
    __kind: 'pause_asset_compliance'
    ticker: Uint8Array
}

/**
 *  Resumes the verification of conditions for `ticker` during transfers.
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker
 *  * ticker - Symbol of the asset
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_resume_asset_compliance {
    __kind: 'resume_asset_compliance'
    ticker: Uint8Array
}

/**
 *  Adds another default trusted claim issuer at the ticker level.
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker.
 *  * ticker - Symbol of the asset.
 *  * issuer - IdentityId of the trusted claim issuer.
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_add_default_trusted_claim_issuer {
    __kind: 'add_default_trusted_claim_issuer'
    ticker: Uint8Array
    issuer: TrustedIssuer
}

/**
 *  Removes the given `issuer` from the set of default trusted claim issuers at the ticker level.
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker.
 *  * ticker - Symbol of the asset.
 *  * issuer - IdentityId of the trusted claim issuer.
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_remove_default_trusted_claim_issuer {
    __kind: 'remove_default_trusted_claim_issuer'
    ticker: Uint8Array
    issuer: Uint8Array
}

/**
 *  Modify an existing compliance requirement of a given ticker.
 * 
 *  # Arguments
 *  * origin - Signer of the dispatchable. It should be the owner of the ticker.
 *  * ticker - Symbol of the asset.
 *  * new_req - Compliance requirement.
 * 
 *  # Permissions
 *  * Asset
 */
export interface ComplianceManagerCall_change_compliance_requirement {
    __kind: 'change_compliance_requirement'
    ticker: Uint8Array
    newReq: ComplianceRequirement
}

export type CorporateActionCall = CorporateActionCall_set_max_details_length | CorporateActionCall_set_default_targets | CorporateActionCall_set_default_withholding_tax | CorporateActionCall_set_did_withholding_tax | CorporateActionCall_initiate_corporate_action | CorporateActionCall_link_ca_doc | CorporateActionCall_remove_ca | CorporateActionCall_change_record_date

/**
 *  Set the max `length` of `details` in terms of bytes.
 *  May only be called via a PIP.
 */
export interface CorporateActionCall_set_max_details_length {
    __kind: 'set_max_details_length'
    length: number
}

/**
 *  Set the default CA `TargetIdentities` to `targets`.
 * 
 *  ## Arguments
 *  - `origin` which must be an external agent of `ticker` with relevant permissions.
 *  - `ticker` for which the default identities are changing.
 *  - `targets` the default target identities for a CA.
 * 
 *  ## Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `TooManyTargetIds` if `targets.identities.len() > T::MaxTargetIds::get()`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CorporateActionCall_set_default_targets {
    __kind: 'set_default_targets'
    ticker: Uint8Array
    targets: TargetIdentities
}

/**
 *  Set the default withholding tax for all DIDs and CAs relevant to this `ticker`.
 * 
 *  ## Arguments
 *  - `origin` which must be an external agent of `ticker` with relevant permissions.
 *  - `ticker` that the withholding tax will apply to.
 *  - `tax` that should be withheld when distributing dividends, etc.
 * 
 *  ## Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CorporateActionCall_set_default_withholding_tax {
    __kind: 'set_default_withholding_tax'
    ticker: Uint8Array
    tax: number
}

/**
 *  Set the withholding tax of `ticker` for `taxed_did` to `tax`.
 *  If `Some(tax)`, this overrides the default withholding tax of `ticker` to `tax` for `taxed_did`.
 *  Otherwise, if `None`, the default withholding tax will be used.
 * 
 *  ## Arguments
 *  - `origin` which must be an external agent of `ticker` with relevant permissions.
 *  - `ticker` that the withholding tax will apply to.
 *  - `taxed_did` that will have its withholding tax updated.
 *  - `tax` that should be withheld when distributing dividends, etc.
 * 
 *  ## Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `TooManyDidTaxes` if `Some(tax)` and adding the override would go over the limit `MaxDidWhts`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CorporateActionCall_set_did_withholding_tax {
    __kind: 'set_did_withholding_tax'
    ticker: Uint8Array
    taxedDid: Uint8Array
    tax: (number | undefined)
}

/**
 *  Initiates a CA for `ticker` of `kind` with `details` and other provided arguments.
 * 
 *  ## Arguments
 *  - `origin` which must be an external agent of `ticker` with relevant permissions.
 *  - `ticker` that the CA is made for.
 *  - `kind` of CA being initiated.
 *  - `decl_date` of CA bring initialized.
 *  - `record_date`, if any, to calculate the impact of this CA.
 *     If provided, this results in a scheduled balance snapshot ("checkpoint") at the date.
 *  - `details` of the CA in free-text form, up to a certain number of bytes in length.
 *  - `targets`, if any, which this CA is relevant/irrelevant to.
 *     Overrides, if provided, the default at the asset level (`set_default_targets`).
 *  - `default_withholding_tax`, if any, is the default withholding tax to use for this CA.
 *     Overrides, if provided, the default at the asset level (`set_default_withholding_tax`).
 *  - `withholding_tax`, if any, provides per-DID withholding tax overrides.
 *     Overrides, if provided, the default at the asset level (`set_did_withholding_tax`).
 * 
 *  # Errors
 *  - `DetailsTooLong` if `details.len()` goes beyond `max_details_length`.
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `CounterOverflow` in the unlikely event that so many CAs were created for this `ticker`,
 *    that integer overflow would have occured if instead allowed.
 *  - `TooManyDidTaxes` if `withholding_tax.unwrap().len()` would go over the limit `MaxDidWhts`.
 *  - `DuplicateDidTax` if a DID is included more than once in `wt`.
 *  - `TooManyTargetIds` if `targets.unwrap().identities.len() > T::MaxTargetIds::get()`.
 *  - `DeclDateInFuture` if the declaration date is not in the past.
 *  - When `record_date.is_some()`, other errors due to checkpoint scheduling may occur.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CorporateActionCall_initiate_corporate_action {
    __kind: 'initiate_corporate_action'
    ticker: Uint8Array
    kind: CAKind
    declDate: bigint
    recordDate: (RecordDateSpec | undefined)
    details: string
    targets: (TargetIdentities | undefined)
    defaultWithholdingTax: (number | undefined)
    withholdingTax: ([Uint8Array, number][] | undefined)
}

/**
 *  Link the given CA `id` to the given `docs`.
 *  Any previous links for the CA are removed in favor of `docs`.
 * 
 *  The workflow here is to add the documents and initiating the CA in any order desired.
 *  Once both exist, they can now be linked together.
 * 
 *  ## Arguments
 *  - `origin` which must be an external agent of `id.ticker` with relevant permissions.
 *  - `id` of the CA to associate with `docs`.
 *  - `docs` to associate with the CA with `id`.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchCA` if `id` does not identify an existing CA.
 *  - `NoSuchDoc` if any of `docs` does not identify an existing document.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CorporateActionCall_link_ca_doc {
    __kind: 'link_ca_doc'
    id: CAId
    docs: number[]
}

/**
 *  Removes the CA identified by `ca_id`.
 * 
 *  Associated data, such as document links, ballots,
 *  and capital distributions are also removed.
 * 
 *  Any schedule associated with the record date will see
 *  `strong_ref_count(schedule_id)` decremented.
 * 
 *  ## Arguments
 *  - `origin` which must be an external agent of `ca_id.ticker` with relevant permissions.
 *  - `ca_id` of the CA to remove.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchCA` if `id` does not identify an existing CA.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CorporateActionCall_remove_ca {
    __kind: 'remove_ca'
    caId: CAId
}

/**
 *  Changes the record date of the CA identified by `ca_id`.
 * 
 *  ## Arguments
 *  - `origin` which must be an external agent of `ca_id.ticker` with relevant permissions.
 *  - `ca_id` of the CA to alter.
 *  - `record_date`, if any, to calculate the impact of the CA.
 *     If provided, this results in a scheduled balance snapshot ("checkpoint") at the date.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchCA` if `id` does not identify an existing CA.
 *  - When `record_date.is_some()`, other errors due to checkpoint scheduling may occur.
 * 
 *  # Permissions
 *  * Asset
 */
export interface CorporateActionCall_change_record_date {
    __kind: 'change_record_date'
    caId: CAId
    recordDate: (RecordDateSpec | undefined)
}

export type CorporateBallotCall = CorporateBallotCall_attach_ballot | CorporateBallotCall_vote | CorporateBallotCall_change_end | CorporateBallotCall_change_meta | CorporateBallotCall_change_rcv | CorporateBallotCall_remove_ballot

/**
 *  Attach a corporate ballot to the CA identified by `ca_id`.
 * 
 *  The ballot will admit votes within `range`.
 *  The ballot's metadata is provided by `meta`,
 *  which includes the ballot title, the motions, their choices, etc.
 *  See the `BallotMeta` for more.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the CA to attach the ballot to.
 *  - `range` specifies when voting starts and ends.
 *  - `meta` specifies the ballot's metadata as aforementioned.
 *  - `rcv` specifies whether RCV is enabled for this ballot.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchCA` if `ca_id` does not identify an existing CA.
 *  - `CANotNotice` if the CA is not of the `IssuerNotice` kind.
 *  - `StartAfterEnd` if `range.start > range.end`.
 *  - `NowAfterEnd` if `now > range.end` where `now` is the current timestamp.
 *  - `NoRecordDate` if CA has no record date.
 *  - `RecordDateAfterStart` if `date > range.start` where `date` is the CA's record date.
 *  - `AlreadyExists` if there's a ballot already.
 *  - `NumberOfChoicesOverflow` if the total choice in `meta` overflows `usize`.
 *  - `TooLong` if any of the embedded strings in `meta` are too long.
 *  - `InsufficientBalance` if the protocol fee couldn't be charged.
 */
export interface CorporateBallotCall_attach_ballot {
    __kind: 'attach_ballot'
    caId: CAId
    range: BallotTimeRange
    meta: BallotMeta
    rcv: boolean
}

/**
 *  Cast `votes` in the ballot attached to the CA identified by `ca_id`.
 * 
 *  ## Arguments
 *  - `origin` which must be a permissioned signer targeted by the CA.
 *  - `ca_id` identifies the attached ballot's CA.
 *  - `votes` specifies the balances to assign to each choice in the ballot.
 *     The full voting power of `origin`'s DID may be used for each motion in the ballot.
 * 
 *  # Errors
 *  - `NoSuchBallot` if `ca_id` does not identify a ballot.
 *  - `VotingNotStarted` if the voting period hasn't commenced yet.
 *  - `VotingAlreadyEnded` if the voting period has ended.
 *  - `WrongVoteCount` if the number of choices in the ballot does not match `votes.len()`.
 *  - `NoSuchCA` if `ca_id` does not identify an existing CA.
 *  - `NotTargetedByCA` if the CA does not target `origin`'s DID.
 *  - `InsufficientVotes` if the voting power used for any motion in `votes`
 *     exceeds `origin`'s DID's voting power.
 */
export interface CorporateBallotCall_vote {
    __kind: 'vote'
    caId: CAId
    votes: BallotVote[]
}

/**
 *  Amend the end date of the ballot of the CA identified by `ca_id`.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the attached ballot's CA.
 *  - `end` specifies the new end date of the ballot.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchBallot` if `ca_id` does not identify a ballot.
 *  - `VotingAlreadyStarted` if `start >= now`, where `now` is the current time.
 *  - `StartAfterEnd` if `start > end`.
 */
export interface CorporateBallotCall_change_end {
    __kind: 'change_end'
    caId: CAId
    end: bigint
}

/**
 *  Amend the metadata (title, motions, etc.) of the ballot of the CA identified by `ca_id`.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the attached ballot's CA.
 *  - `meta` specifies the new metadata.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchBallot` if `ca_id` does not identify a ballot.
 *  - `VotingAlreadyStarted` if `start >= now`, where `now` is the current time.
 *  - `NumberOfChoicesOverflow` if the total choice in `meta` overflows `usize`.
 *  - `TooLong` if any of the embedded strings in `meta` are too long.
 */
export interface CorporateBallotCall_change_meta {
    __kind: 'change_meta'
    caId: CAId
    meta: BallotMeta
}

/**
 *  Amend RCV support for the ballot of the CA identified by `ca_id`.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the attached ballot's CA.
 *  - `rcv` specifies if RCV is to be supported or not.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchBallot` if `ca_id` does not identify a ballot.
 *  - `VotingAlreadyStarted` if `start >= now`, where `now` is the current time.
 */
export interface CorporateBallotCall_change_rcv {
    __kind: 'change_rcv'
    caId: CAId
    rcv: boolean
}

/**
 *  Remove the ballot of the CA identified by `ca_id`.
 * 
 *  ## Arguments
 *  - `origin` is a signer that has permissions to act as an agent of `ca_id.ticker`.
 *  - `ca_id` identifies the attached ballot's CA.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` is not agent-permissioned for `ticker`.
 *  - `NoSuchBallot` if `ca_id` does not identify a ballot.
 *  - `VotingAlreadyStarted` if `start >= now`, where `now` is the current time.
 */
export interface CorporateBallotCall_remove_ballot {
    __kind: 'remove_ballot'
    caId: CAId
}

export type PipsCall = PipsCall_set_prune_historical_pips | PipsCall_set_min_proposal_deposit | PipsCall_set_default_enactment_period | PipsCall_set_pending_pip_expiry | PipsCall_set_max_pip_skip_count | PipsCall_set_active_pip_limit | PipsCall_propose | PipsCall_vote | PipsCall_approve_committee_proposal | PipsCall_reject_proposal | PipsCall_prune_proposal | PipsCall_reschedule_execution | PipsCall_clear_snapshot | PipsCall_snapshot | PipsCall_enact_snapshot_results | PipsCall_execute_scheduled_pip | PipsCall_expire_scheduled_pip

/**
 *  Change whether completed PIPs are pruned.
 *  Can only be called by root.
 * 
 *  # Arguments
 *  * `prune` specifies whether completed PIPs should be pruned.
 */
export interface PipsCall_set_prune_historical_pips {
    __kind: 'set_prune_historical_pips'
    prune: boolean
}

/**
 *  Change the minimum proposal deposit amount required to start a proposal.
 *  Can only be called by root.
 * 
 *  # Arguments
 *  * `deposit` the new min deposit required to start a proposal
 */
export interface PipsCall_set_min_proposal_deposit {
    __kind: 'set_min_proposal_deposit'
    deposit: bigint
}

/**
 *  Change the default enactment period.
 *  Can only be called by root.
 * 
 *  # Arguments
 *  * `duration` the new default enactment period it takes for a scheduled PIP to be executed.
 */
export interface PipsCall_set_default_enactment_period {
    __kind: 'set_default_enactment_period'
    duration: number
}

/**
 *  Change the amount of blocks after which a pending PIP is expired.
 *  If `expiry` is `None` then PIPs never expire.
 *  Can only be called by root.
 * 
 *  # Arguments
 *  * `expiry` the block-time it takes for a still-`Pending` PIP to expire.
 */
export interface PipsCall_set_pending_pip_expiry {
    __kind: 'set_pending_pip_expiry'
    expiry: MaybeBlock
}

/**
 *  Change the maximum skip count (`max_pip_skip_count`).
 *  Can only be called by root.
 * 
 *  # Arguments
 *  * `max` skips before a PIP cannot be skipped by GC anymore.
 */
export interface PipsCall_set_max_pip_skip_count {
    __kind: 'set_max_pip_skip_count'
    max: number
}

/**
 *  Change the maximum number of active PIPs before community members cannot propose anything.
 *  Can only be called by root.
 * 
 *  # Arguments
 *  * `limit` of concurrent active PIPs.
 */
export interface PipsCall_set_active_pip_limit {
    __kind: 'set_active_pip_limit'
    limit: number
}

/**
 *  A network member creates a PIP by submitting a dispatchable which
 *  changes the network in someway. A minimum deposit is required to open a new proposal.
 * 
 *  # Arguments
 *  * `proposer` is either a signing key or committee.
 *     Used to understand whether this is a committee proposal and verified against `origin`.
 *  * `proposal` a dispatchable call
 *  * `deposit` minimum deposit value, which is ignored if `proposer` is a committee.
 *  * `url` a link to a website for proposal discussion
 */
export interface PipsCall_propose {
    __kind: 'propose'
    proposal: Proposal
    deposit: bigint
    url: (string | undefined)
    description: (string | undefined)
}

/**
 *  Vote either in favor (`aye_or_nay` == true) or against a PIP with `id`.
 *  The "convinction" or strength of the vote is given by `deposit`, which is reserved.
 * 
 *  Note that `vote` is *not* additive.
 *  That is, `vote(id, true, 50)` followed by `vote(id, true, 40)`
 *  will first reserve `50` and then refund `50 - 10`, ending up with `40` in deposit.
 *  To add atop of existing votes, you'll need `existing_deposit + addition`.
 * 
 *  # Arguments
 *  * `id`, proposal id
 *  * `aye_or_nay`, a bool representing for or against vote
 *  * `deposit`, the "conviction" with which the vote is made.
 * 
 *  # Errors
 *  * `NoSuchProposal` if `id` doesn't reference a valid PIP.
 *  * `NotFromCommunity` if proposal was made by a committee.
 *  * `IncorrectProposalState` if PIP isn't pending.
 *  * `InsufficientDeposit` if `origin` cannot reserve `deposit - old_deposit`.
 */
export interface PipsCall_vote {
    __kind: 'vote'
    id: number
    ayeOrNay: boolean
    deposit: bigint
}

/**
 *  Approves the pending committee PIP given by the `id`.
 * 
 *  # Errors
 *  * `BadOrigin` unless a GC voting majority executes this function.
 *  * `NoSuchProposal` if the PIP with `id` doesn't exist.
 *  * `IncorrectProposalState` if the proposal isn't pending.
 *  * `NotByCommittee` if the proposal isn't by a committee.
 */
export interface PipsCall_approve_committee_proposal {
    __kind: 'approve_committee_proposal'
    id: number
}

/**
 *  Rejects the PIP given by the `id`, refunding any bonded funds,
 *  assuming it hasn't been cancelled or executed.
 *  Note that proposals scheduled-for-execution can also be rejected.
 * 
 *  # Errors
 *  * `BadOrigin` unless a GC voting majority executes this function.
 *  * `NoSuchProposal` if the PIP with `id` doesn't exist.
 *  * `IncorrectProposalState` if the proposal was cancelled or executed.
 */
export interface PipsCall_reject_proposal {
    __kind: 'reject_proposal'
    id: number
}

/**
 *  Prune the PIP given by the `id`, refunding any funds not already refunded.
 *  The PIP may not be active
 * 
 *  This function is intended for storage garbage collection purposes.
 * 
 *  # Errors
 *  * `BadOrigin` unless a GC voting majority executes this function.
 *  * `NoSuchProposal` if the PIP with `id` doesn't exist.
 *  * `IncorrectProposalState` if the proposal is active.
 */
export interface PipsCall_prune_proposal {
    __kind: 'prune_proposal'
    id: number
}

/**
 *  Updates the execution schedule of the PIP given by `id`.
 * 
 *  # Arguments
 *  * `until` defines the future block where the enactment period will finished.
 *     `None` value means that enactment period is going to finish in the next block.
 * 
 *  # Errors
 *  * `RescheduleNotByReleaseCoordinator` unless triggered by release coordinator.
 *  * `IncorrectProposalState` unless the proposal was in a scheduled state.
 */
export interface PipsCall_reschedule_execution {
    __kind: 'reschedule_execution'
    id: number
    until: (number | undefined)
}

/**
 *  Clears the snapshot and emits the event `SnapshotCleared`.
 * 
 *  # Errors
 *  * `NotACommitteeMember` - triggered when a non-GC-member executes the function.
 */
export interface PipsCall_clear_snapshot {
    __kind: 'clear_snapshot'
}

/**
 *  Takes a new snapshot of the current list of active && pending PIPs.
 *  The PIPs are then sorted into a priority queue based on each PIP's weight.
 * 
 *  # Errors
 *  * `NotACommitteeMember` - triggered when a non-GC-member executes the function.
 */
export interface PipsCall_snapshot {
    __kind: 'snapshot'
}

/**
 *  Enacts `results` for the PIPs in the snapshot queue.
 *  The snapshot will be available for further enactments until it is cleared.
 * 
 *  The `results` are encoded a list of `(id, result)` where `result` is applied to `id`.
 *  Note that the snapshot priority queue is encoded with the *lowest priority first*.
 *  so `results = [(id, Approve)]` will approve `SnapshotQueue[SnapshotQueue.len() - 1]`.
 * 
 *  # Errors
 *  * `BadOrigin` - unless a GC voting majority executes this function.
 *  * `CannotSkipPip` - a given PIP has already been skipped too many times.
 *  * `SnapshotResultTooLarge` - on len(results) > len(snapshot_queue).
 *  * `SnapshotIdMismatch` - if:
 *    ```text
 *     ∃ (i ∈ 0..SnapshotQueue.len()).
 *       results[i].0 ≠ SnapshotQueue[SnapshotQueue.len() - i].id
 *    ```
 *     This is protects against clearing queue while GC is voting.
 */
export interface PipsCall_enact_snapshot_results {
    __kind: 'enact_snapshot_results'
    results: [number, SnapshotResult][]
}

/**
 *  Internal dispatchable that handles execution of a PIP.
 */
export interface PipsCall_execute_scheduled_pip {
    __kind: 'execute_scheduled_pip'
    id: number
}

/**
 *  Internal dispatchable that handles expiration of a PIP.
 */
export interface PipsCall_expire_scheduled_pip {
    __kind: 'expire_scheduled_pip'
    did: Uint8Array
    id: number
}

export type PortfolioCall = PortfolioCall_create_portfolio | PortfolioCall_delete_portfolio | PortfolioCall_move_portfolio_funds | PortfolioCall_rename_portfolio | PortfolioCall_quit_portfolio_custody | PortfolioCall_accept_portfolio_custody

/**
 *  Creates a portfolio with the given `name`.
 */
export interface PortfolioCall_create_portfolio {
    __kind: 'create_portfolio'
    name: string
}

/**
 *  Deletes a user portfolio. A portfolio can be deleted only if it has no funds.
 * 
 *  # Errors
 *  * `PortfolioDoesNotExist` if `num` doesn't reference a valid portfolio.
 *  * `PortfolioNotEmpty` if the portfolio still holds any asset
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface PortfolioCall_delete_portfolio {
    __kind: 'delete_portfolio'
    num: bigint
}

/**
 *  Moves a token amount from one portfolio of an identity to another portfolio of the same
 *  identity. Must be called by the custodian of the sender.
 *  Funds from deleted portfolios can also be recovered via this method.
 * 
 *  A short memo can be added to to each token amount moved.
 * 
 *  # Errors
 *  * `PortfolioDoesNotExist` if one or both of the portfolios reference an invalid portfolio.
 *  * `destination_is_same_portfolio` if both sender and receiver portfolio are the same
 *  * `DifferentIdentityPortfolios` if the sender and receiver portfolios belong to different identities
 *  * `UnauthorizedCustodian` if the caller is not the custodian of the from portfolio
 *  * `InsufficientPortfolioBalance` if the sender does not have enough free balance
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface PortfolioCall_move_portfolio_funds {
    __kind: 'move_portfolio_funds'
    from: PortfolioId
    to: PortfolioId
    items: MovePortfolioItem[]
}

/**
 *  Renames a non-default portfolio.
 * 
 *  # Errors
 *  * `PortfolioDoesNotExist` if `num` doesn't reference a valid portfolio.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface PortfolioCall_rename_portfolio {
    __kind: 'rename_portfolio'
    num: bigint
    toName: string
}

/**
 *  When called by the custodian of `portfolio_id`,
 *  allows returning the custody of the portfolio to the portfolio owner unilaterally.
 * 
 *  # Errors
 *  * `UnauthorizedCustodian` if the caller is not the current custodian of `portfolio_id`.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface PortfolioCall_quit_portfolio_custody {
    __kind: 'quit_portfolio_custody'
    pid: PortfolioId
}

export interface PortfolioCall_accept_portfolio_custody {
    __kind: 'accept_portfolio_custody'
    authId: bigint
}

export type ProtocolFeeCall = ProtocolFeeCall_change_coefficient | ProtocolFeeCall_change_base_fee

/**
 *  Changes the fee coefficient for the root origin.
 * 
 *  # Errors
 *  * `BadOrigin` - Only root allowed.
 */
export interface ProtocolFeeCall_change_coefficient {
    __kind: 'change_coefficient'
    coefficient: [number, number]
}

/**
 *  Changes the a base fee for the root origin.
 * 
 *  # Errors
 *  * `BadOrigin` - Only root allowed.
 */
export interface ProtocolFeeCall_change_base_fee {
    __kind: 'change_base_fee'
    op: ProtocolOp
    baseFee: bigint
}

export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

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
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_145
}

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
    when: number
    index: number
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
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_145
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
    id: Uint8Array
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
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_145
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_145
}

export type SettlementCall = SettlementCall_create_venue | SettlementCall_update_venue_details | SettlementCall_update_venue_type | SettlementCall_add_instruction | SettlementCall_add_and_affirm_instruction | SettlementCall_affirm_instruction | SettlementCall_withdraw_affirmation | SettlementCall_reject_instruction | SettlementCall_affirm_with_receipts | SettlementCall_claim_receipt | SettlementCall_unclaim_receipt | SettlementCall_set_venue_filtering | SettlementCall_allow_venues | SettlementCall_disallow_venues | SettlementCall_change_receipt_validity | SettlementCall_execute_scheduled_instruction | SettlementCall_reschedule_instruction

/**
 *  Registers a new venue.
 * 
 *  * `details` - Extra details about a venue
 *  * `signers` - Array of signers that are allowed to sign receipts for this venue
 *  * `typ` - Type of venue being created
 */
export interface SettlementCall_create_venue {
    __kind: 'create_venue'
    details: string
    signers: Uint8Array[]
    typ: VenueType
}

/**
 *  Edit a venue's details.
 * 
 *  * `id` specifies the ID of the venue to edit.
 *  * `details` specifies the updated venue details.
 */
export interface SettlementCall_update_venue_details {
    __kind: 'update_venue_details'
    id: bigint
    details: string
}

/**
 *  Edit a venue's type.
 * 
 *  * `id` specifies the ID of the venue to edit.
 *  * `type` specifies the new type of the venue.
 */
export interface SettlementCall_update_venue_type {
    __kind: 'update_venue_type'
    id: bigint
    typ: VenueType
}

/**
 *  Adds a new instruction.
 * 
 *  # Arguments
 *  * `venue_id` - ID of the venue this instruction belongs to.
 *  * `settlement_type` - Defines if the instruction should be settled
 *     in the next block after receiving all affirmations or waiting till a specific block.
 *  * `trade_date` - Optional date from which people can interact with this instruction.
 *  * `value_date` - Optional date after which the instruction should be settled (not enforced)
 *  * `legs` - Legs included in this instruction.
 * 
 *  # Weight
 *  `950_000_000 + 1_000_000 * legs.len()`
 */
export interface SettlementCall_add_instruction {
    __kind: 'add_instruction'
    venueId: bigint
    settlementType: SettlementType
    tradeDate: (bigint | undefined)
    valueDate: (bigint | undefined)
    legs: Leg[]
}

/**
 *  Adds and affirms a new instruction.
 * 
 *  # Arguments
 *  * `venue_id` - ID of the venue this instruction belongs to.
 *  * `settlement_type` - Defines if the instruction should be settled
 *     in the next block after receiving all affirmations or waiting till a specific block.
 *  * `trade_date` - Optional date from which people can interact with this instruction.
 *  * `value_date` - Optional date after which the instruction should be settled (not enforced)
 *  * `legs` - Legs included in this instruction.
 *  * `portfolios` - Portfolios that the sender controls and wants to use in this affirmations.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface SettlementCall_add_and_affirm_instruction {
    __kind: 'add_and_affirm_instruction'
    venueId: bigint
    settlementType: SettlementType
    tradeDate: (bigint | undefined)
    valueDate: (bigint | undefined)
    legs: Leg[]
    portfolios: PortfolioId[]
}

/**
 *  Provide affirmation to an existing instruction.
 * 
 *  # Arguments
 *  * `id` - Instruction id to affirm.
 *  * `portfolios` - Portfolios that the sender controls and wants to affirm this instruction.
 *  * `max_legs_count` - Number of legs that need to be  affirmed.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface SettlementCall_affirm_instruction {
    __kind: 'affirm_instruction'
    id: bigint
    portfolios: PortfolioId[]
    maxLegsCount: number
}

/**
 *  Withdraw an affirmation for a given instruction.
 * 
 *  # Arguments
 *  * `id` - Instruction id for that affirmation get withdrawn.
 *  * `portfolios` - Portfolios that the sender controls and wants to withdraw affirmation.
 *  * `max_legs_count` - Number of legs that need to be un-affirmed.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface SettlementCall_withdraw_affirmation {
    __kind: 'withdraw_affirmation'
    id: bigint
    portfolios: PortfolioId[]
    maxLegsCount: number
}

/**
 *  Rejects an existing instruction.
 * 
 *  # Arguments
 *  * `id` - Instruction id to reject.
 *  * `portfolio` - Portfolio to reject the instruction.
 *  * `num_of_legs` - Number of legs in the instruction.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface SettlementCall_reject_instruction {
    __kind: 'reject_instruction'
    id: bigint
    portfolio: PortfolioId
    numOfLegs: number
}

/**
 *  Accepts an instruction and claims a signed receipt.
 * 
 *  # Arguments
 *  * `id` - Target instruction id.
 *  * `leg_id` - Target leg id for the receipt
 *  * `receipt_uid` - Receipt ID generated by the signer.
 *  * `signer` - Signer of the receipt.
 *  * `signed_data` - Signed receipt.
 *  * `portfolios` - Portfolios that the sender controls and wants to accept this instruction with
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface SettlementCall_affirm_with_receipts {
    __kind: 'affirm_with_receipts'
    id: bigint
    receiptDetails: ReceiptDetails[]
    portfolios: PortfolioId[]
    maxLegsCount: number
}

/**
 *  Claims a signed receipt.
 * 
 *  # Arguments
 *  * `id` - Target instruction id for the receipt.
 *  * `leg_id` - Target leg id for the receipt
 *  * `receipt_uid` - Receipt ID generated by the signer.
 *  * `signer` - Signer of the receipt.
 *  * `signed_data` - Signed receipt.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface SettlementCall_claim_receipt {
    __kind: 'claim_receipt'
    id: bigint
    receiptDetails: ReceiptDetails
}

/**
 *  Unclaims a previously claimed receipt.
 * 
 *  # Arguments
 *  * `instruction_id` - Target instruction id for the receipt.
 *  * `leg_id` - Target leg id for the receipt
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface SettlementCall_unclaim_receipt {
    __kind: 'unclaim_receipt'
    instructionId: bigint
    legId: bigint
}

/**
 *  Enables or disabled venue filtering for a token.
 * 
 *  # Arguments
 *  * `ticker` - Ticker of the token in question.
 *  * `enabled` - Boolean that decides if the filtering should be enabled.
 * 
 *  # Permissions
 *  * Asset
 */
export interface SettlementCall_set_venue_filtering {
    __kind: 'set_venue_filtering'
    ticker: Uint8Array
    enabled: boolean
}

/**
 *  Allows additional venues to create instructions involving an asset.
 * 
 *  * `ticker` - Ticker of the token in question.
 *  * `venues` - Array of venues that are allowed to create instructions for the token in question.
 * 
 *  # Permissions
 *  * Asset
 */
export interface SettlementCall_allow_venues {
    __kind: 'allow_venues'
    ticker: Uint8Array
    venues: bigint[]
}

/**
 *  Revokes permission given to venues for creating instructions involving a particular asset.
 * 
 *  * `ticker` - Ticker of the token in question.
 *  * `venues` - Array of venues that are no longer allowed to create instructions for the token in question.
 * 
 *  # Permissions
 *  * Asset
 */
export interface SettlementCall_disallow_venues {
    __kind: 'disallow_venues'
    ticker: Uint8Array
    venues: bigint[]
}

/**
 *  Marks a receipt issued by the caller as claimed or not claimed.
 *  This allows the receipt issuer to invalidate an already issued receipt or revalidate an already claimed receipt.
 * 
 *  * `receipt_uid` - Unique ID of the receipt.
 *  * `validity` - New validity of the receipt.
 */
export interface SettlementCall_change_receipt_validity {
    __kind: 'change_receipt_validity'
    receiptUid: bigint
    validity: boolean
}

/**
 *  Root callable extrinsic, used as an internal call to execute a scheduled settlement instruction.
 */
export interface SettlementCall_execute_scheduled_instruction {
    __kind: 'execute_scheduled_instruction'
    id: bigint
    legsCount: number
}

/**
 *  Reschedules a failed instruction.
 * 
 *  # Arguments
 *  * `id` - Target instruction id to reschedule.
 * 
 *  # Permissions
 *  * Portfolio
 * 
 *  # Errors
 *  * `InstructionNotFailed` - Instruction not in a failed state or does not exist.
 */
export interface SettlementCall_reschedule_instruction {
    __kind: 'reschedule_instruction'
    id: bigint
}

export type StatisticsCall = StatisticsCall_add_transfer_manager | StatisticsCall_remove_transfer_manager | StatisticsCall_add_exempted_entities | StatisticsCall_remove_exempted_entities

/**
 *  Adds a new transfer manager.
 * 
 *  # Arguments
 *  * `origin` It contains the secondary key of the caller (i.e who signed the transaction to execute this function).
 *  * `ticker` ticker for which the transfer managers are being updated.
 *  * `new_transfer_manager` Transfer manager being added.
 * 
 *  # Errors
 *  * `Unauthorized` if `origin` is not the owner of the ticker.
 *  * `DuplicateTransferManager` if `new_transfer_manager` is already enabled for the ticker.
 *  * `TransferManagersLimitReached` if the `ticker` already has max TMs attached
 * 
 *  # Permissions
 *  * Asset
 */
export interface StatisticsCall_add_transfer_manager {
    __kind: 'add_transfer_manager'
    ticker: Uint8Array
    newTransferManager: TransferManager
}

/**
 *  Removes a transfer manager.
 * 
 *  # Arguments
 *  * `origin` It contains the secondary key of the caller (i.e who signed the transaction to execute this function).
 *  * `ticker` ticker for which the transfer managers are being updated.
 *  * `transfer_manager` Transfer manager being removed.
 * 
 *  # Errors
 *  * `Unauthorized` if `origin` is not the owner of the ticker.
 *  * `TransferManagerMissing` if `asset_compliance` contains multiple entries with the same `requirement_id`.
 * 
 *  # Permissions
 *  * Asset
 */
export interface StatisticsCall_remove_transfer_manager {
    __kind: 'remove_transfer_manager'
    ticker: Uint8Array
    transferManager: TransferManager
}

/**
 *  Exempt entities from a transfer manager
 * 
 *  # Arguments
 *  * `origin` It contains the secondary key of the caller (i.e who signed the transaction to execute this function).
 *  * `ticker` ticker for which the exemption list is being modified.
 *  * `transfer_manager` Transfer manager for which the exemption list is being modified.
 *  * `exempted_entities` ScopeIds for which the exemption list is being modified.
 * 
 *  # Errors
 *  * `Unauthorized` if `origin` is not the owner of the ticker.
 * 
 *  # Permissions
 *  * Asset
 */
export interface StatisticsCall_add_exempted_entities {
    __kind: 'add_exempted_entities'
    ticker: Uint8Array
    transferManager: TransferManager
    exemptedEntities: Uint8Array[]
}

/**
 *  remove entities from exemption list of a transfer manager
 * 
 *  # Arguments
 *  * `origin` It contains the secondary key of the caller (i.e who signed the transaction to execute this function).
 *  * `ticker` ticker for which the exemption list is being modified.
 *  * `transfer_manager` Transfer manager for which the exemption list is being modified.
 *  * `scope_ids` ScopeIds for which the exemption list is being modified.
 * 
 *  # Errors
 *  * `Unauthorized` if `origin` is not the owner of the ticker.
 * 
 *  # Permissions
 *  * Asset
 */
export interface StatisticsCall_remove_exempted_entities {
    __kind: 'remove_exempted_entities'
    ticker: Uint8Array
    transferManager: TransferManager
    entities: Uint8Array[]
}

export type StoCall = StoCall_create_fundraiser | StoCall_invest | StoCall_freeze_fundraiser | StoCall_unfreeze_fundraiser | StoCall_modify_fundraiser_window | StoCall_stop

/**
 *  Create a new fundraiser.
 * 
 *  * `offering_portfolio` - Portfolio containing the `offering_asset`.
 *  * `offering_asset` - Asset being offered.
 *  * `raising_portfolio` - Portfolio containing the `raising_asset`.
 *  * `raising_asset` - Asset being exchanged for `offering_asset` on investment.
 *  * `tiers` - Price tiers to charge investors on investment.
 *  * `venue_id` - Venue to handle settlement.
 *  * `start` - Fundraiser start time, if `None` the fundraiser will start immediately.
 *  * `end` - Fundraiser end time, if `None` the fundraiser will never expire.
 *  * `minimum_investment` - Minimum amount of `raising_asset` that an investor needs to spend to invest in this raise.
 *  * `fundraiser_name` - Fundraiser name, only used in the UIs.
 * 
 *  # Permissions
 *  * Asset
 *  * Portfolio
 */
export interface StoCall_create_fundraiser {
    __kind: 'create_fundraiser'
    offeringPortfolio: PortfolioId
    offeringAsset: Uint8Array
    raisingPortfolio: PortfolioId
    raisingAsset: Uint8Array
    tiers: PriceTier[]
    venueId: bigint
    start: (bigint | undefined)
    end: (bigint | undefined)
    minimumInvestment: bigint
    fundraiserName: string
}

/**
 *  Invest in a fundraiser.
 * 
 *  * `investment_portfolio` - Portfolio that `offering_asset` will be deposited in.
 *  * `funding_portfolio` - Portfolio that will fund the investment.
 *  * `offering_asset` - Asset to invest in.
 *  * `id` - ID of the fundraiser to invest in.
 *  * `purchase_amount` - Amount of `offering_asset` to purchase.
 *  * `max_price` - Maximum price to pay per unit of `offering_asset`, If `None`there are no constraints on price.
 *  * `receipt` - Off-chain receipt to use instead of on-chain balance in `funding_portfolio`.
 * 
 *  # Permissions
 *  * Portfolio
 */
export interface StoCall_invest {
    __kind: 'invest'
    investmentPortfolio: PortfolioId
    fundingPortfolio: PortfolioId
    offeringAsset: Uint8Array
    id: bigint
    purchaseAmount: bigint
    maxPrice: (bigint | undefined)
    receipt: (ReceiptDetails | undefined)
}

/**
 *  Freeze a fundraiser.
 * 
 *  * `offering_asset` - Asset to freeze.
 *  * `id` - ID of the fundraiser to freeze.
 * 
 *  # Permissions
 *  * Asset
 */
export interface StoCall_freeze_fundraiser {
    __kind: 'freeze_fundraiser'
    offeringAsset: Uint8Array
    id: bigint
}

/**
 *  Unfreeze a fundraiser.
 * 
 *  * `offering_asset` - Asset to unfreeze.
 *  * `id` - ID of the fundraiser to unfreeze.
 * 
 *  # Permissions
 *  * Asset
 */
export interface StoCall_unfreeze_fundraiser {
    __kind: 'unfreeze_fundraiser'
    offeringAsset: Uint8Array
    id: bigint
}

/**
 *  Modify the time window a fundraiser is active
 * 
 *  * `offering_asset` - Asset to modify.
 *  * `id` - ID of the fundraiser to modify.
 *  * `start` - New start of the fundraiser.
 *  * `end` - New end of the fundraiser to modify.
 * 
 *  # Permissions
 *  * Asset
 */
export interface StoCall_modify_fundraiser_window {
    __kind: 'modify_fundraiser_window'
    offeringAsset: Uint8Array
    id: bigint
    start: bigint
    end: (bigint | undefined)
}

/**
 *  Stop a fundraiser.
 * 
 *  * `offering_asset` - Asset to stop.
 *  * `id` - ID of the fundraiser to stop.
 * 
 *  # Permissions
 *  * Asset
 */
export interface StoCall_stop {
    __kind: 'stop'
    offeringAsset: Uint8Array
    id: bigint
}

export type TreasuryCall = TreasuryCall_disbursement | TreasuryCall_reimbursement

/**
 *  It transfers balances from treasury to each of beneficiaries and the specific amount
 *  for each of them.
 * 
 *  # Error
 *  * `BadOrigin`: Only root can execute transaction.
 *  * `InsufficientBalance`: If treasury balances is not enough to cover all beneficiaries.
 */
export interface TreasuryCall_disbursement {
    __kind: 'disbursement'
    beneficiaries: Beneficiary[]
}

/**
 *  It transfers the specific `amount` from `origin` account into treasury.
 * 
 *  Only accounts which are associated to an identity can make a donation to treasury.
 */
export interface TreasuryCall_reimbursement {
    __kind: 'reimbursement'
    amount: bigint
}

export type UtilityCall = UtilityCall_batch | UtilityCall_batch_atomic | UtilityCall_batch_optimistic | UtilityCall_relay_tx

/**
 *  Dispatch multiple calls from the sender's origin.
 * 
 *  This will execute until the first one fails and then stop.
 * 
 *  May be called from root or a signed origin.
 * 
 * # Parameters
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 *  # Weight
 *  - The sum of the weights of the `calls`.
 *  - One event.
 * 
 *  This will return `Ok` in all circumstances except an unsigned origin. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Type_145[]
}

/**
 *  Dispatch multiple calls from the sender's origin.
 * 
 *  This will execute all calls, in order, stopping at the first failure,
 *  in which case the state changes are rolled back.
 *  On failure, an event `BatchInterrupted(failure_idx, error)` is deposited.
 * 
 *  May be called from root or a signed origin.
 * 
 * # Parameters
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 *  # Weight
 *  - The sum of the weights of the `calls`.
 *  - One event.
 * 
 *  This will return `Ok` in all circumstances except an unsigned origin.
 *  To determine the success of the batch, an event is deposited.
 *  If any call failed, then `BatchInterrupted` is deposited.
 *  If all were successful, then the `BatchCompleted` event is deposited.
 */
export interface UtilityCall_batch_atomic {
    __kind: 'batch_atomic'
    calls: Type_145[]
}

/**
 *  Dispatch multiple calls from the sender's origin.
 * 
 *  This will execute all calls, in order, irrespective of failures.
 *  Any failures will be available in a `BatchOptimisticFailed` event.
 * 
 *  May be called from root or a signed origin.
 * 
 * # Parameters
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 * 
 *  # Weight
 *  - The sum of the weights of the `calls`.
 *  - One event.
 * 
 *  This will return `Ok` in all circumstances except an unsigned origin.
 *  To determine the success of the batch, an event is deposited.
 *  If any call failed, then `BatchOptimisticFailed` is deposited,
 *  with a vector of event counts for each call as well as a vector
 *  of errors.
 *  If all were successful, then the `BatchCompleted` event is deposited.
 */
export interface UtilityCall_batch_optimistic {
    __kind: 'batch_optimistic'
    calls: Type_145[]
}

/**
 *  Relay a call for a target from an origin
 * 
 *  Relaying in this context refers to the ability of origin to make a call on behalf of
 *  target.
 * 
 *  Fees are charged to origin
 * 
 *  # Parameters
 *  - `target`: Account to be relayed
 *  - `signature`: Signature from target authorizing the relay
 *  - `call`: Call to be relayed on behalf of target
 * 
 */
export interface UtilityCall_relay_tx {
    __kind: 'relay_tx'
    target: Uint8Array
    signature: OffChainSignature
    call: UniqueCall
}

export type BaseCall = never

export type ExternalAgentsCall = ExternalAgentsCall_create_group | ExternalAgentsCall_set_group_permissions | ExternalAgentsCall_remove_agent | ExternalAgentsCall_abdicate | ExternalAgentsCall_change_group | ExternalAgentsCall_accept_become_agent

/**
 *  Creates a custom agent group (AG) for the given `ticker`.
 * 
 *  The AG will have the permissions as given by `perms`.
 *  This new AG is then assigned `id = AGIdSequence::get() + 1` as its `AGId`,
 *  which you can use as `AgentGroup::Custom(id)` when adding agents for `ticker`.
 * 
 *  # Arguments
 *  - `ticker` to add the custom group for.
 *  - `perms` that the new AG will have.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` was not authorized as an agent to call this.
 *  - `TooLong` if `perms` had some string or list length that was too long.
 *  - `CounterOverflow` if `AGIdSequence::get() + 1` would exceed `u32::MAX`.
 * 
 *  # Permissions
 *  * Asset
 *  * Agent
 */
export interface ExternalAgentsCall_create_group {
    __kind: 'create_group'
    ticker: Uint8Array
    perms: ExtrinsicPermissions
}

/**
 *  Updates the permissions of the custom AG identified by `id`, for the given `ticker`.
 * 
 *  # Arguments
 *  - `ticker` the custom AG belongs to.
 *  - `id` for the custom AG within `ticker`.
 *  - `perms` to update the custom AG to.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` was not authorized as an agent to call this.
 *  - `TooLong` if `perms` had some string or list length that was too long.
 *  - `NoSuchAG` if `id` does not identify a custom AG.
 * 
 *  # Permissions
 *  * Asset
 *  * Agent
 */
export interface ExternalAgentsCall_set_group_permissions {
    __kind: 'set_group_permissions'
    ticker: Uint8Array
    id: number
    perms: ExtrinsicPermissions
}

/**
 *  Remove the given `agent` from `ticker`.
 * 
 *  # Arguments
 *  - `ticker` that has the `agent` to remove.
 *  - `agent` of `ticker` to remove.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` was not authorized as an agent to call this.
 *  - `NotAnAgent` if `agent` is not an agent of `ticker`.
 *  - `RemovingLastFullAgent` if `agent` is the last full one.
 * 
 *  # Permissions
 *  * Asset
 *  * Agent
 */
export interface ExternalAgentsCall_remove_agent {
    __kind: 'remove_agent'
    ticker: Uint8Array
    agent: Uint8Array
}

/**
 *  Abdicate agentship for `ticker`.
 * 
 *  # Arguments
 *  - `ticker` of which the caller is an agent.
 * 
 *  # Errors
 *  - `NotAnAgent` if the caller is not an agent of `ticker`.
 *  - `RemovingLastFullAgent` if the caller is the last full agent.
 * 
 *  # Permissions
 *  * Asset
 */
export interface ExternalAgentsCall_abdicate {
    __kind: 'abdicate'
    ticker: Uint8Array
}

/**
 *  Change the agent group that `agent` belongs to in `ticker`.
 * 
 *  # Arguments
 *  - `ticker` that has the `agent`.
 *  - `agent` of `ticker` to change the group for.
 *  - `group` that `agent` will belong to in `ticker`.
 * 
 *  # Errors
 *  - `UnauthorizedAgent` if `origin` was not authorized as an agent to call this.
 *  - `NoSuchAG` if `id` does not identify a custom AG.
 *  - `NotAnAgent` if `agent` is not an agent of `ticker`.
 *  - `RemovingLastFullAgent` if `agent` was a `Full` one and is being demoted.
 * 
 *  # Permissions
 *  * Asset
 *  * Agent
 */
export interface ExternalAgentsCall_change_group {
    __kind: 'change_group'
    ticker: Uint8Array
    agent: Uint8Array
    group: AgentGroup
}

/**
 *  Accept an authorization by an agent "Alice" who issued `auth_id`
 *  to also become an agent of the ticker Alice specified.
 * 
 *  # Arguments
 *  - `auth_id` identifying the authorization to accept.
 * 
 *  # Errors
 *  - `AuthorizationError::Invalid` if `auth_id` does not exist for the given caller.
 *  - `AuthorizationError::Expired` if `auth_id` is for an auth that has expired.
 *  - `AuthorizationError::BadType` if `auth_id` was not for a `BecomeAgent` auth type.
 *  - `UnauthorizedAgent` if "Alice" is not permissioned to provide the auth.
 *  - `NoSuchAG` if the group referred to a custom that does not exist.
 *  - `AlreadyAnAgent` if the caller is already an agent of the ticker.
 * 
 *  # Permissions
 *  * Agent
 */
export interface ExternalAgentsCall_accept_become_agent {
    __kind: 'accept_become_agent'
    authId: bigint
}

export type RelayerCall = RelayerCall_set_paying_key | RelayerCall_accept_paying_key | RelayerCall_remove_paying_key | RelayerCall_update_polyx_limit | RelayerCall_increase_polyx_limit | RelayerCall_decrease_polyx_limit

/**
 *  Creates an authorization to allow `user_key` to accept the caller (`origin == paying_key`) as their subsidiser.
 * 
 *  # Arguments
 *  - `user_key` the user key to subsidise.
 *  - `polyx_limit` the initial POLYX limit for this subsidy.
 * 
 *  # Errors
 *  - `UnauthorizedCaller` if `origin` is not authorized to call this extrinsic.
 */
export interface RelayerCall_set_paying_key {
    __kind: 'set_paying_key'
    userKey: Uint8Array
    polyxLimit: bigint
}

/**
 *  Accepts a `paying_key` authorization.
 * 
 *  # Arguments
 *  - `auth_id` the authorization id to accept a `paying_key`.
 * 
 *  # Errors
 *  - `AuthorizationError::Invalid` if `auth_id` does not exist for the given caller.
 *  - `AuthorizationError::Expired` if `auth_id` the authorization has expired.
 *  - `AuthorizationError::BadType` if `auth_id` was not a `AddRelayerPayingKey` authorization.
 *  - `NotAuthorizedForUserKey` if `origin` is not authorized to accept the authorization for the `user_key`.
 *  - `NotAuthorizedForPayingKey` if the authorization was created an identity different from the `paying_key`'s identity.
 *  - `UserKeyCddMissing` if the `user_key` is not attached to a CDD'd identity.
 *  - `PayingKeyCddMissing` if the `paying_key` is not attached to a CDD'd identity.
 *  - `UnauthorizedCaller` if `origin` is not authorized to call this extrinsic.
 */
export interface RelayerCall_accept_paying_key {
    __kind: 'accept_paying_key'
    authId: bigint
}

/**
 *  Removes the `paying_key` from a `user_key`.
 * 
 *  # Arguments
 *  - `user_key` the user key to remove the subsidy from.
 *  - `paying_key` the paying key that was subsidising the `user_key`.
 * 
 *  # Errors
 *  - `NotAuthorizedForUserKey` if `origin` is not authorized to remove the subsidy for the `user_key`.
 *  - `NoPayingKey` if the `user_key` doesn't have a `paying_key`.
 *  - `NotPayingKey` if the `paying_key` doesn't match the current `paying_key`.
 *  - `UnauthorizedCaller` if `origin` is not authorized to call this extrinsic.
 */
export interface RelayerCall_remove_paying_key {
    __kind: 'remove_paying_key'
    userKey: Uint8Array
    payingKey: Uint8Array
}

/**
 *  Updates the available POLYX for a `user_key`.
 * 
 *  # Arguments
 *  - `user_key` the user key of the subsidy to update the available POLYX.
 *  - `polyx_limit` the amount of POLYX available for subsidising the `user_key`.
 * 
 *  # Errors
 *  - `NoPayingKey` if the `user_key` doesn't have a `paying_key`.
 *  - `NotPayingKey` if `origin` doesn't match the current `paying_key`.
 *  - `UnauthorizedCaller` if `origin` is not authorized to call this extrinsic.
 */
export interface RelayerCall_update_polyx_limit {
    __kind: 'update_polyx_limit'
    userKey: Uint8Array
    polyxLimit: bigint
}

/**
 *  Increase the available POLYX for a `user_key`.
 * 
 *  # Arguments
 *  - `user_key` the user key of the subsidy to update the available POLYX.
 *  - `amount` the amount of POLYX to add to the subsidy of `user_key`.
 * 
 *  # Errors
 *  - `NoPayingKey` if the `user_key` doesn't have a `paying_key`.
 *  - `NotPayingKey` if `origin` doesn't match the current `paying_key`.
 *  - `UnauthorizedCaller` if `origin` is not authorized to call this extrinsic.
 *  - `Overlow` if the subsidy's remaining POLYX would have overflowed `u128::MAX`.
 */
export interface RelayerCall_increase_polyx_limit {
    __kind: 'increase_polyx_limit'
    userKey: Uint8Array
    amount: bigint
}

/**
 *  Decrease the available POLYX for a `user_key`.
 * 
 *  # Arguments
 *  - `user_key` the user key of the subsidy to update the available POLYX.
 *  - `amount` the amount of POLYX to remove from the subsidy of `user_key`.
 * 
 *  # Errors
 *  - `NoPayingKey` if the `user_key` doesn't have a `paying_key`.
 *  - `NotPayingKey` if `origin` doesn't match the current `paying_key`.
 *  - `UnauthorizedCaller` if `origin` is not authorized to call this extrinsic.
 *  - `Overlow` if the subsidy has less then `amount` POLYX remaining.
 */
export interface RelayerCall_decrease_polyx_limit {
    __kind: 'decrease_polyx_limit'
    userKey: Uint8Array
    amount: bigint
}

export type RewardsCall = RewardsCall_claim_itn_reward | RewardsCall_set_itn_reward_status

/**
 *  Claim an ITN reward.
 * 
 *  ## Arguments
 *  * `itn_address` specifying the awarded address on ITN.
 *  * `signature` authenticating the claim to the reward.
 *     The signature should contain `reward_address` followed by the suffix `"claim_itn_reward"`,
 *     and must have been signed by `itn_address`.
 * 
 *  # Errors
 *  * `InsufficientBalance` - Itn rewards has insufficient funds to issue the reward.
 *  * `InvalidSignature` - `signature` had an invalid signer or invalid message.
 *  * `ItnRewardAlreadyClaimed` - Reward issued to the `itn_address` has already been claimed.
 *  * `UnknownItnAddress` - `itn_address` is not in the rewards table and has no reward to be claimed.
 */
export interface RewardsCall_claim_itn_reward {
    __kind: 'claim_itn_reward'
    rewardAddress: Uint8Array
    itnAddress: Uint8Array
    signature: OffChainSignature
}

export interface RewardsCall_set_itn_reward_status {
    __kind: 'set_itn_reward_status'
    itnAddress: Uint8Array
    status: ItnRewardStatus
}

export type Committee = Committee_Technical | Committee_Upgrade

export interface Committee_Technical {
    __kind: 'Technical'
}

export interface Committee_Upgrade {
    __kind: 'Upgrade'
}

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export interface BabeEquivocationProof {
    offender: Uint8Array
    slotNumber: bigint
    firstHeader: Header
    secondHeader: Header
}

export interface KeyOwnerProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export type LookupSource = LookupSource_Id | LookupSource_Index | LookupSource_Raw | LookupSource_Address32 | LookupSource_Address20

export interface LookupSource_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface LookupSource_Index {
    __kind: 'Index'
    value: number
}

export interface LookupSource_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface LookupSource_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface LookupSource_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface SecondaryKey {
    signer: Signatory
    permissions: Permissions
}

export type Signatory = Signatory_Identity | Signatory_Account

export interface Signatory_Identity {
    __kind: 'Identity'
    value: Uint8Array
}

export interface Signatory_Account {
    __kind: 'Account'
    value: Uint8Array
}

export type Claim = Claim_Accredited | Claim_Affiliate | Claim_BuyLockup | Claim_SellLockup | Claim_CustomerDueDiligence | Claim_KnowYourCustomer | Claim_Jurisdiction | Claim_Exempted | Claim_Blocked | Claim_InvestorUniqueness | Claim_NoData | Claim_InvestorUniquenessV2

export interface Claim_Accredited {
    __kind: 'Accredited'
    value: Scope
}

export interface Claim_Affiliate {
    __kind: 'Affiliate'
    value: Scope
}

export interface Claim_BuyLockup {
    __kind: 'BuyLockup'
    value: Scope
}

export interface Claim_SellLockup {
    __kind: 'SellLockup'
    value: Scope
}

export interface Claim_CustomerDueDiligence {
    __kind: 'CustomerDueDiligence'
    value: Uint8Array
}

export interface Claim_KnowYourCustomer {
    __kind: 'KnowYourCustomer'
    value: Scope
}

export interface Claim_Jurisdiction {
    __kind: 'Jurisdiction'
    value: [CountryCode, Scope]
}

export interface Claim_Exempted {
    __kind: 'Exempted'
    value: Scope
}

export interface Claim_Blocked {
    __kind: 'Blocked'
    value: Scope
}

export interface Claim_InvestorUniqueness {
    __kind: 'InvestorUniqueness'
    value: [Scope, Uint8Array, Uint8Array]
}

export interface Claim_NoData {
    __kind: 'NoData'
}

export interface Claim_InvestorUniquenessV2 {
    __kind: 'InvestorUniquenessV2'
    value: Uint8Array
}

export interface Permissions {
    asset: AssetPermissions
    extrinsic: ExtrinsicPermissions
    portfolio: PortfolioPermissions
}

export interface LegacyPermissions {
    asset: (Uint8Array[] | undefined)
    extrinsic: (LegacyPalletPermissions[] | undefined)
    portfolio: (PortfolioId[] | undefined)
}

export type AuthorizationData = AuthorizationData_AttestPrimaryKeyRotation | AuthorizationData_RotatePrimaryKey | AuthorizationData_TransferTicker | AuthorizationData_AddMultiSigSigner | AuthorizationData_TransferAssetOwnership | AuthorizationData_JoinIdentity | AuthorizationData_PortfolioCustody | AuthorizationData_BecomeAgent | AuthorizationData_AddRelayerPayingKey | AuthorizationData_RotatePrimaryKeyToSecondary

export interface AuthorizationData_AttestPrimaryKeyRotation {
    __kind: 'AttestPrimaryKeyRotation'
    value: Uint8Array
}

export interface AuthorizationData_RotatePrimaryKey {
    __kind: 'RotatePrimaryKey'
}

export interface AuthorizationData_TransferTicker {
    __kind: 'TransferTicker'
    value: Uint8Array
}

export interface AuthorizationData_AddMultiSigSigner {
    __kind: 'AddMultiSigSigner'
    value: Uint8Array
}

export interface AuthorizationData_TransferAssetOwnership {
    __kind: 'TransferAssetOwnership'
    value: Uint8Array
}

export interface AuthorizationData_JoinIdentity {
    __kind: 'JoinIdentity'
    value: Permissions
}

export interface AuthorizationData_PortfolioCustody {
    __kind: 'PortfolioCustody'
    value: PortfolioId
}

export interface AuthorizationData_BecomeAgent {
    __kind: 'BecomeAgent'
    value: [Uint8Array, AgentGroup]
}

export interface AuthorizationData_AddRelayerPayingKey {
    __kind: 'AddRelayerPayingKey'
    value: [Uint8Array, Uint8Array, bigint]
}

export interface AuthorizationData_RotatePrimaryKeyToSecondary {
    __kind: 'RotatePrimaryKeyToSecondary'
    value: Permissions
}

export interface SecondaryKeyWithAuth {
    secondaryKey: SecondaryKey
    authSignature: Uint8Array
}

export type Scope = Scope_Identity | Scope_Ticker | Scope_Custom

export interface Scope_Identity {
    __kind: 'Identity'
    value: Uint8Array
}

export interface Scope_Ticker {
    __kind: 'Ticker'
    value: Uint8Array
}

export interface Scope_Custom {
    __kind: 'Custom'
    value: Uint8Array
}

export interface ScopeClaimProof {
    proofScopeIdWellformed: Uint8Array
    proofScopeIdCddIdMatch: ZkProofData
    scopeId: Uint8Array
}

export type ClaimType = ClaimType_Accredited | ClaimType_Affiliate | ClaimType_BuyLockup | ClaimType_SellLockup | ClaimType_CustomerDueDiligence | ClaimType_KnowYourCustomer | ClaimType_Jurisdiction | ClaimType_Exempted | ClaimType_Blocked | ClaimType_InvestorUniqueness | ClaimType_NoData | ClaimType_InvestorUniquenessV2

export interface ClaimType_Accredited {
    __kind: 'Accredited'
}

export interface ClaimType_Affiliate {
    __kind: 'Affiliate'
}

export interface ClaimType_BuyLockup {
    __kind: 'BuyLockup'
}

export interface ClaimType_SellLockup {
    __kind: 'SellLockup'
}

export interface ClaimType_CustomerDueDiligence {
    __kind: 'CustomerDueDiligence'
}

export interface ClaimType_KnowYourCustomer {
    __kind: 'KnowYourCustomer'
}

export interface ClaimType_Jurisdiction {
    __kind: 'Jurisdiction'
}

export interface ClaimType_Exempted {
    __kind: 'Exempted'
}

export interface ClaimType_Blocked {
    __kind: 'Blocked'
}

export interface ClaimType_InvestorUniqueness {
    __kind: 'InvestorUniqueness'
}

export interface ClaimType_NoData {
    __kind: 'NoData'
}

export interface ClaimType_InvestorUniquenessV2 {
    __kind: 'InvestorUniquenessV2'
}

export type MaybeBlock = MaybeBlock_Some | MaybeBlock_None

export interface MaybeBlock_Some {
    __kind: 'Some'
    value: number
}

export interface MaybeBlock_None {
    __kind: 'None'
}

export type Proposal = Proposal_System | Proposal_Babe | Proposal_Timestamp | Proposal_Indices | Proposal_Authorship | Proposal_Balances | Proposal_Identity | Proposal_CddServiceProviders | Proposal_PolymeshCommittee | Proposal_CommitteeMembership | Proposal_TechnicalCommittee | Proposal_TechnicalCommitteeMembership | Proposal_UpgradeCommittee | Proposal_UpgradeCommitteeMembership | Proposal_MultiSig | Proposal_Bridge | Proposal_Staking | Proposal_Offences | Proposal_Session | Proposal_AuthorityDiscovery | Proposal_Grandpa | Proposal_ImOnline | Proposal_RandomnessCollectiveFlip | Proposal_Sudo | Proposal_Asset | Proposal_CapitalDistribution | Proposal_Checkpoint | Proposal_ComplianceManager | Proposal_CorporateAction | Proposal_CorporateBallot | Proposal_Pips | Proposal_Portfolio | Proposal_ProtocolFee | Proposal_Scheduler | Proposal_Settlement | Proposal_Statistics | Proposal_Sto | Proposal_Treasury | Proposal_Utility | Proposal_Base | Proposal_ExternalAgents | Proposal_Relayer | Proposal_Rewards

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Proposal_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Proposal_CddServiceProviders {
    __kind: 'CddServiceProviders'
    value: CddServiceProvidersCall
}

export interface Proposal_PolymeshCommittee {
    __kind: 'PolymeshCommittee'
    value: PolymeshCommitteeCall
}

export interface Proposal_CommitteeMembership {
    __kind: 'CommitteeMembership'
    value: CommitteeMembershipCall
}

export interface Proposal_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Proposal_TechnicalCommitteeMembership {
    __kind: 'TechnicalCommitteeMembership'
    value: TechnicalCommitteeMembershipCall
}

export interface Proposal_UpgradeCommittee {
    __kind: 'UpgradeCommittee'
    value: UpgradeCommitteeCall
}

export interface Proposal_UpgradeCommitteeMembership {
    __kind: 'UpgradeCommitteeMembership'
    value: UpgradeCommitteeMembershipCall
}

export interface Proposal_MultiSig {
    __kind: 'MultiSig'
    value: MultiSigCall
}

export interface Proposal_Bridge {
    __kind: 'Bridge'
    value: BridgeCall
}

export interface Proposal_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Proposal_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Proposal_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Proposal_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Proposal_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Proposal_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Proposal_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Proposal_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Proposal_Asset {
    __kind: 'Asset'
    value: AssetCall
}

export interface Proposal_CapitalDistribution {
    __kind: 'CapitalDistribution'
    value: CapitalDistributionCall
}

export interface Proposal_Checkpoint {
    __kind: 'Checkpoint'
    value: CheckpointCall
}

export interface Proposal_ComplianceManager {
    __kind: 'ComplianceManager'
    value: ComplianceManagerCall
}

export interface Proposal_CorporateAction {
    __kind: 'CorporateAction'
    value: CorporateActionCall
}

export interface Proposal_CorporateBallot {
    __kind: 'CorporateBallot'
    value: CorporateBallotCall
}

export interface Proposal_Pips {
    __kind: 'Pips'
    value: PipsCall
}

export interface Proposal_Portfolio {
    __kind: 'Portfolio'
    value: PortfolioCall
}

export interface Proposal_ProtocolFee {
    __kind: 'ProtocolFee'
    value: ProtocolFeeCall
}

export interface Proposal_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Proposal_Settlement {
    __kind: 'Settlement'
    value: SettlementCall
}

export interface Proposal_Statistics {
    __kind: 'Statistics'
    value: StatisticsCall
}

export interface Proposal_Sto {
    __kind: 'Sto'
    value: StoCall
}

export interface Proposal_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_Base {
    __kind: 'Base'
    value: BaseCall
}

export interface Proposal_ExternalAgents {
    __kind: 'ExternalAgents'
    value: ExternalAgentsCall
}

export interface Proposal_Relayer {
    __kind: 'Relayer'
    value: RelayerCall
}

export interface Proposal_Rewards {
    __kind: 'Rewards'
    value: RewardsCall
}

export interface BridgeTx {
    nonce: number
    recipient: Uint8Array
    amount: bigint
    txHash: Uint8Array
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export interface CompactAssignments {
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

export interface ElectionSize {
    validators: number
    nominators: number
}

export type SlashingSwitch = SlashingSwitch_Validator | SlashingSwitch_ValidatorAndNominator | SlashingSwitch_None

export interface SlashingSwitch_Validator {
    __kind: 'Validator'
}

export interface SlashingSwitch_ValidatorAndNominator {
    __kind: 'ValidatorAndNominator'
}

export interface SlashingSwitch_None {
    __kind: 'None'
}

export interface GrandpaEquivocationProof {
    setId: bigint
    equivocation: GrandpaEquivocation
}

export interface Heartbeat {
    blockNumber: number
    networkState: OpaqueNetworkState
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export type AssetType = AssetType_EquityCommon | AssetType_EquityPreferred | AssetType_Commodity | AssetType_FixedIncome | AssetType_REIT | AssetType_Fund | AssetType_RevenueShareAgreement | AssetType_StructuredProduct | AssetType_Derivative | AssetType_Custom | AssetType_StableCoin

export interface AssetType_EquityCommon {
    __kind: 'EquityCommon'
}

export interface AssetType_EquityPreferred {
    __kind: 'EquityPreferred'
}

export interface AssetType_Commodity {
    __kind: 'Commodity'
}

export interface AssetType_FixedIncome {
    __kind: 'FixedIncome'
}

export interface AssetType_REIT {
    __kind: 'REIT'
}

export interface AssetType_Fund {
    __kind: 'Fund'
}

export interface AssetType_RevenueShareAgreement {
    __kind: 'RevenueShareAgreement'
}

export interface AssetType_StructuredProduct {
    __kind: 'StructuredProduct'
}

export interface AssetType_Derivative {
    __kind: 'Derivative'
}

export interface AssetType_Custom {
    __kind: 'Custom'
    value: number
}

export interface AssetType_StableCoin {
    __kind: 'StableCoin'
}

export type AssetIdentifier = AssetIdentifier_CUSIP | AssetIdentifier_CINS | AssetIdentifier_ISIN | AssetIdentifier_LEI

export interface AssetIdentifier_CUSIP {
    __kind: 'CUSIP'
    value: Uint8Array
}

export interface AssetIdentifier_CINS {
    __kind: 'CINS'
    value: Uint8Array
}

export interface AssetIdentifier_ISIN {
    __kind: 'ISIN'
    value: Uint8Array
}

export interface AssetIdentifier_LEI {
    __kind: 'LEI'
    value: Uint8Array
}

export interface Document {
    uri: string
    contentHash: DocumentHash
    name: string
    docType: (string | undefined)
    filingDate: (bigint | undefined)
}

export interface ClassicTickerImport {
    ethOwner: Uint8Array
    ticker: Uint8Array
    isContract: boolean
    isCreated: boolean
}

export interface TickerRegistrationConfig {
    maxTickerLength: number
    registrationLength: (bigint | undefined)
}

export interface PortfolioId {
    did: Uint8Array
    kind: PortfolioKind
}

export interface CAId {
    ticker: Uint8Array
    localId: number
}

export interface ScheduleSpec {
    start: (bigint | undefined)
    period: CalendarPeriod
    remaining: number
}

export interface Condition {
    conditionType: ConditionType
    issuers: TrustedIssuer[]
}

export interface ComplianceRequirement {
    senderConditions: Condition[]
    receiverConditions: Condition[]
    id: number
}

export interface TrustedIssuer {
    issuer: Uint8Array
    trustedFor: TrustedFor
}

export interface TargetIdentities {
    identities: Uint8Array[]
    treatment: TargetTreatment
}

export type CAKind = CAKind_PredictableBenefit | CAKind_UnpredictableBenefit | CAKind_IssuerNotice | CAKind_Reorganization | CAKind_Other

export interface CAKind_PredictableBenefit {
    __kind: 'PredictableBenefit'
}

export interface CAKind_UnpredictableBenefit {
    __kind: 'UnpredictableBenefit'
}

export interface CAKind_IssuerNotice {
    __kind: 'IssuerNotice'
}

export interface CAKind_Reorganization {
    __kind: 'Reorganization'
}

export interface CAKind_Other {
    __kind: 'Other'
}

export type RecordDateSpec = RecordDateSpec_Scheduled | RecordDateSpec_ExistingSchedule | RecordDateSpec_Existing

export interface RecordDateSpec_Scheduled {
    __kind: 'Scheduled'
    value: bigint
}

export interface RecordDateSpec_ExistingSchedule {
    __kind: 'ExistingSchedule'
    value: bigint
}

export interface RecordDateSpec_Existing {
    __kind: 'Existing'
    value: bigint
}

export interface BallotTimeRange {
    start: bigint
    end: bigint
}

export interface BallotMeta {
    title: string
    motions: Motion[]
}

export interface BallotVote {
    power: bigint
    fallback: (number | undefined)
}

export type SnapshotResult = SnapshotResult_Approve | SnapshotResult_Reject | SnapshotResult_Skip

export interface SnapshotResult_Approve {
    __kind: 'Approve'
}

export interface SnapshotResult_Reject {
    __kind: 'Reject'
}

export interface SnapshotResult_Skip {
    __kind: 'Skip'
}

export interface MovePortfolioItem {
    ticker: Uint8Array
    amount: bigint
    memo: (Uint8Array | undefined)
}

export type ProtocolOp = ProtocolOp_AssetRegisterTicker | ProtocolOp_AssetIssue | ProtocolOp_AssetAddDocuments | ProtocolOp_AssetCreateAsset | ProtocolOp_CheckpointCreateSchedule | ProtocolOp_ComplianceManagerAddComplianceRequirement | ProtocolOp_IdentityCddRegisterDid | ProtocolOp_IdentityAddClaim | ProtocolOp_IdentityAddSecondaryKeysWithAuthorization | ProtocolOp_PipsPropose | ProtocolOp_ContractsPutCode | ProtocolOp_CorporateBallotAttachBallot | ProtocolOp_CapitalDistributionDistribute

export interface ProtocolOp_AssetRegisterTicker {
    __kind: 'AssetRegisterTicker'
}

export interface ProtocolOp_AssetIssue {
    __kind: 'AssetIssue'
}

export interface ProtocolOp_AssetAddDocuments {
    __kind: 'AssetAddDocuments'
}

export interface ProtocolOp_AssetCreateAsset {
    __kind: 'AssetCreateAsset'
}

export interface ProtocolOp_CheckpointCreateSchedule {
    __kind: 'CheckpointCreateSchedule'
}

export interface ProtocolOp_ComplianceManagerAddComplianceRequirement {
    __kind: 'ComplianceManagerAddComplianceRequirement'
}

export interface ProtocolOp_IdentityCddRegisterDid {
    __kind: 'IdentityCddRegisterDid'
}

export interface ProtocolOp_IdentityAddClaim {
    __kind: 'IdentityAddClaim'
}

export interface ProtocolOp_IdentityAddSecondaryKeysWithAuthorization {
    __kind: 'IdentityAddSecondaryKeysWithAuthorization'
}

export interface ProtocolOp_PipsPropose {
    __kind: 'PipsPropose'
}

export interface ProtocolOp_ContractsPutCode {
    __kind: 'ContractsPutCode'
}

export interface ProtocolOp_CorporateBallotAttachBallot {
    __kind: 'CorporateBallotAttachBallot'
}

export interface ProtocolOp_CapitalDistributionDistribute {
    __kind: 'CapitalDistributionDistribute'
}

export type VenueType = VenueType_Other | VenueType_Distribution | VenueType_Sto | VenueType_Exchange

export interface VenueType_Other {
    __kind: 'Other'
}

export interface VenueType_Distribution {
    __kind: 'Distribution'
}

export interface VenueType_Sto {
    __kind: 'Sto'
}

export interface VenueType_Exchange {
    __kind: 'Exchange'
}

export type SettlementType = SettlementType_SettleOnAffirmation | SettlementType_SettleOnBlock

export interface SettlementType_SettleOnAffirmation {
    __kind: 'SettleOnAffirmation'
}

export interface SettlementType_SettleOnBlock {
    __kind: 'SettleOnBlock'
    value: number
}

export interface Leg {
    from: PortfolioId
    to: PortfolioId
    asset: Uint8Array
    amount: bigint
}

export interface ReceiptDetails {
    receiptUid: bigint
    legId: bigint
    signer: Uint8Array
    signature: OffChainSignature
    metadata: string
}

export type TransferManager = TransferManager_CountTransferManager | TransferManager_PercentageTransferManager

export interface TransferManager_CountTransferManager {
    __kind: 'CountTransferManager'
    value: bigint
}

export interface TransferManager_PercentageTransferManager {
    __kind: 'PercentageTransferManager'
    value: number
}

export interface PriceTier {
    total: bigint
    price: bigint
}

export interface Beneficiary {
    id: Uint8Array
    amount: bigint
}

export type OffChainSignature = OffChainSignature_Ed25519 | OffChainSignature_Sr25519 | OffChainSignature_Ecdsa

export interface OffChainSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface OffChainSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface OffChainSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export interface UniqueCall {
    nonce: bigint
    call: Type_145
}

export type ExtrinsicPermissions = ExtrinsicPermissions_Whole | ExtrinsicPermissions_These | ExtrinsicPermissions_Except

export interface ExtrinsicPermissions_Whole {
    __kind: 'Whole'
}

export interface ExtrinsicPermissions_These {
    __kind: 'These'
    value: PalletPermissions[]
}

export interface ExtrinsicPermissions_Except {
    __kind: 'Except'
    value: PalletPermissions[]
}

export type AgentGroup = AgentGroup_Full | AgentGroup_Custom | AgentGroup_ExceptMeta | AgentGroup_PolymeshV1CAA | AgentGroup_PolymeshV1PIA

export interface AgentGroup_Full {
    __kind: 'Full'
}

export interface AgentGroup_Custom {
    __kind: 'Custom'
    value: number
}

export interface AgentGroup_ExceptMeta {
    __kind: 'ExceptMeta'
}

export interface AgentGroup_PolymeshV1CAA {
    __kind: 'PolymeshV1CAA'
}

export interface AgentGroup_PolymeshV1PIA {
    __kind: 'PolymeshV1PIA'
}

export type ItnRewardStatus = ItnRewardStatus_Unclaimed | ItnRewardStatus_Claimed

export interface ItnRewardStatus_Unclaimed {
    __kind: 'Unclaimed'
    value: bigint
}

export interface ItnRewardStatus_Claimed {
    __kind: 'Claimed'
}

export interface Digest {
    logs: DigestItem[]
}

export type CountryCode = CountryCode_AF | CountryCode_AX | CountryCode_AL | CountryCode_DZ | CountryCode_AS | CountryCode_AD | CountryCode_AO | CountryCode_AI | CountryCode_AQ | CountryCode_AG | CountryCode_AR | CountryCode_AM | CountryCode_AW | CountryCode_AU | CountryCode_AT | CountryCode_AZ | CountryCode_BS | CountryCode_BH | CountryCode_BD | CountryCode_BB | CountryCode_BY | CountryCode_BE | CountryCode_BZ | CountryCode_BJ | CountryCode_BM | CountryCode_BT | CountryCode_BO | CountryCode_BA | CountryCode_BW | CountryCode_BV | CountryCode_BR | CountryCode_VG | CountryCode_IO | CountryCode_BN | CountryCode_BG | CountryCode_BF | CountryCode_BI | CountryCode_KH | CountryCode_CM | CountryCode_CA | CountryCode_CV | CountryCode_KY | CountryCode_CF | CountryCode_TD | CountryCode_CL | CountryCode_CN | CountryCode_HK | CountryCode_MO | CountryCode_CX | CountryCode_CC | CountryCode_CO | CountryCode_KM | CountryCode_CG | CountryCode_CD | CountryCode_CK | CountryCode_CR | CountryCode_CI | CountryCode_HR | CountryCode_CU | CountryCode_CY | CountryCode_CZ | CountryCode_DK | CountryCode_DJ | CountryCode_DM | CountryCode_DO | CountryCode_EC | CountryCode_EG | CountryCode_SV | CountryCode_GQ | CountryCode_ER | CountryCode_EE | CountryCode_ET | CountryCode_FK | CountryCode_FO | CountryCode_FJ | CountryCode_FI | CountryCode_FR | CountryCode_GF | CountryCode_PF | CountryCode_TF | CountryCode_GA | CountryCode_GM | CountryCode_GE | CountryCode_DE | CountryCode_GH | CountryCode_GI | CountryCode_GR | CountryCode_GL | CountryCode_GD | CountryCode_GP | CountryCode_GU | CountryCode_GT | CountryCode_GG | CountryCode_GN | CountryCode_GW | CountryCode_GY | CountryCode_HT | CountryCode_HM | CountryCode_VA | CountryCode_HN | CountryCode_HU | CountryCode_IS | CountryCode_IN | CountryCode_ID | CountryCode_IR | CountryCode_IQ | CountryCode_IE | CountryCode_IM | CountryCode_IL | CountryCode_IT | CountryCode_JM | CountryCode_JP | CountryCode_JE | CountryCode_JO | CountryCode_KZ | CountryCode_KE | CountryCode_KI | CountryCode_KP | CountryCode_KR | CountryCode_KW | CountryCode_KG | CountryCode_LA | CountryCode_LV | CountryCode_LB | CountryCode_LS | CountryCode_LR | CountryCode_LY | CountryCode_LI | CountryCode_LT | CountryCode_LU | CountryCode_MK | CountryCode_MG | CountryCode_MW | CountryCode_MY | CountryCode_MV | CountryCode_ML | CountryCode_MT | CountryCode_MH | CountryCode_MQ | CountryCode_MR | CountryCode_MU | CountryCode_YT | CountryCode_MX | CountryCode_FM | CountryCode_MD | CountryCode_MC | CountryCode_MN | CountryCode_ME | CountryCode_MS | CountryCode_MA | CountryCode_MZ | CountryCode_MM | CountryCode_NA | CountryCode_NR | CountryCode_NP | CountryCode_NL | CountryCode_AN | CountryCode_NC | CountryCode_NZ | CountryCode_NI | CountryCode_NE | CountryCode_NG | CountryCode_NU | CountryCode_NF | CountryCode_MP | CountryCode_NO | CountryCode_OM | CountryCode_PK | CountryCode_PW | CountryCode_PS | CountryCode_PA | CountryCode_PG | CountryCode_PY | CountryCode_PE | CountryCode_PH | CountryCode_PN | CountryCode_PL | CountryCode_PT | CountryCode_PR | CountryCode_QA | CountryCode_RE | CountryCode_RO | CountryCode_RU | CountryCode_RW | CountryCode_BL | CountryCode_SH | CountryCode_KN | CountryCode_LC | CountryCode_MF | CountryCode_PM | CountryCode_VC | CountryCode_WS | CountryCode_SM | CountryCode_ST | CountryCode_SA | CountryCode_SN | CountryCode_RS | CountryCode_SC | CountryCode_SL | CountryCode_SG | CountryCode_SK | CountryCode_SI | CountryCode_SB | CountryCode_SO | CountryCode_ZA | CountryCode_GS | CountryCode_SS | CountryCode_ES | CountryCode_LK | CountryCode_SD | CountryCode_SR | CountryCode_SJ | CountryCode_SZ | CountryCode_SE | CountryCode_CH | CountryCode_SY | CountryCode_TW | CountryCode_TJ | CountryCode_TZ | CountryCode_TH | CountryCode_TL | CountryCode_TG | CountryCode_TK | CountryCode_TO | CountryCode_TT | CountryCode_TN | CountryCode_TR | CountryCode_TM | CountryCode_TC | CountryCode_TV | CountryCode_UG | CountryCode_UA | CountryCode_AE | CountryCode_GB | CountryCode_US | CountryCode_UM | CountryCode_UY | CountryCode_UZ | CountryCode_VU | CountryCode_VE | CountryCode_VN | CountryCode_VI | CountryCode_WF | CountryCode_EH | CountryCode_YE | CountryCode_ZM | CountryCode_ZW | CountryCode_BQ | CountryCode_CW | CountryCode_SX

export interface CountryCode_AF {
    __kind: 'AF'
}

export interface CountryCode_AX {
    __kind: 'AX'
}

export interface CountryCode_AL {
    __kind: 'AL'
}

export interface CountryCode_DZ {
    __kind: 'DZ'
}

export interface CountryCode_AS {
    __kind: 'AS'
}

export interface CountryCode_AD {
    __kind: 'AD'
}

export interface CountryCode_AO {
    __kind: 'AO'
}

export interface CountryCode_AI {
    __kind: 'AI'
}

export interface CountryCode_AQ {
    __kind: 'AQ'
}

export interface CountryCode_AG {
    __kind: 'AG'
}

export interface CountryCode_AR {
    __kind: 'AR'
}

export interface CountryCode_AM {
    __kind: 'AM'
}

export interface CountryCode_AW {
    __kind: 'AW'
}

export interface CountryCode_AU {
    __kind: 'AU'
}

export interface CountryCode_AT {
    __kind: 'AT'
}

export interface CountryCode_AZ {
    __kind: 'AZ'
}

export interface CountryCode_BS {
    __kind: 'BS'
}

export interface CountryCode_BH {
    __kind: 'BH'
}

export interface CountryCode_BD {
    __kind: 'BD'
}

export interface CountryCode_BB {
    __kind: 'BB'
}

export interface CountryCode_BY {
    __kind: 'BY'
}

export interface CountryCode_BE {
    __kind: 'BE'
}

export interface CountryCode_BZ {
    __kind: 'BZ'
}

export interface CountryCode_BJ {
    __kind: 'BJ'
}

export interface CountryCode_BM {
    __kind: 'BM'
}

export interface CountryCode_BT {
    __kind: 'BT'
}

export interface CountryCode_BO {
    __kind: 'BO'
}

export interface CountryCode_BA {
    __kind: 'BA'
}

export interface CountryCode_BW {
    __kind: 'BW'
}

export interface CountryCode_BV {
    __kind: 'BV'
}

export interface CountryCode_BR {
    __kind: 'BR'
}

export interface CountryCode_VG {
    __kind: 'VG'
}

export interface CountryCode_IO {
    __kind: 'IO'
}

export interface CountryCode_BN {
    __kind: 'BN'
}

export interface CountryCode_BG {
    __kind: 'BG'
}

export interface CountryCode_BF {
    __kind: 'BF'
}

export interface CountryCode_BI {
    __kind: 'BI'
}

export interface CountryCode_KH {
    __kind: 'KH'
}

export interface CountryCode_CM {
    __kind: 'CM'
}

export interface CountryCode_CA {
    __kind: 'CA'
}

export interface CountryCode_CV {
    __kind: 'CV'
}

export interface CountryCode_KY {
    __kind: 'KY'
}

export interface CountryCode_CF {
    __kind: 'CF'
}

export interface CountryCode_TD {
    __kind: 'TD'
}

export interface CountryCode_CL {
    __kind: 'CL'
}

export interface CountryCode_CN {
    __kind: 'CN'
}

export interface CountryCode_HK {
    __kind: 'HK'
}

export interface CountryCode_MO {
    __kind: 'MO'
}

export interface CountryCode_CX {
    __kind: 'CX'
}

export interface CountryCode_CC {
    __kind: 'CC'
}

export interface CountryCode_CO {
    __kind: 'CO'
}

export interface CountryCode_KM {
    __kind: 'KM'
}

export interface CountryCode_CG {
    __kind: 'CG'
}

export interface CountryCode_CD {
    __kind: 'CD'
}

export interface CountryCode_CK {
    __kind: 'CK'
}

export interface CountryCode_CR {
    __kind: 'CR'
}

export interface CountryCode_CI {
    __kind: 'CI'
}

export interface CountryCode_HR {
    __kind: 'HR'
}

export interface CountryCode_CU {
    __kind: 'CU'
}

export interface CountryCode_CY {
    __kind: 'CY'
}

export interface CountryCode_CZ {
    __kind: 'CZ'
}

export interface CountryCode_DK {
    __kind: 'DK'
}

export interface CountryCode_DJ {
    __kind: 'DJ'
}

export interface CountryCode_DM {
    __kind: 'DM'
}

export interface CountryCode_DO {
    __kind: 'DO'
}

export interface CountryCode_EC {
    __kind: 'EC'
}

export interface CountryCode_EG {
    __kind: 'EG'
}

export interface CountryCode_SV {
    __kind: 'SV'
}

export interface CountryCode_GQ {
    __kind: 'GQ'
}

export interface CountryCode_ER {
    __kind: 'ER'
}

export interface CountryCode_EE {
    __kind: 'EE'
}

export interface CountryCode_ET {
    __kind: 'ET'
}

export interface CountryCode_FK {
    __kind: 'FK'
}

export interface CountryCode_FO {
    __kind: 'FO'
}

export interface CountryCode_FJ {
    __kind: 'FJ'
}

export interface CountryCode_FI {
    __kind: 'FI'
}

export interface CountryCode_FR {
    __kind: 'FR'
}

export interface CountryCode_GF {
    __kind: 'GF'
}

export interface CountryCode_PF {
    __kind: 'PF'
}

export interface CountryCode_TF {
    __kind: 'TF'
}

export interface CountryCode_GA {
    __kind: 'GA'
}

export interface CountryCode_GM {
    __kind: 'GM'
}

export interface CountryCode_GE {
    __kind: 'GE'
}

export interface CountryCode_DE {
    __kind: 'DE'
}

export interface CountryCode_GH {
    __kind: 'GH'
}

export interface CountryCode_GI {
    __kind: 'GI'
}

export interface CountryCode_GR {
    __kind: 'GR'
}

export interface CountryCode_GL {
    __kind: 'GL'
}

export interface CountryCode_GD {
    __kind: 'GD'
}

export interface CountryCode_GP {
    __kind: 'GP'
}

export interface CountryCode_GU {
    __kind: 'GU'
}

export interface CountryCode_GT {
    __kind: 'GT'
}

export interface CountryCode_GG {
    __kind: 'GG'
}

export interface CountryCode_GN {
    __kind: 'GN'
}

export interface CountryCode_GW {
    __kind: 'GW'
}

export interface CountryCode_GY {
    __kind: 'GY'
}

export interface CountryCode_HT {
    __kind: 'HT'
}

export interface CountryCode_HM {
    __kind: 'HM'
}

export interface CountryCode_VA {
    __kind: 'VA'
}

export interface CountryCode_HN {
    __kind: 'HN'
}

export interface CountryCode_HU {
    __kind: 'HU'
}

export interface CountryCode_IS {
    __kind: 'IS'
}

export interface CountryCode_IN {
    __kind: 'IN'
}

export interface CountryCode_ID {
    __kind: 'ID'
}

export interface CountryCode_IR {
    __kind: 'IR'
}

export interface CountryCode_IQ {
    __kind: 'IQ'
}

export interface CountryCode_IE {
    __kind: 'IE'
}

export interface CountryCode_IM {
    __kind: 'IM'
}

export interface CountryCode_IL {
    __kind: 'IL'
}

export interface CountryCode_IT {
    __kind: 'IT'
}

export interface CountryCode_JM {
    __kind: 'JM'
}

export interface CountryCode_JP {
    __kind: 'JP'
}

export interface CountryCode_JE {
    __kind: 'JE'
}

export interface CountryCode_JO {
    __kind: 'JO'
}

export interface CountryCode_KZ {
    __kind: 'KZ'
}

export interface CountryCode_KE {
    __kind: 'KE'
}

export interface CountryCode_KI {
    __kind: 'KI'
}

export interface CountryCode_KP {
    __kind: 'KP'
}

export interface CountryCode_KR {
    __kind: 'KR'
}

export interface CountryCode_KW {
    __kind: 'KW'
}

export interface CountryCode_KG {
    __kind: 'KG'
}

export interface CountryCode_LA {
    __kind: 'LA'
}

export interface CountryCode_LV {
    __kind: 'LV'
}

export interface CountryCode_LB {
    __kind: 'LB'
}

export interface CountryCode_LS {
    __kind: 'LS'
}

export interface CountryCode_LR {
    __kind: 'LR'
}

export interface CountryCode_LY {
    __kind: 'LY'
}

export interface CountryCode_LI {
    __kind: 'LI'
}

export interface CountryCode_LT {
    __kind: 'LT'
}

export interface CountryCode_LU {
    __kind: 'LU'
}

export interface CountryCode_MK {
    __kind: 'MK'
}

export interface CountryCode_MG {
    __kind: 'MG'
}

export interface CountryCode_MW {
    __kind: 'MW'
}

export interface CountryCode_MY {
    __kind: 'MY'
}

export interface CountryCode_MV {
    __kind: 'MV'
}

export interface CountryCode_ML {
    __kind: 'ML'
}

export interface CountryCode_MT {
    __kind: 'MT'
}

export interface CountryCode_MH {
    __kind: 'MH'
}

export interface CountryCode_MQ {
    __kind: 'MQ'
}

export interface CountryCode_MR {
    __kind: 'MR'
}

export interface CountryCode_MU {
    __kind: 'MU'
}

export interface CountryCode_YT {
    __kind: 'YT'
}

export interface CountryCode_MX {
    __kind: 'MX'
}

export interface CountryCode_FM {
    __kind: 'FM'
}

export interface CountryCode_MD {
    __kind: 'MD'
}

export interface CountryCode_MC {
    __kind: 'MC'
}

export interface CountryCode_MN {
    __kind: 'MN'
}

export interface CountryCode_ME {
    __kind: 'ME'
}

export interface CountryCode_MS {
    __kind: 'MS'
}

export interface CountryCode_MA {
    __kind: 'MA'
}

export interface CountryCode_MZ {
    __kind: 'MZ'
}

export interface CountryCode_MM {
    __kind: 'MM'
}

export interface CountryCode_NA {
    __kind: 'NA'
}

export interface CountryCode_NR {
    __kind: 'NR'
}

export interface CountryCode_NP {
    __kind: 'NP'
}

export interface CountryCode_NL {
    __kind: 'NL'
}

export interface CountryCode_AN {
    __kind: 'AN'
}

export interface CountryCode_NC {
    __kind: 'NC'
}

export interface CountryCode_NZ {
    __kind: 'NZ'
}

export interface CountryCode_NI {
    __kind: 'NI'
}

export interface CountryCode_NE {
    __kind: 'NE'
}

export interface CountryCode_NG {
    __kind: 'NG'
}

export interface CountryCode_NU {
    __kind: 'NU'
}

export interface CountryCode_NF {
    __kind: 'NF'
}

export interface CountryCode_MP {
    __kind: 'MP'
}

export interface CountryCode_NO {
    __kind: 'NO'
}

export interface CountryCode_OM {
    __kind: 'OM'
}

export interface CountryCode_PK {
    __kind: 'PK'
}

export interface CountryCode_PW {
    __kind: 'PW'
}

export interface CountryCode_PS {
    __kind: 'PS'
}

export interface CountryCode_PA {
    __kind: 'PA'
}

export interface CountryCode_PG {
    __kind: 'PG'
}

export interface CountryCode_PY {
    __kind: 'PY'
}

export interface CountryCode_PE {
    __kind: 'PE'
}

export interface CountryCode_PH {
    __kind: 'PH'
}

export interface CountryCode_PN {
    __kind: 'PN'
}

export interface CountryCode_PL {
    __kind: 'PL'
}

export interface CountryCode_PT {
    __kind: 'PT'
}

export interface CountryCode_PR {
    __kind: 'PR'
}

export interface CountryCode_QA {
    __kind: 'QA'
}

export interface CountryCode_RE {
    __kind: 'RE'
}

export interface CountryCode_RO {
    __kind: 'RO'
}

export interface CountryCode_RU {
    __kind: 'RU'
}

export interface CountryCode_RW {
    __kind: 'RW'
}

export interface CountryCode_BL {
    __kind: 'BL'
}

export interface CountryCode_SH {
    __kind: 'SH'
}

export interface CountryCode_KN {
    __kind: 'KN'
}

export interface CountryCode_LC {
    __kind: 'LC'
}

export interface CountryCode_MF {
    __kind: 'MF'
}

export interface CountryCode_PM {
    __kind: 'PM'
}

export interface CountryCode_VC {
    __kind: 'VC'
}

export interface CountryCode_WS {
    __kind: 'WS'
}

export interface CountryCode_SM {
    __kind: 'SM'
}

export interface CountryCode_ST {
    __kind: 'ST'
}

export interface CountryCode_SA {
    __kind: 'SA'
}

export interface CountryCode_SN {
    __kind: 'SN'
}

export interface CountryCode_RS {
    __kind: 'RS'
}

export interface CountryCode_SC {
    __kind: 'SC'
}

export interface CountryCode_SL {
    __kind: 'SL'
}

export interface CountryCode_SG {
    __kind: 'SG'
}

export interface CountryCode_SK {
    __kind: 'SK'
}

export interface CountryCode_SI {
    __kind: 'SI'
}

export interface CountryCode_SB {
    __kind: 'SB'
}

export interface CountryCode_SO {
    __kind: 'SO'
}

export interface CountryCode_ZA {
    __kind: 'ZA'
}

export interface CountryCode_GS {
    __kind: 'GS'
}

export interface CountryCode_SS {
    __kind: 'SS'
}

export interface CountryCode_ES {
    __kind: 'ES'
}

export interface CountryCode_LK {
    __kind: 'LK'
}

export interface CountryCode_SD {
    __kind: 'SD'
}

export interface CountryCode_SR {
    __kind: 'SR'
}

export interface CountryCode_SJ {
    __kind: 'SJ'
}

export interface CountryCode_SZ {
    __kind: 'SZ'
}

export interface CountryCode_SE {
    __kind: 'SE'
}

export interface CountryCode_CH {
    __kind: 'CH'
}

export interface CountryCode_SY {
    __kind: 'SY'
}

export interface CountryCode_TW {
    __kind: 'TW'
}

export interface CountryCode_TJ {
    __kind: 'TJ'
}

export interface CountryCode_TZ {
    __kind: 'TZ'
}

export interface CountryCode_TH {
    __kind: 'TH'
}

export interface CountryCode_TL {
    __kind: 'TL'
}

export interface CountryCode_TG {
    __kind: 'TG'
}

export interface CountryCode_TK {
    __kind: 'TK'
}

export interface CountryCode_TO {
    __kind: 'TO'
}

export interface CountryCode_TT {
    __kind: 'TT'
}

export interface CountryCode_TN {
    __kind: 'TN'
}

export interface CountryCode_TR {
    __kind: 'TR'
}

export interface CountryCode_TM {
    __kind: 'TM'
}

export interface CountryCode_TC {
    __kind: 'TC'
}

export interface CountryCode_TV {
    __kind: 'TV'
}

export interface CountryCode_UG {
    __kind: 'UG'
}

export interface CountryCode_UA {
    __kind: 'UA'
}

export interface CountryCode_AE {
    __kind: 'AE'
}

export interface CountryCode_GB {
    __kind: 'GB'
}

export interface CountryCode_US {
    __kind: 'US'
}

export interface CountryCode_UM {
    __kind: 'UM'
}

export interface CountryCode_UY {
    __kind: 'UY'
}

export interface CountryCode_UZ {
    __kind: 'UZ'
}

export interface CountryCode_VU {
    __kind: 'VU'
}

export interface CountryCode_VE {
    __kind: 'VE'
}

export interface CountryCode_VN {
    __kind: 'VN'
}

export interface CountryCode_VI {
    __kind: 'VI'
}

export interface CountryCode_WF {
    __kind: 'WF'
}

export interface CountryCode_EH {
    __kind: 'EH'
}

export interface CountryCode_YE {
    __kind: 'YE'
}

export interface CountryCode_ZM {
    __kind: 'ZM'
}

export interface CountryCode_ZW {
    __kind: 'ZW'
}

export interface CountryCode_BQ {
    __kind: 'BQ'
}

export interface CountryCode_CW {
    __kind: 'CW'
}

export interface CountryCode_SX {
    __kind: 'SX'
}

export type AssetPermissions = AssetPermissions_Whole | AssetPermissions_These | AssetPermissions_Except

export interface AssetPermissions_Whole {
    __kind: 'Whole'
}

export interface AssetPermissions_These {
    __kind: 'These'
    value: Uint8Array[]
}

export interface AssetPermissions_Except {
    __kind: 'Except'
    value: Uint8Array[]
}

export type PortfolioPermissions = PortfolioPermissions_Whole | PortfolioPermissions_These | PortfolioPermissions_Except

export interface PortfolioPermissions_Whole {
    __kind: 'Whole'
}

export interface PortfolioPermissions_These {
    __kind: 'These'
    value: PortfolioId[]
}

export interface PortfolioPermissions_Except {
    __kind: 'Except'
    value: PortfolioId[]
}

export interface LegacyPalletPermissions {
    palletName: string
    total: boolean
    dispatchableNames: string[]
}

export interface ZkProofData {
    challengeResponses: Uint8Array[]
    subtractExpressionsRes: Uint8Array
    blindedScopeDidHash: Uint8Array
}

export type GrandpaEquivocation = GrandpaEquivocation_Prevote | GrandpaEquivocation_Precommit

export interface GrandpaEquivocation_Prevote {
    __kind: 'Prevote'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Precommit {
    __kind: 'Precommit'
    value: GrandpaEquivocationValue
}

export interface OpaqueNetworkState {
    peerId: Uint8Array
    externalAddresses: Uint8Array[]
}

export type DocumentHash = DocumentHash_None | DocumentHash_H512 | DocumentHash_H384 | DocumentHash_H320 | DocumentHash_H256 | DocumentHash_H224 | DocumentHash_H192 | DocumentHash_H160 | DocumentHash_H128

export interface DocumentHash_None {
    __kind: 'None'
}

export interface DocumentHash_H512 {
    __kind: 'H512'
    value: Uint8Array
}

export interface DocumentHash_H384 {
    __kind: 'H384'
    value: Uint8Array
}

export interface DocumentHash_H320 {
    __kind: 'H320'
    value: Uint8Array
}

export interface DocumentHash_H256 {
    __kind: 'H256'
    value: Uint8Array
}

export interface DocumentHash_H224 {
    __kind: 'H224'
    value: Uint8Array
}

export interface DocumentHash_H192 {
    __kind: 'H192'
    value: Uint8Array
}

export interface DocumentHash_H160 {
    __kind: 'H160'
    value: Uint8Array
}

export interface DocumentHash_H128 {
    __kind: 'H128'
    value: Uint8Array
}

export type PortfolioKind = PortfolioKind_Default | PortfolioKind_User

export interface PortfolioKind_Default {
    __kind: 'Default'
}

export interface PortfolioKind_User {
    __kind: 'User'
    value: bigint
}

export interface CalendarPeriod {
    unit: CalendarUnit
    amount: bigint
}

export type ConditionType = ConditionType_IsPresent | ConditionType_IsAbsent | ConditionType_IsAnyOf | ConditionType_IsNoneOf | ConditionType_IsIdentity

export interface ConditionType_IsPresent {
    __kind: 'IsPresent'
    value: Claim
}

export interface ConditionType_IsAbsent {
    __kind: 'IsAbsent'
    value: Claim
}

export interface ConditionType_IsAnyOf {
    __kind: 'IsAnyOf'
    value: Claim[]
}

export interface ConditionType_IsNoneOf {
    __kind: 'IsNoneOf'
    value: Claim[]
}

export interface ConditionType_IsIdentity {
    __kind: 'IsIdentity'
    value: TargetIdentity
}

export type TrustedFor = TrustedFor_Any | TrustedFor_Specific

export interface TrustedFor_Any {
    __kind: 'Any'
}

export interface TrustedFor_Specific {
    __kind: 'Specific'
    value: ClaimType[]
}

export type TargetTreatment = TargetTreatment_Include | TargetTreatment_Exclude

export interface TargetTreatment_Include {
    __kind: 'Include'
}

export interface TargetTreatment_Exclude {
    __kind: 'Exclude'
}

export interface Motion {
    title: string
    infoLink: string
    choices: string[]
}

export interface PalletPermissions {
    palletName: string
    dispatchableNames: DispatchableNames
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Uint8Array
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface GrandpaEquivocationValue {
    roundNumber: bigint
    identity: Uint8Array
    first: [GrandpaPrevote, Uint8Array]
    second: [GrandpaPrevote, Uint8Array]
}

export type CalendarUnit = CalendarUnit_Second | CalendarUnit_Minute | CalendarUnit_Hour | CalendarUnit_Day | CalendarUnit_Week | CalendarUnit_Month | CalendarUnit_Year

export interface CalendarUnit_Second {
    __kind: 'Second'
}

export interface CalendarUnit_Minute {
    __kind: 'Minute'
}

export interface CalendarUnit_Hour {
    __kind: 'Hour'
}

export interface CalendarUnit_Day {
    __kind: 'Day'
}

export interface CalendarUnit_Week {
    __kind: 'Week'
}

export interface CalendarUnit_Month {
    __kind: 'Month'
}

export interface CalendarUnit_Year {
    __kind: 'Year'
}

export type TargetIdentity = TargetIdentity_ExternalAgent | TargetIdentity_Specific

export interface TargetIdentity_ExternalAgent {
    __kind: 'ExternalAgent'
}

export interface TargetIdentity_Specific {
    __kind: 'Specific'
    value: Uint8Array
}

export type DispatchableNames = DispatchableNames_Whole | DispatchableNames_These | DispatchableNames_Except

export interface DispatchableNames_Whole {
    __kind: 'Whole'
}

export interface DispatchableNames_These {
    __kind: 'These'
    value: string[]
}

export interface DispatchableNames_Except {
    __kind: 'Except'
    value: string[]
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value: (ChangesTrieConfiguration | undefined)
}

export interface GrandpaPrevote {
    targetHash: Uint8Array
    targetNumber: number
}
