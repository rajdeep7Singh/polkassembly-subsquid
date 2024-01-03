import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v1: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v1.Bounded, v1.AccountId32]))) as PublicPropsV1,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v1.Bounded, v1.AccountId32][]
    get(block: Block): Promise<([number, v1.Bounded, v1.AccountId32][] | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v1: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v1.ReferendumInfo) as ReferendumInfoOfV1,
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
