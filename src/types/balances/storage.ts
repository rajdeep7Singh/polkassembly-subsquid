import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v283 from '../v283'

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
    v283: new StorageType('Balances.Account', 'Default', [v283.AccountId32], v283.AccountData) as AccountV283,
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
export interface AccountV283  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v283.AccountData
    get(block: Block, key: v283.AccountId32): Promise<(v283.AccountData | undefined)>
    getMany(block: Block, keys: v283.AccountId32[]): Promise<(v283.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v283.AccountId32[]>
    getKeys(block: Block, key: v283.AccountId32): Promise<v283.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.AccountId32): AsyncIterable<v283.AccountId32[]>
    getPairs(block: Block): Promise<[k: v283.AccountId32, v: (v283.AccountData | undefined)][]>
    getPairs(block: Block, key: v283.AccountId32): Promise<[k: v283.AccountId32, v: (v283.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.AccountId32, v: (v283.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.AccountId32): AsyncIterable<[k: v283.AccountId32, v: (v283.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v283: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV283,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV283  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
