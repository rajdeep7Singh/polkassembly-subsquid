import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v46 from '../v46'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v34: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v34.H256, v34.AccountId32]))) as PublicPropsV34,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v46: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v46.Bounded, v46.AccountId32]))) as PublicPropsV46,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV34  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v34.H256, v34.AccountId32][]
    get(block: Block): Promise<([number, v34.H256, v34.AccountId32][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v46.Bounded, v46.AccountId32][]
    get(block: Block): Promise<([number, v46.Bounded, v46.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v34: new StorageType('Democracy.Preimages', 'Optional', [v34.H256], v34.PreimageStatus) as PreimagesV34,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV34  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v34.H256): Promise<(v34.PreimageStatus | undefined)>
    getMany(block: Block, keys: v34.H256[]): Promise<(v34.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v34.H256[]>
    getKeys(block: Block, key: v34.H256): Promise<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v34.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<v34.H256[]>
    getPairs(block: Block): Promise<[k: v34.H256, v: (v34.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v34.H256): Promise<[k: v34.H256, v: (v34.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v34.H256, v: (v34.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v34.H256): AsyncIterable<[k: v34.H256, v: (v34.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v34: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v34.ReferendumInfo) as ReferendumInfoOfV34,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v46: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v46.ReferendumInfo) as ReferendumInfoOfV46,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV34  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v34.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v34.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v34.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v34.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v34.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v34.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV46  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v46.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v46.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v46.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v46.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v46.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v46.ReferendumInfo | undefined)][]>
}
