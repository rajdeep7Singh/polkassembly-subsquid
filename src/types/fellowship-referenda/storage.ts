import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v130 from '../v130'
import * as v210 from '../v210'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v100: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v100.Type_373) as ReferendumInfoForV100,
    /**
     *  Information concerning any given referendum.
     */
    v130: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v130.Type_373) as ReferendumInfoForV130,
    /**
     *  Information concerning any given referendum.
     */
    v210: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v210.Type_399) as ReferendumInfoForV210,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v100.Type_373 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v100.Type_373 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v100.Type_373 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v100.Type_373 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v100.Type_373 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v100.Type_373 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV130  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v130.Type_373 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v130.Type_373 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v130.Type_373 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v130.Type_373 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v130.Type_373 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v130.Type_373 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV210  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v210.Type_399 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v210.Type_399 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v210.Type_399 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v210.Type_399 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v210.Type_399 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v210.Type_399 | undefined)][]>
}
