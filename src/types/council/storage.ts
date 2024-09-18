import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2100 from '../v2100'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v2100: new StorageType('Council.ProposalOf', 'Optional', [v2100.H256], v2100.Call) as ProposalOfV2100,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV2100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2100.H256): Promise<(v2100.Call | undefined)>
    getMany(block: Block, keys: v2100.H256[]): Promise<(v2100.Call | undefined)[]>
    getKeys(block: Block): Promise<v2100.H256[]>
    getKeys(block: Block, key: v2100.H256): Promise<v2100.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2100.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2100.H256): AsyncIterable<v2100.H256[]>
    getPairs(block: Block): Promise<[k: v2100.H256, v: (v2100.Call | undefined)][]>
    getPairs(block: Block, key: v2100.H256): Promise<[k: v2100.H256, v: (v2100.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2100.H256, v: (v2100.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2100.H256): AsyncIterable<[k: v2100.H256, v: (v2100.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v2100: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV2100,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV2100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v2100: new StorageType('Council.Members', 'Default', [], sts.array(() => v2100.AccountId20)) as MembersV2100,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV2100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2100.AccountId20[]
    get(block: Block): Promise<(v2100.AccountId20[] | undefined)>
}
