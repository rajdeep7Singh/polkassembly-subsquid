import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v103000 from '../v103000'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v103000: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v103000.Proposal) as ProposalsV103000,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV103000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v103000.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v103000.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v103000.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v103000.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v103000.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v103000.Proposal | undefined)][]>
}
