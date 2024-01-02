import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10700 from '../v10700'

export const tips =  {
    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v10700: new StorageType('Tips.Tips', 'Optional', [v10700.H256], v10700.OpenTip) as TipsV10700,
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV10700  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10700.H256): Promise<(v10700.OpenTip | undefined)>
    getMany(block: Block, keys: v10700.H256[]): Promise<(v10700.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v10700.H256[]>
    getKeys(block: Block, key: v10700.H256): Promise<v10700.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10700.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10700.H256): AsyncIterable<v10700.H256[]>
    getPairs(block: Block): Promise<[k: v10700.H256, v: (v10700.OpenTip | undefined)][]>
    getPairs(block: Block, key: v10700.H256): Promise<[k: v10700.H256, v: (v10700.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10700.H256, v: (v10700.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10700.H256): AsyncIterable<[k: v10700.H256, v: (v10700.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v10700: new StorageType('Tips.Reasons', 'Optional', [v10700.H256], sts.bytes()) as ReasonsV10700,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV10700  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10700.H256): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v10700.H256[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v10700.H256[]>
    getKeys(block: Block, key: v10700.H256): Promise<v10700.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10700.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10700.H256): AsyncIterable<v10700.H256[]>
    getPairs(block: Block): Promise<[k: v10700.H256, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v10700.H256): Promise<[k: v10700.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10700.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10700.H256): AsyncIterable<[k: v10700.H256, v: (Bytes | undefined)][]>
}
