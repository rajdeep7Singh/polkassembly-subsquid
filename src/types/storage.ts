import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1000 from './v1000'
import * as v1001 from './v1001'
import * as v1002 from './v1002'
import * as v1003 from './v1003'
import * as v1005 from './v1005'
import * as v1007 from './v1007'
import * as v1008 from './v1008'
import * as v1009 from './v1009'
import * as v1010 from './v1010'
import * as v1011 from './v1011'
import * as v1014 from './v1014'
import * as v1019 from './v1019'
import * as v2001 from './v2001'
import * as v2010 from './v2010'
import * as v2011 from './v2011'
import * as v2012 from './v2012'
import * as v2013 from './v2013'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2032 from './v2032'
import * as v2033 from './v2033'
import * as v2040 from './v2040'
import * as v2041 from './v2041'
import * as v2042 from './v2042'
import * as v2050 from './v2050'
import * as v2051 from './v2051'
import * as v2061 from './v2061'
import * as v2063 from './v2063'
import * as v2064 from './v2064'
import * as v2070 from './v2070'
import * as v2080 from './v2080'
import * as v2083 from './v2083'
import * as v2091 from './v2091'
import * as v2100 from './v2100'
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
    get isV1000(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV1000(): BalancesAccountStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV1000 {
    get(key: Uint8Array): Promise<v1000.AccountData>
    getAll(): Promise<v1000.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1000.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.AccountData][]>
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
    get isV1000(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV1000(): BalancesTotalIssuanceStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV1000 {
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
    get isV1019(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV1019(): BountiesBountiesStorageV1019 {
        assert(this.isV1019)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV1019 {
    get(key: number): Promise<(v1019.Bounty | undefined)>
    getAll(): Promise<v1019.Bounty[]>
    getMany(keys: number[]): Promise<(v1019.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1019.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v1019.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1019.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1019.Bounty][]>
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
    get isV1019(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV1019(): BountiesBountyDescriptionsStorageV1019 {
        assert(this.isV1019)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV1019 {
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
    get isV1001(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1001(): DemocracyPreimagesStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV1019(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1019(): DemocracyPreimagesStorageV1019 {
        assert(this.isV1019)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1001 {
    get(key: Uint8Array): Promise<(v1001.PreimageStatus | undefined)>
    getAll(): Promise<v1001.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1019 {
    get(key: Uint8Array): Promise<(v1019.PreimageStatus | undefined)>
    getAll(): Promise<v1019.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1019.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1019.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1019.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1019.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1019.PreimageStatus][]>
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
    get isV1001(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV1001(): DemocracyPublicPropCountStorageV1001 {
        assert(this.isV1001)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV1001 {
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
    get isV1001(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV1001(): DemocracyPublicPropsStorageV1001 {
        assert(this.isV1001)
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
export interface DemocracyPublicPropsStorageV1001 {
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
    get isV1001(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV1001(): DemocracyReferendumInfoOfStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV1019(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV1019(): DemocracyReferendumInfoOfStorageV1019 {
        assert(this.isV1019)
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
export interface DemocracyReferendumInfoOfStorageV1001 {
    get(key: number): Promise<(v1001.ReferendumInfo | undefined)>
    getAll(): Promise<v1001.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1001.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1001.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV1019 {
    get(key: number): Promise<(v1019.ReferendumInfo | undefined)>
    getAll(): Promise<v1019.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1019.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1019.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1019.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1019.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1019.ReferendumInfo][]>
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

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'cc5a8474305bfd3227ec4e8f3a563615740e373d2d48dcced4f98a6f167b94bd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1000(): Instance2CollectiveProposalOfStorageV1000 {
        assert(this.isV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1001(): boolean {
        return this.getTypeHash() === 'e837e0bb0928ba7647f1d3817b749ae72236be308a58e802fc92e6fb25f3f4d6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1001(): Instance2CollectiveProposalOfStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1002(): boolean {
        return this.getTypeHash() === '8cf89184d92a8c2b0df3f6c095dabddf73ecca27054b0c3bc4c45c46d25525e5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1002(): Instance2CollectiveProposalOfStorageV1002 {
        assert(this.isV1002)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1003(): boolean {
        return this.getTypeHash() === '57efa188df9046a110eef6c649b97ff8a2431eb0f8212025b3391e04ba3bcb10'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1003(): Instance2CollectiveProposalOfStorageV1003 {
        assert(this.isV1003)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1005(): boolean {
        return this.getTypeHash() === 'e9f826e6f10ae19163fda81033a052927e2db6eb8706a64b6c78400a024ca962'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1005(): Instance2CollectiveProposalOfStorageV1005 {
        assert(this.isV1005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1007(): boolean {
        return this.getTypeHash() === 'd9f7db2270e6cd631a52346866495689161e98064866403bf96c435393c497b7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1007(): Instance2CollectiveProposalOfStorageV1007 {
        assert(this.isV1007)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1008(): boolean {
        return this.getTypeHash() === '6564aaade79cdf6dec227c098d25a49a4fd5b4f8409e06259db7369430aba38f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1008(): Instance2CollectiveProposalOfStorageV1008 {
        assert(this.isV1008)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1009(): boolean {
        return this.getTypeHash() === 'ac6b9e70208a80f94840af1e188fcde1ffcd9b1afaf2ae4819ed3412c21cf5e2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1009(): Instance2CollectiveProposalOfStorageV1009 {
        assert(this.isV1009)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1010(): boolean {
        return this.getTypeHash() === 'a08f9697ffe3085be19e1a7000e035106258ace2877e81895837e47a105fa84f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1010(): Instance2CollectiveProposalOfStorageV1010 {
        assert(this.isV1010)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1011(): boolean {
        return this.getTypeHash() === 'c058e9717421ede3b392e82e01e3b6ca602135b7eb6b39c5c868ac06869a2648'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1011(): Instance2CollectiveProposalOfStorageV1011 {
        assert(this.isV1011)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1014(): boolean {
        return this.getTypeHash() === 'e2fdf32d2bea414f1e12847ba9ff840f07403232d3fb640a3d11ef3a1e384a5e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1014(): Instance2CollectiveProposalOfStorageV1014 {
        assert(this.isV1014)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.Proposal | undefined)>
    getAll(): Promise<v1000.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1001 {
    get(key: Uint8Array): Promise<(v1001.Proposal | undefined)>
    getAll(): Promise<v1001.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1002 {
    get(key: Uint8Array): Promise<(v1002.Proposal | undefined)>
    getAll(): Promise<v1002.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1002.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1003 {
    get(key: Uint8Array): Promise<(v1003.Proposal | undefined)>
    getAll(): Promise<v1003.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1003.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1003.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1003.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1003.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1003.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1005 {
    get(key: Uint8Array): Promise<(v1005.Proposal | undefined)>
    getAll(): Promise<v1005.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1005.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1005.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1005.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1005.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1005.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1007 {
    get(key: Uint8Array): Promise<(v1007.Proposal | undefined)>
    getAll(): Promise<v1007.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1007.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1007.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1007.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1007.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1007.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1008 {
    get(key: Uint8Array): Promise<(v1008.Proposal | undefined)>
    getAll(): Promise<v1008.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1008.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1008.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1008.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1008.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1008.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1009 {
    get(key: Uint8Array): Promise<(v1009.Proposal | undefined)>
    getAll(): Promise<v1009.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1009.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1009.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1009.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1009.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1009.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1010 {
    get(key: Uint8Array): Promise<(v1010.Proposal | undefined)>
    getAll(): Promise<v1010.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1010.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1010.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1010.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1010.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1010.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1011 {
    get(key: Uint8Array): Promise<(v1011.Proposal | undefined)>
    getAll(): Promise<v1011.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1011.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1011.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1011.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1011.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1011.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1014 {
    get(key: Uint8Array): Promise<(v1014.Proposal | undefined)>
    getAll(): Promise<v1014.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1014.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1014.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1014.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1014.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1014.Proposal][]>
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
    get isV1000(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1000(): SystemAccountStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV1000 {
    get(key: Uint8Array): Promise<v1000.AccountInfo>
    getAll(): Promise<v1000.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v1000.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.AccountInfo][]>
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
    get isV1019(): boolean {
        return this.getTypeHash() === '900a8391262eaa1b4df18c6b5b4fb105dbc6c11f562ed9f2d0a9f7eb775a682c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1019(): TechnicalCommitteeProposalOfStorageV1019 {
        assert(this.isV1019)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2001(): boolean {
        return this.getTypeHash() === '38b7dba9448d6c10ed61ae94cd1cf7955e828c54bd4115e14d0fde52f2a06d3f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2001(): TechnicalCommitteeProposalOfStorageV2001 {
        assert(this.isV2001)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2010(): boolean {
        return this.getTypeHash() === '28203cc49362b175e7cbf56ac009dba56c7bd6dc5734aba623ed871c1e21a0f4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2010(): TechnicalCommitteeProposalOfStorageV2010 {
        assert(this.isV2010)
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
    get isV2012(): boolean {
        return this.getTypeHash() === 'af9d36d7f75f583031cbd6b40f3133408cadcfdc4ac44e13ccc80b27df7f1daa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2012(): TechnicalCommitteeProposalOfStorageV2012 {
        assert(this.isV2012)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '2b74a2588504014e4234753a94d66682cb6563f2b506d22d0cebd87ee7882a25'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2013(): TechnicalCommitteeProposalOfStorageV2013 {
        assert(this.isV2013)
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
    get isV2023(): boolean {
        return this.getTypeHash() === '88aa5cfebdfef1ca0833ada52d0fd1f8b900847cc4550e2fc40cff43c225b4ca'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2023(): TechnicalCommitteeProposalOfStorageV2023 {
        assert(this.isV2023)
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
        return this.getTypeHash() === '366eb99463d79ca016de7538a845e56d04699815e7e8793cd997e0f18c9755e8'
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
    get isV2040(): boolean {
        return this.getTypeHash() === '84928adeafc6956d39cacdfcec34f054aad5abebcc5015dfed8c83518f8b9b11'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2040(): TechnicalCommitteeProposalOfStorageV2040 {
        assert(this.isV2040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2041(): boolean {
        return this.getTypeHash() === '0169f65d27dfbe8a58c4d1083cfce2a6e645bad120637dc42ac36195a7000839'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2041(): TechnicalCommitteeProposalOfStorageV2041 {
        assert(this.isV2041)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2042(): boolean {
        return this.getTypeHash() === '6a4d6cce0b5f45b93e88e954e88faf6d62f0eee2756843a9afe0b9aa8018d363'
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
        return this.getTypeHash() === '92e9e3a938af5df80daa33a87229f46f4151bf6f2266961b1266afa54e95a02c'
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
    get isV2051(): boolean {
        return this.getTypeHash() === '8c8cbb6da75e250a4fc49aa95696531ed6cd768244da64bc236e556b1b631d40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2051(): TechnicalCommitteeProposalOfStorageV2051 {
        assert(this.isV2051)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2061(): boolean {
        return this.getTypeHash() === '8f732ea58e1f62d5219d3555eb9e61e3b9aef867992e29f8f35e669c7325cf5f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2061(): TechnicalCommitteeProposalOfStorageV2061 {
        assert(this.isV2061)
        return this as any
    }

    get isV2063(): boolean {
        return this.getTypeHash() === 'b30dac7fd65ed4855facb60adb0f1658ff94cd8126d7b3e9d98777c9500a801c'
    }

    get asV2063(): TechnicalCommitteeProposalOfStorageV2063 {
        assert(this.isV2063)
        return this as any
    }

    get isV2064(): boolean {
        return this.getTypeHash() === '33c245165539a9674245bef9dd5b4ea10c79d1f75dc60d3c9bf61efd895b853c'
    }

    get asV2064(): TechnicalCommitteeProposalOfStorageV2064 {
        assert(this.isV2064)
        return this as any
    }

    get isV2070(): boolean {
        return this.getTypeHash() === '2fd4cc8d7568aa3a7fe064eeb4cad1ea05d0c32d914ee5947f03d86004927515'
    }

    get asV2070(): TechnicalCommitteeProposalOfStorageV2070 {
        assert(this.isV2070)
        return this as any
    }

    get isV2080(): boolean {
        return this.getTypeHash() === 'b9fd5c4c01021726ca3fb2da15dc530bdda12756fb4488399f0aa843928b7055'
    }

    get asV2080(): TechnicalCommitteeProposalOfStorageV2080 {
        assert(this.isV2080)
        return this as any
    }

    get isV2083(): boolean {
        return this.getTypeHash() === '7b5b75a478860e88cca8769c95272bf85dc3bccb3d620e2185670e28b39ee902'
    }

    get asV2083(): TechnicalCommitteeProposalOfStorageV2083 {
        assert(this.isV2083)
        return this as any
    }

    get isV2091(): boolean {
        return this.getTypeHash() === 'a8378b8562b578b930427b077820f631aa3cf5d241868a08faeb41251e3a3731'
    }

    get asV2091(): TechnicalCommitteeProposalOfStorageV2091 {
        assert(this.isV2091)
        return this as any
    }

    get isV2100(): boolean {
        return this.getTypeHash() === '69bd8ccd66a4cb2bb8c72e0c843cf20111b32ac8c43cd651e4baea2275da7974'
    }

    get asV2100(): TechnicalCommitteeProposalOfStorageV2100 {
        assert(this.isV2100)
        return this as any
    }

    get isV2110(): boolean {
        return this.getTypeHash() === '25d4b10b393085b1c67d721c24e97d10a31e999538af8ce9447f7fa8eb3588ef'
    }

    get asV2110(): TechnicalCommitteeProposalOfStorageV2110 {
        assert(this.isV2110)
        return this as any
    }

    get isV2120(): boolean {
        return this.getTypeHash() === '1b7428a73b3d080d941b5aaa3a558a580e8c600f804c843f834c3e27a1cf522b'
    }

    get asV2120(): TechnicalCommitteeProposalOfStorageV2120 {
        assert(this.isV2120)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV1019 {
    get(key: Uint8Array): Promise<(v1019.Call | undefined)>
    getAll(): Promise<v1019.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1019.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1019.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1019.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1019.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1019.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2001 {
    get(key: Uint8Array): Promise<(v2001.Call | undefined)>
    getAll(): Promise<v2001.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2001.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2001.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2001.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2001.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2001.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2010 {
    get(key: Uint8Array): Promise<(v2010.Call | undefined)>
    getAll(): Promise<v2010.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2010.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2010.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2010.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2010.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2010.Call][]>
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
export interface TechnicalCommitteeProposalOfStorageV2012 {
    get(key: Uint8Array): Promise<(v2012.Call | undefined)>
    getAll(): Promise<v2012.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2012.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2012.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2012.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2012.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2012.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2013 {
    get(key: Uint8Array): Promise<(v2013.Call | undefined)>
    getAll(): Promise<v2013.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2013.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2013.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2013.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2013.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2013.Call][]>
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
export interface TechnicalCommitteeProposalOfStorageV2023 {
    get(key: Uint8Array): Promise<(v2023.Call | undefined)>
    getAll(): Promise<v2023.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2023.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2023.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2023.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2023.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2023.Call][]>
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
export interface TechnicalCommitteeProposalOfStorageV2040 {
    get(key: Uint8Array): Promise<(v2040.Call | undefined)>
    getAll(): Promise<v2040.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2040.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2040.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2040.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2040.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2040.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2041 {
    get(key: Uint8Array): Promise<(v2041.Call | undefined)>
    getAll(): Promise<v2041.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2041.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2041.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2041.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2041.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2041.Call][]>
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
export interface TechnicalCommitteeProposalOfStorageV2051 {
    get(key: Uint8Array): Promise<(v2051.Call | undefined)>
    getAll(): Promise<v2051.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2051.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2051.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2051.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2051.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2051.Call][]>
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

export interface TechnicalCommitteeProposalOfStorageV2083 {
    get(key: Uint8Array): Promise<(v2083.Call | undefined)>
    getAll(): Promise<v2083.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2083.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2083.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2083.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2083.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2083.Call][]>
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

export interface TechnicalCommitteeProposalOfStorageV2100 {
    get(key: Uint8Array): Promise<(v2100.Call | undefined)>
    getAll(): Promise<v2100.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2100.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2100.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2100.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2100.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2100.Call][]>
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
    get isV1019(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV1019(): TipsReasonsStorageV1019 {
        assert(this.isV1019)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV1019 {
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
    get isV1019(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV1019(): TipsTipsStorageV1019 {
        assert(this.isV1019)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV1019 {
    get(key: Uint8Array): Promise<(v1019.OpenTip | undefined)>
    getAll(): Promise<v1019.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v1019.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1019.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1019.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1019.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1019.OpenTip][]>
}

export class TreasuryBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'e276510ea57efb7a40938452ef5d335bafe4cc416f094226131c0321c9bb6599'
    }

    /**
     *  Bounties that have been made.
     */
    get asV1000(): TreasuryBountiesStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface TreasuryBountiesStorageV1000 {
    get(key: number): Promise<(v1000.Bounty | undefined)>
    getAll(): Promise<v1000.Bounty[]>
    getMany(keys: number[]): Promise<(v1000.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1000.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v1000.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1000.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1000.Bounty][]>
}

export class TreasuryBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV1000(): TreasuryBountyDescriptionsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface TreasuryBountyDescriptionsStorageV1000 {
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
    get isV1000(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1000(): TreasuryProposalsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1000 {
    get(key: number): Promise<(v1000.TreasuryProposal | undefined)>
    getAll(): Promise<v1000.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v1000.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1000.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v1000.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1000.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1000.TreasuryProposal][]>
}

export class TreasuryReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV1000(): TreasuryReasonsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TreasuryReasonsStorageV1000 {
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

export class TreasuryTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV1000(): TreasuryTipsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.OpenTip | undefined)>
    getAll(): Promise<v1000.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.OpenTip][]>
}
