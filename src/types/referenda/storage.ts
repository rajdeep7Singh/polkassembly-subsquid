import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2100 from '../v2100'
import * as v2201 from '../v2201'
import * as v2302 from '../v2302'
import * as v2401 from '../v2401'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v2100: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2100.Type_480) as ReferendumInfoForV2100,
    /**
     *  Information concerning any given referendum.
     */
    v2201: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2201.Type_479) as ReferendumInfoForV2201,
    /**
     *  Information concerning any given referendum.
     */
    v2302: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2302.Type_487) as ReferendumInfoForV2302,
    /**
     *  Information concerning any given referendum.
     */
    v2401: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2401.Type_511) as ReferendumInfoForV2401,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2100.Type_480 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2100.Type_480 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2100.Type_480 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2100.Type_480 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2100.Type_480 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2100.Type_480 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2201  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2201.Type_479 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2201.Type_479 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2201.Type_479 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2201.Type_479 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2201.Type_479 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2201.Type_479 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2302  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2302.Type_487 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2302.Type_487 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2302.Type_487 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2302.Type_487 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2302.Type_487 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2302.Type_487 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2401  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2401.Type_511 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2401.Type_511 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2401.Type_511 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2401.Type_511 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2401.Type_511 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2401.Type_511 | undefined)][]>
}
