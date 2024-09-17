import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'
import * as v6000 from '../v6000'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v5000: new StorageType('Preimage.StatusFor', 'Optional', [v5000.H256], v5000.RequestStatus) as StatusForV5000,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV5000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5000.H256): Promise<(v5000.RequestStatus | undefined)>
    getMany(block: Block, keys: v5000.H256[]): Promise<(v5000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v5000.H256[]>
    getKeys(block: Block, key: v5000.H256): Promise<v5000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v5000.H256): AsyncIterable<v5000.H256[]>
    getPairs(block: Block): Promise<[k: v5000.H256, v: (v5000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v5000.H256): Promise<[k: v5000.H256, v: (v5000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5000.H256, v: (v5000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5000.H256): AsyncIterable<[k: v5000.H256, v: (v5000.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v5000: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v5000.H256, sts.number()])], sts.bytes()) as PreimageForV5000,
}

export interface PreimageForV5000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v5000.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v5000.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v5000.H256, number][]>
    getKeys(block: Block, key: [v5000.H256, number]): Promise<[v5000.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v5000.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v5000.H256, number]): AsyncIterable<[v5000.H256, number][]>
    getPairs(block: Block): Promise<[k: [v5000.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v5000.H256, number]): Promise<[k: [v5000.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v5000.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v5000.H256, number]): AsyncIterable<[k: [v5000.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v6000: new StorageType('Preimage.RequestStatusFor', 'Optional', [v6000.H256], v6000.RequestStatus) as RequestStatusForV6000,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV6000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v6000.H256): Promise<(v6000.RequestStatus | undefined)>
    getMany(block: Block, keys: v6000.H256[]): Promise<(v6000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v6000.H256[]>
    getKeys(block: Block, key: v6000.H256): Promise<v6000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v6000.H256): AsyncIterable<v6000.H256[]>
    getPairs(block: Block): Promise<[k: v6000.H256, v: (v6000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v6000.H256): Promise<[k: v6000.H256, v: (v6000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6000.H256, v: (v6000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6000.H256): AsyncIterable<[k: v6000.H256, v: (v6000.RequestStatus | undefined)][]>
}
