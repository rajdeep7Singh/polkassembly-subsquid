import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const memberEvidence =  {
    /**
     *  Some evidence together with the desired outcome for which it was presented.
     */
    v1000000: new StorageType('FellowshipCore.MemberEvidence', 'Optional', [v1000000.AccountId32], sts.tuple(() => [v1000000.Wish, sts.bytes()])) as MemberEvidenceV1000000,
}

/**
 *  Some evidence together with the desired outcome for which it was presented.
 */
export interface MemberEvidenceV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.AccountId32): Promise<([v1000000.Wish, Bytes] | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<([v1000000.Wish, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: ([v1000000.Wish, Bytes] | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: ([v1000000.Wish, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: ([v1000000.Wish, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: ([v1000000.Wish, Bytes] | undefined)][]>
}
