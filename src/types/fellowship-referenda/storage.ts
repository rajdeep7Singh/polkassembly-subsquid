import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'
import * as collectivesV1000000 from '../collectivesV1000000'
import * as v1004000 from '../v1004000'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    collectivesV9420: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], collectivesV9420.ReferendumInfo) as ReferendumInfoForCollectivesV9420,
    /**
     *  Information concerning any given referendum.
     */
    collectivesV1000000: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], collectivesV1000000.ReferendumInfo) as ReferendumInfoForCollectivesV1000000,
    /**
     *  Information concerning any given referendum.
     */
    v1004000: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v1004000.ReferendumInfo) as ReferendumInfoForV1004000,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForCollectivesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(collectivesV9420.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(collectivesV9420.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (collectivesV9420.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (collectivesV9420.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (collectivesV9420.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (collectivesV9420.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForCollectivesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(collectivesV1000000.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(collectivesV1000000.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (collectivesV1000000.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (collectivesV1000000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (collectivesV1000000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (collectivesV1000000.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1004000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1004000.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1004000.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1004000.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1004000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1004000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1004000.ReferendumInfo | undefined)][]>
}
