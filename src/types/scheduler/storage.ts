import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'
import * as v1000000 from '../v1000000'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9420: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9420.Scheduled))) as AgendaV9420,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1000000: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1000000.Scheduled))) as AgendaV1000000,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9420.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v9420.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9420.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1000000.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1000000.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1000000.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
}
