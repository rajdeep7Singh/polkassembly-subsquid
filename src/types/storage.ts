import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v100 from './v100'
import * as v110 from './v110'
import * as v120 from './v120'
import * as v121 from './v121'
import * as v122 from './v122'
import * as v140 from './v140'

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
    get isV110(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV110(): BountiesBountiesStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV110 {
    get(key: number): Promise<(v110.Bounty | undefined)>
    getAll(): Promise<v110.Bounty[]>
    getMany(keys: number[]): Promise<(v110.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v110.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v110.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v110.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v110.Bounty][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV110(): BountiesBountyDescriptionsStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV110 {
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
    get isV110(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child bounties that have been added.
     */
    get asV110(): ChildBountiesChildBountiesStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV110 {
    get(key1: number, key2: number): Promise<(v110.ChildBounty | undefined)>
    getAll(): Promise<v110.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v110.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v110.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v110.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v110.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v110.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v110.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v110.ChildBounty][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV110(): ChildBountiesChildBountyDescriptionsStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV110 {
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
    get isV110(): boolean {
        return this.getTypeHash() === 'f5718a9729b93e5dd0b421ab8274a5e99a7a8bced5ee0a817ed2c995cdfb78d0'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV110(): ConvictionVotingVotingForStorageV110 {
        assert(this.isV110)
        return this as any
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV120(): ConvictionVotingVotingForStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV110 {
    get(key1: Uint8Array, key2: number): Promise<v110.Type_525>
    getAll(): Promise<v110.Type_525[]>
    getMany(keys: [Uint8Array, number][]): Promise<v110.Type_525[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v110.Type_525][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v110.Type_525][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v110.Type_525][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v110.Type_525][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v110.Type_525][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v110.Type_525][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV120 {
    get(key1: Uint8Array, key2: number): Promise<v120.Type_524>
    getAll(): Promise<v120.Type_524[]>
    getMany(keys: [Uint8Array, number][]): Promise<v120.Type_524[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v120.Type_524][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v120.Type_524][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v120.Type_524][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v120.Type_524][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v120.Type_524][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v120.Type_524][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV110(): CouncilMembersStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV110 {
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
    get isV110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV110(): CouncilProposalCountStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV110 {
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
    get isV110(): boolean {
        return this.getTypeHash() === '78441815ac76e459affc495c64391f71e4d6c392b4aa90c535f29116897723f0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV110(): CouncilProposalOfStorageV110 {
        assert(this.isV110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '731f39c0929844ed7f1b92e8cd2bc76b2b0c1ca34645f458f463f73491dd79b0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV120(): CouncilProposalOfStorageV120 {
        assert(this.isV120)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV121(): boolean {
        return this.getTypeHash() === '7b3c1c48d3491f764262d3c1253ca66611590f393beca5238a53c50225de2eed'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV121(): CouncilProposalOfStorageV121 {
        assert(this.isV121)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV122(): boolean {
        return this.getTypeHash() === '6ab780eeeaa46eeff271bdcadb14d3ade3ac0c1ef94cbe86bf57884459113967'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV122(): CouncilProposalOfStorageV122 {
        assert(this.isV122)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV110 {
    get(key: Uint8Array): Promise<(v110.Call | undefined)>
    getAll(): Promise<v110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV120 {
    get(key: Uint8Array): Promise<(v120.Call | undefined)>
    getAll(): Promise<v120.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v120.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v120.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v120.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v120.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v120.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV121 {
    get(key: Uint8Array): Promise<(v121.Call | undefined)>
    getAll(): Promise<v121.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v121.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v121.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v121.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v121.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v121.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV122 {
    get(key: Uint8Array): Promise<(v122.Call | undefined)>
    getAll(): Promise<v122.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v122.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v122.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v122.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v122.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v122.Call][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV110(): DemocracyPublicPropCountStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV110 {
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
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV110(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV110(): DemocracyPublicPropsStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV110 {
    get(): Promise<[number, v110.Bounded, Uint8Array][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV110(): DemocracyReferendumInfoOfStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV110 {
    get(key: number): Promise<(v110.ReferendumInfo | undefined)>
    getAll(): Promise<v110.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v110.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v110.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v110.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v110.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v110.ReferendumInfo][]>
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
    get isV121(): boolean {
        return this.getTypeHash() === '427ac3b5fe8caed78dc0d322d8206fcdbf35bd80153b4f1c8f18be5a087788da'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV121(): FellowshipReferendaReferendumInfoForStorageV121 {
        assert(this.isV121)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV140(): boolean {
        return this.getTypeHash() === '12eafd9cee8cdeba16cd8cc0f60636d0364706db80a7164cd0a67305c1afaed7'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV140(): FellowshipReferendaReferendumInfoForStorageV140 {
        assert(this.isV140)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV121 {
    get(key: number): Promise<(v121.Type_527 | undefined)>
    getAll(): Promise<v121.Type_527[]>
    getMany(keys: number[]): Promise<(v121.Type_527 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v121.Type_527][]>
    getPairs(key: number): Promise<[k: number, v: v121.Type_527][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v121.Type_527][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v121.Type_527][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV140 {
    get(key: number): Promise<(v140.Type_482 | undefined)>
    getAll(): Promise<v140.Type_482[]>
    getMany(keys: number[]): Promise<(v140.Type_482 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v140.Type_482][]>
    getPairs(key: number): Promise<[k: number, v: v140.Type_482][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v140.Type_482][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v140.Type_482][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV110(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV110(): PreimagePreimageForStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

export interface PreimagePreimageForStorageV110 {
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
    get isV110(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV110(): PreimageStatusForStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV110 {
    get(key: Uint8Array): Promise<(v110.RequestStatus | undefined)>
    getAll(): Promise<v110.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v110.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v110.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v110.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v110.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v110.RequestStatus][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === '1888fbeed0ff991ba9df0d70e7ba23cdb1f0c40f8a5d0e038b2a29342260f2f3'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV110(): ReferendaReferendumInfoForStorageV110 {
        assert(this.isV110)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'ffb923d85fe7cb56aebfbf4eda7fd2f8742ac562aac14f40209876fd2166b369'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV120(): ReferendaReferendumInfoForStorageV120 {
        assert(this.isV120)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV121(): boolean {
        return this.getTypeHash() === '5c2b97a4144b35026ecdf3537be9c86f393d8bd15c277ae8669ae55ca09e42a1'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV121(): ReferendaReferendumInfoForStorageV121 {
        assert(this.isV121)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV140(): boolean {
        return this.getTypeHash() === '8d246c1ee03e089862f54182266a67ea8766e7658b8819d1b0c5b2bdf8697180'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV140(): ReferendaReferendumInfoForStorageV140 {
        assert(this.isV140)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV110 {
    get(key: number): Promise<(v110.Type_508 | undefined)>
    getAll(): Promise<v110.Type_508[]>
    getMany(keys: number[]): Promise<(v110.Type_508 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v110.Type_508][]>
    getPairs(key: number): Promise<[k: number, v: v110.Type_508][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v110.Type_508][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v110.Type_508][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV120 {
    get(key: number): Promise<(v120.Type_507 | undefined)>
    getAll(): Promise<v120.Type_507[]>
    getMany(keys: number[]): Promise<(v120.Type_507 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v120.Type_507][]>
    getPairs(key: number): Promise<[k: number, v: v120.Type_507][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v120.Type_507][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v120.Type_507][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV121 {
    get(key: number): Promise<(v121.Type_504 | undefined)>
    getAll(): Promise<v121.Type_504[]>
    getMany(keys: number[]): Promise<(v121.Type_504 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v121.Type_504][]>
    getPairs(key: number): Promise<[k: number, v: v121.Type_504][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v121.Type_504][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v121.Type_504][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV140 {
    get(key: number): Promise<(v140.ReferendumInfo | undefined)>
    getAll(): Promise<v140.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v140.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v140.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v140.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v140.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v140.ReferendumInfo][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === '78441815ac76e459affc495c64391f71e4d6c392b4aa90c535f29116897723f0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV110(): TechnicalCommitteeProposalOfStorageV110 {
        assert(this.isV110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '731f39c0929844ed7f1b92e8cd2bc76b2b0c1ca34645f458f463f73491dd79b0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV120(): TechnicalCommitteeProposalOfStorageV120 {
        assert(this.isV120)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV121(): boolean {
        return this.getTypeHash() === '7b3c1c48d3491f764262d3c1253ca66611590f393beca5238a53c50225de2eed'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV121(): TechnicalCommitteeProposalOfStorageV121 {
        assert(this.isV121)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV122(): boolean {
        return this.getTypeHash() === '6ab780eeeaa46eeff271bdcadb14d3ade3ac0c1ef94cbe86bf57884459113967'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV122(): TechnicalCommitteeProposalOfStorageV122 {
        assert(this.isV122)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV110 {
    get(key: Uint8Array): Promise<(v110.Call | undefined)>
    getAll(): Promise<v110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV120 {
    get(key: Uint8Array): Promise<(v120.Call | undefined)>
    getAll(): Promise<v120.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v120.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v120.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v120.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v120.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v120.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV121 {
    get(key: Uint8Array): Promise<(v121.Call | undefined)>
    getAll(): Promise<v121.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v121.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v121.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v121.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v121.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v121.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV122 {
    get(key: Uint8Array): Promise<(v122.Call | undefined)>
    getAll(): Promise<v122.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v122.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v122.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v122.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v122.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v122.Call][]>
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
    get isV110(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV110(): TreasuryProposalsStorageV110 {
        assert(this.isV110)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV110 {
    get(key: number): Promise<(v110.Proposal | undefined)>
    getAll(): Promise<v110.Proposal[]>
    getMany(keys: number[]): Promise<(v110.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v110.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v110.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v110.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v110.Proposal][]>
}
