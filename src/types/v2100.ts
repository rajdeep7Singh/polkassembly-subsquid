import type {Result, Option} from './support'

export type Type_556 = Type_556_Ongoing | Type_556_Approved | Type_556_Rejected | Type_556_Cancelled | Type_556_TimedOut | Type_556_Killed

export interface Type_556_Ongoing {
    __kind: 'Ongoing'
    value: Type_557
}

export interface Type_556_Approved {
    __kind: 'Approved'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_556_Rejected {
    __kind: 'Rejected'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_556_Cancelled {
    __kind: 'Cancelled'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_556_TimedOut {
    __kind: 'TimedOut'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_556_Killed {
    __kind: 'Killed'
    value: number
}

export interface Type_557 {
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

export type OriginCaller = OriginCaller_system | OriginCaller_Ethereum | OriginCaller_CouncilCollective | OriginCaller_TechCommitteeCollective | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_EthereumXcm | OriginCaller_TreasuryCouncilCollective | OriginCaller_Origins | OriginCaller_OpenTechCommitteeCollective | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_153
}

export interface OriginCaller_CouncilCollective {
    __kind: 'CouncilCollective'
    value: Type_154
}

export interface OriginCaller_TechCommitteeCollective {
    __kind: 'TechCommitteeCollective'
    value: Type_155
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Origin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_157
}

export interface OriginCaller_EthereumXcm {
    __kind: 'EthereumXcm'
    value: Type_158
}

export interface OriginCaller_TreasuryCouncilCollective {
    __kind: 'TreasuryCouncilCollective'
    value: Type_159
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_160
}

export interface OriginCaller_OpenTechCommitteeCollective {
    __kind: 'OpenTechCommitteeCollective'
    value: Type_161
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
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

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
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

export type Type_153 = Type_153_EthereumTransaction

export interface Type_153_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: Uint8Array
}

export type Type_154 = Type_154_Members | Type_154_Member | Type_154__Phantom

export interface Type_154_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_154_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_154__Phantom {
    __kind: '_Phantom'
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

export type Origin = Origin_Relay | Origin_SiblingParachain

export interface Origin_Relay {
    __kind: 'Relay'
}

export interface Origin_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Type_157 = Type_157_Xcm | Type_157_Response

export interface Type_157_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export interface Type_157_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export type Type_158 = Type_158_XcmEthereumTransaction

export interface Type_158_XcmEthereumTransaction {
    __kind: 'XcmEthereumTransaction'
    value: Uint8Array
}

export type Type_159 = Type_159_Members | Type_159_Member | Type_159__Phantom

export interface Type_159_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_159_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_159__Phantom {
    __kind: '_Phantom'
}

export type Type_160 = Type_160_WhitelistedCaller | Type_160_GeneralAdmin | Type_160_ReferendumCanceller | Type_160_ReferendumKiller

export interface Type_160_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Type_160_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Type_160_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_160_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export type Type_161 = Type_161_Members | Type_161_Member | Type_161__Phantom

export interface Type_161_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_161_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_161__Phantom {
    __kind: '_Phantom'
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
