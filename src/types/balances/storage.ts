import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v266 from '../v266'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v266: new StorageType('Balances.TotalIssuance', 'Default', [], v266.Balance) as TotalIssuanceV266,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.Balance
    get(block: Block): Promise<(v266.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    v266: new StorageType('Balances.Account', 'Default', [v266.AccountId], v266.AccountData) as AccountV266,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface AccountV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.AccountData
    get(block: Block, key: v266.AccountId): Promise<(v266.AccountData | undefined)>
    getMany(block: Block, keys: v266.AccountId[]): Promise<(v266.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v266.AccountId[]>
    getKeys(block: Block, key: v266.AccountId): Promise<v266.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.AccountId): AsyncIterable<v266.AccountId[]>
    getPairs(block: Block): Promise<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
    getPairs(block: Block, key: v266.AccountId): Promise<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.AccountId): AsyncIterable<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
}
