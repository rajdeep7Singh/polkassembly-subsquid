import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5000002 from '../v5000002'

export const didKeys =  {
    /**
     *  A reverse double map to allow finding all keys for an identity.
     */
    v5000002: new StorageType('Identity.DidKeys', 'Default', [v5000002.IdentityId, v5000002.AccountId32], sts.boolean()) as DidKeysV5000002,
}

/**
 *  A reverse double map to allow finding all keys for an identity.
 */
export interface DidKeysV5000002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key1: v5000002.IdentityId, key2: v5000002.AccountId32): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [v5000002.IdentityId, v5000002.AccountId32][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[v5000002.IdentityId, v5000002.AccountId32][]>
    getKeys(block: Block, key1: v5000002.IdentityId): Promise<[v5000002.IdentityId, v5000002.AccountId32][]>
    getKeys(block: Block, key1: v5000002.IdentityId, key2: v5000002.AccountId32): Promise<[v5000002.IdentityId, v5000002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v5000002.IdentityId, v5000002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v5000002.IdentityId): AsyncIterable<[v5000002.IdentityId, v5000002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v5000002.IdentityId, key2: v5000002.AccountId32): AsyncIterable<[v5000002.IdentityId, v5000002.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v5000002.IdentityId, v5000002.AccountId32], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v5000002.IdentityId): Promise<[k: [v5000002.IdentityId, v5000002.AccountId32], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v5000002.IdentityId, key2: v5000002.AccountId32): Promise<[k: [v5000002.IdentityId, v5000002.AccountId32], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v5000002.IdentityId, v5000002.AccountId32], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v5000002.IdentityId): AsyncIterable<[k: [v5000002.IdentityId, v5000002.AccountId32], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v5000002.IdentityId, key2: v5000002.AccountId32): AsyncIterable<[k: [v5000002.IdentityId, v5000002.AccountId32], v: (boolean | undefined)][]>
}
