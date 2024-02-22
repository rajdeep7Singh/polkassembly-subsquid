import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'
import * as v9310 from '../v9310'
import * as v9321 from '../v9321'
import * as v9370 from '../v9370'
import * as v9380 from '../v9380'
import * as v9390 from '../v9390'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v102000 from '../v102000'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9300: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9300.H256], v9300.Call) as ProposalOfV9300,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9310: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9310.H256], v9310.Call) as ProposalOfV9310,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9321: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9321.H256], v9321.Call) as ProposalOfV9321,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9370: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9370.H256], v9370.Call) as ProposalOfV9370,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9380: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9380.H256], v9380.Call) as ProposalOfV9380,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9390: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9390.H256], v9390.Call) as ProposalOfV9390,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9420: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9420.H256], v9420.Call) as ProposalOfV9420,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9430: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9430.H256], v9430.Call) as ProposalOfV9430,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v102000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v102000.H256], v102000.Call) as ProposalOfV102000,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.H256): Promise<(v9300.Call | undefined)>
    getMany(block: Block, keys: v9300.H256[]): Promise<(v9300.Call | undefined)[]>
    getKeys(block: Block): Promise<v9300.H256[]>
    getKeys(block: Block, key: v9300.H256): Promise<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<v9300.H256[]>
    getPairs(block: Block): Promise<[k: v9300.H256, v: (v9300.Call | undefined)][]>
    getPairs(block: Block, key: v9300.H256): Promise<[k: v9300.H256, v: (v9300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.H256, v: (v9300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<[k: v9300.H256, v: (v9300.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9310  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9310.H256): Promise<(v9310.Call | undefined)>
    getMany(block: Block, keys: v9310.H256[]): Promise<(v9310.Call | undefined)[]>
    getKeys(block: Block): Promise<v9310.H256[]>
    getKeys(block: Block, key: v9310.H256): Promise<v9310.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9310.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9310.H256): AsyncIterable<v9310.H256[]>
    getPairs(block: Block): Promise<[k: v9310.H256, v: (v9310.Call | undefined)][]>
    getPairs(block: Block, key: v9310.H256): Promise<[k: v9310.H256, v: (v9310.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9310.H256, v: (v9310.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9310.H256): AsyncIterable<[k: v9310.H256, v: (v9310.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9321  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9321.H256): Promise<(v9321.Call | undefined)>
    getMany(block: Block, keys: v9321.H256[]): Promise<(v9321.Call | undefined)[]>
    getKeys(block: Block): Promise<v9321.H256[]>
    getKeys(block: Block, key: v9321.H256): Promise<v9321.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9321.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9321.H256): AsyncIterable<v9321.H256[]>
    getPairs(block: Block): Promise<[k: v9321.H256, v: (v9321.Call | undefined)][]>
    getPairs(block: Block, key: v9321.H256): Promise<[k: v9321.H256, v: (v9321.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9321.H256, v: (v9321.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9321.H256): AsyncIterable<[k: v9321.H256, v: (v9321.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9370.H256): Promise<(v9370.Call | undefined)>
    getMany(block: Block, keys: v9370.H256[]): Promise<(v9370.Call | undefined)[]>
    getKeys(block: Block): Promise<v9370.H256[]>
    getKeys(block: Block, key: v9370.H256): Promise<v9370.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9370.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9370.H256): AsyncIterable<v9370.H256[]>
    getPairs(block: Block): Promise<[k: v9370.H256, v: (v9370.Call | undefined)][]>
    getPairs(block: Block, key: v9370.H256): Promise<[k: v9370.H256, v: (v9370.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9370.H256, v: (v9370.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9370.H256): AsyncIterable<[k: v9370.H256, v: (v9370.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9380  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9380.H256): Promise<(v9380.Call | undefined)>
    getMany(block: Block, keys: v9380.H256[]): Promise<(v9380.Call | undefined)[]>
    getKeys(block: Block): Promise<v9380.H256[]>
    getKeys(block: Block, key: v9380.H256): Promise<v9380.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9380.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9380.H256): AsyncIterable<v9380.H256[]>
    getPairs(block: Block): Promise<[k: v9380.H256, v: (v9380.Call | undefined)][]>
    getPairs(block: Block, key: v9380.H256): Promise<[k: v9380.H256, v: (v9380.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9380.H256, v: (v9380.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9380.H256): AsyncIterable<[k: v9380.H256, v: (v9380.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9390  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9390.H256): Promise<(v9390.Call | undefined)>
    getMany(block: Block, keys: v9390.H256[]): Promise<(v9390.Call | undefined)[]>
    getKeys(block: Block): Promise<v9390.H256[]>
    getKeys(block: Block, key: v9390.H256): Promise<v9390.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9390.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9390.H256): AsyncIterable<v9390.H256[]>
    getPairs(block: Block): Promise<[k: v9390.H256, v: (v9390.Call | undefined)][]>
    getPairs(block: Block, key: v9390.H256): Promise<[k: v9390.H256, v: (v9390.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9390.H256, v: (v9390.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9390.H256): AsyncIterable<[k: v9390.H256, v: (v9390.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9420.H256): Promise<(v9420.Call | undefined)>
    getMany(block: Block, keys: v9420.H256[]): Promise<(v9420.Call | undefined)[]>
    getKeys(block: Block): Promise<v9420.H256[]>
    getKeys(block: Block, key: v9420.H256): Promise<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<v9420.H256[]>
    getPairs(block: Block): Promise<[k: v9420.H256, v: (v9420.Call | undefined)][]>
    getPairs(block: Block, key: v9420.H256): Promise<[k: v9420.H256, v: (v9420.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.H256, v: (v9420.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<[k: v9420.H256, v: (v9420.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9430  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9430.H256): Promise<(v9430.Call | undefined)>
    getMany(block: Block, keys: v9430.H256[]): Promise<(v9430.Call | undefined)[]>
    getKeys(block: Block): Promise<v9430.H256[]>
    getKeys(block: Block, key: v9430.H256): Promise<v9430.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9430.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9430.H256): AsyncIterable<v9430.H256[]>
    getPairs(block: Block): Promise<[k: v9430.H256, v: (v9430.Call | undefined)][]>
    getPairs(block: Block, key: v9430.H256): Promise<[k: v9430.H256, v: (v9430.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9430.H256, v: (v9430.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9430.H256): AsyncIterable<[k: v9430.H256, v: (v9430.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV102000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v102000.H256): Promise<(v102000.Call | undefined)>
    getMany(block: Block, keys: v102000.H256[]): Promise<(v102000.Call | undefined)[]>
    getKeys(block: Block): Promise<v102000.H256[]>
    getKeys(block: Block, key: v102000.H256): Promise<v102000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v102000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v102000.H256): AsyncIterable<v102000.H256[]>
    getPairs(block: Block): Promise<[k: v102000.H256, v: (v102000.Call | undefined)][]>
    getPairs(block: Block, key: v102000.H256): Promise<[k: v102000.H256, v: (v102000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v102000.H256, v: (v102000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v102000.H256): AsyncIterable<[k: v102000.H256, v: (v102000.Call | undefined)][]>
}
