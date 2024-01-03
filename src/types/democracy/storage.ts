import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v11 from '../v11'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v1: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v1.H256, v1.AccountId32]))) as PublicPropsV1,
    v11: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v11.Bounded, v11.AccountId32]))) as PublicPropsV11,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v1.H256, v1.AccountId32][]
    get(block: Block): Promise<([number, v1.H256, v1.AccountId32][] | undefined)>
}

export interface PublicPropsV11  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v11.Bounded, v11.AccountId32][]
    get(block: Block): Promise<([number, v11.Bounded, v11.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v1: new StorageType('Democracy.Preimages', 'Optional', [v1.H256], v1.PreimageStatus) as PreimagesV1,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.H256): Promise<(v1.PreimageStatus | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<(v1.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v1.H256[]>
    getKeys(block: Block, key: v1.H256): Promise<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<v1.H256[]>
    getPairs(block: Block): Promise<[k: v1.H256, v: (v1.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v1.H256): Promise<[k: v1.H256, v: (v1.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.H256, v: (v1.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<[k: v1.H256, v: (v1.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v1: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v1.ReferendumInfo) as ReferendumInfoOfV1,
    v11: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v11.ReferendumInfo) as ReferendumInfoOfV11,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1.ReferendumInfo | undefined)][]>
}

export interface ReferendumInfoOfV11  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v11.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v11.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v11.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v11.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v11.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v11.ReferendumInfo | undefined)][]>
}
