import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v21 from '../v21'
import * as v11210 from '../v11210'

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
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v11210: new StorageType('Balances.Account', 'Default', [v11210.AccountId32], v11210.AccountData) as AccountV11210,
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

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV11210  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v11210.AccountData
    get(block: Block, key: v11210.AccountId32): Promise<(v11210.AccountData | undefined)>
    getMany(block: Block, keys: v11210.AccountId32[]): Promise<(v11210.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v11210.AccountId32[]>
    getKeys(block: Block, key: v11210.AccountId32): Promise<v11210.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11210.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v11210.AccountId32): AsyncIterable<v11210.AccountId32[]>
    getPairs(block: Block): Promise<[k: v11210.AccountId32, v: (v11210.AccountData | undefined)][]>
    getPairs(block: Block, key: v11210.AccountId32): Promise<[k: v11210.AccountId32, v: (v11210.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11210.AccountId32, v: (v11210.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11210.AccountId32): AsyncIterable<[k: v11210.AccountId32, v: (v11210.AccountData | undefined)][]>
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
