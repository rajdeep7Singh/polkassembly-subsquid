import {sts, Result, Option, Bytes, BitSequence} from './support'

export type ProposalIndex = number

export interface TreasuryProposal {
    proposer: AccountId
    value: Balance
    beneficiary: AccountId
    bond: Balance
}

export type Balance = bigint

export type AccountId = Bytes

export const TreasuryProposal: sts.Type<TreasuryProposal> = sts.struct(() => {
    return  {
        proposer: AccountId,
        value: Balance,
        beneficiary: AccountId,
        bond: Balance,
    }
})

export const AccountId = sts.bytes()

export const Balance = sts.bigint()

export const ProposalIndex = sts.number()
