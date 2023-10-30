import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v47 from '../v47'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v47: new StorageType('Treasury.Proposals', 'Optional', [v47.ProposalIndex], v47.TreasuryProposal) as ProposalsV47,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV47  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v47.ProposalIndex): Promise<(v47.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v47.ProposalIndex[]): Promise<(v47.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v47.ProposalIndex[]>
    getKeys(block: Block, key: v47.ProposalIndex): Promise<v47.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v47.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v47.ProposalIndex): AsyncIterable<v47.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v47.ProposalIndex, v: (v47.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v47.ProposalIndex): Promise<[k: v47.ProposalIndex, v: (v47.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v47.ProposalIndex, v: (v47.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v47.ProposalIndex): AsyncIterable<[k: v47.ProposalIndex, v: (v47.TreasuryProposal | undefined)][]>
}
