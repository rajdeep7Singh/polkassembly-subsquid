import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV1000000 from '../collectivesV1000000'

export const memberEvidence =  {
    /**
     *  Some evidence together with the desired outcome for which it was presented.
     */
    collectivesV1000000: new StorageType('FellowshipCore.MemberEvidence', 'Optional', [collectivesV1000000.AccountId32], sts.tuple(() => [collectivesV1000000.Wish, sts.bytes()])) as MemberEvidenceCollectivesV1000000,
}

/**
 *  Some evidence together with the desired outcome for which it was presented.
 */
export interface MemberEvidenceCollectivesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV1000000.AccountId32): Promise<([collectivesV1000000.Wish, Bytes] | undefined)>
    getMany(block: Block, keys: collectivesV1000000.AccountId32[]): Promise<([collectivesV1000000.Wish, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<collectivesV1000000.AccountId32[]>
    getKeys(block: Block, key: collectivesV1000000.AccountId32): Promise<collectivesV1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV1000000.AccountId32): AsyncIterable<collectivesV1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: collectivesV1000000.AccountId32, v: ([collectivesV1000000.Wish, Bytes] | undefined)][]>
    getPairs(block: Block, key: collectivesV1000000.AccountId32): Promise<[k: collectivesV1000000.AccountId32, v: ([collectivesV1000000.Wish, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV1000000.AccountId32, v: ([collectivesV1000000.Wish, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV1000000.AccountId32): AsyncIterable<[k: collectivesV1000000.AccountId32, v: ([collectivesV1000000.Wish, Bytes] | undefined)][]>
}
