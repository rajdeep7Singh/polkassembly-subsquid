import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v1030 from '../v1030'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v100: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV100,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v100: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV100,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
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
    v100: new StorageType('Balances.Account', 'Default', [v100.AccountId32], v100.AccountData) as AccountV100,
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
    v1030: new StorageType('Balances.Account', 'Default', [v1030.AccountId32], v1030.AccountData) as AccountV1030,
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
export interface AccountV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.AccountData
    get(block: Block, key: v100.AccountId32): Promise<(v100.AccountData | undefined)>
    getMany(block: Block, keys: v100.AccountId32[]): Promise<(v100.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v100.AccountId32[]>
    getKeys(block: Block, key: v100.AccountId32): Promise<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<v100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v100.AccountId32, v: (v100.AccountData | undefined)][]>
    getPairs(block: Block, key: v100.AccountId32): Promise<[k: v100.AccountId32, v: (v100.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v100.AccountId32, v: (v100.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<[k: v100.AccountId32, v: (v100.AccountData | undefined)][]>
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
export interface AccountV1030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.AccountData
    get(block: Block, key: v1030.AccountId32): Promise<(v1030.AccountData | undefined)>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<(v1030.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: (v1030.AccountData | undefined)][]>
    getPairs(block: Block, key: v1030.AccountId32): Promise<[k: v1030.AccountId32, v: (v1030.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1030.AccountId32, v: (v1030.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<[k: v1030.AccountId32, v: (v1030.AccountData | undefined)][]>
}
