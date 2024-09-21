import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v32 from '../v32'

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
    v32: new StorageType('Balances.Account', 'Default', [v32.AccountId32], v32.AccountData) as AccountV32,
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
export interface AccountV32  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v32.AccountData
    get(block: Block, key: v32.AccountId32): Promise<(v32.AccountData | undefined)>
    getMany(block: Block, keys: v32.AccountId32[]): Promise<(v32.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v32.AccountId32[]>
    getKeys(block: Block, key: v32.AccountId32): Promise<v32.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v32.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v32.AccountId32): AsyncIterable<v32.AccountId32[]>
    getPairs(block: Block): Promise<[k: v32.AccountId32, v: (v32.AccountData | undefined)][]>
    getPairs(block: Block, key: v32.AccountId32): Promise<[k: v32.AccountId32, v: (v32.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v32.AccountId32, v: (v32.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v32.AccountId32): AsyncIterable<[k: v32.AccountId32, v: (v32.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v32: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV32,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV32  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
