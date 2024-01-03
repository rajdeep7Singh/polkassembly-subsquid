import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v100 from '../v100'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v100: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v100.Proposal) as ProposalsV100,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v100.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v100.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v100.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v100.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v100.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v100.Proposal | undefined)][]>
}
