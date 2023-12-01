import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const status =  {
    /**
     *  The overall status of the system.
     */
    v1000000: new StorageType('FellowshipSalary.Status', 'Optional', [], v1000000.StatusType) as StatusV1000000,
}

/**
 *  The overall status of the system.
 */
export interface StatusV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1000000.StatusType | undefined)>
}

export const claimant =  {
    /**
     *  The status of a claimant.
     */
    v1000000: new StorageType('FellowshipSalary.Claimant', 'Optional', [v1000000.AccountId32], v1000000.ClaimantStatus) as ClaimantV1000000,
}

/**
 *  The status of a claimant.
 */
export interface ClaimantV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.AccountId32): Promise<(v1000000.ClaimantStatus | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(v1000000.ClaimantStatus | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (v1000000.ClaimantStatus | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (v1000000.ClaimantStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.ClaimantStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.ClaimantStatus | undefined)][]>
}
