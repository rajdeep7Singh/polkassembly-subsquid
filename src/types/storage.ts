import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v21 from './v21'
import * as v25 from './v25'
import * as v2800 from './v2800'
import * as v10101 from './v10101'
import * as v10110 from './v10110'
import * as v10300 from './v10300'
import * as v10310 from './v10310'
import * as v10400 from './v10400'
import * as v10500 from './v10500'
import * as v10620 from './v10620'
import * as v10700 from './v10700'
import * as v10710 from './v10710'
import * as v10720 from './v10720'
import * as v10740 from './v10740'
import * as v10750 from './v10750'
import * as v10801 from './v10801'

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
    get isV21(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV21(): BalancesAccountStorageV21 {
        assert(this.isV21)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV21 {
    get(key: Uint8Array): Promise<v21.AccountData>
    getAll(): Promise<v21.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v21.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v21.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v21.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v21.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v21.AccountData][]>
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
    get isV21(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV21(): BalancesTotalIssuanceStorageV21 {
        assert(this.isV21)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV21 {
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
    get isV2800(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV2800(): CouncilMembersStorageV2800 {
        assert(this.isV2800)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV2800 {
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
    get isV2800(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV2800(): CouncilProposalCountStorageV2800 {
        assert(this.isV2800)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV2800 {
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
    get isV2800(): boolean {
        return this.getTypeHash() === '56e354f0a0c90f00681a7221eeff394ac8b037979473c59d81a31dadd2a09987'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2800(): CouncilProposalOfStorageV2800 {
        assert(this.isV2800)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10101(): boolean {
        return this.getTypeHash() === 'f740fc8cf309af769d3bdc818152f44227a9bc5eabf21e7b4a2c90218876a3d9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10101(): CouncilProposalOfStorageV10101 {
        assert(this.isV10101)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10110(): boolean {
        return this.getTypeHash() === 'b52d28e87c0565d8662bd2683d0fb439547154f2cbf6ec23cd2f9b926b8677db'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10110(): CouncilProposalOfStorageV10110 {
        assert(this.isV10110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10300(): boolean {
        return this.getTypeHash() === 'ec70e425141b63326a2b056fd07d48039aff780f153838008b0cc42c5030d71e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10300(): CouncilProposalOfStorageV10300 {
        assert(this.isV10300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10310(): boolean {
        return this.getTypeHash() === '7d48e3dacb7e07020f5746028200a1480adf96211bbc2e05ab614d73ddbd30e1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10310(): CouncilProposalOfStorageV10310 {
        assert(this.isV10310)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10400(): boolean {
        return this.getTypeHash() === '3a6a728d2dac1831d136e10d15da6a02fa205beed04f9e3b6d73918ec2c0e54e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10400(): CouncilProposalOfStorageV10400 {
        assert(this.isV10400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10500(): boolean {
        return this.getTypeHash() === '3fcdaab3367b67efbb5a901b06b09d19e138cef7625bcbcc3ab722f7d10f4894'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10500(): CouncilProposalOfStorageV10500 {
        assert(this.isV10500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10620(): boolean {
        return this.getTypeHash() === '0c732e1607f717f195dbbd49162c6c3bd25545364e6bb53267151512d6ad62fd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10620(): CouncilProposalOfStorageV10620 {
        assert(this.isV10620)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10700(): boolean {
        return this.getTypeHash() === '528df2b5772bb8b6458563010cc165095cd6dad5321d1112b468a829f388132a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10700(): CouncilProposalOfStorageV10700 {
        assert(this.isV10700)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10710(): boolean {
        return this.getTypeHash() === 'e4d591580b965da7f3c85f5be12ed684c5afcffb3cc55448a846253e69e12c2c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10710(): CouncilProposalOfStorageV10710 {
        assert(this.isV10710)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10720(): boolean {
        return this.getTypeHash() === 'a745761a9dfb469b382d5a3efb9c669db68b7eb52e9b3f5ba8a01afcf5c2ae14'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10720(): CouncilProposalOfStorageV10720 {
        assert(this.isV10720)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10740(): boolean {
        return this.getTypeHash() === '7eb8c6b684f931b097c5752d3b15cf051e66abd5c7d218e9f0a6cf27600d1d64'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10740(): CouncilProposalOfStorageV10740 {
        assert(this.isV10740)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10750(): boolean {
        return this.getTypeHash() === 'e95f6da78b4365ffb6a62b51555400651863d3817a57d1f2b232cdcd417cbd99'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10750(): CouncilProposalOfStorageV10750 {
        assert(this.isV10750)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10801(): boolean {
        return this.getTypeHash() === '324e608fd14bbcfe1cce7fb44d4261a793001925afdd89ea863c99e4785bfe1b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10801(): CouncilProposalOfStorageV10801 {
        assert(this.isV10801)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV2800 {
    get(key: Uint8Array): Promise<(v2800.Call | undefined)>
    getAll(): Promise<v2800.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2800.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2800.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2800.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2800.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2800.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10101 {
    get(key: Uint8Array): Promise<(v10101.Call | undefined)>
    getAll(): Promise<v10101.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10101.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10101.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10101.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10101.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10101.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10110 {
    get(key: Uint8Array): Promise<(v10110.Call | undefined)>
    getAll(): Promise<v10110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10300 {
    get(key: Uint8Array): Promise<(v10300.Call | undefined)>
    getAll(): Promise<v10300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10310 {
    get(key: Uint8Array): Promise<(v10310.Call | undefined)>
    getAll(): Promise<v10310.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10310.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10310.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10310.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10310.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10310.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10400 {
    get(key: Uint8Array): Promise<(v10400.Call | undefined)>
    getAll(): Promise<v10400.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10400.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10400.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10400.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10400.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10400.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10500 {
    get(key: Uint8Array): Promise<(v10500.Call | undefined)>
    getAll(): Promise<v10500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10620 {
    get(key: Uint8Array): Promise<(v10620.Call | undefined)>
    getAll(): Promise<v10620.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10620.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10620.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10620.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10620.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10620.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10700 {
    get(key: Uint8Array): Promise<(v10700.Call | undefined)>
    getAll(): Promise<v10700.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10700.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10700.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10700.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10700.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10700.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10710 {
    get(key: Uint8Array): Promise<(v10710.Call | undefined)>
    getAll(): Promise<v10710.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10710.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10710.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10710.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10710.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10710.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10720 {
    get(key: Uint8Array): Promise<(v10720.Call | undefined)>
    getAll(): Promise<v10720.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10720.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10720.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10720.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10720.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10720.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10740 {
    get(key: Uint8Array): Promise<(v10740.Call | undefined)>
    getAll(): Promise<v10740.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10740.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10740.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10740.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10740.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10740.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10750 {
    get(key: Uint8Array): Promise<(v10750.Call | undefined)>
    getAll(): Promise<v10750.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10750.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10750.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10750.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10750.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10750.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV10801 {
    get(key: Uint8Array): Promise<(v10801.Call | undefined)>
    getAll(): Promise<v10801.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10801.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10801.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10801.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10801.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10801.Call][]>
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
    get isV25(): boolean {
        return this.getTypeHash() === '2b909ea990cea828444e8e2c6ed491476cb71b94954f6d21e97d187af770ab7f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV25(): DemocracyPreimagesStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV2800(): boolean {
        return this.getTypeHash() === '8a2c4d511b74f1f20cb73c18b17575ff9223ad57636106f7b0a6bfc685224b90'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV2800(): DemocracyPreimagesStorageV2800 {
        assert(this.isV2800)
        return this as any
    }
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

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV2800 {
    get(key: Uint8Array): Promise<(v2800.PreimageStatus | undefined)>
    getAll(): Promise<v2800.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2800.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2800.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2800.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2800.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2800.PreimageStatus][]>
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
    get isV25(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV25(): DemocracyPublicPropCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV25 {
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
    get isV25(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV25(): DemocracyPublicPropsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV25 {
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
    get isV25(): boolean {
        return this.getTypeHash() === '461e8e67768f270dd4069c86e4b564481b2d898ae78f95e97f0715d0227aaba9'
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

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV2800(): boolean {
        return this.getTypeHash() === '29222dce4b1777cbe32cf212b23072e263966aee35f45a891ecc3ece3a5a9830'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV2800(): DemocracyReferendumInfoOfStorageV2800 {
        assert(this.isV2800)
        return this as any
    }
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

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV2800 {
    get(key: number): Promise<(v2800.ReferendumInfo | undefined)>
    getAll(): Promise<v2800.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v2800.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2800.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v2800.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2800.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2800.ReferendumInfo][]>
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
    get isV25(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV25(): Instance1CollectiveMembersStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV25 {
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
    get isV25(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV25(): Instance1CollectiveProposalCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV25 {
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
    get isV25(): boolean {
        return this.getTypeHash() === 'f525c38fec4379172953f53759dbc7a2ec741a06b6c652dda6d33b07557b4b3a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): Instance1CollectiveProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Proposal | undefined)>
    getAll(): Promise<v25.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
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
    get isV25(): boolean {
        return this.getTypeHash() === 'f525c38fec4379172953f53759dbc7a2ec741a06b6c652dda6d33b07557b4b3a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): Instance2CollectiveProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Proposal | undefined)>
    getAll(): Promise<v25.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
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
    get isV10500(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV10500(): PreimagePreimageForStorageV10500 {
        assert(this.isV10500)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV10500 {
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
    get isV10500(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV10500(): PreimageStatusForStorageV10500 {
        assert(this.isV10500)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV10500 {
    get(key: Uint8Array): Promise<(v10500.RequestStatus | undefined)>
    getAll(): Promise<v10500.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v10500.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10500.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10500.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10500.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10500.RequestStatus][]>
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
    get isV21(): boolean {
        return this.getTypeHash() === '309575b55ab587b55f5b1034b8c698d4d7ed6466a989ae69b848ecfecce7321d'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV21(): SystemAccountStorageV21 {
        assert(this.isV21)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV21 {
    get(key: Uint8Array): Promise<v21.AccountInfo>
    getAll(): Promise<v21.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v21.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v21.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v21.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v21.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v21.AccountInfo][]>
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
    get isV2800(): boolean {
        return this.getTypeHash() === '56e354f0a0c90f00681a7221eeff394ac8b037979473c59d81a31dadd2a09987'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2800(): TechnicalCommitteeProposalOfStorageV2800 {
        assert(this.isV2800)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10101(): boolean {
        return this.getTypeHash() === 'f740fc8cf309af769d3bdc818152f44227a9bc5eabf21e7b4a2c90218876a3d9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10101(): TechnicalCommitteeProposalOfStorageV10101 {
        assert(this.isV10101)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10110(): boolean {
        return this.getTypeHash() === 'b52d28e87c0565d8662bd2683d0fb439547154f2cbf6ec23cd2f9b926b8677db'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10110(): TechnicalCommitteeProposalOfStorageV10110 {
        assert(this.isV10110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10300(): boolean {
        return this.getTypeHash() === 'ec70e425141b63326a2b056fd07d48039aff780f153838008b0cc42c5030d71e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10300(): TechnicalCommitteeProposalOfStorageV10300 {
        assert(this.isV10300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10310(): boolean {
        return this.getTypeHash() === '7d48e3dacb7e07020f5746028200a1480adf96211bbc2e05ab614d73ddbd30e1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10310(): TechnicalCommitteeProposalOfStorageV10310 {
        assert(this.isV10310)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10400(): boolean {
        return this.getTypeHash() === '3a6a728d2dac1831d136e10d15da6a02fa205beed04f9e3b6d73918ec2c0e54e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10400(): TechnicalCommitteeProposalOfStorageV10400 {
        assert(this.isV10400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10500(): boolean {
        return this.getTypeHash() === '3fcdaab3367b67efbb5a901b06b09d19e138cef7625bcbcc3ab722f7d10f4894'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10500(): TechnicalCommitteeProposalOfStorageV10500 {
        assert(this.isV10500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10620(): boolean {
        return this.getTypeHash() === '0c732e1607f717f195dbbd49162c6c3bd25545364e6bb53267151512d6ad62fd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10620(): TechnicalCommitteeProposalOfStorageV10620 {
        assert(this.isV10620)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10700(): boolean {
        return this.getTypeHash() === '528df2b5772bb8b6458563010cc165095cd6dad5321d1112b468a829f388132a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10700(): TechnicalCommitteeProposalOfStorageV10700 {
        assert(this.isV10700)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10710(): boolean {
        return this.getTypeHash() === 'e4d591580b965da7f3c85f5be12ed684c5afcffb3cc55448a846253e69e12c2c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10710(): TechnicalCommitteeProposalOfStorageV10710 {
        assert(this.isV10710)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10720(): boolean {
        return this.getTypeHash() === 'a745761a9dfb469b382d5a3efb9c669db68b7eb52e9b3f5ba8a01afcf5c2ae14'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10720(): TechnicalCommitteeProposalOfStorageV10720 {
        assert(this.isV10720)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10740(): boolean {
        return this.getTypeHash() === '7eb8c6b684f931b097c5752d3b15cf051e66abd5c7d218e9f0a6cf27600d1d64'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10740(): TechnicalCommitteeProposalOfStorageV10740 {
        assert(this.isV10740)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10750(): boolean {
        return this.getTypeHash() === 'e95f6da78b4365ffb6a62b51555400651863d3817a57d1f2b232cdcd417cbd99'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10750(): TechnicalCommitteeProposalOfStorageV10750 {
        assert(this.isV10750)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10801(): boolean {
        return this.getTypeHash() === '324e608fd14bbcfe1cce7fb44d4261a793001925afdd89ea863c99e4785bfe1b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10801(): TechnicalCommitteeProposalOfStorageV10801 {
        assert(this.isV10801)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV2800 {
    get(key: Uint8Array): Promise<(v2800.Call | undefined)>
    getAll(): Promise<v2800.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2800.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2800.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2800.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2800.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2800.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10101 {
    get(key: Uint8Array): Promise<(v10101.Call | undefined)>
    getAll(): Promise<v10101.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10101.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10101.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10101.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10101.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10101.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10110 {
    get(key: Uint8Array): Promise<(v10110.Call | undefined)>
    getAll(): Promise<v10110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10300 {
    get(key: Uint8Array): Promise<(v10300.Call | undefined)>
    getAll(): Promise<v10300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10310 {
    get(key: Uint8Array): Promise<(v10310.Call | undefined)>
    getAll(): Promise<v10310.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10310.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10310.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10310.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10310.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10310.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10400 {
    get(key: Uint8Array): Promise<(v10400.Call | undefined)>
    getAll(): Promise<v10400.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10400.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10400.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10400.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10400.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10400.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10500 {
    get(key: Uint8Array): Promise<(v10500.Call | undefined)>
    getAll(): Promise<v10500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10620 {
    get(key: Uint8Array): Promise<(v10620.Call | undefined)>
    getAll(): Promise<v10620.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10620.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10620.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10620.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10620.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10620.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10700 {
    get(key: Uint8Array): Promise<(v10700.Call | undefined)>
    getAll(): Promise<v10700.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10700.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10700.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10700.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10700.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10700.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10710 {
    get(key: Uint8Array): Promise<(v10710.Call | undefined)>
    getAll(): Promise<v10710.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10710.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10710.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10710.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10710.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10710.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10720 {
    get(key: Uint8Array): Promise<(v10720.Call | undefined)>
    getAll(): Promise<v10720.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10720.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10720.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10720.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10720.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10720.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10740 {
    get(key: Uint8Array): Promise<(v10740.Call | undefined)>
    getAll(): Promise<v10740.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10740.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10740.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10740.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10740.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10740.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10750 {
    get(key: Uint8Array): Promise<(v10750.Call | undefined)>
    getAll(): Promise<v10750.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10750.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10750.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10750.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10750.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10750.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV10801 {
    get(key: Uint8Array): Promise<(v10801.Call | undefined)>
    getAll(): Promise<v10801.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v10801.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10801.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10801.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10801.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10801.Call][]>
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
    get isV10700(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV10700(): TipsReasonsStorageV10700 {
        assert(this.isV10700)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV10700 {
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
    get isV10700(): boolean {
        return this.getTypeHash() === '087278bdac1dc1c5caf7600e537a5da9e76623313add03a1cde85dcfaabdbb42'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV10700(): TipsTipsStorageV10700 {
        assert(this.isV10700)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV10700 {
    get(key: Uint8Array): Promise<(v10700.OpenTip | undefined)>
    getAll(): Promise<v10700.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v10700.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10700.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10700.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10700.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10700.OpenTip][]>
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
    get isV25(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV25(): TreasuryProposalsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV25 {
    get(key: number): Promise<(v25.TreasuryProposal | undefined)>
    getAll(): Promise<v25.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v25.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v25.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v25.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v25.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v25.TreasuryProposal][]>
}
