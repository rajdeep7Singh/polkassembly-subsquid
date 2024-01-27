import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v200 from '../v200'
import * as v1000 from '../v1000'
import * as v1200 from '../v1200'
import * as v1400 from '../v1400'
import * as v10002 from '../v10002'
import * as v10005 from '../v10005'
import * as v10009 from '../v10009'
import * as v10010 from '../v10010'
import * as v10013 from '../v10013'
import * as v10015 from '../v10015'
import * as v10016 from '../v10016'
import * as v10019 from '../v10019'
import * as v10025 from '../v10025'
import * as v10029 from '../v10029'
import * as v10030 from '../v10030'
import * as v10034 from '../v10034'
import * as v10037 from '../v10037'
import * as v10038 from '../v10038'
import * as v10040 from '../v10040'
import * as v10041 from '../v10041'
import * as v10043 from '../v10043'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v200: new StorageType('Council.ProposalOf', 'Optional', [v200.H256], v200.Call) as ProposalOfV200,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1000: new StorageType('Council.ProposalOf', 'Optional', [v1000.H256], v1000.Call) as ProposalOfV1000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1200: new StorageType('Council.ProposalOf', 'Optional', [v1200.H256], v1200.Call) as ProposalOfV1200,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1400: new StorageType('Council.ProposalOf', 'Optional', [v1400.H256], v1400.Call) as ProposalOfV1400,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10002: new StorageType('Council.ProposalOf', 'Optional', [v10002.H256], v10002.Call) as ProposalOfV10002,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10005: new StorageType('Council.ProposalOf', 'Optional', [v10005.H256], v10005.Call) as ProposalOfV10005,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10009: new StorageType('Council.ProposalOf', 'Optional', [v10009.H256], v10009.Call) as ProposalOfV10009,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10010: new StorageType('Council.ProposalOf', 'Optional', [v10010.H256], v10010.Call) as ProposalOfV10010,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10013: new StorageType('Council.ProposalOf', 'Optional', [v10013.H256], v10013.Call) as ProposalOfV10013,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10015: new StorageType('Council.ProposalOf', 'Optional', [v10015.H256], v10015.Call) as ProposalOfV10015,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10016: new StorageType('Council.ProposalOf', 'Optional', [v10016.H256], v10016.Call) as ProposalOfV10016,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10019: new StorageType('Council.ProposalOf', 'Optional', [v10019.H256], v10019.Call) as ProposalOfV10019,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10025: new StorageType('Council.ProposalOf', 'Optional', [v10025.H256], v10025.Call) as ProposalOfV10025,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10029: new StorageType('Council.ProposalOf', 'Optional', [v10029.H256], v10029.Call) as ProposalOfV10029,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10030: new StorageType('Council.ProposalOf', 'Optional', [v10030.H256], v10030.Call) as ProposalOfV10030,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10034: new StorageType('Council.ProposalOf', 'Optional', [v10034.H256], v10034.Call) as ProposalOfV10034,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10037: new StorageType('Council.ProposalOf', 'Optional', [v10037.H256], v10037.Call) as ProposalOfV10037,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10038: new StorageType('Council.ProposalOf', 'Optional', [v10038.H256], v10038.Call) as ProposalOfV10038,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10040: new StorageType('Council.ProposalOf', 'Optional', [v10040.H256], v10040.Call) as ProposalOfV10040,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10041: new StorageType('Council.ProposalOf', 'Optional', [v10041.H256], v10041.Call) as ProposalOfV10041,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10043: new StorageType('Council.ProposalOf', 'Optional', [v10043.H256], v10043.Call) as ProposalOfV10043,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v200.H256): Promise<(v200.Call | undefined)>
    getMany(block: Block, keys: v200.H256[]): Promise<(v200.Call | undefined)[]>
    getKeys(block: Block): Promise<v200.H256[]>
    getKeys(block: Block, key: v200.H256): Promise<v200.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v200.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v200.H256): AsyncIterable<v200.H256[]>
    getPairs(block: Block): Promise<[k: v200.H256, v: (v200.Call | undefined)][]>
    getPairs(block: Block, key: v200.H256): Promise<[k: v200.H256, v: (v200.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v200.H256, v: (v200.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v200.H256): AsyncIterable<[k: v200.H256, v: (v200.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.H256): Promise<(v1000.Call | undefined)>
    getMany(block: Block, keys: v1000.H256[]): Promise<(v1000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1000.H256[]>
    getKeys(block: Block, key: v1000.H256): Promise<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<v1000.H256[]>
    getPairs(block: Block): Promise<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairs(block: Block, key: v1000.H256): Promise<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<[k: v1000.H256, v: (v1000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1200.H256): Promise<(v1200.Call | undefined)>
    getMany(block: Block, keys: v1200.H256[]): Promise<(v1200.Call | undefined)[]>
    getKeys(block: Block): Promise<v1200.H256[]>
    getKeys(block: Block, key: v1200.H256): Promise<v1200.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1200.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1200.H256): AsyncIterable<v1200.H256[]>
    getPairs(block: Block): Promise<[k: v1200.H256, v: (v1200.Call | undefined)][]>
    getPairs(block: Block, key: v1200.H256): Promise<[k: v1200.H256, v: (v1200.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1200.H256, v: (v1200.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1200.H256): AsyncIterable<[k: v1200.H256, v: (v1200.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1400.H256): Promise<(v1400.Call | undefined)>
    getMany(block: Block, keys: v1400.H256[]): Promise<(v1400.Call | undefined)[]>
    getKeys(block: Block): Promise<v1400.H256[]>
    getKeys(block: Block, key: v1400.H256): Promise<v1400.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1400.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1400.H256): AsyncIterable<v1400.H256[]>
    getPairs(block: Block): Promise<[k: v1400.H256, v: (v1400.Call | undefined)][]>
    getPairs(block: Block, key: v1400.H256): Promise<[k: v1400.H256, v: (v1400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1400.H256, v: (v1400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1400.H256): AsyncIterable<[k: v1400.H256, v: (v1400.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10002.H256): Promise<(v10002.Call | undefined)>
    getMany(block: Block, keys: v10002.H256[]): Promise<(v10002.Call | undefined)[]>
    getKeys(block: Block): Promise<v10002.H256[]>
    getKeys(block: Block, key: v10002.H256): Promise<v10002.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10002.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10002.H256): AsyncIterable<v10002.H256[]>
    getPairs(block: Block): Promise<[k: v10002.H256, v: (v10002.Call | undefined)][]>
    getPairs(block: Block, key: v10002.H256): Promise<[k: v10002.H256, v: (v10002.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10002.H256, v: (v10002.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10002.H256): AsyncIterable<[k: v10002.H256, v: (v10002.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10005.H256): Promise<(v10005.Call | undefined)>
    getMany(block: Block, keys: v10005.H256[]): Promise<(v10005.Call | undefined)[]>
    getKeys(block: Block): Promise<v10005.H256[]>
    getKeys(block: Block, key: v10005.H256): Promise<v10005.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10005.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10005.H256): AsyncIterable<v10005.H256[]>
    getPairs(block: Block): Promise<[k: v10005.H256, v: (v10005.Call | undefined)][]>
    getPairs(block: Block, key: v10005.H256): Promise<[k: v10005.H256, v: (v10005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10005.H256, v: (v10005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10005.H256): AsyncIterable<[k: v10005.H256, v: (v10005.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10009  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10009.H256): Promise<(v10009.Call | undefined)>
    getMany(block: Block, keys: v10009.H256[]): Promise<(v10009.Call | undefined)[]>
    getKeys(block: Block): Promise<v10009.H256[]>
    getKeys(block: Block, key: v10009.H256): Promise<v10009.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10009.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10009.H256): AsyncIterable<v10009.H256[]>
    getPairs(block: Block): Promise<[k: v10009.H256, v: (v10009.Call | undefined)][]>
    getPairs(block: Block, key: v10009.H256): Promise<[k: v10009.H256, v: (v10009.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10009.H256, v: (v10009.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10009.H256): AsyncIterable<[k: v10009.H256, v: (v10009.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10010.H256): Promise<(v10010.Call | undefined)>
    getMany(block: Block, keys: v10010.H256[]): Promise<(v10010.Call | undefined)[]>
    getKeys(block: Block): Promise<v10010.H256[]>
    getKeys(block: Block, key: v10010.H256): Promise<v10010.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10010.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10010.H256): AsyncIterable<v10010.H256[]>
    getPairs(block: Block): Promise<[k: v10010.H256, v: (v10010.Call | undefined)][]>
    getPairs(block: Block, key: v10010.H256): Promise<[k: v10010.H256, v: (v10010.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10010.H256, v: (v10010.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10010.H256): AsyncIterable<[k: v10010.H256, v: (v10010.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10013.H256): Promise<(v10013.Call | undefined)>
    getMany(block: Block, keys: v10013.H256[]): Promise<(v10013.Call | undefined)[]>
    getKeys(block: Block): Promise<v10013.H256[]>
    getKeys(block: Block, key: v10013.H256): Promise<v10013.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10013.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10013.H256): AsyncIterable<v10013.H256[]>
    getPairs(block: Block): Promise<[k: v10013.H256, v: (v10013.Call | undefined)][]>
    getPairs(block: Block, key: v10013.H256): Promise<[k: v10013.H256, v: (v10013.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10013.H256, v: (v10013.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10013.H256): AsyncIterable<[k: v10013.H256, v: (v10013.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10015  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10015.H256): Promise<(v10015.Call | undefined)>
    getMany(block: Block, keys: v10015.H256[]): Promise<(v10015.Call | undefined)[]>
    getKeys(block: Block): Promise<v10015.H256[]>
    getKeys(block: Block, key: v10015.H256): Promise<v10015.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10015.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10015.H256): AsyncIterable<v10015.H256[]>
    getPairs(block: Block): Promise<[k: v10015.H256, v: (v10015.Call | undefined)][]>
    getPairs(block: Block, key: v10015.H256): Promise<[k: v10015.H256, v: (v10015.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10015.H256, v: (v10015.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10015.H256): AsyncIterable<[k: v10015.H256, v: (v10015.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10016  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10016.H256): Promise<(v10016.Call | undefined)>
    getMany(block: Block, keys: v10016.H256[]): Promise<(v10016.Call | undefined)[]>
    getKeys(block: Block): Promise<v10016.H256[]>
    getKeys(block: Block, key: v10016.H256): Promise<v10016.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10016.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10016.H256): AsyncIterable<v10016.H256[]>
    getPairs(block: Block): Promise<[k: v10016.H256, v: (v10016.Call | undefined)][]>
    getPairs(block: Block, key: v10016.H256): Promise<[k: v10016.H256, v: (v10016.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10016.H256, v: (v10016.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10016.H256): AsyncIterable<[k: v10016.H256, v: (v10016.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10019  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10019.H256): Promise<(v10019.Call | undefined)>
    getMany(block: Block, keys: v10019.H256[]): Promise<(v10019.Call | undefined)[]>
    getKeys(block: Block): Promise<v10019.H256[]>
    getKeys(block: Block, key: v10019.H256): Promise<v10019.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10019.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10019.H256): AsyncIterable<v10019.H256[]>
    getPairs(block: Block): Promise<[k: v10019.H256, v: (v10019.Call | undefined)][]>
    getPairs(block: Block, key: v10019.H256): Promise<[k: v10019.H256, v: (v10019.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10019.H256, v: (v10019.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10019.H256): AsyncIterable<[k: v10019.H256, v: (v10019.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10025  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10025.H256): Promise<(v10025.Call | undefined)>
    getMany(block: Block, keys: v10025.H256[]): Promise<(v10025.Call | undefined)[]>
    getKeys(block: Block): Promise<v10025.H256[]>
    getKeys(block: Block, key: v10025.H256): Promise<v10025.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10025.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10025.H256): AsyncIterable<v10025.H256[]>
    getPairs(block: Block): Promise<[k: v10025.H256, v: (v10025.Call | undefined)][]>
    getPairs(block: Block, key: v10025.H256): Promise<[k: v10025.H256, v: (v10025.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10025.H256, v: (v10025.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10025.H256): AsyncIterable<[k: v10025.H256, v: (v10025.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10029  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10029.H256): Promise<(v10029.Call | undefined)>
    getMany(block: Block, keys: v10029.H256[]): Promise<(v10029.Call | undefined)[]>
    getKeys(block: Block): Promise<v10029.H256[]>
    getKeys(block: Block, key: v10029.H256): Promise<v10029.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10029.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10029.H256): AsyncIterable<v10029.H256[]>
    getPairs(block: Block): Promise<[k: v10029.H256, v: (v10029.Call | undefined)][]>
    getPairs(block: Block, key: v10029.H256): Promise<[k: v10029.H256, v: (v10029.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10029.H256, v: (v10029.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10029.H256): AsyncIterable<[k: v10029.H256, v: (v10029.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10030  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10030.H256): Promise<(v10030.Call | undefined)>
    getMany(block: Block, keys: v10030.H256[]): Promise<(v10030.Call | undefined)[]>
    getKeys(block: Block): Promise<v10030.H256[]>
    getKeys(block: Block, key: v10030.H256): Promise<v10030.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10030.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10030.H256): AsyncIterable<v10030.H256[]>
    getPairs(block: Block): Promise<[k: v10030.H256, v: (v10030.Call | undefined)][]>
    getPairs(block: Block, key: v10030.H256): Promise<[k: v10030.H256, v: (v10030.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10030.H256, v: (v10030.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10030.H256): AsyncIterable<[k: v10030.H256, v: (v10030.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10034  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10034.H256): Promise<(v10034.Call | undefined)>
    getMany(block: Block, keys: v10034.H256[]): Promise<(v10034.Call | undefined)[]>
    getKeys(block: Block): Promise<v10034.H256[]>
    getKeys(block: Block, key: v10034.H256): Promise<v10034.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10034.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10034.H256): AsyncIterable<v10034.H256[]>
    getPairs(block: Block): Promise<[k: v10034.H256, v: (v10034.Call | undefined)][]>
    getPairs(block: Block, key: v10034.H256): Promise<[k: v10034.H256, v: (v10034.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10034.H256, v: (v10034.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10034.H256): AsyncIterable<[k: v10034.H256, v: (v10034.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10037  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10037.H256): Promise<(v10037.Call | undefined)>
    getMany(block: Block, keys: v10037.H256[]): Promise<(v10037.Call | undefined)[]>
    getKeys(block: Block): Promise<v10037.H256[]>
    getKeys(block: Block, key: v10037.H256): Promise<v10037.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10037.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10037.H256): AsyncIterable<v10037.H256[]>
    getPairs(block: Block): Promise<[k: v10037.H256, v: (v10037.Call | undefined)][]>
    getPairs(block: Block, key: v10037.H256): Promise<[k: v10037.H256, v: (v10037.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10037.H256, v: (v10037.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10037.H256): AsyncIterable<[k: v10037.H256, v: (v10037.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10038  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10038.H256): Promise<(v10038.Call | undefined)>
    getMany(block: Block, keys: v10038.H256[]): Promise<(v10038.Call | undefined)[]>
    getKeys(block: Block): Promise<v10038.H256[]>
    getKeys(block: Block, key: v10038.H256): Promise<v10038.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10038.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10038.H256): AsyncIterable<v10038.H256[]>
    getPairs(block: Block): Promise<[k: v10038.H256, v: (v10038.Call | undefined)][]>
    getPairs(block: Block, key: v10038.H256): Promise<[k: v10038.H256, v: (v10038.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10038.H256, v: (v10038.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10038.H256): AsyncIterable<[k: v10038.H256, v: (v10038.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10040.H256): Promise<(v10040.Call | undefined)>
    getMany(block: Block, keys: v10040.H256[]): Promise<(v10040.Call | undefined)[]>
    getKeys(block: Block): Promise<v10040.H256[]>
    getKeys(block: Block, key: v10040.H256): Promise<v10040.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10040.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10040.H256): AsyncIterable<v10040.H256[]>
    getPairs(block: Block): Promise<[k: v10040.H256, v: (v10040.Call | undefined)][]>
    getPairs(block: Block, key: v10040.H256): Promise<[k: v10040.H256, v: (v10040.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10040.H256, v: (v10040.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10040.H256): AsyncIterable<[k: v10040.H256, v: (v10040.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10041  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10041.H256): Promise<(v10041.Call | undefined)>
    getMany(block: Block, keys: v10041.H256[]): Promise<(v10041.Call | undefined)[]>
    getKeys(block: Block): Promise<v10041.H256[]>
    getKeys(block: Block, key: v10041.H256): Promise<v10041.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10041.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10041.H256): AsyncIterable<v10041.H256[]>
    getPairs(block: Block): Promise<[k: v10041.H256, v: (v10041.Call | undefined)][]>
    getPairs(block: Block, key: v10041.H256): Promise<[k: v10041.H256, v: (v10041.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10041.H256, v: (v10041.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10041.H256): AsyncIterable<[k: v10041.H256, v: (v10041.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10043  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10043.H256): Promise<(v10043.Call | undefined)>
    getMany(block: Block, keys: v10043.H256[]): Promise<(v10043.Call | undefined)[]>
    getKeys(block: Block): Promise<v10043.H256[]>
    getKeys(block: Block, key: v10043.H256): Promise<v10043.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10043.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10043.H256): AsyncIterable<v10043.H256[]>
    getPairs(block: Block): Promise<[k: v10043.H256, v: (v10043.Call | undefined)][]>
    getPairs(block: Block, key: v10043.H256): Promise<[k: v10043.H256, v: (v10043.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10043.H256, v: (v10043.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10043.H256): AsyncIterable<[k: v10043.H256, v: (v10043.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v200: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV200,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV200  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v200: new StorageType('Council.Members', 'Default', [], sts.array(() => v200.AccountId32)) as MembersV200,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV200  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v200.AccountId32[]
    get(block: Block): Promise<(v200.AccountId32[] | undefined)>
}
