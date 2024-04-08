import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5 from '../v5'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v5: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV5,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV5  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v5: new StorageType('Balances.Account', 'Default', [v5.AccountId32], v5.AccountData) as AccountV5,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV5  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v5.AccountData
    get(block: Block, key: v5.AccountId32): Promise<(v5.AccountData | undefined)>
    getMany(block: Block, keys: v5.AccountId32[]): Promise<(v5.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v5.AccountId32[]>
    getKeys(block: Block, key: v5.AccountId32): Promise<v5.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v5.AccountId32): AsyncIterable<v5.AccountId32[]>
    getPairs(block: Block): Promise<[k: v5.AccountId32, v: (v5.AccountData | undefined)][]>
    getPairs(block: Block, key: v5.AccountId32): Promise<[k: v5.AccountId32, v: (v5.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5.AccountId32, v: (v5.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5.AccountId32): AsyncIterable<[k: v5.AccountId32, v: (v5.AccountData | undefined)][]>
}
