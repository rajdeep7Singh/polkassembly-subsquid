import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1000 from './v1000'
import * as v1002 from './v1002'
import * as v1004 from './v1004'
import * as v1005 from './v1005'
import * as v1007 from './v1007'
import * as v1009 from './v1009'
import * as v1012 from './v1012'
import * as v1014 from './v1014'
import * as v1015 from './v1015'
import * as v1016 from './v1016'

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
    get isV1000(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV1000(): CouncilMembersStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV1000 {
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
    get isV1000(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV1000(): CouncilProposalCountStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV1000 {
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
    get isV1000(): boolean {
        return this.getTypeHash() === '83327ea27cdf3784e783eb1ff07da93c2d65fdef7134ba540f92a8ab9ebbb25e'
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
    get isV1002(): boolean {
        return this.getTypeHash() === '5a311315bc570e944974f933dc0fd596aab3a986a0fc545d73e9f389ce36c11c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1002(): CouncilProposalOfStorageV1002 {
        assert(this.isV1002)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1004(): boolean {
        return this.getTypeHash() === '534368ecad5980bf0513fd1e67dd30c3bf8c54c09afa90ddf34b27ce5c966a8f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1004(): CouncilProposalOfStorageV1004 {
        assert(this.isV1004)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1005(): boolean {
        return this.getTypeHash() === '97d96d25496af0e37e39fdbd0cf2bcb8a3c39e2bd178bdeb37107d9d980a2ee5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1005(): CouncilProposalOfStorageV1005 {
        assert(this.isV1005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1007(): boolean {
        return this.getTypeHash() === '78835a04c80ef9da39fbc7b8d0e0e3bafe03adcdfdda8d33525368e0b881273b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1007(): CouncilProposalOfStorageV1007 {
        assert(this.isV1007)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1009(): boolean {
        return this.getTypeHash() === 'ef1585c23014aa95b3706e01223b82c8445fd3d0d9d8ef5abd92cdea751db1c8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1009(): CouncilProposalOfStorageV1009 {
        assert(this.isV1009)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1012(): boolean {
        return this.getTypeHash() === '06f1621dbd959d9db174da4bda9698878be8fd2f3f5c70e7118414550cc043aa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1012(): CouncilProposalOfStorageV1012 {
        assert(this.isV1012)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1014(): boolean {
        return this.getTypeHash() === '10ff8666ff05bd1cdb057f3a0245e5e49c9d3b82aa3209ba7b1753303b0aa25b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1014(): CouncilProposalOfStorageV1014 {
        assert(this.isV1014)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1015(): boolean {
        return this.getTypeHash() === '007cd6b6ab411091d11612ab6b6721a62ac2d968553be505bf7d2de3e41c6ff6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1015(): CouncilProposalOfStorageV1015 {
        assert(this.isV1015)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1016(): boolean {
        return this.getTypeHash() === '294633df9e7c63449743710105f028d41a465f4f138f5882268307a11c3a1e55'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1016(): CouncilProposalOfStorageV1016 {
        assert(this.isV1016)
        return this as any
    }
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
export interface CouncilProposalOfStorageV1002 {
    get(key: Uint8Array): Promise<(v1002.Call | undefined)>
    getAll(): Promise<v1002.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1002.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1004 {
    get(key: Uint8Array): Promise<(v1004.Call | undefined)>
    getAll(): Promise<v1004.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1004.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1004.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1004.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1004.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1004.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1005 {
    get(key: Uint8Array): Promise<(v1005.Call | undefined)>
    getAll(): Promise<v1005.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1005.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1005.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1005.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1005.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1005.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1007 {
    get(key: Uint8Array): Promise<(v1007.Call | undefined)>
    getAll(): Promise<v1007.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1007.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1007.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1007.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1007.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1007.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1009 {
    get(key: Uint8Array): Promise<(v1009.Call | undefined)>
    getAll(): Promise<v1009.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1009.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1009.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1009.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1009.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1009.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1012 {
    get(key: Uint8Array): Promise<(v1012.Call | undefined)>
    getAll(): Promise<v1012.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1012.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1012.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1012.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1012.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1012.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1014 {
    get(key: Uint8Array): Promise<(v1014.Call | undefined)>
    getAll(): Promise<v1014.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1014.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1014.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1014.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1014.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1014.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1015 {
    get(key: Uint8Array): Promise<(v1015.Call | undefined)>
    getAll(): Promise<v1015.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1015.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1015.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1015.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1015.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1015.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1016 {
    get(key: Uint8Array): Promise<(v1016.Call | undefined)>
    getAll(): Promise<v1016.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1016.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1016.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1016.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1016.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1016.Call][]>
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
    get isV1000(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1000(): DemocracyPreimagesStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.PreimageStatus | undefined)>
    getAll(): Promise<v1000.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.PreimageStatus][]>
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
    get isV1000(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV1000(): DemocracyPublicPropCountStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV1000 {
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
    get isV1000(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV1000(): DemocracyPublicPropsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV1016(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV1016(): DemocracyPublicPropsStorageV1016 {
        assert(this.isV1016)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV1000 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV1016 {
    get(): Promise<[number, v1016.Bounded, Uint8Array][]>
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
    get isV1000(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV1000(): DemocracyReferendumInfoOfStorageV1000 {
        assert(this.isV1000)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV1016(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV1016(): DemocracyReferendumInfoOfStorageV1016 {
        assert(this.isV1016)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV1000 {
    get(key: number): Promise<(v1000.ReferendumInfo | undefined)>
    getAll(): Promise<v1000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1000.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV1016 {
    get(key: number): Promise<(v1016.ReferendumInfo | undefined)>
    getAll(): Promise<v1016.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1016.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1016.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1016.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1016.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1016.ReferendumInfo][]>
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
    get isV1002(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV1002(): PreimagePreimageForStorageV1002 {
        assert(this.isV1002)
        return this as any
    }

    get isV1016(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV1016(): PreimagePreimageForStorageV1016 {
        assert(this.isV1016)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV1002 {
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

export interface PreimagePreimageForStorageV1016 {
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
    get isV1002(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1002(): PreimageStatusForStorageV1002 {
        assert(this.isV1002)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV1016(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1016(): PreimageStatusForStorageV1016 {
        assert(this.isV1016)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV1002 {
    get(key: Uint8Array): Promise<(v1002.RequestStatus | undefined)>
    getAll(): Promise<v1002.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1002.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV1016 {
    get(key: Uint8Array): Promise<(v1016.RequestStatus | undefined)>
    getAll(): Promise<v1016.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1016.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1016.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1016.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1016.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1016.RequestStatus][]>
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
    get isV1007(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1007(): TreasuryProposalsStorageV1007 {
        assert(this.isV1007)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1007 {
    get(key: number): Promise<(v1007.Proposal | undefined)>
    getAll(): Promise<v1007.Proposal[]>
    getMany(keys: number[]): Promise<(v1007.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1007.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v1007.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1007.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1007.Proposal][]>
}
