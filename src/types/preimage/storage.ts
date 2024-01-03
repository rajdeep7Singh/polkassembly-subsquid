import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v11 from '../v11'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1: new StorageType('Preimage.StatusFor', 'Optional', [v1.H256], v1.RequestStatus) as StatusForV1,
    v11: new StorageType('Preimage.StatusFor', 'Optional', [v11.H256], v11.RequestStatus) as StatusForV11,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.H256): Promise<(v1.RequestStatus | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<(v1.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1.H256[]>
    getKeys(block: Block, key: v1.H256): Promise<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<v1.H256[]>
    getPairs(block: Block): Promise<[k: v1.H256, v: (v1.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v1.H256): Promise<[k: v1.H256, v: (v1.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.H256, v: (v1.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<[k: v1.H256, v: (v1.RequestStatus | undefined)][]>
}

export interface StatusForV11  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11.H256): Promise<(v11.RequestStatus | undefined)>
    getMany(block: Block, keys: v11.H256[]): Promise<(v11.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v11.H256[]>
    getKeys(block: Block, key: v11.H256): Promise<v11.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11.H256): AsyncIterable<v11.H256[]>
    getPairs(block: Block): Promise<[k: v11.H256, v: (v11.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v11.H256): Promise<[k: v11.H256, v: (v11.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11.H256, v: (v11.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11.H256): AsyncIterable<[k: v11.H256, v: (v11.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v1: new StorageType('Preimage.PreimageFor', 'Optional', [v1.H256], sts.bytes()) as PreimageForV1,
    v11: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v11.H256, sts.number()])], v11.BoundedVec) as PreimageForV11,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.H256): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v1.H256[]>
    getKeys(block: Block, key: v1.H256): Promise<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<v1.H256[]>
    getPairs(block: Block): Promise<[k: v1.H256, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v1.H256): Promise<[k: v1.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<[k: v1.H256, v: (Bytes | undefined)][]>
}

export interface PreimageForV11  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v11.H256, number]): Promise<(v11.BoundedVec | undefined)>
    getMany(block: Block, keys: [v11.H256, number][]): Promise<(v11.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<[v11.H256, number][]>
    getKeys(block: Block, key: [v11.H256, number]): Promise<[v11.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v11.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v11.H256, number]): AsyncIterable<[v11.H256, number][]>
    getPairs(block: Block): Promise<[k: [v11.H256, number], v: (v11.BoundedVec | undefined)][]>
    getPairs(block: Block, key: [v11.H256, number]): Promise<[k: [v11.H256, number], v: (v11.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v11.H256, number], v: (v11.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v11.H256, number]): AsyncIterable<[k: [v11.H256, number], v: (v11.BoundedVec | undefined)][]>
}
