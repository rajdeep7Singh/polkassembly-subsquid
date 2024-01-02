import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v274 from '../v274'

export const childBounties =  {
    /**
     *  Child-bounties that have been added.
     */
    v274: new StorageType('ChildBounties.ChildBounties', 'Optional', [sts.number(), sts.number()], v274.ChildBounty) as ChildBountiesV274,
}

/**
 *  Child-bounties that have been added.
 */
export interface ChildBountiesV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v274.ChildBounty | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v274.ChildBounty | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v274.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v274.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v274.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v274.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v274.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v274.ChildBounty | undefined)][]>
}

export const childBountyDescriptions =  {
    /**
     *  The description of each child-bounty.
     */
    v274: new StorageType('ChildBounties.ChildBountyDescriptions', 'Optional', [sts.number()], v274.BoundedVec) as ChildBountyDescriptionsV274,
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountyDescriptionsV274  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v274.BoundedVec | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v274.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v274.BoundedVec | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v274.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v274.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v274.BoundedVec | undefined)][]>
}
