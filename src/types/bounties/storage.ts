import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v274 from '../v274'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v268: new StorageType('Treasury.Bounties', 'Optional', [v268.BountyIndex], v268.Bounty) as BountiesV268,
    /**
     *  Bounties that have been made.
     */
    v274: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v274.Bounty) as BountiesV274,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV268  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v268.BountyIndex): Promise<(v268.Bounty | undefined)>
    getMany(block: Block, keys: v268.BountyIndex[]): Promise<(v268.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v268.BountyIndex[]>
    getKeys(block: Block, key: v268.BountyIndex): Promise<v268.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v268.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v268.BountyIndex): AsyncIterable<v268.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v268.BountyIndex, v: (v268.Bounty | undefined)][]>
    getPairs(block: Block, key: v268.BountyIndex): Promise<[k: v268.BountyIndex, v: (v268.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v268.BountyIndex, v: (v268.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v268.BountyIndex): AsyncIterable<[k: v268.BountyIndex, v: (v268.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v274.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v274.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v274.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v274.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v274.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v274.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v268: new StorageType('Treasury.BountyDescriptions', 'Optional', [v268.BountyIndex], sts.bytes()) as BountyDescriptionsV268,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV268  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v268.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v268.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v268.BountyIndex[]>
    getKeys(block: Block, key: v268.BountyIndex): Promise<v268.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v268.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v268.BountyIndex): AsyncIterable<v268.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v268.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v268.BountyIndex): Promise<[k: v268.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v268.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v268.BountyIndex): AsyncIterable<[k: v268.BountyIndex, v: (Bytes | undefined)][]>
}
