import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v8 from '../v8'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v13 from '../v13'
import * as v14 from '../v14'
import * as v16 from '../v16'
import * as v20 from '../v20'
import * as v23 from '../v23'
import * as v28 from '../v28'
import * as v30 from '../v30'
import * as v31 from '../v31'
import * as v32 from '../v32'
import * as kusamaV9280 from '../kusamaV9280'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v5: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v5.H256], v5.Call) as ProposalOfV5,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v8: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v8.H256], v8.Call) as ProposalOfV8,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9.H256], v9.Call) as ProposalOfV9,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v10.H256], v10.Call) as ProposalOfV10,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v13: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v13.H256], v13.Call) as ProposalOfV13,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v14: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v14.H256], v14.Call) as ProposalOfV14,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v16: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v16.H256], v16.Call) as ProposalOfV16,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v20: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v20.H256], v20.Call) as ProposalOfV20,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v23: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v23.H256], v23.Call) as ProposalOfV23,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    kusamaV9280: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [kusamaV9280.H256], kusamaV9280.Call) as ProposalOfKusamaV9280,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v28: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v28.H256], v28.Call) as ProposalOfV28,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v30: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v30.H256], v30.Call) as ProposalOfV30,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v31: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v31.H256], v31.Call) as ProposalOfV31,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v32: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v32.H256], v32.Call) as ProposalOfV32,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV5  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5.H256): Promise<(v5.Call | undefined)>
    getMany(block: Block, keys: v5.H256[]): Promise<(v5.Call | undefined)[]>
    getKeys(block: Block): Promise<v5.H256[]>
    getKeys(block: Block, key: v5.H256): Promise<v5.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v5.H256): AsyncIterable<v5.H256[]>
    getPairs(block: Block): Promise<[k: v5.H256, v: (v5.Call | undefined)][]>
    getPairs(block: Block, key: v5.H256): Promise<[k: v5.H256, v: (v5.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5.H256, v: (v5.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5.H256): AsyncIterable<[k: v5.H256, v: (v5.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV8  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v8.H256): Promise<(v8.Call | undefined)>
    getMany(block: Block, keys: v8.H256[]): Promise<(v8.Call | undefined)[]>
    getKeys(block: Block): Promise<v8.H256[]>
    getKeys(block: Block, key: v8.H256): Promise<v8.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v8.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v8.H256): AsyncIterable<v8.H256[]>
    getPairs(block: Block): Promise<[k: v8.H256, v: (v8.Call | undefined)][]>
    getPairs(block: Block, key: v8.H256): Promise<[k: v8.H256, v: (v8.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v8.H256, v: (v8.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v8.H256): AsyncIterable<[k: v8.H256, v: (v8.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9.H256): Promise<(v9.Call | undefined)>
    getMany(block: Block, keys: v9.H256[]): Promise<(v9.Call | undefined)[]>
    getKeys(block: Block): Promise<v9.H256[]>
    getKeys(block: Block, key: v9.H256): Promise<v9.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9.H256): AsyncIterable<v9.H256[]>
    getPairs(block: Block): Promise<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairs(block: Block, key: v9.H256): Promise<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9.H256): AsyncIterable<[k: v9.H256, v: (v9.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.H256): Promise<(v10.Call | undefined)>
    getMany(block: Block, keys: v10.H256[]): Promise<(v10.Call | undefined)[]>
    getKeys(block: Block): Promise<v10.H256[]>
    getKeys(block: Block, key: v10.H256): Promise<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<v10.H256[]>
    getPairs(block: Block): Promise<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairs(block: Block, key: v10.H256): Promise<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<[k: v10.H256, v: (v10.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.H256): Promise<(v13.Call | undefined)>
    getMany(block: Block, keys: v13.H256[]): Promise<(v13.Call | undefined)[]>
    getKeys(block: Block): Promise<v13.H256[]>
    getKeys(block: Block, key: v13.H256): Promise<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<v13.H256[]>
    getPairs(block: Block): Promise<[k: v13.H256, v: (v13.Call | undefined)][]>
    getPairs(block: Block, key: v13.H256): Promise<[k: v13.H256, v: (v13.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.H256, v: (v13.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<[k: v13.H256, v: (v13.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV14  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v14.H256): Promise<(v14.Call | undefined)>
    getMany(block: Block, keys: v14.H256[]): Promise<(v14.Call | undefined)[]>
    getKeys(block: Block): Promise<v14.H256[]>
    getKeys(block: Block, key: v14.H256): Promise<v14.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v14.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v14.H256): AsyncIterable<v14.H256[]>
    getPairs(block: Block): Promise<[k: v14.H256, v: (v14.Call | undefined)][]>
    getPairs(block: Block, key: v14.H256): Promise<[k: v14.H256, v: (v14.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v14.H256, v: (v14.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v14.H256): AsyncIterable<[k: v14.H256, v: (v14.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV16  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v16.H256): Promise<(v16.Call | undefined)>
    getMany(block: Block, keys: v16.H256[]): Promise<(v16.Call | undefined)[]>
    getKeys(block: Block): Promise<v16.H256[]>
    getKeys(block: Block, key: v16.H256): Promise<v16.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v16.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v16.H256): AsyncIterable<v16.H256[]>
    getPairs(block: Block): Promise<[k: v16.H256, v: (v16.Call | undefined)][]>
    getPairs(block: Block, key: v16.H256): Promise<[k: v16.H256, v: (v16.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v16.H256, v: (v16.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v16.H256): AsyncIterable<[k: v16.H256, v: (v16.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV20  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v20.H256): Promise<(v20.Call | undefined)>
    getMany(block: Block, keys: v20.H256[]): Promise<(v20.Call | undefined)[]>
    getKeys(block: Block): Promise<v20.H256[]>
    getKeys(block: Block, key: v20.H256): Promise<v20.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v20.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v20.H256): AsyncIterable<v20.H256[]>
    getPairs(block: Block): Promise<[k: v20.H256, v: (v20.Call | undefined)][]>
    getPairs(block: Block, key: v20.H256): Promise<[k: v20.H256, v: (v20.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v20.H256, v: (v20.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v20.H256): AsyncIterable<[k: v20.H256, v: (v20.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV23  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v23.H256): Promise<(v23.Call | undefined)>
    getMany(block: Block, keys: v23.H256[]): Promise<(v23.Call | undefined)[]>
    getKeys(block: Block): Promise<v23.H256[]>
    getKeys(block: Block, key: v23.H256): Promise<v23.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v23.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v23.H256): AsyncIterable<v23.H256[]>
    getPairs(block: Block): Promise<[k: v23.H256, v: (v23.Call | undefined)][]>
    getPairs(block: Block, key: v23.H256): Promise<[k: v23.H256, v: (v23.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v23.H256, v: (v23.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v23.H256): AsyncIterable<[k: v23.H256, v: (v23.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfKusamaV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: kusamaV9280.H256): Promise<(kusamaV9280.Call | undefined)>
    getMany(block: Block, keys: kusamaV9280.H256[]): Promise<(kusamaV9280.Call | undefined)[]>
    getKeys(block: Block): Promise<kusamaV9280.H256[]>
    getKeys(block: Block, key: kusamaV9280.H256): Promise<kusamaV9280.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<kusamaV9280.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: kusamaV9280.H256): AsyncIterable<kusamaV9280.H256[]>
    getPairs(block: Block): Promise<[k: kusamaV9280.H256, v: (kusamaV9280.Call | undefined)][]>
    getPairs(block: Block, key: kusamaV9280.H256): Promise<[k: kusamaV9280.H256, v: (kusamaV9280.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: kusamaV9280.H256, v: (kusamaV9280.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: kusamaV9280.H256): AsyncIterable<[k: kusamaV9280.H256, v: (kusamaV9280.Call | undefined)][]>
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
export interface ProposalOfV30  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v30.H256): Promise<(v30.Call | undefined)>
    getMany(block: Block, keys: v30.H256[]): Promise<(v30.Call | undefined)[]>
    getKeys(block: Block): Promise<v30.H256[]>
    getKeys(block: Block, key: v30.H256): Promise<v30.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v30.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v30.H256): AsyncIterable<v30.H256[]>
    getPairs(block: Block): Promise<[k: v30.H256, v: (v30.Call | undefined)][]>
    getPairs(block: Block, key: v30.H256): Promise<[k: v30.H256, v: (v30.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v30.H256, v: (v30.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v30.H256): AsyncIterable<[k: v30.H256, v: (v30.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV31  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v31.H256): Promise<(v31.Call | undefined)>
    getMany(block: Block, keys: v31.H256[]): Promise<(v31.Call | undefined)[]>
    getKeys(block: Block): Promise<v31.H256[]>
    getKeys(block: Block, key: v31.H256): Promise<v31.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v31.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v31.H256): AsyncIterable<v31.H256[]>
    getPairs(block: Block): Promise<[k: v31.H256, v: (v31.Call | undefined)][]>
    getPairs(block: Block, key: v31.H256): Promise<[k: v31.H256, v: (v31.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v31.H256, v: (v31.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v31.H256): AsyncIterable<[k: v31.H256, v: (v31.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV32  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v32.H256): Promise<(v32.Call | undefined)>
    getMany(block: Block, keys: v32.H256[]): Promise<(v32.Call | undefined)[]>
    getKeys(block: Block): Promise<v32.H256[]>
    getKeys(block: Block, key: v32.H256): Promise<v32.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v32.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v32.H256): AsyncIterable<v32.H256[]>
    getPairs(block: Block): Promise<[k: v32.H256, v: (v32.Call | undefined)][]>
    getPairs(block: Block, key: v32.H256): Promise<[k: v32.H256, v: (v32.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v32.H256, v: (v32.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v32.H256): AsyncIterable<[k: v32.H256, v: (v32.Call | undefined)][]>
}
