import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV1000000 from '../collectivesV1000000'

export const status =  {
    /**
     *  The overall status of the system.
     */
    collectivesV1000000: new StorageType('FellowshipSalary.Status', 'Optional', [], collectivesV1000000.StatusType) as StatusCollectivesV1000000,
}

/**
 *  The overall status of the system.
 */
export interface StatusCollectivesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(collectivesV1000000.StatusType | undefined)>
}

export const claimant =  {
    /**
     *  The status of a claimant.
     */
    collectivesV1000000: new StorageType('FellowshipSalary.Claimant', 'Optional', [collectivesV1000000.AccountId32], collectivesV1000000.ClaimantStatus) as ClaimantCollectivesV1000000,
}

/**
 *  The status of a claimant.
 */
export interface ClaimantCollectivesV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: collectivesV1000000.AccountId32): Promise<(collectivesV1000000.ClaimantStatus | undefined)>
    getMany(block: Block, keys: collectivesV1000000.AccountId32[]): Promise<(collectivesV1000000.ClaimantStatus | undefined)[]>
    getKeys(block: Block): Promise<collectivesV1000000.AccountId32[]>
    getKeys(block: Block, key: collectivesV1000000.AccountId32): Promise<collectivesV1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<collectivesV1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: collectivesV1000000.AccountId32): AsyncIterable<collectivesV1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: collectivesV1000000.AccountId32, v: (collectivesV1000000.ClaimantStatus | undefined)][]>
    getPairs(block: Block, key: collectivesV1000000.AccountId32): Promise<[k: collectivesV1000000.AccountId32, v: (collectivesV1000000.ClaimantStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: collectivesV1000000.AccountId32, v: (collectivesV1000000.ClaimantStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: collectivesV1000000.AccountId32): AsyncIterable<[k: collectivesV1000000.AccountId32, v: (collectivesV1000000.ClaimantStatus | undefined)][]>
}
