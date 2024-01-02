import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v268 from '../v268'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v268: new StorageType('Treasury.Proposals', 'Optional', [v268.ProposalIndex], v268.TreasuryProposal) as ProposalsV268,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV268  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v268.ProposalIndex): Promise<(v268.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v268.ProposalIndex[]): Promise<(v268.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v268.ProposalIndex[]>
    getKeys(block: Block, key: v268.ProposalIndex): Promise<v268.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v268.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v268.ProposalIndex): AsyncIterable<v268.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v268.ProposalIndex, v: (v268.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v268.ProposalIndex): Promise<[k: v268.ProposalIndex, v: (v268.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v268.ProposalIndex, v: (v268.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v268.ProposalIndex): AsyncIterable<[k: v268.ProposalIndex, v: (v268.TreasuryProposal | undefined)][]>
}
