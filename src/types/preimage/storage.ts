import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v9420: new StorageType('Preimage.StatusFor', 'Optional', [v9420.H256], v9420.RequestStatus) as StatusForV9420,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9420.H256): Promise<(v9420.RequestStatus | undefined)>
    getMany(block: Block, keys: v9420.H256[]): Promise<(v9420.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v9420.H256[]>
    getKeys(block: Block, key: v9420.H256): Promise<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<v9420.H256[]>
    getPairs(block: Block): Promise<[k: v9420.H256, v: (v9420.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v9420.H256): Promise<[k: v9420.H256, v: (v9420.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.H256, v: (v9420.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<[k: v9420.H256, v: (v9420.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v9420: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v9420.H256, sts.number()])], sts.bytes()) as PreimageForV9420,
}

export interface PreimageForV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9420.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v9420.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v9420.H256, number][]>
    getKeys(block: Block, key: [v9420.H256, number]): Promise<[v9420.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9420.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9420.H256, number]): AsyncIterable<[v9420.H256, number][]>
    getPairs(block: Block): Promise<[k: [v9420.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v9420.H256, number]): Promise<[k: [v9420.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9420.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9420.H256, number]): AsyncIterable<[k: [v9420.H256, number], v: (Bytes | undefined)][]>
}
