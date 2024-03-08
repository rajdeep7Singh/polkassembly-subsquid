import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v5000: new StorageType('Council.ProposalOf', 'Optional', [v5000.H256], v5000.Call) as ProposalOfV5000,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV5000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5000.H256): Promise<(v5000.Call | undefined)>
    getMany(block: Block, keys: v5000.H256[]): Promise<(v5000.Call | undefined)[]>
    getKeys(block: Block): Promise<v5000.H256[]>
    getKeys(block: Block, key: v5000.H256): Promise<v5000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v5000.H256): AsyncIterable<v5000.H256[]>
    getPairs(block: Block): Promise<[k: v5000.H256, v: (v5000.Call | undefined)][]>
    getPairs(block: Block, key: v5000.H256): Promise<[k: v5000.H256, v: (v5000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5000.H256, v: (v5000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5000.H256): AsyncIterable<[k: v5000.H256, v: (v5000.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v5000: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV5000,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV5000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v5000: new StorageType('Council.Members', 'Default', [], sts.array(() => v5000.AccountId32)) as MembersV5000,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV5000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v5000.AccountId32[]
    get(block: Block): Promise<(v5000.AccountId32[] | undefined)>
}
