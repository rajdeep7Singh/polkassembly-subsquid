import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v21 from '../v21'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v21: new StorageType('Balances.TotalIssuance', 'Default', [], v21.Balance) as TotalIssuanceV21,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV21  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v21.Balance
    get(block: Block): Promise<(v21.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v21: new StorageType('Balances.Account', 'Default', [v21.AccountId], v21.AccountData) as AccountV21,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV21  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v21.AccountData
    get(block: Block, key: v21.AccountId): Promise<(v21.AccountData | undefined)>
    getMany(block: Block, keys: v21.AccountId[]): Promise<(v21.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v21.AccountId[]>
    getKeys(block: Block, key: v21.AccountId): Promise<v21.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v21.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v21.AccountId): AsyncIterable<v21.AccountId[]>
    getPairs(block: Block): Promise<[k: v21.AccountId, v: (v21.AccountData | undefined)][]>
    getPairs(block: Block, key: v21.AccountId): Promise<[k: v21.AccountId, v: (v21.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v21.AccountId, v: (v21.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v21.AccountId): AsyncIterable<[k: v21.AccountId, v: (v21.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v10890: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV10890,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV10890  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
