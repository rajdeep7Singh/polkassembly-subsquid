import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v100 from './v100'
import * as v130 from './v130'
import * as v210 from './v210'
import * as v310 from './v310'

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
    get isV100(): boolean {
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
    get asV100(): BalancesAccountStorageV100 {
        assert(this.isV100)
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
export interface BalancesAccountStorageV100 {
    get(key: Uint8Array): Promise<v100.AccountData>
    getAll(): Promise<v100.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v100.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.AccountData][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV100(): BalancesInactiveIssuanceStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV100 {
    get(): Promise<bigint>
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
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV100(): BalancesTotalIssuanceStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV100 {
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
    get isV310(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV310(): BountiesBountiesStorageV310 {
        assert(this.isV310)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV310 {
    get(key: number): Promise<(v310.Bounty | undefined)>
    getAll(): Promise<v310.Bounty[]>
    getMany(keys: number[]): Promise<(v310.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v310.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v310.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v310.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v310.Bounty][]>
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
    get isV310(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV310(): BountiesBountyDescriptionsStorageV310 {
        assert(this.isV310)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV310 {
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
    get isV310(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child bounties that have been added.
     */
    get asV310(): ChildBountiesChildBountiesStorageV310 {
        assert(this.isV310)
        return this as any
    }
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV310 {
    get(key1: number, key2: number): Promise<(v310.ChildBounty | undefined)>
    getAll(): Promise<v310.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v310.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v310.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v310.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v310.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v310.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v310.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v310.ChildBounty][]>
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
    get isV310(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV310(): ChildBountiesChildBountyDescriptionsStorageV310 {
        assert(this.isV310)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV310 {
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
    get isV100(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV100(): ConvictionVotingVotingForStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV100 {
    get(key1: Uint8Array, key2: number): Promise<v100.Voting>
    getAll(): Promise<v100.Voting[]>
    getMany(keys: [Uint8Array, number][]): Promise<v100.Voting[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v100.Voting][]>
}

export class FellowshipReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '12eafd9cee8cdeba16cd8cc0f60636d0364706db80a7164cd0a67305c1afaed7'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV100(): FellowshipReferendaReferendumInfoForStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV130(): boolean {
        return this.getTypeHash() === 'd725c3bb586dfdd8d4e435b11adf9737ed35b3716ce2f3f22f3f813eadeb2b1e'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV130(): FellowshipReferendaReferendumInfoForStorageV130 {
        assert(this.isV130)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV210(): boolean {
        return this.getTypeHash() === '5b50c6be5fa0ad8240c38b5ffed3beadda205c7cc30466ba28735b2ab0a72131'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV210(): FellowshipReferendaReferendumInfoForStorageV210 {
        assert(this.isV210)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV100 {
    get(key: number): Promise<(v100.Type_373 | undefined)>
    getAll(): Promise<v100.Type_373[]>
    getMany(keys: number[]): Promise<(v100.Type_373 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.Type_373][]>
    getPairs(key: number): Promise<[k: number, v: v100.Type_373][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.Type_373][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.Type_373][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV130 {
    get(key: number): Promise<(v130.Type_373 | undefined)>
    getAll(): Promise<v130.Type_373[]>
    getMany(keys: number[]): Promise<(v130.Type_373 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v130.Type_373][]>
    getPairs(key: number): Promise<[k: number, v: v130.Type_373][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v130.Type_373][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v130.Type_373][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV210 {
    get(key: number): Promise<(v210.Type_399 | undefined)>
    getAll(): Promise<v210.Type_399[]>
    getMany(keys: number[]): Promise<(v210.Type_399 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v210.Type_399][]>
    getPairs(key: number): Promise<[k: number, v: v210.Type_399][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v210.Type_399][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v210.Type_399][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV100(): PreimagePreimageForStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface PreimagePreimageForStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV100(): PreimageStatusForStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV100 {
    get(key: Uint8Array): Promise<(v100.RequestStatus | undefined)>
    getAll(): Promise<v100.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v100.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.RequestStatus][]>
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
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8d246c1ee03e089862f54182266a67ea8766e7658b8819d1b0c5b2bdf8697180'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV100(): ReferendaReferendumInfoForStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV130(): boolean {
        return this.getTypeHash() === 'cba071ae7bd907275c5cdcb56f56ab7b4c217446fec97ffcc21560dd54feb77a'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV130(): ReferendaReferendumInfoForStorageV130 {
        assert(this.isV130)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV210(): boolean {
        return this.getTypeHash() === 'fe0448c3dd602c46387dacf1375fdc339cf628d67fe333bacfc87dac3300f67c'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV210(): ReferendaReferendumInfoForStorageV210 {
        assert(this.isV210)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV100 {
    get(key: number): Promise<(v100.ReferendumInfo | undefined)>
    getAll(): Promise<v100.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v100.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v100.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV130 {
    get(key: number): Promise<(v130.ReferendumInfo | undefined)>
    getAll(): Promise<v130.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v130.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v130.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v130.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v130.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v130.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV210 {
    get(key: number): Promise<(v210.ReferendumInfo | undefined)>
    getAll(): Promise<v210.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v210.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v210.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v210.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v210.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v210.ReferendumInfo][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '7ab9b14215e3c64bee046433b457d38c22fccf3fee6151713f00c8462e55ff3d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV100(): SchedulerAgendaStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV130(): boolean {
        return this.getTypeHash() === '4c0fb4f7edabfa6faadfb3e940627a18b3f75e827dae08e9045c9ae8c4db2837'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV130(): SchedulerAgendaStorageV130 {
        assert(this.isV130)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV210(): boolean {
        return this.getTypeHash() === '6d9836600576a7978678c9745b8c997e8213c2ebaba1c073b6b68408ab091e1a'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV210(): SchedulerAgendaStorageV210 {
        assert(this.isV210)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV100 {
    get(key: number): Promise<(v100.Scheduled | undefined)[]>
    getAll(): Promise<(v100.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v100.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v100.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v100.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV130 {
    get(key: number): Promise<(v130.Scheduled | undefined)[]>
    getAll(): Promise<(v130.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v130.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v130.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v130.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v130.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v130.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV210 {
    get(key: number): Promise<(v210.Scheduled | undefined)[]>
    getAll(): Promise<(v210.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v210.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v210.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v210.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v210.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v210.Scheduled | undefined)[]][]>
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
    get isV100(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV100(): SystemAccountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV100 {
    get(key: Uint8Array): Promise<v100.AccountInfo>
    getAll(): Promise<v100.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v100.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.AccountInfo][]>
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
    get isV100(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV100(): TreasuryProposalsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV100 {
    get(key: number): Promise<(v100.Proposal | undefined)>
    getAll(): Promise<v100.Proposal[]>
    getMany(keys: number[]): Promise<(v100.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.Proposal][]>
}
