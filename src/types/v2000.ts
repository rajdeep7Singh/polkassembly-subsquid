import type {Result, Option} from './support'

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

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export type Type_31 = Type_31_Ok | Type_31_Err

export interface Type_31_Ok {
    __kind: 'Ok'
}

export interface Type_31_Err {
    __kind: 'Err'
    value: DispatchError
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

export type RequestStatus = RequestStatus_Unrequested | RequestStatus_Requested

export interface RequestStatus_Unrequested {
    __kind: 'Unrequested'
    deposit: [Uint8Array, bigint]
    len: number
}

export interface RequestStatus_Requested {
    __kind: 'Requested'
    deposit: ([Uint8Array, bigint] | undefined)
    count: number
    len: (number | undefined)
}

export type Type_552 = Type_552_Ongoing | Type_552_Approved | Type_552_Rejected | Type_552_Cancelled | Type_552_TimedOut | Type_552_Killed

export interface Type_552_Ongoing {
    __kind: 'Ongoing'
    value: Type_553
}

export interface Type_552_Approved {
    __kind: 'Approved'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_552_Rejected {
    __kind: 'Rejected'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_552_Cancelled {
    __kind: 'Cancelled'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_552_TimedOut {
    __kind: 'TimedOut'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_552_Killed {
    __kind: 'Killed'
    value: number
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional | DispatchError_Exhausted | DispatchError_Corruption | DispatchError_Unavailable

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

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export interface ReferendumStatus {
    end: number
    proposal: Bounded
    threshold: VoteThreshold
    delay: number
    tally: Type_433
}

export interface Type_553 {
    track: number
    origin: OriginCaller
    proposal: Bounded
    enactment: DispatchTime
    submitted: number
    submissionDeposit: Deposit
    decisionDeposit: (Deposit | undefined)
    deciding: (DecidingStatus | undefined)
    tally: Tally
    inQueue: boolean
    alarm: ([number, [number, number]] | undefined)
}

export interface Deposit {
    who: Uint8Array
    amount: bigint
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

export interface Type_433 {
    ayes: bigint
    nays: bigint
    turnout: bigint
}

export type OriginCaller = OriginCaller_system | OriginCaller_Ethereum | OriginCaller_CouncilCollective | OriginCaller_TechCommitteeCollective | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_EthereumXcm | OriginCaller_TreasuryCouncilCollective | OriginCaller_Origins | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_154
}

export interface OriginCaller_CouncilCollective {
    __kind: 'CouncilCollective'
    value: Type_155
}

export interface OriginCaller_TechCommitteeCollective {
    __kind: 'TechCommitteeCollective'
    value: Type_156
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Origin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_158
}

export interface OriginCaller_EthereumXcm {
    __kind: 'EthereumXcm'
    value: Type_159
}

export interface OriginCaller_TreasuryCouncilCollective {
    __kind: 'TreasuryCouncilCollective'
    value: Type_160
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_161
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export type DispatchTime = DispatchTime_At | DispatchTime_After

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface DecidingStatus {
    since: number
    confirming: (number | undefined)
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

export type Type_154 = Type_154_EthereumTransaction

export interface Type_154_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: Uint8Array
}

export type Type_155 = Type_155_Members | Type_155_Member | Type_155__Phantom

export interface Type_155_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_155_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_155__Phantom {
    __kind: '_Phantom'
}

export type Type_156 = Type_156_Members | Type_156_Member | Type_156__Phantom

export interface Type_156_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_156_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_156__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Relay | Origin_SiblingParachain

export interface Origin_Relay {
    __kind: 'Relay'
}

export interface Origin_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Type_158 = Type_158_Xcm | Type_158_Response

export interface Type_158_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export interface Type_158_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export type Type_159 = Type_159_XcmEthereumTransaction

export interface Type_159_XcmEthereumTransaction {
    __kind: 'XcmEthereumTransaction'
    value: Uint8Array
}

export type Type_160 = Type_160_Members | Type_160_Member | Type_160__Phantom

export interface Type_160_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_160_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_160__Phantom {
    __kind: '_Phantom'
}

export type Type_161 = Type_161_Treasurer | Type_161_ReferendumCanceller | Type_161_ReferendumKiller | Type_161_SmallSpender | Type_161_MediumSpender | Type_161_BigSpender | Type_161_WhitelistedCaller

export interface Type_161_Treasurer {
    __kind: 'Treasurer'
}

export interface Type_161_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_161_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_161_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Type_161_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Type_161_BigSpender {
    __kind: 'BigSpender'
}

export interface Type_161_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export type Void = never

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
