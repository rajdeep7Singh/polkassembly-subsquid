import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v100 from './v100'
import * as v108 from './v108'
import * as v115 from './v115'
import * as v125 from './v125'
import * as v138 from './v138'

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
    get isV100(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV100(): BalancesAccountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
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
    get isV108(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV108(): CouncilMembersStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV108 {
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
    get isV108(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV108(): CouncilProposalCountStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV108 {
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
    get isV108(): boolean {
        return this.getTypeHash() === 'bfc06c27f0a67a5d0b88023ef9f2ea0709b0385bb6d97afce41e87711ba65719'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV108(): CouncilProposalOfStorageV108 {
        assert(this.isV108)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '4e55a1d1db147e15ea55ddb7762805919d11dd4150336b397c8db82495cfc1c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV115(): CouncilProposalOfStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV125(): boolean {
        return this.getTypeHash() === '91ea66f9536c1a58a46c0e174f160765775162108d884c478546e57103a55c58'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV125(): CouncilProposalOfStorageV125 {
        assert(this.isV125)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV138(): boolean {
        return this.getTypeHash() === 'a6d87090d71c3a87c6fb2103391d7b97ed14018bafaafc294480c52ce8a17732'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV138(): CouncilProposalOfStorageV138 {
        assert(this.isV138)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV108 {
    get(key: Uint8Array): Promise<(v108.Call | undefined)>
    getAll(): Promise<v108.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v108.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v108.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v108.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v108.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v108.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV115 {
    get(key: Uint8Array): Promise<(v115.Call | undefined)>
    getAll(): Promise<v115.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v115.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV125 {
    get(key: Uint8Array): Promise<(v125.Call | undefined)>
    getAll(): Promise<v125.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v125.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV138 {
    get(key: Uint8Array): Promise<(v138.Call | undefined)>
    getAll(): Promise<v138.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v138.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v138.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v138.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v138.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v138.Call][]>
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
    get isV108(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV108(): DemocracyPreimagesStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV108 {
    get(key: Uint8Array): Promise<(v108.PreimageStatus | undefined)>
    getAll(): Promise<v108.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v108.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v108.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v108.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v108.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v108.PreimageStatus][]>
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
    get isV108(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV108(): DemocracyPublicPropCountStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV108 {
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
    get isV108(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV108(): DemocracyPublicPropsStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV108 {
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
    get isV108(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV108(): DemocracyReferendumInfoOfStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV108 {
    get(key: number): Promise<(v108.ReferendumInfo | undefined)>
    getAll(): Promise<v108.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v108.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v108.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v108.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v108.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v108.ReferendumInfo][]>
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
    get isV108(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV108(): PreimagePreimageForStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV108 {
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
    get isV108(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV108(): PreimageStatusForStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV108 {
    get(key: Uint8Array): Promise<(v108.RequestStatus | undefined)>
    getAll(): Promise<v108.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v108.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v108.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v108.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v108.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v108.RequestStatus][]>
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
    get isV108(): boolean {
        return this.getTypeHash() === 'bfc06c27f0a67a5d0b88023ef9f2ea0709b0385bb6d97afce41e87711ba65719'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV108(): TechnicalCommitteeProposalOfStorageV108 {
        assert(this.isV108)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '4e55a1d1db147e15ea55ddb7762805919d11dd4150336b397c8db82495cfc1c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV115(): TechnicalCommitteeProposalOfStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV125(): boolean {
        return this.getTypeHash() === '91ea66f9536c1a58a46c0e174f160765775162108d884c478546e57103a55c58'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV125(): TechnicalCommitteeProposalOfStorageV125 {
        assert(this.isV125)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV138(): boolean {
        return this.getTypeHash() === 'a6d87090d71c3a87c6fb2103391d7b97ed14018bafaafc294480c52ce8a17732'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV138(): TechnicalCommitteeProposalOfStorageV138 {
        assert(this.isV138)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV108 {
    get(key: Uint8Array): Promise<(v108.Call | undefined)>
    getAll(): Promise<v108.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v108.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v108.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v108.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v108.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v108.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV115 {
    get(key: Uint8Array): Promise<(v115.Call | undefined)>
    getAll(): Promise<v115.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v115.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV125 {
    get(key: Uint8Array): Promise<(v125.Call | undefined)>
    getAll(): Promise<v125.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v125.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV138 {
    get(key: Uint8Array): Promise<(v138.Call | undefined)>
    getAll(): Promise<v138.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v138.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v138.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v138.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v138.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v138.Call][]>
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
    get isV108(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV108(): TipsReasonsStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV108 {
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
    get isV108(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV108(): TipsTipsStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV108 {
    get(key: Uint8Array): Promise<(v108.OpenTip | undefined)>
    getAll(): Promise<v108.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v108.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v108.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v108.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v108.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v108.OpenTip][]>
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
