import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV9290 from '../collectivesV9290'
import * as collectivesV9420 from '../collectivesV9420'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    collectivesV9290: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceCollectivesV9290,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceCollectivesV9290  {
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
    collectivesV9290: new StorageType('Balances.Account', 'Default', [collectivesV9290.AccountId32], collectivesV9290.AccountData) as AccountCollectivesV9290,
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
    collectivesV9420: new StorageType('Balances.Account', 'Default', [collectivesV9420.AccountId32], collectivesV9420.AccountData) as AccountCollectivesV9420,
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
export interface AccountCollectivesV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): collectivesV9290.AccountData
    get(block: Block, key: collectivesV9290.AccountId32): Promise<(collectivesV9290.AccountData | undefined)>
    getMany(block: Block, keys: collectivesV9290.AccountId32[]): Promise<(collectivesV9290.AccountData | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9290.AccountId32[]>
    getKeys(block: Block, key: collectivesV9290.AccountId32): Promise<collectivesV9290.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9290.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9290.AccountId32): AsyncIterable<collectivesV9290.AccountId32[]>
    getPairs(block: Block): Promise<[k: collectivesV9290.AccountId32, v: (collectivesV9290.AccountData | undefined)][]>
    getPairs(block: Block, key: collectivesV9290.AccountId32): Promise<[k: collectivesV9290.AccountId32, v: (collectivesV9290.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9290.AccountId32, v: (collectivesV9290.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9290.AccountId32): AsyncIterable<[k: collectivesV9290.AccountId32, v: (collectivesV9290.AccountData | undefined)][]>
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
export interface AccountCollectivesV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): collectivesV9420.AccountData
    get(block: Block, key: collectivesV9420.AccountId32): Promise<(collectivesV9420.AccountData | undefined)>
    getMany(block: Block, keys: collectivesV9420.AccountId32[]): Promise<(collectivesV9420.AccountData | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9420.AccountId32[]>
    getKeys(block: Block, key: collectivesV9420.AccountId32): Promise<collectivesV9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9420.AccountId32): AsyncIterable<collectivesV9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: collectivesV9420.AccountId32, v: (collectivesV9420.AccountData | undefined)][]>
    getPairs(block: Block, key: collectivesV9420.AccountId32): Promise<[k: collectivesV9420.AccountId32, v: (collectivesV9420.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9420.AccountId32, v: (collectivesV9420.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9420.AccountId32): AsyncIterable<[k: collectivesV9420.AccountId32, v: (collectivesV9420.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    collectivesV9360: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceCollectivesV9360,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceCollectivesV9360  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
