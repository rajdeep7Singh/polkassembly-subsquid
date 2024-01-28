import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v21 from '../v21'
import * as v28 from '../v28'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v21: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v21.H256, v21.AccountId32]))) as PublicPropsV21,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v28: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v28.Bounded, v28.AccountId32]))) as PublicPropsV28,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV21  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v21.H256, v21.AccountId32][]
    get(block: Block): Promise<([number, v21.H256, v21.AccountId32][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v28.Bounded, v28.AccountId32][]
    get(block: Block): Promise<([number, v28.Bounded, v28.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v21: new StorageType('Democracy.Preimages', 'Optional', [v21.H256], v21.PreimageStatus) as PreimagesV21,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV21  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v21.H256): Promise<(v21.PreimageStatus | undefined)>
    getMany(block: Block, keys: v21.H256[]): Promise<(v21.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v21.H256[]>
    getKeys(block: Block, key: v21.H256): Promise<v21.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v21.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v21.H256): AsyncIterable<v21.H256[]>
    getPairs(block: Block): Promise<[k: v21.H256, v: (v21.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v21.H256): Promise<[k: v21.H256, v: (v21.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v21.H256, v: (v21.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v21.H256): AsyncIterable<[k: v21.H256, v: (v21.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v21: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v21.ReferendumInfo) as ReferendumInfoOfV21,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v28: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v28.ReferendumInfo) as ReferendumInfoOfV28,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV21  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v21.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v21.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v21.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v21.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v21.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v21.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v28.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v28.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v28.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v28.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v28.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v28.ReferendumInfo | undefined)][]>
}
