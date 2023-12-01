import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'
import * as collectivesV1000000 from '../collectivesV1000000'
import * as v1004000 from '../v1004000'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    collectivesV9420: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => collectivesV9420.Scheduled))) as AgendaCollectivesV9420,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    collectivesV1000000: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => collectivesV1000000.Scheduled))) as AgendaCollectivesV1000000,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1004000: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1004000.Scheduled))) as AgendaV1004000,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaCollectivesV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (collectivesV9420.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((collectivesV9420.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((collectivesV9420.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((collectivesV9420.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((collectivesV9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((collectivesV9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((collectivesV9420.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaCollectivesV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (collectivesV1000000.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((collectivesV1000000.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((collectivesV1000000.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((collectivesV1000000.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((collectivesV1000000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((collectivesV1000000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((collectivesV1000000.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1004000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1004000.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1004000.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1004000.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1004000.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1004000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1004000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1004000.Scheduled | undefined)[] | undefined)][]>
}
