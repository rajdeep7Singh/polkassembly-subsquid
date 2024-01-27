import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10038 from '../v10038'
import * as v10041 from '../v10041'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v10038: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v10038.Type_637) as ReferendumInfoForV10038,
    /**
     *  Information concerning any given referendum.
     */
    v10041: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v10041.ReferendumInfo) as ReferendumInfoForV10041,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV10038  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v10038.Type_637 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v10038.Type_637 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v10038.Type_637 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v10038.Type_637 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v10038.Type_637 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v10038.Type_637 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV10041  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v10041.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v10041.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v10041.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v10041.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v10041.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v10041.ReferendumInfo | undefined)][]>
}
