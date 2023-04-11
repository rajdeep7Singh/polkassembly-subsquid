import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v16 from './v16'
import * as v25 from './v25'
import * as v38 from './v38'
import * as v43 from './v43'
import * as v55 from './v55'
import * as v65 from './v65'
import * as v69 from './v69'
import * as v76 from './v76'
import * as v81 from './v81'
import * as v88 from './v88'
import * as v92 from './v92'

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
    get isV16(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV16(): BalancesAccountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV16 {
    get(key: Uint8Array): Promise<v16.AccountData>
    getAll(): Promise<v16.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v16.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.AccountData][]>
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
    get isV16(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV16(): BalancesTotalIssuanceStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV16 {
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
    get isV25(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV25(): CouncilMembersStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV25 {
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
    get isV25(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV25(): CouncilProposalCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV25 {
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
    get isV25(): boolean {
        return this.getTypeHash() === 'f15f18dbb29d2b02a4587232b780e25a2eb024284970ccbd6450ac7a1d09d3ea'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): CouncilProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '1ac560650690d36290194953cc63fa6a0a40e9a291bbf1fd8d8822aa80283a2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV38(): CouncilProposalOfStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '6c32784600097763396a9d6ed2cdb8fea2f274fb6bdcdd593ebc3e37e61555d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43(): CouncilProposalOfStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'dc20f54a7aa8bd158193ca1cd81811d531a2f6dd81a31ec231d37a6d502c6eaf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV55(): CouncilProposalOfStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV65(): boolean {
        return this.getTypeHash() === '43ec1e4f4a6ba0edbbca67ee06379cba4e8a527fa11bad2dee2fd27970a4dd24'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV65(): CouncilProposalOfStorageV65 {
        assert(this.isV65)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV69(): boolean {
        return this.getTypeHash() === '6a9f8ef74fb009d3a1fd9eab8e5fd5b140259527353a802492fd8805ea46346d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV69(): CouncilProposalOfStorageV69 {
        assert(this.isV69)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV76(): boolean {
        return this.getTypeHash() === '3139bede1891fa32ec68cbfda59e169e3a8ec9dc8a98058e02ac0f7cae6589b2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV76(): CouncilProposalOfStorageV76 {
        assert(this.isV76)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'c23fea02087dc5044b91542a294db489c177d079476732e191c6595898fed063'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV81(): CouncilProposalOfStorageV81 {
        assert(this.isV81)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV88(): boolean {
        return this.getTypeHash() === 'dc65debe57b5d6c4ab77c91c888de66fabe2402be7101e21c5e7aaac19057aaa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV88(): CouncilProposalOfStorageV88 {
        assert(this.isV88)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV92(): boolean {
        return this.getTypeHash() === 'f8cf65de9428cc6bd0aeb1531284476841aff04b72993be0d4f53821b956df70'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV92(): CouncilProposalOfStorageV92 {
        assert(this.isV92)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Call | undefined)>
    getAll(): Promise<v25.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV38 {
    get(key: Uint8Array): Promise<(v38.Call | undefined)>
    getAll(): Promise<v38.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v38.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV43 {
    get(key: Uint8Array): Promise<(v43.Call | undefined)>
    getAll(): Promise<v43.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.Call | undefined)>
    getAll(): Promise<v55.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v55.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV65 {
    get(key: Uint8Array): Promise<(v65.Call | undefined)>
    getAll(): Promise<v65.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v65.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV69 {
    get(key: Uint8Array): Promise<(v69.Call | undefined)>
    getAll(): Promise<v69.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v69.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV76 {
    get(key: Uint8Array): Promise<(v76.Call | undefined)>
    getAll(): Promise<v76.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v76.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV81 {
    get(key: Uint8Array): Promise<(v81.Call | undefined)>
    getAll(): Promise<v81.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v81.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV88 {
    get(key: Uint8Array): Promise<(v88.Call | undefined)>
    getAll(): Promise<v88.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v88.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v88.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v88.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v88.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v88.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV92 {
    get(key: Uint8Array): Promise<(v92.Call | undefined)>
    getAll(): Promise<v92.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v92.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v92.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v92.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v92.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v92.Call][]>
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
    get isV16(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV16(): DemocracyPreimagesStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV25(): DemocracyPreimagesStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV16 {
    get(key: Uint8Array): Promise<(v16.PreimageStatus | undefined)>
    getAll(): Promise<v16.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v16.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV25 {
    get(key: Uint8Array): Promise<(v25.PreimageStatus | undefined)>
    getAll(): Promise<v25.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v25.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.PreimageStatus][]>
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
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV16(): DemocracyPublicPropCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV16 {
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
    get isV16(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV16(): DemocracyPublicPropsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV16 {
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
    get isV16(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV16(): DemocracyReferendumInfoOfStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV25(): DemocracyReferendumInfoOfStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV16 {
    get(key: number): Promise<(v16.ReferendumInfo | undefined)>
    getAll(): Promise<v16.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v16.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v16.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v16.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v16.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v16.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV25 {
    get(key: number): Promise<(v25.ReferendumInfo | undefined)>
    getAll(): Promise<v25.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v25.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v25.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v25.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v25.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v25.ReferendumInfo][]>
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
    get isV38(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV38(): PreimagePreimageForStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV38 {
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
    get isV38(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV38(): PreimageStatusForStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV38 {
    get(key: Uint8Array): Promise<(v38.RequestStatus | undefined)>
    getAll(): Promise<v38.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v38.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.RequestStatus][]>
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
    get isV16(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV16(): SystemAccountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV16 {
    get(key: Uint8Array): Promise<v16.AccountInfo>
    getAll(): Promise<v16.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v16.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.AccountInfo][]>
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
    get isV25(): boolean {
        return this.getTypeHash() === 'f15f18dbb29d2b02a4587232b780e25a2eb024284970ccbd6450ac7a1d09d3ea'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): TechnicalCommitteeProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '1ac560650690d36290194953cc63fa6a0a40e9a291bbf1fd8d8822aa80283a2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV38(): TechnicalCommitteeProposalOfStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '6c32784600097763396a9d6ed2cdb8fea2f274fb6bdcdd593ebc3e37e61555d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43(): TechnicalCommitteeProposalOfStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'dc20f54a7aa8bd158193ca1cd81811d531a2f6dd81a31ec231d37a6d502c6eaf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV55(): TechnicalCommitteeProposalOfStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV65(): boolean {
        return this.getTypeHash() === '43ec1e4f4a6ba0edbbca67ee06379cba4e8a527fa11bad2dee2fd27970a4dd24'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV65(): TechnicalCommitteeProposalOfStorageV65 {
        assert(this.isV65)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV69(): boolean {
        return this.getTypeHash() === '6a9f8ef74fb009d3a1fd9eab8e5fd5b140259527353a802492fd8805ea46346d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV69(): TechnicalCommitteeProposalOfStorageV69 {
        assert(this.isV69)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV76(): boolean {
        return this.getTypeHash() === '3139bede1891fa32ec68cbfda59e169e3a8ec9dc8a98058e02ac0f7cae6589b2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV76(): TechnicalCommitteeProposalOfStorageV76 {
        assert(this.isV76)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'c23fea02087dc5044b91542a294db489c177d079476732e191c6595898fed063'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV81(): TechnicalCommitteeProposalOfStorageV81 {
        assert(this.isV81)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV88(): boolean {
        return this.getTypeHash() === 'dc65debe57b5d6c4ab77c91c888de66fabe2402be7101e21c5e7aaac19057aaa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV88(): TechnicalCommitteeProposalOfStorageV88 {
        assert(this.isV88)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV92(): boolean {
        return this.getTypeHash() === 'f8cf65de9428cc6bd0aeb1531284476841aff04b72993be0d4f53821b956df70'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV92(): TechnicalCommitteeProposalOfStorageV92 {
        assert(this.isV92)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Call | undefined)>
    getAll(): Promise<v25.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV38 {
    get(key: Uint8Array): Promise<(v38.Call | undefined)>
    getAll(): Promise<v38.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v38.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV43 {
    get(key: Uint8Array): Promise<(v43.Call | undefined)>
    getAll(): Promise<v43.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.Call | undefined)>
    getAll(): Promise<v55.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v55.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV65 {
    get(key: Uint8Array): Promise<(v65.Call | undefined)>
    getAll(): Promise<v65.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v65.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV69 {
    get(key: Uint8Array): Promise<(v69.Call | undefined)>
    getAll(): Promise<v69.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v69.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV76 {
    get(key: Uint8Array): Promise<(v76.Call | undefined)>
    getAll(): Promise<v76.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v76.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV81 {
    get(key: Uint8Array): Promise<(v81.Call | undefined)>
    getAll(): Promise<v81.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v81.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV88 {
    get(key: Uint8Array): Promise<(v88.Call | undefined)>
    getAll(): Promise<v88.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v88.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v88.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v88.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v88.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v88.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV92 {
    get(key: Uint8Array): Promise<(v92.Call | undefined)>
    getAll(): Promise<v92.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v92.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v92.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v92.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v92.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v92.Call][]>
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
    get isV25(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV25(): TipsReasonsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV25 {
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
    get isV25(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV25(): TipsTipsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV25 {
    get(key: Uint8Array): Promise<(v25.OpenTip | undefined)>
    getAll(): Promise<v25.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v25.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.OpenTip][]>
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
    get isV16(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV16(): TreasuryProposalsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV16 {
    get(key: number): Promise<(v16.TreasuryProposal | undefined)>
    getAll(): Promise<v16.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v16.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v16.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v16.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v16.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v16.TreasuryProposal][]>
}
