import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v14 from '../v14'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v14: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v14.Proposal) as ProposalsV14,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV14  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v14.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v14.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v14.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v14.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v14.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v14.Proposal | undefined)][]>
}
