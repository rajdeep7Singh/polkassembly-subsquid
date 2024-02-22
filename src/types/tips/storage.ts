import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'

export const tips =  {
    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v9300: new StorageType('Tips.Tips', 'Optional', [v9300.H256], v9300.OpenTip) as TipsV9300,
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.H256): Promise<(v9300.OpenTip | undefined)>
    getMany(block: Block, keys: v9300.H256[]): Promise<(v9300.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v9300.H256[]>
    getKeys(block: Block, key: v9300.H256): Promise<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<v9300.H256[]>
    getPairs(block: Block): Promise<[k: v9300.H256, v: (v9300.OpenTip | undefined)][]>
    getPairs(block: Block, key: v9300.H256): Promise<[k: v9300.H256, v: (v9300.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.H256, v: (v9300.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<[k: v9300.H256, v: (v9300.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v9300: new StorageType('Tips.Reasons', 'Optional', [v9300.H256], sts.bytes()) as ReasonsV9300,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.H256): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v9300.H256[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v9300.H256[]>
    getKeys(block: Block, key: v9300.H256): Promise<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<v9300.H256[]>
    getPairs(block: Block): Promise<[k: v9300.H256, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v9300.H256): Promise<[k: v9300.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<[k: v9300.H256, v: (Bytes | undefined)][]>
}
