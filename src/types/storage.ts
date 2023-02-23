import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1400 from './v1400'
import * as v10002 from './v10002'
import * as v10005 from './v10005'
import * as v10009 from './v10009'

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
    get isV1400(): boolean {
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
    get asV1400(): BalancesAccountStorageV1400 {
        assert(this.isV1400)
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
export interface BalancesAccountStorageV1400 {
    get(key: Uint8Array): Promise<v1400.AccountData>
    getAll(): Promise<v1400.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1400.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1400.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1400.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1400.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1400.AccountData][]>
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
    get isV1400(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV1400(): BalancesTotalIssuanceStorageV1400 {
        assert(this.isV1400)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV1400 {
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
    get isV1400(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV1400(): CouncilMembersStorageV1400 {
        assert(this.isV1400)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV1400 {
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
    get isV1400(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV1400(): CouncilProposalCountStorageV1400 {
        assert(this.isV1400)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV1400 {
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
    get isV1400(): boolean {
        return this.getTypeHash() === 'd630c509e30f10f3656f3f5c2b9f2919f1acacbdc924c896faec3854de6f4d65'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1400(): CouncilProposalOfStorageV1400 {
        assert(this.isV1400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10002(): boolean {
        return this.getTypeHash() === '9e3ba8f20346ec1ca9a46155bdc3cb5141b025a04145a44eb990be1382922d90'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10002(): CouncilProposalOfStorageV10002 {
        assert(this.isV10002)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10005(): boolean {
        return this.getTypeHash() === 'da501f818d75708e1ddec2a241fe58fd6e3a2fd4e6477fc99ab5949a1dad9b6f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10005(): CouncilProposalOfStorageV10005 {
        assert(this.isV10005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10009(): boolean {
        return this.getTypeHash() === 'c9417d9a8752c1a6e6492ae189a7e0cb3ab9f8805b54b23433407fa8b53874bc'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10009(): CouncilProposalOfStorageV10009 {
        assert(this.isV10009)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1400 {
    get(key: Uint8Array): Promise<(v1400.Call | undefined)>
    getAll(): Promise<v1400.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1400.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1400.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1400.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1400.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1400.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10002 {
    get(key: Uint8Array): Promise<(v10002.Call | undefined)>
    getAll(): Promise<v10002.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10002.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10002.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10002.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10002.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10002.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10005 {
    get(key: Uint8Array): Promise<(v10005.Call | undefined)>
    getAll(): Promise<v10005.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10005.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10005.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10005.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10005.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10005.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10009 {
    get(key: Uint8Array): Promise<(v10009.Call | undefined)>
    getAll(): Promise<v10009.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10009.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10009.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10009.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10009.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10009.Call][]>
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
    get isV1400(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1400(): DemocracyPreimagesStorageV1400 {
        assert(this.isV1400)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1400 {
    get(key: Uint8Array): Promise<(v1400.PreimageStatus | undefined)>
    getAll(): Promise<v1400.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1400.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1400.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1400.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1400.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1400.PreimageStatus][]>
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
    get isV1400(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV1400(): DemocracyPublicPropCountStorageV1400 {
        assert(this.isV1400)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV1400 {
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
    get isV1400(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV1400(): DemocracyPublicPropsStorageV1400 {
        assert(this.isV1400)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV10009(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV10009(): DemocracyPublicPropsStorageV10009 {
        assert(this.isV10009)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV1400 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV10009 {
    get(): Promise<[number, v10009.Bounded, Uint8Array][]>
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
    get isV1400(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV1400(): DemocracyReferendumInfoOfStorageV1400 {
        assert(this.isV1400)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV10009(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV10009(): DemocracyReferendumInfoOfStorageV10009 {
        assert(this.isV10009)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV1400 {
    get(key: number): Promise<(v1400.ReferendumInfo | undefined)>
    getAll(): Promise<v1400.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1400.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1400.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1400.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1400.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1400.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV10009 {
    get(key: number): Promise<(v10009.ReferendumInfo | undefined)>
    getAll(): Promise<v10009.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v10009.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v10009.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v10009.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v10009.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v10009.ReferendumInfo][]>
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
    get isV1400(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV1400(): PreimagePreimageForStorageV1400 {
        assert(this.isV1400)
        return this as any
    }

    get isV10009(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV10009(): PreimagePreimageForStorageV10009 {
        assert(this.isV10009)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV1400 {
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

export interface PreimagePreimageForStorageV10009 {
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
    get isV1400(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1400(): PreimageStatusForStorageV1400 {
        assert(this.isV1400)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV10009(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV10009(): PreimageStatusForStorageV10009 {
        assert(this.isV10009)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV1400 {
    get(key: Uint8Array): Promise<(v1400.RequestStatus | undefined)>
    getAll(): Promise<v1400.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1400.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1400.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1400.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1400.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1400.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV10009 {
    get(key: Uint8Array): Promise<(v10009.RequestStatus | undefined)>
    getAll(): Promise<v10009.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v10009.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10009.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10009.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10009.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10009.RequestStatus][]>
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
    get isV1400(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1400(): SystemAccountStorageV1400 {
        assert(this.isV1400)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV1400 {
    get(key: Uint8Array): Promise<v1400.AccountInfo>
    getAll(): Promise<v1400.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v1400.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1400.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1400.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1400.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1400.AccountInfo][]>
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
    get isV10005(): boolean {
        return this.getTypeHash() === 'da501f818d75708e1ddec2a241fe58fd6e3a2fd4e6477fc99ab5949a1dad9b6f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10005(): TechnicalCommitteeProposalOfStorageV10005 {
        assert(this.isV10005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10009(): boolean {
        return this.getTypeHash() === 'c9417d9a8752c1a6e6492ae189a7e0cb3ab9f8805b54b23433407fa8b53874bc'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10009(): TechnicalCommitteeProposalOfStorageV10009 {
        assert(this.isV10009)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10005 {
    get(key: Uint8Array): Promise<(v10005.Call | undefined)>
    getAll(): Promise<v10005.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10005.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10005.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10005.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10005.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10005.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10009 {
    get(key: Uint8Array): Promise<(v10009.Call | undefined)>
    getAll(): Promise<v10009.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10009.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10009.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10009.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10009.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10009.Call][]>
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
    get isV1400(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1400(): TreasuryProposalsStorageV1400 {
        assert(this.isV1400)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1400 {
    get(key: number): Promise<(v1400.Proposal | undefined)>
    getAll(): Promise<v1400.Proposal[]>
    getMany(keys: number[]): Promise<(v1400.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1400.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v1400.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1400.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1400.Proposal][]>
}
