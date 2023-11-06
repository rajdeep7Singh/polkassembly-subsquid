import {sts, Result, Option, Bytes, BitSequence} from './support'

export type Type_480 = Type_480_Approved | Type_480_Cancelled | Type_480_Killed | Type_480_Ongoing | Type_480_Rejected | Type_480_TimedOut

export interface Type_480_Approved {
    __kind: 'Approved'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_480_Cancelled {
    __kind: 'Cancelled'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_480_Killed {
    __kind: 'Killed'
    value: number
}

export interface Type_480_Ongoing {
    __kind: 'Ongoing'
    value: Type_481
}

export interface Type_480_Rejected {
    __kind: 'Rejected'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_480_TimedOut {
    __kind: 'TimedOut'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_481 {
    track: number
    origin: OriginCaller
    proposal: Bounded
    enactment: DispatchTime
    submitted: number
    submissionDeposit: Deposit
    decisionDeposit?: (Deposit | undefined)
    deciding?: (DecidingStatus | undefined)
    tally: Tally
    inQueue: boolean
    alarm?: ([number, [number, number]] | undefined)
}

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export interface DecidingStatus {
    since: number
    confirming?: (number | undefined)
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

export type H256 = Bytes

export type BoundedVec = Bytes

export type OriginCaller = OriginCaller_CouncilCollective | OriginCaller_CumulusXcm | OriginCaller_Ethereum | OriginCaller_OpenTechCommitteeCollective | OriginCaller_Origins | OriginCaller_PolkadotXcm | OriginCaller_TechCommitteeCollective | OriginCaller_TreasuryCouncilCollective | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_CouncilCollective {
    __kind: 'CouncilCollective'
    value: Type_118
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_122
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_116
}

export interface OriginCaller_OpenTechCommitteeCollective {
    __kind: 'OpenTechCommitteeCollective'
    value: Type_121
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_123
}

export interface OriginCaller_TechCommitteeCollective {
    __kind: 'TechCommitteeCollective'
    value: Type_119
}

export interface OriginCaller_TreasuryCouncilCollective {
    __kind: 'TreasuryCouncilCollective'
    value: Type_120
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
    value: AccountId20
}

export type Void = never

export type Type_120 = Type_120_Member | Type_120_Members | Type_120__Phantom

export interface Type_120_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_120_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_120__Phantom {
    __kind: '_Phantom'
}

export type Type_119 = Type_119_Member | Type_119_Members | Type_119__Phantom

export interface Type_119_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_119_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_119__Phantom {
    __kind: '_Phantom'
}

export type Type_123 = Type_123_Response | Type_123_Xcm

export interface Type_123_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export interface Type_123_Xcm {
    __kind: 'Xcm'
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

export type Origin = Origin_GeneralAdmin | Origin_ReferendumCanceller | Origin_ReferendumKiller | Origin_WhitelistedCaller

export interface Origin_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export type Type_121 = Type_121_Member | Type_121_Members | Type_121__Phantom

export interface Type_121_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_121_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_121__Phantom {
    __kind: '_Phantom'
}

export type Type_116 = Type_116_EthereumTransaction

export interface Type_116_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: H160
}

export type H160 = Bytes

export type Type_122 = Type_122_Relay | Type_122_SiblingParachain

export interface Type_122_Relay {
    __kind: 'Relay'
}

export interface Type_122_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_118 = Type_118_Member | Type_118_Members | Type_118__Phantom

export interface Type_118_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_118_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_118__Phantom {
    __kind: '_Phantom'
}

export interface Deposit {
    who: AccountId20
    amount: bigint
}

export const Type_480: sts.Type<Type_480> = sts.closedEnum(() => {
    return  {
        Approved: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
        Cancelled: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
        Killed: sts.number(),
        Ongoing: Type_481,
        Rejected: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
        TimedOut: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
    }
})

export const Type_481: sts.Type<Type_481> = sts.struct(() => {
    return  {
        track: sts.number(),
        origin: OriginCaller,
        proposal: Bounded,
        enactment: DispatchTime,
        submitted: sts.number(),
        submissionDeposit: Deposit,
        decisionDeposit: sts.option(() => Deposit),
        deciding: sts.option(() => DecidingStatus),
        tally: Tally,
        inQueue: sts.boolean(),
        alarm: sts.option(() => sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()])])),
    }
})

export const DecidingStatus: sts.Type<DecidingStatus> = sts.struct(() => {
    return  {
        since: sts.number(),
        confirming: sts.option(() => sts.number()),
    }
})

export const DispatchTime: sts.Type<DispatchTime> = sts.closedEnum(() => {
    return  {
        After: sts.number(),
        At: sts.number(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        CouncilCollective: Type_118,
        CumulusXcm: Type_122,
        Ethereum: Type_116,
        OpenTechCommitteeCollective: Type_121,
        Origins: Origin,
        PolkadotXcm: Type_123,
        TechCommitteeCollective: Type_119,
        TreasuryCouncilCollective: Type_120,
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId20,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_120: sts.Type<Type_120> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_119: sts.Type<Type_119> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_123: sts.Type<Type_123> = sts.closedEnum(() => {
    return  {
        Response: V1MultiLocation,
        Xcm: V1MultiLocation,
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

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        GeneralAdmin: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export const Type_121: sts.Type<Type_121> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_116: sts.Type<Type_116> = sts.closedEnum(() => {
    return  {
        EthereumTransaction: H160,
    }
})

export const H160 = sts.bytes()

export const Type_122: sts.Type<Type_122> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_118: sts.Type<Type_118> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Deposit: sts.Type<Deposit> = sts.struct(() => {
    return  {
        who: AccountId20,
        amount: sts.bigint(),
    }
})

export type AccountId20 = Bytes

export type Type_468 = Type_468_Casting | Type_468_Delegating

export interface Type_468_Casting {
    __kind: 'Casting'
    value: Casting
}

export interface Type_468_Delegating {
    __kind: 'Delegating'
    value: Delegating
}

export interface Delegating {
    balance: bigint
    target: AccountId20
    conviction: Type_204
    delegations: Type_473
    prior: [number, bigint]
}

export interface Type_473 {
    votes: bigint
    capital: bigint
}

export type Type_204 = Type_204_Locked1x | Type_204_Locked2x | Type_204_Locked3x | Type_204_Locked4x | Type_204_Locked5x | Type_204_Locked6x | Type_204_None

export interface Type_204_Locked1x {
    __kind: 'Locked1x'
}

export interface Type_204_Locked2x {
    __kind: 'Locked2x'
}

export interface Type_204_Locked3x {
    __kind: 'Locked3x'
}

export interface Type_204_Locked4x {
    __kind: 'Locked4x'
}

export interface Type_204_Locked5x {
    __kind: 'Locked5x'
}

export interface Type_204_Locked6x {
    __kind: 'Locked6x'
}

export interface Type_204_None {
    __kind: 'None'
}

export interface Casting {
    votes: [number, Type_202][]
    delegations: Type_473
    prior: [number, bigint]
}

export type Type_202 = Type_202_Split | Type_202_Standard

export interface Type_202_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_202_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export const Type_468: sts.Type<Type_468> = sts.closedEnum(() => {
    return  {
        Casting: Casting,
        Delegating: Delegating,
    }
})

export const Delegating: sts.Type<Delegating> = sts.struct(() => {
    return  {
        balance: sts.bigint(),
        target: AccountId20,
        conviction: Type_204,
        delegations: Type_473,
        prior: sts.tuple(() => [sts.number(), sts.bigint()]),
    }
})

export const Type_473: sts.Type<Type_473> = sts.struct(() => {
    return  {
        votes: sts.bigint(),
        capital: sts.bigint(),
    }
})

export const Casting: sts.Type<Casting> = sts.struct(() => {
    return  {
        votes: sts.array(() => sts.tuple(() => [sts.number(), Type_202])),
        delegations: Type_473,
        prior: sts.tuple(() => [sts.number(), sts.bigint()]),
    }
})

export const Type_204: sts.Type<Type_204> = sts.closedEnum(() => {
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

export const Type_202: sts.Type<Type_202> = sts.closedEnum(() => {
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

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
    }
})

export const AccountId20 = sts.bytes()

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

export const H256 = sts.bytes()

export const BoundedVec = sts.bytes()
