import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v200 from '../v200'
import * as v10040 from '../v10040'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v200: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV200,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV200  {
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
    v200: new StorageType('Balances.Account', 'Default', [v200.AccountId32], v200.AccountData) as AccountV200,
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
    v10040: new StorageType('Balances.Account', 'Default', [v10040.AccountId32], v10040.AccountData) as AccountV10040,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV200  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v200.AccountData
    get(block: Block, key: v200.AccountId32): Promise<(v200.AccountData | undefined)>
    getMany(block: Block, keys: v200.AccountId32[]): Promise<(v200.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v200.AccountId32[]>
    getKeys(block: Block, key: v200.AccountId32): Promise<v200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v200.AccountId32): AsyncIterable<v200.AccountId32[]>
    getPairs(block: Block): Promise<[k: v200.AccountId32, v: (v200.AccountData | undefined)][]>
    getPairs(block: Block, key: v200.AccountId32): Promise<[k: v200.AccountId32, v: (v200.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v200.AccountId32, v: (v200.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v200.AccountId32): AsyncIterable<[k: v200.AccountId32, v: (v200.AccountData | undefined)][]>
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
export interface AccountV10040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10040.AccountData
    get(block: Block, key: v10040.AccountId32): Promise<(v10040.AccountData | undefined)>
    getMany(block: Block, keys: v10040.AccountId32[]): Promise<(v10040.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v10040.AccountId32[]>
    getKeys(block: Block, key: v10040.AccountId32): Promise<v10040.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10040.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v10040.AccountId32): AsyncIterable<v10040.AccountId32[]>
    getPairs(block: Block): Promise<[k: v10040.AccountId32, v: (v10040.AccountData | undefined)][]>
    getPairs(block: Block, key: v10040.AccountId32): Promise<[k: v10040.AccountId32, v: (v10040.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10040.AccountId32, v: (v10040.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10040.AccountId32): AsyncIterable<[k: v10040.AccountId32, v: (v10040.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v10009: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV10009,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV10009  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
