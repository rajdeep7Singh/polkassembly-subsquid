import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v5 from './v5'
import * as v8 from './v8'
import * as v9 from './v9'
import * as v10 from './v10'
import * as v13 from './v13'
import * as v14 from './v14'
import * as v16 from './v16'
import * as v20 from './v20'
import * as v23 from './v23'
import * as kusamaV9280 from './kusamaV9280'
import * as v28 from './v28'
import * as v30 from './v30'
import * as v31 from './v31'

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
    get isV5(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV5(): BalancesAccountStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV5 {
    get(key: Uint8Array): Promise<v5.AccountData>
    getAll(): Promise<v5.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v5.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.AccountData][]>
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
    get isV5(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV5(): BalancesTotalIssuanceStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV5 {
    get(): Promise<bigint>
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
    get isV9(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV9(): DemocracyPreimagesStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV9 {
    get(key: Uint8Array): Promise<(v9.PreimageStatus | undefined)>
    getAll(): Promise<v9.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9.PreimageStatus][]>
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
    get isV9(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV9(): DemocracyPublicPropCountStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV9 {
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
    get isV9(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV9(): DemocracyPublicPropsStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV9 {
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
    get isV9(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9(): DemocracyReferendumInfoOfStorageV9 {
        assert(this.isV9)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9 {
    get(key: number): Promise<(v9.ReferendumInfo | undefined)>
    getAll(): Promise<v9.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9.ReferendumInfo][]>
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
    get isV13(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV13(): PreimagePreimageForStorageV13 {
        assert(this.isV13)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV13 {
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
    get isV13(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV13(): PreimageStatusForStorageV13 {
        assert(this.isV13)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV13 {
    get(key: Uint8Array): Promise<(v13.RequestStatus | undefined)>
    getAll(): Promise<v13.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v13.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.RequestStatus][]>
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
    get isV5(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV5(): SystemAccountStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV5 {
    get(key: Uint8Array): Promise<v5.AccountInfo>
    getAll(): Promise<v5.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v5.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.AccountInfo][]>
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
    get isV5(): boolean {
        return this.getTypeHash() === '06182756f63e86109432887c47d818b08c01cf3fbc31fa16318aa3033b3569c9'
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
    get isV8(): boolean {
        return this.getTypeHash() === 'f5c3e09b6c0b68b53aa038672f049bbff2952e0b9a6a4d4f1332029e532e40ac'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV8(): TechnicalCommitteeProposalOfStorageV8 {
        assert(this.isV8)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '4ccae5d69af66473582db82ec1f17d2d6fa71aec9283dd2e138cd19590f7f7d3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9(): TechnicalCommitteeProposalOfStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10(): boolean {
        return this.getTypeHash() === '17f6c40a7dc5d411eb1df9cd9f8368e86e941c5294e8ff4f214180de67953eda'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10(): TechnicalCommitteeProposalOfStorageV10 {
        assert(this.isV10)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV13(): boolean {
        return this.getTypeHash() === '93c3ce96f3dd14e139d3823d10bb5d40801ef1e776ae1d41b41d014cb8cf7bf0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV13(): TechnicalCommitteeProposalOfStorageV13 {
        assert(this.isV13)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV14(): boolean {
        return this.getTypeHash() === '668b73741cdce937eeebad4dfe473aa2ef60b7b97566738d5d70c3f9475b99f4'
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
    get isV16(): boolean {
        return this.getTypeHash() === '75d308e129ba4da571ff2991226bf5d97dde55c0367d64580e64056b9493662d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV16(): TechnicalCommitteeProposalOfStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV20(): boolean {
        return this.getTypeHash() === '195505306060ff21f1b2002aac68e1f37da38f3d63119b8b6f2ca32c4dfbad2b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV20(): TechnicalCommitteeProposalOfStorageV20 {
        assert(this.isV20)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '3874c783cc14e9f7b63479b452c75d93e7c5ec862dc5c1f2140a292c768dd7e8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV23(): TechnicalCommitteeProposalOfStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isKusamaV9280(): boolean {
        return this.getTypeHash() === '750a19453c5d6b862779f07dd839f3ead1f96948471fe5b1db8cb205da5474c4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asKusamaV9280(): TechnicalCommitteeProposalOfStorageKusamaV9280 {
        assert(this.isKusamaV9280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '3874c783cc14e9f7b63479b452c75d93e7c5ec862dc5c1f2140a292c768dd7e8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV28(): TechnicalCommitteeProposalOfStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '22e4ebc58775196467073f9d10325c028e9b13c96cbb73658402c4ad59083d32'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30(): TechnicalCommitteeProposalOfStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV31(): boolean {
        return this.getTypeHash() === '0a3a00ceb5a920a7c17b9caeb96553411874c0984ec266af5dd33db14a6ac586'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV31(): TechnicalCommitteeProposalOfStorageV31 {
        assert(this.isV31)
        return this as any
    }
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
export interface TechnicalCommitteeProposalOfStorageV8 {
    get(key: Uint8Array): Promise<(v8.Call | undefined)>
    getAll(): Promise<v8.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v8.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v8.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v8.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v8.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v8.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9 {
    get(key: Uint8Array): Promise<(v9.Call | undefined)>
    getAll(): Promise<v9.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10 {
    get(key: Uint8Array): Promise<(v10.Call | undefined)>
    getAll(): Promise<v10.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV13 {
    get(key: Uint8Array): Promise<(v13.Call | undefined)>
    getAll(): Promise<v13.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v13.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.Call][]>
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
export interface TechnicalCommitteeProposalOfStorageV16 {
    get(key: Uint8Array): Promise<(v16.Call | undefined)>
    getAll(): Promise<v16.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v16.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Call][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV23 {
    get(key: Uint8Array): Promise<(v23.Call | undefined)>
    getAll(): Promise<v23.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v23.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v23.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v23.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v23.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v23.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageKusamaV9280 {
    get(key: Uint8Array): Promise<(kusamaV9280.Call | undefined)>
    getAll(): Promise<kusamaV9280.Call[]>
    getMany(keys: Uint8Array[]): Promise<(kusamaV9280.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: kusamaV9280.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: kusamaV9280.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: kusamaV9280.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: kusamaV9280.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV28 {
    get(key: Uint8Array): Promise<(v28.Call | undefined)>
    getAll(): Promise<v28.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v28.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV30 {
    get(key: Uint8Array): Promise<(v30.Call | undefined)>
    getAll(): Promise<v30.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v30.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV31 {
    get(key: Uint8Array): Promise<(v31.Call | undefined)>
    getAll(): Promise<v31.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v31.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v31.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v31.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v31.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v31.Call][]>
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
    get isV5(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV5(): TreasuryProposalsStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV5 {
    get(key: number): Promise<(v5.Proposal | undefined)>
    getAll(): Promise<v5.Proposal[]>
    getMany(keys: number[]): Promise<(v5.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v5.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v5.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v5.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v5.Proposal][]>
}
