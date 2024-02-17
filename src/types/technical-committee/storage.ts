import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v273 from '../v273'
import * as v274 from '../v274'
import * as v276 from '../v276'
import * as v277 from '../v277'
import * as v278 from '../v278'
import * as v280 from '../v280'
import * as v281 from '../v281'
import * as v283 from '../v283'
import * as v287 from '../v287'
import * as v312 from '../v312'
import * as v317 from '../v317'
import * as v318 from '../v318'
import * as v326 from '../v326'
import * as v328 from '../v328'

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
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v277: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v277.H256], v277.Call) as ProposalOfV277,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v278: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v278.H256], v278.Call) as ProposalOfV278,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v280: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v280.H256], v280.Call) as ProposalOfV280,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v281: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v281.H256], v281.Call) as ProposalOfV281,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v283: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v283.H256], v283.Call) as ProposalOfV283,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v287: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v287.H256], v287.Call) as ProposalOfV287,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v312: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v312.H256], v312.Call) as ProposalOfV312,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v317: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v317.H256], v317.Call) as ProposalOfV317,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v318: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v318.H256], v318.Call) as ProposalOfV318,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v326: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v326.H256], v326.Call) as ProposalOfV326,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v328: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v328.H256], v328.Call) as ProposalOfV328,
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV277  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v277.H256): Promise<(v277.Call | undefined)>
    getMany(block: Block, keys: v277.H256[]): Promise<(v277.Call | undefined)[]>
    getKeys(block: Block): Promise<v277.H256[]>
    getKeys(block: Block, key: v277.H256): Promise<v277.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v277.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v277.H256): AsyncIterable<v277.H256[]>
    getPairs(block: Block): Promise<[k: v277.H256, v: (v277.Call | undefined)][]>
    getPairs(block: Block, key: v277.H256): Promise<[k: v277.H256, v: (v277.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v277.H256, v: (v277.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v277.H256): AsyncIterable<[k: v277.H256, v: (v277.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV278  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v278.H256): Promise<(v278.Call | undefined)>
    getMany(block: Block, keys: v278.H256[]): Promise<(v278.Call | undefined)[]>
    getKeys(block: Block): Promise<v278.H256[]>
    getKeys(block: Block, key: v278.H256): Promise<v278.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v278.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v278.H256): AsyncIterable<v278.H256[]>
    getPairs(block: Block): Promise<[k: v278.H256, v: (v278.Call | undefined)][]>
    getPairs(block: Block, key: v278.H256): Promise<[k: v278.H256, v: (v278.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v278.H256, v: (v278.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v278.H256): AsyncIterable<[k: v278.H256, v: (v278.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v280.H256): Promise<(v280.Call | undefined)>
    getMany(block: Block, keys: v280.H256[]): Promise<(v280.Call | undefined)[]>
    getKeys(block: Block): Promise<v280.H256[]>
    getKeys(block: Block, key: v280.H256): Promise<v280.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v280.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v280.H256): AsyncIterable<v280.H256[]>
    getPairs(block: Block): Promise<[k: v280.H256, v: (v280.Call | undefined)][]>
    getPairs(block: Block, key: v280.H256): Promise<[k: v280.H256, v: (v280.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v280.H256, v: (v280.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v280.H256): AsyncIterable<[k: v280.H256, v: (v280.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV281  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v281.H256): Promise<(v281.Call | undefined)>
    getMany(block: Block, keys: v281.H256[]): Promise<(v281.Call | undefined)[]>
    getKeys(block: Block): Promise<v281.H256[]>
    getKeys(block: Block, key: v281.H256): Promise<v281.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v281.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v281.H256): AsyncIterable<v281.H256[]>
    getPairs(block: Block): Promise<[k: v281.H256, v: (v281.Call | undefined)][]>
    getPairs(block: Block, key: v281.H256): Promise<[k: v281.H256, v: (v281.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v281.H256, v: (v281.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v281.H256): AsyncIterable<[k: v281.H256, v: (v281.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v283.H256): Promise<(v283.Call | undefined)>
    getMany(block: Block, keys: v283.H256[]): Promise<(v283.Call | undefined)[]>
    getKeys(block: Block): Promise<v283.H256[]>
    getKeys(block: Block, key: v283.H256): Promise<v283.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.H256): AsyncIterable<v283.H256[]>
    getPairs(block: Block): Promise<[k: v283.H256, v: (v283.Call | undefined)][]>
    getPairs(block: Block, key: v283.H256): Promise<[k: v283.H256, v: (v283.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.H256, v: (v283.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.H256): AsyncIterable<[k: v283.H256, v: (v283.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV287  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v287.H256): Promise<(v287.Call | undefined)>
    getMany(block: Block, keys: v287.H256[]): Promise<(v287.Call | undefined)[]>
    getKeys(block: Block): Promise<v287.H256[]>
    getKeys(block: Block, key: v287.H256): Promise<v287.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v287.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v287.H256): AsyncIterable<v287.H256[]>
    getPairs(block: Block): Promise<[k: v287.H256, v: (v287.Call | undefined)][]>
    getPairs(block: Block, key: v287.H256): Promise<[k: v287.H256, v: (v287.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v287.H256, v: (v287.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v287.H256): AsyncIterable<[k: v287.H256, v: (v287.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV312  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v312.H256): Promise<(v312.Call | undefined)>
    getMany(block: Block, keys: v312.H256[]): Promise<(v312.Call | undefined)[]>
    getKeys(block: Block): Promise<v312.H256[]>
    getKeys(block: Block, key: v312.H256): Promise<v312.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v312.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v312.H256): AsyncIterable<v312.H256[]>
    getPairs(block: Block): Promise<[k: v312.H256, v: (v312.Call | undefined)][]>
    getPairs(block: Block, key: v312.H256): Promise<[k: v312.H256, v: (v312.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v312.H256, v: (v312.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v312.H256): AsyncIterable<[k: v312.H256, v: (v312.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV317  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v317.H256): Promise<(v317.Call | undefined)>
    getMany(block: Block, keys: v317.H256[]): Promise<(v317.Call | undefined)[]>
    getKeys(block: Block): Promise<v317.H256[]>
    getKeys(block: Block, key: v317.H256): Promise<v317.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v317.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v317.H256): AsyncIterable<v317.H256[]>
    getPairs(block: Block): Promise<[k: v317.H256, v: (v317.Call | undefined)][]>
    getPairs(block: Block, key: v317.H256): Promise<[k: v317.H256, v: (v317.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v317.H256, v: (v317.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v317.H256): AsyncIterable<[k: v317.H256, v: (v317.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV318  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v318.H256): Promise<(v318.Call | undefined)>
    getMany(block: Block, keys: v318.H256[]): Promise<(v318.Call | undefined)[]>
    getKeys(block: Block): Promise<v318.H256[]>
    getKeys(block: Block, key: v318.H256): Promise<v318.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v318.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v318.H256): AsyncIterable<v318.H256[]>
    getPairs(block: Block): Promise<[k: v318.H256, v: (v318.Call | undefined)][]>
    getPairs(block: Block, key: v318.H256): Promise<[k: v318.H256, v: (v318.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v318.H256, v: (v318.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v318.H256): AsyncIterable<[k: v318.H256, v: (v318.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV326  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v326.H256): Promise<(v326.Call | undefined)>
    getMany(block: Block, keys: v326.H256[]): Promise<(v326.Call | undefined)[]>
    getKeys(block: Block): Promise<v326.H256[]>
    getKeys(block: Block, key: v326.H256): Promise<v326.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v326.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v326.H256): AsyncIterable<v326.H256[]>
    getPairs(block: Block): Promise<[k: v326.H256, v: (v326.Call | undefined)][]>
    getPairs(block: Block, key: v326.H256): Promise<[k: v326.H256, v: (v326.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v326.H256, v: (v326.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v326.H256): AsyncIterable<[k: v326.H256, v: (v326.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV328  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v328.H256): Promise<(v328.Call | undefined)>
    getMany(block: Block, keys: v328.H256[]): Promise<(v328.Call | undefined)[]>
    getKeys(block: Block): Promise<v328.H256[]>
    getKeys(block: Block, key: v328.H256): Promise<v328.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v328.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v328.H256): AsyncIterable<v328.H256[]>
    getPairs(block: Block): Promise<[k: v328.H256, v: (v328.Call | undefined)][]>
    getPairs(block: Block, key: v328.H256): Promise<[k: v328.H256, v: (v328.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v328.H256, v: (v328.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v328.H256): AsyncIterable<[k: v328.H256, v: (v328.Call | undefined)][]>
}
