import {sts, Result, Option, Bytes, BitSequence} from './support'

export type AccountId32 = Bytes

export type Type_608 = Type_608_Casting | Type_608_Delegating

export interface Type_608_Casting {
    __kind: 'Casting'
    value: Casting
}

export interface Type_608_Delegating {
    __kind: 'Delegating'
    value: Delegating
}

export interface Delegating {
    balance: bigint
    target: AccountId32
    conviction: Type_146
    delegations: Type_613
    prior: [number, bigint]
}

export interface Type_613 {
    votes: bigint
    capital: bigint
}

export type Type_146 = Type_146_Locked1x | Type_146_Locked2x | Type_146_Locked3x | Type_146_Locked4x | Type_146_Locked5x | Type_146_Locked6x | Type_146_None

export interface Type_146_Locked1x {
    __kind: 'Locked1x'
}

export interface Type_146_Locked2x {
    __kind: 'Locked2x'
}

export interface Type_146_Locked3x {
    __kind: 'Locked3x'
}

export interface Type_146_Locked4x {
    __kind: 'Locked4x'
}

export interface Type_146_Locked5x {
    __kind: 'Locked5x'
}

export interface Type_146_Locked6x {
    __kind: 'Locked6x'
}

export interface Type_146_None {
    __kind: 'None'
}

export interface Casting {
    votes: [number, Type_144][]
    delegations: Type_613
    prior: [number, bigint]
}

export type Type_144 = Type_144_Split | Type_144_SplitAbstain | Type_144_Standard

export interface Type_144_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_144_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface Type_144_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export const Type_608: sts.Type<Type_608> = sts.closedEnum(() => {
    return  {
        Casting: Casting,
        Delegating: Delegating,
    }
})

export const Delegating: sts.Type<Delegating> = sts.struct(() => {
    return  {
        balance: sts.bigint(),
        target: AccountId32,
        conviction: Type_146,
        delegations: Type_613,
        prior: sts.tuple(() => [sts.number(), sts.bigint()]),
    }
})

export const Type_613: sts.Type<Type_613> = sts.struct(() => {
    return  {
        votes: sts.bigint(),
        capital: sts.bigint(),
    }
})

export const Type_146: sts.Type<Type_146> = sts.closedEnum(() => {
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

export const Casting: sts.Type<Casting> = sts.struct(() => {
    return  {
        votes: sts.array(() => sts.tuple(() => [sts.number(), Type_144])),
        delegations: Type_613,
        prior: sts.tuple(() => [sts.number(), sts.bigint()]),
    }
})

export const AccountId32 = sts.bytes()

export type H256 = Bytes

export type Call = Call_Auctions | Call_Authorship | Call_Babe | Call_Balances | Call_Bounties | Call_ChildBounties | Call_Claims | Call_Configuration | Call_ConvictionVoting | Call_Council | Call_Crowdloan | Call_Democracy | Call_Dmp | Call_ElectionProviderMultiPhase | Call_FastUnstake | Call_FellowshipCollective | Call_FellowshipReferenda | Call_Grandpa | Call_Hrmp | Call_Identity | Call_ImOnline | Call_Indices | Call_Initializer | Call_Multisig | Call_Nis | Call_NisCounterpartBalances | Call_NominationPools | Call_ParaInclusion | Call_ParaInherent | Call_Paras | Call_ParasDisputes | Call_ParasShared | Call_PhragmenElection | Call_Preimage | Call_Proxy | Call_Recovery | Call_Referenda | Call_Registrar | Call_Scheduler | Call_Session | Call_Slots | Call_Society | Call_Staking | Call_System | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_Tips | Call_Treasury | Call_Ump | Call_Utility | Call_Vesting | Call_VoterList | Call_Whitelist | Call_XcmPallet

export interface Call_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesCall
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_Dmp {
    __kind: 'Dmp'
    value: DmpCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_FastUnstake {
    __kind: 'FastUnstake'
    value: FastUnstakeCall
}

export interface Call_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveCall
}

export interface Call_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
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

export interface Call_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Nis {
    __kind: 'Nis'
    value: NisCall
}

export interface Call_NisCounterpartBalances {
    __kind: 'NisCounterpartBalances'
    value: NisCounterpartBalancesCall
}

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Call_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Call_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Call_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesCall
}

export interface Call_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Call_PhragmenElection {
    __kind: 'PhragmenElection'
    value: PhragmenElectionCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Call_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
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

export interface Call_Ump {
    __kind: 'Ump'
    value: UmpCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_VoterList {
    __kind: 'VoterList'
    value: VoterListCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmPalletCall = XcmPalletCall_execute | XcmPalletCall_force_default_xcm_version | XcmPalletCall_force_subscribe_version_notify | XcmPalletCall_force_unsubscribe_version_notify | XcmPalletCall_force_xcm_version | XcmPalletCall_limited_reserve_transfer_assets | XcmPalletCall_limited_teleport_assets | XcmPalletCall_reserve_transfer_assets | XcmPalletCall_send | XcmPalletCall_teleport_assets

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
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: Type_424
    maxWeight: bigint
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface XcmPalletCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface XcmPalletCall_force_subscribe_version_notify {
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
export interface XcmPalletCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface XcmPalletCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V1MultiLocation
    xcmVersion: number
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
export interface XcmPalletCall_limited_reserve_transfer_assets {
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
export interface XcmPalletCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
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
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export interface XcmPalletCall_send {
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
export interface XcmPalletCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
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

export type V2Instruction = V2Instruction_BuyExecution | V2Instruction_ClaimAsset | V2Instruction_ClearError | V2Instruction_ClearOrigin | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_DescendOrigin | V2Instruction_ExchangeAsset | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_QueryResponse | V2Instruction_ReceiveTeleportedAsset | V2Instruction_RefundSurplus | V2Instruction_ReportError | V2Instruction_ReserveAssetDeposited | V2Instruction_SetAppendix | V2Instruction_SetErrorHandler | V2Instruction_SubscribeVersion | V2Instruction_Transact | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Trap | V2Instruction_UnsubscribeVersion | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
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

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
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

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
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

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
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

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface DoubleEncoded {
    encoded: Bytes
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

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V2Error] | undefined)
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Error = V2Error_AssetNotFound | V2Error_BadOrigin | V2Error_Barrier | V2Error_DestinationUnsupported | V2Error_ExceedsMaxMessageSize | V2Error_FailedToDecode | V2Error_FailedToTransactAsset | V2Error_InvalidLocation | V2Error_LocationCannotHold | V2Error_MaxWeightInvalid | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_NotHoldingFees | V2Error_NotWithdrawable | V2Error_Overflow | V2Error_TooExpensive | V2Error_Transport | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_Unimplemented | V2Error_UnknownClaim | V2Error_Unroutable | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_WeightLimitReached | V2Error_WeightNotComputable

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
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

export type V1Junction = V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_PalletInstance | V1Junction_Parachain | V1Junction_Plurality

export interface V1Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Bytes
}

export interface V1Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V1Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Bytes
}

export interface V1Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V1Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V1Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V1Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V1Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V1Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V0BodyPart = V0BodyPart_AtLeastProportion | V0BodyPart_Fraction | V0BodyPart_Members | V0BodyPart_MoreThanProportion | V0BodyPart_Voice

export interface V0BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V0BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V0BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_Voice {
    __kind: 'Voice'
}

export type V0BodyId = V0BodyId_Executive | V0BodyId_Index | V0BodyId_Judicial | V0BodyId_Legislative | V0BodyId_Named | V0BodyId_Technical | V0BodyId_Unit

export interface V0BodyId_Executive {
    __kind: 'Executive'
}

export interface V0BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V0BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V0BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V0BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V0BodyId_Technical {
    __kind: 'Technical'
}

export interface V0BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Kusama | V0NetworkId_Named | V0NetworkId_Polkadot

export interface V0NetworkId_Any {
    __kind: 'Any'
}

export interface V0NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V0NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V0NetworkId_Polkadot {
    __kind: 'Polkadot'
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

export type V1AssetId = V1AssetId_Abstract | V1AssetId_Concrete

export interface V1AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V1AssetId_Concrete {
    __kind: 'Concrete'
    value: V1MultiLocation
}

export interface V1MultiAsset {
    id: V1AssetId
    fun: V1Fungibility
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

export type V1AssetInstance = V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Blob | V1AssetInstance_Index | V1AssetInstance_Undefined

export interface V1AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V1AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V1AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V1AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V1AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V1AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V1AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V1Xcm = V1Xcm_HrmpChannelAccepted | V1Xcm_HrmpChannelClosing | V1Xcm_HrmpNewChannelOpenRequest | V1Xcm_QueryResponse | V1Xcm_ReceiveTeleportedAsset | V1Xcm_RelayedFrom | V1Xcm_ReserveAssetDeposited | V1Xcm_SubscribeVersion | V1Xcm_Transact | V1Xcm_TransferAsset | V1Xcm_TransferReserveAsset | V1Xcm_UnsubscribeVersion | V1Xcm_WithdrawAsset

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

export interface V1Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V1Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface V1Xcm_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: V1Xcm
}

export interface V1Xcm_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V1Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
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

export interface V1Xcm_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V1Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export type V1Order = V1Order_BuyExecution | V1Order_DepositAsset | V1Order_DepositReserveAsset | V1Order_ExchangeAsset | V1Order_InitiateReserveWithdraw | V1Order_InitiateTeleport | V1Order_Noop | V1Order_QueryHolding

export interface V1Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: V1Xcm[]
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

export interface V1Order_Noop {
    __kind: 'Noop'
}

export interface V1Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
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

export type V0Xcm = V0Xcm_HrmpChannelAccepted | V0Xcm_HrmpChannelClosing | V0Xcm_HrmpNewChannelOpenRequest | V0Xcm_QueryResponse | V0Xcm_RelayedFrom | V0Xcm_ReserveAssetDeposit | V0Xcm_TeleportAsset | V0Xcm_Transact | V0Xcm_TransferAsset | V0Xcm_TransferReserveAsset | V0Xcm_WithdrawAsset

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

export interface V0Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V0Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface V0Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: V0Xcm
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

export interface V0Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
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

export interface V0Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export type V0Order = V0Order_BuyExecution | V0Order_DepositAsset | V0Order_DepositReserveAsset | V0Order_ExchangeAsset | V0Order_InitiateReserveWithdraw | V0Order_InitiateTeleport | V0Order_Null | V0Order_QueryHolding

export interface V0Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: V0Xcm[]
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

export interface V0Order_Null {
    __kind: 'Null'
}

export interface V0Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export type V0MultiAsset = V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_All | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible | V0MultiAsset_None

export interface V0MultiAsset_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Bytes
    amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Bytes
    instance: V1AssetInstance
}

export interface V0MultiAsset_All {
    __kind: 'All'
}

export interface V0MultiAsset_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    id: Bytes
}

export interface V0MultiAsset_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    class: Bytes
}

export interface V0MultiAsset_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    class: V0MultiLocation
}

export interface V0MultiAsset_AllFungible {
    __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
    __kind: 'AllNonFungible'
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

export interface V0MultiAsset_None {
    __kind: 'None'
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

export type V0Junction = V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_PalletInstance | V0Junction_Parachain | V0Junction_Parent | V0Junction_Plurality

export interface V0Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Bytes
}

export interface V0Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V0Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Bytes
}

export interface V0Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V0Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V0Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V0Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V0Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V0Junction_Parent {
    __kind: 'Parent'
}

export interface V0Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
    __kind: 'Assets'
    value: V0MultiAsset[]
}

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
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

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
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

export type Type_424 = Type_424_V0 | Type_424_V1 | Type_424_V2

export interface Type_424_V0 {
    __kind: 'V0'
    value: Type_425
}

export interface Type_424_V1 {
    __kind: 'V1'
    value: Type_430
}

export interface Type_424_V2 {
    __kind: 'V2'
    value: Type_436[]
}

export type Type_436 = Type_436_BuyExecution | Type_436_ClaimAsset | Type_436_ClearError | Type_436_ClearOrigin | Type_436_DepositAsset | Type_436_DepositReserveAsset | Type_436_DescendOrigin | Type_436_ExchangeAsset | Type_436_HrmpChannelAccepted | Type_436_HrmpChannelClosing | Type_436_HrmpNewChannelOpenRequest | Type_436_InitiateReserveWithdraw | Type_436_InitiateTeleport | Type_436_QueryHolding | Type_436_QueryResponse | Type_436_ReceiveTeleportedAsset | Type_436_RefundSurplus | Type_436_ReportError | Type_436_ReserveAssetDeposited | Type_436_SetAppendix | Type_436_SetErrorHandler | Type_436_SubscribeVersion | Type_436_Transact | Type_436_TransferAsset | Type_436_TransferReserveAsset | Type_436_Trap | Type_436_UnsubscribeVersion | Type_436_WithdrawAsset

export interface Type_436_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_436_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_436_ClearError {
    __kind: 'ClearError'
}

export interface Type_436_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_436_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_436_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_436_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_436_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_436_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_436_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_436_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_436_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_436_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_436_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_436_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_436_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_436_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_436_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_436_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_436_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_436[]
}

export interface Type_436_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_436[]
}

export interface Type_436_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_436_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_429
}

export interface Type_436_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_436_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_436_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_436_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_436_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_429 {
    encoded: Bytes
}

export type Type_430 = Type_430_HrmpChannelAccepted | Type_430_HrmpChannelClosing | Type_430_HrmpNewChannelOpenRequest | Type_430_QueryResponse | Type_430_ReceiveTeleportedAsset | Type_430_RelayedFrom | Type_430_ReserveAssetDeposited | Type_430_SubscribeVersion | Type_430_Transact | Type_430_TransferAsset | Type_430_TransferReserveAsset | Type_430_UnsubscribeVersion | Type_430_WithdrawAsset

export interface Type_430_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_430_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_430_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_430_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_430_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_432[]
}

export interface Type_430_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_430
}

export interface Type_430_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_432[]
}

export interface Type_430_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_430_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_429
}

export interface Type_430_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_430_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_430_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_430_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_432[]
}

export type Type_432 = Type_432_BuyExecution | Type_432_DepositAsset | Type_432_DepositReserveAsset | Type_432_ExchangeAsset | Type_432_InitiateReserveWithdraw | Type_432_InitiateTeleport | Type_432_Noop | Type_432_QueryHolding

export interface Type_432_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_430[]
}

export interface Type_432_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_432_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_432_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_432_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_432_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_432_Noop {
    __kind: 'Noop'
}

export interface Type_432_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export type Type_425 = Type_425_HrmpChannelAccepted | Type_425_HrmpChannelClosing | Type_425_HrmpNewChannelOpenRequest | Type_425_QueryResponse | Type_425_RelayedFrom | Type_425_ReserveAssetDeposit | Type_425_TeleportAsset | Type_425_Transact | Type_425_TransferAsset | Type_425_TransferReserveAsset | Type_425_WithdrawAsset

export interface Type_425_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_425_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_425_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_425_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_425_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_425
}

export interface Type_425_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_427[]
}

export interface Type_425_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_427[]
}

export interface Type_425_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_429
}

export interface Type_425_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_425_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_425_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_427[]
}

export type Type_427 = Type_427_BuyExecution | Type_427_DepositAsset | Type_427_DepositReserveAsset | Type_427_ExchangeAsset | Type_427_InitiateReserveWithdraw | Type_427_InitiateTeleport | Type_427_Null | Type_427_QueryHolding

export interface Type_427_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_425[]
}

export interface Type_427_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_427_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_427_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_427_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_427_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_427_Null {
    __kind: 'Null'
}

export interface Type_427_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type WhitelistCall = WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage | WhitelistCall_remove_whitelisted_call | WhitelistCall_whitelist_call

export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: H256
    callWeightWitness: Weight
}

export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: H256
}

export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: H256
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VoterListCall = VoterListCall_put_in_front_of | VoterListCall_rebag

/**
 * Move the caller's Id directly in front of `lighter`.
 * 
 * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
 * the account going in front of `lighter`.
 * 
 * Only works if
 * - both nodes are within the same bag,
 * - and `origin` has a greater `Score` than `lighter`.
 */
export interface VoterListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: MultiAddress
}

/**
 * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
 * changed its score that it should properly fall into a different bag than its current
 * one.
 * 
 * Anyone can call this function about any potentially dislocated account.
 * 
 * Will always update the stored score of `dislocated` to the correct score, based on
 * `ScoreProvider`.
 * 
 * If `dislocated` does not exists, it returns an error.
 */
export interface VoterListCall_rebag {
    __kind: 'rebag'
    dislocated: MultiAddress
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

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
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
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
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
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
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
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

export type OriginCaller = OriginCaller_Council | OriginCaller_Origins | OriginCaller_ParachainsOrigin | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_XcmPallet | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_151
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Type_154
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_152
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_156
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

export type Type_156 = Type_156_Response | Type_156_Xcm

export interface Type_156_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export interface Type_156_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export type Void = never

export type Type_152 = Type_152_Member | Type_152_Members | Type_152__Phantom

export interface Type_152_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_152_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_152__Phantom {
    __kind: '_Phantom'
}

export type Type_154 = Type_154_Parachain

export interface Type_154_Parachain {
    __kind: 'Parachain'
    value: Id
}

export type Id = number

export type Origin = Origin_AuctionAdmin | Origin_BigSpender | Origin_BigTipper | Origin_Fellows | Origin_Fellowship1Dan | Origin_Fellowship2Dan | Origin_Fellowship3Dan | Origin_Fellowship4Dan | Origin_Fellowship5Dan | Origin_Fellowship6Dan | Origin_Fellowship7Dan | Origin_Fellowship8Dan | Origin_Fellowship9Dan | Origin_FellowshipAdmin | Origin_FellowshipExperts | Origin_FellowshipInitiates | Origin_FellowshipMasters | Origin_GeneralAdmin | Origin_LeaseAdmin | Origin_MediumSpender | Origin_ReferendumCanceller | Origin_ReferendumKiller | Origin_SmallSpender | Origin_SmallTipper | Origin_StakingAdmin | Origin_Treasurer | Origin_WhitelistedCaller

export interface Origin_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Origin_BigSpender {
    __kind: 'BigSpender'
}

export interface Origin_BigTipper {
    __kind: 'BigTipper'
}

export interface Origin_Fellows {
    __kind: 'Fellows'
}

export interface Origin_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Origin_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Origin_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Origin_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Origin_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Origin_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Origin_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Origin_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Origin_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export interface Origin_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Origin_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Origin_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Origin_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Origin_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Origin_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Origin_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Origin_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Origin_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Origin_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Origin_Treasurer {
    __kind: 'Treasurer'
}

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export type Type_151 = Type_151_Member | Type_151_Members | Type_151__Phantom

export interface Type_151_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_151_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_151__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UmpCall = UmpCall_service_overweight

/**
 * Service a single overweight upward message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `UnknownMessageIndex`: Message of `index` is unknown.
 * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface UmpCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend

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
    who: MultiAddress
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
    who: MultiAddress
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
    who: MultiAddress
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
    new: MultiAddress
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
    who: MultiAddress
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
    who: MultiAddress
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
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_close_old_weight | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

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
    proposalWeightBound: Weight
    lengthBound: number
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
export interface TechnicalCommitteeCall_close_old_weight {
    __kind: 'close_old_weight'
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
export type SystemCall = SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_kick | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_invulnerables | StakingCall_set_payee | StakingCall_set_staking_configs | StakingCall_set_validator_count | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

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
 * Increments the ideal number of validators upto maximum of
 * `ElectionProviderBase::MaxWinners`.
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
 * - Bounded by `MaxUnlockingChunks`.
 * - Storage changes: Can't increase storage, only decrease it.
 * # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * Scale up the ideal number of validators by a factor upto maximum of
 * `ElectionProviderBase::MaxWinners`.
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
 * Effects will be felt instantly (as soon as this function is completed successfully).
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
 * Effects will be felt instantly (as soon as this function is completed successfully).
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
 * RuntimeOrigin must be Root to call this function.
 * 
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_103
    maxValidatorCount: Type_103
    chillThreshold: Type_104
    minCommission: Type_105
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
 * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
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

export type Type_105 = Type_105_Noop | Type_105_Remove | Type_105_Set

export interface Type_105_Noop {
    __kind: 'Noop'
}

export interface Type_105_Remove {
    __kind: 'Remove'
}

export interface Type_105_Set {
    __kind: 'Set'
    value: Perbill
}

export type Perbill = number

export type Type_104 = Type_104_Noop | Type_104_Remove | Type_104_Set

export interface Type_104_Noop {
    __kind: 'Noop'
}

export interface Type_104_Remove {
    __kind: 'Remove'
}

export interface Type_104_Set {
    __kind: 'Set'
    value: Percent
}

export type Type_103 = Type_103_Noop | Type_103_Remove | Type_103_Set

export interface Type_103_Noop {
    __kind: 'Noop'
}

export interface Type_103_Remove {
    __kind: 'Remove'
}

export interface Type_103_Set {
    __kind: 'Set'
    value: number
}

export type ConfigOp = ConfigOp_Noop | ConfigOp_Remove | ConfigOp_Set

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
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
    founder: MultiAddress
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
    who: MultiAddress
    judgement: Type_221
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
    who: MultiAddress
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
    who: MultiAddress
    value: bigint
    tip: bigint
}

export type Type_221 = Type_221_Approve | Type_221_Rebid | Type_221_Reject

export interface Type_221_Approve {
    __kind: 'Approve'
}

export interface Type_221_Rebid {
    __kind: 'Rebid'
}

export interface Type_221_Reject {
    __kind: 'Reject'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SlotsCall = SlotsCall_clear_all_leases | SlotsCall_force_lease | SlotsCall_trigger_onboard

/**
 * Clear all leases for a Para Id, refunding any deposits back to the original owners.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: Id
}

/**
 * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
 * independently of any other on-chain mechanism to use it.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: Id
    leaser: AccountId32
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 * Try to onboard a parachain that has a lease for the current lease period.
 * 
 * This function can be useful if there was some state issue with a para that should
 * have onboarded, but was unable to. As long as they have a lease period, we can
 * let them onboard from here.
 * 
 * Origin must be signed, but can be called by anyone.
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: Id
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
    paraValidator: V2Public
    paraAssignment: Bytes
    authorityDiscovery: Bytes
}

export type V2Public = Bytes

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
    call: Call
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
    call: Call
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
    id: Bytes
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RegistrarCall = RegistrarCall_add_lock | RegistrarCall_deregister | RegistrarCall_force_register | RegistrarCall_register | RegistrarCall_remove_lock | RegistrarCall_reserve | RegistrarCall_schedule_code_upgrade | RegistrarCall_set_current_head | RegistrarCall_swap

/**
 * Add a manager lock from a para. This will prevent the manager of a
 * para to deregister or swap a para.
 * 
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_add_lock {
    __kind: 'add_lock'
    para: Id
}

/**
 * Deregister a Para Id, freeing all data and returning any deposit.
 * 
 * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: Id
}

/**
 * Force the registration of a Para Id on the relay chain.
 * 
 * This function must be called by a Root origin.
 * 
 * The deposit taken can be specified for this registration. Any `ParaId`
 * can be registered, including sub-1000 IDs which are System Parachains.
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: AccountId32
    deposit: bigint
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * Register head data and validation code for a reserved Para Id.
 * 
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin.
 * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
 * - `genesis_head`: The genesis head data of the parachain/thread.
 * - `validation_code`: The initial validation code of the parachain/thread.
 * 
 * ## Deposits/Fees
 * The origin signed account must reserve a corresponding deposit for the registration. Anything already
 * reserved previously for this para ID is accounted for.
 * 
 * ## Events
 * The `Registered` event is emitted in case of success.
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * Remove a manager lock from a para. This will allow the manager of a
 * previously locked para to deregister or swap a para without using governance.
 * 
 * Can only be called by the Root origin or the parachain.
 */
export interface RegistrarCall_remove_lock {
    __kind: 'remove_lock'
    para: Id
}

/**
 * Reserve a Para Id on the relay chain.
 * 
 * This function will reserve a new Para Id to be owned/managed by the origin account.
 * The origin account is able to register head data and validation code using `register` to create
 * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
 * 
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
 * 
 * ## Deposits/Fees
 * The origin must reserve a deposit of `ParaDeposit` for the registration.
 * 
 * ## Events
 * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

/**
 * Schedule a parachain upgrade.
 * 
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_schedule_code_upgrade {
    __kind: 'schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
}

/**
 * Set the parachain's current head.
 * 
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_set_current_head {
    __kind: 'set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * Swap a parachain with another parachain or parathread.
 * 
 * The origin must be Root, the `para` owner, or the `para` itself.
 * 
 * The swap will happen only if there is already an opposite swap pending. If there is not,
 * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 * 
 * The `ParaId`s remain mapped to the same head data and code so external code can rely on
 * `ParaId` to be a long-term identifier of a notional "parachain". However, their
 * scheduling info (i.e. whether they're a parathread or parachain), auction information
 * and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: Id
    other: Id
}

export type ValidationCode = Bytes

export type HeadData = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ReferendaCall = ReferendaCall_cancel | ReferendaCall_kill | ReferendaCall_nudge_referendum | ReferendaCall_one_fewer_deciding | ReferendaCall_place_decision_deposit | ReferendaCall_refund_decision_deposit | ReferendaCall_submit

/**
 * Cancel an ongoing referendum.
 * 
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Cancelled`.
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 * 
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Killed` and `DepositSlashed`.
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 * 
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Post the Decision Deposit for a referendum.
 * 
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 * 
 * Emits `DecisionDepositPlaced`.
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 * 
 * Emits `DecisionDepositRefunded`.
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Propose a referendum on a privileged action.
 * 
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 * 
 * Emits `Submitted`.
 */
export interface ReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

export type DispatchTime = DispatchTime_After | DispatchTime_At

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: BoundedVec
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
}

export type BoundedVec = Bytes

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
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: MultiAddress
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
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: MultiAddress
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
    account: MultiAddress
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
    rescuer: MultiAddress
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
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: MultiAddress
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
    lost: MultiAddress
    rescuer: MultiAddress
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
    lost: MultiAddress
    rescuer: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

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
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
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
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
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
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
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
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: H256
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

export type ProxyType = ProxyType_Any | ProxyType_Auction | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_IdentityJudgement | ProxyType_NonTransfer | ProxyType_Society | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Auction {
    __kind: 'Auction'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Society {
    __kind: 'Society'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
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
 * 
 * If `len` is provided, then it will be a much cheaper operation.
 * 
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
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
export type PhragmenElectionCall = PhragmenElectionCall_clean_defunct_voters | PhragmenElectionCall_remove_member | PhragmenElectionCall_remove_voter | PhragmenElectionCall_renounce_candidacy | PhragmenElectionCall_submit_candidacy | PhragmenElectionCall_vote

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
export interface PhragmenElectionCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
 * started, else, nothing happens.
 * 
 * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
 * it is returned.
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
export interface PhragmenElectionCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    slashBond: boolean
    rerunElection: boolean
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface PhragmenElectionCall_remove_voter {
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
export interface PhragmenElectionCall_renounce_candidacy {
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
export interface PhragmenElectionCall_submit_candidacy {
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
export interface PhragmenElectionCall_vote {
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
export type ParasSharedCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze

export interface ParasDisputesCall_force_unfreeze {
    __kind: 'force_unfreeze'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasCall = ParasCall_add_trusted_validation_code | ParasCall_force_note_new_head | ParasCall_force_queue_action | ParasCall_force_schedule_code_upgrade | ParasCall_force_set_current_code | ParasCall_force_set_current_head | ParasCall_include_pvf_check_statement | ParasCall_poke_unused_validation_code

/**
 * Adds the validation code to the storage.
 * 
 * The code will not be added if it is already present. Additionally, if PVF pre-checking
 * is running for that code, it will be instantly accepted.
 * 
 * Otherwise, the code will be added into the storage. Note that the code will be added
 * into storage with reference count 0. This is to account the fact that there are no users
 * for this code yet. The caller will have to make sure that this code eventually gets
 * used by some parachain or removed from the storage to avoid storage leaks. For the latter
 * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
 * 
 * This function is mainly meant to be used for upgrading parachains that do not follow
 * the go-ahead signal while the PVF pre-checking feature is enabled.
 */
export interface ParasCall_add_trusted_validation_code {
    __kind: 'add_trusted_validation_code'
    validationCode: ValidationCode
}

/**
 * Note a new block head for para within the context of the current block.
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: Id
    newHead: HeadData
}

/**
 * Put a parachain directly into the next session's action queue.
 * We can't queue it any sooner than this without going into the
 * initializer...
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: Id
}

/**
 * Schedule an upgrade as if it was scheduled in the given relay parent block.
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
    relayParentNumber: number
}

/**
 * Set the storage for the parachain validation code immediately.
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: Id
    newCode: ValidationCode
}

/**
 * Set the storage for the current parachain head data immediately.
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
 * enacts the results if that was the last vote before achieving the supermajority.
 */
export interface ParasCall_include_pvf_check_statement {
    __kind: 'include_pvf_check_statement'
    stmt: V2PvfCheckStatement
    signature: V2Signature
}

/**
 * Remove the validation code from the storage iff the reference count is 0.
 * 
 * This is better than removing the storage directly, because it will not remove the code
 * that was suddenly got used by some parachain while this dispatchable was pending
 * dispatching.
 */
export interface ParasCall_poke_unused_validation_code {
    __kind: 'poke_unused_validation_code'
    validationCodeHash: ValidationCodeHash
}

export type ValidationCodeHash = Bytes

export type V2Signature = Bytes

export interface V2PvfCheckStatement {
    accept: boolean
    subject: ValidationCodeHash
    sessionIndex: number
    validatorIndex: V2ValidatorIndex
}

export type V2ValidatorIndex = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParaInherentCall = ParaInherentCall_enter

/**
 * Enter the paras inherent. This will process bitfields and backed candidates.
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: V2InherentData
}

export interface V2InherentData {
    bitfields: V2UncheckedSigned[]
    backedCandidates: V2BackedCandidate[]
    disputes: V2DisputeStatementSet[]
    parentHeader: Header
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

export interface V2DisputeStatementSet {
    candidateHash: CandidateHash
    session: number
    statements: [V2DisputeStatement, V2ValidatorIndex, V2Signature][]
}

export type V2DisputeStatement = V2DisputeStatement_Invalid | V2DisputeStatement_Valid

export interface V2DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V2InvalidDisputeStatementKind
}

export interface V2DisputeStatement_Valid {
    __kind: 'Valid'
    value: V2ValidDisputeStatementKind
}

export type V2ValidDisputeStatementKind = V2ValidDisputeStatementKind_ApprovalChecking | V2ValidDisputeStatementKind_BackingSeconded | V2ValidDisputeStatementKind_BackingValid | V2ValidDisputeStatementKind_Explicit

export interface V2ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export interface V2ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: H256
}

export interface V2ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: H256
}

export interface V2ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type V2InvalidDisputeStatementKind = V2InvalidDisputeStatementKind_Explicit

export interface V2InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type CandidateHash = Bytes

export interface V2BackedCandidate {
    candidate: V2CommittedCandidateReceipt
    validityVotes: V2ValidityAttestation[]
    validatorIndices: BitSequence
}

export type V2ValidityAttestation = V2ValidityAttestation_Explicit | V2ValidityAttestation_Implicit

export interface V2ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: V2Signature
}

export interface V2ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: V2Signature
}

export interface V2CommittedCandidateReceipt {
    descriptor: V2CandidateDescriptor
    commitments: V2CandidateCommitments
}

export interface V2CandidateCommitments {
    upwardMessages: Bytes[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode?: (ValidationCode | undefined)
    headData: HeadData
    processedDownwardMessages: number
    hrmpWatermark: number
}

export interface OutboundHrmpMessage {
    recipient: Id
    data: Bytes
}

export interface V2CandidateDescriptor {
    paraId: Id
    relayParent: H256
    collator: Bytes
    persistedValidationDataHash: H256
    povHash: H256
    erasureRoot: H256
    signature: Bytes
    paraHead: H256
    validationCodeHash: ValidationCodeHash
}

export interface V2UncheckedSigned {
    payload: V2AvailabilityBitfield
    validatorIndex: V2ValidatorIndex
    signature: V2Signature
}

export type V2AvailabilityBitfield = BitSequence

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParaInclusionCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NominationPoolsCall = NominationPoolsCall_bond_extra | NominationPoolsCall_chill | NominationPoolsCall_claim_payout | NominationPoolsCall_create | NominationPoolsCall_create_with_pool_id | NominationPoolsCall_join | NominationPoolsCall_nominate | NominationPoolsCall_pool_withdraw_unbonded | NominationPoolsCall_set_configs | NominationPoolsCall_set_metadata | NominationPoolsCall_set_state | NominationPoolsCall_unbond | NominationPoolsCall_update_roles | NominationPoolsCall_withdraw_unbonded

/**
 * Bond `extra` more funds from `origin` into the pool to which they already belong.
 * 
 * Additional funds can come from either the free balance of the account, of from the
 * accumulated rewards, see [`BondExtra`].
 * 
 * Bonding extra funds implies an automatic payout of all pending rewards as well.
 */
export interface NominationPoolsCall_bond_extra {
    __kind: 'bond_extra'
    extra: BondExtra
}

/**
 * Chill on behalf of the pool.
 * 
 * The dispatch origin of this call must be signed by the pool nominator or the pool
 * root role, same as [`Pallet::nominate`].
 * 
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * A bonded member can use this to claim their payout based on the rewards that the pool
 * has accumulated since their last claimed payout (OR since joining if this is there first
 * time claiming rewards). The payout will be transferred to the member's account.
 * 
 * The member will earn rewards pro rata based on the members stake vs the sum of the
 * members in the pools stake. Rewards do not "expire".
 */
export interface NominationPoolsCall_claim_payout {
    __kind: 'claim_payout'
}

/**
 * Create a new delegation pool.
 * 
 * # Arguments
 * 
 * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
 *   deposit since the pools creator cannot fully unbond funds until the pool is being
 *   destroyed.
 * * `index` - A disambiguation index for creating the account. Likely only useful when
 *   creating multiple pools in the same extrinsic.
 * * `root` - The account to set as [`PoolRoles::root`].
 * * `nominator` - The account to set as the [`PoolRoles::nominator`].
 * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
 * 
 * # Note
 * 
 * In addition to `amount`, the caller will transfer the existential deposit; so the caller
 * needs at have at least `amount + existential_deposit` transferrable.
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    stateToggler: MultiAddress
}

/**
 * Create a new delegation pool with a previously used pool id
 * 
 * # Arguments
 * 
 * same as `create` with the inclusion of
 * * `pool_id` - `A valid PoolId.
 */
export interface NominationPoolsCall_create_with_pool_id {
    __kind: 'create_with_pool_id'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    stateToggler: MultiAddress
    poolId: number
}

/**
 * Stake funds with a pool. The amount to bond is transferred from the member to the
 * pools account and immediately increases the pools bond.
 * 
 * # Note
 * 
 * * An account can only be a member of a single pool.
 * * An account cannot join the same pool multiple times.
 * * This call will *not* dust the member account, so the member must have at least
 *   `existential deposit + amount` in their account.
 * * Only a pool with [`PoolState::Open`] can be joined
 */
export interface NominationPoolsCall_join {
    __kind: 'join'
    amount: bigint
    poolId: number
}

/**
 * Nominate on behalf of the pool.
 * 
 * The dispatch origin of this call must be signed by the pool nominator or the pool
 * root role.
 * 
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: AccountId32[]
}

/**
 * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
 * 
 * This is useful if their are too many unlocking chunks to call `unbond`, and some
 * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
 * would probably see an error like `NoMoreChunks` emitted from the staking system when
 * they attempt to unbond.
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * Update configurations for the nomination pools. The origin for this call must be
 * Root.
 * 
 * # Arguments
 * 
 * * `min_join_bond` - Set [`MinJoinBond`].
 * * `min_create_bond` - Set [`MinCreateBond`].
 * * `max_pools` - Set [`MaxPools`].
 * * `max_members` - Set [`MaxPoolMembers`].
 * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: Type_328
    minCreateBond: Type_328
    maxPools: Type_329
    maxMembers: Type_329
    maxMembersPerPool: Type_329
}

/**
 * Set a new metadata for the pool.
 * 
 * The dispatch origin of this call must be signed by the state toggler, or the root role
 * of the pool.
 */
export interface NominationPoolsCall_set_metadata {
    __kind: 'set_metadata'
    poolId: number
    metadata: Bytes
}

/**
 * Set a new state for the pool.
 * 
 * If a pool is already in the `Destroying` state, then under no condition can its state
 * change again.
 * 
 * The dispatch origin of this call must be either:
 * 
 * 1. signed by the state toggler, or the root role of the pool,
 * 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
 *    then the state of the pool can be permissionlessly changed to `Destroying`.
 */
export interface NominationPoolsCall_set_state {
    __kind: 'set_state'
    poolId: number
    state: PoolState
}

/**
 * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
 * implicitly collects the rewards one last time, since not doing so would mean some
 * rewards would be forfeited.
 * 
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 * 
 * # Conditions for a permissionless dispatch.
 * 
 * * The pool is blocked and the caller is either the root or state-toggler. This is
 *   refereed to as a kick.
 * * The pool is destroying and the member is not the depositor.
 * * The pool is destroying, the member is the depositor and no other members are in the
 *   pool.
 * 
 * ## Conditions for permissioned dispatch (i.e. the caller is also the
 * `member_account`):
 * 
 * * The caller is not the depositor.
 * * The caller is the depositor, the pool is destroying and no other members are in the
 *   pool.
 * 
 * # Note
 * 
 * If there are too many unlocking chunks to unbond with the pool account,
 * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If
 * there are too many unlocking chunks, the result of this call will likely be the
 * `NoMoreChunks` error from the staking system.
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * Update the roles of the pool.
 * 
 * The root is the only entity that can change any of the roles, including itself,
 * excluding the depositor, who can never change.
 * 
 * It emits an event, notifying UIs of the role change. This event is quite relevant to
 * most pool members and they should be informed of changes to pool roles.
 */
export interface NominationPoolsCall_update_roles {
    __kind: 'update_roles'
    poolId: number
    newRoot: Type_330
    newNominator: Type_330
    newStateToggler: Type_330
}

/**
 * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
 * error is returned.
 * 
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 * 
 * # Conditions for a permissionless dispatch
 * 
 * * The pool is in destroy mode and the target is not the depositor.
 * * The target is the depositor and they are the only member in the sub pools.
 * * The pool is blocked and the caller is either the root or state-toggler.
 * 
 * # Conditions for permissioned dispatch
 * 
 * * The caller is the target and they are not the depositor.
 * 
 * # Note
 * 
 * If the target is the depositor, the pool will be destroyed.
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    memberAccount: MultiAddress
    numSlashingSpans: number
}

export type Type_330 = Type_330_Noop | Type_330_Remove | Type_330_Set

export interface Type_330_Noop {
    __kind: 'Noop'
}

export interface Type_330_Remove {
    __kind: 'Remove'
}

export interface Type_330_Set {
    __kind: 'Set'
    value: AccountId32
}

export type PoolState = PoolState_Blocked | PoolState_Destroying | PoolState_Open

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

export type Type_329 = Type_329_Noop | Type_329_Remove | Type_329_Set

export interface Type_329_Noop {
    __kind: 'Noop'
}

export interface Type_329_Remove {
    __kind: 'Remove'
}

export interface Type_329_Set {
    __kind: 'Set'
    value: number
}

export type Type_328 = Type_328_Noop | Type_328_Remove | Type_328_Set

export interface Type_328_Noop {
    __kind: 'Noop'
}

export interface Type_328_Remove {
    __kind: 'Remove'
}

export interface Type_328_Set {
    __kind: 'Set'
    value: bigint
}

export type BondExtra = BondExtra_FreeBalance | BondExtra_Rewards

export interface BondExtra_FreeBalance {
    __kind: 'FreeBalance'
    value: bigint
}

export interface BondExtra_Rewards {
    __kind: 'Rewards'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NisCounterpartBalancesCall = NisCounterpartBalancesCall_force_transfer | NisCounterpartBalancesCall_force_unreserve | NisCounterpartBalancesCall_set_balance | NisCounterpartBalancesCall_transfer | NisCounterpartBalancesCall_transfer_all | NisCounterpartBalancesCall_transfer_keep_alive

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface NisCounterpartBalancesCall_force_transfer {
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
export interface NisCounterpartBalancesCall_force_unreserve {
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
export interface NisCounterpartBalancesCall_set_balance {
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
export interface NisCounterpartBalancesCall_transfer {
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
export interface NisCounterpartBalancesCall_transfer_all {
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
export interface NisCounterpartBalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NisCall = NisCall_fund_deficit | NisCall_place_bid | NisCall_retract_bid | NisCall_thaw

/**
 * Ensure we have sufficient funding for all potential payouts.
 * 
 * - `origin`: Must be accepted by `FundOrigin`.
 */
export interface NisCall_fund_deficit {
    __kind: 'fund_deficit'
}

/**
 * Place a bid.
 * 
 * Origin must be Signed, and account must have at least `amount` in free balance.
 * 
 * - `amount`: The amount of the bid; these funds will be reserved, and if/when
 *   consolidated, removed. Must be at least `MinBid`.
 * - `duration`: The number of periods before which the newly consolidated bid may be
 *   thawed. Must be greater than 1 and no more than `QueueCount`.
 * 
 * Complexities:
 * - `Queues[duration].len()` (just take max).
 */
export interface NisCall_place_bid {
    __kind: 'place_bid'
    amount: bigint
    duration: number
}

/**
 * Retract a previously placed bid.
 * 
 * Origin must be Signed, and the account should have previously issued a still-active bid
 * of `amount` for `duration`.
 * 
 * - `amount`: The amount of the previous bid.
 * - `duration`: The duration of the previous bid.
 */
export interface NisCall_retract_bid {
    __kind: 'retract_bid'
    amount: bigint
    duration: number
}

/**
 * Reduce or remove an outstanding receipt, placing the according proportion of funds into
 * the account of the owner.
 * 
 * - `origin`: Must be Signed and the account must be the owner of the receipt `index` as
 *   well as any fungible counterpart.
 * - `index`: The index of the receipt.
 * - `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
 *   `None`, then all of it should be.
 */
export interface NisCall_thaw {
    __kind: 'thaw'
    index: number
    portion?: (bigint | undefined)
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
    maxWeight: Weight
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
 *     - Reads: Multisig Storage, [Caller Account]
 *     - Writes: Multisig Storage, [Caller Account]
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
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
 *     - Read: Multisig Storage, [Caller Account], Refund Account
 *     - Write: Multisig Storage, [Caller Account], Refund Account
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
export type InitializerCall = InitializerCall_force_approve

/**
 * Issue a signal to the consensus engine to forcibly act as though all parachain
 * blocks in all relay chain blocks up to and including the given number in the current
 * chain are valid and should be finalized.
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
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
    new: MultiAddress
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
    new: MultiAddress
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
    account: MultiAddress
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
 * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
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
    identity: H256
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
    new: MultiAddress
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
export type HrmpCall = HrmpCall_force_clean_hrmp | HrmpCall_force_open_hrmp_channel | HrmpCall_force_process_hrmp_close | HrmpCall_force_process_hrmp_open | HrmpCall_hrmp_accept_open_channel | HrmpCall_hrmp_cancel_open_request | HrmpCall_hrmp_close_channel | HrmpCall_hrmp_init_open_channel

/**
 * This extrinsic triggers the cleanup of all the HRMP storage items that
 * a para may have. Normally this happens once per session, but this allows
 * you to trigger the cleanup immediately for a specific parachain.
 * 
 * Origin must be Root.
 * 
 * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: Id
    inbound: number
    outbound: number
}

/**
 * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
 * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
 * Chain's configured limits.
 * 
 * Expected use is when one of the `ParaId`s involved in the channel is governed by the
 * Relay Chain, e.g. a common good parachain.
 */
export interface HrmpCall_force_open_hrmp_channel {
    __kind: 'force_open_hrmp_channel'
    sender: Id
    recipient: Id
    maxCapacity: number
    maxMessageSize: number
}

/**
 * Force process HRMP close channel requests.
 * 
 * If there are pending HRMP close channel requests, you can use this
 * function process all of those requests immediately.
 * 
 * Total number of closing channels must be provided as witness data of weighing.
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
    channels: number
}

/**
 * Force process HRMP open channel requests.
 * 
 * If there are pending HRMP open channel requests, you can use this
 * function process all of those requests immediately.
 * 
 * Total number of opening channels must be provided as witness data of weighing.
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
    channels: number
}

/**
 * Accept a pending open channel request from the given sender.
 * 
 * The channel will be opened only on the next session boundary.
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: Id
}

/**
 * This cancels a pending open channel request. It can be canceled by either of the sender
 * or the recipient for that request. The origin must be either of those.
 * 
 * The cancellation happens immediately. It is not possible to cancel the request if it is
 * already accepted.
 * 
 * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
 * witness data.
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
    openRequests: number
}

/**
 * Initiate unilateral closing of a channel. The origin must be either the sender or the
 * recipient in the channel being closed.
 * 
 * The closure can only happen on a session change.
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 * Initiate opening a channel from a parachain to a given recipient with given channel
 * parameters.
 * 
 * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
 * - `proposed_max_message_size` - specifies the maximum size of the messages.
 * 
 * These numbers are a subject to the relay-chain configuration limits.
 * 
 * The channel can be opened only after the recipient confirms it and only on a session
 * change.
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

export interface HrmpChannelId {
    sender: Id
    recipient: Id
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall = GrandpaCall_note_stalled | GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned

/**
 * Note that the current authority set of the GRANDPA finality gadget has stalled.
 * 
 * This will trigger a forced authority set change at the beginning of the next session, to
 * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
 * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
 * The block production rate (which may be slowed down because of finality lagging) should
 * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
 * authority will start voting on top of `best_finalized_block_number` for new finalized
 * blocks. `best_finalized_block_number` should be the highest of the latest finalized
 * block of all validators of the new authority set.
 * 
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
    equivocationProof: Type_112
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
    equivocationProof: Type_112
    keyOwnerProof: MembershipProof
}

export interface MembershipProof {
    session: number
    trieNodes: Bytes[]
    validatorCount: number
}

export interface Type_112 {
    setId: bigint
    equivocation: Equivocation
}

export type Equivocation = Equivocation_Precommit | Equivocation_Prevote

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_120
}

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_114
}

export interface Type_114 {
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

export interface Type_120 {
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FellowshipReferendaCall = FellowshipReferendaCall_cancel | FellowshipReferendaCall_kill | FellowshipReferendaCall_nudge_referendum | FellowshipReferendaCall_one_fewer_deciding | FellowshipReferendaCall_place_decision_deposit | FellowshipReferendaCall_refund_decision_deposit | FellowshipReferendaCall_submit

/**
 * Cancel an ongoing referendum.
 * 
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Cancelled`.
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 * 
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Killed` and `DepositSlashed`.
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 * 
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Post the Decision Deposit for a referendum.
 * 
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 * 
 * Emits `DecisionDepositPlaced`.
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 * 
 * Emits `DecisionDepositRefunded`.
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Propose a referendum on a privileged action.
 * 
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 * 
 * Emits `Submitted`.
 */
export interface FellowshipReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FellowshipCollectiveCall = FellowshipCollectiveCall_add_member | FellowshipCollectiveCall_cleanup_poll | FellowshipCollectiveCall_demote_member | FellowshipCollectiveCall_promote_member | FellowshipCollectiveCall_remove_member | FellowshipCollectiveCall_vote

/**
 * Introduce a new member.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of non-member which will become a member.
 * - `rank`: The rank to give the new member.
 * 
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Remove votes from the given poll. It must have ended.
 * 
 * - `origin`: Must be `Signed` by any account.
 * - `poll_index`: Index of a poll which is completed and for which votes continue to
 *   exist.
 * - `max`: Maximum number of vote items from remove in this call.
 * 
 * Transaction fees are waived if the operation is successful.
 * 
 * Weight `O(max)` (less if there are fewer items to remove than `max`).
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * Decrement the rank of an existing member by one. If the member is already at rank zero,
 * then they are removed entirely.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 * 
 * Weight: `O(1)`, less if the member's index is highest in its rank.
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * Increment the rank of an existing member by one.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of existing member.
 * 
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * Remove the member entirely.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 * - `min_rank`: The rank of the member or greater.
 * 
 * Weight: `O(min_rank)`.
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
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
export interface FellowshipCollectiveCall_vote {
    __kind: 'vote'
    poll: number
    aye: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FastUnstakeCall = FastUnstakeCall_control | FastUnstakeCall_deregister | FastUnstakeCall_register_fast_unstake

/**
 * Control the operation of this pallet.
 * 
 * Dispatch origin must be signed by the [`Config::ControlOrigin`].
 */
export interface FastUnstakeCall_control {
    __kind: 'control'
    uncheckedErasToCheck: number
}

/**
 * Deregister oneself from the fast-unstake.
 * 
 * This is useful if one is registered, they are still waiting, and they change their mind.
 * 
 * Note that the associated stash is still fully unbonded and chilled as a consequence of
 * calling `register_fast_unstake`. This should probably be followed by a call to
 * `Staking::rebond`.
 */
export interface FastUnstakeCall_deregister {
    __kind: 'deregister'
}

/**
 * Register oneself for fast-unstake.
 * 
 * The dispatch origin of this call must be signed by the controller account, similar to
 * `staking::unbond`.
 * 
 * The stash associated with the origin must have no ongoing unlocking chunks. If
 * successful, this will fully unbond and chill the stash. Then, it will enqueue the stash
 * to be checked in further blocks.
 * 
 * If by the time this is called, the stash is actually eligible for fast-unstake, then
 * they are guaranteed to remain eligible, because the call will chill them as well.
 * 
 * If the check works, the entire staking data is removed, i.e. the stash is fully
 * unstaked.
 * 
 * If the check fails, the stash remains chilled and waiting for being unbonded as in with
 * the normal staking system, but they lose part of their unbonding chunks due to consuming
 * the chain's resources.
 */
export interface FastUnstakeCall_register_fast_unstake {
    __kind: 'register_fast_unstake'
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
    maybeNextScore?: (ElectionScore | undefined)
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
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
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
    solution: NposCompactSolution24
    score: ElectionScore
    round: number
}

export interface NposCompactSolution24 {
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
    votes17: [number, [number, number][], number][]
    votes18: [number, [number, number][], number][]
    votes19: [number, [number, number][], number][]
    votes20: [number, [number, number][], number][]
    votes21: [number, [number, number][], number][]
    votes22: [number, [number, number][], number][]
    votes23: [number, [number, number][], number][]
    votes24: [number, [number, number][], number][]
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export interface Support {
    total: bigint
    voters: [AccountId32, bigint][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

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
    to: MultiAddress
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
    proposalHash: H256
    votingPeriod: number
    delay: number
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
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
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
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
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
    target: MultiAddress
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CrowdloanCall = CrowdloanCall_add_memo | CrowdloanCall_contribute | CrowdloanCall_contribute_all | CrowdloanCall_create | CrowdloanCall_dissolve | CrowdloanCall_edit | CrowdloanCall_poke | CrowdloanCall_refund | CrowdloanCall_withdraw

/**
 * Add an optional memo to an existing crowdloan contribution.
 * 
 * Origin must be Signed, and the user must have contributed to the crowdloan.
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: Id
    memo: Bytes
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature?: (MultiSignature | undefined)
}

/**
 * Contribute your entire balance to a crowd sale. This will transfer the entire balance of a user over to fund a parachain
 * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute_all {
    __kind: 'contribute_all'
    index: number
    signature?: (MultiSignature | undefined)
}

/**
 * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
 * 
 * This applies a lock to your parachain configuration, ensuring that it cannot be changed
 * by the parachain manager.
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: (MultiSigner | undefined)
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * Edit the configuration for an in-progress crowdloan.
 * 
 * Can only be called by Root origin.
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: (MultiSigner | undefined)
}

/**
 * Poke the fund into `NewRaise`
 * 
 * Origin must be Signed, and the fund has non-zero raise.
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: Id
}

/**
 * Automatically refund contributors of an ended crowdloan.
 * Due to weight restrictions, this function may need to be called multiple
 * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
 * 
 * Origin must be signed, but can come from anyone.
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 * Withdraw full balance of a specific contributor.
 * 
 * Origin must be signed, but can come from anyone.
 * 
 * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
 * flag must be set. For a fund to be ready for retirement, then:
 * - it must not already be in retirement;
 * - the amount of raised funds must be bigger than the _free_ balance of the account;
 * - and either:
 *   - the block number must be at least `end`; or
 *   - the current lease period must be greater than the fund's `last_period`.
 * 
 * In this case, the fund's retirement flag is set and its `end` is reset to the current block
 * number.
 * 
 * - `who`: The account whose contribution should be withdrawn.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: AccountId32
    index: number
}

export type MultiSigner = MultiSigner_Ecdsa | MultiSigner_Ed25519 | MultiSigner_Sr25519

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_close_old_weight | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

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
    proposalWeightBound: Weight
    lengthBound: number
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
export interface CouncilCall_close_old_weight {
    __kind: 'close_old_weight'
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
export type ConvictionVotingCall = ConvictionVotingCall_delegate | ConvictionVotingCall_remove_other_vote | ConvictionVotingCall_remove_vote | ConvictionVotingCall_undelegate | ConvictionVotingCall_unlock | ConvictionVotingCall_vote

/**
 * Delegate the voting power (with some given conviction) of the sending account for a
 * particular class of polls.
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
 * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
 *   to this function are required.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Type_146
    balance: bigint
}

/**
 * Remove a vote for a poll.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the poll was cancelled, because the voter lost the poll or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for poll
 *   `index`.
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: The class of the poll.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * Remove a vote for a poll.
 * 
 * If:
 * - the poll was cancelled, or
 * - the poll is ongoing, or
 * - the poll has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the poll has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for poll `index`.
 * 
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
 *   which have finished or are cancelled, this must be `Some`.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class?: (number | undefined)
    index: number
}

/**
 * Undelegate the voting power of the sending account for a particular class of polls.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued has passed.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * - `class`: The class of polls to remove the delegation from.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * Remove the lock caused by prior voting/delegating which has expired within a particular
 * class.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `class`: The class of polls to unlock.
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
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
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: Type_144
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ConfigurationCall = ConfigurationCall_set_bypass_consistency_check | ConfigurationCall_set_chain_availability_period | ConfigurationCall_set_code_retention_period | ConfigurationCall_set_dispute_conclusion_by_time_out_period | ConfigurationCall_set_dispute_max_spam_slots | ConfigurationCall_set_dispute_period | ConfigurationCall_set_dispute_post_conclusion_acceptance_period | ConfigurationCall_set_group_rotation_frequency | ConfigurationCall_set_hrmp_channel_max_capacity | ConfigurationCall_set_hrmp_channel_max_message_size | ConfigurationCall_set_hrmp_channel_max_total_size | ConfigurationCall_set_hrmp_max_message_num_per_candidate | ConfigurationCall_set_hrmp_max_parachain_inbound_channels | ConfigurationCall_set_hrmp_max_parachain_outbound_channels | ConfigurationCall_set_hrmp_max_parathread_inbound_channels | ConfigurationCall_set_hrmp_max_parathread_outbound_channels | ConfigurationCall_set_hrmp_open_request_ttl | ConfigurationCall_set_hrmp_recipient_deposit | ConfigurationCall_set_hrmp_sender_deposit | ConfigurationCall_set_max_code_size | ConfigurationCall_set_max_downward_message_size | ConfigurationCall_set_max_head_data_size | ConfigurationCall_set_max_pov_size | ConfigurationCall_set_max_upward_message_num_per_candidate | ConfigurationCall_set_max_upward_message_size | ConfigurationCall_set_max_upward_queue_count | ConfigurationCall_set_max_upward_queue_size | ConfigurationCall_set_max_validators | ConfigurationCall_set_max_validators_per_core | ConfigurationCall_set_minimum_validation_upgrade_delay | ConfigurationCall_set_n_delay_tranches | ConfigurationCall_set_needed_approvals | ConfigurationCall_set_no_show_slots | ConfigurationCall_set_parathread_cores | ConfigurationCall_set_parathread_retries | ConfigurationCall_set_pvf_checking_enabled | ConfigurationCall_set_pvf_voting_ttl | ConfigurationCall_set_relay_vrf_modulo_samples | ConfigurationCall_set_scheduling_lookahead | ConfigurationCall_set_thread_availability_period | ConfigurationCall_set_ump_max_individual_weight | ConfigurationCall_set_ump_service_total_weight | ConfigurationCall_set_validation_upgrade_cooldown | ConfigurationCall_set_validation_upgrade_delay | ConfigurationCall_set_zeroth_delay_tranche_width

/**
 * Setting this to true will disable consistency checks for the configuration setters.
 * Use with caution.
 */
export interface ConfigurationCall_set_bypass_consistency_check {
    __kind: 'set_bypass_consistency_check'
    new: boolean
}

/**
 * Set the availability period for parachains.
 */
export interface ConfigurationCall_set_chain_availability_period {
    __kind: 'set_chain_availability_period'
    new: number
}

/**
 * Set the acceptance period for an included candidate.
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 * Set the dispute conclusion by time out period.
 */
export interface ConfigurationCall_set_dispute_conclusion_by_time_out_period {
    __kind: 'set_dispute_conclusion_by_time_out_period'
    new: number
}

/**
 * Set the maximum number of dispute spam slots.
 */
export interface ConfigurationCall_set_dispute_max_spam_slots {
    __kind: 'set_dispute_max_spam_slots'
    new: number
}

/**
 * Set the dispute period, in number of sessions to keep for disputes.
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 * Set the dispute post conclusion acceptance period.
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 * Set the parachain validator-group rotation frequency
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 * Sets the maximum number of messages allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 * Sets the maximum size of a message that could ever be put into an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_inbound_channels {
    __kind: 'set_hrmp_max_parathread_inbound_channels'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_outbound_channels {
    __kind: 'set_hrmp_max_parathread_outbound_channels'
    new: number
}

/**
 * Sets the number of sessions after which an HRMP open channel request expires.
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
 * channel.
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 * Sets the amount of funds that the sender should provide for opening an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 * Set the max validation code size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 * Set the critical downward message size.
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 * Set the max head data size for paras.
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 * Set the max POV block size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 * Sets the maximum number of messages that a candidate can contain.
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 * Sets the maximum size of an upward message that can be sent by a candidate.
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 * Sets the maximum items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 * Sets the maximum total size of items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 * Set the maximum number of validators to use in parachain consensus.
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new?: (number | undefined)
}

/**
 * Set the maximum number of validators to assign to any core.
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new?: (number | undefined)
}

/**
 * Sets the minimum delay between announcing the upgrade block for a parachain until the
 * upgrade taking place.
 * 
 * See the field documentation for information and constraints for the new value.
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
    __kind: 'set_minimum_validation_upgrade_delay'
    new: number
}

/**
 * Set the total number of delay tranches.
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 * Set the number of validators needed to approve a block.
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 * Set the no show slots, in number of number of consensus slots.
 * Must be at least 1.
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 * Set the number of parathread execution cores.
 */
export interface ConfigurationCall_set_parathread_cores {
    __kind: 'set_parathread_cores'
    new: number
}

/**
 * Set the number of retries for a particular parathread.
 */
export interface ConfigurationCall_set_parathread_retries {
    __kind: 'set_parathread_retries'
    new: number
}

/**
 * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
 */
export interface ConfigurationCall_set_pvf_checking_enabled {
    __kind: 'set_pvf_checking_enabled'
    new: boolean
}

/**
 * Set the number of session changes after which a PVF pre-checking voting is rejected.
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
    __kind: 'set_pvf_voting_ttl'
    new: number
}

/**
 * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 * Set the scheduling lookahead, in expected number of blocks at peak throughput.
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 * Set the availability period for parathreads.
 */
export interface ConfigurationCall_set_thread_availability_period {
    __kind: 'set_thread_availability_period'
    new: number
}

/**
 * Sets the maximum amount of weight any individual upward message may consume.
 */
export interface ConfigurationCall_set_ump_max_individual_weight {
    __kind: 'set_ump_max_individual_weight'
    new: Weight
}

/**
 * Sets the soft limit for the phase of dispatching dispatchable upward messages.
 */
export interface ConfigurationCall_set_ump_service_total_weight {
    __kind: 'set_ump_service_total_weight'
    new: Weight
}

/**
 * Set the validation upgrade cooldown.
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
    __kind: 'set_validation_upgrade_cooldown'
    new: number
}

/**
 * Set the validation upgrade delay.
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 * Set the zeroth delay tranche width.
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ClaimsCall = ClaimsCall_attest | ClaimsCall_claim | ClaimsCall_claim_attest | ClaimsCall_mint_claim | ClaimsCall_move_claim

/**
 * Attest to a statement, needed to finalize the claims process.
 * 
 * WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
 * 
 * Unsigned Validation:
 * A call to attest is deemed valid if the sender has a `Preclaim` registered
 * and provides a `statement` which is expected for the account.
 * 
 * Parameters:
 * - `statement`: The identity of the statement which is being attested to in the signature.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to do pre-validation on `attest` call.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_attest {
    __kind: 'attest'
    statement: Bytes
}

/**
 * Make a claim to collect your DOTs.
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
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to validate unsigned `claim` call.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: AccountId32
    ethereumSignature: EcdsaSignature
}

/**
 * Make a claim to collect your DOTs by signing a statement.
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
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to validate unsigned `claim_attest` call.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_claim_attest {
    __kind: 'claim_attest'
    dest: AccountId32
    ethereumSignature: EcdsaSignature
    statement: Bytes
}

/**
 * Mint a new claim to collect DOTs.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * Parameters:
 * - `who`: The Ethereum address allowed to collect this claim.
 * - `value`: The number of DOTs that will be claimed.
 * - `vesting_schedule`: An optional vesting schedule for these DOTs.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * We assume worst case that both vesting and statement is being inserted.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: EthereumAddress
    value: bigint
    vestingSchedule?: ([bigint, bigint, number] | undefined)
    statement?: (StatementKind | undefined)
}

export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: EthereumAddress
    new: EthereumAddress
    maybePreclaim?: (AccountId32 | undefined)
}

export type StatementKind = StatementKind_Regular | StatementKind_Saft

export interface StatementKind_Regular {
    __kind: 'Regular'
}

export interface StatementKind_Saft {
    __kind: 'Saft'
}

export type EthereumAddress = Bytes

export type EcdsaSignature = Bytes

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
    description: Bytes
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuctionsCall = AuctionsCall_bid | AuctionsCall_cancel_auction | AuctionsCall_new_auction

/**
 * Make a new bid from an account (including a parachain account) for deploying a new
 * parachain.
 * 
 * Multiple simultaneous bids from the same bidder are allowed only as long as all active
 * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 * funded by) the same account.
 * - `auction_index` is the index of the auction to bid on. Should just be the present
 * value of `AuctionCounter`.
 * - `first_slot` is the first lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `last_slot` is the last lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `amount` is the amount to bid to be held as deposit for the parachain should the
 * bid win. This amount is held throughout the range.
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 * Cancel an in-progress auction.
 * 
 * Can only be called by Root origin.
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

/**
 * Create a new auction.
 * 
 * This can only happen when there isn't already an auction in progress and may only be
 * called by the root origin. Accepts the `duration` of this auction and the
 * `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Auctions: AuctionsCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        Bounties: BountiesCall,
        ChildBounties: ChildBountiesCall,
        Claims: ClaimsCall,
        Configuration: ConfigurationCall,
        ConvictionVoting: ConvictionVotingCall,
        Council: CouncilCall,
        Crowdloan: CrowdloanCall,
        Democracy: DemocracyCall,
        Dmp: DmpCall,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseCall,
        FastUnstake: FastUnstakeCall,
        FellowshipCollective: FellowshipCollectiveCall,
        FellowshipReferenda: FellowshipReferendaCall,
        Grandpa: GrandpaCall,
        Hrmp: HrmpCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        Indices: IndicesCall,
        Initializer: InitializerCall,
        Multisig: MultisigCall,
        Nis: NisCall,
        NisCounterpartBalances: NisCounterpartBalancesCall,
        NominationPools: NominationPoolsCall,
        ParaInclusion: ParaInclusionCall,
        ParaInherent: ParaInherentCall,
        Paras: ParasCall,
        ParasDisputes: ParasDisputesCall,
        ParasShared: ParasSharedCall,
        PhragmenElection: PhragmenElectionCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Recovery: RecoveryCall,
        Referenda: ReferendaCall,
        Registrar: RegistrarCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Slots: SlotsCall,
        Society: SocietyCall,
        Staking: StakingCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Tips: TipsCall,
        Treasury: TreasuryCall,
        Ump: UmpCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        VoterList: VoterListCall,
        Whitelist: WhitelistCall,
        XcmPallet: XcmPalletCall,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XcmPalletCall: sts.Type<XcmPalletCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_424,
            maxWeight: sts.bigint(),
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V1MultiLocation,
            xcmVersion: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V2WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V2WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V0: V0Xcm,
        V1: V1Xcm,
        V2: sts.array(() => V2Instruction),
    }
})

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            ticket: V1MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V1Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V1MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V1MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V1MultiAsset),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const V0OriginKind: sts.Type<V0OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V1MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        MultiLocationFull: sts.unit(),
        MultiLocationNotInvertible: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        WeightLimitReached: sts.bigint(),
        WeightNotComputable: sts.unit(),
    }
})

export const V1Junctions: sts.Type<V1Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V1Junction,
        X2: sts.tuple(() => [V1Junction, V1Junction]),
        X3: sts.tuple(() => [V1Junction, V1Junction, V1Junction]),
        X4: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction]),
        X5: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
        X6: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
        X7: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
        X8: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
    }
})

export const V1Junction: sts.Type<V1Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V0NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V0NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V0NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V0BodyId,
            part: V0BodyPart,
        }),
    }
})

export const V0BodyPart: sts.Type<V0BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V0BodyId: sts.Type<V0BodyId> = sts.closedEnum(() => {
    return  {
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Unit: sts.unit(),
    }
})

export const WeakBoundedVec = sts.bytes()

export const V0NetworkId: sts.Type<V0NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export const V1MultiAssetFilter: sts.Type<V1MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V1MultiAsset),
        Wild: V1WildMultiAsset,
    }
})

export const V1WildMultiAsset: sts.Type<V1WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V1AssetId,
            fun: V1WildFungibility,
        }),
    }
})

export const V1WildFungibility: sts.Type<V1WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V1AssetId: sts.Type<V1AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V1MultiLocation,
    }
})

export const V1MultiAsset: sts.Type<V1MultiAsset> = sts.struct(() => {
    return  {
        id: V1AssetId,
        fun: V1Fungibility,
    }
})

export const V1Fungibility: sts.Type<V1Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V1AssetInstance,
    }
})

export const V1AssetInstance: sts.Type<V1AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Blob: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V1Xcm: sts.Type<V1Xcm> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V1Response,
        }),
        ReceiveTeleportedAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => V1Order),
        }),
        RelayedFrom: sts.enumStruct({
            who: V1Junctions,
            message: V1Xcm,
        }),
        ReserveAssetDeposited: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => V1Order),
        }),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => V1Order),
        }),
    }
})

export const V1Order: sts.Type<V1Order> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            instructions: sts.array(() => V1Xcm),
        }),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        Noop: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
        }),
    }
})

export const V1Response: sts.Type<V1Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V1MultiAsset),
        Version: sts.number(),
    }
})

export const V0Xcm: sts.Type<V0Xcm> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V0Response,
        }),
        RelayedFrom: sts.enumStruct({
            who: V0MultiLocation,
            message: V0Xcm,
        }),
        ReserveAssetDeposit: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => V0Order),
        }),
        TeleportAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => V0Order),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => V0Order),
        }),
    }
})

export const V0Order: sts.Type<V0Order> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V0MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            xcm: sts.array(() => V0Xcm),
        }),
        DepositAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: sts.array(() => V0MultiAsset),
            receive: sts.array(() => V0MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            reserve: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        Null: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V0MultiLocation,
            assets: sts.array(() => V0MultiAsset),
        }),
    }
})

export const V0MultiAsset: sts.Type<V0MultiAsset> = sts.closedEnum(() => {
    return  {
        AbstractFungible: sts.enumStruct({
            id: sts.bytes(),
            amount: sts.bigint(),
        }),
        AbstractNonFungible: sts.enumStruct({
            class: sts.bytes(),
            instance: V1AssetInstance,
        }),
        All: sts.unit(),
        AllAbstractFungible: sts.enumStruct({
            id: sts.bytes(),
        }),
        AllAbstractNonFungible: sts.enumStruct({
            class: sts.bytes(),
        }),
        AllConcreteFungible: sts.enumStruct({
            id: V0MultiLocation,
        }),
        AllConcreteNonFungible: sts.enumStruct({
            class: V0MultiLocation,
        }),
        AllFungible: sts.unit(),
        AllNonFungible: sts.unit(),
        ConcreteFungible: sts.enumStruct({
            id: V0MultiLocation,
            amount: sts.bigint(),
        }),
        ConcreteNonFungible: sts.enumStruct({
            class: V0MultiLocation,
            instance: V1AssetInstance,
        }),
        None: sts.unit(),
    }
})

export const V0MultiLocation: sts.Type<V0MultiLocation> = sts.closedEnum(() => {
    return  {
        Null: sts.unit(),
        X1: V0Junction,
        X2: sts.tuple(() => [V0Junction, V0Junction]),
        X3: sts.tuple(() => [V0Junction, V0Junction, V0Junction]),
        X4: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction]),
        X5: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
        X6: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
        X7: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
        X8: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
    }
})

export const V0Junction: sts.Type<V0Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V0NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V0NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V0NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Parent: sts.unit(),
        Plurality: sts.enumStruct({
            id: V0BodyId,
            part: V0BodyPart,
        }),
    }
})

export const V0Response: sts.Type<V0Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V0MultiAsset),
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return  {
        V0: sts.array(() => V0MultiAsset),
        V1: sts.array(() => V1MultiAsset),
    }
})

export const V1MultiLocation: sts.Type<V1MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V1Junctions,
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V0: V0MultiLocation,
        V1: V1MultiLocation,
    }
})

export const Type_424: sts.Type<Type_424> = sts.closedEnum(() => {
    return  {
        V0: Type_425,
        V1: Type_430,
        V2: sts.array(() => Type_436),
    }
})

export const Type_436: sts.Type<Type_436> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            ticket: V1MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V1Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V1MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V1MultiAsset),
        SetAppendix: sts.array(() => Type_436),
        SetErrorHandler: sts.array(() => Type_436),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_429,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V1MultiAsset),
    }
})

export const Type_429: sts.Type<Type_429> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_430: sts.Type<Type_430> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V1Response,
        }),
        ReceiveTeleportedAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => Type_432),
        }),
        RelayedFrom: sts.enumStruct({
            who: V1Junctions,
            message: Type_430,
        }),
        ReserveAssetDeposited: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => Type_432),
        }),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_429,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => Type_432),
        }),
    }
})

export const Type_432: sts.Type<Type_432> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            instructions: sts.array(() => Type_430),
        }),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        Noop: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
        }),
    }
})

export const Type_425: sts.Type<Type_425> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V0Response,
        }),
        RelayedFrom: sts.enumStruct({
            who: V0MultiLocation,
            message: Type_425,
        }),
        ReserveAssetDeposit: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_427),
        }),
        TeleportAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_427),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_429,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_427),
        }),
    }
})

export const Type_427: sts.Type<Type_427> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V0MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            xcm: sts.array(() => Type_425),
        }),
        DepositAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: sts.array(() => V0MultiAsset),
            receive: sts.array(() => V0MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            reserve: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        Null: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V0MultiLocation,
            assets: sts.array(() => V0MultiAsset),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const WhitelistCall: sts.Type<WhitelistCall> = sts.closedEnum(() => {
    return  {
        dispatch_whitelisted_call: sts.enumStruct({
            callHash: H256,
            callWeightWitness: Weight,
        }),
        dispatch_whitelisted_call_with_preimage: sts.enumStruct({
            call: Call,
        }),
        remove_whitelisted_call: sts.enumStruct({
            callHash: H256,
        }),
        whitelist_call: sts.enumStruct({
            callHash: H256,
        }),
    }
})

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const VoterListCall: sts.Type<VoterListCall> = sts.closedEnum(() => {
    return  {
        put_in_front_of: sts.enumStruct({
            lighter: MultiAddress,
        }),
        rebag: sts.enumStruct({
            dislocated: MultiAddress,
        }),
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
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_151,
        Origins: Origin,
        ParachainsOrigin: Type_154,
        TechnicalCommittee: Type_152,
        Void: Void,
        XcmPallet: Type_156,
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

export const Type_156: sts.Type<Type_156> = sts.closedEnum(() => {
    return  {
        Response: V1MultiLocation,
        Xcm: V1MultiLocation,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_152: sts.Type<Type_152> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_154: sts.Type<Type_154> = sts.closedEnum(() => {
    return  {
        Parachain: Id,
    }
})

export const Id = sts.number()

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        AuctionAdmin: sts.unit(),
        BigSpender: sts.unit(),
        BigTipper: sts.unit(),
        Fellows: sts.unit(),
        Fellowship1Dan: sts.unit(),
        Fellowship2Dan: sts.unit(),
        Fellowship3Dan: sts.unit(),
        Fellowship4Dan: sts.unit(),
        Fellowship5Dan: sts.unit(),
        Fellowship6Dan: sts.unit(),
        Fellowship7Dan: sts.unit(),
        Fellowship8Dan: sts.unit(),
        Fellowship9Dan: sts.unit(),
        FellowshipAdmin: sts.unit(),
        FellowshipExperts: sts.unit(),
        FellowshipInitiates: sts.unit(),
        FellowshipMasters: sts.unit(),
        GeneralAdmin: sts.unit(),
        LeaseAdmin: sts.unit(),
        MediumSpender: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        SmallSpender: sts.unit(),
        SmallTipper: sts.unit(),
        StakingAdmin: sts.unit(),
        Treasurer: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export const Type_151: sts.Type<Type_151> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const UmpCall: sts.Type<UmpCall> = sts.closedEnum(() => {
    return  {
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: Weight,
        }),
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
        remove_approval: sts.enumStruct({
            proposalId: sts.number(),
        }),
        spend: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
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
            who: MultiAddress,
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
            who: MultiAddress,
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
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
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
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        close_old_weight: sts.enumStruct({
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
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: ConfigOp,
            minValidatorBond: ConfigOp,
            maxNominatorCount: Type_103,
            maxValidatorCount: Type_103,
            chillThreshold: Type_104,
            minCommission: Type_105,
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

export const Type_105: sts.Type<Type_105> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export const Perbill = sts.number()

export const Type_104: sts.Type<Type_104> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Percent,
    }
})

export const Type_103: sts.Type<Type_103> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export const ConfigOp: sts.Type<ConfigOp> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
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
            founder: MultiAddress,
            maxMembers: sts.number(),
            rules: sts.bytes(),
        }),
        judge_suspended_candidate: sts.enumStruct({
            who: MultiAddress,
            judgement: Type_221,
        }),
        judge_suspended_member: sts.enumStruct({
            who: MultiAddress,
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
            who: MultiAddress,
            value: sts.bigint(),
            tip: sts.bigint(),
        }),
    }
})

export const Type_221: sts.Type<Type_221> = sts.closedEnum(() => {
    return  {
        Approve: sts.unit(),
        Rebid: sts.unit(),
        Reject: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SlotsCall: sts.Type<SlotsCall> = sts.closedEnum(() => {
    return  {
        clear_all_leases: sts.enumStruct({
            para: Id,
        }),
        force_lease: sts.enumStruct({
            para: Id,
            leaser: AccountId32,
            amount: sts.bigint(),
            periodBegin: sts.number(),
            periodCount: sts.number(),
        }),
        trigger_onboard: sts.enumStruct({
            para: Id,
        }),
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
        paraValidator: V2Public,
        paraAssignment: sts.bytes(),
        authorityDiscovery: sts.bytes(),
    }
})

export const V2Public = sts.bytes()

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
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const RegistrarCall: sts.Type<RegistrarCall> = sts.closedEnum(() => {
    return  {
        add_lock: sts.enumStruct({
            para: Id,
        }),
        deregister: sts.enumStruct({
            id: Id,
        }),
        force_register: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        register: sts.enumStruct({
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        remove_lock: sts.enumStruct({
            para: Id,
        }),
        reserve: sts.unit(),
        schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        swap: sts.enumStruct({
            id: Id,
            other: Id,
        }),
    }
})

export const ValidationCode = sts.bytes()

export const HeadData = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ReferendaCall: sts.Type<ReferendaCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

export const DispatchTime: sts.Type<DispatchTime> = sts.closedEnum(() => {
    return  {
        After: sts.number(),
        At: sts.number(),
    }
})

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return  {
        Inline: BoundedVec,
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
        }),
    }
})

export const BoundedVec = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const RecoveryCall: sts.Type<RecoveryCall> = sts.closedEnum(() => {
    return  {
        as_recovered: sts.enumStruct({
            account: MultiAddress,
            call: Call,
        }),
        cancel_recovered: sts.enumStruct({
            account: MultiAddress,
        }),
        claim_recovery: sts.enumStruct({
            account: MultiAddress,
        }),
        close_recovery: sts.enumStruct({
            rescuer: MultiAddress,
        }),
        create_recovery: sts.enumStruct({
            friends: sts.array(() => AccountId32),
            threshold: sts.number(),
            delayPeriod: sts.number(),
        }),
        initiate_recovery: sts.enumStruct({
            account: MultiAddress,
        }),
        remove_recovery: sts.unit(),
        set_recovered: sts.enumStruct({
            lost: MultiAddress,
            rescuer: MultiAddress,
        }),
        vouch_recovery: sts.enumStruct({
            lost: MultiAddress,
            rescuer: MultiAddress,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        announce: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        create_pure: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.number(),
            index: sts.number(),
        }),
        kill_pure: sts.enumStruct({
            spawner: MultiAddress,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        proxy_announced: sts.enumStruct({
            delegate: MultiAddress,
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        reject_announcement: sts.enumStruct({
            delegate: MultiAddress,
            callHash: H256,
        }),
        remove_announcement: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Auction: sts.unit(),
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
        IdentityJudgement: sts.unit(),
        NonTransfer: sts.unit(),
        Society: sts.unit(),
        Staking: sts.unit(),
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
export const PhragmenElectionCall: sts.Type<PhragmenElectionCall> = sts.closedEnum(() => {
    return  {
        clean_defunct_voters: sts.enumStruct({
            numVoters: sts.number(),
            numDefunct: sts.number(),
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            slashBond: sts.boolean(),
            rerunElection: sts.boolean(),
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
export const ParasSharedCall: sts.Type<ParasSharedCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParasDisputesCall: sts.Type<ParasDisputesCall> = sts.closedEnum(() => {
    return  {
        force_unfreeze: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParasCall: sts.Type<ParasCall> = sts.closedEnum(() => {
    return  {
        add_trusted_validation_code: sts.enumStruct({
            validationCode: ValidationCode,
        }),
        force_note_new_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        force_queue_action: sts.enumStruct({
            para: Id,
        }),
        force_schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
            relayParentNumber: sts.number(),
        }),
        force_set_current_code: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        force_set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        include_pvf_check_statement: sts.enumStruct({
            stmt: V2PvfCheckStatement,
            signature: V2Signature,
        }),
        poke_unused_validation_code: sts.enumStruct({
            validationCodeHash: ValidationCodeHash,
        }),
    }
})

export const ValidationCodeHash = sts.bytes()

export const V2Signature = sts.bytes()

export const V2PvfCheckStatement: sts.Type<V2PvfCheckStatement> = sts.struct(() => {
    return  {
        accept: sts.boolean(),
        subject: ValidationCodeHash,
        sessionIndex: sts.number(),
        validatorIndex: V2ValidatorIndex,
    }
})

export const V2ValidatorIndex = sts.number()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParaInherentCall: sts.Type<ParaInherentCall> = sts.closedEnum(() => {
    return  {
        enter: sts.enumStruct({
            data: V2InherentData,
        }),
    }
})

export const V2InherentData: sts.Type<V2InherentData> = sts.struct(() => {
    return  {
        bitfields: sts.array(() => V2UncheckedSigned),
        backedCandidates: sts.array(() => V2BackedCandidate),
        disputes: sts.array(() => V2DisputeStatementSet),
        parentHeader: Header,
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

export const V2DisputeStatementSet: sts.Type<V2DisputeStatementSet> = sts.struct(() => {
    return  {
        candidateHash: CandidateHash,
        session: sts.number(),
        statements: sts.array(() => sts.tuple(() => [V2DisputeStatement, V2ValidatorIndex, V2Signature])),
    }
})

export const V2DisputeStatement: sts.Type<V2DisputeStatement> = sts.closedEnum(() => {
    return  {
        Invalid: V2InvalidDisputeStatementKind,
        Valid: V2ValidDisputeStatementKind,
    }
})

export const V2ValidDisputeStatementKind: sts.Type<V2ValidDisputeStatementKind> = sts.closedEnum(() => {
    return  {
        ApprovalChecking: sts.unit(),
        BackingSeconded: H256,
        BackingValid: H256,
        Explicit: sts.unit(),
    }
})

export const V2InvalidDisputeStatementKind: sts.Type<V2InvalidDisputeStatementKind> = sts.closedEnum(() => {
    return  {
        Explicit: sts.unit(),
    }
})

export const CandidateHash = sts.bytes()

export const V2BackedCandidate: sts.Type<V2BackedCandidate> = sts.struct(() => {
    return  {
        candidate: V2CommittedCandidateReceipt,
        validityVotes: sts.array(() => V2ValidityAttestation),
        validatorIndices: sts.bitseq(),
    }
})

export const V2ValidityAttestation: sts.Type<V2ValidityAttestation> = sts.closedEnum(() => {
    return  {
        Explicit: V2Signature,
        Implicit: V2Signature,
    }
})

export const V2CommittedCandidateReceipt: sts.Type<V2CommittedCandidateReceipt> = sts.struct(() => {
    return  {
        descriptor: V2CandidateDescriptor,
        commitments: V2CandidateCommitments,
    }
})

export const V2CandidateCommitments: sts.Type<V2CandidateCommitments> = sts.struct(() => {
    return  {
        upwardMessages: sts.array(() => sts.bytes()),
        horizontalMessages: sts.array(() => OutboundHrmpMessage),
        newValidationCode: sts.option(() => ValidationCode),
        headData: HeadData,
        processedDownwardMessages: sts.number(),
        hrmpWatermark: sts.number(),
    }
})

export const OutboundHrmpMessage: sts.Type<OutboundHrmpMessage> = sts.struct(() => {
    return  {
        recipient: Id,
        data: sts.bytes(),
    }
})

export const V2CandidateDescriptor: sts.Type<V2CandidateDescriptor> = sts.struct(() => {
    return  {
        paraId: Id,
        relayParent: H256,
        collator: sts.bytes(),
        persistedValidationDataHash: H256,
        povHash: H256,
        erasureRoot: H256,
        signature: sts.bytes(),
        paraHead: H256,
        validationCodeHash: ValidationCodeHash,
    }
})

export const V2UncheckedSigned: sts.Type<V2UncheckedSigned> = sts.struct(() => {
    return  {
        payload: V2AvailabilityBitfield,
        validatorIndex: V2ValidatorIndex,
        signature: V2Signature,
    }
})

export const V2AvailabilityBitfield = sts.bitseq()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParaInclusionCall: sts.Type<ParaInclusionCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const NominationPoolsCall: sts.Type<NominationPoolsCall> = sts.closedEnum(() => {
    return  {
        bond_extra: sts.enumStruct({
            extra: BondExtra,
        }),
        chill: sts.enumStruct({
            poolId: sts.number(),
        }),
        claim_payout: sts.unit(),
        create: sts.enumStruct({
            amount: sts.bigint(),
            root: MultiAddress,
            nominator: MultiAddress,
            stateToggler: MultiAddress,
        }),
        create_with_pool_id: sts.enumStruct({
            amount: sts.bigint(),
            root: MultiAddress,
            nominator: MultiAddress,
            stateToggler: MultiAddress,
            poolId: sts.number(),
        }),
        join: sts.enumStruct({
            amount: sts.bigint(),
            poolId: sts.number(),
        }),
        nominate: sts.enumStruct({
            poolId: sts.number(),
            validators: sts.array(() => AccountId32),
        }),
        pool_withdraw_unbonded: sts.enumStruct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        }),
        set_configs: sts.enumStruct({
            minJoinBond: Type_328,
            minCreateBond: Type_328,
            maxPools: Type_329,
            maxMembers: Type_329,
            maxMembersPerPool: Type_329,
        }),
        set_metadata: sts.enumStruct({
            poolId: sts.number(),
            metadata: sts.bytes(),
        }),
        set_state: sts.enumStruct({
            poolId: sts.number(),
            state: PoolState,
        }),
        unbond: sts.enumStruct({
            memberAccount: MultiAddress,
            unbondingPoints: sts.bigint(),
        }),
        update_roles: sts.enumStruct({
            poolId: sts.number(),
            newRoot: Type_330,
            newNominator: Type_330,
            newStateToggler: Type_330,
        }),
        withdraw_unbonded: sts.enumStruct({
            memberAccount: MultiAddress,
            numSlashingSpans: sts.number(),
        }),
    }
})

export const Type_330: sts.Type<Type_330> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: AccountId32,
    }
})

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return  {
        Blocked: sts.unit(),
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

export const Type_329: sts.Type<Type_329> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export const Type_328: sts.Type<Type_328> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export const BondExtra: sts.Type<BondExtra> = sts.closedEnum(() => {
    return  {
        FreeBalance: sts.bigint(),
        Rewards: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const NisCounterpartBalancesCall: sts.Type<NisCounterpartBalancesCall> = sts.closedEnum(() => {
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
export const NisCall: sts.Type<NisCall> = sts.closedEnum(() => {
    return  {
        fund_deficit: sts.unit(),
        place_bid: sts.enumStruct({
            amount: sts.bigint(),
            duration: sts.number(),
        }),
        retract_bid: sts.enumStruct({
            amount: sts.bigint(),
            duration: sts.number(),
        }),
        thaw: sts.enumStruct({
            index: sts.number(),
            portion: sts.option(() => sts.bigint()),
        }),
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
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
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
export const InitializerCall: sts.Type<InitializerCall> = sts.closedEnum(() => {
    return  {
        force_approve: sts.enumStruct({
            upTo: sts.number(),
        }),
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
            new: MultiAddress,
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
            new: MultiAddress,
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
            account: MultiAddress,
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
            identity: H256,
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
            new: MultiAddress,
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
export const HrmpCall: sts.Type<HrmpCall> = sts.closedEnum(() => {
    return  {
        force_clean_hrmp: sts.enumStruct({
            para: Id,
            inbound: sts.number(),
            outbound: sts.number(),
        }),
        force_open_hrmp_channel: sts.enumStruct({
            sender: Id,
            recipient: Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        }),
        force_process_hrmp_close: sts.enumStruct({
            channels: sts.number(),
        }),
        force_process_hrmp_open: sts.enumStruct({
            channels: sts.number(),
        }),
        hrmp_accept_open_channel: sts.enumStruct({
            sender: Id,
        }),
        hrmp_cancel_open_request: sts.enumStruct({
            channelId: HrmpChannelId,
            openRequests: sts.number(),
        }),
        hrmp_close_channel: sts.enumStruct({
            channelId: HrmpChannelId,
        }),
        hrmp_init_open_channel: sts.enumStruct({
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
    }
})

export const HrmpChannelId: sts.Type<HrmpChannelId> = sts.struct(() => {
    return  {
        sender: Id,
        recipient: Id,
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
            equivocationProof: Type_112,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_112,
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

export const Type_112: sts.Type<Type_112> = sts.struct(() => {
    return  {
        setId: sts.bigint(),
        equivocation: Equivocation,
    }
})

export const Equivocation: sts.Type<Equivocation> = sts.closedEnum(() => {
    return  {
        Precommit: Type_120,
        Prevote: Type_114,
    }
})

export const Type_114: sts.Type<Type_114> = sts.struct(() => {
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

export const Type_120: sts.Type<Type_120> = sts.struct(() => {
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const FellowshipReferendaCall: sts.Type<FellowshipReferendaCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const FellowshipCollectiveCall: sts.Type<FellowshipCollectiveCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        cleanup_poll: sts.enumStruct({
            pollIndex: sts.number(),
            max: sts.number(),
        }),
        demote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        promote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            minRank: sts.number(),
        }),
        vote: sts.enumStruct({
            poll: sts.number(),
            aye: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const FastUnstakeCall: sts.Type<FastUnstakeCall> = sts.closedEnum(() => {
    return  {
        control: sts.enumStruct({
            uncheckedErasToCheck: sts.number(),
        }),
        deregister: sts.unit(),
        register_fast_unstake: sts.unit(),
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
            maybeNextScore: sts.option(() => ElectionScore),
        }),
        submit: sts.enumStruct({
            rawSolution: RawSolution,
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
        solution: NposCompactSolution24,
        score: ElectionScore,
        round: sts.number(),
    }
})

export const NposCompactSolution24: sts.Type<NposCompactSolution24> = sts.struct(() => {
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
        votes17: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes18: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes19: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes20: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes21: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes22: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes23: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes24: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
    }
})

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return  {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
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
export const DmpCall: sts.Type<DmpCall> = sts.closedEnum(() => {
    return  {
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
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: MultiAddress,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: sts.number(),
        }),
        external_propose: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_default: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_majority: sts.enumStruct({
            proposal: Bounded,
        }),
        fast_track: sts.enumStruct({
            proposalHash: H256,
            votingPeriod: sts.number(),
            delay: sts.number(),
        }),
        propose: sts.enumStruct({
            proposal: Bounded,
            value: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            index: sts.number(),
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: MultiAddress,
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CrowdloanCall: sts.Type<CrowdloanCall> = sts.closedEnum(() => {
    return  {
        add_memo: sts.enumStruct({
            index: Id,
            memo: sts.bytes(),
        }),
        contribute: sts.enumStruct({
            index: sts.number(),
            value: sts.bigint(),
            signature: sts.option(() => MultiSignature),
        }),
        contribute_all: sts.enumStruct({
            index: sts.number(),
            signature: sts.option(() => MultiSignature),
        }),
        create: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        dissolve: sts.enumStruct({
            index: sts.number(),
        }),
        edit: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        poke: sts.enumStruct({
            index: Id,
        }),
        refund: sts.enumStruct({
            index: sts.number(),
        }),
        withdraw: sts.enumStruct({
            who: AccountId32,
            index: sts.number(),
        }),
    }
})

export const MultiSigner: sts.Type<MultiSigner> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
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
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        close_old_weight: sts.enumStruct({
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
export const ConvictionVotingCall: sts.Type<ConvictionVotingCall> = sts.closedEnum(() => {
    return  {
        delegate: sts.enumStruct({
            class: sts.number(),
            to: MultiAddress,
            conviction: Type_146,
            balance: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            class: sts.number(),
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        }),
        undelegate: sts.enumStruct({
            class: sts.number(),
        }),
        unlock: sts.enumStruct({
            class: sts.number(),
            target: MultiAddress,
        }),
        vote: sts.enumStruct({
            pollIndex: sts.number(),
            vote: Type_144,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ConfigurationCall: sts.Type<ConfigurationCall> = sts.closedEnum(() => {
    return  {
        set_bypass_consistency_check: sts.enumStruct({
            new: sts.boolean(),
        }),
        set_chain_availability_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_code_retention_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_conclusion_by_time_out_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_max_spam_slots: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_post_conclusion_acceptance_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_group_rotation_frequency: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_capacity: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_total_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_inbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_outbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parathread_inbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parathread_outbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_open_request_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_recipient_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_hrmp_sender_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_max_code_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_downward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_head_data_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_pov_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_count: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_validators: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_max_validators_per_core: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_minimum_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_n_delay_tranches: sts.enumStruct({
            new: sts.number(),
        }),
        set_needed_approvals: sts.enumStruct({
            new: sts.number(),
        }),
        set_no_show_slots: sts.enumStruct({
            new: sts.number(),
        }),
        set_parathread_cores: sts.enumStruct({
            new: sts.number(),
        }),
        set_parathread_retries: sts.enumStruct({
            new: sts.number(),
        }),
        set_pvf_checking_enabled: sts.enumStruct({
            new: sts.boolean(),
        }),
        set_pvf_voting_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_relay_vrf_modulo_samples: sts.enumStruct({
            new: sts.number(),
        }),
        set_scheduling_lookahead: sts.enumStruct({
            new: sts.number(),
        }),
        set_thread_availability_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_ump_max_individual_weight: sts.enumStruct({
            new: Weight,
        }),
        set_ump_service_total_weight: sts.enumStruct({
            new: Weight,
        }),
        set_validation_upgrade_cooldown: sts.enumStruct({
            new: sts.number(),
        }),
        set_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_zeroth_delay_tranche_width: sts.enumStruct({
            new: sts.number(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ClaimsCall: sts.Type<ClaimsCall> = sts.closedEnum(() => {
    return  {
        attest: sts.enumStruct({
            statement: sts.bytes(),
        }),
        claim: sts.enumStruct({
            dest: AccountId32,
            ethereumSignature: EcdsaSignature,
        }),
        claim_attest: sts.enumStruct({
            dest: AccountId32,
            ethereumSignature: EcdsaSignature,
            statement: sts.bytes(),
        }),
        mint_claim: sts.enumStruct({
            who: EthereumAddress,
            value: sts.bigint(),
            vestingSchedule: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint(), sts.number()])),
            statement: sts.option(() => StatementKind),
        }),
        move_claim: sts.enumStruct({
            old: EthereumAddress,
            new: EthereumAddress,
            maybePreclaim: sts.option(() => AccountId32),
        }),
    }
})

export const StatementKind: sts.Type<StatementKind> = sts.closedEnum(() => {
    return  {
        Regular: sts.unit(),
        Saft: sts.unit(),
    }
})

export const EthereumAddress = sts.bytes()

export const EcdsaSignature = sts.bytes()

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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuctionsCall: sts.Type<AuctionsCall> = sts.closedEnum(() => {
    return  {
        bid: sts.enumStruct({
            para: sts.number(),
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        }),
        cancel_auction: sts.unit(),
        new_auction: sts.enumStruct({
            duration: sts.number(),
            leasePeriodIndex: sts.number(),
        }),
    }
})

export const H256 = sts.bytes()

export const Type_144: sts.Type<Type_144> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        SplitAbstain: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
            abstain: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: sts.number(),
            balance: sts.bigint(),
        }),
    }
})
