import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v49 from '../v49'
import * as v2500 from '../v2500'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v49: new StorageType('Balances.TotalIssuance', 'Default', [], v49.Balance) as TotalIssuanceV49,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV49  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v49.Balance
    get(block: Block): Promise<(v49.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v49: new StorageType('Balances.Account', 'Default', [v49.AccountId], v49.AccountData) as AccountV49,
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
    v2500: new StorageType('Balances.Account', 'Default', [v2500.AccountId20], v2500.AccountData) as AccountV2500,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV49  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v49.AccountData
    get(block: Block, key: v49.AccountId): Promise<(v49.AccountData | undefined)>
    getMany(block: Block, keys: v49.AccountId[]): Promise<(v49.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v49.AccountId[]>
    getKeys(block: Block, key: v49.AccountId): Promise<v49.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v49.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v49.AccountId): AsyncIterable<v49.AccountId[]>
    getPairs(block: Block): Promise<[k: v49.AccountId, v: (v49.AccountData | undefined)][]>
    getPairs(block: Block, key: v49.AccountId): Promise<[k: v49.AccountId, v: (v49.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v49.AccountId, v: (v49.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v49.AccountId): AsyncIterable<[k: v49.AccountId, v: (v49.AccountData | undefined)][]>
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
export interface AccountV2500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2500.AccountData
    get(block: Block, key: v2500.AccountId20): Promise<(v2500.AccountData | undefined)>
    getMany(block: Block, keys: v2500.AccountId20[]): Promise<(v2500.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v2500.AccountId20[]>
    getKeys(block: Block, key: v2500.AccountId20): Promise<v2500.AccountId20[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2500.AccountId20[]>
    getKeysPaged(pageSize: number, block: Block, key: v2500.AccountId20): AsyncIterable<v2500.AccountId20[]>
    getPairs(block: Block): Promise<[k: v2500.AccountId20, v: (v2500.AccountData | undefined)][]>
    getPairs(block: Block, key: v2500.AccountId20): Promise<[k: v2500.AccountId20, v: (v2500.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2500.AccountId20, v: (v2500.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2500.AccountId20): AsyncIterable<[k: v2500.AccountId20, v: (v2500.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v2201: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV2201,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV2201  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
