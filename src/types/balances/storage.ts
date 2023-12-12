import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v26 from '../v26'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v26: new StorageType('Balances.TotalIssuance', 'Default', [], v26.Balance) as TotalIssuanceV26,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.Balance
    get(block: Block): Promise<(v26.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v26: new StorageType('Balances.Account', 'Default', [v26.AccountId], v26.AccountData) as AccountV26,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.AccountData
    get(block: Block, key: v26.AccountId): Promise<(v26.AccountData | undefined)>
    getMany(block: Block, keys: v26.AccountId[]): Promise<(v26.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v26.AccountId[]>
    getKeys(block: Block, key: v26.AccountId): Promise<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<v26.AccountId[]>
    getPairs(block: Block): Promise<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
    getPairs(block: Block, key: v26.AccountId): Promise<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v48: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV48,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV48  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
