import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v26 from '../v26'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v26: new StorageType('Treasury.Proposals', 'Optional', [v26.ProposalIndex], v26.TreasuryProposal) as ProposalsV26,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV26  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v26.ProposalIndex): Promise<(v26.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v26.ProposalIndex[]): Promise<(v26.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v26.ProposalIndex[]>
    getKeys(block: Block, key: v26.ProposalIndex): Promise<v26.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.ProposalIndex): AsyncIterable<v26.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v26.ProposalIndex, v: (v26.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v26.ProposalIndex): Promise<[k: v26.ProposalIndex, v: (v26.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.ProposalIndex, v: (v26.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.ProposalIndex): AsyncIterable<[k: v26.ProposalIndex, v: (v26.TreasuryProposal | undefined)][]>
}
