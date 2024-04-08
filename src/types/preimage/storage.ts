import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v13 from '../v13'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v13: new StorageType('Preimage.StatusFor', 'Optional', [v13.H256], v13.RequestStatus) as StatusForV13,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.H256): Promise<(v13.RequestStatus | undefined)>
    getMany(block: Block, keys: v13.H256[]): Promise<(v13.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v13.H256[]>
    getKeys(block: Block, key: v13.H256): Promise<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<v13.H256[]>
    getPairs(block: Block): Promise<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v13.H256): Promise<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<[k: v13.H256, v: (v13.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v13: new StorageType('Preimage.PreimageFor', 'Optional', [v13.H256], v13.BoundedVec) as PreimageForV13,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.H256): Promise<(v13.BoundedVec | undefined)>
    getMany(block: Block, keys: v13.H256[]): Promise<(v13.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<v13.H256[]>
    getKeys(block: Block, key: v13.H256): Promise<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<v13.H256[]>
    getPairs(block: Block): Promise<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
    getPairs(block: Block, key: v13.H256): Promise<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<[k: v13.H256, v: (v13.BoundedVec | undefined)][]>
}
