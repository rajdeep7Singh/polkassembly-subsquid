import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v0 from './v0'
import * as v5 from './v5'
import * as v6 from './v6'
import * as v7 from './v7'
import * as v9 from './v9'
import * as v10 from './v10'
import * as v11 from './v11'
import * as v13 from './v13'
import * as v14 from './v14'
import * as v15 from './v15'
import * as v17 from './v17'
import * as v18 from './v18'
import * as v23 from './v23'
import * as v24 from './v24'
import * as v25 from './v25'
import * as v26 from './v26'
import * as v28 from './v28'
import * as v29 from './v29'
import * as v30 from './v30'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9110 from './v9110'
import * as v9140 from './v9140'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9220 from './v9220'
import * as v9230 from './v9230'
import * as v9250 from './v9250'
import * as v9270 from './v9270'
import * as v9280 from './v9280'
import * as v9291 from './v9291'
import * as v9300 from './v9300'
import * as v9340 from './v9340'
import * as v9370 from './v9370'

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get asV0(): BalancesAccountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
 *  is ever zero, then the entry *MUST* be removed.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface BalancesAccountStorageV0 {
    get(key: Uint8Array): Promise<v0.AccountData>
    getAll(): Promise<v0.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v0.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.AccountData][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV0(): BalancesTotalIssuanceStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV0 {
    get(): Promise<bigint>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV9110(): BountiesBountiesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV9110 {
    get(key: number): Promise<(v9110.Bounty | undefined)>
    getAll(): Promise<v9110.Bounty[]>
    getMany(keys: number[]): Promise<(v9110.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v9110.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.Bounty][]>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV9110(): BountiesBountyDescriptionsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV9110 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBounties'
    }

    /**
     *  Child-bounties that have been added.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child-bounties that have been added.
     */
    get asV9190(): ChildBountiesChildBountiesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Child-bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV9190 {
    get(key1: number, key2: number): Promise<(v9190.ChildBounty | undefined)>
    getAll(): Promise<v9190.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v9190.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
}

export class ChildBountiesChildBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyDescriptions'
    }

    /**
     *  The description of each child-bounty.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV9190(): ChildBountiesChildBountyDescriptionsStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV9190 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV9110(): CouncilMembersStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV9110(): CouncilProposalCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV9110 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9110(): CouncilProposalOfStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '46630105cac13d25403727b2ba5a9f33dd1995e1c7551f8890b7d09074b2e29e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9140(): CouncilProposalOfStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'cf07c81d23704ed462b6bfe0b42583c05b23158e6683c37e8d868a238aaa2a66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): CouncilProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'f97a19253893953ac9957fd5cc3c6eb738010d8ad3fa671e3874d151c99c6297'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): CouncilProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '4f1bb8ab04112d992f0d47816b692572d385241d80cdbd7d5f07a66c65036f3b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): CouncilProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '80f4da00d906dc4fa47ad0b8c6e903103f231cec48bf93ba8e721b558299fcca'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): CouncilProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === 'bde9173c84a0b1d6a79d0d321515c35c8835437f3a0e65d119dfd09ccb13c6f4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): CouncilProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === '233b9c42f7eb18d5b221c2b161cab79e11c0bba8f7294ea8851932e045850319'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): CouncilProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9270(): boolean {
        return this.getTypeHash() === 'c0c9e58000365ad91758b5276a20d237aea256d42aefe7f131d12c860b668d40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9270(): CouncilProposalOfStorageV9270 {
        assert(this.isV9270)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '195c89e6d1c50fb433718c42dfef5087efbd5d416889ef321c32e8e954732455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9280(): CouncilProposalOfStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'd7245231a8317bd151161b3106e2a07fbef8faf4eb6d45aa2c71141a8a26fc8e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): CouncilProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '7772aaf0b057235e40688ad2f55f85b5048f3f210085929b092a1179238d25b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): CouncilProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '4b61f1b33be2d038dd589c570144f30d588c945ca7d7ae9c1ba66c90b60c5fed'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): CouncilProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '1f46def9008095a0a4a528da889616bccb1875d2d3a23d2c41257b56f31829f8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): CouncilProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.Call | undefined)>
    getAll(): Promise<v9110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9140 {
    get(key: Uint8Array): Promise<(v9140.Call | undefined)>
    getAll(): Promise<v9140.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9140.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9270 {
    get(key: Uint8Array): Promise<(v9270.Call | undefined)>
    getAll(): Promise<v9270.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9270.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9280 {
    get(key: Uint8Array): Promise<(v9280.Call | undefined)>
    getAll(): Promise<v9280.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9280.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV0(): DemocracyPreimagesStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV9110(): DemocracyPreimagesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV0 {
    get(key: Uint8Array): Promise<(v0.PreimageStatus | undefined)>
    getAll(): Promise<v0.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v0.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.PreimageStatus | undefined)>
    getAll(): Promise<v9110.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV0(): DemocracyPublicPropCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV0 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV0(): DemocracyPublicPropsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV9340(): DemocracyPublicPropsStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV0 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV9340 {
    get(): Promise<[number, v9340.Bounded, Uint8Array][]>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV0(): DemocracyReferendumInfoOfStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9110(): DemocracyReferendumInfoOfStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9340(): DemocracyReferendumInfoOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV0 {
    get(key: number): Promise<(v0.ReferendumInfo | undefined)>
    getAll(): Promise<v0.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v0.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v0.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9110 {
    get(key: number): Promise<(v9110.ReferendumInfo | undefined)>
    getAll(): Promise<v9110.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9110.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9110.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9340 {
    get(key: number): Promise<(v9340.ReferendumInfo | undefined)>
    getAll(): Promise<v9340.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9340.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9340.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9340.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9340.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9340.ReferendumInfo][]>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV0(): Instance1CollectiveMembersStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV0(): Instance1CollectiveProposalCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV0 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a7e8e7fd721404079896defed98de95dfb6868d00799b993b35f08db669a1763'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV0(): Instance1CollectiveProposalOfStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'a0c1ea1dbfa3390f6dd3c60a349f81ad4aaae0a4bf1404cc959919a2e7761660'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV5(): Instance1CollectiveProposalOfStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'a245b6b6c40849f61292d59e8554f90164fb7b773053848e3086f66a4029454f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV6(): Instance1CollectiveProposalOfStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV7(): boolean {
        return this.getTypeHash() === 'f786e78e1015659e9dee4dad5e1fb19677f9f5305acad2a9d7b198f3088d4455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV7(): Instance1CollectiveProposalOfStorageV7 {
        assert(this.isV7)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '7b67dcb1f6fbccf8c54ad1723dbbdb798584082a852e5ff89c304236da5411c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9(): Instance1CollectiveProposalOfStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10(): boolean {
        return this.getTypeHash() === '94d6c9dd5b81d712dbf6b4494875cf3ced8fc83f0bda0388d5a861265c5829e3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10(): Instance1CollectiveProposalOfStorageV10 {
        assert(this.isV10)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV11(): boolean {
        return this.getTypeHash() === '55ab65ec2cca9ffb4d7c056e8b1bc98667f20e007ab85cdf8443396b13de6c00'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV11(): Instance1CollectiveProposalOfStorageV11 {
        assert(this.isV11)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV13(): boolean {
        return this.getTypeHash() === 'ff27bdc60caa16879c21476834a1f6a50625591eaa77c919d9130059c139a049'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV13(): Instance1CollectiveProposalOfStorageV13 {
        assert(this.isV13)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV14(): boolean {
        return this.getTypeHash() === 'ae91e97dac7d5f661d3787859827199246375f2431490218bf06c96a5c477096'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV14(): Instance1CollectiveProposalOfStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'fd4971e102fd82e8b77a1a6f0a5112b2e481a2ceecfa746afb7e03b918460548'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV15(): Instance1CollectiveProposalOfStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV17(): boolean {
        return this.getTypeHash() === 'c5bf1dcf686313b591217ebac224232c96e7f2edb893237d87d88f8a3d1bd8af'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV17(): Instance1CollectiveProposalOfStorageV17 {
        assert(this.isV17)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV18(): boolean {
        return this.getTypeHash() === 'ba1a6279e1478b9a04b898b9c0a846ef880db1c82972d92165054b0a89dca5b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV18(): Instance1CollectiveProposalOfStorageV18 {
        assert(this.isV18)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '4004a907972506e2d691a3cb7602ce8225c2592f0d12d003e87aef73f2423bcf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV23(): Instance1CollectiveProposalOfStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV24(): boolean {
        return this.getTypeHash() === '356166904edac4b3b7c786db196f1923e6c1aedae3fb21ba39c5edddf8e1ee1e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV24(): Instance1CollectiveProposalOfStorageV24 {
        assert(this.isV24)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'b3827730e0dc87803e2af5f5d1b37fe0fe13359251b675a35512af2d8ec218e8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): Instance1CollectiveProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV26(): boolean {
        return this.getTypeHash() === '99e4e58fdbb6961eee62ec42a116b9fada54ca56f6e56c42482522d916abc36c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV26(): Instance1CollectiveProposalOfStorageV26 {
        assert(this.isV26)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '68ddc084d5d45829d62ee6b366697e5316924dda852b32f9fd9f7c2d312fbe2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV28(): Instance1CollectiveProposalOfStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'b2d388d5324f66c413bb92afa7d977c39607b23fcc54187660a1f748689dc65d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV29(): Instance1CollectiveProposalOfStorageV29 {
        assert(this.isV29)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30(): boolean {
        return this.getTypeHash() === 'f2310aeea24a2defe101b6133b4047506f4f78f657c3730715d1be768af473c1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30(): Instance1CollectiveProposalOfStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '917fa2fa061281691040a6b91cde0e1df01369342212c5c905da90dc97ef5ec8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance1CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '82b356c3398fd07ca4931f52f10a08ab9c323a7308181f6738f66e1c201fda71'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance1CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '25d60cb68d41bcc7ef930da62e43767ae9f61ed6e7f542bb8899b233f2b670d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance1CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '2a6a093e75452f19683c23f92d39fb65d1385a5cbd87f80d385736035e5daa07'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance1CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV0 {
    get(key: Uint8Array): Promise<(v0.Proposal | undefined)>
    getAll(): Promise<v0.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v0.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV5 {
    get(key: Uint8Array): Promise<(v5.Proposal | undefined)>
    getAll(): Promise<v5.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v5.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV6 {
    get(key: Uint8Array): Promise<(v6.Proposal | undefined)>
    getAll(): Promise<v6.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v6.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV7 {
    get(key: Uint8Array): Promise<(v7.Proposal | undefined)>
    getAll(): Promise<v7.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v7.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9 {
    get(key: Uint8Array): Promise<(v9.Proposal | undefined)>
    getAll(): Promise<v9.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV10 {
    get(key: Uint8Array): Promise<(v10.Proposal | undefined)>
    getAll(): Promise<v10.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v10.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV11 {
    get(key: Uint8Array): Promise<(v11.Proposal | undefined)>
    getAll(): Promise<v11.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v11.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV13 {
    get(key: Uint8Array): Promise<(v13.Proposal | undefined)>
    getAll(): Promise<v13.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v13.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV14 {
    get(key: Uint8Array): Promise<(v14.Proposal | undefined)>
    getAll(): Promise<v14.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v14.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV15 {
    get(key: Uint8Array): Promise<(v15.Proposal | undefined)>
    getAll(): Promise<v15.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v15.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV17 {
    get(key: Uint8Array): Promise<(v17.Proposal | undefined)>
    getAll(): Promise<v17.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v17.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV18 {
    get(key: Uint8Array): Promise<(v18.Proposal | undefined)>
    getAll(): Promise<v18.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v18.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV23 {
    get(key: Uint8Array): Promise<(v23.Proposal | undefined)>
    getAll(): Promise<v23.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v23.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV24 {
    get(key: Uint8Array): Promise<(v24.Proposal | undefined)>
    getAll(): Promise<v24.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v24.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Proposal | undefined)>
    getAll(): Promise<v25.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV26 {
    get(key: Uint8Array): Promise<(v26.Proposal | undefined)>
    getAll(): Promise<v26.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v26.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV28 {
    get(key: Uint8Array): Promise<(v28.Proposal | undefined)>
    getAll(): Promise<v28.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v28.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV29 {
    get(key: Uint8Array): Promise<(v29.Proposal | undefined)>
    getAll(): Promise<v29.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v29.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV30 {
    get(key: Uint8Array): Promise<(v30.Proposal | undefined)>
    getAll(): Promise<v30.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v30.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a7e8e7fd721404079896defed98de95dfb6868d00799b993b35f08db669a1763'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV0(): Instance2CollectiveProposalOfStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'a0c1ea1dbfa3390f6dd3c60a349f81ad4aaae0a4bf1404cc959919a2e7761660'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV5(): Instance2CollectiveProposalOfStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'a245b6b6c40849f61292d59e8554f90164fb7b773053848e3086f66a4029454f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV6(): Instance2CollectiveProposalOfStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV7(): boolean {
        return this.getTypeHash() === 'f786e78e1015659e9dee4dad5e1fb19677f9f5305acad2a9d7b198f3088d4455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV7(): Instance2CollectiveProposalOfStorageV7 {
        assert(this.isV7)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '7b67dcb1f6fbccf8c54ad1723dbbdb798584082a852e5ff89c304236da5411c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9(): Instance2CollectiveProposalOfStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10(): boolean {
        return this.getTypeHash() === '94d6c9dd5b81d712dbf6b4494875cf3ced8fc83f0bda0388d5a861265c5829e3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10(): Instance2CollectiveProposalOfStorageV10 {
        assert(this.isV10)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV11(): boolean {
        return this.getTypeHash() === '55ab65ec2cca9ffb4d7c056e8b1bc98667f20e007ab85cdf8443396b13de6c00'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV11(): Instance2CollectiveProposalOfStorageV11 {
        assert(this.isV11)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV13(): boolean {
        return this.getTypeHash() === 'ff27bdc60caa16879c21476834a1f6a50625591eaa77c919d9130059c139a049'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV13(): Instance2CollectiveProposalOfStorageV13 {
        assert(this.isV13)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV14(): boolean {
        return this.getTypeHash() === 'ae91e97dac7d5f661d3787859827199246375f2431490218bf06c96a5c477096'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV14(): Instance2CollectiveProposalOfStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'fd4971e102fd82e8b77a1a6f0a5112b2e481a2ceecfa746afb7e03b918460548'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV15(): Instance2CollectiveProposalOfStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV17(): boolean {
        return this.getTypeHash() === 'c5bf1dcf686313b591217ebac224232c96e7f2edb893237d87d88f8a3d1bd8af'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV17(): Instance2CollectiveProposalOfStorageV17 {
        assert(this.isV17)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV18(): boolean {
        return this.getTypeHash() === 'ba1a6279e1478b9a04b898b9c0a846ef880db1c82972d92165054b0a89dca5b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV18(): Instance2CollectiveProposalOfStorageV18 {
        assert(this.isV18)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '4004a907972506e2d691a3cb7602ce8225c2592f0d12d003e87aef73f2423bcf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV23(): Instance2CollectiveProposalOfStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV24(): boolean {
        return this.getTypeHash() === '356166904edac4b3b7c786db196f1923e6c1aedae3fb21ba39c5edddf8e1ee1e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV24(): Instance2CollectiveProposalOfStorageV24 {
        assert(this.isV24)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'b3827730e0dc87803e2af5f5d1b37fe0fe13359251b675a35512af2d8ec218e8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): Instance2CollectiveProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV26(): boolean {
        return this.getTypeHash() === '99e4e58fdbb6961eee62ec42a116b9fada54ca56f6e56c42482522d916abc36c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV26(): Instance2CollectiveProposalOfStorageV26 {
        assert(this.isV26)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '68ddc084d5d45829d62ee6b366697e5316924dda852b32f9fd9f7c2d312fbe2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV28(): Instance2CollectiveProposalOfStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'b2d388d5324f66c413bb92afa7d977c39607b23fcc54187660a1f748689dc65d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV29(): Instance2CollectiveProposalOfStorageV29 {
        assert(this.isV29)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30(): boolean {
        return this.getTypeHash() === 'f2310aeea24a2defe101b6133b4047506f4f78f657c3730715d1be768af473c1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30(): Instance2CollectiveProposalOfStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '917fa2fa061281691040a6b91cde0e1df01369342212c5c905da90dc97ef5ec8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance2CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '82b356c3398fd07ca4931f52f10a08ab9c323a7308181f6738f66e1c201fda71'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance2CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '25d60cb68d41bcc7ef930da62e43767ae9f61ed6e7f542bb8899b233f2b670d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance2CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '2a6a093e75452f19683c23f92d39fb65d1385a5cbd87f80d385736035e5daa07'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance2CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV0 {
    get(key: Uint8Array): Promise<(v0.Proposal | undefined)>
    getAll(): Promise<v0.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v0.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV5 {
    get(key: Uint8Array): Promise<(v5.Proposal | undefined)>
    getAll(): Promise<v5.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v5.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV6 {
    get(key: Uint8Array): Promise<(v6.Proposal | undefined)>
    getAll(): Promise<v6.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v6.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV7 {
    get(key: Uint8Array): Promise<(v7.Proposal | undefined)>
    getAll(): Promise<v7.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v7.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9 {
    get(key: Uint8Array): Promise<(v9.Proposal | undefined)>
    getAll(): Promise<v9.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV10 {
    get(key: Uint8Array): Promise<(v10.Proposal | undefined)>
    getAll(): Promise<v10.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v10.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV11 {
    get(key: Uint8Array): Promise<(v11.Proposal | undefined)>
    getAll(): Promise<v11.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v11.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV13 {
    get(key: Uint8Array): Promise<(v13.Proposal | undefined)>
    getAll(): Promise<v13.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v13.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV14 {
    get(key: Uint8Array): Promise<(v14.Proposal | undefined)>
    getAll(): Promise<v14.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v14.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV15 {
    get(key: Uint8Array): Promise<(v15.Proposal | undefined)>
    getAll(): Promise<v15.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v15.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV17 {
    get(key: Uint8Array): Promise<(v17.Proposal | undefined)>
    getAll(): Promise<v17.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v17.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV18 {
    get(key: Uint8Array): Promise<(v18.Proposal | undefined)>
    getAll(): Promise<v18.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v18.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV23 {
    get(key: Uint8Array): Promise<(v23.Proposal | undefined)>
    getAll(): Promise<v23.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v23.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV24 {
    get(key: Uint8Array): Promise<(v24.Proposal | undefined)>
    getAll(): Promise<v24.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v24.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Proposal | undefined)>
    getAll(): Promise<v25.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV26 {
    get(key: Uint8Array): Promise<(v26.Proposal | undefined)>
    getAll(): Promise<v26.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v26.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV28 {
    get(key: Uint8Array): Promise<(v28.Proposal | undefined)>
    getAll(): Promise<v28.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v28.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV29 {
    get(key: Uint8Array): Promise<(v29.Proposal | undefined)>
    getAll(): Promise<v29.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v29.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV30 {
    get(key: Uint8Array): Promise<(v30.Proposal | undefined)>
    getAll(): Promise<v30.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v30.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV9170(): PreimagePreimageForStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    get isV9340(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV9340(): PreimagePreimageForStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV9170 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface PreimagePreimageForStorageV9340 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9170(): PreimageStatusForStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9340(): PreimageStatusForStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.RequestStatus | undefined)>
    getAll(): Promise<v9170.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.RequestStatus | undefined)>
    getAll(): Promise<v9340.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.RequestStatus][]>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV0(): SystemAccountStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV25(): SystemAccountStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV28(): SystemAccountStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV30(): SystemAccountStorageV30 {
        assert(this.isV30)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV0 {
    get(key: Uint8Array): Promise<v0.AccountInfo>
    getAll(): Promise<v0.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v0.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV25 {
    get(key: Uint8Array): Promise<v25.AccountInfo>
    getAll(): Promise<v25.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v25.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV28 {
    get(key: Uint8Array): Promise<v28.AccountInfo>
    getAll(): Promise<v28.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v28.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV30 {
    get(key: Uint8Array): Promise<v30.AccountInfo>
    getAll(): Promise<v30.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v30.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30.AccountInfo][]>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9110(): TechnicalCommitteeProposalOfStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '46630105cac13d25403727b2ba5a9f33dd1995e1c7551f8890b7d09074b2e29e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9140(): TechnicalCommitteeProposalOfStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'cf07c81d23704ed462b6bfe0b42583c05b23158e6683c37e8d868a238aaa2a66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): TechnicalCommitteeProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'f97a19253893953ac9957fd5cc3c6eb738010d8ad3fa671e3874d151c99c6297'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): TechnicalCommitteeProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '4f1bb8ab04112d992f0d47816b692572d385241d80cdbd7d5f07a66c65036f3b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): TechnicalCommitteeProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '80f4da00d906dc4fa47ad0b8c6e903103f231cec48bf93ba8e721b558299fcca'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): TechnicalCommitteeProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === 'bde9173c84a0b1d6a79d0d321515c35c8835437f3a0e65d119dfd09ccb13c6f4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): TechnicalCommitteeProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === '233b9c42f7eb18d5b221c2b161cab79e11c0bba8f7294ea8851932e045850319'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): TechnicalCommitteeProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9270(): boolean {
        return this.getTypeHash() === 'c0c9e58000365ad91758b5276a20d237aea256d42aefe7f131d12c860b668d40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9270(): TechnicalCommitteeProposalOfStorageV9270 {
        assert(this.isV9270)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '195c89e6d1c50fb433718c42dfef5087efbd5d416889ef321c32e8e954732455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9280(): TechnicalCommitteeProposalOfStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'd7245231a8317bd151161b3106e2a07fbef8faf4eb6d45aa2c71141a8a26fc8e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): TechnicalCommitteeProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '7772aaf0b057235e40688ad2f55f85b5048f3f210085929b092a1179238d25b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): TechnicalCommitteeProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '4b61f1b33be2d038dd589c570144f30d588c945ca7d7ae9c1ba66c90b60c5fed'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): TechnicalCommitteeProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '1f46def9008095a0a4a528da889616bccb1875d2d3a23d2c41257b56f31829f8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): TechnicalCommitteeProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.Call | undefined)>
    getAll(): Promise<v9110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9140 {
    get(key: Uint8Array): Promise<(v9140.Call | undefined)>
    getAll(): Promise<v9140.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9140.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9270 {
    get(key: Uint8Array): Promise<(v9270.Call | undefined)>
    getAll(): Promise<v9270.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9270.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9280 {
    get(key: Uint8Array): Promise<(v9280.Call | undefined)>
    getAll(): Promise<v9280.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9280.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

export class TipsReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV9110(): TipsReasonsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV9110 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TipsTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV9110(): TipsTipsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.OpenTip | undefined)>
    getAll(): Promise<v9110.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.OpenTip][]>
}

export class TreasuryBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'e276510ea57efb7a40938452ef5d335bafe4cc416f094226131c0321c9bb6599'
    }

    /**
     *  Bounties that have been made.
     */
    get asV25(): TreasuryBountiesStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface TreasuryBountiesStorageV25 {
    get(key: number): Promise<(v25.Bounty | undefined)>
    getAll(): Promise<v25.Bounty[]>
    getMany(keys: number[]): Promise<(v25.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v25.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v25.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v25.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v25.Bounty][]>
}

export class TreasuryBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV25(): TreasuryBountyDescriptionsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface TreasuryBountyDescriptionsStorageV25 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV0(): TreasuryProposalsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV0 {
    get(key: number): Promise<(v0.TreasuryProposal | undefined)>
    getAll(): Promise<v0.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v0.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v0.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.TreasuryProposal][]>
}

export class TreasuryReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV0(): TreasuryReasonsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TreasuryReasonsStorageV0 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TreasuryTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV0(): TreasuryTipsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV13(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV13(): TreasuryTipsStorageV13 {
        assert(this.isV13)
        return this as any
    }
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV0 {
    get(key: Uint8Array): Promise<(v0.OpenTip | undefined)>
    getAll(): Promise<v0.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v0.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.OpenTip][]>
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV13 {
    get(key: Uint8Array): Promise<(v13.OpenTip | undefined)>
    getAll(): Promise<v13.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v13.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.OpenTip][]>
}
