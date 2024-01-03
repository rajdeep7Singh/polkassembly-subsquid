import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v130 from '../v130'
import * as v210 from '../v210'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v100: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v100.ReferendumInfo) as ReferendumInfoForV100,
    /**
     *  Information concerning any given referendum.
     */
    v130: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v130.ReferendumInfo) as ReferendumInfoForV130,
    /**
     *  Information concerning any given referendum.
     */
    v210: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v210.ReferendumInfo) as ReferendumInfoForV210,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v100.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v100.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v100.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v100.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v100.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v100.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV130  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v130.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v130.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v130.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v130.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v130.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v130.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV210  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v210.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v210.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v210.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v210.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v210.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v210.ReferendumInfo | undefined)][]>
}
