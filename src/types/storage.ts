import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v3 from './v3'
import * as v4 from './v4'
import * as v5 from './v5'
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
    get isV3(): boolean {
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
    get asV3(): BalancesAccountStorageV3 {
        assert(this.isV3)
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
export interface BalancesAccountStorageV3 {
    get(key: Uint8Array): Promise<v3.AccountData>
    getAll(): Promise<v3.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v3.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.AccountData][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV3(): BalancesTotalIssuanceStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV3 {
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
     *  Child-bounties that have been added.
     */
    get isV3(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child-bounties that have been added.
     */
    get asV3(): ChildBountiesChildBountiesStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Child-bounties that have been added.
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

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV3(): boolean {
        return this.getTypeHash() === 'bdc4775457391bc7203341e8c051e8eb5b90efc93e314237f0e227e55b5dbffd'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV3(): ConvictionVotingVotingForStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV3 {
    get(key1: Uint8Array, key2: number): Promise<v3.Type_440>
    getAll(): Promise<v3.Type_440[]>
    getMany(keys: [Uint8Array, number][]): Promise<v3.Type_440[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v3.Type_440][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v3.Type_440][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v3.Type_440][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v3.Type_440][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v3.Type_440][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v3.Type_440][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV3(): CouncilMembersStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV3 {
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
    get isV3(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV3(): CouncilProposalCountStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV3 {
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
    get isV3(): boolean {
        return this.getTypeHash() === '234a4a51b5c0b1899e154669764b3756a40a285b17006a3e285689f8636a7207'
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
        return this.getTypeHash() === '95b2f7642a6ed7089bce543e1194862272d218e4a90c436bd6fc80a1e1dca551'
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
    get isV5(): boolean {
        return this.getTypeHash() === '4ff63e74bc8c6e8b38aa1d7746bb43727e3883084d1aafcc3fb8c2a74eed1e90'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV5(): CouncilProposalOfStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'c04a1972977f8a5add3648b6d61b4b301c1fcb1040084361dec7948ca5901637'
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
        return this.getTypeHash() === 'bc94c3faf77b54b685d1b2146a343c9b9576f2db68b4d4bb1ee1672b1b6e2ef7'
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
export interface CouncilProposalOfStorageV5 {
    get(key: Uint8Array): Promise<(v5.Call | undefined)>
    getAll(): Promise<v5.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v5.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.Call][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV3(): DemocracyPreimagesStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV3 {
    get(key: Uint8Array): Promise<(v3.PreimageStatus | undefined)>
    getAll(): Promise<v3.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v3.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.PreimageStatus][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV3(): DemocracyPublicPropCountStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV3 {
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
    get isV3(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV3(): DemocracyPublicPropsStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV3 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV3(): DemocracyReferendumInfoOfStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV3 {
    get(key: number): Promise<(v3.ReferendumInfo | undefined)>
    getAll(): Promise<v3.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v3.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v3.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v3.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v3.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v3.ReferendumInfo][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV3(): PreimagePreimageForStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV3 {
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
    get isV3(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV3(): PreimageStatusForStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV3 {
    get(key: Uint8Array): Promise<(v3.RequestStatus | undefined)>
    getAll(): Promise<v3.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v3.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.RequestStatus][]>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV3(): boolean {
        return this.getTypeHash() === '36b0ddf2fbd95f73c0ddc3f35429a17662999a3ed82e790da96e7d1dd0ada73d'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV3(): ReferendaReferendumInfoForStorageV3 {
        assert(this.isV3)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'f5ca7533803cd91b567aff594b63060a011a0eae1bcb28baa16371dceef70e7b'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV6(): ReferendaReferendumInfoForStorageV6 {
        assert(this.isV6)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendaReferendumInfoForStorageV3 {
    get(key: number): Promise<(v3.Type_427 | undefined)>
    getAll(): Promise<v3.Type_427[]>
    getMany(keys: number[]): Promise<(v3.Type_427 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v3.Type_427][]>
    getPairs(key: number): Promise<[k: number, v: v3.Type_427][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v3.Type_427][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v3.Type_427][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV6 {
    get(key: number): Promise<(v6.Type_450 | undefined)>
    getAll(): Promise<v6.Type_450[]>
    getMany(keys: number[]): Promise<(v6.Type_450 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v6.Type_450][]>
    getPairs(key: number): Promise<[k: number, v: v6.Type_450][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v6.Type_450][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v6.Type_450][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV3(): SystemAccountStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV3 {
    get(key: Uint8Array): Promise<v3.AccountInfo>
    getAll(): Promise<v3.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v3.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.AccountInfo][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '234a4a51b5c0b1899e154669764b3756a40a285b17006a3e285689f8636a7207'
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
        return this.getTypeHash() === '95b2f7642a6ed7089bce543e1194862272d218e4a90c436bd6fc80a1e1dca551'
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
    get isV5(): boolean {
        return this.getTypeHash() === '4ff63e74bc8c6e8b38aa1d7746bb43727e3883084d1aafcc3fb8c2a74eed1e90'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV5(): TechnicalCommitteeProposalOfStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'c04a1972977f8a5add3648b6d61b4b301c1fcb1040084361dec7948ca5901637'
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
        return this.getTypeHash() === 'bc94c3faf77b54b685d1b2146a343c9b9576f2db68b4d4bb1ee1672b1b6e2ef7'
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
export interface TechnicalCommitteeProposalOfStorageV5 {
    get(key: Uint8Array): Promise<(v5.Call | undefined)>
    getAll(): Promise<v5.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v5.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.Call][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV3(): TipsReasonsStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV3 {
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
    get isV3(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV3(): TipsTipsStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV3 {
    get(key: Uint8Array): Promise<(v3.OpenTip | undefined)>
    getAll(): Promise<v3.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v3.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.OpenTip][]>
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
