import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v35 from '../v35'
import * as v36 from '../v36'
import * as v37 from '../v37'
import * as v38 from '../v38'
import * as v39 from '../v39'
import * as v40 from '../v40'
import * as v41 from '../v41'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v47 from '../v47'
import * as v48 from '../v48'
import * as v49 from '../v49'
import * as v50 from '../v50'
import * as v51 from '../v51'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v34: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v34.H256], v34.Call) as ProposalOfV34,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v35: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v35.H256], v35.Call) as ProposalOfV35,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v36: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v36.H256], v36.Call) as ProposalOfV36,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v37: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v37.H256], v37.Call) as ProposalOfV37,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v38: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v38.H256], v38.Call) as ProposalOfV38,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v39: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v39.H256], v39.Call) as ProposalOfV39,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v40: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v40.H256], v40.Call) as ProposalOfV40,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v41: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v41.H256], v41.Call) as ProposalOfV41,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v42: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v42.H256], v42.Call) as ProposalOfV42,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v46: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v46.H256], v46.Call) as ProposalOfV46,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v47: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v47.H256], v47.Call) as ProposalOfV47,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v48: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v48.H256], v48.Call) as ProposalOfV48,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v49: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v49.H256], v49.Call) as ProposalOfV49,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v50: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v50.H256], v50.Call) as ProposalOfV50,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v51: new StorageType('AdvisoryCommittee.ProposalOf', 'Optional', [v51.H256], v51.Call) as ProposalOfV51,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV34  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v34.H256): Promise<(v34.Call | undefined)>
    getMany(block: Block, keys: v34.H256[]): Promise<(v34.Call | undefined)[]>
    getKeys(block: Block): Promise<v34.H256[]>
    getKeys(block: Block, key: v34.H256): Promise<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<v34.H256[]>
    getPairs(block: Block): Promise<[k: v34.H256, v: (v34.Call | undefined)][]>
    getPairs(block: Block, key: v34.H256): Promise<[k: v34.H256, v: (v34.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v34.H256, v: (v34.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<[k: v34.H256, v: (v34.Call | undefined)][]>
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
export interface ProposalOfV36  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v36.H256): Promise<(v36.Call | undefined)>
    getMany(block: Block, keys: v36.H256[]): Promise<(v36.Call | undefined)[]>
    getKeys(block: Block): Promise<v36.H256[]>
    getKeys(block: Block, key: v36.H256): Promise<v36.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v36.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v36.H256): AsyncIterable<v36.H256[]>
    getPairs(block: Block): Promise<[k: v36.H256, v: (v36.Call | undefined)][]>
    getPairs(block: Block, key: v36.H256): Promise<[k: v36.H256, v: (v36.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v36.H256, v: (v36.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v36.H256): AsyncIterable<[k: v36.H256, v: (v36.Call | undefined)][]>
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
export interface ProposalOfV38  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v38.H256): Promise<(v38.Call | undefined)>
    getMany(block: Block, keys: v38.H256[]): Promise<(v38.Call | undefined)[]>
    getKeys(block: Block): Promise<v38.H256[]>
    getKeys(block: Block, key: v38.H256): Promise<v38.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v38.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v38.H256): AsyncIterable<v38.H256[]>
    getPairs(block: Block): Promise<[k: v38.H256, v: (v38.Call | undefined)][]>
    getPairs(block: Block, key: v38.H256): Promise<[k: v38.H256, v: (v38.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v38.H256, v: (v38.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v38.H256): AsyncIterable<[k: v38.H256, v: (v38.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV39  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v39.H256): Promise<(v39.Call | undefined)>
    getMany(block: Block, keys: v39.H256[]): Promise<(v39.Call | undefined)[]>
    getKeys(block: Block): Promise<v39.H256[]>
    getKeys(block: Block, key: v39.H256): Promise<v39.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v39.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v39.H256): AsyncIterable<v39.H256[]>
    getPairs(block: Block): Promise<[k: v39.H256, v: (v39.Call | undefined)][]>
    getPairs(block: Block, key: v39.H256): Promise<[k: v39.H256, v: (v39.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v39.H256, v: (v39.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v39.H256): AsyncIterable<[k: v39.H256, v: (v39.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV40  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v40.H256): Promise<(v40.Call | undefined)>
    getMany(block: Block, keys: v40.H256[]): Promise<(v40.Call | undefined)[]>
    getKeys(block: Block): Promise<v40.H256[]>
    getKeys(block: Block, key: v40.H256): Promise<v40.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v40.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v40.H256): AsyncIterable<v40.H256[]>
    getPairs(block: Block): Promise<[k: v40.H256, v: (v40.Call | undefined)][]>
    getPairs(block: Block, key: v40.H256): Promise<[k: v40.H256, v: (v40.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v40.H256, v: (v40.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v40.H256): AsyncIterable<[k: v40.H256, v: (v40.Call | undefined)][]>
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
export interface ProposalOfV46  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v46.H256): Promise<(v46.Call | undefined)>
    getMany(block: Block, keys: v46.H256[]): Promise<(v46.Call | undefined)[]>
    getKeys(block: Block): Promise<v46.H256[]>
    getKeys(block: Block, key: v46.H256): Promise<v46.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v46.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v46.H256): AsyncIterable<v46.H256[]>
    getPairs(block: Block): Promise<[k: v46.H256, v: (v46.Call | undefined)][]>
    getPairs(block: Block, key: v46.H256): Promise<[k: v46.H256, v: (v46.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v46.H256, v: (v46.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v46.H256): AsyncIterable<[k: v46.H256, v: (v46.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV47  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v47.H256): Promise<(v47.Call | undefined)>
    getMany(block: Block, keys: v47.H256[]): Promise<(v47.Call | undefined)[]>
    getKeys(block: Block): Promise<v47.H256[]>
    getKeys(block: Block, key: v47.H256): Promise<v47.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v47.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v47.H256): AsyncIterable<v47.H256[]>
    getPairs(block: Block): Promise<[k: v47.H256, v: (v47.Call | undefined)][]>
    getPairs(block: Block, key: v47.H256): Promise<[k: v47.H256, v: (v47.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v47.H256, v: (v47.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v47.H256): AsyncIterable<[k: v47.H256, v: (v47.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV49  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v49.H256): Promise<(v49.Call | undefined)>
    getMany(block: Block, keys: v49.H256[]): Promise<(v49.Call | undefined)[]>
    getKeys(block: Block): Promise<v49.H256[]>
    getKeys(block: Block, key: v49.H256): Promise<v49.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v49.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v49.H256): AsyncIterable<v49.H256[]>
    getPairs(block: Block): Promise<[k: v49.H256, v: (v49.Call | undefined)][]>
    getPairs(block: Block, key: v49.H256): Promise<[k: v49.H256, v: (v49.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v49.H256, v: (v49.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v49.H256): AsyncIterable<[k: v49.H256, v: (v49.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV50  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v50.H256): Promise<(v50.Call | undefined)>
    getMany(block: Block, keys: v50.H256[]): Promise<(v50.Call | undefined)[]>
    getKeys(block: Block): Promise<v50.H256[]>
    getKeys(block: Block, key: v50.H256): Promise<v50.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v50.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v50.H256): AsyncIterable<v50.H256[]>
    getPairs(block: Block): Promise<[k: v50.H256, v: (v50.Call | undefined)][]>
    getPairs(block: Block, key: v50.H256): Promise<[k: v50.H256, v: (v50.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v50.H256, v: (v50.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v50.H256): AsyncIterable<[k: v50.H256, v: (v50.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV51  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v51.H256): Promise<(v51.Call | undefined)>
    getMany(block: Block, keys: v51.H256[]): Promise<(v51.Call | undefined)[]>
    getKeys(block: Block): Promise<v51.H256[]>
    getKeys(block: Block, key: v51.H256): Promise<v51.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v51.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v51.H256): AsyncIterable<v51.H256[]>
    getPairs(block: Block): Promise<[k: v51.H256, v: (v51.Call | undefined)][]>
    getPairs(block: Block, key: v51.H256): Promise<[k: v51.H256, v: (v51.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v51.H256, v: (v51.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v51.H256): AsyncIterable<[k: v51.H256, v: (v51.Call | undefined)][]>
}
