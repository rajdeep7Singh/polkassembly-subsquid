import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v13 from '../v13'
import * as v32 from '../v32'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v13: new StorageType('Preimage.StatusFor', 'Optional', [v13.H256], v13.RequestStatus) as StatusForV13,
    /**
     *  The request status of a given hash.
     */
    v32: new StorageType('Preimage.StatusFor', 'Optional', [v32.H256], v32.RequestStatus) as StatusForV32,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.H256): Promise<(v13.RequestStatus | undefined)>
    getMany(block: Block, keys: v13.H256[]): Promise<(v13.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v13.H256[]>
    getKeys(block: Block, key: v13.H256): Promise<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<v13.H256[]>
    getPairs(block: Block): Promise<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v13.H256): Promise<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV32  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v32.H256): Promise<(v32.RequestStatus | undefined)>
    getMany(block: Block, keys: v32.H256[]): Promise<(v32.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v32.H256[]>
    getKeys(block: Block, key: v32.H256): Promise<v32.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v32.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v32.H256): AsyncIterable<v32.H256[]>
    getPairs(block: Block): Promise<[k: v32.H256, v: (v32.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v32.H256): Promise<[k: v32.H256, v: (v32.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v32.H256, v: (v32.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v32.H256): AsyncIterable<[k: v32.H256, v: (v32.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v13: new StorageType('Preimage.PreimageFor', 'Optional', [v13.H256], v13.BoundedVec) as PreimageForV13,
    v32: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v32.H256, sts.number()])], sts.bytes()) as PreimageForV32,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.H256): Promise<(v13.BoundedVec | undefined)>
    getMany(block: Block, keys: v13.H256[]): Promise<(v13.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<v13.H256[]>
    getKeys(block: Block, key: v13.H256): Promise<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<v13.H256[]>
    getPairs(block: Block): Promise<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
    getPairs(block: Block, key: v13.H256): Promise<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
}

export interface PreimageForV32  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v32.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v32.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v32.H256, number][]>
    getKeys(block: Block, key: [v32.H256, number]): Promise<[v32.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v32.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v32.H256, number]): AsyncIterable<[v32.H256, number][]>
    getPairs(block: Block): Promise<[k: [v32.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v32.H256, number]): Promise<[k: [v32.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v32.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v32.H256, number]): AsyncIterable<[k: [v32.H256, number], v: (Bytes | undefined)][]>
}
