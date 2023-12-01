import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'

export const members =  {
    /**
     *  The current members of the collective.
     */
    collectivesV9420: new StorageType('FellowshipCollective.Members', 'Optional', [collectivesV9420.AccountId32], collectivesV9420.MemberRecord) as MembersCollectivesV9420,
}

/**
 *  The current members of the collective.
 */
export interface MembersCollectivesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9420.AccountId32): Promise<(collectivesV9420.MemberRecord | undefined)>
    getMany(block: Block, keys: collectivesV9420.AccountId32[]): Promise<(collectivesV9420.MemberRecord | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9420.AccountId32[]>
    getKeys(block: Block, key: collectivesV9420.AccountId32): Promise<collectivesV9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9420.AccountId32): AsyncIterable<collectivesV9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: collectivesV9420.AccountId32, v: (collectivesV9420.MemberRecord | undefined)][]>
    getPairs(block: Block, key: collectivesV9420.AccountId32): Promise<[k: collectivesV9420.AccountId32, v: (collectivesV9420.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9420.AccountId32, v: (collectivesV9420.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9420.AccountId32): AsyncIterable<[k: collectivesV9420.AccountId32, v: (collectivesV9420.MemberRecord | undefined)][]>
}
