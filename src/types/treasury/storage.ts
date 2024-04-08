import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5 from '../v5'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v5: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v5.Proposal) as ProposalsV5,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV5  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v5.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v5.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v5.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v5.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v5.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v5.Proposal | undefined)][]>
}
