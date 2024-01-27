import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1000 from '../v1000'
import * as v10009 from '../v10009'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1000: new StorageType('Preimage.StatusFor', 'Optional', [v1000.H256], v1000.RequestStatus) as StatusForV1000,
    /**
     *  The request status of a given hash.
     */
    v10009: new StorageType('Preimage.StatusFor', 'Optional', [v10009.H256], v10009.RequestStatus) as StatusForV10009,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.H256): Promise<(v1000.RequestStatus | undefined)>
    getMany(block: Block, keys: v1000.H256[]): Promise<(v1000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1000.H256[]>
    getKeys(block: Block, key: v1000.H256): Promise<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<v1000.H256[]>
    getPairs(block: Block): Promise<[k: v1000.H256, v: (v1000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v1000.H256): Promise<[k: v1000.H256, v: (v1000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.H256, v: (v1000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<[k: v1000.H256, v: (v1000.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV10009  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10009.H256): Promise<(v10009.RequestStatus | undefined)>
    getMany(block: Block, keys: v10009.H256[]): Promise<(v10009.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v10009.H256[]>
    getKeys(block: Block, key: v10009.H256): Promise<v10009.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10009.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10009.H256): AsyncIterable<v10009.H256[]>
    getPairs(block: Block): Promise<[k: v10009.H256, v: (v10009.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v10009.H256): Promise<[k: v10009.H256, v: (v10009.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10009.H256, v: (v10009.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10009.H256): AsyncIterable<[k: v10009.H256, v: (v10009.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v1000: new StorageType('Preimage.PreimageFor', 'Optional', [v1000.H256], v1000.BoundedVec) as PreimageForV1000,
    v10009: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v10009.H256, sts.number()])], sts.bytes()) as PreimageForV10009,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.H256): Promise<(v1000.BoundedVec | undefined)>
    getMany(block: Block, keys: v1000.H256[]): Promise<(v1000.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<v1000.H256[]>
    getKeys(block: Block, key: v1000.H256): Promise<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<v1000.H256[]>
    getPairs(block: Block): Promise<[k: v1000.H256, v: (v1000.BoundedVec | undefined)][]>
    getPairs(block: Block, key: v1000.H256): Promise<[k: v1000.H256, v: (v1000.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.H256, v: (v1000.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<[k: v1000.H256, v: (v1000.BoundedVec | undefined)][]>
}

export interface PreimageForV10009  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v10009.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v10009.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v10009.H256, number][]>
    getKeys(block: Block, key: [v10009.H256, number]): Promise<[v10009.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v10009.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v10009.H256, number]): AsyncIterable<[v10009.H256, number][]>
    getPairs(block: Block): Promise<[k: [v10009.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v10009.H256, number]): Promise<[k: [v10009.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v10009.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v10009.H256, number]): AsyncIterable<[k: [v10009.H256, number], v: (Bytes | undefined)][]>
}
