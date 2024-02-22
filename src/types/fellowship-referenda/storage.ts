import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v103000 from '../v103000'
import * as v1005000 from '../v1005000'
import * as v1007000 from '../v1007000'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v103000: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v103000.Type_524) as ReferendumInfoForV103000,
    /**
     *  Information concerning any given referendum.
     */
    v1005000: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v1005000.Type_517) as ReferendumInfoForV1005000,
    /**
     *  Information concerning any given referendum.
     */
    v1007000: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v1007000.Type_563) as ReferendumInfoForV1007000,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV103000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v103000.Type_524 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v103000.Type_524 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v103000.Type_524 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v103000.Type_524 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v103000.Type_524 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v103000.Type_524 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1005000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1005000.Type_517 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1005000.Type_517 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1005000.Type_517 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1005000.Type_517 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1005000.Type_517 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1005000.Type_517 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1007000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1007000.Type_563 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1007000.Type_563 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1007000.Type_563 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1007000.Type_563 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1007000.Type_563 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1007000.Type_563 | undefined)][]>
}
