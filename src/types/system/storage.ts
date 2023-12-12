import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v26 from '../v26'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v26: new StorageType('System.Account', 'Default', [v26.AccountId], v26.AccountInfo) as AccountV26,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.AccountInfo
    get(block: Block, key: v26.AccountId): Promise<(v26.AccountInfo | undefined)>
    getMany(block: Block, keys: v26.AccountId[]): Promise<(v26.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v26.AccountId[]>
    getKeys(block: Block, key: v26.AccountId): Promise<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<v26.AccountId[]>
    getPairs(block: Block): Promise<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v26.AccountId): Promise<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
}
