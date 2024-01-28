import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v28 from '../v28'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v28: new StorageType('Preimage.StatusFor', 'Optional', [v28.H256], v28.RequestStatus) as StatusForV28,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.H256): Promise<(v28.RequestStatus | undefined)>
    getMany(block: Block, keys: v28.H256[]): Promise<(v28.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v28.H256[]>
    getKeys(block: Block, key: v28.H256): Promise<v28.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.H256): AsyncIterable<v28.H256[]>
    getPairs(block: Block): Promise<[k: v28.H256, v: (v28.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v28.H256): Promise<[k: v28.H256, v: (v28.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.H256, v: (v28.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.H256): AsyncIterable<[k: v28.H256, v: (v28.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v28: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v28.H256, sts.number()])], v28.BoundedVec) as PreimageForV28,
}

export interface PreimageForV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v28.H256, number]): Promise<(v28.BoundedVec | undefined)>
    getMany(block: Block, keys: [v28.H256, number][]): Promise<(v28.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<[v28.H256, number][]>
    getKeys(block: Block, key: [v28.H256, number]): Promise<[v28.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v28.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v28.H256, number]): AsyncIterable<[v28.H256, number][]>
    getPairs(block: Block): Promise<[k: [v28.H256, number], v: (v28.BoundedVec | undefined)][]>
    getPairs(block: Block, key: [v28.H256, number]): Promise<[k: [v28.H256, number], v: (v28.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v28.H256, number], v: (v28.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v28.H256, number]): AsyncIterable<[k: [v28.H256, number], v: (v28.BoundedVec | undefined)][]>
}
