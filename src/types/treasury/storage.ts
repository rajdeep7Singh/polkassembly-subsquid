import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v25 from '../v25'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v25: new StorageType('Treasury.Proposals', 'Optional', [v25.ProposalIndex], v25.TreasuryProposal) as ProposalsV25,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.ProposalIndex): Promise<(v25.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v25.ProposalIndex[]): Promise<(v25.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v25.ProposalIndex[]>
    getKeys(block: Block, key: v25.ProposalIndex): Promise<v25.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.ProposalIndex): AsyncIterable<v25.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v25.ProposalIndex, v: (v25.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v25.ProposalIndex): Promise<[k: v25.ProposalIndex, v: (v25.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.ProposalIndex, v: (v25.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.ProposalIndex): AsyncIterable<[k: v25.ProposalIndex, v: (v25.TreasuryProposal | undefined)][]>
}
