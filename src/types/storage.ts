import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1 from './v1'
import * as v2 from './v2'
import * as v6 from './v6'
import * as v12 from './v12'
import * as v14 from './v14'
import * as v15 from './v15'
import * as v20 from './v20'

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
    get isV12(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV12(): CouncilMembersStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV12 {
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
    get isV12(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV12(): CouncilProposalCountStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV12 {
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
    get isV12(): boolean {
        return this.getTypeHash() === '3b99318b67f9823cf52af15c9917b7d43f0017cda83056b622045d0510e6a2b3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV12(): CouncilProposalOfStorageV12 {
        assert(this.isV12)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV14(): boolean {
        return this.getTypeHash() === 'cc82b024f051ee550269d57a874c8d90b2905d9eec39c972d2a3771d6918c5ab'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV14(): CouncilProposalOfStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'ce4ea9b8594825358b3ccb1527385336cbfe4f96be5e60744390ca72fd5963a9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV15(): CouncilProposalOfStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV20(): boolean {
        return this.getTypeHash() === '2459ddcf13f8cf9f64e5e797196cd00917ff975c51231ead10f1626afddd89b1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV20(): CouncilProposalOfStorageV20 {
        assert(this.isV20)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV12 {
    get(key: Uint8Array): Promise<(v12.Call | undefined)>
    getAll(): Promise<v12.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v12.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v12.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v12.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v12.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v12.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV14 {
    get(key: Uint8Array): Promise<(v14.Call | undefined)>
    getAll(): Promise<v14.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v14.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v14.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v14.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v14.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v14.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV15 {
    get(key: Uint8Array): Promise<(v15.Call | undefined)>
    getAll(): Promise<v15.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v15.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v15.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v15.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v15.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v15.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV20 {
    get(key: Uint8Array): Promise<(v20.Call | undefined)>
    getAll(): Promise<v20.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v20.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v20.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v20.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v20.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v20.Call][]>
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
    get isV12(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV12(): DemocracyPreimagesStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV12 {
    get(key: Uint8Array): Promise<(v12.PreimageStatus | undefined)>
    getAll(): Promise<v12.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v12.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v12.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v12.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v12.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v12.PreimageStatus][]>
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
    get isV12(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV12(): DemocracyPublicPropCountStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV12 {
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
    get isV12(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV12(): DemocracyPublicPropsStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV12 {
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
    get isV12(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV12(): DemocracyReferendumInfoOfStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV12 {
    get(key: number): Promise<(v12.ReferendumInfo | undefined)>
    getAll(): Promise<v12.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v12.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v12.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v12.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v12.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v12.ReferendumInfo][]>
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
    get isV12(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV12(): PreimagePreimageForStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV12 {
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
    get isV12(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV12(): PreimageStatusForStorageV12 {
        assert(this.isV12)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV12 {
    get(key: Uint8Array): Promise<(v12.RequestStatus | undefined)>
    getAll(): Promise<v12.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v12.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v12.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v12.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v12.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v12.RequestStatus][]>
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
        return this.getTypeHash() === 'e7292361ffe36a7c51a5c6816ee08ec9411245b802d5d44921b7ea17f9818165'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1(): SystemAccountStorageV1 {
        assert(this.isV1)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2(): boolean {
        return this.getTypeHash() === '91bc6a5b78552e457a4d3e7b3e6cc5bd4a4c7cba2042ddcf99224540620ea755'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2(): SystemAccountStorageV2 {
        assert(this.isV2)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'aa06c19d9d41ed580d1eff957992ace49a8919d1b9448aea0f5d4c8300bbb050'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV6(): SystemAccountStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV12(): boolean {
        return this.getTypeHash() === '1617cec3fa64aeb01d9772ac124bd28bd5f8537cd97143e5ee2f17b6295376c5'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV12(): SystemAccountStorageV12 {
        assert(this.isV12)
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

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2 {
    get(key: Uint8Array): Promise<v2.AccountInfo>
    getAll(): Promise<v2.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV6 {
    get(key: Uint8Array): Promise<v6.AccountInfo>
    getAll(): Promise<v6.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v6.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v6.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v6.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v6.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v6.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV12 {
    get(key: Uint8Array): Promise<v12.AccountInfo>
    getAll(): Promise<v12.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v12.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v12.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v12.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v12.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v12.AccountInfo][]>
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
    get isV12(): boolean {
        return this.getTypeHash() === '3b99318b67f9823cf52af15c9917b7d43f0017cda83056b622045d0510e6a2b3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV12(): TechnicalCommitteeProposalOfStorageV12 {
        assert(this.isV12)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV14(): boolean {
        return this.getTypeHash() === 'cc82b024f051ee550269d57a874c8d90b2905d9eec39c972d2a3771d6918c5ab'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV14(): TechnicalCommitteeProposalOfStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'ce4ea9b8594825358b3ccb1527385336cbfe4f96be5e60744390ca72fd5963a9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV15(): TechnicalCommitteeProposalOfStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV20(): boolean {
        return this.getTypeHash() === '2459ddcf13f8cf9f64e5e797196cd00917ff975c51231ead10f1626afddd89b1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV20(): TechnicalCommitteeProposalOfStorageV20 {
        assert(this.isV20)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV12 {
    get(key: Uint8Array): Promise<(v12.Call | undefined)>
    getAll(): Promise<v12.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v12.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v12.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v12.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v12.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v12.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV14 {
    get(key: Uint8Array): Promise<(v14.Call | undefined)>
    getAll(): Promise<v14.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v14.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v14.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v14.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v14.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v14.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV15 {
    get(key: Uint8Array): Promise<(v15.Call | undefined)>
    getAll(): Promise<v15.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v15.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v15.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v15.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v15.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v15.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV20 {
    get(key: Uint8Array): Promise<(v20.Call | undefined)>
    getAll(): Promise<v20.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v20.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v20.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v20.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v20.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v20.Call][]>
}
