import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v268 from '../v268'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v268: new StorageType('Balances.TotalIssuance', 'Default', [], v268.Balance) as TotalIssuanceV268,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV268  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v268.Balance
    get(block: Block): Promise<(v268.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v268: new StorageType('Balances.Account', 'Default', [v268.AccountId], v268.AccountData) as AccountV268,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV268  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v268.AccountData
    get(block: Block, key: v268.AccountId): Promise<(v268.AccountData | undefined)>
    getMany(block: Block, keys: v268.AccountId[]): Promise<(v268.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v268.AccountId[]>
    getKeys(block: Block, key: v268.AccountId): Promise<v268.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v268.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v268.AccountId): AsyncIterable<v268.AccountId[]>
    getPairs(block: Block): Promise<[k: v268.AccountId, v: (v268.AccountData | undefined)][]>
    getPairs(block: Block, key: v268.AccountId): Promise<[k: v268.AccountId, v: (v268.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v268.AccountId, v: (v268.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v268.AccountId): AsyncIterable<[k: v268.AccountId, v: (v268.AccountData | undefined)][]>
}
