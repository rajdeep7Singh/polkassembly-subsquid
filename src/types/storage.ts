import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v40 from './v40'
import * as v47 from './v47'
import * as v52 from './v52'
import * as v155 from './v155'
import * as v159 from './v159'
import * as v200 from './v200'
import * as v300 from './v300'
import * as v400 from './v400'
import * as v501 from './v501'
import * as v600 from './v600'
import * as v701 from './v701'
import * as v800 from './v800'
import * as v900 from './v900'
import * as v1900 from './v1900'
import * as v2000 from './v2000'
import * as v2100 from './v2100'
import * as v2201 from './v2201'
import * as v2301 from './v2301'
import * as v2500 from './v2500'

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
    get isV40(): boolean {
        return this.getTypeHash() === '17669917f628c38832645ae9b39d0bab5a99964e3446b9b2ef904cad2f4bd653'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV40(): BalancesAccountStorageV40 {
        assert(this.isV40)
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
    get isV2500(): boolean {
        return this.getTypeHash() === 'ee2115b027893d1c56456aa70c4c809a607243f8ae340fcc3174a4fda6b5fa60'
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
    get asV2500(): BalancesAccountStorageV2500 {
        assert(this.isV2500)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV40 {
    get(key: Uint8Array): Promise<v40.AccountData>
    getAll(): Promise<v40.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v40.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v40.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v40.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v40.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v40.AccountData][]>
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
export interface BalancesAccountStorageV2500 {
    get(key: Uint8Array): Promise<v2500.AccountData>
    getAll(): Promise<v2500.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v2500.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2500.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2500.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2500.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2500.AccountData][]>
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
    get isV2201(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV2201(): BalancesInactiveIssuanceStorageV2201 {
        assert(this.isV2201)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV2201 {
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
    get isV40(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV40(): BalancesTotalIssuanceStorageV40 {
        assert(this.isV40)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV40 {
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
    get isV1900(): boolean {
        return this.getTypeHash() === '8c1164ab39d3c5f285bf12dfaebbe55282a793f2153b615f061f5e7f498039bd'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV1900(): ConvictionVotingVotingForStorageV1900 {
        assert(this.isV1900)
        return this as any
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV2201(): boolean {
        return this.getTypeHash() === '9723a5b8948dbd837b6b519d58e5bcf4305ffd6e57bcda3af8564bfa065eed44'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV2201(): ConvictionVotingVotingForStorageV2201 {
        assert(this.isV2201)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV1900 {
    get(key1: Uint8Array, key2: number): Promise<v1900.Type_535>
    getAll(): Promise<v1900.Type_535[]>
    getMany(keys: [Uint8Array, number][]): Promise<v1900.Type_535[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v1900.Type_535][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v1900.Type_535][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v1900.Type_535][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v1900.Type_535][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v1900.Type_535][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v1900.Type_535][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV2201 {
    get(key1: Uint8Array, key2: number): Promise<v2201.Type_544>
    getAll(): Promise<v2201.Type_544[]>
    getMany(keys: [Uint8Array, number][]): Promise<v2201.Type_544[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v2201.Type_544][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v2201.Type_544][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v2201.Type_544][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v2201.Type_544][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v2201.Type_544][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v2201.Type_544][]>
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
    get isV40(): boolean {
        return this.getTypeHash() === '4cfebf1c3ec4cbc591b367aceaef472ee18ccb1d7b4a188ca5284e65390f4835'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV40(): DemocracyPreimagesStorageV40 {
        assert(this.isV40)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV900(): DemocracyPreimagesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV40 {
    get(key: Uint8Array): Promise<(v40.PreimageStatus | undefined)>
    getAll(): Promise<v40.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v40.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v40.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v40.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v40.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v40.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV900 {
    get(key: Uint8Array): Promise<(v900.PreimageStatus | undefined)>
    getAll(): Promise<v900.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v900.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
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
    get isV40(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV40(): DemocracyPublicPropCountStorageV40 {
        assert(this.isV40)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV40 {
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
    get isV40(): boolean {
        return this.getTypeHash() === '50ae2b6d7ba179c0ff783cad2f9c19cbf1f250422f7e7b7cca7df80c63db8f09'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV40(): DemocracyPublicPropsStorageV40 {
        assert(this.isV40)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ce1d22fdfbf2ba6bbd40606fd5bbb2dd09374a075a2781ce2f2306ae8bc75205'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV2000(): DemocracyPublicPropsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV40 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV2000 {
    get(): Promise<[number, v2000.Bounded, Uint8Array][]>
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
    get isV40(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV40(): DemocracyReferendumInfoOfStorageV40 {
        assert(this.isV40)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV900(): DemocracyReferendumInfoOfStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV2000(): DemocracyReferendumInfoOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV40 {
    get(key: number): Promise<(v40.ReferendumInfo | undefined)>
    getAll(): Promise<v40.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v40.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v40.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v40.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v40.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v40.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV900 {
    get(key: number): Promise<(v900.ReferendumInfo | undefined)>
    getAll(): Promise<v900.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v900.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV2000 {
    get(key: number): Promise<(v2000.ReferendumInfo | undefined)>
    getAll(): Promise<v2000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v2000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
}

export class EthereumCurrentTransactionStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentTransactionStatuses'
    }

    /**
     *  The current transaction statuses.
     */
    get isV40(): boolean {
        return this.getTypeHash() === '258bd41865de2f8cfa5372dc3a38af8b5110322e5098a04f50c36a5195a4c893'
    }

    /**
     *  The current transaction statuses.
     */
    get asV40(): EthereumCurrentTransactionStatusesStorageV40 {
        assert(this.isV40)
        return this as any
    }

    /**
     *  The current transaction statuses.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'e42d9c1a7dbca2e4e0301367b0c021b885fe9bf9ce8eadadb8b48112a96cf49e'
    }

    /**
     *  The current transaction statuses.
     */
    get asV900(): EthereumCurrentTransactionStatusesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV40 {
    get(): Promise<(v40.EthTransactionStatus[] | undefined)>
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV900 {
    get(): Promise<(v900.TransactionStatus[] | undefined)>
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
    get isV47(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV47(): Instance1CollectiveMembersStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV47 {
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
    get isV47(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV47(): Instance1CollectiveProposalCountStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV47 {
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
    get isV47(): boolean {
        return this.getTypeHash() === 'd48127d2e9137407288bf17e7c524f740e899b2c44d2a7b48698e8ce353f8848'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV47(): Instance1CollectiveProposalOfStorageV47 {
        assert(this.isV47)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'f8358744773d62a9d22663727c01c32549f65b859dc8260f1e895988a699b3bf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV52(): Instance1CollectiveProposalOfStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '6c3430bb515a76b69cb9445eed4e2b361d0358942be65e2a2cc5c247136fddf4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV155(): Instance1CollectiveProposalOfStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV159(): boolean {
        return this.getTypeHash() === 'c2535829681739d511aa717dcd43e2f7d060f65d9547f908a55c5707500ca6e5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV159(): Instance1CollectiveProposalOfStorageV159 {
        assert(this.isV159)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '86b2a01b4b174c573b5fbc141ffec9b6e2b2cf092a7bf7b7fd59e919a819ac57'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): Instance1CollectiveProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV300(): boolean {
        return this.getTypeHash() === 'c2535829681739d511aa717dcd43e2f7d060f65d9547f908a55c5707500ca6e5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV300(): Instance1CollectiveProposalOfStorageV300 {
        assert(this.isV300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV400(): boolean {
        return this.getTypeHash() === '0b8312de089cadb50e8a5dbf4401b577622c1a7cfbdf974f41016604e3d0554e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV400(): Instance1CollectiveProposalOfStorageV400 {
        assert(this.isV400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV501(): boolean {
        return this.getTypeHash() === 'db40246edec28b1903f81cf287d8d6b9b21ff4de4a2e2eb25531a7b269a96744'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV501(): Instance1CollectiveProposalOfStorageV501 {
        assert(this.isV501)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === '0b8312de089cadb50e8a5dbf4401b577622c1a7cfbdf974f41016604e3d0554e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): Instance1CollectiveProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV701(): boolean {
        return this.getTypeHash() === '740845978a93a8a85ed14efa13e6e9615b1200c298931ca5b4afb1567f2dcc5d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV701(): Instance1CollectiveProposalOfStorageV701 {
        assert(this.isV701)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV800(): boolean {
        return this.getTypeHash() === '8a2f2f534bf16315ba3eaaed9278e8ce9fedd063a9d153932762c9ab6fb7ce22'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV800(): Instance1CollectiveProposalOfStorageV800 {
        assert(this.isV800)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV47 {
    get(key: Uint8Array): Promise<(v47.Proposal | undefined)>
    getAll(): Promise<v47.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v47.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v47.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v47.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v47.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v47.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV52 {
    get(key: Uint8Array): Promise<(v52.Proposal | undefined)>
    getAll(): Promise<v52.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v52.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v52.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v52.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v52.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v52.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV155 {
    get(key: Uint8Array): Promise<(v155.Proposal | undefined)>
    getAll(): Promise<v155.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v155.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV159 {
    get(key: Uint8Array): Promise<(v159.Proposal | undefined)>
    getAll(): Promise<v159.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v159.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV200 {
    get(key: Uint8Array): Promise<(v200.Proposal | undefined)>
    getAll(): Promise<v200.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV300 {
    get(key: Uint8Array): Promise<(v300.Proposal | undefined)>
    getAll(): Promise<v300.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v300.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v300.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v300.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v300.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v300.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV400 {
    get(key: Uint8Array): Promise<(v400.Proposal | undefined)>
    getAll(): Promise<v400.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v400.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV501 {
    get(key: Uint8Array): Promise<(v501.Proposal | undefined)>
    getAll(): Promise<v501.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v501.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Proposal | undefined)>
    getAll(): Promise<v600.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV701 {
    get(key: Uint8Array): Promise<(v701.Proposal | undefined)>
    getAll(): Promise<v701.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v701.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV800 {
    get(key: Uint8Array): Promise<(v800.Proposal | undefined)>
    getAll(): Promise<v800.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v800.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v800.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v800.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v800.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v800.Proposal][]>
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
    get isV1900(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV1900(): PreimagePreimageForStorageV1900 {
        assert(this.isV1900)
        return this as any
    }

    get isV2000(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV2000(): PreimagePreimageForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV1900 {
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

export interface PreimagePreimageForStorageV2000 {
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
    get isV1900(): boolean {
        return this.getTypeHash() === 'a441b1aa6fac392c566cf52cbd4d9950e3c794632605a828429197db97e04949'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1900(): PreimageStatusForStorageV1900 {
        assert(this.isV1900)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '9a33bfa28cc58666dd8311814d92644200db23ab4156aa19d72d802536a0f95f'
    }

    /**
     *  The request status of a given hash.
     */
    get asV2000(): PreimageStatusForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV1900 {
    get(key: Uint8Array): Promise<(v1900.RequestStatus | undefined)>
    getAll(): Promise<v1900.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1900.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1900.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1900.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1900.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1900.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.RequestStatus | undefined)>
    getAll(): Promise<v2000.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
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
    get isV1900(): boolean {
        return this.getTypeHash() === '0adda90d9f31e0c617a1e0f20edeb66fa8a049c4e0257d05a63b5b9d5e8cfa2d'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1900(): ReferendaReferendumInfoForStorageV1900 {
        assert(this.isV1900)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'aa29ea2df895480112bbe5e1e507c4798ac3c0752f2bb0cc4cd0fc997760c5e0'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV2000(): ReferendaReferendumInfoForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV2100(): boolean {
        return this.getTypeHash() === 'cafd3daa38acd69064af51bb89370940feeb3b34dcfdefba590e61fc80ccb3f0'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV2100(): ReferendaReferendumInfoForStorageV2100 {
        assert(this.isV2100)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV2201(): boolean {
        return this.getTypeHash() === 'd933494b6e2f78325293eae9a78d80c6b9b3971cec8c41bc5f23614f90584ac9'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV2201(): ReferendaReferendumInfoForStorageV2201 {
        assert(this.isV2201)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV2301(): boolean {
        return this.getTypeHash() === '70abc042c12c426f6339dc39d29aa299be51323720151e94be67d887bb2a0157'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV2301(): ReferendaReferendumInfoForStorageV2301 {
        assert(this.isV2301)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV1900 {
    get(key: number): Promise<(v1900.Type_547 | undefined)>
    getAll(): Promise<v1900.Type_547[]>
    getMany(keys: number[]): Promise<(v1900.Type_547 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1900.Type_547][]>
    getPairs(key: number): Promise<[k: number, v: v1900.Type_547][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1900.Type_547][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1900.Type_547][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV2000 {
    get(key: number): Promise<(v2000.Type_552 | undefined)>
    getAll(): Promise<v2000.Type_552[]>
    getMany(keys: number[]): Promise<(v2000.Type_552 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2000.Type_552][]>
    getPairs(key: number): Promise<[k: number, v: v2000.Type_552][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2000.Type_552][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2000.Type_552][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV2100 {
    get(key: number): Promise<(v2100.Type_556 | undefined)>
    getAll(): Promise<v2100.Type_556[]>
    getMany(keys: number[]): Promise<(v2100.Type_556 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2100.Type_556][]>
    getPairs(key: number): Promise<[k: number, v: v2100.Type_556][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2100.Type_556][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2100.Type_556][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV2201 {
    get(key: number): Promise<(v2201.Type_556 | undefined)>
    getAll(): Promise<v2201.Type_556[]>
    getMany(keys: number[]): Promise<(v2201.Type_556 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2201.Type_556][]>
    getPairs(key: number): Promise<[k: number, v: v2201.Type_556][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2201.Type_556][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2201.Type_556][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV2301 {
    get(key: number): Promise<(v2301.Type_571 | undefined)>
    getAll(): Promise<v2301.Type_571[]>
    getMany(keys: number[]): Promise<(v2301.Type_571 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2301.Type_571][]>
    getPairs(key: number): Promise<[k: number, v: v2301.Type_571][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2301.Type_571][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2301.Type_571][]>
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
    get isV40(): boolean {
        return this.getTypeHash() === 'a83a7372c51978aa017bd09db5672f3ea3957f0882455abd9726ac2b6d4b61dc'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV40(): SystemAccountStorageV40 {
        assert(this.isV40)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2500(): boolean {
        return this.getTypeHash() === '7983bbc1ae8edba4f5e13a7cd91a68076c89d6d422e9438dacd92a53008c3751'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2500(): SystemAccountStorageV2500 {
        assert(this.isV2500)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV40 {
    get(key: Uint8Array): Promise<v40.AccountInfo>
    getAll(): Promise<v40.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v40.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v40.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v40.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v40.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v40.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2500 {
    get(key: Uint8Array): Promise<v2500.AccountInfo>
    getAll(): Promise<v2500.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2500.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2500.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2500.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2500.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2500.AccountInfo][]>
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
    get isV47(): boolean {
        return this.getTypeHash() === '5809021f1759a617a0966e43472afb05550ea26070ada63315ba0f5aab3dcf85'
    }

    /**
     *  Proposals that have been made.
     */
    get asV47(): TreasuryProposalsStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV47 {
    get(key: number): Promise<(v47.TreasuryProposal | undefined)>
    getAll(): Promise<v47.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v47.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v47.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v47.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v47.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v47.TreasuryProposal][]>
}
