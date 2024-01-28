import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v278 from '../v278'
import * as v280 from '../v280'
import * as v281 from '../v281'
import * as v282 from '../v282'
import * as v283 from '../v283'
import * as v284 from '../v284'
import * as v285 from '../v285'
import * as v288 from '../v288'
import * as v290 from '../v290'
import * as v291 from '../v291'
import * as v292 from '../v292'
import * as v293 from '../v293'
import * as v294 from '../v294'
import * as v295 from '../v295'
import * as v297 from '../v297'
import * as v299 from '../v299'
import * as v300 from '../v300'
import * as v301 from '../v301'
import * as v30500 from '../v30500'
import * as v30800 from '../v30800'
import * as v43000 from '../v43000'
import * as v45000 from '../v45000'
import * as v46000 from '../v46000'
import * as v47000 from '../v47000'
import * as v48001 from '../v48001'
import * as v48202 from '../v48202'
import * as v48300 from '../v48300'
import * as v48400 from '../v48400'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v266: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v266.Hash], v266.Proposal) as ProposalOfV266,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v278: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v278.Hash], v278.Proposal) as ProposalOfV278,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v280: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v280.Hash], v280.Proposal) as ProposalOfV280,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v281: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v281.Hash], v281.Proposal) as ProposalOfV281,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v282: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v282.Hash], v282.Proposal) as ProposalOfV282,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v283: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v283.Hash], v283.Proposal) as ProposalOfV283,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v284: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v284.Hash], v284.Proposal) as ProposalOfV284,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v285: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v285.Hash], v285.Proposal) as ProposalOfV285,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v288: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v288.Hash], v288.Proposal) as ProposalOfV288,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v290: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v290.Hash], v290.Proposal) as ProposalOfV290,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v291: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v291.Hash], v291.Proposal) as ProposalOfV291,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v292: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v292.Hash], v292.Proposal) as ProposalOfV292,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v293: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v293.Hash], v293.Proposal) as ProposalOfV293,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v294: new StorageType('Instance2Collective.ProposalOf', 'Optional', [v294.Hash], v294.Proposal) as ProposalOfV294,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v295: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v295.H256], v295.Call) as ProposalOfV295,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v297: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v297.H256], v297.Call) as ProposalOfV297,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v299: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v299.H256], v299.Call) as ProposalOfV299,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v300: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v300.H256], v300.Call) as ProposalOfV300,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v301: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v301.H256], v301.Call) as ProposalOfV301,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v30500: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v30500.H256], v30500.Call) as ProposalOfV30500,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v30800: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v30800.H256], v30800.Call) as ProposalOfV30800,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v43000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v43000.H256], v43000.Call) as ProposalOfV43000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v45000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v45000.H256], v45000.Call) as ProposalOfV45000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v46000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v46000.H256], v46000.Call) as ProposalOfV46000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v47000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v47000.H256], v47000.Call) as ProposalOfV47000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v48001: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v48001.H256], v48001.Call) as ProposalOfV48001,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v48202: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v48202.H256], v48202.Call) as ProposalOfV48202,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v48300: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v48300.H256], v48300.Call) as ProposalOfV48300,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v48400: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v48400.H256], v48400.Call) as ProposalOfV48400,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.Hash): Promise<(v266.Proposal | undefined)>
    getMany(block: Block, keys: v266.Hash[]): Promise<(v266.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v266.Hash[]>
    getKeys(block: Block, key: v266.Hash): Promise<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<v266.Hash[]>
    getPairs(block: Block): Promise<[k: v266.Hash, v: (v266.Proposal | undefined)][]>
    getPairs(block: Block, key: v266.Hash): Promise<[k: v266.Hash, v: (v266.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.Hash, v: (v266.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<[k: v266.Hash, v: (v266.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV278  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v278.Hash): Promise<(v278.Proposal | undefined)>
    getMany(block: Block, keys: v278.Hash[]): Promise<(v278.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v278.Hash[]>
    getKeys(block: Block, key: v278.Hash): Promise<v278.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v278.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v278.Hash): AsyncIterable<v278.Hash[]>
    getPairs(block: Block): Promise<[k: v278.Hash, v: (v278.Proposal | undefined)][]>
    getPairs(block: Block, key: v278.Hash): Promise<[k: v278.Hash, v: (v278.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v278.Hash, v: (v278.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v278.Hash): AsyncIterable<[k: v278.Hash, v: (v278.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v280.Hash): Promise<(v280.Proposal | undefined)>
    getMany(block: Block, keys: v280.Hash[]): Promise<(v280.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v280.Hash[]>
    getKeys(block: Block, key: v280.Hash): Promise<v280.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v280.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v280.Hash): AsyncIterable<v280.Hash[]>
    getPairs(block: Block): Promise<[k: v280.Hash, v: (v280.Proposal | undefined)][]>
    getPairs(block: Block, key: v280.Hash): Promise<[k: v280.Hash, v: (v280.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v280.Hash, v: (v280.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v280.Hash): AsyncIterable<[k: v280.Hash, v: (v280.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV281  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v281.Hash): Promise<(v281.Proposal | undefined)>
    getMany(block: Block, keys: v281.Hash[]): Promise<(v281.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v281.Hash[]>
    getKeys(block: Block, key: v281.Hash): Promise<v281.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v281.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v281.Hash): AsyncIterable<v281.Hash[]>
    getPairs(block: Block): Promise<[k: v281.Hash, v: (v281.Proposal | undefined)][]>
    getPairs(block: Block, key: v281.Hash): Promise<[k: v281.Hash, v: (v281.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v281.Hash, v: (v281.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v281.Hash): AsyncIterable<[k: v281.Hash, v: (v281.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV282  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v282.Hash): Promise<(v282.Proposal | undefined)>
    getMany(block: Block, keys: v282.Hash[]): Promise<(v282.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v282.Hash[]>
    getKeys(block: Block, key: v282.Hash): Promise<v282.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v282.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v282.Hash): AsyncIterable<v282.Hash[]>
    getPairs(block: Block): Promise<[k: v282.Hash, v: (v282.Proposal | undefined)][]>
    getPairs(block: Block, key: v282.Hash): Promise<[k: v282.Hash, v: (v282.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v282.Hash, v: (v282.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v282.Hash): AsyncIterable<[k: v282.Hash, v: (v282.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v283.Hash): Promise<(v283.Proposal | undefined)>
    getMany(block: Block, keys: v283.Hash[]): Promise<(v283.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v283.Hash[]>
    getKeys(block: Block, key: v283.Hash): Promise<v283.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.Hash): AsyncIterable<v283.Hash[]>
    getPairs(block: Block): Promise<[k: v283.Hash, v: (v283.Proposal | undefined)][]>
    getPairs(block: Block, key: v283.Hash): Promise<[k: v283.Hash, v: (v283.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.Hash, v: (v283.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.Hash): AsyncIterable<[k: v283.Hash, v: (v283.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV284  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v284.Hash): Promise<(v284.Proposal | undefined)>
    getMany(block: Block, keys: v284.Hash[]): Promise<(v284.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v284.Hash[]>
    getKeys(block: Block, key: v284.Hash): Promise<v284.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v284.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v284.Hash): AsyncIterable<v284.Hash[]>
    getPairs(block: Block): Promise<[k: v284.Hash, v: (v284.Proposal | undefined)][]>
    getPairs(block: Block, key: v284.Hash): Promise<[k: v284.Hash, v: (v284.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v284.Hash, v: (v284.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v284.Hash): AsyncIterable<[k: v284.Hash, v: (v284.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV285  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v285.Hash): Promise<(v285.Proposal | undefined)>
    getMany(block: Block, keys: v285.Hash[]): Promise<(v285.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v285.Hash[]>
    getKeys(block: Block, key: v285.Hash): Promise<v285.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v285.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v285.Hash): AsyncIterable<v285.Hash[]>
    getPairs(block: Block): Promise<[k: v285.Hash, v: (v285.Proposal | undefined)][]>
    getPairs(block: Block, key: v285.Hash): Promise<[k: v285.Hash, v: (v285.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v285.Hash, v: (v285.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v285.Hash): AsyncIterable<[k: v285.Hash, v: (v285.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV288  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v288.Hash): Promise<(v288.Proposal | undefined)>
    getMany(block: Block, keys: v288.Hash[]): Promise<(v288.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v288.Hash[]>
    getKeys(block: Block, key: v288.Hash): Promise<v288.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v288.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v288.Hash): AsyncIterable<v288.Hash[]>
    getPairs(block: Block): Promise<[k: v288.Hash, v: (v288.Proposal | undefined)][]>
    getPairs(block: Block, key: v288.Hash): Promise<[k: v288.Hash, v: (v288.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v288.Hash, v: (v288.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v288.Hash): AsyncIterable<[k: v288.Hash, v: (v288.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV290  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v290.Hash): Promise<(v290.Proposal | undefined)>
    getMany(block: Block, keys: v290.Hash[]): Promise<(v290.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v290.Hash[]>
    getKeys(block: Block, key: v290.Hash): Promise<v290.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v290.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v290.Hash): AsyncIterable<v290.Hash[]>
    getPairs(block: Block): Promise<[k: v290.Hash, v: (v290.Proposal | undefined)][]>
    getPairs(block: Block, key: v290.Hash): Promise<[k: v290.Hash, v: (v290.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v290.Hash, v: (v290.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v290.Hash): AsyncIterable<[k: v290.Hash, v: (v290.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV291  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v291.Hash): Promise<(v291.Proposal | undefined)>
    getMany(block: Block, keys: v291.Hash[]): Promise<(v291.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v291.Hash[]>
    getKeys(block: Block, key: v291.Hash): Promise<v291.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v291.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v291.Hash): AsyncIterable<v291.Hash[]>
    getPairs(block: Block): Promise<[k: v291.Hash, v: (v291.Proposal | undefined)][]>
    getPairs(block: Block, key: v291.Hash): Promise<[k: v291.Hash, v: (v291.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v291.Hash, v: (v291.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v291.Hash): AsyncIterable<[k: v291.Hash, v: (v291.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV292  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v292.Hash): Promise<(v292.Proposal | undefined)>
    getMany(block: Block, keys: v292.Hash[]): Promise<(v292.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v292.Hash[]>
    getKeys(block: Block, key: v292.Hash): Promise<v292.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v292.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v292.Hash): AsyncIterable<v292.Hash[]>
    getPairs(block: Block): Promise<[k: v292.Hash, v: (v292.Proposal | undefined)][]>
    getPairs(block: Block, key: v292.Hash): Promise<[k: v292.Hash, v: (v292.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v292.Hash, v: (v292.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v292.Hash): AsyncIterable<[k: v292.Hash, v: (v292.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV293  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v293.Hash): Promise<(v293.Proposal | undefined)>
    getMany(block: Block, keys: v293.Hash[]): Promise<(v293.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v293.Hash[]>
    getKeys(block: Block, key: v293.Hash): Promise<v293.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v293.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v293.Hash): AsyncIterable<v293.Hash[]>
    getPairs(block: Block): Promise<[k: v293.Hash, v: (v293.Proposal | undefined)][]>
    getPairs(block: Block, key: v293.Hash): Promise<[k: v293.Hash, v: (v293.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v293.Hash, v: (v293.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v293.Hash): AsyncIterable<[k: v293.Hash, v: (v293.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV294  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v294.Hash): Promise<(v294.Proposal | undefined)>
    getMany(block: Block, keys: v294.Hash[]): Promise<(v294.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v294.Hash[]>
    getKeys(block: Block, key: v294.Hash): Promise<v294.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v294.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v294.Hash): AsyncIterable<v294.Hash[]>
    getPairs(block: Block): Promise<[k: v294.Hash, v: (v294.Proposal | undefined)][]>
    getPairs(block: Block, key: v294.Hash): Promise<[k: v294.Hash, v: (v294.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v294.Hash, v: (v294.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v294.Hash): AsyncIterable<[k: v294.Hash, v: (v294.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV295  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v295.H256): Promise<(v295.Call | undefined)>
    getMany(block: Block, keys: v295.H256[]): Promise<(v295.Call | undefined)[]>
    getKeys(block: Block): Promise<v295.H256[]>
    getKeys(block: Block, key: v295.H256): Promise<v295.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v295.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v295.H256): AsyncIterable<v295.H256[]>
    getPairs(block: Block): Promise<[k: v295.H256, v: (v295.Call | undefined)][]>
    getPairs(block: Block, key: v295.H256): Promise<[k: v295.H256, v: (v295.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v295.H256, v: (v295.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v295.H256): AsyncIterable<[k: v295.H256, v: (v295.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV297  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v297.H256): Promise<(v297.Call | undefined)>
    getMany(block: Block, keys: v297.H256[]): Promise<(v297.Call | undefined)[]>
    getKeys(block: Block): Promise<v297.H256[]>
    getKeys(block: Block, key: v297.H256): Promise<v297.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v297.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v297.H256): AsyncIterable<v297.H256[]>
    getPairs(block: Block): Promise<[k: v297.H256, v: (v297.Call | undefined)][]>
    getPairs(block: Block, key: v297.H256): Promise<[k: v297.H256, v: (v297.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v297.H256, v: (v297.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v297.H256): AsyncIterable<[k: v297.H256, v: (v297.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV299  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v299.H256): Promise<(v299.Call | undefined)>
    getMany(block: Block, keys: v299.H256[]): Promise<(v299.Call | undefined)[]>
    getKeys(block: Block): Promise<v299.H256[]>
    getKeys(block: Block, key: v299.H256): Promise<v299.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v299.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v299.H256): AsyncIterable<v299.H256[]>
    getPairs(block: Block): Promise<[k: v299.H256, v: (v299.Call | undefined)][]>
    getPairs(block: Block, key: v299.H256): Promise<[k: v299.H256, v: (v299.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v299.H256, v: (v299.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v299.H256): AsyncIterable<[k: v299.H256, v: (v299.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v300.H256): Promise<(v300.Call | undefined)>
    getMany(block: Block, keys: v300.H256[]): Promise<(v300.Call | undefined)[]>
    getKeys(block: Block): Promise<v300.H256[]>
    getKeys(block: Block, key: v300.H256): Promise<v300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v300.H256): AsyncIterable<v300.H256[]>
    getPairs(block: Block): Promise<[k: v300.H256, v: (v300.Call | undefined)][]>
    getPairs(block: Block, key: v300.H256): Promise<[k: v300.H256, v: (v300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v300.H256, v: (v300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v300.H256): AsyncIterable<[k: v300.H256, v: (v300.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV301  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v301.H256): Promise<(v301.Call | undefined)>
    getMany(block: Block, keys: v301.H256[]): Promise<(v301.Call | undefined)[]>
    getKeys(block: Block): Promise<v301.H256[]>
    getKeys(block: Block, key: v301.H256): Promise<v301.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v301.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v301.H256): AsyncIterable<v301.H256[]>
    getPairs(block: Block): Promise<[k: v301.H256, v: (v301.Call | undefined)][]>
    getPairs(block: Block, key: v301.H256): Promise<[k: v301.H256, v: (v301.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v301.H256, v: (v301.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v301.H256): AsyncIterable<[k: v301.H256, v: (v301.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV30500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v30500.H256): Promise<(v30500.Call | undefined)>
    getMany(block: Block, keys: v30500.H256[]): Promise<(v30500.Call | undefined)[]>
    getKeys(block: Block): Promise<v30500.H256[]>
    getKeys(block: Block, key: v30500.H256): Promise<v30500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v30500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v30500.H256): AsyncIterable<v30500.H256[]>
    getPairs(block: Block): Promise<[k: v30500.H256, v: (v30500.Call | undefined)][]>
    getPairs(block: Block, key: v30500.H256): Promise<[k: v30500.H256, v: (v30500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v30500.H256, v: (v30500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v30500.H256): AsyncIterable<[k: v30500.H256, v: (v30500.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV30800  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v30800.H256): Promise<(v30800.Call | undefined)>
    getMany(block: Block, keys: v30800.H256[]): Promise<(v30800.Call | undefined)[]>
    getKeys(block: Block): Promise<v30800.H256[]>
    getKeys(block: Block, key: v30800.H256): Promise<v30800.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v30800.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v30800.H256): AsyncIterable<v30800.H256[]>
    getPairs(block: Block): Promise<[k: v30800.H256, v: (v30800.Call | undefined)][]>
    getPairs(block: Block, key: v30800.H256): Promise<[k: v30800.H256, v: (v30800.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v30800.H256, v: (v30800.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v30800.H256): AsyncIterable<[k: v30800.H256, v: (v30800.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV43000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v43000.H256): Promise<(v43000.Call | undefined)>
    getMany(block: Block, keys: v43000.H256[]): Promise<(v43000.Call | undefined)[]>
    getKeys(block: Block): Promise<v43000.H256[]>
    getKeys(block: Block, key: v43000.H256): Promise<v43000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v43000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v43000.H256): AsyncIterable<v43000.H256[]>
    getPairs(block: Block): Promise<[k: v43000.H256, v: (v43000.Call | undefined)][]>
    getPairs(block: Block, key: v43000.H256): Promise<[k: v43000.H256, v: (v43000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v43000.H256, v: (v43000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v43000.H256): AsyncIterable<[k: v43000.H256, v: (v43000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV45000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v45000.H256): Promise<(v45000.Call | undefined)>
    getMany(block: Block, keys: v45000.H256[]): Promise<(v45000.Call | undefined)[]>
    getKeys(block: Block): Promise<v45000.H256[]>
    getKeys(block: Block, key: v45000.H256): Promise<v45000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v45000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v45000.H256): AsyncIterable<v45000.H256[]>
    getPairs(block: Block): Promise<[k: v45000.H256, v: (v45000.Call | undefined)][]>
    getPairs(block: Block, key: v45000.H256): Promise<[k: v45000.H256, v: (v45000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v45000.H256, v: (v45000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v45000.H256): AsyncIterable<[k: v45000.H256, v: (v45000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV46000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v46000.H256): Promise<(v46000.Call | undefined)>
    getMany(block: Block, keys: v46000.H256[]): Promise<(v46000.Call | undefined)[]>
    getKeys(block: Block): Promise<v46000.H256[]>
    getKeys(block: Block, key: v46000.H256): Promise<v46000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v46000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v46000.H256): AsyncIterable<v46000.H256[]>
    getPairs(block: Block): Promise<[k: v46000.H256, v: (v46000.Call | undefined)][]>
    getPairs(block: Block, key: v46000.H256): Promise<[k: v46000.H256, v: (v46000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v46000.H256, v: (v46000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v46000.H256): AsyncIterable<[k: v46000.H256, v: (v46000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV47000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v47000.H256): Promise<(v47000.Call | undefined)>
    getMany(block: Block, keys: v47000.H256[]): Promise<(v47000.Call | undefined)[]>
    getKeys(block: Block): Promise<v47000.H256[]>
    getKeys(block: Block, key: v47000.H256): Promise<v47000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v47000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v47000.H256): AsyncIterable<v47000.H256[]>
    getPairs(block: Block): Promise<[k: v47000.H256, v: (v47000.Call | undefined)][]>
    getPairs(block: Block, key: v47000.H256): Promise<[k: v47000.H256, v: (v47000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v47000.H256, v: (v47000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v47000.H256): AsyncIterable<[k: v47000.H256, v: (v47000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV48001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48001.H256): Promise<(v48001.Call | undefined)>
    getMany(block: Block, keys: v48001.H256[]): Promise<(v48001.Call | undefined)[]>
    getKeys(block: Block): Promise<v48001.H256[]>
    getKeys(block: Block, key: v48001.H256): Promise<v48001.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48001.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48001.H256): AsyncIterable<v48001.H256[]>
    getPairs(block: Block): Promise<[k: v48001.H256, v: (v48001.Call | undefined)][]>
    getPairs(block: Block, key: v48001.H256): Promise<[k: v48001.H256, v: (v48001.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48001.H256, v: (v48001.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48001.H256): AsyncIterable<[k: v48001.H256, v: (v48001.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV48202  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48202.H256): Promise<(v48202.Call | undefined)>
    getMany(block: Block, keys: v48202.H256[]): Promise<(v48202.Call | undefined)[]>
    getKeys(block: Block): Promise<v48202.H256[]>
    getKeys(block: Block, key: v48202.H256): Promise<v48202.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48202.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48202.H256): AsyncIterable<v48202.H256[]>
    getPairs(block: Block): Promise<[k: v48202.H256, v: (v48202.Call | undefined)][]>
    getPairs(block: Block, key: v48202.H256): Promise<[k: v48202.H256, v: (v48202.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48202.H256, v: (v48202.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48202.H256): AsyncIterable<[k: v48202.H256, v: (v48202.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV48300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48300.H256): Promise<(v48300.Call | undefined)>
    getMany(block: Block, keys: v48300.H256[]): Promise<(v48300.Call | undefined)[]>
    getKeys(block: Block): Promise<v48300.H256[]>
    getKeys(block: Block, key: v48300.H256): Promise<v48300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48300.H256): AsyncIterable<v48300.H256[]>
    getPairs(block: Block): Promise<[k: v48300.H256, v: (v48300.Call | undefined)][]>
    getPairs(block: Block, key: v48300.H256): Promise<[k: v48300.H256, v: (v48300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48300.H256, v: (v48300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48300.H256): AsyncIterable<[k: v48300.H256, v: (v48300.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV48400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48400.H256): Promise<(v48400.Call | undefined)>
    getMany(block: Block, keys: v48400.H256[]): Promise<(v48400.Call | undefined)[]>
    getKeys(block: Block): Promise<v48400.H256[]>
    getKeys(block: Block, key: v48400.H256): Promise<v48400.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48400.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48400.H256): AsyncIterable<v48400.H256[]>
    getPairs(block: Block): Promise<[k: v48400.H256, v: (v48400.Call | undefined)][]>
    getPairs(block: Block, key: v48400.H256): Promise<[k: v48400.H256, v: (v48400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48400.H256, v: (v48400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48400.H256): AsyncIterable<[k: v48400.H256, v: (v48400.Call | undefined)][]>
}
