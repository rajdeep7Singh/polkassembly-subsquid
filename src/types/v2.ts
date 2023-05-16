import type {Result, Option} from './support'

export type Type_86 = Type_86_Ok | Type_86_Err

export interface Type_86_Ok {
    __kind: 'Ok'
}

export interface Type_86_Err {
    __kind: 'Err'
    value: DispatchError
}

export interface AccountData {
    free: bigint
    reserved: bigint
    miscFrozen: bigint
    feeFrozen: bigint
}

export interface Bounty {
    proposer: Uint8Array
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    bond: bigint
    status: BountyStatus
}

export interface ChildBounty {
    parentBounty: number
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    status: ChildBountyStatus
}

export type Call = Call_System | Call_ParachainSystem | Call_Timestamp | Call_Balances | Call_Authorship | Call_CollatorSelection | Call_Session | Call_XcmpQueue | Call_PolkadotXcm | Call_DmpQueue | Call_Bounties | Call_Treasury | Call_ChildBounties | Call_Assets | Call_Council | Call_Society | Call_Identity | Call_Recovery | Call_Indices | Call_Membership | Call_Multisig | Call_Vesting | Call_Sudo | Call_Proxy | Call_Remark | Call_Preimage | Call_Whitelist | Call_BitcoinVaults | Call_Uniques | Call_Fruniques | Call_GatedMarketplace | Call_RBAC | Call_ConfidentialDocs

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesCall
}

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_Membership {
    __kind: 'Membership'
    value: MembershipCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Remark {
    __kind: 'Remark'
    value: RemarkCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_BitcoinVaults {
    __kind: 'BitcoinVaults'
    value: BitcoinVaultsCall
}

export interface Call_Uniques {
    __kind: 'Uniques'
    value: UniquesCall
}

export interface Call_Fruniques {
    __kind: 'Fruniques'
    value: FruniquesCall
}

export interface Call_GatedMarketplace {
    __kind: 'GatedMarketplace'
    value: GatedMarketplaceCall
}

export interface Call_RBAC {
    __kind: 'RBAC'
    value: RBACCall
}

export interface Call_ConfidentialDocs {
    __kind: 'ConfidentialDocs'
    value: ConfidentialDocsCall
}

export type RequestStatus = RequestStatus_Unrequested | RequestStatus_Requested

export interface RequestStatus_Unrequested {
    __kind: 'Unrequested'
    value: ([Uint8Array, bigint] | undefined)
}

export interface RequestStatus_Requested {
    __kind: 'Requested'
    value: number
}

export interface AccountInfo {
    nonce: number
    consumers: number
    providers: number
    sufficients: number
    data: AccountData
}

export interface Proposal {
    proposer: Uint8Array
    value: bigint
    beneficiary: Uint8Array
    bond: bigint
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export type BountyStatus = BountyStatus_Proposed | BountyStatus_Approved | BountyStatus_Funded | BountyStatus_CuratorProposed | BountyStatus_Active | BountyStatus_PendingPayout

export interface BountyStatus_Proposed {
    __kind: 'Proposed'
}

export interface BountyStatus_Approved {
    __kind: 'Approved'
}

export interface BountyStatus_Funded {
    __kind: 'Funded'
}

export interface BountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: Uint8Array
}

export interface BountyStatus_Active {
    __kind: 'Active'
    curator: Uint8Array
    updateDue: number
}

export interface BountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: Uint8Array
    beneficiary: Uint8Array
    unlockAt: number
}

export type ChildBountyStatus = ChildBountyStatus_Added | ChildBountyStatus_CuratorProposed | ChildBountyStatus_Active | ChildBountyStatus_PendingPayout

export interface ChildBountyStatus_Added {
    __kind: 'Added'
}

export interface ChildBountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: Uint8Array
}

export interface ChildBountyStatus_Active {
    __kind: 'Active'
    curator: Uint8Array
}

export interface ChildBountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: Uint8Array
    beneficiary: Uint8Array
    unlockAt: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
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
    remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
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
    code: Uint8Array
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
    code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

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
    message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
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
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

/**
 * Set the list of invulnerable (fixed) collators.
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: Uint8Array[]
}

/**
 * Set the ideal number of collators (not including the invulnerables).
 * If lowering this number, then the number of running collators could be higher than this figure.
 * Aside from that edge case, there should be no other way to have more collators than the desired number.
 */
export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

/**
 * Set the candidacy bond amount.
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

/**
 * Register this account as a collator candidate. The account must (a) already have
 * registered session keys and (b) be able to reserve the `CandidacyBond`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * Deregister `origin` as a collator candidate. Note that the collator can only leave on
 * session change. The `CandidacyBond` will be unreserved immediately.
 * 
 * This call will fail if the total number of candidates would drop below `MinCandidates`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

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
    proof: Uint8Array
}

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * Services a single overweight XCM.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight XCM to service
 * - `weight_limit`: The amount of weight that XCM execution may take.
 * 
 * Errors:
 * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
 * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
 * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * Resumes all XCM executions for the XCMP queue.
 * 
 * Note that this function doesn't change the status of the in/out bound channels.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
 * suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which must be in the queue after which we drop any further
 * messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
 * message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * Overwrites the amount of remaining weight under which we stop processing messages.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.threshold_weight`
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: bigint
}

/**
 * Overwrites the speed to which the available weight approaches the maximum weight.
 * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: bigint
}

/**
 * Overwrite the maximum amount of weight any individual message may consume.
 * Messages above this weight go into the overweight queue and may only be serviced explicitly.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
    __kind: 'update_xcmp_max_individual_weight'
    new: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_245
    maxWeight: bigint
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V1MultiLocation
    xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `Unknown`: Message of `index` is unknown.
 * - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

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
    description: Uint8Array
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
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_spend | TreasuryCall_remove_approval

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
 * Propose and approve a spend of treasury funds.
 * 
 * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 * 
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * The original deposit will no longer be returned.
 * 
 * May only be called from `T::RejectOrigin`.
 * - `proposal_id`: The index of a proposal
 * 
 * # <weight>
 * - Complexity: O(A) where `A` is the number of approvals
 * - Db reads and writes: `Approvals`
 * # </weight>
 * 
 * Errors:
 * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
 * i.e., the proposal has not been approved. This could also mean the proposal does not
 * exist altogether, thus there is no way it would have been approved in the first place.
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ChildBountiesCall = ChildBountiesCall_add_child_bounty | ChildBountiesCall_propose_curator | ChildBountiesCall_accept_curator | ChildBountiesCall_unassign_curator | ChildBountiesCall_award_child_bounty | ChildBountiesCall_claim_child_bounty | ChildBountiesCall_close_child_bounty

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
 * Upper bound to maximum number of active  child bounties that can be
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
    description: Uint8Array
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
export interface ChildBountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * Award child-bounty to a beneficiary.
 * 
 * The beneficiary will be able to claim the funds after a delay.
 * 
 * The dispatch origin for this call must be the parent curator or
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsCall = AssetsCall_create | AssetsCall_force_create | AssetsCall_destroy | AssetsCall_mint | AssetsCall_burn | AssetsCall_transfer | AssetsCall_transfer_keep_alive | AssetsCall_force_transfer | AssetsCall_freeze | AssetsCall_thaw | AssetsCall_freeze_asset | AssetsCall_thaw_asset | AssetsCall_transfer_ownership | AssetsCall_set_team | AssetsCall_set_metadata | AssetsCall_clear_metadata | AssetsCall_force_set_metadata | AssetsCall_force_clear_metadata | AssetsCall_force_asset_status | AssetsCall_approve_transfer | AssetsCall_cancel_approval | AssetsCall_force_cancel_approval | AssetsCall_transfer_approved | AssetsCall_touch | AssetsCall_refund

/**
 * Issue a new class of fungible assets from a public origin.
 * 
 * This new asset class has no assets initially and its owner is the origin.
 * 
 * The origin must be Signed and the sender must have sufficient funds free.
 * 
 * Funds of sender are reserved by `AssetDeposit`.
 * 
 * Parameters:
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `admin`: The admin of this class of assets. The admin is the initial address of each
 * member of the asset class's admin team.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_create {
    __kind: 'create'
    id: number
    admin: MultiAddress
    minBalance: bigint
}

/**
 * Issue a new class of fungible assets from a privileged origin.
 * 
 * This new asset class has no assets initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `owner`: The owner of this class of assets. The owner has full superuser permissions
 * over this asset, but may later change and configure the permissions using
 * `transfer_ownership` and `set_team`.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_create {
    __kind: 'force_create'
    id: number
    owner: MultiAddress
    isSufficient: boolean
    minBalance: bigint
}

/**
 * Destroy a class of fungible assets.
 * 
 * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
 * owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 * asset.
 * 
 * Emits `Destroyed` event when successful.
 * 
 * NOTE: It can be helpful to first freeze an asset before destroying it so that you
 * can provide accurate witness information and prevent users from manipulating state
 * in a way that can make it harder to destroy.
 * 
 * Weight: `O(c + p + a)` where:
 * - `c = (witness.accounts - witness.sufficients)`
 * - `s = witness.sufficients`
 * - `a = witness.approvals`
 */
export interface AssetsCall_destroy {
    __kind: 'destroy'
    id: number
    witness: DestroyWitness
}

/**
 * Mint assets of a particular class.
 * 
 * The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount minted.
 * - `beneficiary`: The account to be credited with the minted assets.
 * - `amount`: The amount of the asset to be minted.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    id: number
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * 
 * Origin must be Signed and the sender should be the Manager of the asset `id`.
 * 
 * Bails with `NoAccount` if the `who` is already dead.
 * 
 * - `id`: The identifier of the asset to have some amount burned.
 * - `who`: The account to be debited from.
 * - `amount`: The maximum amount by which `who`'s balance should be reduced.
 * 
 * Emits `Burned` with the actual amount burned. If this takes the balance to below the
 * minimum for the asset, then the amount burned is increased to take it to zero.
 * 
 * Weight: `O(1)`
 * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    id: number
    who: MultiAddress
    amount: bigint
}

/**
 * Move some assets from the sender account to another.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    id: number
    target: MultiAddress
    amount: bigint
}

/**
 * Move some assets from the sender account to another, keeping the sender account alive.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface AssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: number
    target: MultiAddress
    amount: bigint
}

/**
 * Move some assets from one account to another.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `source`: The account to be debited.
 * - `dest`: The account to be credited.
 * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
 * `dest`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the `source` balance above zero but
 * below the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 * `dest`.
 */
export interface AssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: number
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * Disallow further unprivileged transfers from an account.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_freeze {
    __kind: 'freeze'
    id: number
    who: MultiAddress
}

/**
 * Allow unprivileged transfers from an account again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be unfrozen.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_thaw {
    __kind: 'thaw'
    id: number
    who: MultiAddress
}

/**
 * Disallow further unprivileged transfers for the asset class.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: number
}

/**
 * Allow unprivileged transfers for the asset again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be thawed.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: number
}

/**
 * Change the Owner of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: number
    owner: MultiAddress
}

/**
 * Change the Issuer, Admin and Freezer of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_set_team {
    __kind: 'set_team'
    id: number
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * Set the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Funds of sender are reserved according to the formula:
 * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 * account any already reserved funds.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: number
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Any deposit is freed for the asset owner.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: number
}

/**
 * Force the metadata for an asset to some value.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is left alone.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
export interface AssetsCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: number
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
    isFrozen: boolean
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is returned.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: number
}

/**
 * Alter the attributes of a given asset.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 * value to account for the state bloat associated with its balance storage. If set to
 * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
 * an ED in the Balances pallet or whatever else is used to control user-account state
 * growth).
 * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 * instructions.
 * 
 * Emits `AssetStatusChanged` with the identity of the asset.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_asset_status {
    __kind: 'force_asset_status'
    id: number
    owner: MultiAddress
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
    minBalance: bigint
    isSufficient: boolean
    isFrozen: boolean
}

/**
 * Approve an amount of asset for transfer by a delegated third-party account.
 * 
 * Origin must be Signed.
 * 
 * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 * for the purpose of holding the approval. If some non-zero amount of assets is already
 * approved from signing account to `delegate`, then it is topped up or unreserved to
 * meet the right value.
 * 
 * NOTE: The signing account does not need to own `amount` of assets at the point of
 * making this call.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account to delegate permission to transfer asset.
 * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
 * already an approval in place, then this acts additively.
 * 
 * Emits `ApprovedTransfer` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: number
    delegate: MultiAddress
    amount: bigint
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be Signed and there must be an approval in place between signer and
 * `delegate`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: number
    delegate: MultiAddress
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 * account of the asset `id`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: number
    owner: MultiAddress
    delegate: MultiAddress
}

/**
 * Transfer some asset balance from a previously delegated account to some third-party
 * account.
 * 
 * Origin must be Signed and there must be an approval in place by the `owner` to the
 * signer.
 * 
 * If the entire amount approved for transfer is transferred, then any deposit previously
 * reserved by `approve_transfer` is unreserved.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The account which previously approved for a transfer of at least `amount` and
 * from which the asset balance will be withdrawn.
 * - `destination`: The account to which the asset balance of `amount` will be transferred.
 * - `amount`: The amount of assets to transfer.
 * 
 * Emits `TransferredApproved` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: number
    owner: MultiAddress
    destination: MultiAddress
    amount: bigint
}

/**
 * Create an asset account for non-provider assets.
 * 
 * A deposit will be taken from the signer account.
 * 
 * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *   to be taken.
 * - `id`: The identifier of the asset for the account to be created.
 * 
 * Emits `Touched` event when successful.
 */
export interface AssetsCall_touch {
    __kind: 'touch'
    id: number
}

/**
 * Return the deposit (if any) of an asset account.
 * 
 * The origin must be Signed.
 * 
 * - `id`: The identifier of the asset for the account to be created.
 * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface AssetsCall_refund {
    __kind: 'refund'
    id: number
    allowBurn: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

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
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
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
    proposal: Uint8Array
    index: number
    approve: boolean
}

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
    proposalHash: Uint8Array
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
    proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SocietyCall = SocietyCall_bid | SocietyCall_unbid | SocietyCall_vouch | SocietyCall_unvouch | SocietyCall_vote | SocietyCall_defender_vote | SocietyCall_payout | SocietyCall_found | SocietyCall_unfound | SocietyCall_judge_suspended_member | SocietyCall_judge_suspended_candidate | SocietyCall_set_max_members

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
    who: Uint8Array
    value: bigint
    tip: bigint
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
    founder: Uint8Array
    maxMembers: number
    rules: Uint8Array
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
    who: Uint8Array
    forgive: boolean
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
    who: Uint8Array
    judgement: Judgement
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
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

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
    account: Uint8Array
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
    subs: [Uint8Array, Data][]
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
    new: Uint8Array
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
    fields: bigint
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
    judgement: Type_336
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_set_recovered | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_vouch_recovery | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_remove_recovery | RecoveryCall_cancel_recovered

/**
 * Send a call through a recovered account.
 * 
 * The dispatch origin for this call must be _Signed_ and registered to
 * be able to make calls on behalf of the recovered account.
 * 
 * Parameters:
 * - `account`: The recovered account you want to make a call on-behalf-of.
 * - `call`: The call you want to make with the recovered account.
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: Uint8Array
    call: Call
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
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: Uint8Array
    rescuer: Uint8Array
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
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: Uint8Array[]
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
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: Uint8Array
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
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: Uint8Array
    rescuer: Uint8Array
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
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: Uint8Array
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
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: Uint8Array
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
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 * Cancel the ability to use `as_recovered` for `account`.
 * 
 * The dispatch origin for this call must be _Signed_ and registered to
 * be able to make calls on behalf of the recovered account.
 * 
 * Parameters:
 * - `account`: The recovered account you are able to call on-behalf-of.
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

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
    new: Uint8Array
    index: number
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
    new: Uint8Array
    index: number
    freeze: boolean
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MembershipCall = MembershipCall_add_member | MembershipCall_remove_member | MembershipCall_swap_member | MembershipCall_reset_members | MembershipCall_change_key | MembershipCall_set_prime | MembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface MembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface MembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface MembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface MembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface MembershipCall_change_key {
    __kind: 'change_key'
    new: Uint8Array
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface MembershipCall_set_prime {
    __kind: 'set_prime'
    who: Uint8Array
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface MembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

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
    otherSignatories: Uint8Array[]
    call: Call
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
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Uint8Array
    storeCall: boolean
    maxWeight: bigint
}

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
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: bigint
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
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_merge_schedules

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

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
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Call
}

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
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
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
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
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
    spawner: Uint8Array
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
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
    real: Uint8Array
    callHash: Uint8Array
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
    real: Uint8Array
    callHash: Uint8Array
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
    delegate: Uint8Array
    callHash: Uint8Array
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
    delegate: Uint8Array
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RemarkCall = RemarkCall_store

/**
 * Index and store data off chain.
 */
export interface RemarkCall_store {
    __kind: 'store'
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Uint8Array
}

/**
 * Clear an unrequested preimage from the runtime storage.
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: Uint8Array
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: Uint8Array
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type WhitelistCall = WhitelistCall_whitelist_call | WhitelistCall_remove_whitelisted_call | WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage

export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: Uint8Array
}

export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: Uint8Array
}

export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: Uint8Array
    callWeightWitness: bigint
}

export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BitcoinVaultsCall = BitcoinVaultsCall_set_xpub | BitcoinVaultsCall_remove_xpub | BitcoinVaultsCall_create_vault | BitcoinVaultsCall_remove_vault | BitcoinVaultsCall_propose | BitcoinVaultsCall_remove_proposal | BitcoinVaultsCall_set_bdk_url | BitcoinVaultsCall_save_psbt | BitcoinVaultsCall_finalize_psbt | BitcoinVaultsCall_broadcast_psbt | BitcoinVaultsCall_kill_storage | BitcoinVaultsCall_ocw_insert_descriptors | BitcoinVaultsCall_ocw_insert_psbts | BitcoinVaultsCall_ocw_finalize_psbts

/**
 * ## XPub insertion
 * 
 * This extrinsic inserts a user-defined xpub
 * as well as in the pallet storage.
 * 
 * ### Parameters:
 * - `xpub`: Extended public key, it can be sent with or without fingerprint/derivation path
 * 
 * ### Considerations
 * - The origin must be Signed and the sender must have sufficient funds free for the transaction fee.
 * - This extrinsic is marked as transactional, so if an error is fired, all the changes will be reverted (but the
 *  fees will be applied nonetheless).
 * - This extrinsic cannot handle a xpub update (yet). if it needs to be updated, remove it first and insert
 * a new one.
 */
export interface BitcoinVaultsCall_set_xpub {
    __kind: 'set_xpub'
    xpub: Uint8Array
}

/**
 * ## Xpub removal
 * 
 * Removes the linked xpub from the account which signs the transaction.
 * The xpub will be removed from both the pallet storage and identity registration.
 * 
 * This tx does not takes any parameters.
 * 
 */
export interface BitcoinVaultsCall_remove_xpub {
    __kind: 'remove_xpub'
}

/**
 * Vault insertion
 * 
 * Inserts the vault on chain. Meant to be used by an offchain worker.
 * 
 * ### Parameters:
 * - `threshold`: The number of signatures needed for a proposal to be approved/finalized
 * - `description`: A small definition. What will the vault be used for?
 * - `include_owner_as_cosigner`: Add automatically the owner as cosigner
 * - `cosigners`: The other accounts that will participate in vault proposals.
 * 
 * ### Considerations
 * - Do not include the vault owner on the `cosigners` list.
 * 
 */
export interface BitcoinVaultsCall_create_vault {
    __kind: 'create_vault'
    threshold: number
    description: Uint8Array
    includeOwnerAsCosigner: boolean
    cosigners: Uint8Array[]
}

/**
 * Vault removal
 * 
 * Tries to remove vault and all its proposals, only the owner can call this extrinsic.
 * 
 * ### Parameters:
 * - `vault_id`: the vault to be removed with all its proposals
 * 
 * ### Considerations:
 * - Only the vault owner can perform this extrinsic
 * 
 */
export interface BitcoinVaultsCall_remove_vault {
    __kind: 'remove_vault'
    vaultId: Uint8Array
}

/**
 * Vault transaction proposal
 * 
 * Inserts a proposal on the specified vault.
 * 
 * ### Parameters:
 * - `vault_id`: the vault identifier in which the proposal will be inserted
 * - `recipient_address`: Mainnet address to which the funds will be send
 * - `amount_in_sats`: Amount to send in satoshis.
 * - `description`: The reason for the proposal, why do you are proposing this?.
 * 
 * ### Considerations
 * - Please ensure the recipient address is a valid mainnet address.
 */
export interface BitcoinVaultsCall_propose {
    __kind: 'propose'
    vaultId: Uint8Array
    recipientAddress: Uint8Array
    amountInSats: bigint
    description: Uint8Array
}

/**
 * Proposal removal
 * 
 * Tries to remove a specified proposal. Only the user who created the proposal can remove it.
 * 
 * ### Parameters:
 * - `proposal_id`: the proposal identifier
 * 
 */
export interface BitcoinVaultsCall_remove_proposal {
    __kind: 'remove_proposal'
    proposalId: Uint8Array
}

/**
 * BDK URL insertion
 * 
 * Changes the BDK-services endpoint, useful for pointing to the btc mainnet or testnet
 * 
 * ### Parameters:
 * - `new_url`: The new endpoint to which all the bdk related requests will be sent.  
 * 
 * ### Considerations
 * - Ensure the new url is valid.
 * - The url has a maximum length of 32 bytes
 */
export interface BitcoinVaultsCall_set_bdk_url {
    __kind: 'set_bdk_url'
    newUrl: Uint8Array
}

/**
 * PSBT signature insertion
 * 
 * Stores the signature for a PSBT proposal 
 * 
 * 
 * ### Parameters:
 * - `proposal_id`: the proposal identifier
 * - `signature_payload`: a blob of psbt bytes, resulting from a external wallet 
 * 
 * ### Considerations
 * - If successful, this process cannot be undone
 * - A user can only sign a proposal once 
 */
export interface BitcoinVaultsCall_save_psbt {
    __kind: 'save_psbt'
    proposalId: Uint8Array
    signaturePayload: Uint8Array
}

/**
 * Finalize PSBT
 * 
 * Queries a proposal to be finalized generating a tx_id in the process, it can also be broadcasted if specified.
 * 
 * ### Parameters:
 * - `proposal_id`: the proposal identifier
 * - `broadcast`: A boolean flag 
 * 
 * ### Considerations
 * - If successful, this process cannot be undone
 * - The proposal must have a valid PSBT
 * - Any vault member can perform this extrinsic
 */
export interface BitcoinVaultsCall_finalize_psbt {
    __kind: 'finalize_psbt'
    proposalId: Uint8Array
    broadcast: boolean
}

/**
 * Broadcast PSBT
 * 
 * Queries a proposal to be broadcasted in case it wasn't on the finalization step.
 * 
 * ### Parameters:
 * - `proposal_id`: the vault identifier in which the proposal will be inserted
 * 
 * ### Considerations
 * - If successful, this process cannot be undone
 * - The proposal must be finalized already
 * - Any vault member can perform this extrinsic
 */
export interface BitcoinVaultsCall_broadcast_psbt {
    __kind: 'broadcast_psbt'
    proposalId: Uint8Array
}

/**
 * Kill almost all storage
 * 
 * Use with caution!
 * 
 * Can only be called by root and removes All vaults and proposals
 */
export interface BitcoinVaultsCall_kill_storage {
    __kind: 'kill_storage'
}

/**
 * Extrinsic to insert a valid vault descriptor
 * 
 * Meant to be unsigned with signed payload and used by an offchain worker
 * 
 */
export interface BitcoinVaultsCall_ocw_insert_descriptors {
    __kind: 'ocw_insert_descriptors'
    payload: VaultsPayload
    signature: MultiSignature
}

/**
 * Extrinsic to insert a valid proposal PSBT
 * 
 * Meant to be unsigned with signed payload and used by an offchain worker
 * 
 */
export interface BitcoinVaultsCall_ocw_insert_psbts {
    __kind: 'ocw_insert_psbts'
    payload: ProposalsPayload
    signature: MultiSignature
}

/**
 * Extrinsic to insert a valid proposal TX_ID
 * 
 * Meant to be unsigned with signed payload and used by an offchain worker
 * 
 */
export interface BitcoinVaultsCall_ocw_finalize_psbts {
    __kind: 'ocw_finalize_psbts'
    payload: ProposalsPayload
    signature: MultiSignature
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UniquesCall = UniquesCall_create | UniquesCall_force_create | UniquesCall_destroy | UniquesCall_mint | UniquesCall_burn | UniquesCall_transfer | UniquesCall_redeposit | UniquesCall_freeze | UniquesCall_thaw | UniquesCall_freeze_collection | UniquesCall_thaw_collection | UniquesCall_transfer_ownership | UniquesCall_set_team | UniquesCall_approve_transfer | UniquesCall_cancel_approval | UniquesCall_force_item_status | UniquesCall_set_attribute | UniquesCall_clear_attribute | UniquesCall_set_metadata | UniquesCall_clear_metadata | UniquesCall_set_collection_metadata | UniquesCall_clear_collection_metadata | UniquesCall_set_accept_ownership | UniquesCall_set_collection_max_supply | UniquesCall_set_price | UniquesCall_buy_item

/**
 * Issue a new collection of non-fungible items from a public origin.
 * 
 * This new collection has no items initially and its owner is the origin.
 * 
 * The origin must be Signed and the sender must have sufficient funds free.
 * 
 * `ItemDeposit` funds of sender are reserved.
 * 
 * Parameters:
 * - `collection`: The identifier of the new collection. This must not be currently in use.
 * - `admin`: The admin of this collection. The admin is the initial address of each
 * member of the collection's admin team.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_create {
    __kind: 'create'
    collection: number
    admin: MultiAddress
}

/**
 * Issue a new collection of non-fungible items from a privileged origin.
 * 
 * This new collection has no items initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `collection`: The identifier of the new item. This must not be currently in use.
 * - `owner`: The owner of this collection of items. The owner has full superuser
 *   permissions
 * over this item, but may later change and configure the permissions using
 * `transfer_ownership` and `set_team`.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_force_create {
    __kind: 'force_create'
    collection: number
    owner: MultiAddress
    freeHolding: boolean
}

/**
 * Destroy a collection of fungible items.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 * owner of the `collection`.
 * 
 * - `collection`: The identifier of the collection to be destroyed.
 * - `witness`: Information on the items minted in the collection. This must be
 * correct.
 * 
 * Emits `Destroyed` event when successful.
 * 
 * Weight: `O(n + m)` where:
 * - `n = witness.items`
 * - `m = witness.item_metadatas`
 * - `a = witness.attributes`
 */
export interface UniquesCall_destroy {
    __kind: 'destroy'
    collection: number
    witness: Type_375
}

/**
 * Mint an item of a particular collection.
 * 
 * The origin must be Signed and the sender must be the Issuer of the `collection`.
 * 
 * - `collection`: The collection of the item to be minted.
 * - `item`: The item value of the item to be minted.
 * - `beneficiary`: The initial owner of the minted item.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_mint {
    __kind: 'mint'
    collection: number
    item: number
    owner: MultiAddress
}

/**
 * Destroy a single item.
 * 
 * Origin must be Signed and the sender should be the Admin of the `collection`.
 * 
 * - `collection`: The collection of the item to be burned.
 * - `item`: The item of the item to be burned.
 * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
 *   item is owned by this value.
 * 
 * Emits `Burned` with the actual amount burned.
 * 
 * Weight: `O(1)`
 * Modes: `check_owner.is_some()`.
 */
export interface UniquesCall_burn {
    __kind: 'burn'
    collection: number
    item: number
    checkOwner: (MultiAddress | undefined)
}

/**
 * Move an item from the sender account to another.
 * 
 * Origin must be Signed and the signing account must be either:
 * - the Admin of the `collection`;
 * - the Owner of the `item`;
 * - the approved delegate for the `item` (in this case, the approval is reset).
 * 
 * Arguments:
 * - `collection`: The collection of the item to be transferred.
 * - `item`: The item of the item to be transferred.
 * - `dest`: The account to receive ownership of the item.
 * 
 * Emits `Transferred`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_transfer {
    __kind: 'transfer'
    collection: number
    item: number
    dest: MultiAddress
}

/**
 * Reevaluate the deposits on some items.
 * 
 * Origin must be Signed and the sender should be the Owner of the `collection`.
 * 
 * - `collection`: The collection to be frozen.
 * - `items`: The items of the collection whose deposits will be reevaluated.
 * 
 * NOTE: This exists as a best-effort function. Any items which are unknown or
 * in the case that the owner account does not have reservable funds to pay for a
 * deposit increase are ignored. Generally the owner isn't going to call this on items
 * whose existing deposit is less than the refreshed deposit as it would only cost them,
 * so it's of little consequence.
 * 
 * It will still return an error in the case that the collection is unknown of the signer
 * is not permitted to call it.
 * 
 * Weight: `O(items.len())`
 */
export interface UniquesCall_redeposit {
    __kind: 'redeposit'
    collection: number
    items: number[]
}

/**
 * Disallow further unprivileged transfer of an item.
 * 
 * Origin must be Signed and the sender should be the Freezer of the `collection`.
 * 
 * - `collection`: The collection of the item to be frozen.
 * - `item`: The item of the item to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_freeze {
    __kind: 'freeze'
    collection: number
    item: number
}

/**
 * Re-allow unprivileged transfer of an item.
 * 
 * Origin must be Signed and the sender should be the Freezer of the `collection`.
 * 
 * - `collection`: The collection of the item to be thawed.
 * - `item`: The item of the item to be thawed.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_thaw {
    __kind: 'thaw'
    collection: number
    item: number
}

/**
 * Disallow further unprivileged transfers for a whole collection.
 * 
 * Origin must be Signed and the sender should be the Freezer of the `collection`.
 * 
 * - `collection`: The collection to be frozen.
 * 
 * Emits `CollectionFrozen`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_freeze_collection {
    __kind: 'freeze_collection'
    collection: number
}

/**
 * Re-allow unprivileged transfers for a whole collection.
 * 
 * Origin must be Signed and the sender should be the Admin of the `collection`.
 * 
 * - `collection`: The collection to be thawed.
 * 
 * Emits `CollectionThawed`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_thaw_collection {
    __kind: 'thaw_collection'
    collection: number
}

/**
 * Change the Owner of a collection.
 * 
 * Origin must be Signed and the sender should be the Owner of the `collection`.
 * 
 * - `collection`: The collection whose owner should be changed.
 * - `owner`: The new Owner of this collection. They must have called
 *   `set_accept_ownership` with `collection` in order for this operation to succeed.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_transfer_ownership {
    __kind: 'transfer_ownership'
    collection: number
    owner: MultiAddress
}

/**
 * Change the Issuer, Admin and Freezer of a collection.
 * 
 * Origin must be Signed and the sender should be the Owner of the `collection`.
 * 
 * - `collection`: The collection whose team should be changed.
 * - `issuer`: The new Issuer of this collection.
 * - `admin`: The new Admin of this collection.
 * - `freezer`: The new Freezer of this collection.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_team {
    __kind: 'set_team'
    collection: number
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * Approve an item to be transferred by a delegated third-party account.
 * 
 * Origin must be Signed and must be the owner of the `item`.
 * 
 * - `collection`: The collection of the item to be approved for delegated transfer.
 * - `item`: The item of the item to be approved for delegated transfer.
 * - `delegate`: The account to delegate permission to transfer the item.
 * 
 * Emits `ApprovedTransfer` on success.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_approve_transfer {
    __kind: 'approve_transfer'
    collection: number
    item: number
    delegate: MultiAddress
}

/**
 * Cancel the prior approval for the transfer of an item by a delegate.
 * 
 * Origin must be either:
 * - the `Force` origin;
 * - `Signed` with the signer being the Admin of the `collection`;
 * - `Signed` with the signer being the Owner of the `item`;
 * 
 * Arguments:
 * - `collection`: The collection of the item of whose approval will be cancelled.
 * - `item`: The item of the item of whose approval will be cancelled.
 * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
 *   which permission of transfer is delegated.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_cancel_approval {
    __kind: 'cancel_approval'
    collection: number
    item: number
    maybeCheckDelegate: (MultiAddress | undefined)
}

/**
 * Alter the attributes of a given item.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `collection`: The identifier of the item.
 * - `owner`: The new Owner of this item.
 * - `issuer`: The new Issuer of this item.
 * - `admin`: The new Admin of this item.
 * - `freezer`: The new Freezer of this item.
 * - `free_holding`: Whether a deposit is taken for holding an item of this collection.
 * - `is_frozen`: Whether this collection is frozen except for permissioned/admin
 * instructions.
 * 
 * Emits `ItemStatusChanged` with the identity of the item.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_force_item_status {
    __kind: 'force_item_status'
    collection: number
    owner: MultiAddress
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
    freeHolding: boolean
    isFrozen: boolean
}

/**
 * Set an attribute for a collection or item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * `collection`.
 * 
 * If the origin is Signed, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
 * account any already reserved funds.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to set.
 * - `maybe_item`: The identifier of the item whose metadata to set.
 * - `key`: The key of the attribute.
 * - `value`: The value to which to set the attribute.
 * 
 * Emits `AttributeSet`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_attribute {
    __kind: 'set_attribute'
    collection: number
    maybeItem: (number | undefined)
    key: Uint8Array
    value: Uint8Array
}

/**
 * Clear an attribute for a collection or item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * `collection`.
 * 
 * Any deposit is freed for the collection's owner.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to clear.
 * - `maybe_item`: The identifier of the item whose metadata to clear.
 * - `key`: The key of the attribute.
 * 
 * Emits `AttributeCleared`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_clear_attribute {
    __kind: 'clear_attribute'
    collection: number
    maybeItem: (number | undefined)
    key: Uint8Array
}

/**
 * Set the metadata for an item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * `collection`.
 * 
 * If the origin is Signed, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * data.len` taking into
 * account any already reserved funds.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to set.
 * - `item`: The identifier of the item whose metadata to set.
 * - `data`: The general information of this item. Limited in length by `StringLimit`.
 * - `is_frozen`: Whether the metadata should be frozen against further changes.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_metadata {
    __kind: 'set_metadata'
    collection: number
    item: number
    data: Uint8Array
    isFrozen: boolean
}

/**
 * Clear the metadata for an item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * `item`.
 * 
 * Any deposit is freed for the collection's owner.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to clear.
 * - `item`: The identifier of the item whose metadata to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_clear_metadata {
    __kind: 'clear_metadata'
    collection: number
    item: number
}

/**
 * Set the metadata for a collection.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 * the `collection`.
 * 
 * If the origin is `Signed`, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * data.len` taking into
 * account any already reserved funds.
 * 
 * - `collection`: The identifier of the item whose metadata to update.
 * - `data`: The general information of this item. Limited in length by `StringLimit`.
 * - `is_frozen`: Whether the metadata should be frozen against further changes.
 * 
 * Emits `CollectionMetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_collection_metadata {
    __kind: 'set_collection_metadata'
    collection: number
    data: Uint8Array
    isFrozen: boolean
}

/**
 * Clear the metadata for a collection.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 * the `collection`.
 * 
 * Any deposit is freed for the collection's owner.
 * 
 * - `collection`: The identifier of the collection whose metadata to clear.
 * 
 * Emits `CollectionMetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_clear_collection_metadata {
    __kind: 'clear_collection_metadata'
    collection: number
}

/**
 * Set (or reset) the acceptance of ownership for a particular account.
 * 
 * Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
 * provider reference.
 * 
 * - `maybe_collection`: The identifier of the collection whose ownership the signer is
 *   willing to accept, or if `None`, an indication that the signer is willing to accept no
 *   ownership transferal.
 * 
 * Emits `OwnershipAcceptanceChanged`.
 */
export interface UniquesCall_set_accept_ownership {
    __kind: 'set_accept_ownership'
    maybeCollection: (number | undefined)
}

/**
 * Set the maximum amount of items a collection could have.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 * the `collection`.
 * 
 * Note: This function can only succeed once per collection.
 * 
 * - `collection`: The identifier of the collection to change.
 * - `max_supply`: The maximum amount of items a collection could have.
 * 
 * Emits `CollectionMaxSupplySet` event when successful.
 */
export interface UniquesCall_set_collection_max_supply {
    __kind: 'set_collection_max_supply'
    collection: number
    maxSupply: number
}

/**
 * Set (or reset) the price for an item.
 * 
 * Origin must be Signed and must be the owner of the asset `item`.
 * 
 * - `collection`: The collection of the item.
 * - `item`: The item to set the price for.
 * - `price`: The price for the item. Pass `None`, to reset the price.
 * - `buyer`: Restricts the buy operation to a specific account.
 * 
 * Emits `ItemPriceSet` on success if the price is not `None`.
 * Emits `ItemPriceRemoved` on success if the price is `None`.
 */
export interface UniquesCall_set_price {
    __kind: 'set_price'
    collection: number
    item: number
    price: (bigint | undefined)
    whitelistedBuyer: (MultiAddress | undefined)
}

/**
 * Allows to buy an item if it's up for sale.
 * 
 * Origin must be Signed and must not be the owner of the `item`.
 * 
 * - `collection`: The collection of the item.
 * - `item`: The item the sender wants to buy.
 * - `bid_price`: The price the sender is willing to pay.
 * 
 * Emits `ItemBought` on success.
 */
export interface UniquesCall_buy_item {
    __kind: 'buy_item'
    collection: number
    item: number
    bidPrice: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FruniquesCall = FruniquesCall_initial_setup | FruniquesCall_create_collection | FruniquesCall_instance_exists | FruniquesCall_set_attributes | FruniquesCall_spawn | FruniquesCall_force_set_counter | FruniquesCall_force_destroy_collection | FruniquesCall_kill_storage

export interface FruniquesCall_initial_setup {
    __kind: 'initial_setup'
}

/**
 * # Creation of a collection
 * This function creates a collection and an asset class.
 * The collection is a unique identifier for a set of fruniques.
 * 
 * ## Parameters
 * - `origin`: The origin of the transaction.
 * - `Metadata`: The title of the collection.
 */
export interface FruniquesCall_create_collection {
    __kind: 'create_collection'
    metadata: (Uint8Array | undefined)
}

export interface FruniquesCall_instance_exists {
    __kind: 'instance_exists'
    classId: number
    instanceId: number
}

/**
 * ## Set multiple attributes to a frunique.
 * - `origin` must be signed by the owner of the frunique.
 * - `class_id` must be a valid class of the asset class.
 * - `instance_id` must be a valid instance of the asset class.
 * - `attributes` must be a list of pairs of `key` and `value`.
 */
export interface FruniquesCall_set_attributes {
    __kind: 'set_attributes'
    classId: number
    instanceId: number
    attributes: [Uint8Array, Uint8Array][]
}

/**
 * ## NFT creation
 * ### Parameters:
 * - `origin` must be signed by the owner of the frunique.
 * - `class_id` must be a valid class of the asset class.
 * - `parent_info` Optional value needed for the NFT division.
 * - `attributes` An array of attributes (key, value) to be added to the NFT.
 */
export interface FruniquesCall_spawn {
    __kind: 'spawn'
    classId: number
    parentInfo: ([number, boolean, number] | undefined)
    attributes: ([Uint8Array, Uint8Array][] | undefined)
}

/**
 * ## Force set counter
 * ### Parameters:
 * `origin` must be signed by the Root origin.
 * - `class_id` must be a valid class of the asset class.
 * - `instance_id` must be a valid instance of the asset class.
 * 
 * ### Considerations:
 * This function is only used for testing purposes. Or in case someone calls uniques pallet directly.
 * This function it's not expected to be used in production as it can lead to unexpected results.
 */
export interface FruniquesCall_force_set_counter {
    __kind: 'force_set_counter'
    classId: number
    instanceId: (number | undefined)
}

/**
 * ## Force destroy collection
 * ### Parameters:
 * - `origin` must be signed by the Root origin.
 * - `class_id` must be a valid class of the asset class.
 * - `witness` the witness data to destroy the collection. This is used to prevent accidental destruction of the collection. The witness data is retrieved from the `class` storage.
 * - `maybe_check_owner` Optional value to check if the owner of the collection is the same as the signer.
 * ### Considerations:
 * This function is only used for testing purposes. Or in case someone calls uniques pallet directly.
 * This function it's not expected to be used in production as it can lead to unexpected results.
 */
export interface FruniquesCall_force_destroy_collection {
    __kind: 'force_destroy_collection'
    classId: number
    witness: Type_375
    maybeCheckOwner: (Uint8Array | undefined)
}

/**
 * Kill all the stored data.
 * 
 * This function is used to kill ALL the stored data.
 * Use with caution!
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * 
 * ### Considerations:
 * - This function is only available to the `admin` with sudo access.
 */
export interface FruniquesCall_kill_storage {
    __kind: 'kill_storage'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GatedMarketplaceCall = GatedMarketplaceCall_initial_setup | GatedMarketplaceCall_create_marketplace | GatedMarketplaceCall_apply | GatedMarketplaceCall_reapply | GatedMarketplaceCall_enroll | GatedMarketplaceCall_add_authority | GatedMarketplaceCall_remove_authority | GatedMarketplaceCall_update_label_marketplace | GatedMarketplaceCall_remove_marketplace | GatedMarketplaceCall_enlist_sell_offer | GatedMarketplaceCall_take_sell_offer | GatedMarketplaceCall_remove_offer | GatedMarketplaceCall_enlist_buy_offer | GatedMarketplaceCall_take_buy_offer | GatedMarketplaceCall_kill_storage

export interface GatedMarketplaceCall_initial_setup {
    __kind: 'initial_setup'
}

/**
 * Create a new marketplace.
 * 
 * Creates a new marketplace with the given label
 * .
 * ### Parameters:
 * - `origin`: The owner of the marketplace.
 * - `admin`: The admin of the marketplace.
 * - `label`: The name of the marketplace.
 */
export interface GatedMarketplaceCall_create_marketplace {
    __kind: 'create_marketplace'
    admin: Uint8Array
    label: Uint8Array
}

/**
 * Apply to a marketplace.
 * 
 * Applies to the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The applicant.
 * - `marketplace_id`: The id of the marketplace where we want to apply.
 * - `fields`: Confidential user documents, any files necessary for the application
 * - `custodian_fields`: The custodian account and their documents.
 * 
 * ### Considerations:
 * - You can add many documents, up to the maximum allowed (10).
 * - The custodian account is optional. You can apply to a marketplace without a
 * custodian account.
 * - All custodian fields are optional.
 */
export interface GatedMarketplaceCall_apply {
    __kind: 'apply'
    marketplaceId: Uint8Array
    fields: [Uint8Array, Uint8Array][]
    custodianFields: ([Uint8Array, Uint8Array[]] | undefined)
}

/**
 * Accept or reject a reapplyment.
 * 
 * Allows the applicant for a second chance to apply to the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The reapplicant.
 * - `marketplace_id`: The id of the marketplace where we want to reapply.
 * - `fields`: Confidential user documents, any files necessary for the reapplication
 * - `custodian_fields`: The custodian account and their documents.
 * 
 * ### Considerations:
 * - Since this is a second chance, you can replace your previous documents, up to the maximum allowed (10).
 * - The custodian account is optional. You can replace the previous custodian.
 * - Since we know the application exists, we can check the current status of the application.
 */
export interface GatedMarketplaceCall_reapply {
    __kind: 'reapply'
    marketplaceId: Uint8Array
    fields: [Uint8Array, Uint8Array][]
    custodianFields: ([Uint8Array, Uint8Array[]] | undefined)
}

/**
 * Accept or reject an application.
 * 
 * If the application is accepted,
 * the user will be added to the list of applicants.
 * If the application is rejected,
 * the user will be moved to the list of rejected applicants.
 * 
 * ### Parameters:
 * - `origin`:  The owner/admin of the marketplace.
 * - `marketplace_id`: The id of the marketplace where we want to enroll users.
 * - `account_or_application`: The account or application id to accept or reject.
 * - `approved`:  Whether to accept or reject the account/application.
 * 
 * ### Considerations:
 * - You can only accept or reject applications where you are the owner/admin of the marketplace.
 * - Ensure that your extrinsic has selected the right option account/application
 * because some fields changes.
 * - If you select `Account` you need to enter the account to be accepted.
 * - If you select `Application` you need to enter the `application_id` to be accepted.
 */
export interface GatedMarketplaceCall_enroll {
    __kind: 'enroll'
    marketplaceId: Uint8Array
    accountOrApplication: AccountOrApplication
    approved: boolean
    feedback: Uint8Array
}

/**
 * Add an Authority type
 * 
 * This extrinsic adds an authority type for the selected account
 * from the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `account`: The account to be removed.
 * - `authority_type`: The type of authority to be added.
 * - `marketplace_id`: The id of the marketplace where we want to add the account.
 * 
 * ### Considerations:
 * If the user has already applied to the marketplace for that particular
 * authority type, it will throw an error.
 */
export interface GatedMarketplaceCall_add_authority {
    __kind: 'add_authority'
    account: Uint8Array
    authorityType: MarketplaceRole
    marketplaceId: Uint8Array
}

/**
 * Remove an Authority type
 * 
 * This extrinsic removes an authority type for the selected account from the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `account`: The account to be removed.
 * - `authority_type`: The type of authority to be removed.
 * - `marketplace_id`: The id of the marketplace where we want to remove the account.
 * 
 * ### Considerations:
 * - This extrinsic doesn't remove the account from the marketplace,
 * it only removes the selected authority type for that account.
 * If the user doesn't have the selected authority type, it will throw an error.
 */
export interface GatedMarketplaceCall_remove_authority {
    __kind: 'remove_authority'
    account: Uint8Array
    authorityType: MarketplaceRole
    marketplaceId: Uint8Array
}

/**
 * Update marketplace's label.
 * 
 * This extrinsic updates the label of the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `marketplace_id`: The id of the marketplace where we want to update the label.
 * - `label`: The new label for the selected marketplace.
 * 
 * ### Considerations:
 * - You can only update the label of the marketplace where you are the owner/admin of the marketplace.
 * - The label must be less than or equal to `T::LabelMaxLen
 * - If the selected marketplace doesn't exist, it will throw an error.
 */
export interface GatedMarketplaceCall_update_label_marketplace {
    __kind: 'update_label_marketplace'
    marketplaceId: Uint8Array
    newLabel: Uint8Array
}

/**
 * Remove a particular marketplace.
 * 
 * This extrinsic removes the selected marketplace.
 * It removes all the applications related with the marketplace.
 * It removes all the authorities from the lists of the marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `marketplace_id`: The id of the marketplace to be removed.
 * 
 * ### Considerations:
 * - You can only remove the marketplace where you are the owner/admin of the marketplace.
 * - If the selected marketplace doesn't exist, it will throw an error.
 */
export interface GatedMarketplaceCall_remove_marketplace {
    __kind: 'remove_marketplace'
    marketplaceId: Uint8Array
}

/**
 * Enlist a sell order.
 * 
 * This extrinsic creates a sell order in the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `marketplace_id`: The id of the marketplace where we want to create the sell order.
 * - `collection_id`: The id of the collection.
 * - `item_id`: The id of the item inside the collection.
 * - `price`: The price of the item.
 * 
 * ### Considerations:
 * - You can only create a sell order in the marketplace if you are the owner of the item.
 * - You can create only one sell order for each item per marketplace.
 * - If the selected marketplace doesn't exist, it will throw an error.
 * - If the selected collection doesn't exist, it will throw an error.
 */
export interface GatedMarketplaceCall_enlist_sell_offer {
    __kind: 'enlist_sell_offer'
    marketplaceId: Uint8Array
    collectionId: number
    itemId: number
    price: bigint
}

/**
 * Accepts a sell order.
 * 
 * This extrisicn is called by the user who wants to buy the item.
 * Aaccepts a sell order in the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - 'offer_id`: The id of the sell order to be accepted.
 * - `marketplace_id`: The id of the marketplace where we want to accept the sell order.
 * 
 * ### Considerations:
 * - You don't need to be the owner of the item to accept the sell order.
 * - Once the sell order is accepted, the ownership of the item is transferred to the buyer.
 * - If you don't have the enough balance to accept the sell order, it will throw an error.
 */
export interface GatedMarketplaceCall_take_sell_offer {
    __kind: 'take_sell_offer'
    offerId: Uint8Array
}

/**
 * Delete an offer.
 * 
 * This extrinsic deletes an offer in the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `offer_id`: The id of the offer to be deleted.
 * 
 * ### Considerations:
 * - You can delete sell orders or buy orders.
 * - You can only delete an offer if you are the creator of the offer.
 * - Only open offers can be deleted.
 * - If you need to delete multiple offers for the same item, you need to
 *  delete them one by one.
 */
export interface GatedMarketplaceCall_remove_offer {
    __kind: 'remove_offer'
    offerId: Uint8Array
}

/**
 * Enlist a buy order.
 * 
 * This extrinsic creates a buy order in the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `marketplace_id`: The id of the marketplace where we want to create the buy order.
 * - `collection_id`: The id of the collection.
 * - `item_id`: The id of the item inside the collection.
 * - `price`: The price of the item.
 * 
 * ### Considerations:
 * - Any user can create a buy order in the marketplace.
 * - An item can receive multiple buy orders at a time.
 * - You need to have the enough balance to create the buy order.
 */
export interface GatedMarketplaceCall_enlist_buy_offer {
    __kind: 'enlist_buy_offer'
    marketplaceId: Uint8Array
    collectionId: number
    itemId: number
    price: bigint
}

/**
 * Accepts a buy order.
 * 
 * This extrinsic is called by the owner of the item who accepts the buy offer created by a marketparticipant.
 * Accepts a buy order in the selected marketplace.
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * - `offer_id`: The id of the buy order to be accepted.
 * - `marketplace_id`: The id of the marketplace where we accept the buy order.
 * 
 * ### Considerations:
 * - You need to be the owner of the item to accept a buy order.
 * - Owner of the item can accept only one buy order at a time.
 * - When an offer is accepted, all the other offers for this item are closed.
 * - The buyer needs to have the enough balance to accept the buy order.
 * - Once the buy order is accepted, the ownership of the item is transferred to the buyer.
 */
export interface GatedMarketplaceCall_take_buy_offer {
    __kind: 'take_buy_offer'
    offerId: Uint8Array
}

/**
 * Kill all the stored data.
 * 
 * This function is used to kill ALL the stored data.
 * Use with caution!
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action.
 * 
 * ### Considerations:
 * - This function is only available to the `admin` with sudo access.
 */
export interface GatedMarketplaceCall_kill_storage {
    __kind: 'kill_storage'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RBACCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ConfidentialDocsCall = ConfidentialDocsCall_set_vault | ConfidentialDocsCall_set_owned_document | ConfidentialDocsCall_remove_owned_document | ConfidentialDocsCall_share_document | ConfidentialDocsCall_update_shared_document_metadata | ConfidentialDocsCall_remove_shared_document | ConfidentialDocsCall_kill_storage

/**
 * Create/Update a vault
 * 
 * Creates/Updates the calling user's vault and sets their public cipher key
 * .
 * ### Parameters:
 * - `origin`: The user that is configuring their vault
 * - `user_id`: User identifier generated from their login method, their address if using 
 * native login or user id if using SSO
 * - `public key`: The users cipher public key
 * - `cid`: The IPFS CID that contains the vaults data
 */
export interface ConfidentialDocsCall_set_vault {
    __kind: 'set_vault'
    userId: Uint8Array
    publicKey: Uint8Array
    cid: Uint8Array
}

/**
 * Create/Update an owned document
 * 
 * Creates a new owned document or updates an existing owned document's metadata
 * .
 * ### Parameters:
 * - `origin`: The user that is creating/updating an owned document
 * - `owned_doc`: Metadata related to the owned document
 */
export interface ConfidentialDocsCall_set_owned_document {
    __kind: 'set_owned_document'
    ownedDoc: OwnedDoc
}

/**
 * Remove an owned document
 * 
 * Removes an owned document
 * .
 * ### Parameters:
 * - `origin`: The owner of the document
 * - `cid`: of the document to be removed
 */
export interface ConfidentialDocsCall_remove_owned_document {
    __kind: 'remove_owned_document'
    cid: Uint8Array
}

/**
 * Share a document
 * 
 * Creates a shared document
 * .
 * ### Parameters:
 * - `origin`: The user that is creating the shared document
 * - `shared_doc`: Metadata related to the shared document
 */
export interface ConfidentialDocsCall_share_document {
    __kind: 'share_document'
    sharedDoc: SharedDoc
}

/**
 * Update share document metadata
 * 
 * Updates share document metadata, only the user with which the document
 * was shared can update it
 * .
 * ### Parameters:
 * - `origin`: The "to" user of the shared document
 * - `shared_doc`: Metadata related to the shared document
 */
export interface ConfidentialDocsCall_update_shared_document_metadata {
    __kind: 'update_shared_document_metadata'
    sharedDoc: SharedDoc
}

/**
 * Remove a shared document
 * 
 * Removes a shared document, only the user with whom the document was
 * is able to remove it
 * .
 * ### Parameters:
 * - `origin`: The "to" user of the shared document
 * - `cid`: of the document to be removed
 */
export interface ConfidentialDocsCall_remove_shared_document {
    __kind: 'remove_shared_document'
    cid: Uint8Array
}

/**
 * Kill all the stored data.
 * 
 * This function is used to kill ALL the stored data.
 * Use with caution!
 * 
 * ### Parameters:
 * - `origin`: The user who performs the action. 
 * 
 * ### Considerations:
 * - This function is only available to the `admin` with sudo access.
 */
export interface ConfidentialDocsCall_kill_storage {
    __kind: 'kill_storage'
}

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export interface ParachainInherentData {
    validationData: V2PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface MultiAddress_Index {
    __kind: 'Index'
    value: null
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export interface SessionKeys {
    aura: Uint8Array
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: V1MultiLocation
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
    __kind: 'V0'
    value: V0Xcm
}

export interface VersionedXcm_V1 {
    __kind: 'V1'
    value: V1Xcm
}

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: V1MultiAsset[]
}

export type Type_245 = Type_245_V0 | Type_245_V1 | Type_245_V2

export interface Type_245_V0 {
    __kind: 'V0'
    value: Type_246
}

export interface Type_245_V1 {
    __kind: 'V1'
    value: Type_251
}

export interface Type_245_V2 {
    __kind: 'V2'
    value: Type_257[]
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface DestroyWitness {
    accounts: number
    sufficients: number
    approvals: number
}

export type Judgement = Judgement_Rebid | Judgement_Reject | Judgement_Approve

export interface Judgement_Rebid {
    __kind: 'Rebid'
}

export interface Judgement_Reject {
    __kind: 'Reject'
}

export interface Judgement_Approve {
    __kind: 'Approve'
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: (Uint8Array | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Uint8Array
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Uint8Array
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Uint8Array
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Uint8Array
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Uint8Array
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Uint8Array
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Uint8Array
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Uint8Array
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Uint8Array
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Uint8Array
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Uint8Array
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Uint8Array
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Uint8Array
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Uint8Array
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Uint8Array
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Uint8Array
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Uint8Array
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Uint8Array
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Uint8Array
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Uint8Array
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Uint8Array
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Uint8Array
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Uint8Array
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Uint8Array
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Uint8Array
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Uint8Array
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Uint8Array
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Uint8Array
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Uint8Array
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Uint8Array
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Uint8Array
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Uint8Array
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Uint8Array
}

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Uint8Array
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Uint8Array
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Uint8Array
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Uint8Array
}

export type Type_336 = Type_336_Unknown | Type_336_FeePaid | Type_336_Reasonable | Type_336_KnownGood | Type_336_OutOfDate | Type_336_LowQuality | Type_336_Erroneous

export interface Type_336_Unknown {
    __kind: 'Unknown'
}

export interface Type_336_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Type_336_Reasonable {
    __kind: 'Reasonable'
}

export interface Type_336_KnownGood {
    __kind: 'KnownGood'
}

export interface Type_336_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Type_336_LowQuality {
    __kind: 'LowQuality'
}

export interface Type_336_Erroneous {
    __kind: 'Erroneous'
}

export interface Timepoint {
    height: number
    index: number
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_Marketplaces

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Marketplaces {
    __kind: 'Marketplaces'
}

export interface VaultsPayload {
    vaultsPayload: SingleVaultPayload[]
    public: MultiSigner
}

export type MultiSignature = MultiSignature_Ed25519 | MultiSignature_Sr25519 | MultiSignature_Ecdsa

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export interface ProposalsPayload {
    proposalsPayload: SingleProposalPayload[]
    public: MultiSigner
}

export interface Type_375 {
    items: number
    itemMetadatas: number
    attributes: number
}

export type AccountOrApplication = AccountOrApplication_Account | AccountOrApplication_Application

export interface AccountOrApplication_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface AccountOrApplication_Application {
    __kind: 'Application'
    value: Uint8Array
}

export type MarketplaceRole = MarketplaceRole_Owner | MarketplaceRole_Admin | MarketplaceRole_Appraiser | MarketplaceRole_RedemptionSpecialist | MarketplaceRole_Participant

export interface MarketplaceRole_Owner {
    __kind: 'Owner'
}

export interface MarketplaceRole_Admin {
    __kind: 'Admin'
}

export interface MarketplaceRole_Appraiser {
    __kind: 'Appraiser'
}

export interface MarketplaceRole_RedemptionSpecialist {
    __kind: 'RedemptionSpecialist'
}

export interface MarketplaceRole_Participant {
    __kind: 'Participant'
}

export interface OwnedDoc {
    cid: Uint8Array
    name: Uint8Array
    description: Uint8Array
    owner: Uint8Array
}

export interface SharedDoc {
    cid: Uint8Array
    name: Uint8Array
    description: Uint8Array
    from: Uint8Array
    to: Uint8Array
}

export interface V2PersistedValidationData {
    parentHead: Uint8Array
    relayParentNumber: number
    relayParentStorageRoot: Uint8Array
    maxPovSize: number
}

export interface StorageProof {
    trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Uint8Array
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Uint8Array
}

export interface Digest {
    logs: DigestItem[]
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
    __kind: 'Null'
}

export interface V0MultiLocation_X1 {
    __kind: 'X1'
    value: V0Junction
}

export interface V0MultiLocation_X2 {
    __kind: 'X2'
    value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
    __kind: 'X3'
    value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
    __kind: 'X4'
    value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
    __kind: 'X5'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
    __kind: 'X6'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
    __kind: 'X7'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
    __kind: 'X8'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export type V0Xcm = V0Xcm_WithdrawAsset | V0Xcm_ReserveAssetDeposit | V0Xcm_TeleportAsset | V0Xcm_QueryResponse | V0Xcm_TransferAsset | V0Xcm_TransferReserveAsset | V0Xcm_Transact | V0Xcm_HrmpNewChannelOpenRequest | V0Xcm_HrmpChannelAccepted | V0Xcm_HrmpChannelClosing | V0Xcm_RelayedFrom

export interface V0Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface V0Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V0Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V0Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V0Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V0Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: V0Xcm
}

export type V1Xcm = V1Xcm_WithdrawAsset | V1Xcm_ReserveAssetDeposited | V1Xcm_ReceiveTeleportedAsset | V1Xcm_QueryResponse | V1Xcm_TransferAsset | V1Xcm_TransferReserveAsset | V1Xcm_Transact | V1Xcm_HrmpNewChannelOpenRequest | V1Xcm_HrmpChannelAccepted | V1Xcm_HrmpChannelClosing | V1Xcm_RelayedFrom | V1Xcm_SubscribeVersion | V1Xcm_UnsubscribeVersion

export interface V1Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface V1Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V1Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V1Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V1Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V1Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V1Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: V1Xcm
}

export interface V1Xcm_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V1Xcm_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
    __kind: 'None'
}

export interface V0MultiAsset_All {
    __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
    __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Uint8Array
    amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Uint8Array
    instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: V0MultiLocation
    amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: V0MultiLocation
    instance: V1AssetInstance
}

export interface V1MultiAsset {
    id: V1AssetId
    fun: V1Fungibility
}

export type Type_246 = Type_246_WithdrawAsset | Type_246_ReserveAssetDeposit | Type_246_TeleportAsset | Type_246_QueryResponse | Type_246_TransferAsset | Type_246_TransferReserveAsset | Type_246_Transact | Type_246_HrmpNewChannelOpenRequest | Type_246_HrmpChannelAccepted | Type_246_HrmpChannelClosing | Type_246_RelayedFrom

export interface Type_246_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_248[]
}

export interface Type_246_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_248[]
}

export interface Type_246_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_248[]
}

export interface Type_246_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_246_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_246_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_246_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_246_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_246_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_246_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_246_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_246
}

export type Type_251 = Type_251_WithdrawAsset | Type_251_ReserveAssetDeposited | Type_251_ReceiveTeleportedAsset | Type_251_QueryResponse | Type_251_TransferAsset | Type_251_TransferReserveAsset | Type_251_Transact | Type_251_HrmpNewChannelOpenRequest | Type_251_HrmpChannelAccepted | Type_251_HrmpChannelClosing | Type_251_RelayedFrom | Type_251_SubscribeVersion | Type_251_UnsubscribeVersion

export interface Type_251_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_253[]
}

export interface Type_251_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_253[]
}

export interface Type_251_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_253[]
}

export interface Type_251_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_251_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_251_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_251_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_251_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_251_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_251_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_251_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_251
}

export interface Type_251_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_251_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_257 = Type_257_WithdrawAsset | Type_257_ReserveAssetDeposited | Type_257_ReceiveTeleportedAsset | Type_257_QueryResponse | Type_257_TransferAsset | Type_257_TransferReserveAsset | Type_257_Transact | Type_257_HrmpNewChannelOpenRequest | Type_257_HrmpChannelAccepted | Type_257_HrmpChannelClosing | Type_257_ClearOrigin | Type_257_DescendOrigin | Type_257_ReportError | Type_257_DepositAsset | Type_257_DepositReserveAsset | Type_257_ExchangeAsset | Type_257_InitiateReserveWithdraw | Type_257_InitiateTeleport | Type_257_QueryHolding | Type_257_BuyExecution | Type_257_RefundSurplus | Type_257_SetErrorHandler | Type_257_SetAppendix | Type_257_ClearError | Type_257_ClaimAsset | Type_257_Trap | Type_257_SubscribeVersion | Type_257_UnsubscribeVersion

export interface Type_257_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_257_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_257_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_257_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_257_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_257_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_257_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_257_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_257_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_257_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_257_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_257_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_257_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_257_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_257_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_257_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_257_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_257_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_257_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_257_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_257_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_257_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_257[]
}

export interface Type_257_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_257[]
}

export interface Type_257_ClearError {
    __kind: 'ClearError'
}

export interface Type_257_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_257_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_257_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_257_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
    __kind: 'Here'
}

export interface V1Junctions_X1 {
    __kind: 'X1'
    value: V1Junction
}

export interface V1Junctions_X2 {
    __kind: 'X2'
    value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
    __kind: 'X3'
    value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
    __kind: 'X4'
    value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
    __kind: 'X5'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
    __kind: 'X6'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
    __kind: 'X7'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
    __kind: 'X8'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface SingleVaultPayload {
    vaultId: Uint8Array
    outputDescriptor: Uint8Array
    changeDescriptor: Uint8Array
    status: OffchainStatus
}

export type MultiSigner = MultiSigner_Ed25519 | MultiSigner_Sr25519 | MultiSigner_Ecdsa

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export interface SingleProposalPayload {
    proposalId: Uint8Array
    psbt: Uint8Array
    status: OffchainStatus
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
    __kind: 'Parent'
}

export interface V0Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V0Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V0Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V0Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V0Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V0Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V0Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V0Order = V0Order_Null | V0Order_DepositAsset | V0Order_DepositReserveAsset | V0Order_ExchangeAsset | V0Order_InitiateReserveWithdraw | V0Order_InitiateTeleport | V0Order_QueryHolding | V0Order_BuyExecution

export interface V0Order_Null {
    __kind: 'Null'
}

export interface V0Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface V0Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface V0Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: V0Xcm[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
    __kind: 'Assets'
    value: V0MultiAsset[]
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
    __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export type V1Order = V1Order_Noop | V1Order_DepositAsset | V1Order_DepositReserveAsset | V1Order_ExchangeAsset | V1Order_InitiateReserveWithdraw | V1Order_InitiateTeleport | V1Order_QueryHolding | V1Order_BuyExecution

export interface V1Order_Noop {
    __kind: 'Noop'
}

export interface V1Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V1Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V1Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface V1Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: V1Xcm[]
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V1Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V1MultiAsset[]
}

export interface V1MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V1WildMultiAsset
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V1AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V1AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V1AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V1AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V1AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
    __kind: 'Concrete'
    value: V1MultiLocation
}

export interface V1AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V1Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V1AssetInstance
}

export type Type_248 = Type_248_Null | Type_248_DepositAsset | Type_248_DepositReserveAsset | Type_248_ExchangeAsset | Type_248_InitiateReserveWithdraw | Type_248_InitiateTeleport | Type_248_QueryHolding | Type_248_BuyExecution

export interface Type_248_Null {
    __kind: 'Null'
}

export interface Type_248_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_248_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_248_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_248_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_248_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_248_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface Type_248_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_246[]
}

export type Type_253 = Type_253_Noop | Type_253_DepositAsset | Type_253_DepositReserveAsset | Type_253_ExchangeAsset | Type_253_InitiateReserveWithdraw | Type_253_InitiateTeleport | Type_253_QueryHolding | Type_253_BuyExecution

export interface Type_253_Noop {
    __kind: 'Noop'
}

export interface Type_253_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_253_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_253_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_253_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_253_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_253_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface Type_253_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_251[]
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V1Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V1Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V1Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V1Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V1Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V1Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type OffchainStatus = OffchainStatus_Pending | OffchainStatus_Valid | OffchainStatus_RecoverableError | OffchainStatus_IrrecoverableError

export interface OffchainStatus_Pending {
    __kind: 'Pending'
}

export interface OffchainStatus_Valid {
    __kind: 'Valid'
}

export interface OffchainStatus_RecoverableError {
    __kind: 'RecoverableError'
    value: Uint8Array
}

export interface OffchainStatus_IrrecoverableError {
    __kind: 'IrrecoverableError'
    value: Uint8Array
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
    __kind: 'Any'
}

export interface V0NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
    __kind: 'Unit'
}

export interface V0BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V0BodyId_Executive {
    __kind: 'Executive'
}

export interface V0BodyId_Technical {
    __kind: 'Technical'
}

export interface V0BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
    __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
    __kind: 'Voice'
}

export interface V0BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V0BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V0BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
    __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V1AssetId
    fun: V1WildFungibility
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
