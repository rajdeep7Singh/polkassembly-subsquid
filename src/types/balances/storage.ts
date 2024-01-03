import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v44 from '../v44'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v1: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV1,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV1  {
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
    v1: new StorageType('Balances.Account', 'Default', [v1.AccountId32], v1.AccountData) as AccountV1,
    v44: new StorageType('Balances.Account', 'Default', [v44.AccountId32], v44.AccountData) as AccountV44,
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
export interface AccountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountData
    get(block: Block, key: v1.AccountId32): Promise<(v1.AccountData | undefined)>
    getMany(block: Block, keys: v1.AccountId32[]): Promise<(v1.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId32[]>
    getKeys(block: Block, key: v1.AccountId32): Promise<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<v1.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1.AccountId32, v: (v1.AccountData | undefined)][]>
    getPairs(block: Block, key: v1.AccountId32): Promise<[k: v1.AccountId32, v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId32, v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<[k: v1.AccountId32, v: (v1.AccountData | undefined)][]>
}

export interface AccountV44  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v44.AccountData
    get(block: Block, key: v44.AccountId32): Promise<(v44.AccountData | undefined)>
    getMany(block: Block, keys: v44.AccountId32[]): Promise<(v44.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v44.AccountId32[]>
    getKeys(block: Block, key: v44.AccountId32): Promise<v44.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v44.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v44.AccountId32): AsyncIterable<v44.AccountId32[]>
    getPairs(block: Block): Promise<[k: v44.AccountId32, v: (v44.AccountData | undefined)][]>
    getPairs(block: Block, key: v44.AccountId32): Promise<[k: v44.AccountId32, v: (v44.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v44.AccountId32, v: (v44.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v44.AccountId32): AsyncIterable<[k: v44.AccountId32, v: (v44.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    v11: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV11,
}

export interface InactiveIssuanceV11  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
