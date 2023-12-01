import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'
import * as v1004000 from '../v1004000'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    collectivesV9420: new StorageType('Preimage.StatusFor', 'Optional', [collectivesV9420.H256], collectivesV9420.RequestStatus) as StatusForCollectivesV9420,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForCollectivesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV9420.H256): Promise<(collectivesV9420.RequestStatus | undefined)>
    getMany(block: Block, keys: collectivesV9420.H256[]): Promise<(collectivesV9420.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<collectivesV9420.H256[]>
    getKeys(block: Block, key: collectivesV9420.H256): Promise<collectivesV9420.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV9420.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV9420.H256): AsyncIterable<collectivesV9420.H256[]>
    getPairs(block: Block): Promise<[k: collectivesV9420.H256, v: (collectivesV9420.RequestStatus | undefined)][]>
    getPairs(block: Block, key: collectivesV9420.H256): Promise<[k: collectivesV9420.H256, v: (collectivesV9420.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV9420.H256, v: (collectivesV9420.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV9420.H256): AsyncIterable<[k: collectivesV9420.H256, v: (collectivesV9420.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    collectivesV9420: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [collectivesV9420.H256, sts.number()])], sts.bytes()) as PreimageForCollectivesV9420,
}

export interface PreimageForCollectivesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [collectivesV9420.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [collectivesV9420.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[collectivesV9420.H256, number][]>
    getKeys(block: Block, key: [collectivesV9420.H256, number]): Promise<[collectivesV9420.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[collectivesV9420.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [collectivesV9420.H256, number]): AsyncIterable<[collectivesV9420.H256, number][]>
    getPairs(block: Block): Promise<[k: [collectivesV9420.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [collectivesV9420.H256, number]): Promise<[k: [collectivesV9420.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [collectivesV9420.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [collectivesV9420.H256, number]): AsyncIterable<[k: [collectivesV9420.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1004000: new StorageType('Preimage.RequestStatusFor', 'Optional', [v1004000.H256], v1004000.RequestStatus) as RequestStatusForV1004000,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV1004000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1004000.H256): Promise<(v1004000.RequestStatus | undefined)>
    getMany(block: Block, keys: v1004000.H256[]): Promise<(v1004000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1004000.H256[]>
    getKeys(block: Block, key: v1004000.H256): Promise<v1004000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1004000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1004000.H256): AsyncIterable<v1004000.H256[]>
    getPairs(block: Block): Promise<[k: v1004000.H256, v: (v1004000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v1004000.H256): Promise<[k: v1004000.H256, v: (v1004000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1004000.H256, v: (v1004000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1004000.H256): AsyncIterable<[k: v1004000.H256, v: (v1004000.RequestStatus | undefined)][]>
}
