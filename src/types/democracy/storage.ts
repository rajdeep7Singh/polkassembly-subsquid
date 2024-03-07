import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v5000: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v5000.Bounded, v5000.AccountId32]))) as PublicPropsV5000,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV5000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v5000.Bounded, v5000.AccountId32][]
    get(block: Block): Promise<([number, v5000.Bounded, v5000.AccountId32][] | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v5000: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v5000.ReferendumInfo) as ReferendumInfoOfV5000,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV5000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v5000.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v5000.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v5000.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v5000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v5000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v5000.ReferendumInfo | undefined)][]>
}
