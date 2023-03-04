import type {Result, Option} from './support'

export interface AccountInfo {
    nonce: number
    consumers: number
    providers: number
    sufficients: number
    data: [bigint, SignedBalance][]
}

export type SignedBalance = SignedBalance_Positive | SignedBalance_Negative

export interface SignedBalance_Positive {
    __kind: 'Positive'
    value: bigint
}

export interface SignedBalance_Negative {
    __kind: 'Negative'
    value: bigint
}
