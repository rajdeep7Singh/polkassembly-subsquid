import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v3000 from '../v3000'
import * as v3010 from '../v3010'
import * as v5000003 from '../v5000003'
import * as v5001002 from '../v5001002'
import * as v5002001 from '../v5002001'
import * as v5003001 from '../v5003001'
import * as v5004000 from '../v5004000'
import * as v6000004 from '../v6000004'
import * as v6001000 from '../v6001000'
import * as v6002000 from '../v6002000'

export const proposals =  {
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v3000: new StorageType('Pips.Proposals', 'Optional', [v3000.PipId], v3000.Pip) as ProposalsV3000,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v3010: new StorageType('Pips.Proposals', 'Optional', [v3010.PipId], v3010.Pip) as ProposalsV3010,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v5000003: new StorageType('Pips.Proposals', 'Optional', [v5000003.PipId], v5000003.Pip) as ProposalsV5000003,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v5001002: new StorageType('Pips.Proposals', 'Optional', [v5001002.PipId], v5001002.Pip) as ProposalsV5001002,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v5002001: new StorageType('Pips.Proposals', 'Optional', [v5002001.PipId], v5002001.Pip) as ProposalsV5002001,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v5003001: new StorageType('Pips.Proposals', 'Optional', [v5003001.PipId], v5003001.Pip) as ProposalsV5003001,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v5004000: new StorageType('Pips.Proposals', 'Optional', [v5004000.PipId], v5004000.Pip) as ProposalsV5004000,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v6000004: new StorageType('Pips.Proposals', 'Optional', [v6000004.PipId], v6000004.Pip) as ProposalsV6000004,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v6001000: new StorageType('Pips.Proposals', 'Optional', [v6001000.PipId], v6001000.Pip) as ProposalsV6001000,
    /**
     *  Actual proposal for a given id, if it's current.
     *  proposal id -> proposal
     */
    v6002000: new StorageType('Pips.Proposals', 'Optional', [v6002000.PipId], v6002000.Pip) as ProposalsV6002000,
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV3000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v3000.PipId): Promise<(v3000.Pip | undefined)>
    getMany(block: Block, keys: v3000.PipId[]): Promise<(v3000.Pip | undefined)[]>
    getKeys(block: Block): Promise<v3000.PipId[]>
    getKeys(block: Block, key: v3000.PipId): Promise<v3000.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3000.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v3000.PipId): AsyncIterable<v3000.PipId[]>
    getPairs(block: Block): Promise<[k: v3000.PipId, v: (v3000.Pip | undefined)][]>
    getPairs(block: Block, key: v3000.PipId): Promise<[k: v3000.PipId, v: (v3000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3000.PipId, v: (v3000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3000.PipId): AsyncIterable<[k: v3000.PipId, v: (v3000.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV3010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v3010.PipId): Promise<(v3010.Pip | undefined)>
    getMany(block: Block, keys: v3010.PipId[]): Promise<(v3010.Pip | undefined)[]>
    getKeys(block: Block): Promise<v3010.PipId[]>
    getKeys(block: Block, key: v3010.PipId): Promise<v3010.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3010.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v3010.PipId): AsyncIterable<v3010.PipId[]>
    getPairs(block: Block): Promise<[k: v3010.PipId, v: (v3010.Pip | undefined)][]>
    getPairs(block: Block, key: v3010.PipId): Promise<[k: v3010.PipId, v: (v3010.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3010.PipId, v: (v3010.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3010.PipId): AsyncIterable<[k: v3010.PipId, v: (v3010.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV5000003  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5000003.PipId): Promise<(v5000003.Pip | undefined)>
    getMany(block: Block, keys: v5000003.PipId[]): Promise<(v5000003.Pip | undefined)[]>
    getKeys(block: Block): Promise<v5000003.PipId[]>
    getKeys(block: Block, key: v5000003.PipId): Promise<v5000003.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5000003.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v5000003.PipId): AsyncIterable<v5000003.PipId[]>
    getPairs(block: Block): Promise<[k: v5000003.PipId, v: (v5000003.Pip | undefined)][]>
    getPairs(block: Block, key: v5000003.PipId): Promise<[k: v5000003.PipId, v: (v5000003.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5000003.PipId, v: (v5000003.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5000003.PipId): AsyncIterable<[k: v5000003.PipId, v: (v5000003.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV5001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5001002.PipId): Promise<(v5001002.Pip | undefined)>
    getMany(block: Block, keys: v5001002.PipId[]): Promise<(v5001002.Pip | undefined)[]>
    getKeys(block: Block): Promise<v5001002.PipId[]>
    getKeys(block: Block, key: v5001002.PipId): Promise<v5001002.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5001002.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v5001002.PipId): AsyncIterable<v5001002.PipId[]>
    getPairs(block: Block): Promise<[k: v5001002.PipId, v: (v5001002.Pip | undefined)][]>
    getPairs(block: Block, key: v5001002.PipId): Promise<[k: v5001002.PipId, v: (v5001002.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5001002.PipId, v: (v5001002.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5001002.PipId): AsyncIterable<[k: v5001002.PipId, v: (v5001002.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV5002001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5002001.PipId): Promise<(v5002001.Pip | undefined)>
    getMany(block: Block, keys: v5002001.PipId[]): Promise<(v5002001.Pip | undefined)[]>
    getKeys(block: Block): Promise<v5002001.PipId[]>
    getKeys(block: Block, key: v5002001.PipId): Promise<v5002001.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5002001.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v5002001.PipId): AsyncIterable<v5002001.PipId[]>
    getPairs(block: Block): Promise<[k: v5002001.PipId, v: (v5002001.Pip | undefined)][]>
    getPairs(block: Block, key: v5002001.PipId): Promise<[k: v5002001.PipId, v: (v5002001.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5002001.PipId, v: (v5002001.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5002001.PipId): AsyncIterable<[k: v5002001.PipId, v: (v5002001.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV5003001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5003001.PipId): Promise<(v5003001.Pip | undefined)>
    getMany(block: Block, keys: v5003001.PipId[]): Promise<(v5003001.Pip | undefined)[]>
    getKeys(block: Block): Promise<v5003001.PipId[]>
    getKeys(block: Block, key: v5003001.PipId): Promise<v5003001.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5003001.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v5003001.PipId): AsyncIterable<v5003001.PipId[]>
    getPairs(block: Block): Promise<[k: v5003001.PipId, v: (v5003001.Pip | undefined)][]>
    getPairs(block: Block, key: v5003001.PipId): Promise<[k: v5003001.PipId, v: (v5003001.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5003001.PipId, v: (v5003001.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5003001.PipId): AsyncIterable<[k: v5003001.PipId, v: (v5003001.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV5004000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5004000.PipId): Promise<(v5004000.Pip | undefined)>
    getMany(block: Block, keys: v5004000.PipId[]): Promise<(v5004000.Pip | undefined)[]>
    getKeys(block: Block): Promise<v5004000.PipId[]>
    getKeys(block: Block, key: v5004000.PipId): Promise<v5004000.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5004000.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v5004000.PipId): AsyncIterable<v5004000.PipId[]>
    getPairs(block: Block): Promise<[k: v5004000.PipId, v: (v5004000.Pip | undefined)][]>
    getPairs(block: Block, key: v5004000.PipId): Promise<[k: v5004000.PipId, v: (v5004000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5004000.PipId, v: (v5004000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5004000.PipId): AsyncIterable<[k: v5004000.PipId, v: (v5004000.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV6000004  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v6000004.PipId): Promise<(v6000004.Pip | undefined)>
    getMany(block: Block, keys: v6000004.PipId[]): Promise<(v6000004.Pip | undefined)[]>
    getKeys(block: Block): Promise<v6000004.PipId[]>
    getKeys(block: Block, key: v6000004.PipId): Promise<v6000004.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6000004.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v6000004.PipId): AsyncIterable<v6000004.PipId[]>
    getPairs(block: Block): Promise<[k: v6000004.PipId, v: (v6000004.Pip | undefined)][]>
    getPairs(block: Block, key: v6000004.PipId): Promise<[k: v6000004.PipId, v: (v6000004.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6000004.PipId, v: (v6000004.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6000004.PipId): AsyncIterable<[k: v6000004.PipId, v: (v6000004.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV6001000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v6001000.PipId): Promise<(v6001000.Pip | undefined)>
    getMany(block: Block, keys: v6001000.PipId[]): Promise<(v6001000.Pip | undefined)[]>
    getKeys(block: Block): Promise<v6001000.PipId[]>
    getKeys(block: Block, key: v6001000.PipId): Promise<v6001000.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6001000.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v6001000.PipId): AsyncIterable<v6001000.PipId[]>
    getPairs(block: Block): Promise<[k: v6001000.PipId, v: (v6001000.Pip | undefined)][]>
    getPairs(block: Block, key: v6001000.PipId): Promise<[k: v6001000.PipId, v: (v6001000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6001000.PipId, v: (v6001000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6001000.PipId): AsyncIterable<[k: v6001000.PipId, v: (v6001000.Pip | undefined)][]>
}

/**
 *  Actual proposal for a given id, if it's current.
 *  proposal id -> proposal
 */
export interface ProposalsV6002000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v6002000.PipId): Promise<(v6002000.Pip | undefined)>
    getMany(block: Block, keys: v6002000.PipId[]): Promise<(v6002000.Pip | undefined)[]>
    getKeys(block: Block): Promise<v6002000.PipId[]>
    getKeys(block: Block, key: v6002000.PipId): Promise<v6002000.PipId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6002000.PipId[]>
    getKeysPaged(pageSize: number, block: Block, key: v6002000.PipId): AsyncIterable<v6002000.PipId[]>
    getPairs(block: Block): Promise<[k: v6002000.PipId, v: (v6002000.Pip | undefined)][]>
    getPairs(block: Block, key: v6002000.PipId): Promise<[k: v6002000.PipId, v: (v6002000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6002000.PipId, v: (v6002000.Pip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6002000.PipId): AsyncIterable<[k: v6002000.PipId, v: (v6002000.Pip | undefined)][]>
}
