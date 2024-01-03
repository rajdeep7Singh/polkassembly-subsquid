import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v2 from '../v2'
import * as v3 from '../v3'
import * as v4 from '../v4'
import * as v6 from '../v6'
import * as v7 from '../v7'
import * as v8 from '../v8'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v12 from '../v12'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1.H256], v1.Call) as ProposalOfV1,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v2: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v2.H256], v2.Call) as ProposalOfV2,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v3: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v3.H256], v3.Call) as ProposalOfV3,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v4: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v4.H256], v4.Call) as ProposalOfV4,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v6: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v6.H256], v6.Call) as ProposalOfV6,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v7.H256], v7.Call) as ProposalOfV7,
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
    v11: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v11.H256], v11.Call) as ProposalOfV11,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v12: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v12.H256], v12.Call) as ProposalOfV12,
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV2  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2.H256): Promise<(v2.Call | undefined)>
    getMany(block: Block, keys: v2.H256[]): Promise<(v2.Call | undefined)[]>
    getKeys(block: Block): Promise<v2.H256[]>
    getKeys(block: Block, key: v2.H256): Promise<v2.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2.H256): AsyncIterable<v2.H256[]>
    getPairs(block: Block): Promise<[k: v2.H256, v: (v2.Call | undefined)][]>
    getPairs(block: Block, key: v2.H256): Promise<[k: v2.H256, v: (v2.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2.H256, v: (v2.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2.H256): AsyncIterable<[k: v2.H256, v: (v2.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v3.H256): Promise<(v3.Call | undefined)>
    getMany(block: Block, keys: v3.H256[]): Promise<(v3.Call | undefined)[]>
    getKeys(block: Block): Promise<v3.H256[]>
    getKeys(block: Block, key: v3.H256): Promise<v3.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v3.H256): AsyncIterable<v3.H256[]>
    getPairs(block: Block): Promise<[k: v3.H256, v: (v3.Call | undefined)][]>
    getPairs(block: Block, key: v3.H256): Promise<[k: v3.H256, v: (v3.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3.H256, v: (v3.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3.H256): AsyncIterable<[k: v3.H256, v: (v3.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV4  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v4.H256): Promise<(v4.Call | undefined)>
    getMany(block: Block, keys: v4.H256[]): Promise<(v4.Call | undefined)[]>
    getKeys(block: Block): Promise<v4.H256[]>
    getKeys(block: Block, key: v4.H256): Promise<v4.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v4.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v4.H256): AsyncIterable<v4.H256[]>
    getPairs(block: Block): Promise<[k: v4.H256, v: (v4.Call | undefined)][]>
    getPairs(block: Block, key: v4.H256): Promise<[k: v4.H256, v: (v4.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v4.H256, v: (v4.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v4.H256): AsyncIterable<[k: v4.H256, v: (v4.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV6  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v6.H256): Promise<(v6.Call | undefined)>
    getMany(block: Block, keys: v6.H256[]): Promise<(v6.Call | undefined)[]>
    getKeys(block: Block): Promise<v6.H256[]>
    getKeys(block: Block, key: v6.H256): Promise<v6.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v6.H256): AsyncIterable<v6.H256[]>
    getPairs(block: Block): Promise<[k: v6.H256, v: (v6.Call | undefined)][]>
    getPairs(block: Block, key: v6.H256): Promise<[k: v6.H256, v: (v6.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6.H256, v: (v6.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6.H256): AsyncIterable<[k: v6.H256, v: (v6.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.H256): Promise<(v7.Call | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<(v7.Call | undefined)[]>
    getKeys(block: Block): Promise<v7.H256[]>
    getKeys(block: Block, key: v7.H256): Promise<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<v7.H256[]>
    getPairs(block: Block): Promise<[k: v7.H256, v: (v7.Call | undefined)][]>
    getPairs(block: Block, key: v7.H256): Promise<[k: v7.H256, v: (v7.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.H256, v: (v7.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<[k: v7.H256, v: (v7.Call | undefined)][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV12  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v12.H256): Promise<(v12.Call | undefined)>
    getMany(block: Block, keys: v12.H256[]): Promise<(v12.Call | undefined)[]>
    getKeys(block: Block): Promise<v12.H256[]>
    getKeys(block: Block, key: v12.H256): Promise<v12.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v12.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v12.H256): AsyncIterable<v12.H256[]>
    getPairs(block: Block): Promise<[k: v12.H256, v: (v12.Call | undefined)][]>
    getPairs(block: Block, key: v12.H256): Promise<[k: v12.H256, v: (v12.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v12.H256, v: (v12.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v12.H256): AsyncIterable<[k: v12.H256, v: (v12.Call | undefined)][]>
}
