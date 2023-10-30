import {sts, Result, Option, Bytes, BitSequence} from './support'

export type Type_556 = Type_556_Approved | Type_556_Cancelled | Type_556_Killed | Type_556_Ongoing | Type_556_Rejected | Type_556_TimedOut

export interface Type_556_Approved {
    __kind: 'Approved'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_556_Cancelled {
    __kind: 'Cancelled'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_556_Killed {
    __kind: 'Killed'
    value: number
}

export interface Type_556_Ongoing {
    __kind: 'Ongoing'
    value: Type_557
}

export interface Type_556_Rejected {
    __kind: 'Rejected'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_556_TimedOut {
    __kind: 'TimedOut'
    value: [number, Deposit, (Deposit | undefined)]
}

export interface Type_557 {
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

export type H256 = Bytes

export type OriginCaller = OriginCaller_CouncilCollective | OriginCaller_CumulusXcm | OriginCaller_Ethereum | OriginCaller_EthereumXcm | OriginCaller_OpenTechCommitteeCollective | OriginCaller_Origins | OriginCaller_PolkadotXcm | OriginCaller_TechCommitteeCollective | OriginCaller_TreasuryCouncilCollective | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_CouncilCollective {
    __kind: 'CouncilCollective'
    value: Type_154
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Origin
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_153
}

export interface OriginCaller_EthereumXcm {
    __kind: 'EthereumXcm'
    value: Type_158
}

export interface OriginCaller_OpenTechCommitteeCollective {
    __kind: 'OpenTechCommitteeCollective'
    value: Type_161
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_160
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_157
}

export interface OriginCaller_TechCommitteeCollective {
    __kind: 'TechCommitteeCollective'
    value: Type_155
}

export interface OriginCaller_TreasuryCouncilCollective {
    __kind: 'TreasuryCouncilCollective'
    value: Type_159
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

export type AccountId20 = Bytes

export type Void = never

export type Type_159 = Type_159_Member | Type_159_Members | Type_159__Phantom

export interface Type_159_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_159_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_159__Phantom {
    __kind: '_Phantom'
}

export type Type_155 = Type_155_Member | Type_155_Members | Type_155__Phantom

export interface Type_155_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_155_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_155__Phantom {
    __kind: '_Phantom'
}

export type Type_157 = Type_157_Response | Type_157_Xcm

export interface Type_157_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export interface Type_157_Xcm {
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

export type Type_160 = Type_160_GeneralAdmin | Type_160_ReferendumCanceller | Type_160_ReferendumKiller | Type_160_WhitelistedCaller

export interface Type_160_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Type_160_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_160_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_160_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export type Type_161 = Type_161_Member | Type_161_Members | Type_161__Phantom

export interface Type_161_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_161_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_161__Phantom {
    __kind: '_Phantom'
}

export type Type_158 = Type_158_XcmEthereumTransaction

export interface Type_158_XcmEthereumTransaction {
    __kind: 'XcmEthereumTransaction'
    value: H160
}

export type H160 = Bytes

export type Type_153 = Type_153_EthereumTransaction

export interface Type_153_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: H160
}

export type Origin = Origin_Relay | Origin_SiblingParachain

export interface Origin_Relay {
    __kind: 'Relay'
}

export interface Origin_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_154 = Type_154_Member | Type_154_Members | Type_154__Phantom

export interface Type_154_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_154_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_154__Phantom {
    __kind: '_Phantom'
}

export interface Deposit {
    who: AccountId20
    amount: bigint
}

export const Type_556: sts.Type<Type_556> = sts.closedEnum(() => {
    return  {
        Approved: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
        Cancelled: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
        Killed: sts.number(),
        Ongoing: Type_557,
        Rejected: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
        TimedOut: sts.tuple(() => [sts.number(), Deposit, sts.option(() => Deposit)]),
    }
})

export const Type_557: sts.Type<Type_557> = sts.struct(() => {
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

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
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

export const H256 = sts.bytes()

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        CouncilCollective: Type_154,
        CumulusXcm: Origin,
        Ethereum: Type_153,
        EthereumXcm: Type_158,
        OpenTechCommitteeCollective: Type_161,
        Origins: Type_160,
        PolkadotXcm: Type_157,
        TechCommitteeCollective: Type_155,
        TreasuryCouncilCollective: Type_159,
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

export const AccountId20 = sts.bytes()

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_159: sts.Type<Type_159> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_155: sts.Type<Type_155> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_157: sts.Type<Type_157> = sts.closedEnum(() => {
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

export const Type_160: sts.Type<Type_160> = sts.closedEnum(() => {
    return  {
        GeneralAdmin: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export const Type_161: sts.Type<Type_161> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_158: sts.Type<Type_158> = sts.closedEnum(() => {
    return  {
        XcmEthereumTransaction: H160,
    }
})

export const H160 = sts.bytes()

export const Type_153: sts.Type<Type_153> = sts.closedEnum(() => {
    return  {
        EthereumTransaction: H160,
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_154: sts.Type<Type_154> = sts.closedEnum(() => {
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
