import type {Result, Option} from './support'

export type Type_203 = Type_203_Standard | Type_203_Split | Type_203_SplitAbstain

export interface Type_203_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface Type_203_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_203_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export type Type_467 = Type_467_Casting | Type_467_Delegating

export interface Type_467_Casting {
    __kind: 'Casting'
    value: Casting
}

export interface Type_467_Delegating {
    __kind: 'Delegating'
    value: Delegating
}

export type Type_479 = Type_479_Ongoing | Type_479_Approved | Type_479_Rejected | Type_479_Cancelled | Type_479_TimedOut | Type_479_Killed

export interface Type_479_Ongoing {
    __kind: 'Ongoing'
    value: Type_480
}

export interface Type_479_Approved {
    __kind: 'Approved'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_479_Rejected {
    __kind: 'Rejected'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_479_Cancelled {
    __kind: 'Cancelled'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_479_TimedOut {
    __kind: 'TimedOut'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_479_Killed {
    __kind: 'Killed'
    value: number
}

export interface Casting {
    votes: [number, Type_203][]
    delegations: Type_472
    prior: [number, bigint]
}

export interface Delegating {
    balance: bigint
    target: Uint8Array
    conviction: Conviction
    delegations: Type_472
    prior: [number, bigint]
}

export interface Type_480 {
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

export interface Type_472 {
    votes: bigint
    capital: bigint
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

export type OriginCaller = OriginCaller_system | OriginCaller_Ethereum | OriginCaller_Origins | OriginCaller_CouncilCollective | OriginCaller_TechCommitteeCollective | OriginCaller_TreasuryCouncilCollective | OriginCaller_OpenTechCommitteeCollective | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_117
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_CouncilCollective {
    __kind: 'CouncilCollective'
    value: Type_119
}

export interface OriginCaller_TechCommitteeCollective {
    __kind: 'TechCommitteeCollective'
    value: Type_120
}

export interface OriginCaller_TreasuryCouncilCollective {
    __kind: 'TreasuryCouncilCollective'
    value: Type_121
}

export interface OriginCaller_OpenTechCommitteeCollective {
    __kind: 'OpenTechCommitteeCollective'
    value: Type_122
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_123
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_124
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

export type Type_117 = Type_117_EthereumTransaction

export interface Type_117_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: Uint8Array
}

export type Origin = Origin_WhitelistedCaller | Origin_GeneralAdmin | Origin_ReferendumCanceller | Origin_ReferendumKiller

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Origin_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export type Type_119 = Type_119_Members | Type_119_Member | Type_119__Phantom

export interface Type_119_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_119_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_119__Phantom {
    __kind: '_Phantom'
}

export type Type_120 = Type_120_Members | Type_120_Member | Type_120__Phantom

export interface Type_120_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_120_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_120__Phantom {
    __kind: '_Phantom'
}

export type Type_121 = Type_121_Members | Type_121_Member | Type_121__Phantom

export interface Type_121_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_121_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_121__Phantom {
    __kind: '_Phantom'
}

export type Type_122 = Type_122_Members | Type_122_Member | Type_122__Phantom

export interface Type_122_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_122_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_122__Phantom {
    __kind: '_Phantom'
}

export type Type_123 = Type_123_Relay | Type_123_SiblingParachain

export interface Type_123_Relay {
    __kind: 'Relay'
}

export interface Type_123_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Type_124 = Type_124_Xcm | Type_124_Response

export interface Type_124_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export interface Type_124_Response {
    __kind: 'Response'
    value: V1MultiLocation
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

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial | V0BodyId_Defense | V0BodyId_Administration | V0BodyId_Treasury

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

export interface V0BodyId_Defense {
    __kind: 'Defense'
}

export interface V0BodyId_Administration {
    __kind: 'Administration'
}

export interface V0BodyId_Treasury {
    __kind: 'Treasury'
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
