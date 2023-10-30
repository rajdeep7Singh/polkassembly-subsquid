import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1900 from '../v1900'
import * as v2201 from '../v2201'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v1900: new StorageType('ConvictionVoting.VotingFor', 'Default', [v1900.AccountId20, sts.number()], v1900.Type_535) as VotingForV1900,
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v2201: new StorageType('ConvictionVoting.VotingFor', 'Default', [v2201.AccountId20, sts.number()], v2201.Type_544) as VotingForV2201,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV1900  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1900.Type_535
    get(block: Block, key1: v1900.AccountId20, key2: number): Promise<(v1900.Type_535 | undefined)>
    getMany(block: Block, keys: [v1900.AccountId20, number][]): Promise<(v1900.Type_535 | undefined)[]>
    getKeys(block: Block): Promise<[v1900.AccountId20, number][]>
    getKeys(block: Block, key1: v1900.AccountId20): Promise<[v1900.AccountId20, number][]>
    getKeys(block: Block, key1: v1900.AccountId20, key2: number): Promise<[v1900.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1900.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1900.AccountId20): AsyncIterable<[v1900.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1900.AccountId20, key2: number): AsyncIterable<[v1900.AccountId20, number][]>
    getPairs(block: Block): Promise<[k: [v1900.AccountId20, number], v: (v1900.Type_535 | undefined)][]>
    getPairs(block: Block, key1: v1900.AccountId20): Promise<[k: [v1900.AccountId20, number], v: (v1900.Type_535 | undefined)][]>
    getPairs(block: Block, key1: v1900.AccountId20, key2: number): Promise<[k: [v1900.AccountId20, number], v: (v1900.Type_535 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1900.AccountId20, number], v: (v1900.Type_535 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1900.AccountId20): AsyncIterable<[k: [v1900.AccountId20, number], v: (v1900.Type_535 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1900.AccountId20, key2: number): AsyncIterable<[k: [v1900.AccountId20, number], v: (v1900.Type_535 | undefined)][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV2201  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2201.Type_544
    get(block: Block, key1: v2201.AccountId20, key2: number): Promise<(v2201.Type_544 | undefined)>
    getMany(block: Block, keys: [v2201.AccountId20, number][]): Promise<(v2201.Type_544 | undefined)[]>
    getKeys(block: Block): Promise<[v2201.AccountId20, number][]>
    getKeys(block: Block, key1: v2201.AccountId20): Promise<[v2201.AccountId20, number][]>
    getKeys(block: Block, key1: v2201.AccountId20, key2: number): Promise<[v2201.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2201.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2201.AccountId20): AsyncIterable<[v2201.AccountId20, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2201.AccountId20, key2: number): AsyncIterable<[v2201.AccountId20, number][]>
    getPairs(block: Block): Promise<[k: [v2201.AccountId20, number], v: (v2201.Type_544 | undefined)][]>
    getPairs(block: Block, key1: v2201.AccountId20): Promise<[k: [v2201.AccountId20, number], v: (v2201.Type_544 | undefined)][]>
    getPairs(block: Block, key1: v2201.AccountId20, key2: number): Promise<[k: [v2201.AccountId20, number], v: (v2201.Type_544 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2201.AccountId20, number], v: (v2201.Type_544 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2201.AccountId20): AsyncIterable<[k: [v2201.AccountId20, number], v: (v2201.Type_544 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2201.AccountId20, key2: number): AsyncIterable<[k: [v2201.AccountId20, number], v: (v2201.Type_544 | undefined)][]>
}
