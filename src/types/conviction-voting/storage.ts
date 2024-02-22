import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v103000 from '../v103000'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v103000: new StorageType('ConvictionVoting.VotingFor', 'Default', [v103000.AccountId32, sts.number()], v103000.Voting) as VotingForV103000,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV103000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v103000.Voting
    get(block: Block, key1: v103000.AccountId32, key2: number): Promise<(v103000.Voting | undefined)>
    getMany(block: Block, keys: [v103000.AccountId32, number][]): Promise<(v103000.Voting | undefined)[]>
    getKeys(block: Block): Promise<[v103000.AccountId32, number][]>
    getKeys(block: Block, key1: v103000.AccountId32): Promise<[v103000.AccountId32, number][]>
    getKeys(block: Block, key1: v103000.AccountId32, key2: number): Promise<[v103000.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v103000.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v103000.AccountId32): AsyncIterable<[v103000.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v103000.AccountId32, key2: number): AsyncIterable<[v103000.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v103000.AccountId32, number], v: (v103000.Voting | undefined)][]>
    getPairs(block: Block, key1: v103000.AccountId32): Promise<[k: [v103000.AccountId32, number], v: (v103000.Voting | undefined)][]>
    getPairs(block: Block, key1: v103000.AccountId32, key2: number): Promise<[k: [v103000.AccountId32, number], v: (v103000.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v103000.AccountId32, number], v: (v103000.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v103000.AccountId32): AsyncIterable<[k: [v103000.AccountId32, number], v: (v103000.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v103000.AccountId32, key2: number): AsyncIterable<[k: [v103000.AccountId32, number], v: (v103000.Voting | undefined)][]>
}
