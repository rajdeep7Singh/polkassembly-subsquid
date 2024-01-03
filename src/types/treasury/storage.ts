import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v3 from '../v3'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v3: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v3.Proposal) as ProposalsV3,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v3.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v3.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v3.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v3.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v3.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v3.Proposal | undefined)][]>
}
