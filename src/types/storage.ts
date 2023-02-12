import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1 from './v1'
import * as v2 from './v2'
import * as v3 from './v3'
import * as v4 from './v4'
import * as v6 from './v6'
import * as v7 from './v7'

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
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
    get isV1(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
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
    get asV1(): BalancesAccountStorageV1 {
        assert(this.isV1)
        return this as any
    }
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
export interface BalancesAccountStorageV1 {
    get(key: Uint8Array): Promise<v1.AccountData>
    getAll(): Promise<v1.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.AccountData][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV1(): BalancesTotalIssuanceStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV1 {
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
    get isV3(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV3(): BountiesBountiesStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV3 {
    get(key: number): Promise<(v3.Bounty | undefined)>
    getAll(): Promise<v3.Bounty[]>
    getMany(keys: number[]): Promise<(v3.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v3.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v3.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v3.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v3.Bounty][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV3(): BountiesBountyDescriptionsStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV3 {
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
     *  Child bounties that have been added.
     */
    get isV3(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child bounties that have been added.
     */
    get asV3(): ChildBountiesChildBountiesStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV3 {
    get(key1: number, key2: number): Promise<(v3.ChildBounty | undefined)>
    getAll(): Promise<v3.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v3.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v3.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v3.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v3.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v3.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v3.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v3.ChildBounty][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV3(): ChildBountiesChildBountyDescriptionsStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV3 {
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
    get isV1(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV1(): CouncilMembersStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV1 {
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
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV1(): CouncilProposalCountStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV1 {
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
    get isV1(): boolean {
        return this.getTypeHash() === '3a8ea13966b6ed1ef72af20d1dd103e6db352dec3b93331c6e7b0f8974586be3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1(): CouncilProposalOfStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2(): boolean {
        return this.getTypeHash() === '78b1a0b47b3c9937addafb17e352eec822b9627ad9e82a80acd3b58fe2146e19'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2(): CouncilProposalOfStorageV2 {
        assert(this.isV2)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV3(): boolean {
        return this.getTypeHash() === 'a418cc962a306e1db876472f05a75eb1dfff3ac12df720bc415b3ecdbf933dd9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV3(): CouncilProposalOfStorageV3 {
        assert(this.isV3)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV4(): boolean {
        return this.getTypeHash() === '465527e312d03228ac0d5206c50994b65de7ae4a4838beb03ed364ab83ad4c51'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV4(): CouncilProposalOfStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'b9aad755546ac0faa22bcd1dbc8a2016542d67f256b7defe893dcfded5fc2c60'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV6(): CouncilProposalOfStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV7(): boolean {
        return this.getTypeHash() === '9596283d15b9948f61db318ab7d34c81dca5af29aa97eb36a431a086265879e4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV7(): CouncilProposalOfStorageV7 {
        assert(this.isV7)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1 {
    get(key: Uint8Array): Promise<(v1.Call | undefined)>
    getAll(): Promise<v1.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV2 {
    get(key: Uint8Array): Promise<(v2.Call | undefined)>
    getAll(): Promise<v2.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV3 {
    get(key: Uint8Array): Promise<(v3.Call | undefined)>
    getAll(): Promise<v3.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v3.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV4 {
    get(key: Uint8Array): Promise<(v4.Call | undefined)>
    getAll(): Promise<v4.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v4.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v4.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v4.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v4.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v4.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV6 {
    get(key: Uint8Array): Promise<(v6.Call | undefined)>
    getAll(): Promise<v6.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v6.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v6.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v6.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v6.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v6.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV7 {
    get(key: Uint8Array): Promise<(v7.Call | undefined)>
    getAll(): Promise<v7.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v7.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v7.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v7.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v7.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v7.Call][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1(): DemocracyPreimagesStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1 {
    get(key: Uint8Array): Promise<(v1.PreimageStatus | undefined)>
    getAll(): Promise<v1.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.PreimageStatus][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV1(): DemocracyPublicPropCountStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV1 {
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
    get isV1(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV1(): DemocracyPublicPropsStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV7(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV7(): DemocracyPublicPropsStorageV7 {
        assert(this.isV7)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV1 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV7 {
    get(): Promise<[number, v7.Bounded, Uint8Array][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV1(): DemocracyReferendumInfoOfStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV7(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV7(): DemocracyReferendumInfoOfStorageV7 {
        assert(this.isV7)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV1 {
    get(key: number): Promise<(v1.ReferendumInfo | undefined)>
    getAll(): Promise<v1.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV7 {
    get(key: number): Promise<(v7.ReferendumInfo | undefined)>
    getAll(): Promise<v7.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v7.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v7.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v7.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v7.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v7.ReferendumInfo][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV1(): PreimagePreimageForStorageV1 {
        assert(this.isV1)
        return this as any
    }

    get isV7(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV7(): PreimagePreimageForStorageV7 {
        assert(this.isV7)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV1 {
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

export interface PreimagePreimageForStorageV7 {
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
    get isV1(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1(): PreimageStatusForStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV7(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV7(): PreimageStatusForStorageV7 {
        assert(this.isV7)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV1 {
    get(key: Uint8Array): Promise<(v1.RequestStatus | undefined)>
    getAll(): Promise<v1.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV7 {
    get(key: Uint8Array): Promise<(v7.RequestStatus | undefined)>
    getAll(): Promise<v7.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v7.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v7.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v7.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v7.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v7.RequestStatus][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1(): SystemAccountStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV1 {
    get(key: Uint8Array): Promise<v1.AccountInfo>
    getAll(): Promise<v1.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v1.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.AccountInfo][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === '3a8ea13966b6ed1ef72af20d1dd103e6db352dec3b93331c6e7b0f8974586be3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1(): TechnicalCommitteeProposalOfStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2(): boolean {
        return this.getTypeHash() === '78b1a0b47b3c9937addafb17e352eec822b9627ad9e82a80acd3b58fe2146e19'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2(): TechnicalCommitteeProposalOfStorageV2 {
        assert(this.isV2)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV3(): boolean {
        return this.getTypeHash() === 'a418cc962a306e1db876472f05a75eb1dfff3ac12df720bc415b3ecdbf933dd9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV3(): TechnicalCommitteeProposalOfStorageV3 {
        assert(this.isV3)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV4(): boolean {
        return this.getTypeHash() === '465527e312d03228ac0d5206c50994b65de7ae4a4838beb03ed364ab83ad4c51'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV4(): TechnicalCommitteeProposalOfStorageV4 {
        assert(this.isV4)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'b9aad755546ac0faa22bcd1dbc8a2016542d67f256b7defe893dcfded5fc2c60'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV6(): TechnicalCommitteeProposalOfStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV7(): boolean {
        return this.getTypeHash() === '9596283d15b9948f61db318ab7d34c81dca5af29aa97eb36a431a086265879e4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV7(): TechnicalCommitteeProposalOfStorageV7 {
        assert(this.isV7)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV1 {
    get(key: Uint8Array): Promise<(v1.Call | undefined)>
    getAll(): Promise<v1.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2 {
    get(key: Uint8Array): Promise<(v2.Call | undefined)>
    getAll(): Promise<v2.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV3 {
    get(key: Uint8Array): Promise<(v3.Call | undefined)>
    getAll(): Promise<v3.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v3.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV4 {
    get(key: Uint8Array): Promise<(v4.Call | undefined)>
    getAll(): Promise<v4.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v4.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v4.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v4.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v4.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v4.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV6 {
    get(key: Uint8Array): Promise<(v6.Call | undefined)>
    getAll(): Promise<v6.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v6.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v6.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v6.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v6.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v6.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV7 {
    get(key: Uint8Array): Promise<(v7.Call | undefined)>
    getAll(): Promise<v7.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v7.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v7.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v7.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v7.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v7.Call][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV3(): TreasuryProposalsStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV3 {
    get(key: number): Promise<(v3.Proposal | undefined)>
    getAll(): Promise<v3.Proposal[]>
    getMany(keys: number[]): Promise<(v3.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v3.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v3.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v3.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v3.Proposal][]>
}
