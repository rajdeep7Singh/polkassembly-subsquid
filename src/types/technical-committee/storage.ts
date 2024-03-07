import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'
import * as v5002 from '../v5002'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v5000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v5000.H256], v5000.Call) as ProposalOfV5000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v5002: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v5002.H256], v5002.Call) as ProposalOfV5002,
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV5002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5002.H256): Promise<(v5002.Call | undefined)>
    getMany(block: Block, keys: v5002.H256[]): Promise<(v5002.Call | undefined)[]>
    getKeys(block: Block): Promise<v5002.H256[]>
    getKeys(block: Block, key: v5002.H256): Promise<v5002.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5002.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v5002.H256): AsyncIterable<v5002.H256[]>
    getPairs(block: Block): Promise<[k: v5002.H256, v: (v5002.Call | undefined)][]>
    getPairs(block: Block, key: v5002.H256): Promise<[k: v5002.H256, v: (v5002.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5002.H256, v: (v5002.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5002.H256): AsyncIterable<[k: v5002.H256, v: (v5002.Call | undefined)][]>
}
