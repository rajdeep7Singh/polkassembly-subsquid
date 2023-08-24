import type {Result, Option} from './support'

export interface Bounty {
    proposer: Uint8Array
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    bond: bigint
    status: BountyStatus
}

export interface ChildBounty {
    parentBounty: number
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    status: ChildBountyStatus
}

export type BountyStatus = BountyStatus_Proposed | BountyStatus_Approved | BountyStatus_Funded | BountyStatus_CuratorProposed | BountyStatus_Active | BountyStatus_PendingPayout

export interface BountyStatus_Proposed {
    __kind: 'Proposed'
}

export interface BountyStatus_Approved {
    __kind: 'Approved'
}

export interface BountyStatus_Funded {
    __kind: 'Funded'
}

export interface BountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: Uint8Array
}

export interface BountyStatus_Active {
    __kind: 'Active'
    curator: Uint8Array
    updateDue: number
}

export interface BountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: Uint8Array
    beneficiary: Uint8Array
    unlockAt: number
}

export type ChildBountyStatus = ChildBountyStatus_Added | ChildBountyStatus_CuratorProposed | ChildBountyStatus_Active | ChildBountyStatus_PendingPayout

export interface ChildBountyStatus_Added {
    __kind: 'Added'
}

export interface ChildBountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: Uint8Array
}

export interface ChildBountyStatus_Active {
    __kind: 'Active'
    curator: Uint8Array
}

export interface ChildBountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: Uint8Array
    beneficiary: Uint8Array
    unlockAt: number
}
