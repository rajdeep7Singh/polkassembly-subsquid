import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2100 from '../v2100'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v2100: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v2100.H256], v2100.Call) as ProposalOfV2100,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV2100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2100.H256): Promise<(v2100.Call | undefined)>
    getMany(block: Block, keys: v2100.H256[]): Promise<(v2100.Call | undefined)[]>
    getKeys(block: Block): Promise<v2100.H256[]>
    getKeys(block: Block, key: v2100.H256): Promise<v2100.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2100.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2100.H256): AsyncIterable<v2100.H256[]>
    getPairs(block: Block): Promise<[k: v2100.H256, v: (v2100.Call | undefined)][]>
    getPairs(block: Block, key: v2100.H256): Promise<[k: v2100.H256, v: (v2100.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2100.H256, v: (v2100.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2100.H256): AsyncIterable<[k: v2100.H256, v: (v2100.Call | undefined)][]>
}
