import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'
import * as v20 from '../v20'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1: new StorageType('Preimage.StatusFor', 'Optional', [v1.H256], v1.RequestStatus) as StatusForV1,
    /**
     *  The request status of a given hash.
     */
    v7: new StorageType('Preimage.StatusFor', 'Optional', [v7.H256], v7.RequestStatus) as StatusForV7,
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

/**
 *  The request status of a given hash.
 */
export interface StatusForV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.H256): Promise<(v7.RequestStatus | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<(v7.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v7.H256[]>
    getKeys(block: Block, key: v7.H256): Promise<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<v7.H256[]>
    getPairs(block: Block): Promise<[k: v7.H256, v: (v7.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v7.H256): Promise<[k: v7.H256, v: (v7.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.H256, v: (v7.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<[k: v7.H256, v: (v7.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v1: new StorageType('Preimage.PreimageFor', 'Optional', [v1.H256], v1.BoundedVec) as PreimageForV1,
    v7: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v7.H256, sts.number()])], sts.bytes()) as PreimageForV7,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.H256): Promise<(v1.BoundedVec | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<(v1.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<v1.H256[]>
    getKeys(block: Block, key: v1.H256): Promise<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<v1.H256[]>
    getPairs(block: Block): Promise<[k: v1.H256, v: (v1.BoundedVec | undefined)][]>
    getPairs(block: Block, key: v1.H256): Promise<[k: v1.H256, v: (v1.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.H256, v: (v1.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<[k: v1.H256, v: (v1.BoundedVec | undefined)][]>
}

export interface PreimageForV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v7.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v7.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v7.H256, number][]>
    getKeys(block: Block, key: [v7.H256, number]): Promise<[v7.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v7.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v7.H256, number]): AsyncIterable<[v7.H256, number][]>
    getPairs(block: Block): Promise<[k: [v7.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v7.H256, number]): Promise<[k: [v7.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v7.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v7.H256, number]): AsyncIterable<[k: [v7.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v20: new StorageType('Preimage.RequestStatusFor', 'Optional', [v20.H256], v20.RequestStatus) as RequestStatusForV20,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV20  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v20.H256): Promise<(v20.RequestStatus | undefined)>
    getMany(block: Block, keys: v20.H256[]): Promise<(v20.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v20.H256[]>
    getKeys(block: Block, key: v20.H256): Promise<v20.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v20.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v20.H256): AsyncIterable<v20.H256[]>
    getPairs(block: Block): Promise<[k: v20.H256, v: (v20.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v20.H256): Promise<[k: v20.H256, v: (v20.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v20.H256, v: (v20.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v20.H256): AsyncIterable<[k: v20.H256, v: (v20.RequestStatus | undefined)][]>
}
