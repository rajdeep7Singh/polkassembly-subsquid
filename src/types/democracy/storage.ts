import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v25 from '../v25'
import * as v2800 from '../v2800'
import * as v10890 from '../v10890'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v25: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v25.PropIndex, v25.Hash, v25.AccountId]))) as PublicPropsV25,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v10890: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v10890.Bounded, v10890.AccountId32]))) as PublicPropsV10890,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v25.PropIndex, v25.Hash, v25.AccountId][]
    get(block: Block): Promise<([v25.PropIndex, v25.Hash, v25.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV10890  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v10890.Bounded, v10890.AccountId32][]
    get(block: Block): Promise<([number, v10890.Bounded, v10890.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v25: new StorageType('Democracy.Preimages', 'Optional', [v25.Hash], v25.PreimageStatus) as PreimagesV25,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v2800: new StorageType('Democracy.Preimages', 'Optional', [v2800.H256], v2800.PreimageStatus) as PreimagesV2800,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.Hash): Promise<(v25.PreimageStatus | undefined)>
    getMany(block: Block, keys: v25.Hash[]): Promise<(v25.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v25.Hash[]>
    getKeys(block: Block, key: v25.Hash): Promise<v25.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.Hash): AsyncIterable<v25.Hash[]>
    getPairs(block: Block): Promise<[k: v25.Hash, v: (v25.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v25.Hash): Promise<[k: v25.Hash, v: (v25.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.Hash, v: (v25.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.Hash): AsyncIterable<[k: v25.Hash, v: (v25.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV2800  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2800.H256): Promise<(v2800.PreimageStatus | undefined)>
    getMany(block: Block, keys: v2800.H256[]): Promise<(v2800.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v2800.H256[]>
    getKeys(block: Block, key: v2800.H256): Promise<v2800.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2800.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2800.H256): AsyncIterable<v2800.H256[]>
    getPairs(block: Block): Promise<[k: v2800.H256, v: (v2800.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v2800.H256): Promise<[k: v2800.H256, v: (v2800.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2800.H256, v: (v2800.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2800.H256): AsyncIterable<[k: v2800.H256, v: (v2800.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v25: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v25.ReferendumIndex], v25.ReferendumInfo) as ReferendumInfoOfV25,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v2800: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v2800.ReferendumInfo) as ReferendumInfoOfV2800,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v10890: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v10890.ReferendumInfo) as ReferendumInfoOfV10890,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.ReferendumIndex): Promise<(v25.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v25.ReferendumIndex[]): Promise<(v25.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v25.ReferendumIndex[]>
    getKeys(block: Block, key: v25.ReferendumIndex): Promise<v25.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.ReferendumIndex): AsyncIterable<v25.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v25.ReferendumIndex, v: (v25.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v25.ReferendumIndex): Promise<[k: v25.ReferendumIndex, v: (v25.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.ReferendumIndex, v: (v25.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.ReferendumIndex): AsyncIterable<[k: v25.ReferendumIndex, v: (v25.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV2800  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2800.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2800.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2800.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2800.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2800.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2800.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV10890  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v10890.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v10890.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v10890.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v10890.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v10890.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v10890.ReferendumInfo | undefined)][]>
}
