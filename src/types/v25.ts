import type {Result, Option} from './support'

export type Type_48 = Type_48_Ok | Type_48_Err

export interface Type_48_Ok {
    __kind: 'Ok'
}

export interface Type_48_Err {
    __kind: 'Err'
    value: DispatchError
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export type Call = Call_System | Call_Timestamp | Call_Balances | Call_AssetRegistry | Call_Scheduler | Call_Democracy | Call_Elections | Call_Council | Call_TechnicalCommittee | Call_Treasury | Call_Utility | Call_Vesting | Call_ParachainSystem | Call_PolkadotXcm | Call_CumulusXcm | Call_XTokens | Call_DmpQueue | Call_Authorship | Call_CollatorSelection | Call_Session | Call_Currencies | Call_Tips | Call_Tokens | Call_XYK | Call_Duster | Call_Exchange | Call_LBP | Call_MultiTransactionPayment | Call_NFT | Call_PriceOracle | Call_Sudo

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_AssetRegistry {
    __kind: 'AssetRegistry'
    value: AssetRegistryCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
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

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
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

export interface Call_Currencies {
    __kind: 'Currencies'
    value: CurrenciesCall
}

export interface Call_Tips {
    __kind: 'Tips'
    value: TipsCall
}

export interface Call_Tokens {
    __kind: 'Tokens'
    value: TokensCall
}

export interface Call_XYK {
    __kind: 'XYK'
    value: XYKCall
}

export interface Call_Duster {
    __kind: 'Duster'
    value: DusterCall
}

export interface Call_Exchange {
    __kind: 'Exchange'
    value: ExchangeCall
}

export interface Call_LBP {
    __kind: 'LBP'
    value: LBPCall
}

export interface Call_MultiTransactionPayment {
    __kind: 'MultiTransactionPayment'
    value: MultiTransactionPaymentCall
}

export interface Call_NFT {
    __kind: 'NFT'
    value: NFTCall
}

export interface Call_PriceOracle {
    __kind: 'PriceOracle'
    value: PriceOracleCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export type PreimageStatus = PreimageStatus_Missing | PreimageStatus_Available

export interface PreimageStatus_Missing {
    __kind: 'Missing'
    value: number
}

export interface PreimageStatus_Available {
    __kind: 'Available'
    data: Uint8Array
    provider: Uint8Array
    deposit: bigint
    since: number
    expiry: (number | undefined)
}

export type ReferendumInfo = ReferendumInfo_Ongoing | ReferendumInfo_Finished

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export interface ReferendumInfo_Finished {
    __kind: 'Finished'
    approved: boolean
    end: number
}

export interface OpenTip {
    reason: Uint8Array
    who: Uint8Array
    finder: Uint8Array
    deposit: bigint
    closes: (number | undefined)
    tips: [Uint8Array, bigint][]
    findersFee: boolean
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

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
    index: number
    error: number
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

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
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write.
 * - Base Weight: 1.405 µs
 * - 1 write to HEAP_PAGES
 * - 1 digest item
 * # </weight>
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
 * Set the new changes trie configuration.
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write or delete (codec `O(1)`).
 * - 1 call to `deposit_log`: Uses `append` API, so O(1)
 * - Base Weight: 7.218 µs
 * - DB Weight:
 *     - Writes: Changes Trie, System Digest
 * # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 * Set some items of storage.
 * 
 * # <weight>
 * - `O(I)` where `I` length of `items`
 * - `I` storage writes (`O(1)`).
 * - Base Weight: 0.568 * i µs
 * - Writes: Number of items
 * # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 * 
 * # <weight>
 * - `O(IK)` where `I` length of `keys` and `K` length of one key
 * - `I` storage deletions.
 * - Base Weight: .378 * i µs
 * - Writes: Number of items
 * # </weight>
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
 * 
 * # <weight>
 * - `O(P)` where `P` amount of keys with prefix `prefix`
 * - `P` storage deletions.
 * - Base Weight: 0.834 * P µs
 * - Writes: Number of subkeys + 1
 * # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 * 
 * # <weight>
 * - `O(b)` where b is the length of the remark.
 * - 1 event.
 * # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
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
 * It will decrease the total issuance of the system by the `TransferFee`.
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
 * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 * - DB Weight: 1 Read and 1 Write to destination account
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: Uint8Array
    value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also decrease the total issuance of the system (`TotalIssuance`).
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 * 
 * # <weight>
 * - Independent of the arguments.
 * - Contains a limited number of reads and writes.
 * ---------------------
 * - Base Weight:
 *     - Creating: 27.56 µs
 *     - Killing: 35.11 µs
 * - DB Weight: 1 Read, 1 Write to `who`
 * # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: Uint8Array
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
    source: Uint8Array
    dest: Uint8Array
    value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 * # <weight>
 * - Cheaper than transfer because account cannot be killed.
 * - Base Weight: 51.4 µs
 * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 * #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: Uint8Array
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
    dest: Uint8Array
    keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: Uint8Array
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetRegistryCall = AssetRegistryCall_register | AssetRegistryCall_update | AssetRegistryCall_set_metadata | AssetRegistryCall_set_location

/**
 * Register a new asset.
 * 
 * Asset is identified by `name` and the name must not be used to register another asset.
 * 
 * New asset is given `NextAssetId` - sequential asset id
 * 
 * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
 * 
 * Emits 'Registered` event when successful.
 */
export interface AssetRegistryCall_register {
    __kind: 'register'
    name: Uint8Array
    assetType: AssetType
    existentialDeposit: bigint
}

/**
 * Update registered asset.
 * 
 * Updates also mapping between name and asset id if provided name is different than currently registered.
 * 
 * Emits `Updated` event when successful.
 */
export interface AssetRegistryCall_update {
    __kind: 'update'
    assetId: number
    name: Uint8Array
    assetType: AssetType
    existentialDeposit: (bigint | undefined)
}

/**
 * Set metadata for an asset.
 * 
 * - `asset_id`: Asset identifier.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet` event when successful.
 */
export interface AssetRegistryCall_set_metadata {
    __kind: 'set_metadata'
    assetId: number
    symbol: Uint8Array
    decimals: number
}

/**
 * Set asset native location.
 * 
 * Adds mapping between native location and local asset id and vice versa.
 * 
 * Mainly used in XCM.
 * 
 * Emits `LocationSet` event when successful.
 */
export interface AssetRegistryCall_set_location {
    __kind: 'set_location'
    assetId: number
    location: AssetLocation
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 22.29 + .126 * S µs
 * - DB Weight:
 *     - Read: Agenda
 *     - Write: Agenda
 * - Will use base weight of 25 which should be good for up to 30 scheduled calls
 * # </weight>
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Cancel an anonymously scheduled task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 22.15 + 2.869 * S µs
 * - DB Weight:
 *     - Read: Agenda
 *     - Write: Agenda, Lookup
 * - Will use base weight of 100 which should be good for up to 30 scheduled calls
 * # </weight>
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Schedule a named task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 29.6 + .159 * S µs
 * - DB Weight:
 *     - Read: Agenda, Lookup
 *     - Write: Agenda, Lookup
 * - Will use base weight of 35 which should be good for more than 30 scheduled calls
 * # </weight>
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Cancel a named scheduled task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 24.91 + 2.907 * S µs
 * - DB Weight:
 *     - Read: Agenda, Lookup
 *     - Write: Agenda, Lookup
 * - Will use base weight of 100 which should be good for up to 30 scheduled calls
 * # </weight>
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
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
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
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
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

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
    proposalHash: Uint8Array
    value: bigint
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
    proposalHash: Uint8Array
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
    proposalHash: Uint8Array
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
    proposalHash: Uint8Array
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
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
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
    proposalHash: Uint8Array
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
    to: Uint8Array
    conviction: Conviction
    balance: bigint
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
    encodedProposal: Uint8Array
}

/**
 * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Uint8Array
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
    encodedProposal: Uint8Array
}

/**
 * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Uint8Array
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
    proposalHash: Uint8Array
    proposalLenUpperBound: number
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
    target: Uint8Array
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
    target: Uint8Array
    index: number
}

/**
 * Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Uint8Array
    index: number
}

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
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionsCall = ElectionsCall_vote | ElectionsCall_remove_voter | ElectionsCall_submit_candidacy | ElectionsCall_renounce_candidacy | ElectionsCall_remove_member | ElectionsCall_clean_defunct_voters

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
 * If `value` is more than `who`'s total balance, then the maximum of the two is used.
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
    votes: Uint8Array[]
    value: bigint
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
    who: Uint8Array
    hasReplacement: boolean
}

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
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

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
export interface TechnicalCommitteeCall_close {
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
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

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
    beneficiary: Uint8Array
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_claim | VestingCall_vested_transfer | VestingCall_update_vesting_schedules | VestingCall_claim_for

export interface VestingCall_claim {
    __kind: 'claim'
}

export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    dest: Uint8Array
    schedule: VestingSchedule
}

export interface VestingCall_update_vesting_schedules {
    __kind: 'update_vesting_schedules'
    who: Uint8Array
    vestingSchedules: VestingSchedule[]
}

export interface VestingCall_claim_for {
    __kind: 'claim_for'
    dest: Uint8Array
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
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
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
    message: Type_209
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
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
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
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
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
export type CumulusXcmCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset

/**
 * Transfer native currencies.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: number
    amount: bigint
    dest: VersionedMultiLocation
    destWeight: bigint
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeight: bigint
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

export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: Uint8Array[]
}

export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

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
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: Uint8Array
    currencyId: number
    amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: Uint8Array
    amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
    __kind: 'update_balance'
    who: Uint8Array
    currencyId: number
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

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
    reason: Uint8Array
    who: Uint8Array
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
    hash: Uint8Array
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
    reason: Uint8Array
    who: Uint8Array
    tipValue: bigint
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
    hash: Uint8Array
    tipValue: bigint
}

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
    hash: Uint8Array
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
    hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TokensCall = TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive | TokensCall_force_transfer | TokensCall_set_balance

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the
 * `TransferFee`. If the sender's account is below the existential
 * deposit as a result of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer {
    __kind: 'transfer'
    dest: Uint8Array
    currencyId: number
    amount: bigint
}

/**
 * Transfer all remaining balance to the given account.
 * 
 * NOTE: This function only attempts to transfer _transferable_
 * balances. This means that any locked, reserved, or existential
 * deposits (when `keep_alive` is `true`), will not be transferred by
 * this function. To ensure that this function results in a killed
 * account, you might need to prepare the account by removing any
 * reference counters, storage deposits, etc...
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `keep_alive`: A boolean to determine if the `transfer_all`
 *   operation should send all of the funds the account has, causing
 *   the sender account to be killed (false), or transfer everything
 *   except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface TokensCall_transfer_all {
    __kind: 'transfer_all'
    dest: Uint8Array
    currencyId: number
    keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer
 * will not kill the origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: Uint8Array
    currencyId: number
    amount: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source
 * account may be specified.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The sender of the transfer.
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_force_transfer {
    __kind: 'force_transfer'
    source: Uint8Array
    dest: Uint8Array
    currencyId: number
    amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it
 * will also decrease the total issuance of the system
 * (`TotalIssuance`). If the new free or reserved balance is below the
 * existential deposit, it will reap the `AccountInfo`.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface TokensCall_set_balance {
    __kind: 'set_balance'
    who: Uint8Array
    currencyId: number
    newFree: bigint
    newReserved: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XYKCall = XYKCall_create_pool | XYKCall_add_liquidity | XYKCall_remove_liquidity | XYKCall_sell | XYKCall_buy

/**
 * Create new pool for given asset pair.
 * 
 * Registers new pool for given asset pair (`asset a` and `asset b`) in asset registry.
 * Asset registry creates new id or returns previously created one if such pool existed before.
 * 
 * Pool is created with initial liquidity provided by `origin`.
 * Shares are issued with specified initial price and represents proportion of asset in the pool.
 * 
 * Emits `PoolCreated` event when successful.
 */
export interface XYKCall_create_pool {
    __kind: 'create_pool'
    assetA: number
    assetB: number
    amount: bigint
    initialPrice: bigint
}

/**
 * Add liquidity to previously created asset pair pool.
 * 
 * Shares are issued with current price.
 * 
 * Emits `LiquidityAdded` event when successful.
 */
export interface XYKCall_add_liquidity {
    __kind: 'add_liquidity'
    assetA: number
    assetB: number
    amountA: bigint
    amountBMaxLimit: bigint
}

/**
 * Remove liquidity from specific liquidity pool in the form of burning shares.
 * 
 * If liquidity in the pool reaches 0, it is destroyed.
 * 
 * Emits 'LiquidityRemoved' when successful.
 * Emits 'PoolDestroyed' when pool is destroyed.
 */
export interface XYKCall_remove_liquidity {
    __kind: 'remove_liquidity'
    assetA: number
    assetB: number
    liquidityAmount: bigint
}

/**
 * Trade asset in for asset out.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
 * 
 * `max_limit` - minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
 * 
 * Emits `SellExecuted` when successful.
 */
export interface XYKCall_sell {
    __kind: 'sell'
    assetIn: number
    assetOut: number
    amount: bigint
    maxLimit: bigint
    discount: boolean
}

/**
 * Trade asset in for asset out.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
 * 
 * `max_limit` - maximum amount of `asset_in` to be sold in exchange for `asset_out`.
 * 
 * Emits `BuyExecuted` when successful.
 */
export interface XYKCall_buy {
    __kind: 'buy'
    assetOut: number
    assetIn: number
    amount: bigint
    maxLimit: bigint
    discount: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DusterCall = DusterCall_dust_account | DusterCall_add_nondustable_account | DusterCall_remove_nondustable_account

/**
 * Dust specified account.
 * IF account balance is < min. existential deposit of given currency, and account is allowed to
 * be dusted, the remaining balance is transferred to selected account (usually treasury).
 * 
 * Caller is rewarded with chosen reward in native currency.
 */
export interface DusterCall_dust_account {
    __kind: 'dust_account'
    account: Uint8Array
    currencyId: number
}

/**
 * Add account to list of non-dustable account. Account whihc are excluded from udsting.
 * If such account should be dusted - `AccountBlacklisted` error is returned.
 * Only root can perform this action.
 */
export interface DusterCall_add_nondustable_account {
    __kind: 'add_nondustable_account'
    account: Uint8Array
}

/**
 * Remove account from list of non-dustable accounts. That means account can be dusted again.
 */
export interface DusterCall_remove_nondustable_account {
    __kind: 'remove_nondustable_account'
    account: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ExchangeCall = ExchangeCall_sell | ExchangeCall_buy

/**
 * Create sell intention
 * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
 */
export interface ExchangeCall_sell {
    __kind: 'sell'
    assetSell: number
    assetBuy: number
    amountSell: bigint
    minBought: bigint
    discount: boolean
}

/**
 * Create buy intention
 * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
 */
export interface ExchangeCall_buy {
    __kind: 'buy'
    assetBuy: number
    assetSell: number
    amountBuy: bigint
    maxSold: bigint
    discount: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LBPCall = LBPCall_create_pool | LBPCall_update_pool_data | LBPCall_add_liquidity | LBPCall_remove_liquidity | LBPCall_sell | LBPCall_buy

/**
 * Create a new liquidity bootstrapping pool for given asset pair.
 * 
 * For any asset pair, only one pool can exist at a time.
 * 
 * The dispatch origin for this call must be `T::CreatePoolOrigin`.
 * The pool is created with initial liquidity provided by the `pool_owner` who must have
 * sufficient funds free.
 * 
 * The pool starts uninitialized and update_pool call should be called once created to set the start block.
 * 
 * This function should be dispatched from governing entity `T::CreatePoolOrigin`
 * 
 * Parameters:
 * - `pool_owner`: the future owner of the new pool.
 * - `asset_a`: { asset_id, amount } Asset ID and initial liquidity amount.
 * - `asset_b`: { asset_id, amount } Asset ID and initial liquidity amount.
 * - `initial_weight`: Initial weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
 * - `final_weight`: Final weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
 * - `weight_curve`: The weight function used to update the LBP weights. Currently,
 * there is only one weight function implemented, the linear function.
 * - `fee`: The trading fee charged on every trade distributed to `fee_collector`.
 * - `fee_collector`: The account to which trading fees will be transferred.
 * 
 * Emits `PoolCreated` event when successful.
 */
export interface LBPCall_create_pool {
    __kind: 'create_pool'
    poolOwner: Uint8Array
    assetA: number
    assetAAmount: bigint
    assetB: number
    assetBAmount: bigint
    initialWeight: number
    finalWeight: number
    weightCurve: WeightCurveType
    fee: Fee
    feeCollector: Uint8Array
}

/**
 * Update pool data of a pool.
 * 
 * The dispatch origin for this call must be signed by the pool owner.
 * 
 * The pool can be updated only if the sale has not already started.
 * 
 * At least one of the following optional parameters has to be specified.
 * 
 * Parameters:
 * - `pool_id`: The identifier of the pool to be updated.
 * - `start`: The new starting time of the sale. This parameter is optional.
 * - `end`: The new ending time of the sale. This parameter is optional.
 * - `initial_weight`: The new initial weight. This parameter is optional.
 * - `final_weight`: The new final weight. This parameter is optional.
 * - `fee`: The new trading fee charged on every trade. This parameter is optional.
 * - `fee_collector`: The new receiver of trading fees. This parameter is optional.
 * 
 * Emits `PoolUpdated` event when successful.
 */
export interface LBPCall_update_pool_data {
    __kind: 'update_pool_data'
    poolId: Uint8Array
    poolOwner: (Uint8Array | undefined)
    start: (number | undefined)
    end: (number | undefined)
    initialWeight: (number | undefined)
    finalWeight: (number | undefined)
    fee: (Fee | undefined)
    feeCollector: (Uint8Array | undefined)
}

/**
 * Add liquidity to a pool.
 * 
 * Assets to add has to match the pool assets. At least one amount has to be non-zero.
 * 
 * The dispatch origin for this call must be signed by the pool owner.
 * 
 * Parameters:
 * - `pool_id`: The identifier of the pool
 * - `amount_a`: The identifier of the asset and the amount to add.
 * - `amount_b`: The identifier of the second asset and the amount to add.
 * 
 * Emits `LiquidityAdded` event when successful.
 */
export interface LBPCall_add_liquidity {
    __kind: 'add_liquidity'
    amountA: [number, bigint]
    amountB: [number, bigint]
}

/**
 * Transfer all the liquidity from a pool back to the pool owner and destroy the pool.
 * The pool data are also removed from the storage.
 * 
 * The pool can't be destroyed during the sale.
 * 
 * The dispatch origin for this call must be signed by the pool owner.
 * 
 * Parameters:
 * - `amount_a`: The identifier of the asset and the amount to add.
 * 
 * Emits 'LiquidityRemoved' when successful.
 */
export interface LBPCall_remove_liquidity {
    __kind: 'remove_liquidity'
    poolId: Uint8Array
}

/**
 * Trade `asset_in` for `asset_out`.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
 * affected by the amount and proportion of the pool assets and the weights.
 * 
 * Trading `fee` is distributed to the `fee_collector`.
 * 
 * Parameters:
 * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
 * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
 * - `amount`: The amount of `asset_in`
 * - `max_limit`: minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
 * 
 * Emits `SellExecuted` when successful.
 */
export interface LBPCall_sell {
    __kind: 'sell'
    assetIn: number
    assetOut: number
    amount: bigint
    maxLimit: bigint
}

/**
 * Trade `asset_in` for `asset_out`.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
 * affected by the amount and the proportion of the pool assets and the weights.
 * 
 * Trading `fee` is distributed to the `fee_collector`.
 * 
 * Parameters:
 * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
 * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
 * - `amount`: The amount of `asset_out`.
 * - `max_limit`: maximum amount of `asset_in` to be sold in exchange for `asset_out`.
 * 
 * Emits `BuyExecuted` when successful.
 */
export interface LBPCall_buy {
    __kind: 'buy'
    assetOut: number
    assetIn: number
    amount: bigint
    maxLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultiTransactionPaymentCall = MultiTransactionPaymentCall_set_currency | MultiTransactionPaymentCall_add_currency | MultiTransactionPaymentCall_remove_currency

/**
 * Set selected currency for given account.
 * 
 * This allows to set a currency for an account in which all transaction fees will be paid.
 * Account balance cannot be zero.
 * 
 * Chosen currency must be in the list of accepted currencies.
 * 
 * When currency is set, fixed fee is withdrawn from the account to pay for the currency change
 * 
 * Emits `CurrencySet` event when successful.
 */
export interface MultiTransactionPaymentCall_set_currency {
    __kind: 'set_currency'
    currency: number
}

/**
 * Add a currency to the list of accepted currencies.
 * 
 * Only member can perform this action.
 * 
 * Currency must not be already accepted. Core asset id cannot be explicitly added.
 * 
 * Emits `CurrencyAdded` event when successful.
 */
export interface MultiTransactionPaymentCall_add_currency {
    __kind: 'add_currency'
    currency: number
    price: bigint
}

/**
 * Remove currency from the list of supported currencies
 * Only selected members can perform this action
 * 
 * Core asset cannot be removed.
 * 
 * Emits `CurrencyRemoved` when successful.
 */
export interface MultiTransactionPaymentCall_remove_currency {
    __kind: 'remove_currency'
    currency: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NFTCall = NFTCall_create_class | NFTCall_mint | NFTCall_transfer | NFTCall_burn | NFTCall_destroy_class | NFTCall_create_pool | NFTCall_destroy_pool | NFTCall_buy_from_pool | NFTCall_sell_to_pool

/**
 * Creates an NFT class
 * This is necessary as the first step, because tokens will be minted as part of this class
 * An amount X (ClassBondAmount) is reserved
 * 
 * Parameters:
 * - `metadata`: Arbitrary info/description of a class
 * - `data`: Field(s) defined in the ClassData struct
 */
export interface NFTCall_create_class {
    __kind: 'create_class'
    metadata: Uint8Array
    data: ClassData
}

/**
 * NFT is minted in the specified class
 * 
 * Parameters:
 * - `class_id`: identificator of a class
 * - `metadata`: Arbitrary info/description of a token
 * - `data`: Field(s) defined in the TokenData struct
 */
export interface NFTCall_mint {
    __kind: 'mint'
    classId: bigint
    metadata: Uint8Array
    tokenData: TokenData
}

/**
 * Transfers NFT from account A to account B
 * Only the owner can send their NFT to another account
 * 
 * Parameters:
 * - `dest`: The destination account a token will be sent to
 * - `token`: unique identificator of a token
 */
export interface NFTCall_transfer {
    __kind: 'transfer'
    dest: Uint8Array
    token: [bigint, bigint]
}

/**
 * Removes a token from existence
 * 
 * Parameters:
 * - `token`: unique identificator of a token
 */
export interface NFTCall_burn {
    __kind: 'burn'
    token: [bigint, bigint]
}

/**
 * Removes a class from existence
 * Returns the bond amount
 * 
 * Parameters:
 * - `class_id`: unique identificator of a class
 */
export interface NFTCall_destroy_class {
    __kind: 'destroy_class'
    classId: bigint
}

/**
 * Similar method to create_/destroy_class
 * The difference between a pool and a class in this case is that
 * a price has to be specified for each pool. Any NFT within this class
 * will have this exact constant price
 * 
 * Parameters:
 * - `metadata`: Arbitrary info/description of a pool
 * - `data`: Field(s) defined in the ClassData struct
 * - `price`: Price of each individual NFT
 */
export interface NFTCall_create_pool {
    __kind: 'create_pool'
    metadata: Uint8Array
    data: ClassData
    price: bigint
}

/**
 * Removes a pool from existence
 * Returns the bond amount
 * 
 * Parameters:
 * - `class_id`: unique identificator of a class
 */
export interface NFTCall_destroy_pool {
    __kind: 'destroy_pool'
    classId: bigint
}

/**
 * NFTs can be bought from a pool for a constant price
 * 
 * Parameters:
 * - `token`: unique identificator of a token
 */
export interface NFTCall_buy_from_pool {
    __kind: 'buy_from_pool'
    token: [bigint, bigint]
}

/**
 * Owned NFTs can be sold back to the pool for the original price
 * 
 * Parameters:
 * - `token`: unique identificator of a token
 */
export interface NFTCall_sell_to_pool {
    __kind: 'sell_to_pool'
    token: [bigint, bigint]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PriceOracleCall = never

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
    new: Uint8Array
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
    who: Uint8Array
    call: Call
}

export interface ReferendumStatus {
    end: number
    proposalHash: Uint8Array
    threshold: VoteThreshold
    delay: number
    tally: Tally
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

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export type AssetType = AssetType_Token | AssetType_PoolShare

export interface AssetType_Token {
    __kind: 'Token'
}

export interface AssetType_PoolShare {
    __kind: 'PoolShare'
    value: [number, number]
}

export interface AssetLocation {
    parents: number
    interior: V1Junctions
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
    __kind: 'None'
}

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

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export interface VestingSchedule {
    start: number
    period: number
    periodCount: number
    perPeriod: bigint
}

export interface ParachainInherentData {
    validationData: V1PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
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

export type Type_209 = Type_209_V0 | Type_209_V1 | Type_209_V2

export interface Type_209_V0 {
    __kind: 'V0'
    value: Type_210
}

export interface Type_209_V1 {
    __kind: 'V1'
    value: Type_215
}

export interface Type_209_V2 {
    __kind: 'V2'
    value: Type_221[]
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

export type VersionedMultiAsset = VersionedMultiAsset_V0 | VersionedMultiAsset_V1

export interface VersionedMultiAsset_V0 {
    __kind: 'V0'
    value: V0MultiAsset
}

export interface VersionedMultiAsset_V1 {
    __kind: 'V1'
    value: V1MultiAsset
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

export type WeightCurveType = WeightCurveType_Linear

export interface WeightCurveType_Linear {
    __kind: 'Linear'
}

export interface Fee {
    numerator: number
    denominator: number
}

export interface ClassData {
    isPool: boolean
}

export interface TokenData {
    locked: boolean
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface Tally {
    ayes: bigint
    nays: bigint
    turnout: bigint
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

export interface V1PersistedValidationData {
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

export type Type_210 = Type_210_WithdrawAsset | Type_210_ReserveAssetDeposit | Type_210_TeleportAsset | Type_210_QueryResponse | Type_210_TransferAsset | Type_210_TransferReserveAsset | Type_210_Transact | Type_210_HrmpNewChannelOpenRequest | Type_210_HrmpChannelAccepted | Type_210_HrmpChannelClosing | Type_210_RelayedFrom

export interface Type_210_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_212[]
}

export interface Type_210_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_212[]
}

export interface Type_210_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_212[]
}

export interface Type_210_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_210_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_210_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_210_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_210_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_210_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_210_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_210_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_210
}

export type Type_215 = Type_215_WithdrawAsset | Type_215_ReserveAssetDeposited | Type_215_ReceiveTeleportedAsset | Type_215_QueryResponse | Type_215_TransferAsset | Type_215_TransferReserveAsset | Type_215_Transact | Type_215_HrmpNewChannelOpenRequest | Type_215_HrmpChannelAccepted | Type_215_HrmpChannelClosing | Type_215_RelayedFrom | Type_215_SubscribeVersion | Type_215_UnsubscribeVersion

export interface Type_215_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_217[]
}

export interface Type_215_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_217[]
}

export interface Type_215_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_217[]
}

export interface Type_215_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_215_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_215_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_215_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_215_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_215_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_215_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_215_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_215
}

export interface Type_215_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_215_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_221 = Type_221_WithdrawAsset | Type_221_ReserveAssetDeposited | Type_221_ReceiveTeleportedAsset | Type_221_QueryResponse | Type_221_TransferAsset | Type_221_TransferReserveAsset | Type_221_Transact | Type_221_HrmpNewChannelOpenRequest | Type_221_HrmpChannelAccepted | Type_221_HrmpChannelClosing | Type_221_ClearOrigin | Type_221_DescendOrigin | Type_221_ReportError | Type_221_DepositAsset | Type_221_DepositReserveAsset | Type_221_ExchangeAsset | Type_221_InitiateReserveWithdraw | Type_221_InitiateTeleport | Type_221_QueryHolding | Type_221_BuyExecution | Type_221_RefundSurplus | Type_221_SetErrorHandler | Type_221_SetAppendix | Type_221_ClearError | Type_221_ClaimAsset | Type_221_Trap | Type_221_SubscribeVersion | Type_221_UnsubscribeVersion

export interface Type_221_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_221_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_221_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_221_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_221_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_221_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_221_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_221_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_221_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_221_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_221_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_221_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_221_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_221_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_221_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_221_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_221_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_221_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_221_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_221_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_221_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_221_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_221[]
}

export interface Type_221_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_221[]
}

export interface Type_221_ClearError {
    __kind: 'ClearError'
}

export interface Type_221_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_221_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_221_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_221_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Digest {
    logs: DigestItem[]
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

export type Type_212 = Type_212_Null | Type_212_DepositAsset | Type_212_DepositReserveAsset | Type_212_ExchangeAsset | Type_212_InitiateReserveWithdraw | Type_212_InitiateTeleport | Type_212_QueryHolding | Type_212_BuyExecution

export interface Type_212_Null {
    __kind: 'Null'
}

export interface Type_212_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_212_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_212_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_212_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_212_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_212_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface Type_212_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_210[]
}

export type Type_217 = Type_217_Noop | Type_217_DepositAsset | Type_217_DepositReserveAsset | Type_217_ExchangeAsset | Type_217_InitiateReserveWithdraw | Type_217_InitiateTeleport | Type_217_QueryHolding | Type_217_BuyExecution

export interface Type_217_Noop {
    __kind: 'Noop'
}

export interface Type_217_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_217_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_217_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_217_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_217_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_217_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface Type_217_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_215[]
}

export type DigestItem = DigestItem_ChangesTrieRoot | DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_ChangesTrieSignal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Uint8Array
}

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

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
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

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_TooMuchWeightRequired | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

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

export interface V2Error_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
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

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value: (ChangesTrieConfiguration | undefined)
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
