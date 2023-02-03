import type {Result, Option} from './support'

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
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

export type Type_535 = Type_535_Casting | Type_535_Delegating

export interface Type_535_Casting {
    __kind: 'Casting'
    value: Casting
}

export interface Type_535_Delegating {
    __kind: 'Delegating'
    value: Delegating
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

export type Type_547 = Type_547_Ongoing | Type_547_Approved | Type_547_Rejected | Type_547_Cancelled | Type_547_TimedOut | Type_547_Killed

export interface Type_547_Ongoing {
    __kind: 'Ongoing'
    value: Type_548
}

export interface Type_547_Approved {
    __kind: 'Approved'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_547_Rejected {
    __kind: 'Rejected'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_547_Cancelled {
    __kind: 'Cancelled'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_547_TimedOut {
    __kind: 'TimedOut'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_547_Killed {
    __kind: 'Killed'
    value: number
}

export interface Casting {
    votes: [number, AccountVote][]
    delegations: Type_540
    prior: [number, bigint]
}

export interface Delegating {
    balance: bigint
    target: Uint8Array
    conviction: Conviction
    delegations: Type_540
    prior: [number, bigint]
}

export interface Type_548 {
    track: number
    origin: OriginCaller
    proposalHash: Uint8Array
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

export interface Type_540 {
    votes: bigint
    capital: bigint
}

export type OriginCaller = OriginCaller_system | OriginCaller_Ethereum | OriginCaller_CouncilCollective | OriginCaller_TechCommitteeCollective | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_EthereumXcm | OriginCaller_TreasuryCouncilCollective | OriginCaller_Origins | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_336
}

export interface OriginCaller_CouncilCollective {
    __kind: 'CouncilCollective'
    value: Type_337
}

export interface OriginCaller_TechCommitteeCollective {
    __kind: 'TechCommitteeCollective'
    value: Type_338
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Origin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_340
}

export interface OriginCaller_EthereumXcm {
    __kind: 'EthereumXcm'
    value: Type_341
}

export interface OriginCaller_TreasuryCouncilCollective {
    __kind: 'TreasuryCouncilCollective'
    value: Type_342
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_343
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

export type Type_336 = Type_336_EthereumTransaction

export interface Type_336_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: Uint8Array
}

export type Type_337 = Type_337_Members | Type_337_Member | Type_337__Phantom

export interface Type_337_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_337_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_337__Phantom {
    __kind: '_Phantom'
}

export type Type_338 = Type_338_Members | Type_338_Member | Type_338__Phantom

export interface Type_338_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_338_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_338__Phantom {
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

export type Type_340 = Type_340_Xcm | Type_340_Response

export interface Type_340_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export interface Type_340_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export type Type_341 = Type_341_XcmEthereumTransaction

export interface Type_341_XcmEthereumTransaction {
    __kind: 'XcmEthereumTransaction'
    value: Uint8Array
}

export type Type_342 = Type_342_Members | Type_342_Member | Type_342__Phantom

export interface Type_342_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_342_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_342__Phantom {
    __kind: '_Phantom'
}

export type Type_343 = Type_343_Treasurer | Type_343_ReferendumCanceller | Type_343_ReferendumKiller | Type_343_SmallSpender | Type_343_MediumSpender | Type_343_BigSpender | Type_343_WhitelistedCaller

export interface Type_343_Treasurer {
    __kind: 'Treasurer'
}

export interface Type_343_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_343_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_343_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Type_343_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Type_343_BigSpender {
    __kind: 'BigSpender'
}

export interface Type_343_WhitelistedCaller {
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
