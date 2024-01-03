import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const childBounties =  {
    /**
     *  Child bounties that have been added.
     */
    v1: new StorageType('ChildBounties.ChildBounties', 'Optional', [sts.number(), sts.number()], v1.ChildBounty) as ChildBountiesV1,
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v1.ChildBounty | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v1.ChildBounty | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v1.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v1.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v1.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v1.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v1.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v1.ChildBounty | undefined)][]>
}

export const childBountyDescriptions =  {
    /**
     *  The description of each child-bounty.
     */
    v1: new StorageType('ChildBounties.ChildBountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as ChildBountyDescriptionsV1,
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountyDescriptionsV1  {
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
