import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v100 from '../v100'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v100: new StorageType('Preimage.StatusFor', 'Optional', [v100.H256], v100.RequestStatus) as StatusForV100,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v100.H256): Promise<(v100.RequestStatus | undefined)>
    getMany(block: Block, keys: v100.H256[]): Promise<(v100.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v100.H256[]>
    getKeys(block: Block, key: v100.H256): Promise<v100.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.H256): AsyncIterable<v100.H256[]>
    getPairs(block: Block): Promise<[k: v100.H256, v: (v100.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v100.H256): Promise<[k: v100.H256, v: (v100.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v100.H256, v: (v100.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v100.H256): AsyncIterable<[k: v100.H256, v: (v100.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v100: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v100.H256, sts.number()])], sts.bytes()) as PreimageForV100,
}

export interface PreimageForV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v100.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v100.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v100.H256, number][]>
    getKeys(block: Block, key: [v100.H256, number]): Promise<[v100.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v100.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v100.H256, number]): AsyncIterable<[v100.H256, number][]>
    getPairs(block: Block): Promise<[k: [v100.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v100.H256, number]): Promise<[k: [v100.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v100.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v100.H256, number]): AsyncIterable<[k: [v100.H256, number], v: (Bytes | undefined)][]>
}
