import type {Result, Option} from './support'

export type Call = Call_System | Call_ParachainSystem | Call_Utility | Call_Timestamp | Call_EqSessionManager | Call_Session | Call_EqAssets | Call_Oracle | Call_EqTreasury | Call_Treasury | Call_EqBalances | Call_Bailsman | Call_Whitelists | Call_EqRate | Call_Republic | Call_EqInvestors | Call_EqLiquidityFarming | Call_Vesting | Call_Vesting2 | Call_Claims | Call_Subaccounts | Call_Financial | Call_ChainBridge | Call_EqBridge | Call_EqMultisigSudo | Call_EqMarginCall | Call_EqDex | Call_EqLending | Call_EqLockdrop | Call_Multisig | Call_Proxy | Call_EqMarketMaker | Call_Xdot | Call_Migration | Call_CurveAmm | Call_PolkadotXcm | Call_DmpQueue | Call_XcmpQueue | Call_EqWrappedDot | Call_Preimage | Call_Scheduler | Call_Council | Call_CouncilMembership | Call_TechnicalCommittee | Call_TechnicalCommitteeMembership | Call_Democracy | Call_EqStaking

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_EqSessionManager {
    __kind: 'EqSessionManager'
    value: EqSessionManagerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_EqAssets {
    __kind: 'EqAssets'
    value: EqAssetsCall
}

export interface Call_Oracle {
    __kind: 'Oracle'
    value: OracleCall
}

export interface Call_EqTreasury {
    __kind: 'EqTreasury'
    value: EqTreasuryCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_EqBalances {
    __kind: 'EqBalances'
    value: EqBalancesCall
}

export interface Call_Bailsman {
    __kind: 'Bailsman'
    value: BailsmanCall
}

export interface Call_Whitelists {
    __kind: 'Whitelists'
    value: WhitelistsCall
}

export interface Call_EqRate {
    __kind: 'EqRate'
    value: EqRateCall
}

export interface Call_Republic {
    __kind: 'Republic'
    value: RepublicCall
}

export interface Call_EqInvestors {
    __kind: 'EqInvestors'
    value: EqInvestorsCall
}

export interface Call_EqLiquidityFarming {
    __kind: 'EqLiquidityFarming'
    value: EqLiquidityFarmingCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_Vesting2 {
    __kind: 'Vesting2'
    value: Vesting2Call
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_Subaccounts {
    __kind: 'Subaccounts'
    value: SubaccountsCall
}

export interface Call_Financial {
    __kind: 'Financial'
    value: FinancialCall
}

export interface Call_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeCall
}

export interface Call_EqBridge {
    __kind: 'EqBridge'
    value: EqBridgeCall
}

export interface Call_EqMultisigSudo {
    __kind: 'EqMultisigSudo'
    value: EqMultisigSudoCall
}

export interface Call_EqMarginCall {
    __kind: 'EqMarginCall'
    value: EqMarginCallCall
}

export interface Call_EqDex {
    __kind: 'EqDex'
    value: EqDexCall
}

export interface Call_EqLending {
    __kind: 'EqLending'
    value: EqLendingCall
}

export interface Call_EqLockdrop {
    __kind: 'EqLockdrop'
    value: EqLockdropCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_EqMarketMaker {
    __kind: 'EqMarketMaker'
    value: EqMarketMakerCall
}

export interface Call_Xdot {
    __kind: 'Xdot'
    value: XdotCall
}

export interface Call_Migration {
    __kind: 'Migration'
    value: MigrationCall
}

export interface Call_CurveAmm {
    __kind: 'CurveAmm'
    value: CurveAmmCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_EqWrappedDot {
    __kind: 'EqWrappedDot'
    value: EqWrappedDotCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_CouncilMembership {
    __kind: 'CouncilMembership'
    value: CouncilMembershipCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TechnicalCommitteeMembership {
    __kind: 'TechnicalCommitteeMembership'
    value: TechnicalCommitteeMembershipCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_EqStaking {
    __kind: 'EqStaking'
    value: EqStakingCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * Make some on-chain remark.
 * 
 * ## Complexity
 * - `O(1)`
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
 * ## Complexity
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * ## Complexity
 * - `O(C)` where `C` length of `code`
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

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
 * version and name should be verified on upgrade. Since the authorization only has a hash,
 * it cannot actually perform the verification.
 * 
 * This call requires Root origin.
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
    checkVersion: boolean
}

/**
 * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 * 
 * If the authorization required a version check, this call will ensure the spec name
 * remains unchanged and that the spec version has increased.
 * 
 * Note that this function will not apply the new `code`, but only attempt to schedule the
 * upgrade with the Relay Chain.
 * 
 * All origins are allowed.
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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
 * ## Complexity
 * - O(1).
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Dispatch a function call with a specified weight.
 * 
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
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
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqSessionManagerCall = EqSessionManagerCall_add_validator | EqSessionManagerCall_remove_validator

export interface EqSessionManagerCall_add_validator {
    __kind: 'add_validator'
    validatorId: Uint8Array
}

/**
 * Removes validator. Root authorization required to remove validator.
 */
export interface EqSessionManagerCall_remove_validator {
    __kind: 'remove_validator'
    validatorId: Uint8Array
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
 * ## Complexity
 * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *   fixed.
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
 * ## Complexity
 * - `O(1)` in number of key types. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqAssetsCall = EqAssetsCall_add_asset | EqAssetsCall_remove_asset | EqAssetsCall_update_asset

/**
 * Constructs and adds an asset
 */
export interface EqAssetsCall_add_asset {
    __kind: 'add_asset'
    assetName: Uint8Array
    lot: bigint
    priceStep: bigint
    makerFee: number
    takerFee: number
    assetXcmData: AssetXcmData
    debtWeight: number
    buyoutPriority: bigint
    assetType: AssetType
    isDexEnabled: boolean
    collateralDiscount: number
    lendingDebtWeight: number
    prices: bigint[]
}

/**
 * Call to remove asset from eq_assets::Assets, eq_oracle, eq_lenders and financial_pallet storages
 * Doesn't affect mm, xdot and curve pools
 */
export interface EqAssetsCall_remove_asset {
    __kind: 'remove_asset'
    assetId: bigint
}

/**
 * Updates an asset
 */
export interface EqAssetsCall_update_asset {
    __kind: 'update_asset'
    assetId: bigint
    lot: (bigint | undefined)
    priceStep: (bigint | undefined)
    makerFee: (number | undefined)
    takerFee: (number | undefined)
    assetXcmData: (AssetXcmData | undefined)
    debtWeight: (number | undefined)
    buyoutPriority: (bigint | undefined)
    assetType: (AssetType | undefined)
    isDexEnabled: (boolean | undefined)
    collateralDiscount: (number | undefined)
    lendingDebtWeight: (number | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OracleCall = OracleCall_set_price | OracleCall_set_price_unsigned | OracleCall_set_fin_metrics_recalc_enabled

/**
 * Adds and saves a new `DataPoint` containing an asset price information. It
 * would be used for the `PricePoint` calculation. Only whitelisted
 * accounts can add `DataPoints`
 */
export interface OracleCall_set_price {
    __kind: 'set_price'
    asset: bigint
    price: bigint
}

/**
 * Adds new `DataPoint` from an unsigned transaction
 */
export interface OracleCall_set_price_unsigned {
    __kind: 'set_price_unsigned'
    payload: PricePayload
    signature: MultiSignature
}

/**
 * Enables or disables auto recalculation of financial metrics
 */
export interface OracleCall_set_fin_metrics_recalc_enabled {
    __kind: 'set_fin_metrics_recalc_enabled'
    enabled: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqTreasuryCall = EqTreasuryCall_transfer | EqTreasuryCall_vested_transfer

/**
 * Transfer funds from pallets account
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `asset`: The asset that will be transfered;
 *  - `target`: The account that should be transferred funds;
 *  - `value`: The amount of `asset` that will be transferred.
 */
export interface EqTreasuryCall_transfer {
    __kind: 'transfer'
    asset: bigint
    target: Uint8Array
    value: bigint
}

/**
 * Transfer funds from pallets account with vesting
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `target`: The account that should be transferred funds.
 *  - `schedule`: The vesting schedule:
 *  -  First balance is the total amount that should be held for vesting.
 *  -  Second balance is how much should be unlocked per block.
 *  -  The block number is when the vesting should start.
 */
export interface EqTreasuryCall_vested_transfer {
    __kind: 'vested_transfer'
    target: Uint8Array
    schedule: [bigint, bigint, number]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_buyout | TreasuryCall_update_buyout_limit

/**
 * Let user to exchange existed asset to native asset by oracle price plus fee
 * Parameters:
 * `asset` - asset to exchange
 * `amount` - amount of native asset user will get after buyout
 *            or amount of exchange asset user will give for buyout
 */
export interface TreasuryCall_buyout {
    __kind: 'buyout'
    asset: bigint
    amount: Amount
}

/**
 * Set/unset buyout limit
 * Parameters:
 * `limit` - max value of native token user could get with help of buyout for a period(day), None - to disable buyout limits
 */
export interface TreasuryCall_update_buyout_limit {
    __kind: 'update_buyout_limit'
    limit: (bigint | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqBalancesCall = EqBalancesCall_transfer | EqBalancesCall_deposit | EqBalancesCall_burn | EqBalancesCall_enable_transfers | EqBalancesCall_disable_transfers | EqBalancesCall_xcm_toggle | EqBalancesCall_xcm_transfer_native | EqBalancesCall_xcm_transfer | EqBalancesCall_force_xcm_transfer_native | EqBalancesCall_force_xcm_transfer | EqBalancesCall_transfer_xcm | EqBalancesCall_transfer_xcm_native | EqBalancesCall_allow_xcm_transfers_native_for | EqBalancesCall_forbid_xcm_transfers_native_for | EqBalancesCall_update_xcm_transfer_native_limit | EqBalancesCall_allow_xdots_swap | EqBalancesCall_swap_xdot

/**
 * Transfers `value` amount of `Asset` from trx sender to account id `to`
 */
export interface EqBalancesCall_transfer {
    __kind: 'transfer'
    asset: bigint
    to: Uint8Array
    value: bigint
}

/**
 * Adds currency to account balance (sudo only). Used to deposit currency
 * into system. Disabled in production.
 */
export interface EqBalancesCall_deposit {
    __kind: 'deposit'
    asset: bigint
    to: Uint8Array
    value: bigint
}

/**
 * Burns currency (sudo only). Used to withdraw currency from the system.
 * Disabled in production.
 */
export interface EqBalancesCall_burn {
    __kind: 'burn'
    asset: bigint
    from: Uint8Array
    value: bigint
}

/**
 * Enable transfers between accounts
 */
export interface EqBalancesCall_enable_transfers {
    __kind: 'enable_transfers'
}

/**
 * Disable transfers between accounts
 */
export interface EqBalancesCall_disable_transfers {
    __kind: 'disable_transfers'
}

export interface EqBalancesCall_xcm_toggle {
    __kind: 'xcm_toggle'
    mode: (XcmMode | undefined)
}

/**
 * Send asset to parachain or relay chain, where given asset is native for destination
 * 
 * `asset` - asset to transfer;
 * `amount` - amount to transfer;
 * `to` - recipient account on target chain.
 * Will be deprecated, use `transfer_xcm_native` instead.
 */
export interface EqBalancesCall_xcm_transfer_native {
    __kind: 'xcm_transfer_native'
    asset: bigint
    amount: bigint
    to: AccountType
    feePayer: XcmTransferDealWithFee
}

/**
 * Send any asset with multilocation to another parachain or relay chain via XCM
 * 
 * `asset` - asset to transfer;
 * `amount` - amount to transfer;
 * `to` - recipient location from current chain.
 * Will be deprecated, use `transfer_xcm` instead.
 */
export interface EqBalancesCall_xcm_transfer {
    __kind: 'xcm_transfer'
    asset: bigint
    amount: bigint
    to: V3MultiLocation
    feePayer: XcmTransferDealWithFee
}

export interface EqBalancesCall_force_xcm_transfer_native {
    __kind: 'force_xcm_transfer_native'
    asset: bigint
    amount: bigint
    from: Uint8Array
    to: AccountType
}

export interface EqBalancesCall_force_xcm_transfer {
    __kind: 'force_xcm_transfer'
    asset: bigint
    amount: bigint
    from: Uint8Array
    to: V3MultiLocation
}

export interface EqBalancesCall_transfer_xcm {
    __kind: 'transfer_xcm'
    transfer: [bigint, bigint]
    fee: [bigint, bigint]
    to: V3MultiLocation
}

export interface EqBalancesCall_transfer_xcm_native {
    __kind: 'transfer_xcm_native'
    transfer: [bigint, bigint]
    fee: [bigint, bigint]
    to: AccountType
}

/**
 * Allow for `accounts` to make limited xcm native transfers
 */
export interface EqBalancesCall_allow_xcm_transfers_native_for {
    __kind: 'allow_xcm_transfers_native_for'
    accounts: Uint8Array[]
}

/**
 * Remove accounts from whitelist of xcm native transfers
 */
export interface EqBalancesCall_forbid_xcm_transfers_native_for {
    __kind: 'forbid_xcm_transfers_native_for'
    accounts: Uint8Array[]
}

/**
 * Update XCM transfer limit or remove it in case of limit = `None`
 */
export interface EqBalancesCall_update_xcm_transfer_native_limit {
    __kind: 'update_xcm_transfer_native_limit'
    limit: (bigint | undefined)
}

export interface EqBalancesCall_allow_xdots_swap {
    __kind: 'allow_xdots_swap'
    xdotAssets: XDotAsset[]
}

export interface EqBalancesCall_swap_xdot {
    __kind: 'swap_xdot'
    xdotAssets: XDotAsset[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BailsmanCall = BailsmanCall_toggle_auto_redistribution | BailsmanCall_redistribute_unsigned | BailsmanCall_redistribute

export interface BailsmanCall_toggle_auto_redistribution {
    __kind: 'toggle_auto_redistribution'
    enabled: boolean
}

/**
 * Request to redistribute single bailsman sent by offchain worker.
 */
export interface BailsmanCall_redistribute_unsigned {
    __kind: 'redistribute_unsigned'
    request: DistributionRequest
    signature: Uint8Array
}

/**
 * Operation to redistribute single bailsman manually.
 */
export interface BailsmanCall_redistribute {
    __kind: 'redistribute'
    who: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type WhitelistsCall = WhitelistsCall_add_to_whitelist | WhitelistsCall_remove_from_whitelist

/**
 * Adds a `who_to_add` account to whitelist. Requires root authorization
 */
export interface WhitelistsCall_add_to_whitelist {
    __kind: 'add_to_whitelist'
    whoToAdd: Uint8Array
}

/**
 * Removes an account `who_to_remove` from whitelist. Requires sudo authorization
 */
export interface WhitelistsCall_remove_from_whitelist {
    __kind: 'remove_from_whitelist'
    whoToRemove: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqRateCall = EqRateCall_reinit | EqRateCall_delete_account | EqRateCall_deposit | EqRateCall_withdraw | EqRateCall_delete_account_external | EqRateCall_reinit_external | EqRateCall_set_now_millis_offset | EqRateCall_set_auto_reinit_enabled

/**
 * Request to check account balance for margin call and withdraw fees.
 * 
 * The dispatch origin for this call must be _None_ (unsigned transaction).
 * Parameters:
 *  - `request`: OperationRequest.
 *  - `_signature`: OperationRequest signature
 */
export interface EqRateCall_reinit {
    __kind: 'reinit'
    request: OperationRequest
    signature: Uint8Array
}

/**
 * Request to delete an account and all of it subaccounts
 * 
 * The dispatch origin for this call must be _None_ (unsigned transaction).
 * 
 * Parameters:
 *  - `request`: OperationRequest.
 *  - `_signature`: OperationRequest signature
 */
export interface EqRateCall_delete_account {
    __kind: 'delete_account'
    request: OperationRequest
    signature: Uint8Array
}

/**
 * Request to deposit asset for account
 * 
 * The dispatch origin for this call must be _None_ (unsigned transaction).
 * 
 * Parameters:
 *  - `request`: OperationRequest.
 *  - `_signature`: OperationRequest signature
 */
export interface EqRateCall_deposit {
    __kind: 'deposit'
    request: BalanceRemovalRequest
    signature: Uint8Array
}

/**
 * Request to burn asset for account
 * 
 * The dispatch origin for this call must be _None_ (unsigned transaction).
 * 
 * Parameters:
 *  - `request`: OperationRequest.
 *  - `_signature`: OperationRequest signature
 */
export interface EqRateCall_withdraw {
    __kind: 'withdraw'
    request: BalanceRemovalRequest
    signature: Uint8Array
}

/**
 * Request to delete an account and all of it subaccounts
 * This function is used by any user and executed by substrate transaction
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * Parameters:
 *  - `account`: Account that should be checked for deletion.
 */
export interface EqRateCall_delete_account_external {
    __kind: 'delete_account_external'
    account: Uint8Array
}

/**
 * Request to check account balance for margin call and withdraw fees.
 * This function is used by any user and executed by substrate transaction
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * Parameters:
 *  - `account`: Account that should be checked for margin call and charged fee.
 */
export interface EqRateCall_reinit_external {
    __kind: 'reinit_external'
    owner: Uint8Array
}

/**
 * Function used in test builds for time move
 */
export interface EqRateCall_set_now_millis_offset {
    __kind: 'set_now_millis_offset'
    offset: bigint
}

/**
 * Enables or disables offchain workers. `true` to enable offchain worker
 * operations, `false` to disable them.
 */
export interface EqRateCall_set_auto_reinit_enabled {
    __kind: 'set_auto_reinit_enabled'
    enabled: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RepublicCall = RepublicCall_transfer | RepublicCall_vested_transfer

/**
 * Transfer funds from pallets account
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `asset`: The asset that will be transfered;
 *  - `target`: The account that should be transferred funds;
 *  - `value`: The amount of `asset` that will be transferred.
 */
export interface RepublicCall_transfer {
    __kind: 'transfer'
    asset: bigint
    target: Uint8Array
    value: bigint
}

/**
 * Transfer funds from pallets account with vesting
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `target`: The account that should be transferred funds.
 *  - `schedule`: The vesting schedule:
 *  -  First balance is the total amount that should be held for vesting.
 *  -  Second balance is how much should be unlocked per block.
 *  -  The block number is when the vesting should start.
 */
export interface RepublicCall_vested_transfer {
    __kind: 'vested_transfer'
    target: Uint8Array
    schedule: [bigint, bigint, number]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqInvestorsCall = EqInvestorsCall_transfer | EqInvestorsCall_vested_transfer

/**
 * Transfer funds from pallets account
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `asset`: The asset that will be transfered;
 *  - `target`: The account that should be transferred funds;
 *  - `value`: The amount of `asset` that will be transferred.
 */
export interface EqInvestorsCall_transfer {
    __kind: 'transfer'
    asset: bigint
    target: Uint8Array
    value: bigint
}

/**
 * Transfer funds from pallets account with vesting
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `target`: The account that should be transferred funds.
 *  - `schedule`: The vesting schedule:
 *  -  First balance is the total amount that should be held for vesting.
 *  -  Second balance is how much should be unlocked per block.
 *  -  The block number is when the vesting should start.
 */
export interface EqInvestorsCall_vested_transfer {
    __kind: 'vested_transfer'
    target: Uint8Array
    schedule: [bigint, bigint, number]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqLiquidityFarmingCall = EqLiquidityFarmingCall_transfer | EqLiquidityFarmingCall_vested_transfer

/**
 * Transfer funds from pallets account
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `asset`: The asset that will be transfered;
 *  - `target`: The account that should be transferred funds;
 *  - `value`: The amount of `asset` that will be transferred.
 */
export interface EqLiquidityFarmingCall_transfer {
    __kind: 'transfer'
    asset: bigint
    target: Uint8Array
    value: bigint
}

/**
 * Transfer funds from pallets account with vesting
 * 
 * The dispatch origin for this call must be _Root_ or _Manager_.
 * 
 * Parameters:
 *  - `target`: The account that should be transferred funds.
 *  - `schedule`: The vesting schedule:
 *  -  First balance is the total amount that should be held for vesting.
 *  -  Second balance is how much should be unlocked per block.
 *  -  The block number is when the vesting should start.
 */
export interface EqLiquidityFarmingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: Uint8Array
    schedule: [bigint, bigint, number]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_force_vested_transfer

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this module.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
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
 * locked under this module.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * Force a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `amount`: The amount of funds to transfer and will be vested.
 * - `schedule`: The vesting schedule attached to the transfer.
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type Vesting2Call = Vesting2Call_vest | Vesting2Call_vest_other | Vesting2Call_force_vested_transfer

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this module.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 */
export interface Vesting2Call_vest {
    __kind: 'vest'
}

/**
 * Unlock any vested funds of a `target` account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this module.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 */
export interface Vesting2Call_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * Force a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `amount`: The amount of funds to transfer and will be vested.
 * - `schedule`: The vesting schedule attached to the transfer.
 */
export interface Vesting2Call_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_claim_attest | ClaimsCall_attest | ClaimsCall_move_claim

/**
 * Make a claim to collect your currency.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 * 
 * and `address` matches the `dest` account.
 * 
 * Parameters:
 * - `dest`: The destination account to payout the claim.
 * - `ethereum_signature`: The signature of an ethereum signed message
 *    matching the format described above.
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: Uint8Array
    ethereumSignature: Uint8Array
}

/**
 * Mint a new claim to collect currency
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * Parameters:
 * - `who`: The Ethereum address allowed to collect this claim.
 * - `value`: The balance that will be claimed.
 * - `vesting_schedule`: An optional vesting schedule for the claim
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: Uint8Array
    value: bigint
    vestingSchedule: ([bigint, bigint, number] | undefined)
    statement: boolean
}

/**
 * Make a claim to collect your currency by signing a statement.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to `claim_attest` is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)(statement)
 * 
 * and `address` matches the `dest` account; the `statement` must match that which is
 * expected according to your purchase arrangement.
 * 
 * Parameters:
 * - `dest`: The destination account to payout the claim.
 * - `ethereum_signature`: The signature of an ethereum signed message
 *    matching the format described above.
 * - `statement`: The identity of the statement which is being attested to in the signature.
 */
export interface ClaimsCall_claim_attest {
    __kind: 'claim_attest'
    dest: Uint8Array
    ethereumSignature: Uint8Array
    statement: Uint8Array
}

/**
 * Attest to a statement, needed to finalize the claims process.
 * 
 * Unsigned Validation:
 * A call to attest is deemed valid if the sender has a `Preclaim` registered
 * and provides a `statement` which is expected for the account.
 * 
 * Parameters:
 * - `statement`: The identity of the statement which is being attested to in the signature.
 */
export interface ClaimsCall_attest {
    __kind: 'attest'
    statement: Uint8Array
}

/**
 * Gives claims ownership from `old` to `new`
 */
export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: Uint8Array
    new: Uint8Array
    maybePreclaim: (Uint8Array | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SubaccountsCall = SubaccountsCall_transfer_to_subaccount | SubaccountsCall_transfer_from_subaccount | SubaccountsCall_transfer

/**
 * Transfers `value` amount of `currency` from main account to `subacc_type` subaccount
 */
export interface SubaccountsCall_transfer_to_subaccount {
    __kind: 'transfer_to_subaccount'
    subaccType: SubAccType
    asset: bigint
    value: bigint
}

/**
 * Transfers `amount` of `currency` from subaccount to main account. If `subacc_type`
 * is `Bailsman` and it's total collateral value becomes less than minimal bailsman
 * collateral value - subaccount will be unregistered as bailsman.
 */
export interface SubaccountsCall_transfer_from_subaccount {
    __kind: 'transfer_from_subaccount'
    subaccType: SubAccType
    asset: bigint
    amount: bigint
}

/**
 * Transfers `amount` of `currency` from subaccount to 'destination' account. If `subacc_type`
 * is `Bailsman` and it's total collateral value becomes less than minimal bailsman
 * collateral value - subaccount will be unregistered as bailsman.
 * Destination should not be subaccount.
 */
export interface SubaccountsCall_transfer {
    __kind: 'transfer'
    subaccType: SubAccType
    destination: Uint8Array
    asset: bigint
    amount: bigint
}

/**
 * Dispatchable calls.
 * 
 * Each variant of this enum maps to a dispatchable function from the associated module.
 */
export type FinancialCall = FinancialCall_recalc_asset | FinancialCall_recalc_portfolio | FinancialCall_recalc | FinancialCall_set_metrics | FinancialCall_set_per_asset_metrics

/**
 * Recalculates financial metrics for a given asset
 */
export interface FinancialCall_recalc_asset {
    __kind: 'recalc_asset'
    asset: bigint
}

/**
 * Recalculates financial metrics for a given portfolio
 */
export interface FinancialCall_recalc_portfolio {
    __kind: 'recalc_portfolio'
    accountId: Uint8Array
    zScore: number
}

/**
 * Recalculates financial metrics for all known assets.
 */
export interface FinancialCall_recalc {
    __kind: 'recalc'
}

/**
 * Test utility function for setting metrics, not allowed in production
 */
export interface FinancialCall_set_metrics {
    __kind: 'set_metrics'
    metrics: FinancialMetrics
}

/**
 * Test utility function for setting asset metrics, not allowed in production
 */
export interface FinancialCall_set_per_asset_metrics {
    __kind: 'set_per_asset_metrics'
    asset: bigint
    metrics: AssetMetrics
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ChainBridgeCall = ChainBridgeCall_set_threshold | ChainBridgeCall_set_fee | ChainBridgeCall_set_proposal_lifetime | ChainBridgeCall_toggle_chain | ChainBridgeCall_set_resource | ChainBridgeCall_remove_resource | ChainBridgeCall_whitelist_chain | ChainBridgeCall_add_relayer | ChainBridgeCall_remove_relayer | ChainBridgeCall_set_min_nonce | ChainBridgeCall_acknowledge_proposal | ChainBridgeCall_reject_proposal | ChainBridgeCall_eval_vote_state | ChainBridgeCall_redistribute_fees

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
 * Sets fee for chain id.
 * 
 * After that the transfers will get the fee from runtime storage.
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface ChainBridgeCall_set_fee {
    __kind: 'set_fee'
    chainId: number
    fee: bigint
}

/**
 * Sets proposal lifetime.
 * 
 * This lifetime is used for determine how many blocks have relays to votes for deposit.
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface ChainBridgeCall_set_proposal_lifetime {
    __kind: 'set_proposal_lifetime'
    lifetime: number
}

/**
 * Sets transfers allowability.
 * 
 * This param is used for determine transfers possibility for chain.
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface ChainBridgeCall_toggle_chain {
    __kind: 'toggle_chain'
    chainId: number
    enabled: boolean
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
    id: Uint8Array
    method: Uint8Array
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
    id: Uint8Array
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
    fee: bigint
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
    v: Uint8Array
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
    v: Uint8Array
}

/**
 * Sets minimal deposit nonce for chain id
 * 
 * # <weight>
 * - O(1) lookup and insert
 * # </weight>
 */
export interface ChainBridgeCall_set_min_nonce {
    __kind: 'set_min_nonce'
    chainId: number
    minNonce: bigint
}

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
    rId: Uint8Array
    call: Call
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
    rId: Uint8Array
    call: Call
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
 * Redistributes accumulated fees between relayers.
 */
export interface ChainBridgeCall_redistribute_fees {
    __kind: 'redistribute_fees'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqBridgeCall = EqBridgeCall_transfer_native | EqBridgeCall_set_resource | EqBridgeCall_enable_withdrawals | EqBridgeCall_disable_withdrawals | EqBridgeCall_set_minimum_transfer_amount | EqBridgeCall_set_chain_address_type | EqBridgeCall_transfer | EqBridgeCall_xcm_transfer | EqBridgeCall_remark

/**
 * Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
 * Charges fee and accumulates it on the special account.
 */
export interface EqBridgeCall_transfer_native {
    __kind: 'transfer_native'
    amount: bigint
    recipient: Uint8Array
    destId: number
    resourceId: Uint8Array
}

/**
 * Stores an asset on chain under an associated resource ID.
 * Sudo only.
 * 
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface EqBridgeCall_set_resource {
    __kind: 'set_resource'
    id: Uint8Array
    asset: bigint
}

/**
 * Enable asset withdrawals to specific chain under an associated resource ID.
 * Sudo only.
 * 
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface EqBridgeCall_enable_withdrawals {
    __kind: 'enable_withdrawals'
    resourceId: Uint8Array
    chainId: number
}

/**
 * Disable asset withdrawals to specific chain under an associated resource ID.
 * Sudo only.
 * 
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface EqBridgeCall_disable_withdrawals {
    __kind: 'disable_withdrawals'
    resourceId: Uint8Array
    chainId: number
}

/**
 * Stores minimum transfer amount for sending asset to external chain.
 * Sudo only.
 * 
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface EqBridgeCall_set_minimum_transfer_amount {
    __kind: 'set_minimum_transfer_amount'
    destId: number
    resourceId: Uint8Array
    minimumAmount: bigint
}

/**
 * Stores chain id relation to chain address type.
 * Sudo only.
 * 
 * # <weight>
 * - O(1) write
 * # </weight>
 */
export interface EqBridgeCall_set_chain_address_type {
    __kind: 'set_chain_address_type'
    destId: number
    addressType: (ChainAddressType | undefined)
}

/**
 * Deposits specified amount of Eq/Gens tokens to the user's account
 */
export interface EqBridgeCall_transfer {
    __kind: 'transfer'
    to: Uint8Array
    amount: bigint
    resourceId: Uint8Array
}

export interface EqBridgeCall_xcm_transfer {
    __kind: 'xcm_transfer'
    to: Uint8Array
    amount: bigint
    resourceId: Uint8Array
}

/**
 * This can be called by the bridge to demonstrate an arbitrary call from a proposal.
 */
export interface EqBridgeCall_remark {
    __kind: 'remark'
    hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqMultisigSudoCall = EqMultisigSudoCall_add_key | EqMultisigSudoCall_remove_key | EqMultisigSudoCall_modify_threshold | EqMultisigSudoCall_propose | EqMultisigSudoCall_approve | EqMultisigSudoCall_cancel_proposal

/**
 * Adds a key to the multisig signatory list. Requires root.
 */
export interface EqMultisigSudoCall_add_key {
    __kind: 'add_key'
    key: Uint8Array
}

/**
 * Removes a key from the multisig signatory list. Requires root.
 */
export interface EqMultisigSudoCall_remove_key {
    __kind: 'remove_key'
    key: Uint8Array
}

/**
 * Modifies the multisig threshold value i.e. the required number of signatories for a call to proceed. Requires root.
 */
export interface EqMultisigSudoCall_modify_threshold {
    __kind: 'modify_threshold'
    newValue: number
}

/**
 * Proposes a call to be signed. Requires account to be in multisig signatory list.
 */
export interface EqMultisigSudoCall_propose {
    __kind: 'propose'
    call: Call
}

/**
 * Approves a proposal. Requires an account be in the multisig signatory list.
 */
export interface EqMultisigSudoCall_approve {
    __kind: 'approve'
    callHash: Uint8Array
}

/**
 * Cancels an earlier submitted proposal.
 */
export interface EqMultisigSudoCall_cancel_proposal {
    __kind: 'cancel_proposal'
    callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqMarginCallCall = EqMarginCallCall_try_margincall_external

/**
 * Tries to margin-call an account from another account signed call.
 */
export interface EqMarginCallCall_try_margincall_external {
    __kind: 'try_margincall_external'
    who: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqDexCall = EqDexCall_create_order | EqDexCall_delete_order | EqDexCall_delete_order_external | EqDexCall_update_asset_corridor

export interface EqDexCall_create_order {
    __kind: 'create_order'
    asset: bigint
    orderType: OrderType
    side: OrderSide
    amount: bigint
}

/**
 * Delete order.
 * The dispatch origin for this call must be _None_ (unsigned transaction).
 */
export interface EqDexCall_delete_order {
    __kind: 'delete_order'
    request: OperationRequestDexDeleteOrder
    signature: Uint8Array
}

/**
 * Delete order. This must be called by order owner or root.
 */
export interface EqDexCall_delete_order_external {
    __kind: 'delete_order_external'
    asset: bigint
    orderId: bigint
    price: bigint
}

/**
 * Update stored asset corridor value
 */
export interface EqDexCall_update_asset_corridor {
    __kind: 'update_asset_corridor'
    asset: bigint
    newCorridorValue: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqLendingCall = EqLendingCall_deposit | EqLendingCall_withdraw | EqLendingCall_payout

export interface EqLendingCall_deposit {
    __kind: 'deposit'
    asset: bigint
    value: bigint
}

export interface EqLendingCall_withdraw {
    __kind: 'withdraw'
    asset: bigint
    value: bigint
}

export interface EqLendingCall_payout {
    __kind: 'payout'
    asset: bigint
    who: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqLockdropCall = EqLockdropCall_lock | EqLockdropCall_unlock_external | EqLockdropCall_unlock | EqLockdropCall_set_lock_start | EqLockdropCall_clear_lock_start | EqLockdropCall_set_auto_unlock

/**
 * Lock `amount` of Eq for lock
 */
export interface EqLockdropCall_lock {
    __kind: 'lock'
    amount: bigint
}

/**
 * Unlock all account's locked Eq
 */
export interface EqLockdropCall_unlock_external {
    __kind: 'unlock_external'
}

/**
 * Unlock all account's locked Eq
 * The dispatch origin for this call must be _None_ (unsigned transaction).
 */
export interface EqLockdropCall_unlock {
    __kind: 'unlock'
    request: Type_311
    signature: Uint8Array
}

/**
 * Set `Lock
 * Start` in `timestamp`
 * - timestamp: UnixTime timestamp in seconds
 * WARNING! Check twice before using it!
 */
export interface EqLockdropCall_set_lock_start {
    __kind: 'set_lock_start'
    timestamp: bigint
}

/**
 * Clear `LockStart` value
 * WARNING! Check twice before using it!
 */
export interface EqLockdropCall_clear_lock_start {
    __kind: 'clear_lock_start'
}

/**
 * Enables or disables offchain worker. `true` to enable offchain worker
 * operations, `false` to disable.
 */
export interface EqLockdropCall_set_auto_unlock {
    __kind: 'set_auto_unlock'
    enabled: boolean
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
 * ## Complexity
 * O(Z + C) where Z is the length of the call and C its execution weight.
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
 * ## Complexity
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
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
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
 * ## Complexity
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
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: Weight
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
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
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
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
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
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
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
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `pure`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
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
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * Removes a previously spawned pure proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `pure` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `pure` to create this account.
 * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `pure`.
 * - `height`: The height of the chain when the call to `pure` was processed.
 * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created pure
 * account whose `pure` call has corresponding parameters.
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
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
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
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
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
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
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
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
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqMarketMakerCall = EqMarketMakerCall_add_to_whitelist | EqMarketMakerCall_remove_from_whitelist | EqMarketMakerCall_create_order | EqMarketMakerCall_delete_order

/**
 * Add account to whitelist
 */
export interface EqMarketMakerCall_add_to_whitelist {
    __kind: 'add_to_whitelist'
    accountId: Uint8Array
}

/**
 * Remove account from whitelist
 */
export interface EqMarketMakerCall_remove_from_whitelist {
    __kind: 'remove_from_whitelist'
    accountId: Uint8Array
}

/**
 * Create order. This must be called by whitelisted account
 */
export interface EqMarketMakerCall_create_order {
    __kind: 'create_order'
    currency: bigint
    orderType: OrderType
    side: OrderSide
    amount: bigint
}

/**
 * Delete order. This must be called by whitelisted account
 */
export interface EqMarketMakerCall_delete_order {
    __kind: 'delete_order'
    currency: bigint
    orderId: bigint
    price: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XdotCall = XdotCall_create_pool | XdotCall_initialize | XdotCall_change_initializer | XdotCall_remove_pool | XdotCall_mint | XdotCall_burn | XdotCall_sell_base | XdotCall_buy_base | XdotCall_sell_xbase | XdotCall_buy_xbase | XdotCall_optimal_mint

/**
 * Creates pool
 * - maturity: unix timestamp when maturity is coming
 * - ts_period: period in secs for ts coeff
 */
export interface XdotCall_create_pool {
    __kind: 'create_pool'
    initializer: Uint8Array
    baseAsset: bigint
    xbaseAsset: bigint
    sellBaseFeeCoeff: FixedI128
    sellXbaseFeeCoeff: FixedI128
    maturity: bigint
    tsPeriod: FixedI128
}

export interface XdotCall_initialize {
    __kind: 'initialize'
    poolId: number
    baseAmount: bigint
    xbaseAmount: bigint
}

export interface XdotCall_change_initializer {
    __kind: 'change_initializer'
    poolId: number
    account: (Uint8Array | undefined)
}

export interface XdotCall_remove_pool {
    __kind: 'remove_pool'
    poolId: number
}

/**
 * Mint liquidity tokens, with an optional internal trade to buy xbase tokens beforehand.
 * The amount of liquidity tokens is calculated from the amount of xbase tokens to buy from the pool,
 * plus the `xbase_in`. A proportional amount of base tokens need to be sent.
 * It fails if amount of base tokens for trade less than `base_in`
 */
export interface XdotCall_mint {
    __kind: 'mint'
    poolId: number
    minRatio: [number, number]
    maxRatio: [number, number]
    baseIn: bigint
    xbaseIn: bigint
    xbaseToBuy: bigint
}

/**
 * Burn liquidity tokens in exchange for base and fyToken or base only with `trade_to_base=true`
 */
export interface XdotCall_burn {
    __kind: 'burn'
    poolId: number
    minRatio: [number, number]
    maxRatio: [number, number]
    tokensBurned: bigint
    tradeToBase: boolean
}

/**
 * Sell base for xbase token.
 * min -  minimm accepted amount of xbase token
 * Returns amount of xbase token that will be transfered on caller account
 */
export interface XdotCall_sell_base {
    __kind: 'sell_base'
    poolId: number
    baseToSell: bigint
    min: bigint
}

/**
 * Buy base for xbase token
 * buy_base_amount - amount of base being bought that will be deposited to caller
 * max - maximum amount of xbase token that will be paid for the trade
 */
export interface XdotCall_buy_base {
    __kind: 'buy_base'
    poolId: number
    baseToBuy: bigint
    xbaseToSell: bigint
    max: bigint
}

/**
 * Sell xbase token for base
 * xbase_to_sell - amount of xbase token to sell for base
 * min - minimum accepted amount of base
 */
export interface XdotCall_sell_xbase {
    __kind: 'sell_xbase'
    poolId: number
    xbaseToSell: bigint
    min: bigint
}

/**
 * Buy xbase for base
 * xbase_to_buy - amount of xbase being bought that will be transfered to caller
 * max - maximum amount of base token that will be paid for the trade
 */
export interface XdotCall_buy_xbase {
    __kind: 'buy_xbase'
    poolId: number
    baseToSell: bigint
    xbaseToBuy: bigint
    max: bigint
}

export interface XdotCall_optimal_mint {
    __kind: 'optimal_mint'
    poolId: number
    baseIn: bigint
    xbaseIn: bigint
    lpToMint: bigint
    baseInRatioCorridor: ([bigint, bigint] | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MigrationCall = MigrationCall_set_migration

/**
 * Adds new migration, if there is no migration in storage
 */
export interface MigrationCall_set_migration {
    __kind: 'set_migration'
    migration: [Uint8Array, Uint8Array][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurveAmmCall = CurveAmmCall_create_pool | CurveAmmCall_add_liquidity | CurveAmmCall_exchange | CurveAmmCall_remove_liquidity | CurveAmmCall_remove_liquidity_imbalance | CurveAmmCall_remove_liquidity_one_coin | CurveAmmCall_withdraw_admin_fees | CurveAmmCall_set_enable_state

/**
 * Creates a pool, taking a creation fee from the caller
 */
export interface CurveAmmCall_create_pool {
    __kind: 'create_pool'
    assets: bigint[]
    amplification: bigint
    fee: number
    adminFee: number
}

/**
 * Deposit coins into the pool
 * `amounts` - list of amounts of coins to deposit,
 * `min_mint_amount` - minimum amount of LP tokens to mint from the deposit.
 */
export interface CurveAmmCall_add_liquidity {
    __kind: 'add_liquidity'
    poolId: number
    amounts: bigint[]
    minMintAmount: bigint
}

/**
 * Perform an exchange between two coins.
 * `i` - index value of the coin to send,
 * `j` - index value of the coin to receive,
 * `dx` - amount of `i` being exchanged,
 * `min_dy` - minimum amount of `j` to receive.
 */
export interface CurveAmmCall_exchange {
    __kind: 'exchange'
    poolId: number
    i: number
    j: number
    dx: bigint
    minDy: bigint
}

/**
 * Withdraw coins from the pool.
 * Withdrawal amount are based on current deposit ratios.
 * `amount` - quantity of LP tokens to burn in the withdrawal,
 * `min_amounts` - minimum amounts of underlying coins to receive.
 */
export interface CurveAmmCall_remove_liquidity {
    __kind: 'remove_liquidity'
    poolId: number
    amount: bigint
    minAmounts: bigint[]
}

/**
 * Withdraw coins from the pool in an imbalanced amount.
 * `amounts` - list of amounts of underlying coins to withdraw,
 * `max_burn_amount` - maximum amount of LP token to burn in the withdrawal.
 */
export interface CurveAmmCall_remove_liquidity_imbalance {
    __kind: 'remove_liquidity_imbalance'
    poolId: number
    amounts: bigint[]
    maxBurnAmount: bigint
}

/**
 * Withdraw a single coin from the pool.
 * `token_amount` - amount of LP tokens to burn in the withdrawal,
 * `i` - index value of the coin to withdraw,
 * `min_amount` - minimum amount of coin to receive.
 */
export interface CurveAmmCall_remove_liquidity_one_coin {
    __kind: 'remove_liquidity_one_coin'
    poolId: number
    tokenAmount: bigint
    i: number
    minAmount: bigint
}

/**
 * Withdraw admin fee.
 */
export interface CurveAmmCall_withdraw_admin_fees {
    __kind: 'withdraw_admin_fees'
    poolId: number
}

/**
 * Set enable pool state.
 */
export interface CurveAmmCall_set_enable_state {
    __kind: 'set_enable_state'
    poolId: number
    isEnabled: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_force_suspension

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
    message: Type_336
    maxWeight: Weight
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
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
 * - `origin`: Must be an origin specified by AdminOrigin.
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
    weightLimit: V3WeightLimit
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
    weightLimit: V3WeightLimit
}

/**
 * Set or unset the global suspension state of the XCM executor.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `suspended`: `true` to suspend, `false` to resume.
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
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
    weightLimit: Weight
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
    new: Weight
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
    new: Weight
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
    new: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqWrappedDotCall = EqWrappedDotCall_deposit | EqWrappedDotCall_withdraw | EqWrappedDotCall_initialize | EqWrappedDotCall_set_total_unlocking

/**
 * Deposit amount of DOT
 */
export interface EqWrappedDotCall_deposit {
    __kind: 'deposit'
    amount: bigint
}

/**
 * Withdraw
 * params:
 * - amount - amount of DOT/EQDOT to withdraw/burn
 */
export interface EqWrappedDotCall_withdraw {
    __kind: 'withdraw'
    amount: WithdrawAmount
}

export interface EqWrappedDotCall_initialize {
    __kind: 'initialize'
    accountId: Uint8Array
    transferable: bigint
    bond: bigint
}

/**
 * Set total unlocking. For maintenance purposes
 */
export interface EqWrappedDotCall_set_total_unlocking {
    __kind: 'set_total_unlocking'
    value: bigint
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
 * 
 * If `len` is provided, then it will be a much cheaper operation.
 * 
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
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
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
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
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Schedule a named task.
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
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * Anonymously schedule a task after a delay.
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
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_disapprove_proposal | CouncilCall_close

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * The dispatch of this call must be `SetMembersOrigin`.
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
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
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
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
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
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
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
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
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
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilMembershipCall = CouncilMembershipCall_add_member | CouncilMembershipCall_remove_member | CouncilMembershipCall_swap_member | CouncilMembershipCall_reset_members | CouncilMembershipCall_change_key | CouncilMembershipCall_set_prime | CouncilMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface CouncilMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface CouncilMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface CouncilMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface CouncilMembershipCall_reset_members {
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
export interface CouncilMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_close

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * The dispatch of this call must be `SetMembersOrigin`.
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
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
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
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
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
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
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
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
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
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_swap_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_change_key | TechnicalCommitteeMembershipCall_set_prime | TechnicalCommitteeMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalCommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_reset_members {
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
export interface TechnicalCommitteeMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_set_metadata

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
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
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
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
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
    proposal: Bounded
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
    proposal: Bounded
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
 * 	Must be always greater than zero.
 * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
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
    to: MultiAddress
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
    target: MultiAddress
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
    target: MultiAddress
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
 * Set or clear a metadata of a proposal or a referendum.
 * 
 * Parameters:
 * - `origin`: Must correspond to the `MetadataOwner`.
 *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
 *       threshold.
 *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
 *       threshold.
 *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
 *       threshold.
 *     - `Signed` by a creator for a public proposal.
 *     - `Signed` to clear a metadata for a finished referendum.
 *     - `Root` to set a metadata for an ongoing referendum.
 * - `owner`: an identifier of a metadata owner.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash: (Uint8Array | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EqStakingCall = EqStakingCall_stake | EqStakingCall_reward | EqStakingCall_add_manager | EqStakingCall_unlock | EqStakingCall_custom_reward

/**
 * Stake the minimum value of `amount` and current free EQ balance for `period` if `MaxStakesCount` not reached
 */
export interface EqStakingCall_stake {
    __kind: 'stake'
    amount: bigint
    period: StakePeriod
}

export interface EqStakingCall_reward {
    __kind: 'reward'
    who: Uint8Array
    amount: bigint
    externalId: bigint
}

export interface EqStakingCall_add_manager {
    __kind: 'add_manager'
    manager: Uint8Array
}

/**
 * Unlock stake if mb_stake_index is some or unlock rewards otherwise.
 * Checks is lock period ended and throw error if not so.
 */
export interface EqStakingCall_unlock {
    __kind: 'unlock'
    mbStakeIndex: (number | undefined)
}

export interface EqStakingCall_custom_reward {
    __kind: 'custom_reward'
    rewards: [Uint8Array, StakePeriod, bigint][]
}

export interface ParachainInherentData {
    validationData: V4PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export type OriginCaller = OriginCaller_system | OriginCaller_PolkadotXcm | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_366
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_367
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export interface SessionKeys {
    aura: Uint8Array
    eqRate: Uint8Array
}

export type AssetXcmData = AssetXcmData_None | AssetXcmData_SelfReserved | AssetXcmData_OtherReserved

export interface AssetXcmData_None {
    __kind: 'None'
}

export interface AssetXcmData_SelfReserved {
    __kind: 'SelfReserved'
}

export interface AssetXcmData_OtherReserved {
    __kind: 'OtherReserved'
    value: OtherReservedData
}

export type AssetType = AssetType_Native | AssetType_Physical | AssetType_Synthetic | AssetType_Lp

export interface AssetType_Native {
    __kind: 'Native'
}

export interface AssetType_Physical {
    __kind: 'Physical'
}

export interface AssetType_Synthetic {
    __kind: 'Synthetic'
}

export interface AssetType_Lp {
    __kind: 'Lp'
    value: AmmPool
}

export interface PricePayload {
    public: MultiSigner
    asset: bigint
    price: bigint
    blockNumber: number
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

export type Amount = Amount_Buyout | Amount_Exchange

export interface Amount_Buyout {
    __kind: 'Buyout'
    value: bigint
}

export interface Amount_Exchange {
    __kind: 'Exchange'
    value: bigint
}

export type XcmMode = XcmMode_Bridge | XcmMode_Xcm

export interface XcmMode_Bridge {
    __kind: 'Bridge'
    value: boolean
}

export interface XcmMode_Xcm {
    __kind: 'Xcm'
    value: boolean
}

export type AccountType = AccountType_Id32 | AccountType_Key20

export interface AccountType_Id32 {
    __kind: 'Id32'
    value: Uint8Array
}

export interface AccountType_Key20 {
    __kind: 'Key20'
    value: Uint8Array
}

export type XcmTransferDealWithFee = XcmTransferDealWithFee_SovereignAccWillPay | XcmTransferDealWithFee_AccOnTargetChainWillPay | XcmTransferDealWithFee_ThisAccWillPay

export interface XcmTransferDealWithFee_SovereignAccWillPay {
    __kind: 'SovereignAccWillPay'
}

export interface XcmTransferDealWithFee_AccOnTargetChainWillPay {
    __kind: 'AccOnTargetChainWillPay'
}

export interface XcmTransferDealWithFee_ThisAccWillPay {
    __kind: 'ThisAccWillPay'
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type XDotAsset = XDotAsset_XDOT | XDotAsset_XDOT2 | XDotAsset_XDOT3

export interface XDotAsset_XDOT {
    __kind: 'XDOT'
}

export interface XDotAsset_XDOT2 {
    __kind: 'XDOT2'
}

export interface XDotAsset_XDOT3 {
    __kind: 'XDOT3'
}

export interface DistributionRequest {
    bailsman: Uint8Array
    lastDistrId: number
    currDistrId: number
    authIdx: number
    valLen: number
    blockNumber: number
    higherPriority: boolean
    queueLen: number
}

export interface OperationRequest {
    account: (Uint8Array | undefined)
    authorityIndex: number
    validatorsLen: number
    blockNum: number
    higherPriority: boolean
}

export interface BalanceRemovalRequest {
    account: Uint8Array
    asset: bigint
    amount: bigint
    authorityIndex: number
    validatorsLen: number
    blockNum: number
    higherPriority: boolean
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

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type SubAccType = SubAccType_Bailsman | SubAccType_Trader | SubAccType_Borrower

export interface SubAccType_Bailsman {
    __kind: 'Bailsman'
}

export interface SubAccType_Trader {
    __kind: 'Trader'
}

export interface SubAccType_Borrower {
    __kind: 'Borrower'
}

export interface FinancialMetrics {
    periodStart: Duration
    periodEnd: Duration
    assets: bigint[]
    meanReturns: FixedI128[]
    volatilities: FixedI128[]
    correlations: FixedI128[]
    covariances: FixedI128[]
}

export interface AssetMetrics {
    periodStart: Duration
    periodEnd: Duration
    returns: FixedI128[]
    volatility: FixedI128
    correlations: [bigint, FixedI128][]
}

export type ChainAddressType = ChainAddressType_Ethereum | ChainAddressType_Substrate | ChainAddressType_SubstrateWithPrefix

export interface ChainAddressType_Ethereum {
    __kind: 'Ethereum'
}

export interface ChainAddressType_Substrate {
    __kind: 'Substrate'
}

export interface ChainAddressType_SubstrateWithPrefix {
    __kind: 'SubstrateWithPrefix'
}

export type OrderType = OrderType_Limit | OrderType_Market

export interface OrderType_Limit {
    __kind: 'Limit'
    price: bigint
    expirationTime: bigint
}

export interface OrderType_Market {
    __kind: 'Market'
}

export type OrderSide = OrderSide_Buy | OrderSide_Sell

export interface OrderSide_Buy {
    __kind: 'Buy'
}

export interface OrderSide_Sell {
    __kind: 'Sell'
}

export interface OperationRequestDexDeleteOrder {
    asset: bigint
    orderId: bigint
    price: bigint
    who: Uint8Array
    buyout: (bigint | undefined)
    authorityIndex: number
    validatorsLen: number
    blockNum: number
    reason: DeleteOrderReason
}

export interface Type_311 {
    account: Uint8Array
    authorityIndex: number
    validatorsLen: number
    blockNum: number
}

export interface Timepoint {
    height: number
    index: number
}

export type ProxyType = ProxyType_Any

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface FixedI128 {
    bits: bigint
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export type Type_336 = Type_336_V2 | Type_336_V3

export interface Type_336_V2 {
    __kind: 'V2'
    value: Type_339[]
}

export interface Type_336_V3 {
    __kind: 'V3'
    value: Type_343[]
}

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export type WithdrawAmount = WithdrawAmount_Dot | WithdrawAmount_EqDot

export interface WithdrawAmount_Dot {
    __kind: 'Dot'
    value: bigint
}

export interface WithdrawAmount_EqDot {
    __kind: 'EqDot'
    value: bigint
}

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: Uint8Array
}

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Uint8Array
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: Uint8Array
    len: number
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

export type MetadataOwner = MetadataOwner_External | MetadataOwner_Proposal | MetadataOwner_Referendum

export interface MetadataOwner_External {
    __kind: 'External'
}

export interface MetadataOwner_Proposal {
    __kind: 'Proposal'
    value: number
}

export interface MetadataOwner_Referendum {
    __kind: 'Referendum'
    value: number
}

export type StakePeriod = StakePeriod_One | StakePeriod_Two | StakePeriod_Three | StakePeriod_Six | StakePeriod_Twelve | StakePeriod_Sixteen | StakePeriod_Eighteen | StakePeriod_TwentyFour

export interface StakePeriod_One {
    __kind: 'One'
}

export interface StakePeriod_Two {
    __kind: 'Two'
}

export interface StakePeriod_Three {
    __kind: 'Three'
}

export interface StakePeriod_Six {
    __kind: 'Six'
}

export interface StakePeriod_Twelve {
    __kind: 'Twelve'
}

export interface StakePeriod_Sixteen {
    __kind: 'Sixteen'
}

export interface StakePeriod_Eighteen {
    __kind: 'Eighteen'
}

export interface StakePeriod_TwentyFour {
    __kind: 'TwentyFour'
}

export interface V4PersistedValidationData {
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

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Origin = Origin_Xcm | Origin_Response

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export interface Origin_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export type Type_366 = Type_366_Members | Type_366_Member | Type_366__Phantom

export interface Type_366_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_366_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_366__Phantom {
    __kind: '_Phantom'
}

export type Type_367 = Type_367_Members | Type_367_Member | Type_367__Phantom

export interface Type_367_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_367_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_367__Phantom {
    __kind: '_Phantom'
}

export type Void = never

export interface OtherReservedData {
    multiLocation: V3MultiLocation
    decimals: number
}

export type AmmPool = AmmPool_Curve | AmmPool_Yield

export interface AmmPool_Curve {
    __kind: 'Curve'
    value: number
}

export interface AmmPool_Yield {
    __kind: 'Yield'
    value: number
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

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface Duration {
    secs: bigint
    nanos: number
}

export type DeleteOrderReason = DeleteOrderReason_OutOfCorridor | DeleteOrderReason_Cancel | DeleteOrderReason_MarginCall | DeleteOrderReason_DisableTradingPair | DeleteOrderReason_Match | DeleteOrderReason_MakerError

export interface DeleteOrderReason_OutOfCorridor {
    __kind: 'OutOfCorridor'
}

export interface DeleteOrderReason_Cancel {
    __kind: 'Cancel'
}

export interface DeleteOrderReason_MarginCall {
    __kind: 'MarginCall'
}

export interface DeleteOrderReason_DisableTradingPair {
    __kind: 'DisableTradingPair'
}

export interface DeleteOrderReason_Match {
    __kind: 'Match'
}

export interface DeleteOrderReason_MakerError {
    __kind: 'MakerError'
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
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
    value: V2Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
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
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
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

export type V3Instruction = V3Instruction_WithdrawAsset | V3Instruction_ReserveAssetDeposited | V3Instruction_ReceiveTeleportedAsset | V3Instruction_QueryResponse | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Transact | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_ClearOrigin | V3Instruction_DescendOrigin | V3Instruction_ReportError | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_ExchangeAsset | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_ReportHolding | V3Instruction_BuyExecution | V3Instruction_RefundSurplus | V3Instruction_SetErrorHandler | V3Instruction_SetAppendix | V3Instruction_ClearError | V3Instruction_ClaimAsset | V3Instruction_Trap | V3Instruction_SubscribeVersion | V3Instruction_UnsubscribeVersion | V3Instruction_BurnAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectOrigin | V3Instruction_ExpectError | V3Instruction_ExpectTransactStatus | V3Instruction_QueryPallet | V3Instruction_ExpectPallet | V3Instruction_ReportTransactStatus | V3Instruction_ClearTransactStatus | V3Instruction_UniversalOrigin | V3Instruction_ExportMessage | V3Instruction_LockAsset | V3Instruction_UnlockAsset | V3Instruction_NoteUnlockable | V3Instruction_RequestUnlock | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_ClearTopic | V3Instruction_AliasOrigin | V3Instruction_UnpaidExecution

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type Type_339 = Type_339_WithdrawAsset | Type_339_ReserveAssetDeposited | Type_339_ReceiveTeleportedAsset | Type_339_QueryResponse | Type_339_TransferAsset | Type_339_TransferReserveAsset | Type_339_Transact | Type_339_HrmpNewChannelOpenRequest | Type_339_HrmpChannelAccepted | Type_339_HrmpChannelClosing | Type_339_ClearOrigin | Type_339_DescendOrigin | Type_339_ReportError | Type_339_DepositAsset | Type_339_DepositReserveAsset | Type_339_ExchangeAsset | Type_339_InitiateReserveWithdraw | Type_339_InitiateTeleport | Type_339_QueryHolding | Type_339_BuyExecution | Type_339_RefundSurplus | Type_339_SetErrorHandler | Type_339_SetAppendix | Type_339_ClearError | Type_339_ClaimAsset | Type_339_Trap | Type_339_SubscribeVersion | Type_339_UnsubscribeVersion

export interface Type_339_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface Type_339_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_339_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_339_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_339_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_339_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_339_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_339_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_339_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_339_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_339_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_339_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_339_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_339_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_339_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_339_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_339_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_339_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_339_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_339_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_339_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_339_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_339[]
}

export interface Type_339_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_339[]
}

export interface Type_339_ClearError {
    __kind: 'ClearError'
}

export interface Type_339_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_339_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_339_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_339_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_343 = Type_343_WithdrawAsset | Type_343_ReserveAssetDeposited | Type_343_ReceiveTeleportedAsset | Type_343_QueryResponse | Type_343_TransferAsset | Type_343_TransferReserveAsset | Type_343_Transact | Type_343_HrmpNewChannelOpenRequest | Type_343_HrmpChannelAccepted | Type_343_HrmpChannelClosing | Type_343_ClearOrigin | Type_343_DescendOrigin | Type_343_ReportError | Type_343_DepositAsset | Type_343_DepositReserveAsset | Type_343_ExchangeAsset | Type_343_InitiateReserveWithdraw | Type_343_InitiateTeleport | Type_343_ReportHolding | Type_343_BuyExecution | Type_343_RefundSurplus | Type_343_SetErrorHandler | Type_343_SetAppendix | Type_343_ClearError | Type_343_ClaimAsset | Type_343_Trap | Type_343_SubscribeVersion | Type_343_UnsubscribeVersion | Type_343_BurnAsset | Type_343_ExpectAsset | Type_343_ExpectOrigin | Type_343_ExpectError | Type_343_ExpectTransactStatus | Type_343_QueryPallet | Type_343_ExpectPallet | Type_343_ReportTransactStatus | Type_343_ClearTransactStatus | Type_343_UniversalOrigin | Type_343_ExportMessage | Type_343_LockAsset | Type_343_UnlockAsset | Type_343_NoteUnlockable | Type_343_RequestUnlock | Type_343_SetFeesMode | Type_343_SetTopic | Type_343_ClearTopic | Type_343_AliasOrigin | Type_343_UnpaidExecution

export interface Type_343_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_343_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_343_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_343_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface Type_343_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_343_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_343_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface Type_343_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_343_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_343_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_343_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_343_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_343_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_343_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_343_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_343_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_343_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_343_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_343_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_343_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_343_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_343_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_343[]
}

export interface Type_343_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_343[]
}

export interface Type_343_ClearError {
    __kind: 'ClearError'
}

export interface Type_343_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_343_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_343_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_343_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_343_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_343_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_343_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface Type_343_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface Type_343_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_343_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface Type_343_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface Type_343_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_343_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_343_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_343_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_343_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_343_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_343_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_343_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_343_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_343_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface Type_343_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_343_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_343_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export type V3Junction = V3Junction_Parachain | V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_PalletInstance | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_OnlyChild | V3Junction_Plurality | V3Junction_GlobalConsensus

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network: (V3NetworkId | undefined)
    id: Uint8Array
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: (V3NetworkId | undefined)
    key: Uint8Array
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Uint8Array
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export type V3Response = V3Response_Null | V3Response_Assets | V3Response_ExecutionResult | V3Response_Version | V3Response_PalletsInfo | V3Response_DispatchResult

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V3Error] | undefined)
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3Error = V3Error_Overflow | V3Error_Unimplemented | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_BadOrigin | V3Error_InvalidLocation | V3Error_AssetNotFound | V3Error_FailedToTransactAsset | V3Error_NotWithdrawable | V3Error_LocationCannotHold | V3Error_ExceedsMaxMessageSize | V3Error_DestinationUnsupported | V3Error_Transport | V3Error_Unroutable | V3Error_UnknownClaim | V3Error_FailedToDecode | V3Error_MaxWeightInvalid | V3Error_NotHoldingFees | V3Error_TooExpensive | V3Error_Trap | V3Error_ExpectationFalse | V3Error_PalletNotFound | V3Error_NameMismatch | V3Error_VersionIncompatible | V3Error_HoldingWouldOverflow | V3Error_ExportError | V3Error_ReanchorFailed | V3Error_NoDeal | V3Error_FeesNotMet | V3Error_LockError | V3Error_NoPermission | V3Error_Unanchored | V3Error_NotDepositable | V3Error_UnhandledXcmVersion | V3Error_WeightLimitReached | V3Error_Barrier | V3Error_WeightNotComputable | V3Error_ExceedsStackLimit

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Success | V3MaybeErrorCode_Error | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Uint8Array
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Uint8Array
}

export type V3NetworkId = V3NetworkId_ByGenesis | V3NetworkId_ByFork | V3NetworkId_Polkadot | V3NetworkId_Kusama | V3NetworkId_Westend | V3NetworkId_Rococo | V3NetworkId_Wococo | V3NetworkId_Ethereum | V3NetworkId_BitcoinCore | V3NetworkId_BitcoinCash

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Uint8Array
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Uint8Array
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export type V2AssetId = V2AssetId_Concrete | V2AssetId_Abstract

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V3AssetId = V3AssetId_Concrete | V3AssetId_Abstract

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export type V3BodyId = V3BodyId_Unit | V3BodyId_Moniker | V3BodyId_Index | V3BodyId_Executive | V3BodyId_Technical | V3BodyId_Legislative | V3BodyId_Judicial | V3BodyId_Defense | V3BodyId_Administration | V3BodyId_Treasury

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Uint8Array
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export type V3BodyPart = V3BodyPart_Voice | V3BodyPart_Members | V3BodyPart_Fraction | V3BodyPart_AtLeastProportion | V3BodyPart_MoreThanProportion

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V2Junction = V2Junction_Parachain | V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_PalletInstance | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_Plurality

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Uint8Array
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Uint8Array
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
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

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export interface V3PalletInfo {
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    major: number
    minor: number
    patch: number
}

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V2AssetInstance = V2AssetInstance_Undefined | V2AssetInstance_Index | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Blob

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V3AssetInstance = V3AssetInstance_Undefined | V3AssetInstance_Index | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Array16 | V3AssetInstance_Array32

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Named | V2NetworkId_Polkadot | V2NetworkId_Kusama

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V2BodyId = V2BodyId_Unit | V2BodyId_Named | V2BodyId_Index | V2BodyId_Executive | V2BodyId_Technical | V2BodyId_Legislative | V2BodyId_Judicial | V2BodyId_Defense | V2BodyId_Administration | V2BodyId_Treasury

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export type V2BodyPart = V2BodyPart_Voice | V2BodyPart_Members | V2BodyPart_Fraction | V2BodyPart_AtLeastProportion | V2BodyPart_MoreThanProportion

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
