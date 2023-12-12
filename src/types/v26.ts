import {sts, Result, Option, Bytes, BitSequence} from './support'

export type ProposalIndex = number

export interface TreasuryProposal {
    proposer: AccountId
    value: Balance
    beneficiary: AccountId
    bond: Balance
}

export const TreasuryProposal: sts.Type<TreasuryProposal> = sts.struct(() => {
    return  {
        proposer: AccountId,
        value: Balance,
        beneficiary: AccountId,
        bond: Balance,
    }
})

export interface AccountData {
    free: Balance
    reserved: Balance
    miscFrozen: Balance
    feeFrozen: Balance
}

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: Balance,
        reserved: Balance,
        miscFrozen: Balance,
        feeFrozen: Balance,
    }
})

export type Balance = bigint

export type AccountId = Bytes

export interface AccountInfo {
    nonce: Index
    consumers: RefCount
    providers: RefCount
    sufficients: RefCount
    data: AccountData
}

export type RefCount = number

export type Index = bigint

export const AccountInfo: sts.Type<AccountInfo> = sts.struct(() => {
    return  {
        nonce: Index,
        consumers: RefCount,
        providers: RefCount,
        sufficients: RefCount,
        data: AccountData,
    }
})

export const RefCount = sts.number()

export const Index = sts.bigint()

export const AccountId = sts.bytes()

export const Balance = sts.bigint()

export const ProposalIndex = sts.number()
