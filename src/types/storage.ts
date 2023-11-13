import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v200 from './v200'
import * as v1000 from './v1000'
import * as v1200 from './v1200'
import * as v1400 from './v1400'
import * as v10002 from './v10002'
import * as v10005 from './v10005'
import * as v10009 from './v10009'
import * as v10010 from './v10010'
import * as v10013 from './v10013'
import * as v10015 from './v10015'
import * as v10016 from './v10016'
import * as v10019 from './v10019'
import * as v10025 from './v10025'
import * as v10029 from './v10029'
import * as v10030 from './v10030'
import * as v10032 from './v10032'
import * as v10034 from './v10034'
import * as v10037 from './v10037'
import * as v10038 from './v10038'
import * as v10040 from './v10040'

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
    get isV200(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV200(): BalancesAccountStorageV200 {
        assert(this.isV200)
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
    get isV10040(): boolean {
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
    get asV10040(): BalancesAccountStorageV10040 {
        assert(this.isV10040)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV200 {
    get(key: Uint8Array): Promise<v200.AccountData>
    getAll(): Promise<v200.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v200.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.AccountData][]>
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
export interface BalancesAccountStorageV10040 {
    get(key: Uint8Array): Promise<v10040.AccountData>
    getAll(): Promise<v10040.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v10040.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10040.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10040.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10040.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10040.AccountData][]>
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
    get isV10009(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV10009(): BalancesInactiveIssuanceStorageV10009 {
        assert(this.isV10009)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV10009 {
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
    get isV200(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV200(): BalancesTotalIssuanceStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV200 {
    get(): Promise<bigint>
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
    get isV10038(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV10038(): ConvictionVotingVotingForStorageV10038 {
        assert(this.isV10038)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV10038 {
    get(key1: Uint8Array, key2: number): Promise<v10038.Type_656>
    getAll(): Promise<v10038.Type_656[]>
    getMany(keys: [Uint8Array, number][]): Promise<v10038.Type_656[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v10038.Type_656][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v10038.Type_656][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v10038.Type_656][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v10038.Type_656][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v10038.Type_656][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v10038.Type_656][]>
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
    get isV200(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV200(): CouncilMembersStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV200 {
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
    get isV200(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV200(): CouncilProposalCountStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV200 {
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
    get isV200(): boolean {
        return this.getTypeHash() === '66ec099a715596fe56268fffacd5543e7dc53cfe067afea8ffb514e1520fdb0d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): CouncilProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'dc701e6e0dd78d8dc9df420a87b615f6bac0f42ba94219a098a9acad712aff1a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1000(): CouncilProposalOfStorageV1000 {
        assert(this.isV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1200(): boolean {
        return this.getTypeHash() === '09cd48b6fdf31c682b9ccfd211b7768a0ed1d6d2226f35cf057ccc684a547746'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1200(): CouncilProposalOfStorageV1200 {
        assert(this.isV1200)
        return this as any
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

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10010(): boolean {
        return this.getTypeHash() === 'dc1485d0c1fa447741adc407a3e1b4e6782b7305291f5e30ca220d518b1fe3af'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10010(): CouncilProposalOfStorageV10010 {
        assert(this.isV10010)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10013(): boolean {
        return this.getTypeHash() === 'ff0caf4d8b3f1219428abe470077623ce45ba3966f5a2c8f98400c894e0f0615'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10013(): CouncilProposalOfStorageV10013 {
        assert(this.isV10013)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10015(): boolean {
        return this.getTypeHash() === '79ea281374045c763a219e9e9c0f6ffc89644622aacac2f95778afd093e9e52c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10015(): CouncilProposalOfStorageV10015 {
        assert(this.isV10015)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10016(): boolean {
        return this.getTypeHash() === '82f3aac4f6720c889c08ad1c84c483b7cec7b2be21d1a7a7648a6e489030c366'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10016(): CouncilProposalOfStorageV10016 {
        assert(this.isV10016)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10019(): boolean {
        return this.getTypeHash() === 'a3f0cc1f2c35b54da00899e9ae2a3d681b9aceff93631f1c5a9133a6aa6ceacf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10019(): CouncilProposalOfStorageV10019 {
        assert(this.isV10019)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10025(): boolean {
        return this.getTypeHash() === 'fe2ecc4b32c7b71ead6f23cf5157ca5005d8875ea7b5adee66368f354c8ee671'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10025(): CouncilProposalOfStorageV10025 {
        assert(this.isV10025)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10029(): boolean {
        return this.getTypeHash() === '34f137674c14dd748940c98620051a973cfb822cf8c4be61166424c1d7a9dc22'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10029(): CouncilProposalOfStorageV10029 {
        assert(this.isV10029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10030(): boolean {
        return this.getTypeHash() === '81c7df6ff98e5ffb5efef63138e00ee5f413513117761b673f37bdc2c1bdb442'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10030(): CouncilProposalOfStorageV10030 {
        assert(this.isV10030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10032(): boolean {
        return this.getTypeHash() === '82471f1c57822885fa7f0a7433924831522b1bd3da9166ad584a32e7415c71d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10032(): CouncilProposalOfStorageV10032 {
        assert(this.isV10032)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10034(): boolean {
        return this.getTypeHash() === 'f5674694bda6d5af597ea61b38957a5147012c08be8dcfcd2fe16d19f688a926'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10034(): CouncilProposalOfStorageV10034 {
        assert(this.isV10034)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10037(): boolean {
        return this.getTypeHash() === 'b9faef70afaf58a6d67447bc98d8eb700b61f698671807663899b21014f233cd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10037(): CouncilProposalOfStorageV10037 {
        assert(this.isV10037)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10038(): boolean {
        return this.getTypeHash() === '0ce86e118173cbcea13d635add4cd47c5164d320a2bab99222189c95ae814d11'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10038(): CouncilProposalOfStorageV10038 {
        assert(this.isV10038)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10040(): boolean {
        return this.getTypeHash() === '5393254acf233c462df517e6b25cc72858af84a1315ce6a14f3b2468bbe8e72a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10040(): CouncilProposalOfStorageV10040 {
        assert(this.isV10040)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV200 {
    get(key: Uint8Array): Promise<(v200.Call | undefined)>
    getAll(): Promise<v200.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.Call | undefined)>
    getAll(): Promise<v1000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1200 {
    get(key: Uint8Array): Promise<(v1200.Call | undefined)>
    getAll(): Promise<v1200.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1200.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1200.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1200.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1200.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1200.Call][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10010 {
    get(key: Uint8Array): Promise<(v10010.Call | undefined)>
    getAll(): Promise<v10010.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10010.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10010.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10010.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10010.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10010.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10013 {
    get(key: Uint8Array): Promise<(v10013.Call | undefined)>
    getAll(): Promise<v10013.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10013.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10013.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10013.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10013.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10013.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10015 {
    get(key: Uint8Array): Promise<(v10015.Call | undefined)>
    getAll(): Promise<v10015.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10015.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10015.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10015.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10015.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10015.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10016 {
    get(key: Uint8Array): Promise<(v10016.Call | undefined)>
    getAll(): Promise<v10016.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10016.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10016.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10016.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10016.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10016.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10019 {
    get(key: Uint8Array): Promise<(v10019.Call | undefined)>
    getAll(): Promise<v10019.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10019.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10019.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10019.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10019.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10019.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10025 {
    get(key: Uint8Array): Promise<(v10025.Call | undefined)>
    getAll(): Promise<v10025.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10025.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10025.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10025.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10025.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10025.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10029 {
    get(key: Uint8Array): Promise<(v10029.Call | undefined)>
    getAll(): Promise<v10029.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10029.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10029.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10029.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10029.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10029.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10030 {
    get(key: Uint8Array): Promise<(v10030.Call | undefined)>
    getAll(): Promise<v10030.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10030.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10030.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10030.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10030.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10030.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10032 {
    get(key: Uint8Array): Promise<(v10032.Call | undefined)>
    getAll(): Promise<v10032.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10032.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10032.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10032.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10032.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10032.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10034 {
    get(key: Uint8Array): Promise<(v10034.Call | undefined)>
    getAll(): Promise<v10034.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10034.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10034.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10034.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10034.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10034.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10037 {
    get(key: Uint8Array): Promise<(v10037.Call | undefined)>
    getAll(): Promise<v10037.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10037.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10037.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10037.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10037.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10037.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10038 {
    get(key: Uint8Array): Promise<(v10038.Call | undefined)>
    getAll(): Promise<v10038.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10038.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10038.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10038.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10038.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10038.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10040 {
    get(key: Uint8Array): Promise<(v10040.Call | undefined)>
    getAll(): Promise<v10040.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10040.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10040.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10040.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10040.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10040.Call][]>
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
    get isV200(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV200(): DemocracyPreimagesStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV200 {
    get(key: Uint8Array): Promise<(v200.PreimageStatus | undefined)>
    getAll(): Promise<v200.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v200.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.PreimageStatus][]>
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
    get isV200(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV200(): DemocracyPublicPropCountStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV200 {
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
    get isV200(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV200(): DemocracyPublicPropsStorageV200 {
        assert(this.isV200)
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
export interface DemocracyPublicPropsStorageV200 {
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
    get isV200(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV200(): DemocracyReferendumInfoOfStorageV200 {
        assert(this.isV200)
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
export interface DemocracyReferendumInfoOfStorageV200 {
    get(key: number): Promise<(v200.ReferendumInfo | undefined)>
    getAll(): Promise<v200.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v200.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v200.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v200.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v200.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v200.ReferendumInfo][]>
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

export class OpenGovBalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'OpenGovBalances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV10038(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV10038(): OpenGovBalancesInactiveIssuanceStorageV10038 {
        assert(this.isV10038)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface OpenGovBalancesInactiveIssuanceStorageV10038 {
    get(): Promise<bigint>
}

export class OpenGovBalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'OpenGovBalances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV10038(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV10038(): OpenGovBalancesTotalIssuanceStorageV10038 {
        assert(this.isV10038)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface OpenGovBalancesTotalIssuanceStorageV10038 {
    get(): Promise<bigint>
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
    get isV1000(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV1000(): PreimagePreimageForStorageV1000 {
        assert(this.isV1000)
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
export interface PreimagePreimageForStorageV1000 {
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
    get isV1000(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1000(): PreimageStatusForStorageV1000 {
        assert(this.isV1000)
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
export interface PreimageStatusForStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.RequestStatus | undefined)>
    getAll(): Promise<v1000.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.RequestStatus][]>
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
    get isV10038(): boolean {
        return this.getTypeHash() === 'a7b2ced42453fdb740135e1dfae6d9137afc92a742573ea96915f6add4a84c19'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV10038(): ReferendaReferendumInfoForStorageV10038 {
        assert(this.isV10038)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV10038 {
    get(key: number): Promise<(v10038.Type_637 | undefined)>
    getAll(): Promise<v10038.Type_637[]>
    getMany(keys: number[]): Promise<(v10038.Type_637 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v10038.Type_637][]>
    getPairs(key: number): Promise<[k: number, v: v10038.Type_637][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v10038.Type_637][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v10038.Type_637][]>
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
    get isV200(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV200(): SystemAccountStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV10040(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV10040(): SystemAccountStorageV10040 {
        assert(this.isV10040)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV200 {
    get(key: Uint8Array): Promise<v200.AccountInfo>
    getAll(): Promise<v200.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v200.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV10040 {
    get(key: Uint8Array): Promise<v10040.AccountInfo>
    getAll(): Promise<v10040.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v10040.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10040.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10040.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10040.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10040.AccountInfo][]>
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

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10010(): boolean {
        return this.getTypeHash() === 'dc1485d0c1fa447741adc407a3e1b4e6782b7305291f5e30ca220d518b1fe3af'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10010(): TechnicalCommitteeProposalOfStorageV10010 {
        assert(this.isV10010)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10013(): boolean {
        return this.getTypeHash() === 'ff0caf4d8b3f1219428abe470077623ce45ba3966f5a2c8f98400c894e0f0615'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10013(): TechnicalCommitteeProposalOfStorageV10013 {
        assert(this.isV10013)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10015(): boolean {
        return this.getTypeHash() === '79ea281374045c763a219e9e9c0f6ffc89644622aacac2f95778afd093e9e52c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10015(): TechnicalCommitteeProposalOfStorageV10015 {
        assert(this.isV10015)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10016(): boolean {
        return this.getTypeHash() === '82f3aac4f6720c889c08ad1c84c483b7cec7b2be21d1a7a7648a6e489030c366'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10016(): TechnicalCommitteeProposalOfStorageV10016 {
        assert(this.isV10016)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10019(): boolean {
        return this.getTypeHash() === 'a3f0cc1f2c35b54da00899e9ae2a3d681b9aceff93631f1c5a9133a6aa6ceacf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10019(): TechnicalCommitteeProposalOfStorageV10019 {
        assert(this.isV10019)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10025(): boolean {
        return this.getTypeHash() === 'fe2ecc4b32c7b71ead6f23cf5157ca5005d8875ea7b5adee66368f354c8ee671'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10025(): TechnicalCommitteeProposalOfStorageV10025 {
        assert(this.isV10025)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10029(): boolean {
        return this.getTypeHash() === '34f137674c14dd748940c98620051a973cfb822cf8c4be61166424c1d7a9dc22'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10029(): TechnicalCommitteeProposalOfStorageV10029 {
        assert(this.isV10029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10030(): boolean {
        return this.getTypeHash() === '81c7df6ff98e5ffb5efef63138e00ee5f413513117761b673f37bdc2c1bdb442'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10030(): TechnicalCommitteeProposalOfStorageV10030 {
        assert(this.isV10030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10032(): boolean {
        return this.getTypeHash() === '82471f1c57822885fa7f0a7433924831522b1bd3da9166ad584a32e7415c71d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10032(): TechnicalCommitteeProposalOfStorageV10032 {
        assert(this.isV10032)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10034(): boolean {
        return this.getTypeHash() === 'f5674694bda6d5af597ea61b38957a5147012c08be8dcfcd2fe16d19f688a926'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10034(): TechnicalCommitteeProposalOfStorageV10034 {
        assert(this.isV10034)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10037(): boolean {
        return this.getTypeHash() === 'b9faef70afaf58a6d67447bc98d8eb700b61f698671807663899b21014f233cd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10037(): TechnicalCommitteeProposalOfStorageV10037 {
        assert(this.isV10037)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10038(): boolean {
        return this.getTypeHash() === '0ce86e118173cbcea13d635add4cd47c5164d320a2bab99222189c95ae814d11'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10038(): TechnicalCommitteeProposalOfStorageV10038 {
        assert(this.isV10038)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10040(): boolean {
        return this.getTypeHash() === '5393254acf233c462df517e6b25cc72858af84a1315ce6a14f3b2468bbe8e72a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10040(): TechnicalCommitteeProposalOfStorageV10040 {
        assert(this.isV10040)
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10010 {
    get(key: Uint8Array): Promise<(v10010.Call | undefined)>
    getAll(): Promise<v10010.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10010.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10010.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10010.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10010.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10010.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10013 {
    get(key: Uint8Array): Promise<(v10013.Call | undefined)>
    getAll(): Promise<v10013.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10013.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10013.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10013.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10013.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10013.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10015 {
    get(key: Uint8Array): Promise<(v10015.Call | undefined)>
    getAll(): Promise<v10015.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10015.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10015.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10015.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10015.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10015.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10016 {
    get(key: Uint8Array): Promise<(v10016.Call | undefined)>
    getAll(): Promise<v10016.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10016.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10016.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10016.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10016.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10016.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10019 {
    get(key: Uint8Array): Promise<(v10019.Call | undefined)>
    getAll(): Promise<v10019.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10019.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10019.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10019.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10019.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10019.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10025 {
    get(key: Uint8Array): Promise<(v10025.Call | undefined)>
    getAll(): Promise<v10025.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10025.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10025.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10025.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10025.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10025.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10029 {
    get(key: Uint8Array): Promise<(v10029.Call | undefined)>
    getAll(): Promise<v10029.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10029.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10029.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10029.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10029.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10029.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10030 {
    get(key: Uint8Array): Promise<(v10030.Call | undefined)>
    getAll(): Promise<v10030.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10030.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10030.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10030.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10030.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10030.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10032 {
    get(key: Uint8Array): Promise<(v10032.Call | undefined)>
    getAll(): Promise<v10032.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10032.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10032.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10032.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10032.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10032.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10034 {
    get(key: Uint8Array): Promise<(v10034.Call | undefined)>
    getAll(): Promise<v10034.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10034.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10034.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10034.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10034.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10034.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10037 {
    get(key: Uint8Array): Promise<(v10037.Call | undefined)>
    getAll(): Promise<v10037.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10037.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10037.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10037.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10037.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10037.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10038 {
    get(key: Uint8Array): Promise<(v10038.Call | undefined)>
    getAll(): Promise<v10038.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10038.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10038.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10038.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10038.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10038.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10040 {
    get(key: Uint8Array): Promise<(v10040.Call | undefined)>
    getAll(): Promise<v10040.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10040.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10040.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10040.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10040.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10040.Call][]>
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
    get isV200(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV200(): TreasuryProposalsStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV200 {
    get(key: number): Promise<(v200.Proposal | undefined)>
    getAll(): Promise<v200.Proposal[]>
    getMany(keys: number[]): Promise<(v200.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v200.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v200.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v200.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v200.Proposal][]>
}
