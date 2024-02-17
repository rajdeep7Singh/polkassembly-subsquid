import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v274 from '../v274'
import * as v283 from '../v283'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v274: new StorageType('Preimage.StatusFor', 'Optional', [v274.H256], v274.RequestStatus) as StatusForV274,
    /**
     *  The request status of a given hash.
     */
    v283: new StorageType('Preimage.StatusFor', 'Optional', [v283.H256], v283.RequestStatus) as StatusForV283,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v274.H256): Promise<(v274.RequestStatus | undefined)>
    getMany(block: Block, keys: v274.H256[]): Promise<(v274.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v274.H256[]>
    getKeys(block: Block, key: v274.H256): Promise<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<v274.H256[]>
    getPairs(block: Block): Promise<[k: v274.H256, v: (v274.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v274.H256): Promise<[k: v274.H256, v: (v274.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v274.H256, v: (v274.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<[k: v274.H256, v: (v274.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v283.H256): Promise<(v283.RequestStatus | undefined)>
    getMany(block: Block, keys: v283.H256[]): Promise<(v283.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v283.H256[]>
    getKeys(block: Block, key: v283.H256): Promise<v283.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.H256): AsyncIterable<v283.H256[]>
    getPairs(block: Block): Promise<[k: v283.H256, v: (v283.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v283.H256): Promise<[k: v283.H256, v: (v283.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.H256, v: (v283.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.H256): AsyncIterable<[k: v283.H256, v: (v283.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v274: new StorageType('Preimage.PreimageFor', 'Optional', [v274.H256], sts.bytes()) as PreimageForV274,
    v283: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v283.H256, sts.number()])], sts.bytes()) as PreimageForV283,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v274.H256): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v274.H256[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v274.H256[]>
    getKeys(block: Block, key: v274.H256): Promise<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<v274.H256[]>
    getPairs(block: Block): Promise<[k: v274.H256, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v274.H256): Promise<[k: v274.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v274.H256, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<[k: v274.H256, v: (Bytes | undefined)][]>
}

export interface PreimageForV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v283.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v283.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v283.H256, number][]>
    getKeys(block: Block, key: [v283.H256, number]): Promise<[v283.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v283.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v283.H256, number]): AsyncIterable<[v283.H256, number][]>
    getPairs(block: Block): Promise<[k: [v283.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v283.H256, number]): Promise<[k: [v283.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v283.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v283.H256, number]): AsyncIterable<[k: [v283.H256, number], v: (Bytes | undefined)][]>
}
