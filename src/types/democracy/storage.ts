import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v295 from '../v295'
import * as v48300 from '../v48300'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v266: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v266.PropIndex, v266.Hash, v266.AccountId]))) as PublicPropsV266,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v48300: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v48300.Bounded, v48300.AccountId32]))) as PublicPropsV48300,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v266.PropIndex, v266.Hash, v266.AccountId][]
    get(block: Block): Promise<([v266.PropIndex, v266.Hash, v266.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV48300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v48300.Bounded, v48300.AccountId32][]
    get(block: Block): Promise<([number, v48300.Bounded, v48300.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v266: new StorageType('Democracy.Preimages', 'Optional', [v266.Hash], v266.PreimageStatus) as PreimagesV266,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v295: new StorageType('Democracy.Preimages', 'Optional', [v295.H256], v295.PreimageStatus) as PreimagesV295,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.Hash): Promise<(v266.PreimageStatus | undefined)>
    getMany(block: Block, keys: v266.Hash[]): Promise<(v266.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v266.Hash[]>
    getKeys(block: Block, key: v266.Hash): Promise<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<v266.Hash[]>
    getPairs(block: Block): Promise<[k: v266.Hash, v: (v266.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v266.Hash): Promise<[k: v266.Hash, v: (v266.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.Hash, v: (v266.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<[k: v266.Hash, v: (v266.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV295  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v295.H256): Promise<(v295.PreimageStatus | undefined)>
    getMany(block: Block, keys: v295.H256[]): Promise<(v295.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v295.H256[]>
    getKeys(block: Block, key: v295.H256): Promise<v295.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v295.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v295.H256): AsyncIterable<v295.H256[]>
    getPairs(block: Block): Promise<[k: v295.H256, v: (v295.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v295.H256): Promise<[k: v295.H256, v: (v295.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v295.H256, v: (v295.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v295.H256): AsyncIterable<[k: v295.H256, v: (v295.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v266: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v266.ReferendumIndex], v266.ReferendumInfo) as ReferendumInfoOfV266,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v295: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v295.ReferendumInfo) as ReferendumInfoOfV295,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v48300: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v48300.ReferendumInfo) as ReferendumInfoOfV48300,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.ReferendumIndex): Promise<(v266.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v266.ReferendumIndex[]): Promise<(v266.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v266.ReferendumIndex[]>
    getKeys(block: Block, key: v266.ReferendumIndex): Promise<v266.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.ReferendumIndex): AsyncIterable<v266.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v266.ReferendumIndex, v: (v266.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v266.ReferendumIndex): Promise<[k: v266.ReferendumIndex, v: (v266.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.ReferendumIndex, v: (v266.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.ReferendumIndex): AsyncIterable<[k: v266.ReferendumIndex, v: (v266.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV295  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v295.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v295.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v295.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v295.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v295.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v295.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV48300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v48300.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v48300.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v48300.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v48300.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v48300.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v48300.ReferendumInfo | undefined)][]>
}
