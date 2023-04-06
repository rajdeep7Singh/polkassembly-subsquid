import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1 from './v1'
import * as v11 from './v11'
import * as v21 from './v21'
import * as v24 from './v24'

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
        return this.getTypeHash() === 'a3e08eaecb2e4751cf200f3c427061d7549fd00e025a33baae5b869b41327d15'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1(): CouncilProposalOfStorageV1 {
        assert(this.isV1)
        return this as any
    }

    get isV11(): boolean {
        return this.getTypeHash() === '40609eb17349425389e25b941abb137e021f5bf4e3879c6ba1ffc83eaf07ef4b'
    }

    get asV11(): CouncilProposalOfStorageV11 {
        assert(this.isV11)
        return this as any
    }

    get isV21(): boolean {
        return this.getTypeHash() === 'f328500c26de29877808789a4aa0e804a52710330e090c5ef69ca7ad358bcb33'
    }

    get asV21(): CouncilProposalOfStorageV21 {
        assert(this.isV21)
        return this as any
    }

    get isV24(): boolean {
        return this.getTypeHash() === '1d5b824f6e3b109f52e7de625937044795b0ec691549ea85d2e3288687964a61'
    }

    get asV24(): CouncilProposalOfStorageV24 {
        assert(this.isV24)
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

export interface CouncilProposalOfStorageV11 {
    get(key: Uint8Array): Promise<(v11.Call | undefined)>
    getAll(): Promise<v11.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v11.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v11.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v11.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v11.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v11.Call][]>
}

export interface CouncilProposalOfStorageV21 {
    get(key: Uint8Array): Promise<(v21.Call | undefined)>
    getAll(): Promise<v21.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v21.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
}

export interface CouncilProposalOfStorageV24 {
    get(key: Uint8Array): Promise<(v24.Call | undefined)>
    getAll(): Promise<v24.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v24.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v24.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v24.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v24.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v24.Call][]>
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

    get isV11(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    get asV11(): DemocracyPublicPropsStorageV11 {
        assert(this.isV11)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV1 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

export interface DemocracyPublicPropsStorageV11 {
    get(): Promise<[number, v11.Bounded, Uint8Array][]>
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

    get isV11(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    get asV11(): DemocracyReferendumInfoOfStorageV11 {
        assert(this.isV11)
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

export interface DemocracyReferendumInfoOfStorageV11 {
    get(key: number): Promise<(v11.ReferendumInfo | undefined)>
    getAll(): Promise<v11.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v11.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v11.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v11.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v11.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v11.ReferendumInfo][]>
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

    get isV11(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV11(): PreimagePreimageForStorageV11 {
        assert(this.isV11)
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

export interface PreimagePreimageForStorageV11 {
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

    get isV11(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    get asV11(): PreimageStatusForStorageV11 {
        assert(this.isV11)
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

export interface PreimageStatusForStorageV11 {
    get(key: Uint8Array): Promise<(v11.RequestStatus | undefined)>
    getAll(): Promise<v11.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v11.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v11.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v11.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v11.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v11.RequestStatus][]>
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
        return this.getTypeHash() === 'a3e08eaecb2e4751cf200f3c427061d7549fd00e025a33baae5b869b41327d15'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1(): TechnicalCommitteeProposalOfStorageV1 {
        assert(this.isV1)
        return this as any
    }

    get isV11(): boolean {
        return this.getTypeHash() === '40609eb17349425389e25b941abb137e021f5bf4e3879c6ba1ffc83eaf07ef4b'
    }

    get asV11(): TechnicalCommitteeProposalOfStorageV11 {
        assert(this.isV11)
        return this as any
    }

    get isV21(): boolean {
        return this.getTypeHash() === 'f328500c26de29877808789a4aa0e804a52710330e090c5ef69ca7ad358bcb33'
    }

    get asV21(): TechnicalCommitteeProposalOfStorageV21 {
        assert(this.isV21)
        return this as any
    }

    get isV24(): boolean {
        return this.getTypeHash() === '1d5b824f6e3b109f52e7de625937044795b0ec691549ea85d2e3288687964a61'
    }

    get asV24(): TechnicalCommitteeProposalOfStorageV24 {
        assert(this.isV24)
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

export interface TechnicalCommitteeProposalOfStorageV11 {
    get(key: Uint8Array): Promise<(v11.Call | undefined)>
    getAll(): Promise<v11.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v11.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v11.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v11.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v11.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v11.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV21 {
    get(key: Uint8Array): Promise<(v21.Call | undefined)>
    getAll(): Promise<v21.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v21.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV24 {
    get(key: Uint8Array): Promise<(v24.Call | undefined)>
    getAll(): Promise<v24.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v24.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v24.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v24.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v24.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v24.Call][]>
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
    get isV1(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1(): TreasuryProposalsStorageV1 {
        assert(this.isV1)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1 {
    get(key: number): Promise<(v1.Proposal | undefined)>
    getAll(): Promise<v1.Proposal[]>
    getMany(keys: number[]): Promise<(v1.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v1.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1.Proposal][]>
}
