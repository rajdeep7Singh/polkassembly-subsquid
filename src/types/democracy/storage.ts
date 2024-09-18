import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2100 from '../v2100'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v2100: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v2100.Bounded, v2100.AccountId20]))) as PublicPropsV2100,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV2100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v2100.Bounded, v2100.AccountId20][]
    get(block: Block): Promise<([number, v2100.Bounded, v2100.AccountId20][] | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v2100: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v2100.ReferendumInfo) as ReferendumInfoOfV2100,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV2100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2100.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2100.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2100.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2100.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2100.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2100.ReferendumInfo | undefined)][]>
}
