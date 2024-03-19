import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1900 from '../v1900'
import * as v2000 from '../v2000'
import * as v2700 from '../v2700'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1900: new StorageType('Preimage.StatusFor', 'Optional', [v1900.H256], v1900.RequestStatus) as StatusForV1900,
    /**
     *  The request status of a given hash.
     */
    v2000: new StorageType('Preimage.StatusFor', 'Optional', [v2000.H256], v2000.RequestStatus) as StatusForV2000,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV1900  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1900.H256): Promise<(v1900.RequestStatus | undefined)>
    getMany(block: Block, keys: v1900.H256[]): Promise<(v1900.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1900.H256[]>
    getKeys(block: Block, key: v1900.H256): Promise<v1900.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1900.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1900.H256): AsyncIterable<v1900.H256[]>
    getPairs(block: Block): Promise<[k: v1900.H256, v: (v1900.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v1900.H256): Promise<[k: v1900.H256, v: (v1900.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1900.H256, v: (v1900.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1900.H256): AsyncIterable<[k: v1900.H256, v: (v1900.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV2000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2000.H256): Promise<(v2000.RequestStatus | undefined)>
    getMany(block: Block, keys: v2000.H256[]): Promise<(v2000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v2000.H256[]>
    getKeys(block: Block, key: v2000.H256): Promise<v2000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2000.H256): AsyncIterable<v2000.H256[]>
    getPairs(block: Block): Promise<[k: v2000.H256, v: (v2000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v2000.H256): Promise<[k: v2000.H256, v: (v2000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2000.H256, v: (v2000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2000.H256): AsyncIterable<[k: v2000.H256, v: (v2000.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v1900: new StorageType('Preimage.PreimageFor', 'Optional', [v1900.H256], sts.bytes()) as PreimageForV1900,
    v2000: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v2000.H256, sts.number()])], sts.bytes()) as PreimageForV2000,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV1900  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1900.H256): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1900.H256[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v1900.H256[]>
    getKeys(block: Block, key: v1900.H256): Promise<v1900.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1900.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1900.H256): AsyncIterable<v1900.H256[]>
    getPairs(block: Block): Promise<[k: v1900.H256, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v1900.H256): Promise<[k: v1900.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1900.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1900.H256): AsyncIterable<[k: v1900.H256, v: (Bytes | undefined)][]>
}

export interface PreimageForV2000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v2000.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v2000.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v2000.H256, number][]>
    getKeys(block: Block, key: [v2000.H256, number]): Promise<[v2000.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2000.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v2000.H256, number]): AsyncIterable<[v2000.H256, number][]>
    getPairs(block: Block): Promise<[k: [v2000.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v2000.H256, number]): Promise<[k: [v2000.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2000.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v2000.H256, number]): AsyncIterable<[k: [v2000.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v2700: new StorageType('Preimage.RequestStatusFor', 'Optional', [v2700.H256], v2700.RequestStatus) as RequestStatusForV2700,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV2700  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2700.H256): Promise<(v2700.RequestStatus | undefined)>
    getMany(block: Block, keys: v2700.H256[]): Promise<(v2700.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v2700.H256[]>
    getKeys(block: Block, key: v2700.H256): Promise<v2700.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2700.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2700.H256): AsyncIterable<v2700.H256[]>
    getPairs(block: Block): Promise<[k: v2700.H256, v: (v2700.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v2700.H256): Promise<[k: v2700.H256, v: (v2700.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2700.H256, v: (v2700.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2700.H256): AsyncIterable<[k: v2700.H256, v: (v2700.RequestStatus | undefined)][]>
}
