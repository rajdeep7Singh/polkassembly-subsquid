import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v11 from '../v11'
import * as v21 from '../v21'
import * as v24 from '../v24'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v44 from '../v44'
import * as v48 from '../v48'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1: new StorageType('Council.ProposalOf', 'Optional', [v1.H256], v1.Call) as ProposalOfV1,
    v11: new StorageType('Council.ProposalOf', 'Optional', [v11.H256], v11.Call) as ProposalOfV11,
    v21: new StorageType('Council.ProposalOf', 'Optional', [v21.H256], v21.Call) as ProposalOfV21,
    v24: new StorageType('Council.ProposalOf', 'Optional', [v24.H256], v24.Call) as ProposalOfV24,
    v26: new StorageType('Council.ProposalOf', 'Optional', [v26.H256], v26.Call) as ProposalOfV26,
    v28: new StorageType('Council.ProposalOf', 'Optional', [v28.H256], v28.Call) as ProposalOfV28,
    v44: new StorageType('Council.ProposalOf', 'Optional', [v44.H256], v44.Call) as ProposalOfV44,
    v48: new StorageType('Council.ProposalOf', 'Optional', [v48.H256], v48.Call) as ProposalOfV48,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.H256): Promise<(v1.Call | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<(v1.Call | undefined)[]>
    getKeys(block: Block): Promise<v1.H256[]>
    getKeys(block: Block, key: v1.H256): Promise<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<v1.H256[]>
    getPairs(block: Block): Promise<[k: v1.H256, v: (v1.Call | undefined)][]>
    getPairs(block: Block, key: v1.H256): Promise<[k: v1.H256, v: (v1.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.H256, v: (v1.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<[k: v1.H256, v: (v1.Call | undefined)][]>
}

export interface ProposalOfV11  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11.H256): Promise<(v11.Call | undefined)>
    getMany(block: Block, keys: v11.H256[]): Promise<(v11.Call | undefined)[]>
    getKeys(block: Block): Promise<v11.H256[]>
    getKeys(block: Block, key: v11.H256): Promise<v11.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11.H256): AsyncIterable<v11.H256[]>
    getPairs(block: Block): Promise<[k: v11.H256, v: (v11.Call | undefined)][]>
    getPairs(block: Block, key: v11.H256): Promise<[k: v11.H256, v: (v11.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11.H256, v: (v11.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11.H256): AsyncIterable<[k: v11.H256, v: (v11.Call | undefined)][]>
}

export interface ProposalOfV21  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v21.H256): Promise<(v21.Call | undefined)>
    getMany(block: Block, keys: v21.H256[]): Promise<(v21.Call | undefined)[]>
    getKeys(block: Block): Promise<v21.H256[]>
    getKeys(block: Block, key: v21.H256): Promise<v21.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v21.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v21.H256): AsyncIterable<v21.H256[]>
    getPairs(block: Block): Promise<[k: v21.H256, v: (v21.Call | undefined)][]>
    getPairs(block: Block, key: v21.H256): Promise<[k: v21.H256, v: (v21.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v21.H256, v: (v21.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v21.H256): AsyncIterable<[k: v21.H256, v: (v21.Call | undefined)][]>
}

export interface ProposalOfV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.H256): Promise<(v24.Call | undefined)>
    getMany(block: Block, keys: v24.H256[]): Promise<(v24.Call | undefined)[]>
    getKeys(block: Block): Promise<v24.H256[]>
    getKeys(block: Block, key: v24.H256): Promise<v24.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.H256): AsyncIterable<v24.H256[]>
    getPairs(block: Block): Promise<[k: v24.H256, v: (v24.Call | undefined)][]>
    getPairs(block: Block, key: v24.H256): Promise<[k: v24.H256, v: (v24.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.H256, v: (v24.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.H256): AsyncIterable<[k: v24.H256, v: (v24.Call | undefined)][]>
}

export interface ProposalOfV26  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v26.H256): Promise<(v26.Call | undefined)>
    getMany(block: Block, keys: v26.H256[]): Promise<(v26.Call | undefined)[]>
    getKeys(block: Block): Promise<v26.H256[]>
    getKeys(block: Block, key: v26.H256): Promise<v26.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.H256): AsyncIterable<v26.H256[]>
    getPairs(block: Block): Promise<[k: v26.H256, v: (v26.Call | undefined)][]>
    getPairs(block: Block, key: v26.H256): Promise<[k: v26.H256, v: (v26.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.H256, v: (v26.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.H256): AsyncIterable<[k: v26.H256, v: (v26.Call | undefined)][]>
}

export interface ProposalOfV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.H256): Promise<(v28.Call | undefined)>
    getMany(block: Block, keys: v28.H256[]): Promise<(v28.Call | undefined)[]>
    getKeys(block: Block): Promise<v28.H256[]>
    getKeys(block: Block, key: v28.H256): Promise<v28.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.H256): AsyncIterable<v28.H256[]>
    getPairs(block: Block): Promise<[k: v28.H256, v: (v28.Call | undefined)][]>
    getPairs(block: Block, key: v28.H256): Promise<[k: v28.H256, v: (v28.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.H256, v: (v28.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.H256): AsyncIterable<[k: v28.H256, v: (v28.Call | undefined)][]>
}

export interface ProposalOfV44  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v44.H256): Promise<(v44.Call | undefined)>
    getMany(block: Block, keys: v44.H256[]): Promise<(v44.Call | undefined)[]>
    getKeys(block: Block): Promise<v44.H256[]>
    getKeys(block: Block, key: v44.H256): Promise<v44.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v44.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v44.H256): AsyncIterable<v44.H256[]>
    getPairs(block: Block): Promise<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairs(block: Block, key: v44.H256): Promise<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v44.H256): AsyncIterable<[k: v44.H256, v: (v44.Call | undefined)][]>
}

export interface ProposalOfV48  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48.H256): Promise<(v48.Call | undefined)>
    getMany(block: Block, keys: v48.H256[]): Promise<(v48.Call | undefined)[]>
    getKeys(block: Block): Promise<v48.H256[]>
    getKeys(block: Block, key: v48.H256): Promise<v48.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48.H256): AsyncIterable<v48.H256[]>
    getPairs(block: Block): Promise<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairs(block: Block, key: v48.H256): Promise<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48.H256): AsyncIterable<[k: v48.H256, v: (v48.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v1: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV1,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v1: new StorageType('Council.Members', 'Default', [], sts.array(() => v1.AccountId32)) as MembersV1,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId32[]
    get(block: Block): Promise<(v1.AccountId32[] | undefined)>
}
