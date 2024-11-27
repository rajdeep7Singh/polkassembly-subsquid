import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48400 from '../v48400'
import * as v55000 from '../v55000'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v48400: new StorageType('Preimage.StatusFor', 'Optional', [v48400.H256], v48400.RequestStatus) as StatusForV48400,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV48400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48400.H256): Promise<(v48400.RequestStatus | undefined)>
    getMany(block: Block, keys: v48400.H256[]): Promise<(v48400.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v48400.H256[]>
    getKeys(block: Block, key: v48400.H256): Promise<v48400.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48400.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48400.H256): AsyncIterable<v48400.H256[]>
    getPairs(block: Block): Promise<[k: v48400.H256, v: (v48400.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v48400.H256): Promise<[k: v48400.H256, v: (v48400.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48400.H256, v: (v48400.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48400.H256): AsyncIterable<[k: v48400.H256, v: (v48400.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v48400: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v48400.H256, sts.number()])], sts.bytes()) as PreimageForV48400,
}

export interface PreimageForV48400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v48400.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v48400.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v48400.H256, number][]>
    getKeys(block: Block, key: [v48400.H256, number]): Promise<[v48400.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48400.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v48400.H256, number]): AsyncIterable<[v48400.H256, number][]>
    getPairs(block: Block): Promise<[k: [v48400.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v48400.H256, number]): Promise<[k: [v48400.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48400.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v48400.H256, number]): AsyncIterable<[k: [v48400.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v55000: new StorageType('Preimage.RequestStatusFor', 'Optional', [v55000.H256], v55000.RequestStatus) as RequestStatusForV55000,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV55000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v55000.H256): Promise<(v55000.RequestStatus | undefined)>
    getMany(block: Block, keys: v55000.H256[]): Promise<(v55000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v55000.H256[]>
    getKeys(block: Block, key: v55000.H256): Promise<v55000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v55000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v55000.H256): AsyncIterable<v55000.H256[]>
    getPairs(block: Block): Promise<[k: v55000.H256, v: (v55000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v55000.H256): Promise<[k: v55000.H256, v: (v55000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v55000.H256, v: (v55000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v55000.H256): AsyncIterable<[k: v55000.H256, v: (v55000.RequestStatus | undefined)][]>
}
