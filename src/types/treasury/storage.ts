import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v49 from '../v49'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v49: new StorageType('Treasury.Proposals', 'Optional', [v49.ProposalIndex], v49.TreasuryProposal) as ProposalsV49,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV49  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v49.ProposalIndex): Promise<(v49.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v49.ProposalIndex[]): Promise<(v49.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v49.ProposalIndex[]>
    getKeys(block: Block, key: v49.ProposalIndex): Promise<v49.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v49.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v49.ProposalIndex): AsyncIterable<v49.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v49.ProposalIndex, v: (v49.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v49.ProposalIndex): Promise<[k: v49.ProposalIndex, v: (v49.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v49.ProposalIndex, v: (v49.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v49.ProposalIndex): AsyncIterable<[k: v49.ProposalIndex, v: (v49.TreasuryProposal | undefined)][]>
}
