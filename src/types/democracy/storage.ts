import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v200 from '../v200'
import * as v10009 from '../v10009'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v200: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v200.H256, v200.AccountId32]))) as PublicPropsV200,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v10009: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v10009.Bounded, v10009.AccountId32]))) as PublicPropsV10009,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV200  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v200.H256, v200.AccountId32][]
    get(block: Block): Promise<([number, v200.H256, v200.AccountId32][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV10009  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v10009.Bounded, v10009.AccountId32][]
    get(block: Block): Promise<([number, v10009.Bounded, v10009.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v200: new StorageType('Democracy.Preimages', 'Optional', [v200.H256], v200.PreimageStatus) as PreimagesV200,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v200.H256): Promise<(v200.PreimageStatus | undefined)>
    getMany(block: Block, keys: v200.H256[]): Promise<(v200.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v200.H256[]>
    getKeys(block: Block, key: v200.H256): Promise<v200.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v200.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v200.H256): AsyncIterable<v200.H256[]>
    getPairs(block: Block): Promise<[k: v200.H256, v: (v200.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v200.H256): Promise<[k: v200.H256, v: (v200.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v200.H256, v: (v200.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v200.H256): AsyncIterable<[k: v200.H256, v: (v200.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v200: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v200.ReferendumInfo) as ReferendumInfoOfV200,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v10009: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v10009.ReferendumInfo) as ReferendumInfoOfV10009,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v200.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v200.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v200.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v200.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v200.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v200.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV10009  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v10009.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v10009.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v10009.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v10009.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v10009.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v10009.ReferendumInfo | undefined)][]>
}
