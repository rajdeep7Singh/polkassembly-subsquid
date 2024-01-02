import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v273 from '../v273'
import * as v274 from '../v274'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v273: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v273.PropIndex, v273.Hash, v273.AccountId]))) as PublicPropsV273,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV273  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v273.PropIndex, v273.Hash, v273.AccountId][]
    get(block: Block): Promise<([v273.PropIndex, v273.Hash, v273.AccountId][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v273: new StorageType('Democracy.Preimages', 'Optional', [v273.Hash], v273.PreimageStatus) as PreimagesV273,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v274: new StorageType('Democracy.Preimages', 'Optional', [v274.H256], v274.PreimageStatus) as PreimagesV274,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV273  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v273.Hash): Promise<(v273.PreimageStatus | undefined)>
    getMany(block: Block, keys: v273.Hash[]): Promise<(v273.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v273.Hash[]>
    getKeys(block: Block, key: v273.Hash): Promise<v273.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v273.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v273.Hash): AsyncIterable<v273.Hash[]>
    getPairs(block: Block): Promise<[k: v273.Hash, v: (v273.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v273.Hash): Promise<[k: v273.Hash, v: (v273.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v273.Hash, v: (v273.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v273.Hash): AsyncIterable<[k: v273.Hash, v: (v273.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v274.H256): Promise<(v274.PreimageStatus | undefined)>
    getMany(block: Block, keys: v274.H256[]): Promise<(v274.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v274.H256[]>
    getKeys(block: Block, key: v274.H256): Promise<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v274.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<v274.H256[]>
    getPairs(block: Block): Promise<[k: v274.H256, v: (v274.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v274.H256): Promise<[k: v274.H256, v: (v274.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v274.H256, v: (v274.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v274.H256): AsyncIterable<[k: v274.H256, v: (v274.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v273: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v273.ReferendumIndex], v273.ReferendumInfo) as ReferendumInfoOfV273,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v274: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v274.ReferendumInfo) as ReferendumInfoOfV274,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV273  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v273.ReferendumIndex): Promise<(v273.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v273.ReferendumIndex[]): Promise<(v273.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v273.ReferendumIndex[]>
    getKeys(block: Block, key: v273.ReferendumIndex): Promise<v273.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v273.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v273.ReferendumIndex): AsyncIterable<v273.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v273.ReferendumIndex, v: (v273.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v273.ReferendumIndex): Promise<[k: v273.ReferendumIndex, v: (v273.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v273.ReferendumIndex, v: (v273.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v273.ReferendumIndex): AsyncIterable<[k: v273.ReferendumIndex, v: (v273.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v274.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v274.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v274.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v274.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v274.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v274.ReferendumInfo | undefined)][]>
}
