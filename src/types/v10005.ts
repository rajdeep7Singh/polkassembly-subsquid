import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_AssetTxPayment | Call_Assets | Call_AssetsRegistry | Call_Authorship | Call_Balances | Call_BondedFinance | Call_CallFilter | Call_CollatorSelection | Call_Council | Call_CouncilMembership | Call_CrowdloanRewards | Call_CumulusXcm | Call_CurrencyFactory | Call_Democracy | Call_DmpQueue | Call_GovernanceRegistry | Call_Identity | Call_Indices | Call_Multisig | Call_Pablo | Call_ParachainInfo | Call_ParachainSystem | Call_Preimage | Call_Proxy | Call_RelayerXcm | Call_Scheduler | Call_Session | Call_Sudo | Call_System | Call_TechnicalCommittee | Call_TechnicalCommitteeMembership | Call_Timestamp | Call_Tokens | Call_Treasury | Call_UnknownTokens | Call_Utility | Call_Vesting | Call_XTokens | Call_XcmpQueue

export interface Call_AssetTxPayment {
    __kind: 'AssetTxPayment'
    value: AssetTxPaymentCall
}

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_AssetsRegistry {
    __kind: 'AssetsRegistry'
    value: AssetsRegistryCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_BondedFinance {
    __kind: 'BondedFinance'
    value: BondedFinanceCall
}

export interface Call_CallFilter {
    __kind: 'CallFilter'
    value: CallFilterCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_CouncilMembership {
    __kind: 'CouncilMembership'
    value: CouncilMembershipCall
}

export interface Call_CrowdloanRewards {
    __kind: 'CrowdloanRewards'
    value: CrowdloanRewardsCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_CurrencyFactory {
    __kind: 'CurrencyFactory'
    value: CurrencyFactoryCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_GovernanceRegistry {
    __kind: 'GovernanceRegistry'
    value: GovernanceRegistryCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Pablo {
    __kind: 'Pablo'
    value: PabloCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
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

export interface Call_RelayerXcm {
    __kind: 'RelayerXcm'
    value: RelayerXcmCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
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

export interface Call_TechnicalCommitteeMembership {
    __kind: 'TechnicalCommitteeMembership'
    value: TechnicalCommitteeMembershipCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Tokens {
    __kind: 'Tokens'
    value: TokensCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_UnknownTokens {
    __kind: 'UnknownTokens'
    value: UnknownTokensCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

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
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

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
    currencyId: CurrencyId
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
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the multiasset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `MultiLocation` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeight: bigint
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the MultiAssets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeight: bigint
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [CurrencyId, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeight: bigint
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: CurrencyId
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeight: bigint
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

export type V1AssetId = V1AssetId_Abstract | V1AssetId_Concrete

export interface V1AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V1AssetId_Concrete {
    __kind: 'Concrete'
    value: V1MultiLocation
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
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

export type VersionedMultiAsset = VersionedMultiAsset_V0 | VersionedMultiAsset_V1

export interface VersionedMultiAsset_V0 {
    __kind: 'V0'
    value: V0MultiAsset
}

export interface VersionedMultiAsset_V1 {
    __kind: 'V1'
    value: V1MultiAsset
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

export type CurrencyId = bigint

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_claim | VestingCall_claim_for | VestingCall_update_vesting_schedules | VestingCall_vested_transfer

/**
 * Unlock any vested funds of the origin account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 * 
 * - `asset`: The asset associated with the vesting schedule
 * - `vesting_schedule_ids`: The ids of the vesting schedules to be claimed
 * 
 * Emits `Claimed`.
 */
export interface VestingCall_claim {
    __kind: 'claim'
    asset: CurrencyId
    vestingScheduleIds: VestingScheduleIdSet
}

/**
 * Unlock any vested funds of a `target` account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `dest`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this pallet.
 * - `asset`: The asset associated with the vesting schedule.
 * - `vesting_schedule_ids`: The ids of the vesting schedules to be claimed.
 * 
 * Emits `Claimed`.
 */
export interface VestingCall_claim_for {
    __kind: 'claim_for'
    dest: MultiAddress
    asset: CurrencyId
    vestingScheduleIds: VestingScheduleIdSet
}

/**
 * Update vesting schedules
 * 
 * The dispatch origin for this call must be _Root_ or democracy.
 * 
 * - `who`: The account whose vested funds should be updated.
 * - `asset`: The asset associated with the vesting schedules.
 * - `vesting_schedules`: The updated vesting schedules.
 * 
 * Emits `VestingSchedulesUpdated`.
 */
export interface VestingCall_update_vesting_schedules {
    __kind: 'update_vesting_schedules'
    who: MultiAddress
    asset: CurrencyId
    vestingSchedules: VestingScheduleInfo[]
}

/**
 * Create a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_ or Democracy.
 * 
 * - `from`: The account sending the vested funds.
 * - `beneficiary`: The account receiving the vested funds.
 * - `asset`: The asset associated with this vesting schedule.
 * - `schedule_info`: The vesting schedule data attached to the transfer.
 * 
 * Emits `VestingScheduleAdded`.
 * 
 * NOTE: This will unlock all schedules through the current block.
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    from: MultiAddress
    beneficiary: MultiAddress
    asset: CurrencyId
    scheduleInfo: VestingScheduleInfo
}

export interface VestingScheduleInfo {
    window: VestingWindow
    periodCount: number
    perPeriod: bigint
}

export type VestingWindow = VestingWindow_BlockNumberBased | VestingWindow_MomentBased

export interface VestingWindow_BlockNumberBased {
    __kind: 'BlockNumberBased'
    start: number
    period: number
}

export interface VestingWindow_MomentBased {
    __kind: 'MomentBased'
    start: bigint
    period: bigint
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

export type VestingScheduleIdSet = VestingScheduleIdSet_All | VestingScheduleIdSet_Many | VestingScheduleIdSet_One

export interface VestingScheduleIdSet_All {
    __kind: 'All'
}

export interface VestingScheduleIdSet_Many {
    __kind: 'Many'
    value: bigint[]
}

export interface VestingScheduleIdSet_One {
    __kind: 'One'
    value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch

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

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
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
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_RelayerXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_263
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_266
}

export interface OriginCaller_RelayerXcm {
    __kind: 'RelayerXcm'
    value: Origin
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_264
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

export type Type_264 = Type_264_Member | Type_264_Members | Type_264__Phantom

export interface Type_264_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_264_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_264__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Response | Origin_Xcm

export interface Origin_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export type Type_266 = Type_266_Relay | Type_266_SiblingParachain

export interface Type_266_Relay {
    __kind: 'Relay'
}

export interface Type_266_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_263 = Type_263_Member | Type_263_Members | Type_263__Phantom

export interface Type_263_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_263_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_263__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UnknownTokensCall = never

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
export type TokensCall = TokensCall_force_transfer | TokensCall_set_balance | TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive

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
    source: MultiAddress
    dest: MultiAddress
    currencyId: CurrencyId
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
    who: MultiAddress
    currencyId: CurrencyId
    newFree: bigint
    newReserved: bigint
}

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
    dest: MultiAddress
    currencyId: CurrencyId
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
    dest: MultiAddress
    currencyId: CurrencyId
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
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
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
export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_change_key | TechnicalCommitteeMembershipCall_clear_prime | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_set_prime | TechnicalCommitteeMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_add_member {
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
export interface TechnicalCommitteeMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId32
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
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_set_prime {
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
export interface TechnicalCommitteeMembershipCall_swap_member {
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
export type RelayerXcmCall = RelayerXcmCall_execute | RelayerXcmCall_force_default_xcm_version | RelayerXcmCall_force_subscribe_version_notify | RelayerXcmCall_force_unsubscribe_version_notify | RelayerXcmCall_force_xcm_version | RelayerXcmCall_limited_reserve_transfer_assets | RelayerXcmCall_limited_teleport_assets | RelayerXcmCall_reserve_transfer_assets | RelayerXcmCall_send | RelayerXcmCall_teleport_assets

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
export interface RelayerXcmCall_execute {
    __kind: 'execute'
    message: Type_284
    maxWeight: bigint
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface RelayerXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface RelayerXcmCall_force_subscribe_version_notify {
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
export interface RelayerXcmCall_force_unsubscribe_version_notify {
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
export interface RelayerXcmCall_force_xcm_version {
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
export interface RelayerXcmCall_limited_reserve_transfer_assets {
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
export interface RelayerXcmCall_limited_teleport_assets {
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
export interface RelayerXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export interface RelayerXcmCall_send {
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
export interface RelayerXcmCall_teleport_assets {
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

export type Type_284 = Type_284_V0 | Type_284_V1 | Type_284_V2

export interface Type_284_V0 {
    __kind: 'V0'
    value: Type_285
}

export interface Type_284_V1 {
    __kind: 'V1'
    value: Type_290
}

export interface Type_284_V2 {
    __kind: 'V2'
    value: Type_296[]
}

export type Type_296 = Type_296_BuyExecution | Type_296_ClaimAsset | Type_296_ClearError | Type_296_ClearOrigin | Type_296_DepositAsset | Type_296_DepositReserveAsset | Type_296_DescendOrigin | Type_296_ExchangeAsset | Type_296_HrmpChannelAccepted | Type_296_HrmpChannelClosing | Type_296_HrmpNewChannelOpenRequest | Type_296_InitiateReserveWithdraw | Type_296_InitiateTeleport | Type_296_QueryHolding | Type_296_QueryResponse | Type_296_ReceiveTeleportedAsset | Type_296_RefundSurplus | Type_296_ReportError | Type_296_ReserveAssetDeposited | Type_296_SetAppendix | Type_296_SetErrorHandler | Type_296_SubscribeVersion | Type_296_Transact | Type_296_TransferAsset | Type_296_TransferReserveAsset | Type_296_Trap | Type_296_UnsubscribeVersion | Type_296_WithdrawAsset

export interface Type_296_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_296_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_296_ClearError {
    __kind: 'ClearError'
}

export interface Type_296_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_296_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_296_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_296_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_296_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_296_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_296_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_296_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_296_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_296_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_296_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_296_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_296_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_296_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_296_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_296_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_296_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_296[]
}

export interface Type_296_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_296[]
}

export interface Type_296_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_296_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_289
}

export interface Type_296_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_296_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_296_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_296_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_296_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_289 {
    encoded: Bytes
}

export type Type_290 = Type_290_HrmpChannelAccepted | Type_290_HrmpChannelClosing | Type_290_HrmpNewChannelOpenRequest | Type_290_QueryResponse | Type_290_ReceiveTeleportedAsset | Type_290_RelayedFrom | Type_290_ReserveAssetDeposited | Type_290_SubscribeVersion | Type_290_Transact | Type_290_TransferAsset | Type_290_TransferReserveAsset | Type_290_UnsubscribeVersion | Type_290_WithdrawAsset

export interface Type_290_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_290_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_290_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_290_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_290_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_292[]
}

export interface Type_290_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_290
}

export interface Type_290_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_292[]
}

export interface Type_290_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_290_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_289
}

export interface Type_290_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_290_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_290_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_290_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_292[]
}

export type Type_292 = Type_292_BuyExecution | Type_292_DepositAsset | Type_292_DepositReserveAsset | Type_292_ExchangeAsset | Type_292_InitiateReserveWithdraw | Type_292_InitiateTeleport | Type_292_Noop | Type_292_QueryHolding

export interface Type_292_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_290[]
}

export interface Type_292_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_292_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_292_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_292_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_292_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_292_Noop {
    __kind: 'Noop'
}

export interface Type_292_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export type Type_285 = Type_285_HrmpChannelAccepted | Type_285_HrmpChannelClosing | Type_285_HrmpNewChannelOpenRequest | Type_285_QueryResponse | Type_285_RelayedFrom | Type_285_ReserveAssetDeposit | Type_285_TeleportAsset | Type_285_Transact | Type_285_TransferAsset | Type_285_TransferReserveAsset | Type_285_WithdrawAsset

export interface Type_285_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_285_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_285_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_285_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_285_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_285
}

export interface Type_285_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_287[]
}

export interface Type_285_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_287[]
}

export interface Type_285_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_289
}

export interface Type_285_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_285_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_285_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_287[]
}

export type Type_287 = Type_287_BuyExecution | Type_287_DepositAsset | Type_287_DepositReserveAsset | Type_287_ExchangeAsset | Type_287_InitiateReserveWithdraw | Type_287_InitiateTeleport | Type_287_Null | Type_287_QueryHolding

export interface Type_287_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_285[]
}

export interface Type_287_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_287_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_287_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_287_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_287_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_287_Null {
    __kind: 'Null'
}

export interface Type_287_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
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

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
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
    validationData: V2PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Bytes
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Bytes
}

export interface StorageProof {
    trieNodes: Bytes[]
}

export interface V2PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainInfoCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PabloCall = PabloCall_add_liquidity | PabloCall_buy | PabloCall_create | PabloCall_enable_twap | PabloCall_remove_liquidity | PabloCall_swap

/**
 * Add liquidity to the given pool.
 * 
 * Emits `LiquidityAdded` event when successful.
 */
export interface PabloCall_add_liquidity {
    __kind: 'add_liquidity'
    poolId: bigint
    assets: [CurrencyId, bigint][]
    minMintAmount: bigint
    keepAlive: boolean
}

/**
 * Execute a buy order on pool.
 * 
 * Emits `Swapped` event when successful.
 */
export interface PabloCall_buy {
    __kind: 'buy'
    poolId: bigint
    inAssetId: CurrencyId
    outAsset: AssetAmount
    keepAlive: boolean
}

/**
 * Create a new pool. Note that this extrinsic does NOT validate if a pool with the same
 * assets already exists in the runtime.
 * 
 * Emits `PoolCreated` event when successful.
 */
export interface PabloCall_create {
    __kind: 'create'
    pool: PoolInitConfiguration
}

export interface PabloCall_enable_twap {
    __kind: 'enable_twap'
    poolId: bigint
}

/**
 * Remove liquidity from the given pool.
 * 
 * Emits `LiquidityRemoved` event when successful.
 */
export interface PabloCall_remove_liquidity {
    __kind: 'remove_liquidity'
    poolId: bigint
    lpAmount: bigint
    minReceive: [CurrencyId, bigint][]
}

/**
 * Execute a specific swap operation.
 * 
 * The `quote_amount` is always the quote asset amount (A/B => B), (B/A => A).
 * 
 * Emits `Swapped` event when successful.
 */
export interface PabloCall_swap {
    __kind: 'swap'
    poolId: bigint
    inAsset: AssetAmount
    minReceive: AssetAmount
    keepAlive: boolean
}

export type PoolInitConfiguration = PoolInitConfiguration_DualAssetConstantProduct

export interface PoolInitConfiguration_DualAssetConstantProduct {
    __kind: 'DualAssetConstantProduct'
    owner: AccountId32
    assetsWeights: [CurrencyId, Permill][]
    fee: Permill
}

export type Permill = number

export interface AssetAmount {
    assetId: CurrencyId
    amount: bigint
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
export type GovernanceRegistryCall = GovernanceRegistryCall_grant_root | GovernanceRegistryCall_remove | GovernanceRegistryCall_set

/**
 * Sets the value of an `asset_id` to root. Only callable by root.
 */
export interface GovernanceRegistryCall_grant_root {
    __kind: 'grant_root'
    assetId: CurrencyId
}

/**
 * Removes mapping of an `asset_id`. Only callable by root.
 */
export interface GovernanceRegistryCall_remove {
    __kind: 'remove'
    assetId: CurrencyId
}

/**
 * Sets the value of an `asset_id` to the signed account id. Only callable by root.
 */
export interface GovernanceRegistryCall_set {
    __kind: 'set'
    assetId: CurrencyId
    value: AccountId32
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
 * Weight: `O(p)` where `p = PublicProps::<T, I>::decode_len()`
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
 * - `voting_period`: The period that is allowed for voting on this proposal.
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
export type CurrencyFactoryCall = CurrencyFactoryCall_add_range | CurrencyFactoryCall_set_metadata

export interface CurrencyFactoryCall_add_range {
    __kind: 'add_range'
    length: bigint
}

/**
 * Sets metadata
 */
export interface CurrencyFactoryCall_set_metadata {
    __kind: 'set_metadata'
    assetId: CurrencyId
    metadata: BasicAssetMetadata
}

export interface BasicAssetMetadata {
    symbol: BiBoundedVec
    name: Type_306
}

export interface Type_306 {
    inner: Bytes
}

export interface BiBoundedVec {
    inner: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CumulusXcmCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CrowdloanRewardsCall = CrowdloanRewardsCall_add | CrowdloanRewardsCall_associate | CrowdloanRewardsCall_claim | CrowdloanRewardsCall_initialize | CrowdloanRewardsCall_initialize_at | CrowdloanRewardsCall_populate | CrowdloanRewardsCall_unlock_rewards_for

/**
 * Adds all accounts in the `additions` vector. Add may be called even if the pallet has
 * been initialized.
 */
export interface CrowdloanRewardsCall_add {
    __kind: 'add'
    additions: [RemoteAccount, bigint, bigint][]
}

/**
 * Associate a reward account. A valid proof has to be provided.
 * This call also claim the first reward (a.k.a. the first payment, which is a % of the
 * vested reward).
 * If logic gate pass, no fees are applied.
 * 
 * The proof should be:
 * ```haskell
 * proof = sign (concat prefix (hex reward_account))
 * ```
 */
export interface CrowdloanRewardsCall_associate {
    __kind: 'associate'
    rewardAccount: AccountId32
    proof: Proof
}

/**
 * Claim a reward from the associated reward account.
 * A previous call to `associate` should have been made.
 * If logic gate pass, no fees are applied.
 */
export interface CrowdloanRewardsCall_claim {
    __kind: 'claim'
}

/**
 * Initialize the pallet at the current timestamp.
 */
export interface CrowdloanRewardsCall_initialize {
    __kind: 'initialize'
}

/**
 * Initialize the pallet at the given timestamp.
 */
export interface CrowdloanRewardsCall_initialize_at {
    __kind: 'initialize_at'
    at: bigint
}

/**
 * Populate pallet by adding more rewards.
 * 
 * Each index in the rewards vector should contain: `remote_account`, `reward_account`,
 * `vesting_period`.
 * 
 * Can be called multiple times. If an remote account
 * already has a reward, it will be replaced by the new reward value.
 * 
 * Can only be called before `initialize`.
 */
export interface CrowdloanRewardsCall_populate {
    __kind: 'populate'
    rewards: [RemoteAccount, bigint, bigint][]
}

export interface CrowdloanRewardsCall_unlock_rewards_for {
    __kind: 'unlock_rewards_for'
    rewardAccounts: AccountId32[]
}

export type Proof = Proof_Ethereum | Proof_RelayChain

export interface Proof_Ethereum {
    __kind: 'Ethereum'
    value: EcdsaSignature
}

export interface Proof_RelayChain {
    __kind: 'RelayChain'
    value: [AccountId32, MultiSignature]
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

export type EcdsaSignature = Bytes

export type RemoteAccount = RemoteAccount_Ethereum | RemoteAccount_RelayChain

export interface RemoteAccount_Ethereum {
    __kind: 'Ethereum'
    value: EthereumAddress
}

export interface RemoteAccount_RelayChain {
    __kind: 'RelayChain'
    value: AccountId32
}

export type EthereumAddress = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilMembershipCall = CouncilMembershipCall_add_member | CouncilMembershipCall_change_key | CouncilMembershipCall_clear_prime | CouncilMembershipCall_remove_member | CouncilMembershipCall_reset_members | CouncilMembershipCall_set_prime | CouncilMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface CouncilMembershipCall_add_member {
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
export interface CouncilMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId32
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
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface CouncilMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface CouncilMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_set_prime {
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
export interface CouncilMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: AccountId32
    add: AccountId32
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
export type CollatorSelectionCall = CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables

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
 * Register this account as a collator candidate. The account must (a) already have
 * registered session keys and (b) be able to reserve the `CandidacyBond`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * Set the candidacy bond amount.
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
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
 * Set the list of invulnerable (fixed) collators.
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CallFilterCall = CallFilterCall_disable | CallFilterCall_enable

/**
 * Disable a pallet function.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be
 * `UpdateOrigin`.
 * 
 * Possibly emits a `Disabled` event.
 */
export interface CallFilterCall_disable {
    __kind: 'disable'
    entry: CallFilterEntry
}

/**
 * Enable a previously disabled pallet function.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be
 * `UpdateOrigin`.
 * 
 * Possibly emits an `Enabled` event.
 */
export interface CallFilterCall_enable {
    __kind: 'enable'
    entry: CallFilterEntry
}

export interface CallFilterEntry {
    palletName: BoundedVec
    functionName: BoundedVec
}

export type BoundedVec = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BondedFinanceCall = BondedFinanceCall_bond | BondedFinanceCall_cancel | BondedFinanceCall_offer

/**
 * Bond to an offer.
 * 
 * The issuer should provide the number of contracts they are willing to buy.
 * Once there are no more contracts available on the offer, the `stake` put by the
 * offer creator is refunded.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have the
 * appropriate funds to buy the desired number of contracts.
 * 
 * Allows the issuer to ask for their account to be kept alive using the `keep_alive`
 * parameter.
 * 
 * Emits a `NewBond`.
 * Possibly Emits a `OfferCompleted`.
 */
export interface BondedFinanceCall_bond {
    __kind: 'bond'
    offerId: bigint
    nbOfBonds: bigint
    keepAlive: boolean
}

/**
 * Cancel a running offer.
 * 
 * Blocking further bonds but not cancelling the currently vested rewards. The `stake` put
 * by the offer creator is refunded.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be `AdminOrigin`
 * 
 * Emits a `OfferCancelled`.
 */
export interface BondedFinanceCall_cancel {
    __kind: 'cancel'
    offerId: bigint
}

/**
 * Create a new bond offer. To be `bond` to later.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have the
 * appropriate funds to stake the offer.
 * 
 * Allows the issuer to ask for their account to be kept alive using the `keep_alive`
 * parameter.
 * 
 * Emits a `NewOffer`.
 */
export interface BondedFinanceCall_offer {
    __kind: 'offer'
    offer: BondOffer
    keepAlive: boolean
}

export interface BondOffer {
    beneficiary: AccountId32
    asset: CurrencyId
    bondPrice: bigint
    nbOfBonds: bigint
    maturity: BondDuration
    reward: BondOfferReward
}

export interface BondOfferReward {
    asset: CurrencyId
    amount: bigint
    maturity: number
}

export type BondDuration = BondDuration_Finite | BondDuration_Infinite

export interface BondDuration_Finite {
    __kind: 'Finite'
    returnIn: number
}

export interface BondDuration_Infinite {
    __kind: 'Infinite'
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsRegistryCall = AssetsRegistryCall_register_asset | AssetsRegistryCall_set_min_fee | AssetsRegistryCall_update_asset

/**
 * Creates asset using `CurrencyFactory`.
 * Raises `AssetRegistered` event
 * 
 * Sets only required fields by `CurrencyFactory`, to upsert metadata use referenced
 * pallet.
 * 
 * # Parameters:
 * 
 * `ratio` -  
 * Allows `bring you own gas` fees.
 * Set to `None` to prevent payment in this asset, only transferring.
 * Setting to some will NOT start minting tokens with specified ratio.
 * 
 * ```python
 *  ratio = foreign_token / native_token
 *  amount_of_foreign_asset = amount_of_native_asset * ratio
 * ```
 * 
 * `decimals` - `human` number of decimals
 * 
 * `ed` - same meaning as in for foreign asset account (if None, then asset is not
 * sufficient)
 */
export interface AssetsRegistryCall_register_asset {
    __kind: 'register_asset'
    location: XcmAssetLocation
    ratio: Rational64
    decimals?: (number | undefined)
}

/**
 * Minimal amount of `foreign_asset_id` required to send message to other network.
 * Target network may or may not accept payment `amount`.
 * Assumed this is maintained up to date by technical team.
 * Mostly UI hint and fail fast solution.
 * Messages sending smaller fee will not be sent.
 * In theory can be updated by parachain sovereign account too.
 * If None, than it is well known cannot pay with that asset on target_parachain_id.
 * If Some(0), than price can be anything greater or equal to zero.
 * If Some(MAX), than actually it forbids transfers.
 */
export interface AssetsRegistryCall_set_min_fee {
    __kind: 'set_min_fee'
    targetParachainId: Id
    foreignAssetId: XcmAssetLocation
    amount?: (bigint | undefined)
}

/**
 * Given well existing asset, update its remote information.
 * Use with caution as it allow reroute assets location.
 * See `register_asset` for parameters meaning.
 */
export interface AssetsRegistryCall_update_asset {
    __kind: 'update_asset'
    assetId: CurrencyId
    location: XcmAssetLocation
    ratio: Rational64
    decimals?: (number | undefined)
}

export interface Rational64 {
    n: bigint
    d: bigint
}

export interface XcmAssetLocation {
    parents: number
    interior: V1Junctions
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsCall = AssetsCall_burn_from | AssetsCall_force_transfer | AssetsCall_force_transfer_native | AssetsCall_mint_initialize | AssetsCall_mint_initialize_with_governance | AssetsCall_mint_into | AssetsCall_transfer | AssetsCall_transfer_all | AssetsCall_transfer_all_native | AssetsCall_transfer_native

/**
 * Burns `amount` of `asset_id` into the `dest` account.
 */
export interface AssetsCall_burn_from {
    __kind: 'burn_from'
    assetId: CurrencyId
    dest: MultiAddress
    amount: bigint
}

/**
 * Transfer `amount` of the `asset` from `origin` to `dest`. This requires root.
 * 
 * # Errors
 *  - When `origin` is not root.
 *  - If the account has insufficient free balance to make the transfer, or if `keep_alive`
 *    cannot be respected.
 *  - If the `dest` cannot be looked up.
 */
export interface AssetsCall_force_transfer {
    __kind: 'force_transfer'
    asset: CurrencyId
    source: MultiAddress
    dest: MultiAddress
    value: bigint
    keepAlive: boolean
}

/**
 * Transfer `amount` of the the native asset from `origin` to `dest`. This requires root.
 * 
 * # Errors
 *  - When `origin` is not root.
 *  - If the account has insufficient free balance to make the transfer, or if `keep_alive`
 *    cannot be respected.
 *  - If the `dest` cannot be looked up.
 */
export interface AssetsCall_force_transfer_native {
    __kind: 'force_transfer_native'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
    keepAlive: boolean
}

/**
 * Creates a new asset, minting `amount` of funds into the `dest` account. Intended to be
 * used for creating wrapped assets, not associated with any project.
 */
export interface AssetsCall_mint_initialize {
    __kind: 'mint_initialize'
    amount: bigint
    dest: MultiAddress
}

/**
 * Creates a new asset, minting `amount` of funds into the `dest` account. The `dest`
 * account can use the democracy pallet to mint further assets, or if the governance_origin
 * is set to an owned account, using signed transactions. In general the
 * `governance_origin` should be generated from the pallet id.
 */
export interface AssetsCall_mint_initialize_with_governance {
    __kind: 'mint_initialize_with_governance'
    amount: bigint
    governanceOrigin: MultiAddress
    dest: MultiAddress
}

/**
 * Mints `amount` of `asset_id` into the `dest` account.
 */
export interface AssetsCall_mint_into {
    __kind: 'mint_into'
    assetId: CurrencyId
    dest: MultiAddress
    amount: bigint
}

/**
 * Transfer `amount` of `asset` from `origin` to `dest`.
 * 
 * # Errors
 *  - When `origin` is not signed.
 *  - If the account has insufficient free balance to make the transfer, or if `keep_alive`
 *    cannot be respected.
 *  - If the `dest` cannot be looked up.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    asset: CurrencyId
    dest: MultiAddress
    amount: bigint
    keepAlive: boolean
}

/**
 * Transfer all free balance of the `asset` from `origin` to `dest`.
 * 
 * # Errors
 *  - When `origin` is not signed.
 *  - If the `dest` cannot be looked up.
 */
export interface AssetsCall_transfer_all {
    __kind: 'transfer_all'
    asset: CurrencyId
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Transfer all free balance of the native asset from `origin` to `dest`.
 * 
 * # Errors
 *  - When `origin` is not signed.
 *  - If the `dest` cannot be looked up.
 */
export interface AssetsCall_transfer_all_native {
    __kind: 'transfer_all_native'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Transfer `amount` of the native asset from `origin` to `dest`. This is slightly
 * cheaper to call, as it avoids an asset lookup.
 * 
 * # Errors
 *  - When `origin` is not signed.
 *  - If the account has insufficient free balance to make the transfer, or if `keep_alive`
 *    cannot be respected.
 *  - If the `dest` cannot be looked up.
 */
export interface AssetsCall_transfer_native {
    __kind: 'transfer_native'
    dest: MultiAddress
    value: bigint
    keepAlive: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetTxPaymentCall = AssetTxPaymentCall_set_payment_asset

/**
 * Sets or resets payment asset.
 * 
 * If `asset_id` is `None`, then native asset is used.
 * Else new asset is configured and ED is on hold.
 */
export interface AssetTxPaymentCall_set_payment_asset {
    __kind: 'set_payment_asset'
    payer: AccountId32
    assetId?: (CurrencyId | undefined)
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        AssetTxPayment: AssetTxPaymentCall,
        Assets: AssetsCall,
        AssetsRegistry: AssetsRegistryCall,
        Authorship: AuthorshipCall,
        Balances: BalancesCall,
        BondedFinance: BondedFinanceCall,
        CallFilter: CallFilterCall,
        CollatorSelection: CollatorSelectionCall,
        Council: CouncilCall,
        CouncilMembership: CouncilMembershipCall,
        CrowdloanRewards: CrowdloanRewardsCall,
        CumulusXcm: CumulusXcmCall,
        CurrencyFactory: CurrencyFactoryCall,
        Democracy: DemocracyCall,
        DmpQueue: DmpQueueCall,
        GovernanceRegistry: GovernanceRegistryCall,
        Identity: IdentityCall,
        Indices: IndicesCall,
        Multisig: MultisigCall,
        Pablo: PabloCall,
        ParachainInfo: ParachainInfoCall,
        ParachainSystem: ParachainSystemCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        RelayerXcm: RelayerXcmCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalCommitteeMembership: TechnicalCommitteeMembershipCall,
        Timestamp: TimestampCall,
        Tokens: TokensCall,
        Treasury: TreasuryCall,
        UnknownTokens: UnknownTokensCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        XTokens: XTokensCall,
        XcmpQueue: XcmpQueueCall,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XcmpQueueCall: sts.Type<XcmpQueueCall> = sts.closedEnum(() => {
    return  {
        resume_xcm_execution: sts.unit(),
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: sts.bigint(),
        }),
        suspend_xcm_execution: sts.unit(),
        update_drop_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_resume_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_suspend_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_threshold_weight: sts.enumStruct({
            new: sts.bigint(),
        }),
        update_weight_restrict_decay: sts.enumStruct({
            new: sts.bigint(),
        }),
        update_xcmp_max_individual_weight: sts.enumStruct({
            new: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeight: sts.bigint(),
        }),
        transfer_multiasset: sts.enumStruct({
            asset: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeight: sts.bigint(),
        }),
        transfer_multiasset_with_fee: sts.enumStruct({
            asset: VersionedMultiAsset,
            fee: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeight: sts.bigint(),
        }),
        transfer_multiassets: sts.enumStruct({
            assets: VersionedMultiAssets,
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeight: sts.bigint(),
        }),
        transfer_multicurrencies: sts.enumStruct({
            currencies: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeight: sts.bigint(),
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeight: sts.bigint(),
        }),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return  {
        V0: sts.array(() => V0MultiAsset),
        V1: sts.array(() => V1MultiAsset),
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

export const V1AssetId: sts.Type<V1AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V1MultiLocation,
    }
})

export const V1MultiLocation: sts.Type<V1MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V1Junctions,
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

export const VersionedMultiAsset: sts.Type<VersionedMultiAsset> = sts.closedEnum(() => {
    return  {
        V0: V0MultiAsset,
        V1: V1MultiAsset,
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V0: V0MultiLocation,
        V1: V1MultiLocation,
    }
})

export const CurrencyId = sts.bigint()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            asset: CurrencyId,
            vestingScheduleIds: VestingScheduleIdSet,
        }),
        claim_for: sts.enumStruct({
            dest: MultiAddress,
            asset: CurrencyId,
            vestingScheduleIds: VestingScheduleIdSet,
        }),
        update_vesting_schedules: sts.enumStruct({
            who: MultiAddress,
            asset: CurrencyId,
            vestingSchedules: sts.array(() => VestingScheduleInfo),
        }),
        vested_transfer: sts.enumStruct({
            from: MultiAddress,
            beneficiary: MultiAddress,
            asset: CurrencyId,
            scheduleInfo: VestingScheduleInfo,
        }),
    }
})

export const VestingScheduleInfo: sts.Type<VestingScheduleInfo> = sts.struct(() => {
    return  {
        window: VestingWindow,
        periodCount: sts.number(),
        perPeriod: sts.bigint(),
    }
})

export const VestingWindow: sts.Type<VestingWindow> = sts.closedEnum(() => {
    return  {
        BlockNumberBased: sts.enumStruct({
            start: sts.number(),
            period: sts.number(),
        }),
        MomentBased: sts.enumStruct({
            start: sts.bigint(),
            period: sts.bigint(),
        }),
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

export const VestingScheduleIdSet: sts.Type<VestingScheduleIdSet> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        Many: sts.array(() => sts.bigint()),
        One: sts.bigint(),
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
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_263,
        CumulusXcm: Type_266,
        RelayerXcm: Origin,
        TechnicalCommittee: Type_264,
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

export const Type_264: sts.Type<Type_264> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Response: V1MultiLocation,
        Xcm: V1MultiLocation,
    }
})

export const Type_266: sts.Type<Type_266> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_263: sts.Type<Type_263> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const UnknownTokensCall: sts.Type<UnknownTokensCall> = sts.closedEnum(() => {
    return  {
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
export const TokensCall: sts.Type<TokensCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: MultiAddress,
            currencyId: CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
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
export const TechnicalCommitteeMembershipCall: sts.Type<TechnicalCommitteeMembershipCall> = sts.closedEnum(() => {
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
export const RelayerXcmCall: sts.Type<RelayerXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_284,
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

export const Type_284: sts.Type<Type_284> = sts.closedEnum(() => {
    return  {
        V0: Type_285,
        V1: Type_290,
        V2: sts.array(() => Type_296),
    }
})

export const Type_296: sts.Type<Type_296> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_296),
        SetErrorHandler: sts.array(() => Type_296),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_289,
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

export const Type_289: sts.Type<Type_289> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_290: sts.Type<Type_290> = sts.closedEnum(() => {
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
            effects: sts.array(() => Type_292),
        }),
        RelayedFrom: sts.enumStruct({
            who: V1Junctions,
            message: Type_290,
        }),
        ReserveAssetDeposited: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => Type_292),
        }),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_289,
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
            effects: sts.array(() => Type_292),
        }),
    }
})

export const Type_292: sts.Type<Type_292> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            instructions: sts.array(() => Type_290),
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

export const Type_285: sts.Type<Type_285> = sts.closedEnum(() => {
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
            message: Type_285,
        }),
        ReserveAssetDeposit: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_287),
        }),
        TeleportAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_287),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_289,
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
            effects: sts.array(() => Type_287),
        }),
    }
})

export const Type_287: sts.Type<Type_287> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V0MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            xcm: sts.array(() => Type_285),
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
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
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
        validationData: V2PersistedValidationData,
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

export const V2PersistedValidationData: sts.Type<V2PersistedValidationData> = sts.struct(() => {
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
export const ParachainInfoCall: sts.Type<ParachainInfoCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PabloCall: sts.Type<PabloCall> = sts.closedEnum(() => {
    return  {
        add_liquidity: sts.enumStruct({
            poolId: sts.bigint(),
            assets: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            minMintAmount: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        buy: sts.enumStruct({
            poolId: sts.bigint(),
            inAssetId: CurrencyId,
            outAsset: AssetAmount,
            keepAlive: sts.boolean(),
        }),
        create: sts.enumStruct({
            pool: PoolInitConfiguration,
        }),
        enable_twap: sts.enumStruct({
            poolId: sts.bigint(),
        }),
        remove_liquidity: sts.enumStruct({
            poolId: sts.bigint(),
            lpAmount: sts.bigint(),
            minReceive: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
        }),
        swap: sts.enumStruct({
            poolId: sts.bigint(),
            inAsset: AssetAmount,
            minReceive: AssetAmount,
            keepAlive: sts.boolean(),
        }),
    }
})

export const PoolInitConfiguration: sts.Type<PoolInitConfiguration> = sts.closedEnum(() => {
    return  {
        DualAssetConstantProduct: sts.enumStruct({
            owner: AccountId32,
            assetsWeights: sts.array(() => sts.tuple(() => [CurrencyId, Permill])),
            fee: Permill,
        }),
    }
})

export const Permill = sts.number()

export const AssetAmount: sts.Type<AssetAmount> = sts.struct(() => {
    return  {
        assetId: CurrencyId,
        amount: sts.bigint(),
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
export const GovernanceRegistryCall: sts.Type<GovernanceRegistryCall> = sts.closedEnum(() => {
    return  {
        grant_root: sts.enumStruct({
            assetId: CurrencyId,
        }),
        remove: sts.enumStruct({
            assetId: CurrencyId,
        }),
        set: sts.enumStruct({
            assetId: CurrencyId,
            value: AccountId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DmpQueueCall: sts.Type<DmpQueueCall> = sts.closedEnum(() => {
    return  {
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: sts.bigint(),
        }),
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
export const CurrencyFactoryCall: sts.Type<CurrencyFactoryCall> = sts.closedEnum(() => {
    return  {
        add_range: sts.enumStruct({
            length: sts.bigint(),
        }),
        set_metadata: sts.enumStruct({
            assetId: CurrencyId,
            metadata: BasicAssetMetadata,
        }),
    }
})

export const BasicAssetMetadata: sts.Type<BasicAssetMetadata> = sts.struct(() => {
    return  {
        symbol: BiBoundedVec,
        name: Type_306,
    }
})

export const Type_306: sts.Type<Type_306> = sts.struct(() => {
    return  {
        inner: sts.bytes(),
    }
})

export const BiBoundedVec: sts.Type<BiBoundedVec> = sts.struct(() => {
    return  {
        inner: sts.bytes(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CumulusXcmCall: sts.Type<CumulusXcmCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CrowdloanRewardsCall: sts.Type<CrowdloanRewardsCall> = sts.closedEnum(() => {
    return  {
        add: sts.enumStruct({
            additions: sts.array(() => sts.tuple(() => [RemoteAccount, sts.bigint(), sts.bigint()])),
        }),
        associate: sts.enumStruct({
            rewardAccount: AccountId32,
            proof: Proof,
        }),
        claim: sts.unit(),
        initialize: sts.unit(),
        initialize_at: sts.enumStruct({
            at: sts.bigint(),
        }),
        populate: sts.enumStruct({
            rewards: sts.array(() => sts.tuple(() => [RemoteAccount, sts.bigint(), sts.bigint()])),
        }),
        unlock_rewards_for: sts.enumStruct({
            rewardAccounts: sts.array(() => AccountId32),
        }),
    }
})

export const Proof: sts.Type<Proof> = sts.closedEnum(() => {
    return  {
        Ethereum: EcdsaSignature,
        RelayChain: sts.tuple(() => [AccountId32, MultiSignature]),
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

export const EcdsaSignature = sts.bytes()

export const RemoteAccount: sts.Type<RemoteAccount> = sts.closedEnum(() => {
    return  {
        Ethereum: EthereumAddress,
        RelayChain: AccountId32,
    }
})

export const EthereumAddress = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CouncilMembershipCall: sts.Type<CouncilMembershipCall> = sts.closedEnum(() => {
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
export const CollatorSelectionCall: sts.Type<CollatorSelectionCall> = sts.closedEnum(() => {
    return  {
        leave_intent: sts.unit(),
        register_as_candidate: sts.unit(),
        set_candidacy_bond: sts.enumStruct({
            bond: sts.bigint(),
        }),
        set_desired_candidates: sts.enumStruct({
            max: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            new: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CallFilterCall: sts.Type<CallFilterCall> = sts.closedEnum(() => {
    return  {
        disable: sts.enumStruct({
            entry: CallFilterEntry,
        }),
        enable: sts.enumStruct({
            entry: CallFilterEntry,
        }),
    }
})

export const CallFilterEntry: sts.Type<CallFilterEntry> = sts.struct(() => {
    return  {
        palletName: BoundedVec,
        functionName: BoundedVec,
    }
})

export const BoundedVec = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BondedFinanceCall: sts.Type<BondedFinanceCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            offerId: sts.bigint(),
            nbOfBonds: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        cancel: sts.enumStruct({
            offerId: sts.bigint(),
        }),
        offer: sts.enumStruct({
            offer: BondOffer,
            keepAlive: sts.boolean(),
        }),
    }
})

export const BondOffer: sts.Type<BondOffer> = sts.struct(() => {
    return  {
        beneficiary: AccountId32,
        asset: CurrencyId,
        bondPrice: sts.bigint(),
        nbOfBonds: sts.bigint(),
        maturity: BondDuration,
        reward: BondOfferReward,
    }
})

export const BondOfferReward: sts.Type<BondOfferReward> = sts.struct(() => {
    return  {
        asset: CurrencyId,
        amount: sts.bigint(),
        maturity: sts.number(),
    }
})

export const BondDuration: sts.Type<BondDuration> = sts.closedEnum(() => {
    return  {
        Finite: sts.enumStruct({
            returnIn: sts.number(),
        }),
        Infinite: sts.unit(),
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetsRegistryCall: sts.Type<AssetsRegistryCall> = sts.closedEnum(() => {
    return  {
        register_asset: sts.enumStruct({
            location: XcmAssetLocation,
            ratio: Rational64,
            decimals: sts.option(() => sts.number()),
        }),
        set_min_fee: sts.enumStruct({
            targetParachainId: Id,
            foreignAssetId: XcmAssetLocation,
            amount: sts.option(() => sts.bigint()),
        }),
        update_asset: sts.enumStruct({
            assetId: CurrencyId,
            location: XcmAssetLocation,
            ratio: Rational64,
            decimals: sts.option(() => sts.number()),
        }),
    }
})

export const Rational64: sts.Type<Rational64> = sts.struct(() => {
    return  {
        n: sts.bigint(),
        d: sts.bigint(),
    }
})

export const XcmAssetLocation: sts.Type<XcmAssetLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V1Junctions,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetsCall: sts.Type<AssetsCall> = sts.closedEnum(() => {
    return  {
        burn_from: sts.enumStruct({
            assetId: CurrencyId,
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            asset: CurrencyId,
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        force_transfer_native: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        mint_initialize: sts.enumStruct({
            amount: sts.bigint(),
            dest: MultiAddress,
        }),
        mint_initialize_with_governance: sts.enumStruct({
            amount: sts.bigint(),
            governanceOrigin: MultiAddress,
            dest: MultiAddress,
        }),
        mint_into: sts.enumStruct({
            assetId: CurrencyId,
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            asset: CurrencyId,
            dest: MultiAddress,
            amount: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        transfer_all: sts.enumStruct({
            asset: CurrencyId,
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_all_native: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_native: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetTxPaymentCall: sts.Type<AssetTxPaymentCall> = sts.closedEnum(() => {
    return  {
        set_payment_asset: sts.enumStruct({
            payer: AccountId32,
            assetId: sts.option(() => CurrencyId),
        }),
    }
})

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
        error: sts.bytes(),
    }
})

export interface ModuleError {
    index: number
    error: Bytes
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

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional

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

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export const H256 = sts.bytes()

export const AccountId32 = sts.bytes()
