import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v2000 from './v2000'
import * as v2011 from './v2011'
import * as v2020 from './v2020'
import * as v2021 from './v2021'
import * as v2022 from './v2022'
import * as v2032 from './v2032'
import * as v2033 from './v2033'
import * as v2034 from './v2034'
import * as v2042 from './v2042'
import * as v2050 from './v2050'
import * as v2060 from './v2060'
import * as v2061 from './v2061'
import * as v2063 from './v2063'
import * as v2064 from './v2064'
import * as v2070 from './v2070'
import * as v2080 from './v2080'
import * as v2091 from './v2091'
import * as v2092 from './v2092'
import * as v2093 from './v2093'
import * as v2094 from './v2094'
import * as v2101 from './v2101'
import * as v2110 from './v2110'
import * as v2120 from './v2120'

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
    get isV2000(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV2000(): BalancesAccountStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV2000 {
    get(key: Uint8Array): Promise<v2000.AccountData>
    getAll(): Promise<v2000.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v2000.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.AccountData][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV2000(): BalancesTotalIssuanceStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV2000 {
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
    get isV2000(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV2000(): BountiesBountiesStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV2000 {
    get(key: number): Promise<(v2000.Bounty | undefined)>
    getAll(): Promise<v2000.Bounty[]>
    getMany(keys: number[]): Promise<(v2000.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2000.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v2000.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2000.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2000.Bounty][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV2000(): BountiesBountyDescriptionsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV2000 {
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
    get isV2000(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV2000(): DemocracyPreimagesStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.PreimageStatus | undefined)>
    getAll(): Promise<v2000.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.PreimageStatus][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV2000(): DemocracyPublicPropCountStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV2000 {
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
    get isV2000(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV2000(): DemocracyPublicPropsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }

    get isV2110(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    get asV2110(): DemocracyPublicPropsStorageV2110 {
        assert(this.isV2110)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV2000 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

export interface DemocracyPublicPropsStorageV2110 {
    get(): Promise<[number, v2110.Bounded, Uint8Array][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
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

    get isV2110(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    get asV2110(): DemocracyReferendumInfoOfStorageV2110 {
        assert(this.isV2110)
        return this as any
    }
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

export interface DemocracyReferendumInfoOfStorageV2110 {
    get(key: number): Promise<(v2110.ReferendumInfo | undefined)>
    getAll(): Promise<v2110.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v2110.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2110.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v2110.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2110.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2110.ReferendumInfo][]>
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
    get isV2032(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV2032(): PreimagePreimageForStorageV2032 {
        assert(this.isV2032)
        return this as any
    }

    get isV2110(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV2110(): PreimagePreimageForStorageV2110 {
        assert(this.isV2110)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV2032 {
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

export interface PreimagePreimageForStorageV2110 {
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
    get isV2032(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV2032(): PreimageStatusForStorageV2032 {
        assert(this.isV2032)
        return this as any
    }

    get isV2110(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    get asV2110(): PreimageStatusForStorageV2110 {
        assert(this.isV2110)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV2032 {
    get(key: Uint8Array): Promise<(v2032.RequestStatus | undefined)>
    getAll(): Promise<v2032.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2032.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2032.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2032.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2032.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2032.RequestStatus][]>
}

export interface PreimageStatusForStorageV2110 {
    get(key: Uint8Array): Promise<(v2110.RequestStatus | undefined)>
    getAll(): Promise<v2110.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2110.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2110.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2110.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2110.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2110.RequestStatus][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2000(): SystemAccountStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2000 {
    get(key: Uint8Array): Promise<v2000.AccountInfo>
    getAll(): Promise<v2000.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2000.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.AccountInfo][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === '5bb0f7ab07f2fe07ffa2dd974c435f37056f3956795ff0ea181bba24127f1154'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2000(): TechnicalCommitteeProposalOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2011(): boolean {
        return this.getTypeHash() === 'd12dcb671048bd3fcc7c4728867b1277f83494c9d04680587115b0b823ecd65f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2011(): TechnicalCommitteeProposalOfStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2020(): boolean {
        return this.getTypeHash() === 'a5be5b3b3e20f61f84f244d2bdcf0670ff840fd65fcf4e2db8df1b377c032d43'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2020(): TechnicalCommitteeProposalOfStorageV2020 {
        assert(this.isV2020)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2021(): boolean {
        return this.getTypeHash() === '2b74a2588504014e4234753a94d66682cb6563f2b506d22d0cebd87ee7882a25'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2021(): TechnicalCommitteeProposalOfStorageV2021 {
        assert(this.isV2021)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2022(): boolean {
        return this.getTypeHash() === 'ee6aab8a0164a498b164c05f1e42b7a98de319885a6d19691a3ed10ad11d019d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2022(): TechnicalCommitteeProposalOfStorageV2022 {
        assert(this.isV2022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2032(): boolean {
        return this.getTypeHash() === '5ff54f61506b39edb9475c891a9fe2a4165ec659fad1e1427433e83d032c7649'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2032(): TechnicalCommitteeProposalOfStorageV2032 {
        assert(this.isV2032)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2033(): boolean {
        return this.getTypeHash() === 'b251028f87c230a17726a947067927223166a2d67172dd18f6a5e100b7498f39'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2033(): TechnicalCommitteeProposalOfStorageV2033 {
        assert(this.isV2033)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2034(): boolean {
        return this.getTypeHash() === '4f478e7c496c822b5f720fae5273961100338e47ca6a0e8ff37ad11811decd55'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2034(): TechnicalCommitteeProposalOfStorageV2034 {
        assert(this.isV2034)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2042(): boolean {
        return this.getTypeHash() === '834f0b62be464f7b17d9fd7fdfc3c4292376ab91d4e10930f5ac8ba550056e6e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2042(): TechnicalCommitteeProposalOfStorageV2042 {
        assert(this.isV2042)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2050(): boolean {
        return this.getTypeHash() === 'ba52c6e6023e4b8bd5ec53bed88158fb36d4193ac0a1d19a86b2864b79898da2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2050(): TechnicalCommitteeProposalOfStorageV2050 {
        assert(this.isV2050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2060(): boolean {
        return this.getTypeHash() === '99fe0ccf063ef62a3656f9d38fbf253859ad76171700edebdf2919da2a6085ab'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2060(): TechnicalCommitteeProposalOfStorageV2060 {
        assert(this.isV2060)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2061(): boolean {
        return this.getTypeHash() === 'df2d5d6adc4404122c35260dda306533fc4597c076a2fbbc963445ffe9e81aba'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2061(): TechnicalCommitteeProposalOfStorageV2061 {
        assert(this.isV2061)
        return this as any
    }

    get isV2063(): boolean {
        return this.getTypeHash() === '98b67f869f750ba30ac737af44aa25be905457034aaf0d130cd462221d719b56'
    }

    get asV2063(): TechnicalCommitteeProposalOfStorageV2063 {
        assert(this.isV2063)
        return this as any
    }

    get isV2064(): boolean {
        return this.getTypeHash() === '001b69d4f4f38f572c3670cb08c858f65167e61a9924838f4d4439689f24d4c9'
    }

    get asV2064(): TechnicalCommitteeProposalOfStorageV2064 {
        assert(this.isV2064)
        return this as any
    }

    get isV2070(): boolean {
        return this.getTypeHash() === '7b2331bafb10dad9da99946788d45f01cf4fd10301de8b3f828e4b9143d2dbc7'
    }

    get asV2070(): TechnicalCommitteeProposalOfStorageV2070 {
        assert(this.isV2070)
        return this as any
    }

    get isV2080(): boolean {
        return this.getTypeHash() === '49ba433e70ba136670a2ce319781e1c735198557b29c5cb364a1c50cf7b55e30'
    }

    get asV2080(): TechnicalCommitteeProposalOfStorageV2080 {
        assert(this.isV2080)
        return this as any
    }

    get isV2091(): boolean {
        return this.getTypeHash() === '4c135df7ddee268c97445b384ccb4075225cf1d42bcb980d8dc157b6f6fa6239'
    }

    get asV2091(): TechnicalCommitteeProposalOfStorageV2091 {
        assert(this.isV2091)
        return this as any
    }

    get isV2092(): boolean {
        return this.getTypeHash() === '0ee83d7e36bb8827eb383dfe5906de92627751a59575331806e27ab6a47d0101'
    }

    get asV2092(): TechnicalCommitteeProposalOfStorageV2092 {
        assert(this.isV2092)
        return this as any
    }

    get isV2093(): boolean {
        return this.getTypeHash() === '4bbbb6662fff074a46120f449c9476a93956150a449b71d8d8812912884209e8'
    }

    get asV2093(): TechnicalCommitteeProposalOfStorageV2093 {
        assert(this.isV2093)
        return this as any
    }

    get isV2094(): boolean {
        return this.getTypeHash() === '0fb302416858038667765c745dd5f50044ca6f63a876fa5843190ad6331539b4'
    }

    get asV2094(): TechnicalCommitteeProposalOfStorageV2094 {
        assert(this.isV2094)
        return this as any
    }

    get isV2101(): boolean {
        return this.getTypeHash() === 'b52833f62b098440fec392f86dbc61e7d78a2b9ab99ebfa06d398c015410abef'
    }

    get asV2101(): TechnicalCommitteeProposalOfStorageV2101 {
        assert(this.isV2101)
        return this as any
    }

    get isV2110(): boolean {
        return this.getTypeHash() === 'c574c319e433ac14a0fa6def06fa95d961d408ce6ca954b79008b866f7a56f59'
    }

    get asV2110(): TechnicalCommitteeProposalOfStorageV2110 {
        assert(this.isV2110)
        return this as any
    }

    get isV2120(): boolean {
        return this.getTypeHash() === '87446baef5a58aff600efb943bb411e28fb9cbd1a80d87cb24614f95e5bbd2ff'
    }

    get asV2120(): TechnicalCommitteeProposalOfStorageV2120 {
        assert(this.isV2120)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.Call | undefined)>
    getAll(): Promise<v2000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2011 {
    get(key: Uint8Array): Promise<(v2011.Call | undefined)>
    getAll(): Promise<v2011.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2011.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2011.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2011.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2011.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2011.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2020 {
    get(key: Uint8Array): Promise<(v2020.Call | undefined)>
    getAll(): Promise<v2020.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2020.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2020.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2020.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2020.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2020.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2021 {
    get(key: Uint8Array): Promise<(v2021.Call | undefined)>
    getAll(): Promise<v2021.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2021.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2021.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2021.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2021.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2021.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2022 {
    get(key: Uint8Array): Promise<(v2022.Call | undefined)>
    getAll(): Promise<v2022.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2022.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2022.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2022.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2022.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2022.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2032 {
    get(key: Uint8Array): Promise<(v2032.Call | undefined)>
    getAll(): Promise<v2032.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2032.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2032.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2032.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2032.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2032.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2033 {
    get(key: Uint8Array): Promise<(v2033.Call | undefined)>
    getAll(): Promise<v2033.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2033.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2033.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2033.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2033.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2033.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2034 {
    get(key: Uint8Array): Promise<(v2034.Call | undefined)>
    getAll(): Promise<v2034.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2034.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2034.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2034.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2034.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2034.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2042 {
    get(key: Uint8Array): Promise<(v2042.Call | undefined)>
    getAll(): Promise<v2042.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2042.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2042.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2042.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2042.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2042.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2050 {
    get(key: Uint8Array): Promise<(v2050.Call | undefined)>
    getAll(): Promise<v2050.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2050.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2050.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2050.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2050.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2050.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2060 {
    get(key: Uint8Array): Promise<(v2060.Call | undefined)>
    getAll(): Promise<v2060.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2060.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2060.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2060.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2060.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2060.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2061 {
    get(key: Uint8Array): Promise<(v2061.Call | undefined)>
    getAll(): Promise<v2061.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2061.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2061.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2061.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2061.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2061.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2063 {
    get(key: Uint8Array): Promise<(v2063.Call | undefined)>
    getAll(): Promise<v2063.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2063.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2063.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2063.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2063.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2063.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2064 {
    get(key: Uint8Array): Promise<(v2064.Call | undefined)>
    getAll(): Promise<v2064.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2064.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2064.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2064.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2064.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2064.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2070 {
    get(key: Uint8Array): Promise<(v2070.Call | undefined)>
    getAll(): Promise<v2070.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2070.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2070.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2070.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2070.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2070.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2080 {
    get(key: Uint8Array): Promise<(v2080.Call | undefined)>
    getAll(): Promise<v2080.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2080.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2080.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2080.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2080.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2080.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2091 {
    get(key: Uint8Array): Promise<(v2091.Call | undefined)>
    getAll(): Promise<v2091.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2091.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2091.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2091.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2091.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2091.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2092 {
    get(key: Uint8Array): Promise<(v2092.Call | undefined)>
    getAll(): Promise<v2092.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2092.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2092.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2092.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2092.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2092.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2093 {
    get(key: Uint8Array): Promise<(v2093.Call | undefined)>
    getAll(): Promise<v2093.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2093.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2093.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2093.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2093.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2093.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2094 {
    get(key: Uint8Array): Promise<(v2094.Call | undefined)>
    getAll(): Promise<v2094.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2094.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2094.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2094.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2094.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2094.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2101 {
    get(key: Uint8Array): Promise<(v2101.Call | undefined)>
    getAll(): Promise<v2101.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2101.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2101.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2101.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2101.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2101.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2110 {
    get(key: Uint8Array): Promise<(v2110.Call | undefined)>
    getAll(): Promise<v2110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2110.Call][]>
}

export interface TechnicalCommitteeProposalOfStorageV2120 {
    get(key: Uint8Array): Promise<(v2120.Call | undefined)>
    getAll(): Promise<v2120.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2120.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2120.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2120.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2120.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2120.Call][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV2000(): TipsReasonsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV2000 {
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
    get isV2000(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV2000(): TipsTipsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.OpenTip | undefined)>
    getAll(): Promise<v2000.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.OpenTip][]>
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
    get isV2000(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV2000(): TreasuryProposalsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV2000 {
    get(key: number): Promise<(v2000.Proposal | undefined)>
    getAll(): Promise<v2000.Proposal[]>
    getMany(keys: number[]): Promise<(v2000.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2000.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v2000.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2000.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2000.Proposal][]>
}
