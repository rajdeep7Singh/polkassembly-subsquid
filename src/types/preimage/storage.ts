import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'
import * as v9310 from '../v9310'
import * as v102000 from '../v102000'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v9300: new StorageType('Preimage.StatusFor', 'Optional', [v9300.H256], v9300.RequestStatus) as StatusForV9300,
    /**
     *  The request status of a given hash.
     */
    v9310: new StorageType('Preimage.StatusFor', 'Optional', [v9310.H256], v9310.RequestStatus) as StatusForV9310,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.H256): Promise<(v9300.RequestStatus | undefined)>
    getMany(block: Block, keys: v9300.H256[]): Promise<(v9300.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v9300.H256[]>
    getKeys(block: Block, key: v9300.H256): Promise<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<v9300.H256[]>
    getPairs(block: Block): Promise<[k: v9300.H256, v: (v9300.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v9300.H256): Promise<[k: v9300.H256, v: (v9300.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.H256, v: (v9300.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<[k: v9300.H256, v: (v9300.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV9310  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9310.H256): Promise<(v9310.RequestStatus | undefined)>
    getMany(block: Block, keys: v9310.H256[]): Promise<(v9310.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v9310.H256[]>
    getKeys(block: Block, key: v9310.H256): Promise<v9310.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9310.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9310.H256): AsyncIterable<v9310.H256[]>
    getPairs(block: Block): Promise<[k: v9310.H256, v: (v9310.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v9310.H256): Promise<[k: v9310.H256, v: (v9310.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9310.H256, v: (v9310.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9310.H256): AsyncIterable<[k: v9310.H256, v: (v9310.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v9300: new StorageType('Preimage.PreimageFor', 'Optional', [v9300.H256], v9300.BoundedVec) as PreimageForV9300,
    v9310: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v9310.H256, sts.number()])], sts.bytes()) as PreimageForV9310,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.H256): Promise<(v9300.BoundedVec | undefined)>
    getMany(block: Block, keys: v9300.H256[]): Promise<(v9300.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<v9300.H256[]>
    getKeys(block: Block, key: v9300.H256): Promise<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<v9300.H256[]>
    getPairs(block: Block): Promise<[k: v9300.H256, v: (v9300.BoundedVec | undefined)][]>
    getPairs(block: Block, key: v9300.H256): Promise<[k: v9300.H256, v: (v9300.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.H256, v: (v9300.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<[k: v9300.H256, v: (v9300.BoundedVec | undefined)][]>
}

export interface PreimageForV9310  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9310.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v9310.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v9310.H256, number][]>
    getKeys(block: Block, key: [v9310.H256, number]): Promise<[v9310.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9310.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9310.H256, number]): AsyncIterable<[v9310.H256, number][]>
    getPairs(block: Block): Promise<[k: [v9310.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v9310.H256, number]): Promise<[k: [v9310.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9310.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9310.H256, number]): AsyncIterable<[k: [v9310.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v102000: new StorageType('Preimage.RequestStatusFor', 'Optional', [v102000.H256], v102000.RequestStatus) as RequestStatusForV102000,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV102000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v102000.H256): Promise<(v102000.RequestStatus | undefined)>
    getMany(block: Block, keys: v102000.H256[]): Promise<(v102000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v102000.H256[]>
    getKeys(block: Block, key: v102000.H256): Promise<v102000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v102000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v102000.H256): AsyncIterable<v102000.H256[]>
    getPairs(block: Block): Promise<[k: v102000.H256, v: (v102000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v102000.H256): Promise<[k: v102000.H256, v: (v102000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v102000.H256, v: (v102000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v102000.H256): AsyncIterable<[k: v102000.H256, v: (v102000.RequestStatus | undefined)][]>
}
