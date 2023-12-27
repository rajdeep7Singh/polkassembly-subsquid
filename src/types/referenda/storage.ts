import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v9420: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9420.Type_617) as ReferendumInfoForV9420,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.Type_617 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.Type_617 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.Type_617 | undefined)][]>
}
