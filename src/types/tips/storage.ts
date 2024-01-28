import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v283 from '../v283'

export const tips =  {
    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v295: new StorageType('Tips.Tips', 'Optional', [v283.Hash], v283.OpenTip) as TipsV283,
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v283.Hash): Promise<(v283.OpenTip | undefined)>
    getMany(block: Block, keys: v283.Hash[]): Promise<(v283.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v283.Hash[]>
    getKeys(block: Block, key: v283.Hash): Promise<v283.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.Hash): AsyncIterable<v283.Hash[]>
    getPairs(block: Block): Promise<[k: v283.Hash, v: (v283.OpenTip | undefined)][]>
    getPairs(block: Block, key: v283.Hash): Promise<[k: v283.Hash, v: (v283.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.Hash, v: (v283.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.Hash): AsyncIterable<[k: v283.Hash, v: (v283.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v295: new StorageType('Tips.Reasons', 'Optional', [v283.Hash], sts.bytes()) as ReasonsV283,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v283.Hash): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v283.Hash[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v283.Hash[]>
    getKeys(block: Block, key: v283.Hash): Promise<v283.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.Hash): AsyncIterable<v283.Hash[]>
    getPairs(block: Block): Promise<[k: v283.Hash, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v283.Hash): Promise<[k: v283.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.Hash): AsyncIterable<[k: v283.Hash, v: (Bytes | undefined)][]>
}
