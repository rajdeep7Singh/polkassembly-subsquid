import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v53102 from '../v53102'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v53102: new StorageType('ConvictionVoting.VotingFor', 'Default', [v53102.AccountId32, sts.number()], v53102.Voting) as VotingForV53102,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV53102  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v53102.Voting
    get(block: Block, key1: v53102.AccountId32, key2: number): Promise<(v53102.Voting | undefined)>
    getMany(block: Block, keys: [v53102.AccountId32, number][]): Promise<(v53102.Voting | undefined)[]>
    getKeys(block: Block): Promise<[v53102.AccountId32, number][]>
    getKeys(block: Block, key1: v53102.AccountId32): Promise<[v53102.AccountId32, number][]>
    getKeys(block: Block, key1: v53102.AccountId32, key2: number): Promise<[v53102.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v53102.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v53102.AccountId32): AsyncIterable<[v53102.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v53102.AccountId32, key2: number): AsyncIterable<[v53102.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v53102.AccountId32, number], v: (v53102.Voting | undefined)][]>
    getPairs(block: Block, key1: v53102.AccountId32): Promise<[k: [v53102.AccountId32, number], v: (v53102.Voting | undefined)][]>
    getPairs(block: Block, key1: v53102.AccountId32, key2: number): Promise<[k: [v53102.AccountId32, number], v: (v53102.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v53102.AccountId32, number], v: (v53102.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v53102.AccountId32): AsyncIterable<[k: [v53102.AccountId32, number], v: (v53102.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v53102.AccountId32, key2: number): AsyncIterable<[k: [v53102.AccountId32, number], v: (v53102.Voting | undefined)][]>
}
