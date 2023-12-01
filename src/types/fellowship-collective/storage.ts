import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const members =  {
    /**
     *  The current members of the collective.
     */
    v9420: new StorageType('FellowshipCollective.Members', 'Optional', [v9420.AccountId32], v9420.MemberRecord) as MembersV9420,
}

/**
 *  The current members of the collective.
 */
export interface MembersV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.MemberRecord | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.MemberRecord | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.MemberRecord | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.MemberRecord | undefined)][]>
}
