import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV9290 from '../collectivesV9290'
import * as collectivesV9320 from '../collectivesV9320'
import * as collectivesV9360 from '../collectivesV9360'
import * as collectivesV9370 from '../collectivesV9370'
import * as collectivesV9380 from '../collectivesV9380'
import * as collectivesV9400 from '../collectivesV9400'
import * as collectivesV9420 from '../collectivesV9420'
import * as collectivesV1000000 from '../collectivesV1000000'
import * as v1004000 from '../v1004000'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    collectivesV9290: new StorageType('AllianceMotion.Proposals', 'Default', [], sts.array(() => collectivesV9290.H256)) as ProposalsCollectivesV9290,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsCollectivesV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): collectivesV9290.H256[]
    get(block: Block): Promise<(collectivesV9290.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV9290: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV9290.H256], collectivesV9290.Call) as ProposalOfCollectivesV9290,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV9320: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV9320.H256], collectivesV9320.Call) as ProposalOfCollectivesV9320,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV9360: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV9360.H256], collectivesV9360.Call) as ProposalOfCollectivesV9360,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV9370: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV9370.H256], collectivesV9370.Call) as ProposalOfCollectivesV9370,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV9380: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV9380.H256], collectivesV9380.Call) as ProposalOfCollectivesV9380,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV9400: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV9400.H256], collectivesV9400.Call) as ProposalOfCollectivesV9400,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV9420: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV9420.H256], collectivesV9420.Call) as ProposalOfCollectivesV9420,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    collectivesV1000000: new StorageType('AllianceMotion.ProposalOf', 'Optional', [collectivesV1000000.H256], collectivesV1000000.Call) as ProposalOfCollectivesV1000000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1004000: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1004000.H256], v1004000.Call) as ProposalOfV1004000,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV9290  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9290.H256): Promise<(collectivesV9290.Call | undefined)>
    getMany(block: Block, keys: collectivesV9290.H256[]): Promise<(collectivesV9290.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9290.H256[]>
    getKeys(block: Block, key: collectivesV9290.H256): Promise<collectivesV9290.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9290.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9290.H256): AsyncIterable<collectivesV9290.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9290.H256, v: (collectivesV9290.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV9290.H256): Promise<[k: collectivesV9290.H256, v: (collectivesV9290.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9290.H256, v: (collectivesV9290.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9290.H256): AsyncIterable<[k: collectivesV9290.H256, v: (collectivesV9290.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9320.H256): Promise<(collectivesV9320.Call | undefined)>
    getMany(block: Block, keys: collectivesV9320.H256[]): Promise<(collectivesV9320.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9320.H256[]>
    getKeys(block: Block, key: collectivesV9320.H256): Promise<collectivesV9320.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9320.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9320.H256): AsyncIterable<collectivesV9320.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9320.H256, v: (collectivesV9320.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV9320.H256): Promise<[k: collectivesV9320.H256, v: (collectivesV9320.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9320.H256, v: (collectivesV9320.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9320.H256): AsyncIterable<[k: collectivesV9320.H256, v: (collectivesV9320.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV9360  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9360.H256): Promise<(collectivesV9360.Call | undefined)>
    getMany(block: Block, keys: collectivesV9360.H256[]): Promise<(collectivesV9360.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9360.H256[]>
    getKeys(block: Block, key: collectivesV9360.H256): Promise<collectivesV9360.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9360.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9360.H256): AsyncIterable<collectivesV9360.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9360.H256, v: (collectivesV9360.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV9360.H256): Promise<[k: collectivesV9360.H256, v: (collectivesV9360.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9360.H256, v: (collectivesV9360.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9360.H256): AsyncIterable<[k: collectivesV9360.H256, v: (collectivesV9360.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9370.H256): Promise<(collectivesV9370.Call | undefined)>
    getMany(block: Block, keys: collectivesV9370.H256[]): Promise<(collectivesV9370.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9370.H256[]>
    getKeys(block: Block, key: collectivesV9370.H256): Promise<collectivesV9370.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9370.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9370.H256): AsyncIterable<collectivesV9370.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9370.H256, v: (collectivesV9370.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV9370.H256): Promise<[k: collectivesV9370.H256, v: (collectivesV9370.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9370.H256, v: (collectivesV9370.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9370.H256): AsyncIterable<[k: collectivesV9370.H256, v: (collectivesV9370.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV9380  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9380.H256): Promise<(collectivesV9380.Call | undefined)>
    getMany(block: Block, keys: collectivesV9380.H256[]): Promise<(collectivesV9380.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9380.H256[]>
    getKeys(block: Block, key: collectivesV9380.H256): Promise<collectivesV9380.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9380.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9380.H256): AsyncIterable<collectivesV9380.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9380.H256, v: (collectivesV9380.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV9380.H256): Promise<[k: collectivesV9380.H256, v: (collectivesV9380.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9380.H256, v: (collectivesV9380.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9380.H256): AsyncIterable<[k: collectivesV9380.H256, v: (collectivesV9380.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV9400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9400.H256): Promise<(collectivesV9400.Call | undefined)>
    getMany(block: Block, keys: collectivesV9400.H256[]): Promise<(collectivesV9400.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9400.H256[]>
    getKeys(block: Block, key: collectivesV9400.H256): Promise<collectivesV9400.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9400.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9400.H256): AsyncIterable<collectivesV9400.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9400.H256, v: (collectivesV9400.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV9400.H256): Promise<[k: collectivesV9400.H256, v: (collectivesV9400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9400.H256, v: (collectivesV9400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9400.H256): AsyncIterable<[k: collectivesV9400.H256, v: (collectivesV9400.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9420.H256): Promise<(collectivesV9420.Call | undefined)>
    getMany(block: Block, keys: collectivesV9420.H256[]): Promise<(collectivesV9420.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9420.H256[]>
    getKeys(block: Block, key: collectivesV9420.H256): Promise<collectivesV9420.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9420.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9420.H256): AsyncIterable<collectivesV9420.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9420.H256, v: (collectivesV9420.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV9420.H256): Promise<[k: collectivesV9420.H256, v: (collectivesV9420.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9420.H256, v: (collectivesV9420.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9420.H256): AsyncIterable<[k: collectivesV9420.H256, v: (collectivesV9420.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfCollectivesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV1000000.H256): Promise<(collectivesV1000000.Call | undefined)>
    getMany(block: Block, keys: collectivesV1000000.H256[]): Promise<(collectivesV1000000.Call | undefined)[]>
    getKeys(block: Block): Promise<collectivesV1000000.H256[]>
    getKeys(block: Block, key: collectivesV1000000.H256): Promise<collectivesV1000000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV1000000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV1000000.H256): AsyncIterable<collectivesV1000000.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV1000000.H256, v: (collectivesV1000000.Call | undefined)][]>
    getPairs(block: Block, key: collectivesV1000000.H256): Promise<[k: collectivesV1000000.H256, v: (collectivesV1000000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV1000000.H256, v: (collectivesV1000000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV1000000.H256): AsyncIterable<[k: collectivesV1000000.H256, v: (collectivesV1000000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1004000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1004000.H256): Promise<(v1004000.Call | undefined)>
    getMany(block: Block, keys: v1004000.H256[]): Promise<(v1004000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1004000.H256[]>
    getKeys(block: Block, key: v1004000.H256): Promise<v1004000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1004000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1004000.H256): AsyncIterable<v1004000.H256[]>
    getPairs(block: Block): Promise<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
    getPairs(block: Block, key: v1004000.H256): Promise<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1004000.H256): AsyncIterable<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
}
