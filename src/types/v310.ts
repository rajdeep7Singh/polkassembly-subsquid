import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface ChildBounty {
    parentBounty: number
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    status: ChildBountyStatus
}

export type ChildBountyStatus = ChildBountyStatus_Active | ChildBountyStatus_Added | ChildBountyStatus_CuratorProposed | ChildBountyStatus_PendingPayout

export interface ChildBountyStatus_Active {
    __kind: 'Active'
    curator: AccountId32
}

export interface ChildBountyStatus_Added {
    __kind: 'Added'
}

export interface ChildBountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: AccountId32
}

export interface ChildBountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: AccountId32
    beneficiary: AccountId32
    unlockAt: number
}

export type AccountId32 = Bytes

export const ChildBounty: sts.Type<ChildBounty> = sts.struct(() => {
    return  {
        parentBounty: sts.number(),
        value: sts.bigint(),
        fee: sts.bigint(),
        curatorDeposit: sts.bigint(),
        status: ChildBountyStatus,
    }
})

export const ChildBountyStatus: sts.Type<ChildBountyStatus> = sts.closedEnum(() => {
    return  {
        Active: sts.enumStruct({
            curator: AccountId32,
        }),
        Added: sts.unit(),
        CuratorProposed: sts.enumStruct({
            curator: AccountId32,
        }),
        PendingPayout: sts.enumStruct({
            curator: AccountId32,
            beneficiary: AccountId32,
            unlockAt: sts.number(),
        }),
    }
})

export interface Bounty {
    proposer: AccountId32
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    bond: bigint
    status: BountyStatus
}

export type BountyStatus = BountyStatus_Active | BountyStatus_Approved | BountyStatus_CuratorProposed | BountyStatus_Funded | BountyStatus_PendingPayout | BountyStatus_Proposed

export interface BountyStatus_Active {
    __kind: 'Active'
    curator: AccountId32
    updateDue: number
}

export interface BountyStatus_Approved {
    __kind: 'Approved'
}

export interface BountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: AccountId32
}

export interface BountyStatus_Funded {
    __kind: 'Funded'
}

export interface BountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: AccountId32
    beneficiary: AccountId32
    unlockAt: number
}

export interface BountyStatus_Proposed {
    __kind: 'Proposed'
}

export const Bounty: sts.Type<Bounty> = sts.struct(() => {
    return  {
        proposer: AccountId32,
        value: sts.bigint(),
        fee: sts.bigint(),
        curatorDeposit: sts.bigint(),
        bond: sts.bigint(),
        status: BountyStatus,
    }
})

export const BountyStatus: sts.Type<BountyStatus> = sts.closedEnum(() => {
    return  {
        Active: sts.enumStruct({
            curator: AccountId32,
            updateDue: sts.number(),
        }),
        Approved: sts.unit(),
        CuratorProposed: sts.enumStruct({
            curator: AccountId32,
        }),
        Funded: sts.unit(),
        PendingPayout: sts.enumStruct({
            curator: AccountId32,
            beneficiary: AccountId32,
            unlockAt: sts.number(),
        }),
        Proposed: sts.unit(),
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

export const AccountId32 = sts.bytes()
