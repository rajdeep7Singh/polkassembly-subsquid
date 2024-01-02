import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v274 from '../v274'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v274: new StorageType('Preimage.StatusFor', 'Optional', [v274.H256], v274.RequestStatus) as StatusForV274,
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

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v274: new StorageType('Preimage.PreimageFor', 'Optional', [v274.H256], sts.bytes()) as PreimageForV274,
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
