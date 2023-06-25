import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v268 from './v268'
import * as v273 from './v273'
import * as v274 from './v274'
import * as v276 from './v276'
import * as v277 from './v277'
import * as v278 from './v278'
import * as v280 from './v280'
import * as v281 from './v281'
import * as v283 from './v283'

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
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV268(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV268(): BalancesAccountStorageV268 {
        assert(this.isV268)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV283(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV283(): BalancesAccountStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV268 {
    get(key: Uint8Array): Promise<v268.AccountData>
    getAll(): Promise<v268.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v268.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v268.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v268.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v268.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v268.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV283 {
    get(key: Uint8Array): Promise<v283.AccountData>
    getAll(): Promise<v283.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v283.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v283.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v283.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v283.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v283.AccountData][]>
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
    get isV268(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV268(): BalancesTotalIssuanceStorageV268 {
        assert(this.isV268)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV268 {
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
    get isV274(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV274(): BountiesBountiesStorageV274 {
        assert(this.isV274)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV274 {
    get(key: number): Promise<(v274.Bounty | undefined)>
    getAll(): Promise<v274.Bounty[]>
    getMany(keys: number[]): Promise<(v274.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v274.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v274.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v274.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v274.Bounty][]>
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
    get isV274(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV274(): BountiesBountyDescriptionsStorageV274 {
        assert(this.isV274)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV274 {
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
    get isV274(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child-bounties that have been added.
     */
    get asV274(): ChildBountiesChildBountiesStorageV274 {
        assert(this.isV274)
        return this as any
    }
}

/**
 *  Child-bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV274 {
    get(key1: number, key2: number): Promise<(v274.ChildBounty | undefined)>
    getAll(): Promise<v274.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v274.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v274.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v274.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v274.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v274.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v274.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v274.ChildBounty][]>
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
    get isV274(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV274(): ChildBountiesChildBountyDescriptionsStorageV274 {
        assert(this.isV274)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV274 {
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
    get isV274(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV274(): CouncilMembersStorageV274 {
        assert(this.isV274)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV274 {
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
    get isV274(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV274(): CouncilProposalCountStorageV274 {
        assert(this.isV274)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV274 {
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
    get isV274(): boolean {
        return this.getTypeHash() === '06518da89f5dcb525cabfb81a979efc56d7e4c6f66e9e08bc3e7ca4aabc922d6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV274(): CouncilProposalOfStorageV274 {
        assert(this.isV274)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV276(): boolean {
        return this.getTypeHash() === 'b1f56fcf94de503c2c48122a969dbb11a9102ef0926c4909e0e899245e870399'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV276(): CouncilProposalOfStorageV276 {
        assert(this.isV276)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV277(): boolean {
        return this.getTypeHash() === '47e2aa4eadea1ab0c70813f4cd9ef5e08d95b9fac03027fb0dad5b7f473b6748'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV277(): CouncilProposalOfStorageV277 {
        assert(this.isV277)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV278(): boolean {
        return this.getTypeHash() === 'f84b97521c248b271aecdced5de471bb1227bab107ff214bcc5963ae8b747e10'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV278(): CouncilProposalOfStorageV278 {
        assert(this.isV278)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV280(): boolean {
        return this.getTypeHash() === 'de1c549f563bdffc620b96105460d14dc4640c4ab770f092ef58e24a74129fa9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV280(): CouncilProposalOfStorageV280 {
        assert(this.isV280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV281(): boolean {
        return this.getTypeHash() === 'c7bd1b2710029f69148400329357c6652d007c2216df9c6b91710bf766da3a13'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV281(): CouncilProposalOfStorageV281 {
        assert(this.isV281)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV283(): boolean {
        return this.getTypeHash() === '25763837983422ba58f6d6fa8865a8f57b4ef05a7f0d61f2ae5e49df31c21b2a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV283(): CouncilProposalOfStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV274 {
    get(key: Uint8Array): Promise<(v274.Call | undefined)>
    getAll(): Promise<v274.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v274.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v274.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v274.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v274.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v274.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV276 {
    get(key: Uint8Array): Promise<(v276.Call | undefined)>
    getAll(): Promise<v276.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v276.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v276.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v276.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v276.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v276.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV277 {
    get(key: Uint8Array): Promise<(v277.Call | undefined)>
    getAll(): Promise<v277.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v277.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v277.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v277.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v277.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v277.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV278 {
    get(key: Uint8Array): Promise<(v278.Call | undefined)>
    getAll(): Promise<v278.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v278.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v278.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v278.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v278.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v278.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV280 {
    get(key: Uint8Array): Promise<(v280.Call | undefined)>
    getAll(): Promise<v280.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v280.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v280.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v280.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v280.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v280.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV281 {
    get(key: Uint8Array): Promise<(v281.Call | undefined)>
    getAll(): Promise<v281.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v281.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v281.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v281.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v281.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v281.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV283 {
    get(key: Uint8Array): Promise<(v283.Call | undefined)>
    getAll(): Promise<v283.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v283.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v283.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v283.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v283.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v283.Call][]>
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
    get isV273(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV273(): DemocracyPreimagesStorageV273 {
        assert(this.isV273)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV274(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV274(): DemocracyPreimagesStorageV274 {
        assert(this.isV274)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV273 {
    get(key: Uint8Array): Promise<(v273.PreimageStatus | undefined)>
    getAll(): Promise<v273.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v273.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v273.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v273.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v273.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v273.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV274 {
    get(key: Uint8Array): Promise<(v274.PreimageStatus | undefined)>
    getAll(): Promise<v274.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v274.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v274.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v274.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v274.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v274.PreimageStatus][]>
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
    get isV273(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV273(): DemocracyPublicPropCountStorageV273 {
        assert(this.isV273)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV273 {
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
    get isV273(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV273(): DemocracyPublicPropsStorageV273 {
        assert(this.isV273)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV283(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV283(): DemocracyPublicPropsStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV273 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV283 {
    get(): Promise<[number, v283.Bounded, Uint8Array][]>
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
    get isV273(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV273(): DemocracyReferendumInfoOfStorageV273 {
        assert(this.isV273)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV274(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV274(): DemocracyReferendumInfoOfStorageV274 {
        assert(this.isV274)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV283(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV283(): DemocracyReferendumInfoOfStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV273 {
    get(key: number): Promise<(v273.ReferendumInfo | undefined)>
    getAll(): Promise<v273.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v273.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v273.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v273.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v273.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v273.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV274 {
    get(key: number): Promise<(v274.ReferendumInfo | undefined)>
    getAll(): Promise<v274.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v274.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v274.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v274.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v274.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v274.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV283 {
    get(key: number): Promise<(v283.ReferendumInfo | undefined)>
    getAll(): Promise<v283.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v283.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v283.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v283.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v283.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v283.ReferendumInfo][]>
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
    get isV268(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV268(): Instance1CollectiveMembersStorageV268 {
        assert(this.isV268)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV268 {
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
    get isV268(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV268(): Instance1CollectiveProposalCountStorageV268 {
        assert(this.isV268)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV268 {
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
    get isV268(): boolean {
        return this.getTypeHash() === '7e9db050242ec4623e12cda8d59dce11fdfa1b4ee4a0ab214d2cda49c287a5a5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV268(): Instance1CollectiveProposalOfStorageV268 {
        assert(this.isV268)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV273(): boolean {
        return this.getTypeHash() === '046659774927f776329e3116047b58641fc5e9a5ad930c00686fbe50e47c961a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV273(): Instance1CollectiveProposalOfStorageV273 {
        assert(this.isV273)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV268 {
    get(key: Uint8Array): Promise<(v268.Proposal | undefined)>
    getAll(): Promise<v268.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v268.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v268.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v268.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v268.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v268.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV273 {
    get(key: Uint8Array): Promise<(v273.Proposal | undefined)>
    getAll(): Promise<v273.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v273.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v273.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v273.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v273.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v273.Proposal][]>
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
    get isV268(): boolean {
        return this.getTypeHash() === '7e9db050242ec4623e12cda8d59dce11fdfa1b4ee4a0ab214d2cda49c287a5a5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV268(): Instance2CollectiveProposalOfStorageV268 {
        assert(this.isV268)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV273(): boolean {
        return this.getTypeHash() === '046659774927f776329e3116047b58641fc5e9a5ad930c00686fbe50e47c961a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV273(): Instance2CollectiveProposalOfStorageV273 {
        assert(this.isV273)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV268 {
    get(key: Uint8Array): Promise<(v268.Proposal | undefined)>
    getAll(): Promise<v268.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v268.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v268.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v268.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v268.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v268.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV273 {
    get(key: Uint8Array): Promise<(v273.Proposal | undefined)>
    getAll(): Promise<v273.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v273.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v273.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v273.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v273.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v273.Proposal][]>
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
    get isV274(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV274(): PreimagePreimageForStorageV274 {
        assert(this.isV274)
        return this as any
    }

    get isV283(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV283(): PreimagePreimageForStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV274 {
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

export interface PreimagePreimageForStorageV283 {
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
    get isV274(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV274(): PreimageStatusForStorageV274 {
        assert(this.isV274)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV283(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV283(): PreimageStatusForStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV274 {
    get(key: Uint8Array): Promise<(v274.RequestStatus | undefined)>
    getAll(): Promise<v274.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v274.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v274.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v274.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v274.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v274.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV283 {
    get(key: Uint8Array): Promise<(v283.RequestStatus | undefined)>
    getAll(): Promise<v283.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v283.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v283.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v283.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v283.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v283.RequestStatus][]>
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
    get isV268(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV268(): SystemAccountStorageV268 {
        assert(this.isV268)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV283(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV283(): SystemAccountStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV268 {
    get(key: Uint8Array): Promise<v268.AccountInfo>
    getAll(): Promise<v268.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v268.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v268.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v268.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v268.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v268.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV283 {
    get(key: Uint8Array): Promise<v283.AccountInfo>
    getAll(): Promise<v283.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v283.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v283.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v283.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v283.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v283.AccountInfo][]>
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
    get isV274(): boolean {
        return this.getTypeHash() === '06518da89f5dcb525cabfb81a979efc56d7e4c6f66e9e08bc3e7ca4aabc922d6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV274(): TechnicalCommitteeProposalOfStorageV274 {
        assert(this.isV274)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV276(): boolean {
        return this.getTypeHash() === 'b1f56fcf94de503c2c48122a969dbb11a9102ef0926c4909e0e899245e870399'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV276(): TechnicalCommitteeProposalOfStorageV276 {
        assert(this.isV276)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV277(): boolean {
        return this.getTypeHash() === '47e2aa4eadea1ab0c70813f4cd9ef5e08d95b9fac03027fb0dad5b7f473b6748'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV277(): TechnicalCommitteeProposalOfStorageV277 {
        assert(this.isV277)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV278(): boolean {
        return this.getTypeHash() === 'f84b97521c248b271aecdced5de471bb1227bab107ff214bcc5963ae8b747e10'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV278(): TechnicalCommitteeProposalOfStorageV278 {
        assert(this.isV278)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV280(): boolean {
        return this.getTypeHash() === 'de1c549f563bdffc620b96105460d14dc4640c4ab770f092ef58e24a74129fa9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV280(): TechnicalCommitteeProposalOfStorageV280 {
        assert(this.isV280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV281(): boolean {
        return this.getTypeHash() === 'c7bd1b2710029f69148400329357c6652d007c2216df9c6b91710bf766da3a13'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV281(): TechnicalCommitteeProposalOfStorageV281 {
        assert(this.isV281)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV283(): boolean {
        return this.getTypeHash() === '25763837983422ba58f6d6fa8865a8f57b4ef05a7f0d61f2ae5e49df31c21b2a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV283(): TechnicalCommitteeProposalOfStorageV283 {
        assert(this.isV283)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV274 {
    get(key: Uint8Array): Promise<(v274.Call | undefined)>
    getAll(): Promise<v274.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v274.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v274.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v274.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v274.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v274.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV276 {
    get(key: Uint8Array): Promise<(v276.Call | undefined)>
    getAll(): Promise<v276.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v276.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v276.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v276.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v276.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v276.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV277 {
    get(key: Uint8Array): Promise<(v277.Call | undefined)>
    getAll(): Promise<v277.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v277.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v277.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v277.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v277.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v277.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV278 {
    get(key: Uint8Array): Promise<(v278.Call | undefined)>
    getAll(): Promise<v278.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v278.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v278.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v278.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v278.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v278.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV280 {
    get(key: Uint8Array): Promise<(v280.Call | undefined)>
    getAll(): Promise<v280.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v280.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v280.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v280.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v280.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v280.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV281 {
    get(key: Uint8Array): Promise<(v281.Call | undefined)>
    getAll(): Promise<v281.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v281.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v281.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v281.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v281.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v281.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV283 {
    get(key: Uint8Array): Promise<(v283.Call | undefined)>
    getAll(): Promise<v283.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v283.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v283.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v283.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v283.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v283.Call][]>
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
    get isV268(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV268(): TreasuryProposalsStorageV268 {
        assert(this.isV268)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV268 {
    get(key: number): Promise<(v268.TreasuryProposal | undefined)>
    getAll(): Promise<v268.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v268.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v268.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v268.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v268.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v268.TreasuryProposal][]>
}
