import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10038 from '../v10038'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v10038: new StorageType('ConvictionVoting.VotingFor', 'Default', [v10038.AccountId32, sts.number()], v10038.Type_656) as VotingForV10038,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV10038  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10038.Type_656
    get(block: Block, key1: v10038.AccountId32, key2: number): Promise<(v10038.Type_656 | undefined)>
    getMany(block: Block, keys: [v10038.AccountId32, number][]): Promise<(v10038.Type_656 | undefined)[]>
    getKeys(block: Block): Promise<[v10038.AccountId32, number][]>
    getKeys(block: Block, key1: v10038.AccountId32): Promise<[v10038.AccountId32, number][]>
    getKeys(block: Block, key1: v10038.AccountId32, key2: number): Promise<[v10038.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v10038.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v10038.AccountId32): AsyncIterable<[v10038.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v10038.AccountId32, key2: number): AsyncIterable<[v10038.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v10038.AccountId32, number], v: (v10038.Type_656 | undefined)][]>
    getPairs(block: Block, key1: v10038.AccountId32): Promise<[k: [v10038.AccountId32, number], v: (v10038.Type_656 | undefined)][]>
    getPairs(block: Block, key1: v10038.AccountId32, key2: number): Promise<[k: [v10038.AccountId32, number], v: (v10038.Type_656 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v10038.AccountId32, number], v: (v10038.Type_656 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v10038.AccountId32): AsyncIterable<[k: [v10038.AccountId32, number], v: (v10038.Type_656 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v10038.AccountId32, key2: number): AsyncIterable<[k: [v10038.AccountId32, number], v: (v10038.Type_656 | undefined)][]>
}
