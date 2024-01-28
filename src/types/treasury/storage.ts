import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v266 from '../v266'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v266: new StorageType('Treasury.Proposals', 'Optional', [v266.ProposalIndex], v266.TreasuryProposal) as ProposalsV266,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.ProposalIndex): Promise<(v266.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v266.ProposalIndex[]): Promise<(v266.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v266.ProposalIndex[]>
    getKeys(block: Block, key: v266.ProposalIndex): Promise<v266.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.ProposalIndex): AsyncIterable<v266.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v266.ProposalIndex, v: (v266.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v266.ProposalIndex): Promise<[k: v266.ProposalIndex, v: (v266.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.ProposalIndex, v: (v266.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.ProposalIndex): AsyncIterable<[k: v266.ProposalIndex, v: (v266.TreasuryProposal | undefined)][]>
}

export const tips =  {
    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v266: new StorageType('Treasury.Tips', 'Optional', [v266.Hash], v266.OpenTip) as TipsV266,
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.Hash): Promise<(v266.OpenTip | undefined)>
    getMany(block: Block, keys: v266.Hash[]): Promise<(v266.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v266.Hash[]>
    getKeys(block: Block, key: v266.Hash): Promise<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<v266.Hash[]>
    getPairs(block: Block): Promise<[k: v266.Hash, v: (v266.OpenTip | undefined)][]>
    getPairs(block: Block, key: v266.Hash): Promise<[k: v266.Hash, v: (v266.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.Hash, v: (v266.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<[k: v266.Hash, v: (v266.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v266: new StorageType('Treasury.Reasons', 'Optional', [v266.Hash], sts.bytes()) as ReasonsV266,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.Hash): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v266.Hash[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v266.Hash[]>
    getKeys(block: Block, key: v266.Hash): Promise<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<v266.Hash[]>
    getPairs(block: Block): Promise<[k: v266.Hash, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v266.Hash): Promise<[k: v266.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<[k: v266.Hash, v: (Bytes | undefined)][]>
}

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v266: new StorageType('Treasury.Bounties', 'Optional', [v266.BountyIndex], v266.Bounty) as BountiesV266,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.BountyIndex): Promise<(v266.Bounty | undefined)>
    getMany(block: Block, keys: v266.BountyIndex[]): Promise<(v266.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v266.BountyIndex[]>
    getKeys(block: Block, key: v266.BountyIndex): Promise<v266.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.BountyIndex): AsyncIterable<v266.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v266.BountyIndex, v: (v266.Bounty | undefined)][]>
    getPairs(block: Block, key: v266.BountyIndex): Promise<[k: v266.BountyIndex, v: (v266.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.BountyIndex, v: (v266.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.BountyIndex): AsyncIterable<[k: v266.BountyIndex, v: (v266.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v266: new StorageType('Treasury.BountyDescriptions', 'Optional', [v266.BountyIndex], sts.bytes()) as BountyDescriptionsV266,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v266.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v266.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v266.BountyIndex[]>
    getKeys(block: Block, key: v266.BountyIndex): Promise<v266.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.BountyIndex): AsyncIterable<v266.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v266.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v266.BountyIndex): Promise<[k: v266.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.BountyIndex): AsyncIterable<[k: v266.BountyIndex, v: (Bytes | undefined)][]>
}
