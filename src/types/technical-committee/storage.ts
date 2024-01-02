import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v273 from '../v273'
import * as v274 from '../v274'
import * as v276 from '../v276'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v268: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v268.Hash], v268.Proposal) as ProposalOfV268,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v273: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v273.Hash], v273.Proposal) as ProposalOfV273,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v274: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v274.H256], v274.Call) as ProposalOfV274,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v276: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v276.H256], v276.Call) as ProposalOfV276,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV268  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v268.Hash): Promise<(v268.Proposal | undefined)>
    getMany(block: Block, keys: v268.Hash[]): Promise<(v268.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v268.Hash[]>
    getKeys(block: Block, key: v268.Hash): Promise<v268.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v268.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v268.Hash): AsyncIterable<v268.Hash[]>
    getPairs(block: Block): Promise<[k: v268.Hash, v: (v268.Proposal | undefined)][]>
    getPairs(block: Block, key: v268.Hash): Promise<[k: v268.Hash, v: (v268.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v268.Hash, v: (v268.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v268.Hash): AsyncIterable<[k: v268.Hash, v: (v268.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV273  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v273.Hash): Promise<(v273.Proposal | undefined)>
    getMany(block: Block, keys: v273.Hash[]): Promise<(v273.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v273.Hash[]>
    getKeys(block: Block, key: v273.Hash): Promise<v273.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v273.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v273.Hash): AsyncIterable<v273.Hash[]>
    getPairs(block: Block): Promise<[k: v273.Hash, v: (v273.Proposal | undefined)][]>
    getPairs(block: Block, key: v273.Hash): Promise<[k: v273.Hash, v: (v273.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v273.Hash, v: (v273.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v273.Hash): AsyncIterable<[k: v273.Hash, v: (v273.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v274.H256): Promise<(v274.Call | undefined)>
    getMany(block: Block, keys: v274.H256[]): Promise<(v274.Call | undefined)[]>
    getKeys(block: Block): Promise<v274.H256[]>
    getKeys(block: Block, key: v274.H256): Promise<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<v274.H256[]>
    getPairs(block: Block): Promise<[k: v274.H256, v: (v274.Call | undefined)][]>
    getPairs(block: Block, key: v274.H256): Promise<[k: v274.H256, v: (v274.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v274.H256, v: (v274.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<[k: v274.H256, v: (v274.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV276  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v276.H256): Promise<(v276.Call | undefined)>
    getMany(block: Block, keys: v276.H256[]): Promise<(v276.Call | undefined)[]>
    getKeys(block: Block): Promise<v276.H256[]>
    getKeys(block: Block, key: v276.H256): Promise<v276.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v276.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v276.H256): AsyncIterable<v276.H256[]>
    getPairs(block: Block): Promise<[k: v276.H256, v: (v276.Call | undefined)][]>
    getPairs(block: Block, key: v276.H256): Promise<[k: v276.H256, v: (v276.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v276.H256, v: (v276.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v276.H256): AsyncIterable<[k: v276.H256, v: (v276.Call | undefined)][]>
}
