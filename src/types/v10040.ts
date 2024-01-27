import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_AssetTxPayment | Call_Assets | Call_AssetsRegistry | Call_Balances | Call_CallFilter | Call_CollatorSelection | Call_ConvictionVoting | Call_Cosmwasm | Call_Council | Call_CouncilMembership | Call_CrowdloanRewards | Call_CumulusXcm | Call_Democracy | Call_DmpQueue | Call_Farming | Call_FarmingRewards | Call_Ibc | Call_Ics20Fee | Call_Identity | Call_Indices | Call_Multisig | Call_OpenGovBalances | Call_Oracle | Call_Pablo | Call_PalletMultihopXcmIbc | Call_ParachainInfo | Call_ParachainSystem | Call_PolkadotXcm | Call_Preimage | Call_Proxy | Call_Referenda | Call_ReleaseCommittee | Call_ReleaseMembership | Call_Scheduler | Call_Session | Call_Sudo | Call_System | Call_TechnicalCommittee | Call_TechnicalCommitteeMembership | Call_Timestamp | Call_Tokens | Call_Treasury | Call_UnknownTokens | Call_Utility | Call_Vesting | Call_Whitelist | Call_XTokens | Call_XcmpQueue

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

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_CallFilter {
    __kind: 'CallFilter'
    value: CallFilterCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Cosmwasm {
    __kind: 'Cosmwasm'
    value: CosmwasmCall
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

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_Farming {
    __kind: 'Farming'
    value: FarmingCall
}

export interface Call_FarmingRewards {
    __kind: 'FarmingRewards'
    value: FarmingRewardsCall
}

export interface Call_Ibc {
    __kind: 'Ibc'
    value: IbcCall
}

export interface Call_Ics20Fee {
    __kind: 'Ics20Fee'
    value: Ics20FeeCall
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

export interface Call_OpenGovBalances {
    __kind: 'OpenGovBalances'
    value: OpenGovBalancesCall
}

export interface Call_Oracle {
    __kind: 'Oracle'
    value: OracleCall
}

export interface Call_Pablo {
    __kind: 'Pablo'
    value: PabloCall
}

export interface Call_PalletMultihopXcmIbc {
    __kind: 'PalletMultihopXcmIbc'
    value: PalletMultihopXcmIbcCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_ReleaseCommittee {
    __kind: 'ReleaseCommittee'
    value: ReleaseCommitteeCall
}

export interface Call_ReleaseMembership {
    __kind: 'ReleaseMembership'
    value: ReleaseMembershipCall
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

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
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

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

/**
 * Transfer native currencies.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
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
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
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
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
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
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
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
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
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
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
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
    destWeightLimit: V3WeightLimit
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

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
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

export type V3AssetInstance = V3AssetInstance_Array16 | V3AssetInstance_Array32 | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Index | V3AssetInstance_Undefined

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
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

export type V3Junction = V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_GlobalConsensus | V3Junction_OnlyChild | V3Junction_PalletInstance | V3Junction_Parachain | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V3NetworkId | undefined)
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V3NetworkId | undefined)
    key: Bytes
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V3BodyPart = V3BodyPart_AtLeastProportion | V3BodyPart_Fraction | V3BodyPart_Members | V3BodyPart_MoreThanProportion | V3BodyPart_Voice

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export type V3BodyId = V3BodyId_Administration | V3BodyId_Defense | V3BodyId_Executive | V3BodyId_Index | V3BodyId_Judicial | V3BodyId_Legislative | V3BodyId_Moniker | V3BodyId_Technical | V3BodyId_Treasury | V3BodyId_Unit

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Bytes
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
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

export type V2AssetInstance = V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Blob | V2AssetInstance_Index | V2AssetInstance_Undefined

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V2AssetId = V2AssetId_Abstract | V2AssetId_Concrete

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
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

export type V2Junction = V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_PalletInstance | V2Junction_Parachain | V2Junction_Plurality

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Bytes
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Bytes
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2BodyPart = V2BodyPart_AtLeastProportion | V2BodyPart_Fraction | V2BodyPart_Members | V2BodyPart_MoreThanProportion | V2BodyPart_Voice

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export type V2BodyId = V2BodyId_Administration | V2BodyId_Defense | V2BodyId_Executive | V2BodyId_Index | V2BodyId_Judicial | V2BodyId_Legislative | V2BodyId_Named | V2BodyId_Technical | V2BodyId_Treasury | V2BodyId_Unit

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Kusama | V2NetworkId_Named | V2NetworkId_Polkadot

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export type VersionedMultiAsset = VersionedMultiAsset_V2 | VersionedMultiAsset_V3

export interface VersionedMultiAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedMultiAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
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

export type CurrencyId = bigint

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type WhitelistCall = WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage | WhitelistCall_remove_whitelisted_call | WhitelistCall_whitelist_call

export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: H256
    callEncodedLen: number
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

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_Origins | OriginCaller_PolkadotXcm | OriginCaller_ReleaseCommittee | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_285
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_289
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_290
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_ReleaseCommittee {
    __kind: 'ReleaseCommittee'
    value: Type_287
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_286
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

export type Type_286 = Type_286_Member | Type_286_Members | Type_286__Phantom

export interface Type_286_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_286_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_286__Phantom {
    __kind: '_Phantom'
}

export type Type_287 = Type_287_Member | Type_287_Members | Type_287__Phantom

export interface Type_287_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_287_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_287__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Response | Origin_Xcm

export interface Origin_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export type Type_290 = Type_290_WhitelistedCaller

export interface Type_290_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export type Type_289 = Type_289_Relay | Type_289_SiblingParachain

export interface Type_289_Relay {
    __kind: 'Relay'
}

export interface Type_289_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_285 = Type_285_Member | Type_285_Members | Type_285__Phantom

export interface Type_285_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_285_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_285__Phantom {
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
 * ## Complexity
 *  - O(1).
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
 * ## Complexity
 * - O(1)
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
 * ## Complexity
 * - O(1)
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
 * ## Complexity
 * - O(A) where `A` is the number of approvals
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
export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_change_key | TechnicalCommitteeMembershipCall_clear_prime | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_set_prime | TechnicalCommitteeMembershipCall_swap_member

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
    who: MultiAddress
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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
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
 * ## Complexity
 * O(P) where P is the number of max proposals
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
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
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
 * - `O(1)`
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
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
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
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
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
 * ## Complexity
 * - `O(1)` in number of key types. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
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
 * ## Complexity
 * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *   fixed.
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
    call: Call
}

/**
 * Anonymously schedule a task after a delay.
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
export type ReleaseMembershipCall = ReleaseMembershipCall_add_member | ReleaseMembershipCall_change_key | ReleaseMembershipCall_clear_prime | ReleaseMembershipCall_remove_member | ReleaseMembershipCall_reset_members | ReleaseMembershipCall_set_prime | ReleaseMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface ReleaseMembershipCall_add_member {
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
export interface ReleaseMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface ReleaseMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface ReleaseMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface ReleaseMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface ReleaseMembershipCall_set_prime {
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
export interface ReleaseMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ReleaseCommitteeCall = ReleaseCommitteeCall_close | ReleaseCommitteeCall_disapprove_proposal | ReleaseCommitteeCall_execute | ReleaseCommitteeCall_propose | ReleaseCommitteeCall_set_members | ReleaseCommitteeCall_vote

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
export interface ReleaseCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
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
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface ReleaseCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
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
export interface ReleaseCommitteeCall_execute {
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
export interface ReleaseCommitteeCall_propose {
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
export interface ReleaseCommitteeCall_set_members {
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
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface ReleaseCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ReferendaCall = ReferendaCall_cancel | ReferendaCall_kill | ReferendaCall_nudge_referendum | ReferendaCall_one_fewer_deciding | ReferendaCall_place_decision_deposit | ReferendaCall_refund_decision_deposit | ReferendaCall_refund_submission_deposit | ReferendaCall_set_metadata | ReferendaCall_submit

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
 * Refund the Submission Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *   refunded.
 * 
 * Emits `SubmissionDepositRefunded`.
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * Set or clear metadata of a referendum.
 * 
 * Parameters:
 * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *   metadata of a finished referendum.
 * - `index`:  The index of a referendum to set or clear metadata for.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: (H256 | undefined)
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
    value: Bytes
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

export type ProxyType = ProxyType_Any | ProxyType_Assets | ProxyType_Bridge | ProxyType_CancelProxy | ProxyType_Contracts | ProxyType_Defi | ProxyType_Governance | ProxyType_Oracle

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Assets {
    __kind: 'Assets'
}

export interface ProxyType_Bridge {
    __kind: 'Bridge'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Contracts {
    __kind: 'Contracts'
}

export interface ProxyType_Defi {
    __kind: 'Defi'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Oracle {
    __kind: 'Oracle'
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
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

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
    message: Type_309
    maxWeight: Weight
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
    maybeXcmVersion?: (number | undefined)
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

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type V3Instruction = V3Instruction_AliasOrigin | V3Instruction_BurnAsset | V3Instruction_BuyExecution | V3Instruction_ClaimAsset | V3Instruction_ClearError | V3Instruction_ClearOrigin | V3Instruction_ClearTopic | V3Instruction_ClearTransactStatus | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_DescendOrigin | V3Instruction_ExchangeAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectError | V3Instruction_ExpectOrigin | V3Instruction_ExpectPallet | V3Instruction_ExpectTransactStatus | V3Instruction_ExportMessage | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_LockAsset | V3Instruction_NoteUnlockable | V3Instruction_QueryPallet | V3Instruction_QueryResponse | V3Instruction_ReceiveTeleportedAsset | V3Instruction_RefundSurplus | V3Instruction_ReportError | V3Instruction_ReportHolding | V3Instruction_ReportTransactStatus | V3Instruction_RequestUnlock | V3Instruction_ReserveAssetDeposited | V3Instruction_SetAppendix | V3Instruction_SetErrorHandler | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_SubscribeVersion | V3Instruction_Transact | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Trap | V3Instruction_UniversalOrigin | V3Instruction_UnlockAsset | V3Instruction_UnpaidExecution | V3Instruction_UnsubscribeVersion | V3Instruction_WithdrawAsset

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
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

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
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

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
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

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
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

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface DoubleEncoded {
    encoded: Bytes
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

export type V3Response = V3Response_Assets | V3Response_DispatchResult | V3Response_ExecutionResult | V3Response_Null | V3Response_PalletsInfo | V3Response_Version

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3PalletInfo {
    index: number
    name: BoundedVec
    moduleName: BoundedVec
    major: number
    minor: number
    patch: number
}

export type BoundedVec = Bytes

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Error | V3MaybeErrorCode_Success | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Bytes
}

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Bytes
}

export type V3Error = V3Error_AssetNotFound | V3Error_BadOrigin | V3Error_Barrier | V3Error_DestinationUnsupported | V3Error_ExceedsMaxMessageSize | V3Error_ExceedsStackLimit | V3Error_ExpectationFalse | V3Error_ExportError | V3Error_FailedToDecode | V3Error_FailedToTransactAsset | V3Error_FeesNotMet | V3Error_HoldingWouldOverflow | V3Error_InvalidLocation | V3Error_LocationCannotHold | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_LockError | V3Error_MaxWeightInvalid | V3Error_NameMismatch | V3Error_NoDeal | V3Error_NoPermission | V3Error_NotDepositable | V3Error_NotHoldingFees | V3Error_NotWithdrawable | V3Error_Overflow | V3Error_PalletNotFound | V3Error_ReanchorFailed | V3Error_TooExpensive | V3Error_Transport | V3Error_Trap | V3Error_Unanchored | V3Error_UnhandledXcmVersion | V3Error_Unimplemented | V3Error_UnknownClaim | V3Error_Unroutable | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_VersionIncompatible | V3Error_WeightLimitReached | V3Error_WeightNotComputable

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
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

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V2Instruction = V2Instruction_BuyExecution | V2Instruction_ClaimAsset | V2Instruction_ClearError | V2Instruction_ClearOrigin | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_DescendOrigin | V2Instruction_ExchangeAsset | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_QueryResponse | V2Instruction_ReceiveTeleportedAsset | V2Instruction_RefundSurplus | V2Instruction_ReportError | V2Instruction_ReserveAssetDeposited | V2Instruction_SetAppendix | V2Instruction_SetErrorHandler | V2Instruction_SubscribeVersion | V2Instruction_Transact | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Trap | V2Instruction_UnsubscribeVersion | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
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

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
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

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
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
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
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

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
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

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
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

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type Type_309 = Type_309_V2 | Type_309_V3

export interface Type_309_V2 {
    __kind: 'V2'
    value: Type_312[]
}

export interface Type_309_V3 {
    __kind: 'V3'
    value: Type_316[]
}

export type Type_316 = Type_316_AliasOrigin | Type_316_BurnAsset | Type_316_BuyExecution | Type_316_ClaimAsset | Type_316_ClearError | Type_316_ClearOrigin | Type_316_ClearTopic | Type_316_ClearTransactStatus | Type_316_DepositAsset | Type_316_DepositReserveAsset | Type_316_DescendOrigin | Type_316_ExchangeAsset | Type_316_ExpectAsset | Type_316_ExpectError | Type_316_ExpectOrigin | Type_316_ExpectPallet | Type_316_ExpectTransactStatus | Type_316_ExportMessage | Type_316_HrmpChannelAccepted | Type_316_HrmpChannelClosing | Type_316_HrmpNewChannelOpenRequest | Type_316_InitiateReserveWithdraw | Type_316_InitiateTeleport | Type_316_LockAsset | Type_316_NoteUnlockable | Type_316_QueryPallet | Type_316_QueryResponse | Type_316_ReceiveTeleportedAsset | Type_316_RefundSurplus | Type_316_ReportError | Type_316_ReportHolding | Type_316_ReportTransactStatus | Type_316_RequestUnlock | Type_316_ReserveAssetDeposited | Type_316_SetAppendix | Type_316_SetErrorHandler | Type_316_SetFeesMode | Type_316_SetTopic | Type_316_SubscribeVersion | Type_316_Transact | Type_316_TransferAsset | Type_316_TransferReserveAsset | Type_316_Trap | Type_316_UniversalOrigin | Type_316_UnlockAsset | Type_316_UnpaidExecution | Type_316_UnsubscribeVersion | Type_316_WithdrawAsset

export interface Type_316_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_316_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_316_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_316_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_316_ClearError {
    __kind: 'ClearError'
}

export interface Type_316_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_316_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_316_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_316_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_316_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_316_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_316_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_316_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_316_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_316_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_316_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_316_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_316_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_316_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_316_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_316_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_316_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_316_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_316_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_316_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_316_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_316_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_316_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_316_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_316_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_316_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_316_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_316_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_316_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_316_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_316[]
}

export interface Type_316_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_316[]
}

export interface Type_316_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_316_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_316_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_316_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_313
}

export interface Type_316_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_316_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_316_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_316_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_316_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_316_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_316_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_316_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_313 {
    encoded: Bytes
}

export type Type_312 = Type_312_BuyExecution | Type_312_ClaimAsset | Type_312_ClearError | Type_312_ClearOrigin | Type_312_DepositAsset | Type_312_DepositReserveAsset | Type_312_DescendOrigin | Type_312_ExchangeAsset | Type_312_HrmpChannelAccepted | Type_312_HrmpChannelClosing | Type_312_HrmpNewChannelOpenRequest | Type_312_InitiateReserveWithdraw | Type_312_InitiateTeleport | Type_312_QueryHolding | Type_312_QueryResponse | Type_312_ReceiveTeleportedAsset | Type_312_RefundSurplus | Type_312_ReportError | Type_312_ReserveAssetDeposited | Type_312_SetAppendix | Type_312_SetErrorHandler | Type_312_SubscribeVersion | Type_312_Transact | Type_312_TransferAsset | Type_312_TransferReserveAsset | Type_312_Trap | Type_312_UnsubscribeVersion | Type_312_WithdrawAsset

export interface Type_312_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_312_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_312_ClearError {
    __kind: 'ClearError'
}

export interface Type_312_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_312_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_312_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_312_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_312_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_312_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_312_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_312_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_312_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_312_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_312_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_312_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_312_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_312_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_312_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_312_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_312_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_312[]
}

export interface Type_312_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_312[]
}

export interface Type_312_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_312_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_313
}

export interface Type_312_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_312_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_312_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_312_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_312_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

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
    codeHash: H256
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
    validationData: V4PersistedValidationData
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

export interface V4PersistedValidationData {
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
export type PalletMultihopXcmIbcCall = PalletMultihopXcmIbcCall_add_route

export interface PalletMultihopXcmIbcCall_add_route {
    __kind: 'add_route'
    routeId: bigint
    route: [ChainInfo, Bytes][]
}

export interface ChainInfo {
    chainId: number
    order: number
    channelId: bigint
    timestamp?: (bigint | undefined)
    height?: (bigint | undefined)
    retries?: (number | undefined)
    timeout?: (bigint | undefined)
    chainHop: ChainHop
    paraId?: (number | undefined)
}

export type ChainHop = ChainHop_CosmosIbc | ChainHop_SubstrateIbc | ChainHop_Xcm

export interface ChainHop_CosmosIbc {
    __kind: 'CosmosIbc'
}

export interface ChainHop_SubstrateIbc {
    __kind: 'SubstrateIbc'
}

export interface ChainHop_Xcm {
    __kind: 'Xcm'
}

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
export type OracleCall = OracleCall_add_asset_and_info | OracleCall_add_stake | OracleCall_adjust_rewards | OracleCall_reclaim_stake | OracleCall_remove_signer | OracleCall_remove_stake | OracleCall_set_signer | OracleCall_submit_price

/**
 * Permissioned call to add an asset
 * 
 * - `asset_id`: Id for the asset
 * - `threshold`: Percent close to mean to be rewarded
 * - `min_answers`: Min answers before aggregation
 * - `max_answers`: Max answers to aggregate
 * - `block_interval`: blocks until oracle triggered
 * - `reward`: reward amount for correct answer
 * - `slash`: slash amount for bad answer
 * - `emit_price_changes`: emit PriceChanged event when asset price changes
 * 
 * Emits `DepositEvent` event when successful.
 */
export interface OracleCall_add_asset_and_info {
    __kind: 'add_asset_and_info'
    assetId: CurrencyId
    threshold: Percent
    minAnswers: number
    maxAnswers: number
    blockInterval: number
    rewardWeight: bigint
    slash: bigint
    emitPriceChanges: boolean
}

/**
 * call to add more stake from a controller
 * 
 * - `stake`: amount to add to stake
 * 
 * Emits `StakeAdded` event when successful.
 */
export interface OracleCall_add_stake {
    __kind: 'add_stake'
    stake: bigint
}

/**
 * Call to start rewarding Oracles.
 * - `annual_cost_per_oracle`: Annual cost of an Oracle.
 * - `num_ideal_oracles`: Number of ideal Oracles. This in fact should be higher than the
 *   actual ideal number so that the Oracles make a profit under ideal conditions.
 * 
 * Emits `RewardRateSet` event when successful.
 */
export interface OracleCall_adjust_rewards {
    __kind: 'adjust_rewards'
    annualCostPerOracle: bigint
    numIdealOracles: number
}

/**
 * Call to reclaim stake after proper time has passed, called from controller
 * 
 * Emits `StakeReclaimed` event when successful.
 */
export interface OracleCall_reclaim_stake {
    __kind: 'reclaim_stake'
}

export interface OracleCall_remove_signer {
    __kind: 'remove_signer'
    who: AccountId32
}

/**
 * Call to put in a claim to remove stake, called from controller
 * 
 * Emits `StakeRemoved` event when successful.
 */
export interface OracleCall_remove_stake {
    __kind: 'remove_stake'
}

/**
 * Call for a signer to be set, called from controller, adds stake.
 * 
 * - `signer`: signer to tie controller to
 * 
 * Emits `SignerSet` and `StakeAdded` events when successful.
 */
export interface OracleCall_set_signer {
    __kind: 'set_signer'
    who: AccountId32
    signer: AccountId32
}

/**
 * Call to submit a price, gas is returned if extrinsic is successful.
 * Should be called from offchain worker but can be called manually too.
 * 
 * This is an operational transaction.
 * 
 * - `price`: price to submit, normalized to 12 decimals
 * - `asset_id`: id for the asset
 * 
 * Emits `PriceSubmitted` event when successful.
 */
export interface OracleCall_submit_price {
    __kind: 'submit_price'
    price: bigint
    assetId: CurrencyId
}

export type Percent = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OpenGovBalancesCall = OpenGovBalancesCall_force_set_balance | OpenGovBalancesCall_force_transfer | OpenGovBalancesCall_force_unreserve | OpenGovBalancesCall_set_balance_deprecated | OpenGovBalancesCall_transfer | OpenGovBalancesCall_transfer_all | OpenGovBalancesCall_transfer_allow_death | OpenGovBalancesCall_transfer_keep_alive | OpenGovBalancesCall_upgrade_accounts

/**
 * Set the regular balance of a given account.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface OpenGovBalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Exactly as `transfer_allow_death`, except the origin must be root and the source account
 * may be specified.
 */
export interface OpenGovBalancesCall_force_transfer {
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
export interface OpenGovBalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Set the regular balance of a given account; it also takes a reserved balance but this
 * must be the same as the account's current reserved balance.
 * 
 * The dispatch origin for this call is `root`.
 * 
 * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
 */
export interface OpenGovBalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
 * 
 * WARNING: DEPRECATED! Will be released in approximately 3 months.
 */
export interface OpenGovBalancesCall_transfer {
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
 *   keep the sender account alive (true).
 */
export interface OpenGovBalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface OpenGovBalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 * kill the origin account.
 * 
 * 99% of the time you want [`transfer_allow_death`] instead.
 * 
 * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface OpenGovBalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Upgrade a specified account.
 * 
 * - `origin`: Must be `Signed`.
 * - `who`: The account to be upgraded.
 * 
 * This will waive the transaction fee if at least all but 10% of the accounts needed to
 * be upgraded. (We let some not have to be upgraded just in order to allow for the
 * possibililty of churn).
 */
export interface OpenGovBalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
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
 * ## Complexity
 * O(Z + C) where Z is the length of the call and C its execution weight.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: MultiAddress
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
 * ## Complexity
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
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
 * ## Complexity
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
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
export type Ics20FeeCall = Ics20FeeCall_add_channels_to_feeless_channel_list | Ics20FeeCall_remove_channels_from_feeless_channel_list | Ics20FeeCall_set_charge

export interface Ics20FeeCall_add_channels_to_feeless_channel_list {
    __kind: 'add_channels_to_feeless_channel_list'
    sourceChannel: bigint
    destinationChannel: bigint
}

export interface Ics20FeeCall_remove_channels_from_feeless_channel_list {
    __kind: 'remove_channels_from_feeless_channel_list'
    sourceChannel: bigint
    destinationChannel: bigint
}

export interface Ics20FeeCall_set_charge {
    __kind: 'set_charge'
    charge: Perbill
}

export type Perbill = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IbcCall = IbcCall_add_channels_to_feeless_channel_list | IbcCall_deliver | IbcCall_freeze_client | IbcCall_increase_counters | IbcCall_remove_channels_from_feeless_channel_list | IbcCall_set_child_storage | IbcCall_substitute_client_state | IbcCall_transfer | IbcCall_upgrade_client

export interface IbcCall_add_channels_to_feeless_channel_list {
    __kind: 'add_channels_to_feeless_channel_list'
    sourceChannel: bigint
    destinationChannel: bigint
}

export interface IbcCall_deliver {
    __kind: 'deliver'
    messages: Any[]
}

/**
 * Freeze a client at a specific height
 */
export interface IbcCall_freeze_client {
    __kind: 'freeze_client'
    clientId: Bytes
    height: bigint
}

/**
 * Increase all IBC counters by 1. Used only in testing to ensure that
 * relayer uses proper proper values for source/sink chains.
 */
export interface IbcCall_increase_counters {
    __kind: 'increase_counters'
}

export interface IbcCall_remove_channels_from_feeless_channel_list {
    __kind: 'remove_channels_from_feeless_channel_list'
    sourceChannel: bigint
    destinationChannel: bigint
}

export interface IbcCall_set_child_storage {
    __kind: 'set_child_storage'
    key: Bytes
    value: Bytes
}

export interface IbcCall_substitute_client_state {
    __kind: 'substitute_client_state'
    clientId: string
    height: Height
    clientStateBytes: Bytes
    consensusStateBytes: Bytes
}

export interface IbcCall_transfer {
    __kind: 'transfer'
    params: TransferParams
    assetId: CurrencyId
    amount: bigint
    memo?: (RawMemo | undefined)
}

/**
 * We write the consensus & client state under these predefined paths so that
 * we can produce state proofs of the values to connected chains
 * in order to execute client upgrades.
 */
export interface IbcCall_upgrade_client {
    __kind: 'upgrade_client'
    params: UpgradeParams
}

export interface UpgradeParams {
    clientState: Bytes
    consensusState: Bytes
}

export type RawMemo = string

export interface TransferParams {
    to: Type_371
    sourceChannel: bigint
    timeout: Timeout
}

export type Timeout = Timeout_Absolute | Timeout_Offset

export interface Timeout_Absolute {
    __kind: 'Absolute'
    timestamp?: (bigint | undefined)
    height?: (bigint | undefined)
}

export interface Timeout_Offset {
    __kind: 'Offset'
    timestamp?: (bigint | undefined)
    height?: (bigint | undefined)
}

export type Type_371 = Type_371_Id | Type_371_Raw

export interface Type_371_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface Type_371_Raw {
    __kind: 'Raw'
    value: Bytes
}

export interface Height {
    revisionNumber: bigint
    revisionHeight: bigint
}

export interface Any {
    typeUrl: string
    value: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FarmingRewardsCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FarmingCall = FarmingCall_claim | FarmingCall_deposit | FarmingCall_remove_reward_schedule | FarmingCall_update_reward_schedule | FarmingCall_withdraw

/**
 * Withdraw any accrued rewards from the reward pool
 */
export interface FarmingCall_claim {
    __kind: 'claim'
    poolCurrencyId: CurrencyId
    rewardCurrencyId: CurrencyId
}

/**
 * Stake the pool tokens from the reward pool
 * 
 * - `pool_currency_id`: LP token to deposit
 * - `amount`: of LP token to deposit
 */
export interface FarmingCall_deposit {
    __kind: 'deposit'
    poolCurrencyId: CurrencyId
    amount: bigint
}

/**
 * Explicitly remove a reward schedule and transfer any remaining
 * balance to the treasury
 */
export interface FarmingCall_remove_reward_schedule {
    __kind: 'remove_reward_schedule'
    poolCurrencyId: CurrencyId
    rewardCurrencyId: CurrencyId
}

/**
 * Create or overwrite the reward schedule, if a reward schedule
 * already exists for the rewards currency the duration is added
 * to the existing duration and the rewards per period are modified
 * s.t. that the total (old remaining + new) rewards are distributed
 * over the new total duration
 */
export interface FarmingCall_update_reward_schedule {
    __kind: 'update_reward_schedule'
    poolCurrencyId: CurrencyId
    rewardCurrencyId: CurrencyId
    periodCount: number
    amount: bigint
}

/**
 * Unstake the pool tokens from the reward pool
 * 
 * - `pool_currency_id`: LP token to withdraw
 * - `amount`: of LP token to withdraw
 */
export interface FarmingCall_withdraw {
    __kind: 'withdraw'
    poolCurrencyId: CurrencyId
    amount: bigint
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
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_set_metadata | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

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
    maybeHash?: (H256 | undefined)
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
    vote: Vote
    balance: bigint
}

export type Vote = number

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
    who: MultiAddress
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
    who: MultiAddress
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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
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
 * ## Complexity
 * O(P) where P is the number of max proposals
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
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
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
export type CosmwasmCall = CosmwasmCall_execute | CosmwasmCall_instantiate | CosmwasmCall_migrate | CosmwasmCall_update_admin | CosmwasmCall_upload

/**
 * Execute a previously instantiated contract.
 * 
 * * Emits an `Executed` event.
 * * Possibly emit `Emitted` events.
 * 
 * # Arguments
 * 
 * * `origin` the origin dispatching the extrinsic.
 * * `code_id` the unique code id generated when the code has been uploaded via [`upload`].
 * * `salt` the salt, usually used to instantiate the same contract multiple times.
 * * `funds` the assets transferred to the contract prior to calling it's `instantiate`
 *   export.
 * * `gas` the maximum gas to use, the remaining is refunded at the end of the transaction.
 */
export interface CosmwasmCall_execute {
    __kind: 'execute'
    contract: AccountId32
    funds: [CurrencyId, [bigint, boolean]][]
    gas: bigint
    message: Bytes
}

/**
 * Instantiate a previously uploaded code resulting in a new contract being generated.
 * 
 * * Emits an `Instantiated` event on success.
 * * Emits an `Executed` event.
 * * Possibly emit `Emitted` events.
 * 
 * # Arguments
 * 
 * * `origin` the origin dispatching the extrinsic.
 * * `code_identifier` the unique code id generated when the code has been uploaded via
 *   [`upload`].
 * * `salt` the salt, usually used to instantiate the same contract multiple times.
 * * `funds` the assets transferred to the contract prior to calling it's `instantiate`
 *   export.
 * * `gas` the maximum gas to use, the remaining is refunded at the end of the transaction.
 */
export interface CosmwasmCall_instantiate {
    __kind: 'instantiate'
    codeIdentifier: CodeIdentifier
    salt: Bytes
    admin?: (AccountId32 | undefined)
    label: Bytes
    funds: [CurrencyId, [bigint, boolean]][]
    gas: bigint
    message: Bytes
}

/**
 * Migrate a previously instantiated contract.
 * 
 * * Emits a `Migrated` event on success.
 * * Emits an `Executed` event.
 * * Possibly emit `Emitted` events.
 * 
 * # Arguments
 * 
 * * `origin` the origin dispatching the extrinsic.
 * * `contract` the address of the contract that we want to migrate
 * * `new_code_identifier` the code identifier that we want to switch to.
 * * `gas` the maximum gas to use, the remaining is refunded at the end of the transaction.
 * * `message` MigrateMsg, that will be passed to the contract.
 */
export interface CosmwasmCall_migrate {
    __kind: 'migrate'
    contract: AccountId32
    newCodeIdentifier: CodeIdentifier
    gas: bigint
    message: Bytes
}

/**
 * Update the admin of a contract.
 * 
 * * Emits a `AdminUpdated` event on success.
 * 
 * # Arguments
 * 
 * * `origin` the origin dispatching the extrinsic.
 * * `contract` the address of the contract that we want to migrate.
 * * `new_admin` new admin of the contract that we want to update to.
 * * `gas` the maximum gas to use, the remaining is refunded at the end of the transaction.
 */
export interface CosmwasmCall_update_admin {
    __kind: 'update_admin'
    contract: AccountId32
    newAdmin?: (AccountId32 | undefined)
    gas: bigint
}

/**
 * Upload a CosmWasm contract.
 * The function will ensure that the wasm module is well formed and that it fits the
 * according limits. The module exports are going to be checked against the expected
 * CosmWasm export signatures.
 * 
 * * Emits an `Uploaded` event on success.
 * 
 * # Arguments
 * 
 * - `origin` the original dispatching the extrinsic.
 * - `code` the actual wasm code.
 */
export interface CosmwasmCall_upload {
    __kind: 'upload'
    code: Bytes
}

export type CodeIdentifier = CodeIdentifier_CodeHash | CodeIdentifier_CodeId

export interface CodeIdentifier_CodeHash {
    __kind: 'CodeHash'
    value: Bytes
}

export interface CodeIdentifier_CodeId {
    __kind: 'CodeId'
    value: bigint
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
    conviction: Type_348
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
    vote: Type_346
}

export type Type_346 = Type_346_Split | Type_346_SplitAbstain | Type_346_Standard

export interface Type_346_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_346_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface Type_346_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export type Type_348 = Type_348_Locked1x | Type_348_Locked2x | Type_348_Locked3x | Type_348_Locked4x | Type_348_Locked5x | Type_348_Locked6x | Type_348_None

export interface Type_348_Locked1x {
    __kind: 'Locked1x'
}

export interface Type_348_Locked2x {
    __kind: 'Locked2x'
}

export interface Type_348_Locked3x {
    __kind: 'Locked3x'
}

export interface Type_348_Locked4x {
    __kind: 'Locked4x'
}

export interface Type_348_Locked5x {
    __kind: 'Locked5x'
}

export interface Type_348_Locked6x {
    __kind: 'Locked6x'
}

export interface Type_348_None {
    __kind: 'None'
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
 * `DisableOrigin`.
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
 * `EnableOrigin`.
 * 
 * Possibly emits an `Enabled` event.
 */
export interface CallFilterCall_enable {
    __kind: 'enable'
    entry: CallFilterEntry
}

export interface CallFilterEntry {
    palletName: Bytes
    functionName: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance_deprecated | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * Set the regular balance of a given account.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Exactly as `transfer_allow_death`, except the origin must be root and the source account
 * may be specified.
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
 * Set the regular balance of a given account; it also takes a reserved balance but this
 * must be the same as the account's current reserved balance.
 * 
 * The dispatch origin for this call is `root`.
 * 
 * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
 * 
 * WARNING: DEPRECATED! Will be released in approximately 3 months.
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
 *   keep the sender account alive (true).
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 * kill the origin account.
 * 
 * 99% of the time you want [`transfer_allow_death`] instead.
 * 
 * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Upgrade a specified account.
 * 
 * - `origin`: Must be `Signed`.
 * - `who`: The account to be upgraded.
 * 
 * This will waive the transaction fee if at least all but 10% of the accounts needed to
 * be upgraded. (We let some not have to be upgraded just in order to allow for the
 * possibililty of churn).
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsRegistryCall = AssetsRegistryCall_register_asset | AssetsRegistryCall_set_min_fee | AssetsRegistryCall_update_asset | AssetsRegistryCall_update_asset_location

/**
 * Creates an asset.
 * 
 * # Parameters:
 * 
 * * `local_or_foreign` - Foreign asset location or unused local asset ID
 * 
 * * `asset_info` - Information to register the asset with, see [`AssetInfo`]
 * 
 * # Emits
 * * `AssetRegistered`
 */
export interface AssetsRegistryCall_register_asset {
    __kind: 'register_asset'
    protocolId: Bytes
    nonce: bigint
    location?: (ForeignAssetId | undefined)
    assetInfo: AssetInfo
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
    targetParachainId: number
    foreignAssetId: ForeignAssetId
    amount?: (bigint | undefined)
}

/**
 * Update stored asset information.
 * 
 * Emits:
 * * `AssetUpdated`
 */
export interface AssetsRegistryCall_update_asset {
    __kind: 'update_asset'
    assetId: CurrencyId
    assetInfo: AssetInfoUpdate
}

export interface AssetsRegistryCall_update_asset_location {
    __kind: 'update_asset_location'
    assetId: CurrencyId
    location?: (ForeignAssetId | undefined)
}

export interface AssetInfoUpdate {
    name: UpdateValue
    symbol: Type_169
    decimals: Type_170
    existentialDeposit: Type_171
    ratio: Type_172
}

export type Type_172 = Type_172_Ignore | Type_172_Set

export interface Type_172_Ignore {
    __kind: 'Ignore'
}

export interface Type_172_Set {
    __kind: 'Set'
    value?: (Rational64 | undefined)
}

export interface Rational64 {
    n: bigint
    d: bigint
}

export type Type_171 = Type_171_Ignore | Type_171_Set

export interface Type_171_Ignore {
    __kind: 'Ignore'
}

export interface Type_171_Set {
    __kind: 'Set'
    value: bigint
}

export type Type_170 = Type_170_Ignore | Type_170_Set

export interface Type_170_Ignore {
    __kind: 'Ignore'
}

export interface Type_170_Set {
    __kind: 'Set'
    value?: (number | undefined)
}

export type Type_169 = Type_169_Ignore | Type_169_Set

export interface Type_169_Ignore {
    __kind: 'Ignore'
}

export interface Type_169_Set {
    __kind: 'Set'
    value?: (Type_163 | undefined)
}

export interface Type_163 {
    inner: Bytes
}

export type UpdateValue = UpdateValue_Ignore | UpdateValue_Set

export interface UpdateValue_Ignore {
    __kind: 'Ignore'
}

export interface UpdateValue_Set {
    __kind: 'Set'
    value?: (BiBoundedVec | undefined)
}

export interface BiBoundedVec {
    inner: Bytes
}

export interface AssetInfo {
    name?: (BiBoundedVec | undefined)
    symbol?: (Type_163 | undefined)
    decimals?: (number | undefined)
    existentialDeposit: bigint
    ratio?: (Rational64 | undefined)
}

export type ForeignAssetId = ForeignAssetId_IbcIcs20 | ForeignAssetId_Xcm

export interface ForeignAssetId_IbcIcs20 {
    __kind: 'IbcIcs20'
    value: PrefixedDenom
}

export interface ForeignAssetId_Xcm {
    __kind: 'Xcm'
    value: Type_149
}

export type Type_149 = Type_149_V3

export interface Type_149_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface PrefixedDenom {
    tracePath: TracePrefix[]
    baseDenom: BaseDenom
}

export type BaseDenom = string

export interface TracePrefix {
    portId: PortId
    channelId: ChannelId
}

export type ChannelId = string

export type PortId = string

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
        Balances: BalancesCall,
        CallFilter: CallFilterCall,
        CollatorSelection: CollatorSelectionCall,
        ConvictionVoting: ConvictionVotingCall,
        Cosmwasm: CosmwasmCall,
        Council: CouncilCall,
        CouncilMembership: CouncilMembershipCall,
        CrowdloanRewards: CrowdloanRewardsCall,
        CumulusXcm: CumulusXcmCall,
        Democracy: DemocracyCall,
        DmpQueue: DmpQueueCall,
        Farming: FarmingCall,
        FarmingRewards: FarmingRewardsCall,
        Ibc: IbcCall,
        Ics20Fee: Ics20FeeCall,
        Identity: IdentityCall,
        Indices: IndicesCall,
        Multisig: MultisigCall,
        OpenGovBalances: OpenGovBalancesCall,
        Oracle: OracleCall,
        Pablo: PabloCall,
        PalletMultihopXcmIbc: PalletMultihopXcmIbcCall,
        ParachainInfo: ParachainInfoCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Referenda: ReferendaCall,
        ReleaseCommittee: ReleaseCommitteeCall,
        ReleaseMembership: ReleaseMembershipCall,
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
        Whitelist: WhitelistCall,
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
            weightLimit: Weight,
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
            new: Weight,
        }),
        update_weight_restrict_decay: sts.enumStruct({
            new: Weight,
        }),
        update_xcmp_max_individual_weight: sts.enumStruct({
            new: Weight,
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
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset: sts.enumStruct({
            asset: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset_with_fee: sts.enumStruct({
            asset: VersionedMultiAsset,
            fee: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiassets: sts.enumStruct({
            assets: VersionedMultiAssets,
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multicurrencies: sts.enumStruct({
            currencies: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
    }
})

export const V3MultiAsset: sts.Type<V3MultiAsset> = sts.struct(() => {
    return  {
        id: V3AssetId,
        fun: V3Fungibility,
    }
})

export const V3Fungibility: sts.Type<V3Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V3AssetInstance,
    }
})

export const V3AssetInstance: sts.Type<V3AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V3NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
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

export const V3BodyId: sts.Type<V3BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Moniker: sts.bytes(),
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V2MultiAsset: sts.Type<V2MultiAsset> = sts.struct(() => {
    return  {
        id: V2AssetId,
        fun: V2Fungibility,
    }
})

export const V2Fungibility: sts.Type<V2Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V2AssetInstance,
    }
})

export const V2AssetInstance: sts.Type<V2AssetInstance> = sts.closedEnum(() => {
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

export const V2AssetId: sts.Type<V2AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V2NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V2NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V2NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V2BodyId,
            part: V2BodyPart,
        }),
    }
})

export const V2BodyPart: sts.Type<V2BodyPart> = sts.closedEnum(() => {
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

export const V2BodyId: sts.Type<V2BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const WeakBoundedVec = sts.bytes()

export const V2NetworkId: sts.Type<V2NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export const VersionedMultiAsset: sts.Type<VersionedMultiAsset> = sts.closedEnum(() => {
    return  {
        V2: V2MultiAsset,
        V3: V3MultiAsset,
    }
})

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
    }
})

export const CurrencyId = sts.bigint()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const WhitelistCall: sts.Type<WhitelistCall> = sts.closedEnum(() => {
    return  {
        dispatch_whitelisted_call: sts.enumStruct({
            callHash: H256,
            callEncodedLen: sts.number(),
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
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_285,
        CumulusXcm: Type_289,
        Origins: Type_290,
        PolkadotXcm: Origin,
        ReleaseCommittee: Type_287,
        TechnicalCommittee: Type_286,
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

export const Type_286: sts.Type<Type_286> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_287: sts.Type<Type_287> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export const Type_290: sts.Type<Type_290> = sts.closedEnum(() => {
    return  {
        WhitelistedCaller: sts.unit(),
    }
})

export const Type_289: sts.Type<Type_289> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_285: sts.Type<Type_285> = sts.closedEnum(() => {
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
            weight: Weight,
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
export const ReleaseMembershipCall: sts.Type<ReleaseMembershipCall> = sts.closedEnum(() => {
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
export const ReleaseCommitteeCall: sts.Type<ReleaseCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
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
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
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
        Inline: sts.bytes(),
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
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
        Assets: sts.unit(),
        Bridge: sts.unit(),
        CancelProxy: sts.unit(),
        Contracts: sts.unit(),
        Defi: sts.unit(),
        Governance: sts.unit(),
        Oracle: sts.unit(),
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
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_309,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V3MultiLocation,
            xcmVersion: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
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
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
    }
})

export const V3Instruction: sts.Type<V3Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
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
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => V3Instruction),
        SetErrorHandler: sts.array(() => V3Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V3Response: sts.Type<V3Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V3MultiAsset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V3PalletInfo),
        Version: sts.number(),
    }
})

export const V3PalletInfo: sts.Type<V3PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: BoundedVec,
        moduleName: BoundedVec,
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const BoundedVec = sts.bytes()

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return  {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

export const V3Error: sts.Type<V3Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        ExceedsStackLimit: sts.unit(),
        ExpectationFalse: sts.unit(),
        ExportError: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        FeesNotMet: sts.unit(),
        HoldingWouldOverflow: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        LocationFull: sts.unit(),
        LocationNotInvertible: sts.unit(),
        LockError: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        NameMismatch: sts.unit(),
        NoDeal: sts.unit(),
        NoPermission: sts.unit(),
        NotDepositable: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        PalletNotFound: sts.unit(),
        ReanchorFailed: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        Unanchored: sts.unit(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        VersionIncompatible: sts.unit(),
        WeightLimitReached: Weight,
        WeightNotComputable: sts.unit(),
    }
})

export const V3MultiAssetFilter: sts.Type<V3MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V3MultiAsset),
        Wild: V3WildMultiAsset,
    }
})

export const V3WildMultiAsset: sts.Type<V3WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V3WildFungibility: sts.Type<V3WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
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
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V2MultiAsset),
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

export const V2MultiAssetFilter: sts.Type<V2MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V2MultiAsset),
        Wild: V2WildMultiAsset,
    }
})

export const V2WildMultiAsset: sts.Type<V2WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V2AssetId,
            fun: V2WildFungibility,
        }),
    }
})

export const V2WildFungibility: sts.Type<V2WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export const Type_309: sts.Type<Type_309> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_312),
        V3: sts.array(() => Type_316),
    }
})

export const Type_316: sts.Type<Type_316> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
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
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => Type_316),
        SetErrorHandler: sts.array(() => Type_316),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: Type_313,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const Type_313: sts.Type<Type_313> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_312: sts.Type<Type_312> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
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
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => Type_312),
        SetErrorHandler: sts.array(() => Type_312),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_313,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
            checkVersion: sts.boolean(),
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
        validationData: V4PersistedValidationData,
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

export const V4PersistedValidationData: sts.Type<V4PersistedValidationData> = sts.struct(() => {
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
export const PalletMultihopXcmIbcCall: sts.Type<PalletMultihopXcmIbcCall> = sts.closedEnum(() => {
    return  {
        add_route: sts.enumStruct({
            routeId: sts.bigint(),
            route: sts.array(() => sts.tuple(() => [ChainInfo, sts.bytes()])),
        }),
    }
})

export const ChainInfo: sts.Type<ChainInfo> = sts.struct(() => {
    return  {
        chainId: sts.number(),
        order: sts.number(),
        channelId: sts.bigint(),
        timestamp: sts.option(() => sts.bigint()),
        height: sts.option(() => sts.bigint()),
        retries: sts.option(() => sts.number()),
        timeout: sts.option(() => sts.bigint()),
        chainHop: ChainHop,
        paraId: sts.option(() => sts.number()),
    }
})

export const ChainHop: sts.Type<ChainHop> = sts.closedEnum(() => {
    return  {
        CosmosIbc: sts.unit(),
        SubstrateIbc: sts.unit(),
        Xcm: sts.unit(),
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
export const OracleCall: sts.Type<OracleCall> = sts.closedEnum(() => {
    return  {
        add_asset_and_info: sts.enumStruct({
            assetId: CurrencyId,
            threshold: Percent,
            minAnswers: sts.number(),
            maxAnswers: sts.number(),
            blockInterval: sts.number(),
            rewardWeight: sts.bigint(),
            slash: sts.bigint(),
            emitPriceChanges: sts.boolean(),
        }),
        add_stake: sts.enumStruct({
            stake: sts.bigint(),
        }),
        adjust_rewards: sts.enumStruct({
            annualCostPerOracle: sts.bigint(),
            numIdealOracles: sts.number(),
        }),
        reclaim_stake: sts.unit(),
        remove_signer: sts.enumStruct({
            who: AccountId32,
        }),
        remove_stake: sts.unit(),
        set_signer: sts.enumStruct({
            who: AccountId32,
            signer: AccountId32,
        }),
        submit_price: sts.enumStruct({
            price: sts.bigint(),
            assetId: CurrencyId,
        }),
    }
})

export const Percent = sts.number()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const OpenGovBalancesCall: sts.Type<OpenGovBalancesCall> = sts.closedEnum(() => {
    return  {
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
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
export const Ics20FeeCall: sts.Type<Ics20FeeCall> = sts.closedEnum(() => {
    return  {
        add_channels_to_feeless_channel_list: sts.enumStruct({
            sourceChannel: sts.bigint(),
            destinationChannel: sts.bigint(),
        }),
        remove_channels_from_feeless_channel_list: sts.enumStruct({
            sourceChannel: sts.bigint(),
            destinationChannel: sts.bigint(),
        }),
        set_charge: sts.enumStruct({
            charge: Perbill,
        }),
    }
})

export const Perbill = sts.number()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const IbcCall: sts.Type<IbcCall> = sts.closedEnum(() => {
    return  {
        add_channels_to_feeless_channel_list: sts.enumStruct({
            sourceChannel: sts.bigint(),
            destinationChannel: sts.bigint(),
        }),
        deliver: sts.enumStruct({
            messages: sts.array(() => Any),
        }),
        freeze_client: sts.enumStruct({
            clientId: sts.bytes(),
            height: sts.bigint(),
        }),
        increase_counters: sts.unit(),
        remove_channels_from_feeless_channel_list: sts.enumStruct({
            sourceChannel: sts.bigint(),
            destinationChannel: sts.bigint(),
        }),
        set_child_storage: sts.enumStruct({
            key: sts.bytes(),
            value: sts.bytes(),
        }),
        substitute_client_state: sts.enumStruct({
            clientId: sts.string(),
            height: Height,
            clientStateBytes: sts.bytes(),
            consensusStateBytes: sts.bytes(),
        }),
        transfer: sts.enumStruct({
            params: TransferParams,
            assetId: CurrencyId,
            amount: sts.bigint(),
            memo: sts.option(() => RawMemo),
        }),
        upgrade_client: sts.enumStruct({
            params: UpgradeParams,
        }),
    }
})

export const UpgradeParams: sts.Type<UpgradeParams> = sts.struct(() => {
    return  {
        clientState: sts.bytes(),
        consensusState: sts.bytes(),
    }
})

export const RawMemo = sts.string()

export const TransferParams: sts.Type<TransferParams> = sts.struct(() => {
    return  {
        to: Type_371,
        sourceChannel: sts.bigint(),
        timeout: Timeout,
    }
})

export const Timeout: sts.Type<Timeout> = sts.closedEnum(() => {
    return  {
        Absolute: sts.enumStruct({
            timestamp: sts.option(() => sts.bigint()),
            height: sts.option(() => sts.bigint()),
        }),
        Offset: sts.enumStruct({
            timestamp: sts.option(() => sts.bigint()),
            height: sts.option(() => sts.bigint()),
        }),
    }
})

export const Type_371: sts.Type<Type_371> = sts.closedEnum(() => {
    return  {
        Id: AccountId32,
        Raw: sts.bytes(),
    }
})

export const Height: sts.Type<Height> = sts.struct(() => {
    return  {
        revisionNumber: sts.bigint(),
        revisionHeight: sts.bigint(),
    }
})

export const Any: sts.Type<Any> = sts.struct(() => {
    return  {
        typeUrl: sts.string(),
        value: sts.bytes(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const FarmingRewardsCall: sts.Type<FarmingRewardsCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const FarmingCall: sts.Type<FarmingCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            poolCurrencyId: CurrencyId,
            rewardCurrencyId: CurrencyId,
        }),
        deposit: sts.enumStruct({
            poolCurrencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        remove_reward_schedule: sts.enumStruct({
            poolCurrencyId: CurrencyId,
            rewardCurrencyId: CurrencyId,
        }),
        update_reward_schedule: sts.enumStruct({
            poolCurrencyId: CurrencyId,
            rewardCurrencyId: CurrencyId,
            periodCount: sts.number(),
            amount: sts.bigint(),
        }),
        withdraw: sts.enumStruct({
            poolCurrencyId: CurrencyId,
            amount: sts.bigint(),
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
            weightLimit: Weight,
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
        set_metadata: sts.enumStruct({
            owner: MetadataOwner,
            maybeHash: sts.option(() => H256),
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
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

export const MetadataOwner: sts.Type<MetadataOwner> = sts.closedEnum(() => {
    return  {
        External: sts.unit(),
        Proposal: sts.number(),
        Referendum: sts.number(),
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
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
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
export const CosmwasmCall: sts.Type<CosmwasmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            contract: AccountId32,
            funds: sts.array(() => sts.tuple(() => [CurrencyId, sts.tuple(() => [sts.bigint(), sts.boolean()])])),
            gas: sts.bigint(),
            message: sts.bytes(),
        }),
        instantiate: sts.enumStruct({
            codeIdentifier: CodeIdentifier,
            salt: sts.bytes(),
            admin: sts.option(() => AccountId32),
            label: sts.bytes(),
            funds: sts.array(() => sts.tuple(() => [CurrencyId, sts.tuple(() => [sts.bigint(), sts.boolean()])])),
            gas: sts.bigint(),
            message: sts.bytes(),
        }),
        migrate: sts.enumStruct({
            contract: AccountId32,
            newCodeIdentifier: CodeIdentifier,
            gas: sts.bigint(),
            message: sts.bytes(),
        }),
        update_admin: sts.enumStruct({
            contract: AccountId32,
            newAdmin: sts.option(() => AccountId32),
            gas: sts.bigint(),
        }),
        upload: sts.enumStruct({
            code: sts.bytes(),
        }),
    }
})

export const CodeIdentifier: sts.Type<CodeIdentifier> = sts.closedEnum(() => {
    return  {
        CodeHash: sts.bytes(),
        CodeId: sts.bigint(),
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
            conviction: Type_348,
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
            vote: Type_346,
        }),
    }
})

export const Type_346: sts.Type<Type_346> = sts.closedEnum(() => {
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

export const Type_348: sts.Type<Type_348> = sts.closedEnum(() => {
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
        palletName: sts.bytes(),
        functionName: sts.bytes(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetsRegistryCall: sts.Type<AssetsRegistryCall> = sts.closedEnum(() => {
    return  {
        register_asset: sts.enumStruct({
            protocolId: sts.bytes(),
            nonce: sts.bigint(),
            location: sts.option(() => ForeignAssetId),
            assetInfo: AssetInfo,
        }),
        set_min_fee: sts.enumStruct({
            targetParachainId: sts.number(),
            foreignAssetId: ForeignAssetId,
            amount: sts.option(() => sts.bigint()),
        }),
        update_asset: sts.enumStruct({
            assetId: CurrencyId,
            assetInfo: AssetInfoUpdate,
        }),
        update_asset_location: sts.enumStruct({
            assetId: CurrencyId,
            location: sts.option(() => ForeignAssetId),
        }),
    }
})

export const AssetInfoUpdate: sts.Type<AssetInfoUpdate> = sts.struct(() => {
    return  {
        name: UpdateValue,
        symbol: Type_169,
        decimals: Type_170,
        existentialDeposit: Type_171,
        ratio: Type_172,
    }
})

export const Type_172: sts.Type<Type_172> = sts.closedEnum(() => {
    return  {
        Ignore: sts.unit(),
        Set: sts.option(() => Rational64),
    }
})

export const Rational64: sts.Type<Rational64> = sts.struct(() => {
    return  {
        n: sts.bigint(),
        d: sts.bigint(),
    }
})

export const Type_171: sts.Type<Type_171> = sts.closedEnum(() => {
    return  {
        Ignore: sts.unit(),
        Set: sts.bigint(),
    }
})

export const Type_170: sts.Type<Type_170> = sts.closedEnum(() => {
    return  {
        Ignore: sts.unit(),
        Set: sts.option(() => sts.number()),
    }
})

export const Type_169: sts.Type<Type_169> = sts.closedEnum(() => {
    return  {
        Ignore: sts.unit(),
        Set: sts.option(() => Type_163),
    }
})

export const Type_163: sts.Type<Type_163> = sts.struct(() => {
    return  {
        inner: sts.bytes(),
    }
})

export const UpdateValue: sts.Type<UpdateValue> = sts.closedEnum(() => {
    return  {
        Ignore: sts.unit(),
        Set: sts.option(() => BiBoundedVec),
    }
})

export const BiBoundedVec: sts.Type<BiBoundedVec> = sts.struct(() => {
    return  {
        inner: sts.bytes(),
    }
})

export const AssetInfo: sts.Type<AssetInfo> = sts.struct(() => {
    return  {
        name: sts.option(() => BiBoundedVec),
        symbol: sts.option(() => Type_163),
        decimals: sts.option(() => sts.number()),
        existentialDeposit: sts.bigint(),
        ratio: sts.option(() => Rational64),
    }
})

export const ForeignAssetId: sts.Type<ForeignAssetId> = sts.closedEnum(() => {
    return  {
        IbcIcs20: PrefixedDenom,
        Xcm: Type_149,
    }
})

export const Type_149: sts.Type<Type_149> = sts.closedEnum(() => {
    return  {
        V3: V3MultiLocation,
    }
})

export const PrefixedDenom: sts.Type<PrefixedDenom> = sts.struct(() => {
    return  {
        tracePath: sts.array(() => TracePrefix),
        baseDenom: BaseDenom,
    }
})

export const BaseDenom = sts.string()

export const TracePrefix: sts.Type<TracePrefix> = sts.struct(() => {
    return  {
        portId: PortId,
        channelId: ChannelId,
    }
})

export const ChannelId = sts.string()

export const PortId = sts.string()

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

export type AccountId32 = Bytes

export interface AccountData {
    free: bigint
    reserved: bigint
    frozen: bigint
    flags: ExtraFlags
}

export type ExtraFlags = bigint

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: sts.bigint(),
        reserved: sts.bigint(),
        frozen: sts.bigint(),
        flags: ExtraFlags,
    }
})

export const ExtraFlags = sts.bigint()

export const AccountId32 = sts.bytes()

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        RootNotAllowed: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
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
        Blocked: sts.unit(),
        CannotCreate: sts.unit(),
        CannotCreateHold: sts.unit(),
        Frozen: sts.unit(),
        FundsUnavailable: sts.unit(),
        NotExpendable: sts.unit(),
        OnlyProvider: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
    }
})

export type TokenError = TokenError_BelowMinimum | TokenError_Blocked | TokenError_CannotCreate | TokenError_CannotCreateHold | TokenError_Frozen | TokenError_FundsUnavailable | TokenError_NotExpendable | TokenError_OnlyProvider | TokenError_UnknownAsset | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
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

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_RootNotAllowed | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

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

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
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

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
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

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export const H256 = sts.bytes()
