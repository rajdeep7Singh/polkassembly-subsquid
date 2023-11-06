import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2100 from '../v2100'
import * as v2201 from '../v2201'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v2100: new StorageType('ConvictionVoting.VotingFor', 'Default', [v2100.AccountId20, sts.number()], v2100.Type_468) as VotingForV2100,
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v2201: new StorageType('ConvictionVoting.VotingFor', 'Default', [v2201.AccountId20, sts.number()], v2201.Type_467) as VotingForV2201,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV2100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2100.Type_468
    get(block: Block, key1: v2100.AccountId20, key2: number): Promise<(v2100.Type_468 | undefined)>
    getMany(block: Block, keys: [v2100.AccountId20, number][]): Promise<(v2100.Type_468 | undefined)[]>
    getKeys(block: Block): Promise<[v2100.AccountId20, number][]>
    getKeys(block: Block, key1: v2100.AccountId20): Promise<[v2100.AccountId20, number][]>
    getKeys(block: Block, key1: v2100.AccountId20, key2: number): Promise<[v2100.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2100.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2100.AccountId20): AsyncIterable<[v2100.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2100.AccountId20, key2: number): AsyncIterable<[v2100.AccountId20, number][]>
    getPairs(block: Block): Promise<[k: [v2100.AccountId20, number], v: (v2100.Type_468 | undefined)][]>
    getPairs(block: Block, key1: v2100.AccountId20): Promise<[k: [v2100.AccountId20, number], v: (v2100.Type_468 | undefined)][]>
    getPairs(block: Block, key1: v2100.AccountId20, key2: number): Promise<[k: [v2100.AccountId20, number], v: (v2100.Type_468 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2100.AccountId20, number], v: (v2100.Type_468 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2100.AccountId20): AsyncIterable<[k: [v2100.AccountId20, number], v: (v2100.Type_468 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2100.AccountId20, key2: number): AsyncIterable<[k: [v2100.AccountId20, number], v: (v2100.Type_468 | undefined)][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV2201  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2201.Type_467
    get(block: Block, key1: v2201.AccountId20, key2: number): Promise<(v2201.Type_467 | undefined)>
    getMany(block: Block, keys: [v2201.AccountId20, number][]): Promise<(v2201.Type_467 | undefined)[]>
    getKeys(block: Block): Promise<[v2201.AccountId20, number][]>
    getKeys(block: Block, key1: v2201.AccountId20): Promise<[v2201.AccountId20, number][]>
    getKeys(block: Block, key1: v2201.AccountId20, key2: number): Promise<[v2201.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2201.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2201.AccountId20): AsyncIterable<[v2201.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2201.AccountId20, key2: number): AsyncIterable<[v2201.AccountId20, number][]>
    getPairs(block: Block): Promise<[k: [v2201.AccountId20, number], v: (v2201.Type_467 | undefined)][]>
    getPairs(block: Block, key1: v2201.AccountId20): Promise<[k: [v2201.AccountId20, number], v: (v2201.Type_467 | undefined)][]>
    getPairs(block: Block, key1: v2201.AccountId20, key2: number): Promise<[k: [v2201.AccountId20, number], v: (v2201.Type_467 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2201.AccountId20, number], v: (v2201.Type_467 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2201.AccountId20): AsyncIterable<[k: [v2201.AccountId20, number], v: (v2201.Type_467 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2201.AccountId20, key2: number): AsyncIterable<[k: [v2201.AccountId20, number], v: (v2201.Type_467 | undefined)][]>
}
