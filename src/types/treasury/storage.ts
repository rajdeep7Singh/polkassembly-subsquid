import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v9300: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v9300.Proposal) as ProposalsV9300,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9300.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9300.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9300.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9300.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9300.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9300.Proposal | undefined)][]>
}
