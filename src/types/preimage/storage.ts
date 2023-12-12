import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v46 from '../v46'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v34: new StorageType('Preimage.StatusFor', 'Optional', [v34.H256], v34.RequestStatus) as StatusForV34,
    /**
     *  The request status of a given hash.
     */
    v46: new StorageType('Preimage.StatusFor', 'Optional', [v46.H256], v46.RequestStatus) as StatusForV46,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV34  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v34.H256): Promise<(v34.RequestStatus | undefined)>
    getMany(block: Block, keys: v34.H256[]): Promise<(v34.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v34.H256[]>
    getKeys(block: Block, key: v34.H256): Promise<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<v34.H256[]>
    getPairs(block: Block): Promise<[k: v34.H256, v: (v34.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v34.H256): Promise<[k: v34.H256, v: (v34.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v34.H256, v: (v34.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<[k: v34.H256, v: (v34.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV46  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v46.H256): Promise<(v46.RequestStatus | undefined)>
    getMany(block: Block, keys: v46.H256[]): Promise<(v46.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v46.H256[]>
    getKeys(block: Block, key: v46.H256): Promise<v46.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v46.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v46.H256): AsyncIterable<v46.H256[]>
    getPairs(block: Block): Promise<[k: v46.H256, v: (v46.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v46.H256): Promise<[k: v46.H256, v: (v46.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v46.H256, v: (v46.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v46.H256): AsyncIterable<[k: v46.H256, v: (v46.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v34: new StorageType('Preimage.PreimageFor', 'Optional', [v34.H256], v34.BoundedVec) as PreimageForV34,
    v46: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v46.H256, sts.number()])], sts.bytes()) as PreimageForV46,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV34  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v34.H256): Promise<(v34.BoundedVec | undefined)>
    getMany(block: Block, keys: v34.H256[]): Promise<(v34.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<v34.H256[]>
    getKeys(block: Block, key: v34.H256): Promise<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<v34.H256[]>
    getPairs(block: Block): Promise<[k: v34.H256, v: (v34.BoundedVec | undefined)][]>
    getPairs(block: Block, key: v34.H256): Promise<[k: v34.H256, v: (v34.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v34.H256, v: (v34.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<[k: v34.H256, v: (v34.BoundedVec | undefined)][]>
}

export interface PreimageForV46  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v46.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v46.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v46.H256, number][]>
    getKeys(block: Block, key: [v46.H256, number]): Promise<[v46.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v46.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v46.H256, number]): AsyncIterable<[v46.H256, number][]>
    getPairs(block: Block): Promise<[k: [v46.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v46.H256, number]): Promise<[k: [v46.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v46.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v46.H256, number]): AsyncIterable<[k: [v46.H256, number], v: (Bytes | undefined)][]>
}
