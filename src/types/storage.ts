import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v9190 from './v9190'
import * as v9300 from './v9300'
import * as v9310 from './v9310'
import * as v9321 from './v9321'
import * as v9370 from './v9370'
import * as v9380 from './v9380'
import * as v9390 from './v9390'
import * as v9420 from './v9420'
import * as v9430 from './v9430'
import * as v102000 from './v102000'
import * as v103000 from './v103000'

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
    get isV9190(): boolean {
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
    get asV9190(): BalancesAccountStorageV9190 {
        assert(this.isV9190)
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
    get isV9420(): boolean {
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
    get asV9420(): BalancesAccountStorageV9420 {
        assert(this.isV9420)
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
export interface BalancesAccountStorageV9190 {
    get(key: Uint8Array): Promise<v9190.AccountData>
    getAll(): Promise<v9190.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v9190.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.AccountData][]>
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
export interface BalancesAccountStorageV9420 {
    get(key: Uint8Array): Promise<v9420.AccountData>
    getAll(): Promise<v9420.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v9420.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
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
    get isV9370(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV9370(): BalancesInactiveIssuanceStorageV9370 {
        assert(this.isV9370)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV9370 {
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
    get isV9190(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV9190(): BalancesTotalIssuanceStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV9190 {
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
    get isV9300(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV9300(): BountiesBountiesStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV9300 {
    get(key: number): Promise<(v9300.Bounty | undefined)>
    getAll(): Promise<v9300.Bounty[]>
    getMany(keys: number[]): Promise<(v9300.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9300.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v9300.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9300.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9300.Bounty][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV9300(): BountiesBountyDescriptionsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV9300 {
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
    get isV9300(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child bounties that have been added.
     */
    get asV9300(): ChildBountiesChildBountiesStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV9300 {
    get(key1: number, key2: number): Promise<(v9300.ChildBounty | undefined)>
    getAll(): Promise<v9300.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v9300.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v9300.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v9300.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v9300.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v9300.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v9300.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v9300.ChildBounty][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV9300(): ChildBountiesChildBountyDescriptionsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV9300 {
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
    get isV103000(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV103000(): ConvictionVotingVotingForStorageV103000 {
        assert(this.isV103000)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV103000 {
    get(key1: Uint8Array, key2: number): Promise<v103000.Voting>
    getAll(): Promise<v103000.Voting[]>
    getMany(keys: [Uint8Array, number][]): Promise<v103000.Voting[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v103000.Voting][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v103000.Voting][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v103000.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v103000.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v103000.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v103000.Voting][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV9300(): CouncilMembersStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV9300 {
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
    get isV9300(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV9300(): CouncilProposalCountStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV9300 {
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
    get isV9300(): boolean {
        return this.getTypeHash() === 'ec2d2d45a1cf1c3924cc5ea1fe1866f9cbcb18649b167fbd9895d71a2e6803d4'
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
    get isV9310(): boolean {
        return this.getTypeHash() === '6071d0b5a47a9961a13f5b7c0260aa8aae413be2c5c88c312c274094cdb7200a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9310(): CouncilProposalOfStorageV9310 {
        assert(this.isV9310)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9321(): boolean {
        return this.getTypeHash() === 'a2de0319d461e8469e3453c36ce6a0895e9b5c25db9339e5b028d441c488dc43'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9321(): CouncilProposalOfStorageV9321 {
        assert(this.isV9321)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '9a0577a08691e8f3b6c834655d46c8b3cdf4fc303b8c0c22969f011e78ec9526'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): CouncilProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9380(): boolean {
        return this.getTypeHash() === '977a8ef1791e916629a03eb13c831c6e51df593e78401e27f4dd805437716403'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9380(): CouncilProposalOfStorageV9380 {
        assert(this.isV9380)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9390(): boolean {
        return this.getTypeHash() === 'be6c93ec95a1051a4d0a8426f3a9deda3da4df35e8eda48d029c144b6c743a0a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9390(): CouncilProposalOfStorageV9390 {
        assert(this.isV9390)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '2631b4c88bd614c4892815f0bf22d5d38c31718c421bd48ab0ff65e56fd71c2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9420(): CouncilProposalOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === 'a6d0b176a20b9de3eb6cfa2117943de7356d37f43819e5f73e49823e9be5a87f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9430(): CouncilProposalOfStorageV9430 {
        assert(this.isV9430)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV102000(): boolean {
        return this.getTypeHash() === '70c5527a552dc7f47facb1d693004e6664d3d084ea0c0931a21d426442ee8f47'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV102000(): CouncilProposalOfStorageV102000 {
        assert(this.isV102000)
        return this as any
    }
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
export interface CouncilProposalOfStorageV9310 {
    get(key: Uint8Array): Promise<(v9310.Call | undefined)>
    getAll(): Promise<v9310.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9310.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9310.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9310.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9310.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9310.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9321 {
    get(key: Uint8Array): Promise<(v9321.Call | undefined)>
    getAll(): Promise<v9321.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9321.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9321.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9321.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9321.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9321.Call][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9380 {
    get(key: Uint8Array): Promise<(v9380.Call | undefined)>
    getAll(): Promise<v9380.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9380.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9380.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9380.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9380.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9380.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9390 {
    get(key: Uint8Array): Promise<(v9390.Call | undefined)>
    getAll(): Promise<v9390.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9390.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9390.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9390.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9390.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9390.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9420 {
    get(key: Uint8Array): Promise<(v9420.Call | undefined)>
    getAll(): Promise<v9420.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9420.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9430 {
    get(key: Uint8Array): Promise<(v9430.Call | undefined)>
    getAll(): Promise<v9430.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9430.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9430.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9430.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9430.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9430.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV102000 {
    get(key: Uint8Array): Promise<(v102000.Call | undefined)>
    getAll(): Promise<v102000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v102000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v102000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v102000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v102000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v102000.Call][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV9300(): DemocracyPreimagesStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.PreimageStatus | undefined)>
    getAll(): Promise<v9300.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.PreimageStatus][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV9300(): DemocracyPublicPropCountStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV9300 {
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
    get isV9300(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV9300(): DemocracyPublicPropsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV9310(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV9310(): DemocracyPublicPropsStorageV9310 {
        assert(this.isV9310)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV9300 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV9310 {
    get(): Promise<[number, v9310.Bounded, Uint8Array][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9300(): DemocracyReferendumInfoOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9310(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9310(): DemocracyReferendumInfoOfStorageV9310 {
        assert(this.isV9310)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9300 {
    get(key: number): Promise<(v9300.ReferendumInfo | undefined)>
    getAll(): Promise<v9300.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9300.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9300.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9300.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9300.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9300.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9310 {
    get(key: number): Promise<(v9310.ReferendumInfo | undefined)>
    getAll(): Promise<v9310.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9310.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9310.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9310.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9310.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9310.ReferendumInfo][]>
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
    get isV103000(): boolean {
        return this.getTypeHash() === 'b07ce7a9e25b52e042041a9d4b4fdbc37cae4e71a1484beaa001e17a9b8857e4'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV103000(): FellowshipReferendaReferendumInfoForStorageV103000 {
        assert(this.isV103000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV103000 {
    get(key: number): Promise<(v103000.Type_524 | undefined)>
    getAll(): Promise<v103000.Type_524[]>
    getMany(keys: number[]): Promise<(v103000.Type_524 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v103000.Type_524][]>
    getPairs(key: number): Promise<[k: number, v: v103000.Type_524][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v103000.Type_524][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v103000.Type_524][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV9300(): PreimagePreimageForStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    get isV9310(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV9310(): PreimagePreimageForStorageV9310 {
        assert(this.isV9310)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV9300 {
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

export interface PreimagePreimageForStorageV9310 {
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
    get isV9300(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9300(): PreimageStatusForStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV9310(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9310(): PreimageStatusForStorageV9310 {
        assert(this.isV9310)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.RequestStatus | undefined)>
    getAll(): Promise<v9300.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9310 {
    get(key: Uint8Array): Promise<(v9310.RequestStatus | undefined)>
    getAll(): Promise<v9310.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9310.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9310.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9310.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9310.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9310.RequestStatus][]>
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
    get isV103000(): boolean {
        return this.getTypeHash() === 'db57abeb0a45cf88aa6c6be9867481c5b3f1bf5ae1df62f2e92a729accf21c98'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV103000(): ReferendaReferendumInfoForStorageV103000 {
        assert(this.isV103000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV103000 {
    get(key: number): Promise<(v103000.ReferendumInfo | undefined)>
    getAll(): Promise<v103000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v103000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v103000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v103000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v103000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v103000.ReferendumInfo][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '09482d05aec3de323d13cb37fdb85a42603e7bdfb75cef1985f07c7cf3f8604b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9300(): SchedulerAgendaStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9310(): boolean {
        return this.getTypeHash() === 'e0e1608b6ee6846ed0b2a5f578bfb47ac648f159acbe4a734356ac455f7f2bd3'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9310(): SchedulerAgendaStorageV9310 {
        assert(this.isV9310)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '33bce084e7ea1f189d72321e0b66da63c88a2508005d0ce7fc3847924a86a243'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9370(): SchedulerAgendaStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9380(): boolean {
        return this.getTypeHash() === 'eaf1478b3aece0ca09d248f3b3bcc4adad3edc6b00247b6a61c15a79053b6388'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9380(): SchedulerAgendaStorageV9380 {
        assert(this.isV9380)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV103000(): boolean {
        return this.getTypeHash() === '62b36ab8424d18fddc4d5b88113baf0a185fe3a6b392e841ea1a4a005a25ceb8'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV103000(): SchedulerAgendaStorageV103000 {
        assert(this.isV103000)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9300 {
    get(key: number): Promise<(v9300.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9300.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9300.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9310 {
    get(key: number): Promise<(v9310.Scheduled | undefined)[]>
    getAll(): Promise<(v9310.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9310.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9310.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9310.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9310.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9310.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9370 {
    get(key: number): Promise<(v9370.Scheduled | undefined)[]>
    getAll(): Promise<(v9370.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9370.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9370.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9380 {
    get(key: number): Promise<(v9380.Scheduled | undefined)[]>
    getAll(): Promise<(v9380.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9380.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9380.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9380.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9380.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9380.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV103000 {
    get(key: number): Promise<(v103000.Scheduled | undefined)[]>
    getAll(): Promise<(v103000.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v103000.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v103000.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v103000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v103000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v103000.Scheduled | undefined)[]][]>
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
    get isV9190(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV9190(): SystemAccountStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV9420(): SystemAccountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV9190 {
    get(key: Uint8Array): Promise<v9190.AccountInfo>
    getAll(): Promise<v9190.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v9190.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV9420 {
    get(key: Uint8Array): Promise<v9420.AccountInfo>
    getAll(): Promise<v9420.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v9420.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.AccountInfo][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === 'ec2d2d45a1cf1c3924cc5ea1fe1866f9cbcb18649b167fbd9895d71a2e6803d4'
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
    get isV9310(): boolean {
        return this.getTypeHash() === '6071d0b5a47a9961a13f5b7c0260aa8aae413be2c5c88c312c274094cdb7200a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9310(): TechnicalCommitteeProposalOfStorageV9310 {
        assert(this.isV9310)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9321(): boolean {
        return this.getTypeHash() === 'a2de0319d461e8469e3453c36ce6a0895e9b5c25db9339e5b028d441c488dc43'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9321(): TechnicalCommitteeProposalOfStorageV9321 {
        assert(this.isV9321)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '9a0577a08691e8f3b6c834655d46c8b3cdf4fc303b8c0c22969f011e78ec9526'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): TechnicalCommitteeProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9380(): boolean {
        return this.getTypeHash() === '977a8ef1791e916629a03eb13c831c6e51df593e78401e27f4dd805437716403'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9380(): TechnicalCommitteeProposalOfStorageV9380 {
        assert(this.isV9380)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9390(): boolean {
        return this.getTypeHash() === 'be6c93ec95a1051a4d0a8426f3a9deda3da4df35e8eda48d029c144b6c743a0a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9390(): TechnicalCommitteeProposalOfStorageV9390 {
        assert(this.isV9390)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '2631b4c88bd614c4892815f0bf22d5d38c31718c421bd48ab0ff65e56fd71c2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9420(): TechnicalCommitteeProposalOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === 'a6d0b176a20b9de3eb6cfa2117943de7356d37f43819e5f73e49823e9be5a87f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9430(): TechnicalCommitteeProposalOfStorageV9430 {
        assert(this.isV9430)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV102000(): boolean {
        return this.getTypeHash() === '70c5527a552dc7f47facb1d693004e6664d3d084ea0c0931a21d426442ee8f47'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV102000(): TechnicalCommitteeProposalOfStorageV102000 {
        assert(this.isV102000)
        return this as any
    }
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
export interface TechnicalCommitteeProposalOfStorageV9310 {
    get(key: Uint8Array): Promise<(v9310.Call | undefined)>
    getAll(): Promise<v9310.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9310.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9310.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9310.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9310.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9310.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9321 {
    get(key: Uint8Array): Promise<(v9321.Call | undefined)>
    getAll(): Promise<v9321.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9321.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9321.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9321.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9321.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9321.Call][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9380 {
    get(key: Uint8Array): Promise<(v9380.Call | undefined)>
    getAll(): Promise<v9380.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9380.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9380.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9380.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9380.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9380.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9390 {
    get(key: Uint8Array): Promise<(v9390.Call | undefined)>
    getAll(): Promise<v9390.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9390.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9390.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9390.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9390.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9390.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9420 {
    get(key: Uint8Array): Promise<(v9420.Call | undefined)>
    getAll(): Promise<v9420.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9420.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9430 {
    get(key: Uint8Array): Promise<(v9430.Call | undefined)>
    getAll(): Promise<v9430.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9430.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9430.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9430.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9430.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9430.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV102000 {
    get(key: Uint8Array): Promise<(v102000.Call | undefined)>
    getAll(): Promise<v102000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v102000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v102000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v102000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v102000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v102000.Call][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV9300(): TipsReasonsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV9300 {
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
    get isV9300(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV9300(): TipsTipsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.OpenTip | undefined)>
    getAll(): Promise<v9300.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.OpenTip][]>
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
    get isV9300(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV9300(): TreasuryProposalsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV9300 {
    get(key: number): Promise<(v9300.Proposal | undefined)>
    getAll(): Promise<v9300.Proposal[]>
    getMany(keys: number[]): Promise<(v9300.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9300.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v9300.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9300.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9300.Proposal][]>
}
