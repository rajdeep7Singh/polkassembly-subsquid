import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10500 from '../v10500'
import * as v10890 from '../v10890'
import * as v11401 from '../v11401'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v10500: new StorageType('Preimage.StatusFor', 'Optional', [v10500.H256], v10500.RequestStatus) as StatusForV10500,
    /**
     *  The request status of a given hash.
     */
    v10890: new StorageType('Preimage.StatusFor', 'Optional', [v10890.H256], v10890.RequestStatus) as StatusForV10890,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV10500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10500.H256): Promise<(v10500.RequestStatus | undefined)>
    getMany(block: Block, keys: v10500.H256[]): Promise<(v10500.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v10500.H256[]>
    getKeys(block: Block, key: v10500.H256): Promise<v10500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10500.H256): AsyncIterable<v10500.H256[]>
    getPairs(block: Block): Promise<[k: v10500.H256, v: (v10500.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v10500.H256): Promise<[k: v10500.H256, v: (v10500.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10500.H256, v: (v10500.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10500.H256): AsyncIterable<[k: v10500.H256, v: (v10500.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV10890  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10890.H256): Promise<(v10890.RequestStatus | undefined)>
    getMany(block: Block, keys: v10890.H256[]): Promise<(v10890.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v10890.H256[]>
    getKeys(block: Block, key: v10890.H256): Promise<v10890.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10890.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10890.H256): AsyncIterable<v10890.H256[]>
    getPairs(block: Block): Promise<[k: v10890.H256, v: (v10890.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v10890.H256): Promise<[k: v10890.H256, v: (v10890.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10890.H256, v: (v10890.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10890.H256): AsyncIterable<[k: v10890.H256, v: (v10890.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v10500: new StorageType('Preimage.PreimageFor', 'Optional', [v10500.H256], sts.bytes()) as PreimageForV10500,
    v10890: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v10890.H256, sts.number()])], sts.bytes()) as PreimageForV10890,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV10500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10500.H256): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v10500.H256[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v10500.H256[]>
    getKeys(block: Block, key: v10500.H256): Promise<v10500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10500.H256): AsyncIterable<v10500.H256[]>
    getPairs(block: Block): Promise<[k: v10500.H256, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v10500.H256): Promise<[k: v10500.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10500.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10500.H256): AsyncIterable<[k: v10500.H256, v: (Bytes | undefined)][]>
}

export interface PreimageForV10890  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v10890.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v10890.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v10890.H256, number][]>
    getKeys(block: Block, key: [v10890.H256, number]): Promise<[v10890.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v10890.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v10890.H256, number]): AsyncIterable<[v10890.H256, number][]>
    getPairs(block: Block): Promise<[k: [v10890.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v10890.H256, number]): Promise<[k: [v10890.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v10890.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v10890.H256, number]): AsyncIterable<[k: [v10890.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v11401: new StorageType('Preimage.RequestStatusFor', 'Optional', [v11401.H256], v11401.RequestStatus) as RequestStatusForV11401,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV11401  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11401.H256): Promise<(v11401.RequestStatus | undefined)>
    getMany(block: Block, keys: v11401.H256[]): Promise<(v11401.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v11401.H256[]>
    getKeys(block: Block, key: v11401.H256): Promise<v11401.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11401.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11401.H256): AsyncIterable<v11401.H256[]>
    getPairs(block: Block): Promise<[k: v11401.H256, v: (v11401.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v11401.H256): Promise<[k: v11401.H256, v: (v11401.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11401.H256, v: (v11401.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11401.H256): AsyncIterable<[k: v11401.H256, v: (v11401.RequestStatus | undefined)][]>
}
