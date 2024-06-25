import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v21 from '../v21'
import * as v22 from '../v22'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v35 from '../v35'
import * as v37 from '../v37'
import * as v41 from '../v41'
import * as v42 from '../v42'
import * as v520 from '../v520'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v21: new StorageType('Council.ProposalOf', 'Optional', [v21.H256], v21.Call) as ProposalOfV21,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v22: new StorageType('Council.ProposalOf', 'Optional', [v22.H256], v22.Call) as ProposalOfV22,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v26: new StorageType('Council.ProposalOf', 'Optional', [v26.H256], v26.Call) as ProposalOfV26,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v28: new StorageType('Council.ProposalOf', 'Optional', [v28.H256], v28.Call) as ProposalOfV28,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v29: new StorageType('Council.ProposalOf', 'Optional', [v29.H256], v29.Call) as ProposalOfV29,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v35: new StorageType('Council.ProposalOf', 'Optional', [v35.H256], v35.Call) as ProposalOfV35,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v37: new StorageType('Council.ProposalOf', 'Optional', [v37.H256], v37.Call) as ProposalOfV37,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v41: new StorageType('Council.ProposalOf', 'Optional', [v41.H256], v41.Call) as ProposalOfV41,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v42: new StorageType('Council.ProposalOf', 'Optional', [v42.H256], v42.Call) as ProposalOfV42,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v520: new StorageType('Council.ProposalOf', 'Optional', [v520.H256], v520.Call) as ProposalOfV520,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV22  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v22.H256): Promise<(v22.Call | undefined)>
    getMany(block: Block, keys: v22.H256[]): Promise<(v22.Call | undefined)[]>
    getKeys(block: Block): Promise<v22.H256[]>
    getKeys(block: Block, key: v22.H256): Promise<v22.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.H256): AsyncIterable<v22.H256[]>
    getPairs(block: Block): Promise<[k: v22.H256, v: (v22.Call | undefined)][]>
    getPairs(block: Block, key: v22.H256): Promise<[k: v22.H256, v: (v22.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.H256, v: (v22.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.H256): AsyncIterable<[k: v22.H256, v: (v22.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV29  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v29.H256): Promise<(v29.Call | undefined)>
    getMany(block: Block, keys: v29.H256[]): Promise<(v29.Call | undefined)[]>
    getKeys(block: Block): Promise<v29.H256[]>
    getKeys(block: Block, key: v29.H256): Promise<v29.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v29.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v29.H256): AsyncIterable<v29.H256[]>
    getPairs(block: Block): Promise<[k: v29.H256, v: (v29.Call | undefined)][]>
    getPairs(block: Block, key: v29.H256): Promise<[k: v29.H256, v: (v29.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v29.H256, v: (v29.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v29.H256): AsyncIterable<[k: v29.H256, v: (v29.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV35  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v35.H256): Promise<(v35.Call | undefined)>
    getMany(block: Block, keys: v35.H256[]): Promise<(v35.Call | undefined)[]>
    getKeys(block: Block): Promise<v35.H256[]>
    getKeys(block: Block, key: v35.H256): Promise<v35.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v35.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v35.H256): AsyncIterable<v35.H256[]>
    getPairs(block: Block): Promise<[k: v35.H256, v: (v35.Call | undefined)][]>
    getPairs(block: Block, key: v35.H256): Promise<[k: v35.H256, v: (v35.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v35.H256, v: (v35.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v35.H256): AsyncIterable<[k: v35.H256, v: (v35.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV37  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v37.H256): Promise<(v37.Call | undefined)>
    getMany(block: Block, keys: v37.H256[]): Promise<(v37.Call | undefined)[]>
    getKeys(block: Block): Promise<v37.H256[]>
    getKeys(block: Block, key: v37.H256): Promise<v37.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v37.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v37.H256): AsyncIterable<v37.H256[]>
    getPairs(block: Block): Promise<[k: v37.H256, v: (v37.Call | undefined)][]>
    getPairs(block: Block, key: v37.H256): Promise<[k: v37.H256, v: (v37.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v37.H256, v: (v37.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v37.H256): AsyncIterable<[k: v37.H256, v: (v37.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV41  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v41.H256): Promise<(v41.Call | undefined)>
    getMany(block: Block, keys: v41.H256[]): Promise<(v41.Call | undefined)[]>
    getKeys(block: Block): Promise<v41.H256[]>
    getKeys(block: Block, key: v41.H256): Promise<v41.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v41.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v41.H256): AsyncIterable<v41.H256[]>
    getPairs(block: Block): Promise<[k: v41.H256, v: (v41.Call | undefined)][]>
    getPairs(block: Block, key: v41.H256): Promise<[k: v41.H256, v: (v41.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v41.H256, v: (v41.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v41.H256): AsyncIterable<[k: v41.H256, v: (v41.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.H256): Promise<(v42.Call | undefined)>
    getMany(block: Block, keys: v42.H256[]): Promise<(v42.Call | undefined)[]>
    getKeys(block: Block): Promise<v42.H256[]>
    getKeys(block: Block, key: v42.H256): Promise<v42.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.H256): AsyncIterable<v42.H256[]>
    getPairs(block: Block): Promise<[k: v42.H256, v: (v42.Call | undefined)][]>
    getPairs(block: Block, key: v42.H256): Promise<[k: v42.H256, v: (v42.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.H256, v: (v42.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.H256): AsyncIterable<[k: v42.H256, v: (v42.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV520  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v520.H256): Promise<(v520.Call | undefined)>
    getMany(block: Block, keys: v520.H256[]): Promise<(v520.Call | undefined)[]>
    getKeys(block: Block): Promise<v520.H256[]>
    getKeys(block: Block, key: v520.H256): Promise<v520.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v520.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v520.H256): AsyncIterable<v520.H256[]>
    getPairs(block: Block): Promise<[k: v520.H256, v: (v520.Call | undefined)][]>
    getPairs(block: Block, key: v520.H256): Promise<[k: v520.H256, v: (v520.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v520.H256, v: (v520.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v520.H256): AsyncIterable<[k: v520.H256, v: (v520.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v21: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV21,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV21  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v21: new StorageType('Council.Members', 'Default', [], sts.array(() => v21.AccountId32)) as MembersV21,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV21  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v21.AccountId32[]
    get(block: Block): Promise<(v21.AccountId32[] | undefined)>
}
