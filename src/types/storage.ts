import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v3000 from './v3000'
import * as v3010 from './v3010'
import * as v5000003 from './v5000003'
import * as v5001002 from './v5001002'
import * as v5002001 from './v5002001'
import * as v5003001 from './v5003001'
import * as v5004000 from './v5004000'

export class IdentityDidKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'DidKeys'
    }

    /**
     *  A reverse double map to allow finding all keys for an identity.
     */
    get isV5000003(): boolean {
        return this.getTypeHash() === '2ddf896cc669a666a660412e59f5bbf3240818386dd9c4ce5ed03e1e84e5d80a'
    }

    /**
     *  A reverse double map to allow finding all keys for an identity.
     */
    get asV5000003(): IdentityDidKeysStorageV5000003 {
        assert(this.isV5000003)
        return this as any
    }
}

/**
 *  A reverse double map to allow finding all keys for an identity.
 */
export interface IdentityDidKeysStorageV5000003 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<boolean[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: boolean][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: boolean][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: boolean][]>
}

export class PipsProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Pips'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get isV3000(): boolean {
        return this.getTypeHash() === 'c1260ae2f7bc1f33d923c5956b6b843b44e0730d56a9254292a4982e556fdf4c'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get asV3000(): PipsProposalsStorageV3000 {
        assert(this.isV3000)
        return this as any
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get isV3010(): boolean {
        return this.getTypeHash() === '1afdec54a01dd330eba49fe03dc9fe0d859b9c05a5d6e4c91d96a0c136e94084'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get asV3010(): PipsProposalsStorageV3010 {
        assert(this.isV3010)
        return this as any
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get isV5000003(): boolean {
        return this.getTypeHash() === 'a6cd757a09dd6c3ff8979f49397a4ce9d71c6f0007e5721b3d468a36768dc0b6'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get asV5000003(): PipsProposalsStorageV5000003 {
        assert(this.isV5000003)
        return this as any
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get isV5001002(): boolean {
        return this.getTypeHash() === '36826db14488ab3b3cc48f539214f2e59371454312b78664d1576f72e7c2ff87'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get asV5001002(): PipsProposalsStorageV5001002 {
        assert(this.isV5001002)
        return this as any
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get isV5002001(): boolean {
        return this.getTypeHash() === 'bda3bc59a08a2d19fdf52f4216f17914f56964f09b161481221332d96adbdeea'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get asV5002001(): PipsProposalsStorageV5002001 {
        assert(this.isV5002001)
        return this as any
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get isV5003001(): boolean {
        return this.getTypeHash() === 'a0be7e0bdf16787a4f04961cce6ce7665d85076268ee4d7a01405c2b478a424c'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get asV5003001(): PipsProposalsStorageV5003001 {
        assert(this.isV5003001)
        return this as any
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get isV5004000(): boolean {
        return this.getTypeHash() === '3dd8ae9a55b2d0d09eb99218587435798399a6b726dcfed39cf10e47df1f424a'
    }

    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    get asV5004000(): PipsProposalsStorageV5004000 {
        assert(this.isV5004000)
        return this as any
    }
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface PipsProposalsStorageV3000 {
    get(key: number): Promise<(v3000.Pip | undefined)>
    getAll(): Promise<v3000.Pip[]>
    getMany(keys: number[]): Promise<(v3000.Pip | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v3000.Pip][]>
    getPairs(key: number): Promise<[k: number, v: v3000.Pip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v3000.Pip][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v3000.Pip][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface PipsProposalsStorageV3010 {
    get(key: number): Promise<(v3010.Pip | undefined)>
    getAll(): Promise<v3010.Pip[]>
    getMany(keys: number[]): Promise<(v3010.Pip | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v3010.Pip][]>
    getPairs(key: number): Promise<[k: number, v: v3010.Pip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v3010.Pip][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v3010.Pip][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface PipsProposalsStorageV5000003 {
    get(key: number): Promise<(v5000003.Pip | undefined)>
    getAll(): Promise<v5000003.Pip[]>
    getMany(keys: number[]): Promise<(v5000003.Pip | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v5000003.Pip][]>
    getPairs(key: number): Promise<[k: number, v: v5000003.Pip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v5000003.Pip][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v5000003.Pip][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface PipsProposalsStorageV5001002 {
    get(key: number): Promise<(v5001002.Pip | undefined)>
    getAll(): Promise<v5001002.Pip[]>
    getMany(keys: number[]): Promise<(v5001002.Pip | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v5001002.Pip][]>
    getPairs(key: number): Promise<[k: number, v: v5001002.Pip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v5001002.Pip][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v5001002.Pip][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface PipsProposalsStorageV5002001 {
    get(key: number): Promise<(v5002001.Pip | undefined)>
    getAll(): Promise<v5002001.Pip[]>
    getMany(keys: number[]): Promise<(v5002001.Pip | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v5002001.Pip][]>
    getPairs(key: number): Promise<[k: number, v: v5002001.Pip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v5002001.Pip][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v5002001.Pip][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface PipsProposalsStorageV5003001 {
    get(key: number): Promise<(v5003001.Pip | undefined)>
    getAll(): Promise<v5003001.Pip[]>
    getMany(keys: number[]): Promise<(v5003001.Pip | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v5003001.Pip][]>
    getPairs(key: number): Promise<[k: number, v: v5003001.Pip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v5003001.Pip][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v5003001.Pip][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface PipsProposalsStorageV5004000 {
    get(key: number): Promise<(v5004000.Pip | undefined)>
    getAll(): Promise<v5004000.Pip[]>
    getMany(keys: number[]): Promise<(v5004000.Pip | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v5004000.Pip][]>
    getPairs(key: number): Promise<[k: number, v: v5004000.Pip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v5004000.Pip][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v5004000.Pip][]>
}
