import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'
import * as v9350 from '../v9350'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v9320: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v9320.Type_643) as ReferendumInfoForV9320,
    /**
     *  Information concerning any given referendum.
     */
    v9350: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v9350.Type_643) as ReferendumInfoForV9350,
    /**
     *  Information concerning any given referendum.
     */
    v9370: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v9370.Type_644) as ReferendumInfoForV9370,
    /**
     *  Information concerning any given referendum.
     */
    v9381: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v9381.Type_649) as ReferendumInfoForV9381,
    /**
     *  Information concerning any given referendum.
     */
    v9420: new StorageType('FellowshipReferenda.ReferendumInfoFor', 'Optional', [sts.number()], v9420.Type_632) as ReferendumInfoForV9420,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9320.Type_643 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9320.Type_643 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9320.Type_643 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9320.Type_643 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9320.Type_643 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9320.Type_643 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9350  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9350.Type_643 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9350.Type_643 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9350.Type_643 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9350.Type_643 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9350.Type_643 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9350.Type_643 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9370.Type_644 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9370.Type_644 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9370.Type_644 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9370.Type_644 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9370.Type_644 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9370.Type_644 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9381.Type_649 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9381.Type_649 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9381.Type_649 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9381.Type_649 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9381.Type_649 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9381.Type_649 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.Type_632 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.Type_632 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.Type_632 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.Type_632 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.Type_632 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.Type_632 | undefined)][]>
}
