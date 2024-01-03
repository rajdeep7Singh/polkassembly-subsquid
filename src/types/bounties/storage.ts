import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v3 from '../v3'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v3: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v3.Bounty) as BountiesV3,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v3.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v3.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v3.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v3.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v3.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v3.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v3: new StorageType('Bounties.BountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as BountyDescriptionsV3,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}
