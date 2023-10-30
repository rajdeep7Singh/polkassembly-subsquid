import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v40 from '../v40'
import * as v900 from '../v900'
import * as v2000 from '../v2000'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v40: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v40.PropIndex, v40.Hash, v40.AccountId]))) as PublicPropsV40,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v2000: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v2000.Bounded, v2000.AccountId20]))) as PublicPropsV2000,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV40  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v40.PropIndex, v40.Hash, v40.AccountId][]
    get(block: Block): Promise<([v40.PropIndex, v40.Hash, v40.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV2000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v2000.Bounded, v2000.AccountId20][]
    get(block: Block): Promise<([number, v2000.Bounded, v2000.AccountId20][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v40: new StorageType('Democracy.Preimages', 'Optional', [v40.Hash], v40.PreimageStatus) as PreimagesV40,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v900: new StorageType('Democracy.Preimages', 'Optional', [v900.H256], v900.PreimageStatus) as PreimagesV900,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV40  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v40.Hash): Promise<(v40.PreimageStatus | undefined)>
    getMany(block: Block, keys: v40.Hash[]): Promise<(v40.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v40.Hash[]>
    getKeys(block: Block, key: v40.Hash): Promise<v40.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v40.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v40.Hash): AsyncIterable<v40.Hash[]>
    getPairs(block: Block): Promise<[k: v40.Hash, v: (v40.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v40.Hash): Promise<[k: v40.Hash, v: (v40.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v40.Hash, v: (v40.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v40.Hash): AsyncIterable<[k: v40.Hash, v: (v40.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV900  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v900.H256): Promise<(v900.PreimageStatus | undefined)>
    getMany(block: Block, keys: v900.H256[]): Promise<(v900.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v900.H256[]>
    getKeys(block: Block, key: v900.H256): Promise<v900.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v900.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v900.H256): AsyncIterable<v900.H256[]>
    getPairs(block: Block): Promise<[k: v900.H256, v: (v900.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v900.H256): Promise<[k: v900.H256, v: (v900.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v900.H256, v: (v900.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v900.H256): AsyncIterable<[k: v900.H256, v: (v900.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v40: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v40.ReferendumIndex], v40.ReferendumInfo) as ReferendumInfoOfV40,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v900: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v900.ReferendumInfo) as ReferendumInfoOfV900,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v2000: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v2000.ReferendumInfo) as ReferendumInfoOfV2000,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV40  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v40.ReferendumIndex): Promise<(v40.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v40.ReferendumIndex[]): Promise<(v40.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v40.ReferendumIndex[]>
    getKeys(block: Block, key: v40.ReferendumIndex): Promise<v40.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v40.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v40.ReferendumIndex): AsyncIterable<v40.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v40.ReferendumIndex, v: (v40.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v40.ReferendumIndex): Promise<[k: v40.ReferendumIndex, v: (v40.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v40.ReferendumIndex, v: (v40.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v40.ReferendumIndex): AsyncIterable<[k: v40.ReferendumIndex, v: (v40.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV900  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v900.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v900.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v900.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v900.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v900.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v900.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV2000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2000.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2000.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2000.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2000.ReferendumInfo | undefined)][]>
}
