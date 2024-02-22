import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'
import * as v9310 from '../v9310'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v9300: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9300.H256, v9300.AccountId32]))) as PublicPropsV9300,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v9310: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9310.Bounded, v9310.AccountId32]))) as PublicPropsV9310,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV9300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9300.H256, v9300.AccountId32][]
    get(block: Block): Promise<([number, v9300.H256, v9300.AccountId32][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV9310  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9310.Bounded, v9310.AccountId32][]
    get(block: Block): Promise<([number, v9310.Bounded, v9310.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v9300: new StorageType('Democracy.Preimages', 'Optional', [v9300.H256], v9300.PreimageStatus) as PreimagesV9300,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.H256): Promise<(v9300.PreimageStatus | undefined)>
    getMany(block: Block, keys: v9300.H256[]): Promise<(v9300.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v9300.H256[]>
    getKeys(block: Block, key: v9300.H256): Promise<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<v9300.H256[]>
    getPairs(block: Block): Promise<[k: v9300.H256, v: (v9300.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v9300.H256): Promise<[k: v9300.H256, v: (v9300.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.H256, v: (v9300.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<[k: v9300.H256, v: (v9300.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9300: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9300.ReferendumInfo) as ReferendumInfoOfV9300,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9310: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9310.ReferendumInfo) as ReferendumInfoOfV9310,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9300.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9300.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9300.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9300.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9300.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9300.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9310  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9310.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9310.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9310.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9310.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9310.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9310.ReferendumInfo | undefined)][]>
}
