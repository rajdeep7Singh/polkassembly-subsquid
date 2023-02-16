import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v200 from './v200'
import * as v201 from './v201'
import * as v202 from './v202'

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV200(): BalancesAccountStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV200 {
    get(key: Uint8Array): Promise<v200.AccountData>
    getAll(): Promise<v200.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v200.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.AccountData][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV200(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV200(): BalancesTotalIssuanceStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV200 {
    get(): Promise<bigint>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV200(): BountiesBountiesStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV200 {
    get(key: number): Promise<(v200.Bounty | undefined)>
    getAll(): Promise<v200.Bounty[]>
    getMany(keys: number[]): Promise<(v200.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v200.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v200.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v200.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v200.Bounty][]>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV200(): BountiesBountyDescriptionsStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV200 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV200(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV200(): CouncilMembersStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV200 {
    get(): Promise<Uint8Array[]>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV200(): CouncilProposalCountStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV200 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '58b3419dea8c45e9ce24a28382ff7ad5e9e2a803350e55d1f0ba91bb4c6b80f0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): CouncilProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV201(): boolean {
        return this.getTypeHash() === 'e9cdea2244fdac4b5bccf9f51a9d21590545c6ff0c622e660577a6f4a967d94d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV201(): CouncilProposalOfStorageV201 {
        assert(this.isV201)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV202(): boolean {
        return this.getTypeHash() === '7ace6da3e271eac1a7925bb80cdccbfcb1ca490b6bb0cf52bde68e661cd764d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV202(): CouncilProposalOfStorageV202 {
        assert(this.isV202)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV200 {
    get(key: Uint8Array): Promise<(v200.Call | undefined)>
    getAll(): Promise<v200.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV201 {
    get(key: Uint8Array): Promise<(v201.Call | undefined)>
    getAll(): Promise<v201.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v201.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v201.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v201.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v201.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v201.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV202 {
    get(key: Uint8Array): Promise<(v202.Call | undefined)>
    getAll(): Promise<v202.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v202.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v202.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v202.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v202.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v202.Call][]>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV200(): DemocracyPreimagesStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV200 {
    get(key: Uint8Array): Promise<(v200.PreimageStatus | undefined)>
    getAll(): Promise<v200.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v200.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV200(): DemocracyPublicPropCountStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV200 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV200(): DemocracyPublicPropsStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV200 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV200(): DemocracyReferendumInfoOfStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV200 {
    get(key: number): Promise<(v200.ReferendumInfo | undefined)>
    getAll(): Promise<v200.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v200.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v200.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v200.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v200.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v200.ReferendumInfo][]>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV200(): SystemAccountStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV200 {
    get(key: Uint8Array): Promise<v200.AccountInfo>
    getAll(): Promise<v200.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v200.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.AccountInfo][]>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '58b3419dea8c45e9ce24a28382ff7ad5e9e2a803350e55d1f0ba91bb4c6b80f0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): TechnicalCommitteeProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV201(): boolean {
        return this.getTypeHash() === 'e9cdea2244fdac4b5bccf9f51a9d21590545c6ff0c622e660577a6f4a967d94d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV201(): TechnicalCommitteeProposalOfStorageV201 {
        assert(this.isV201)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV202(): boolean {
        return this.getTypeHash() === '7ace6da3e271eac1a7925bb80cdccbfcb1ca490b6bb0cf52bde68e661cd764d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV202(): TechnicalCommitteeProposalOfStorageV202 {
        assert(this.isV202)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV200 {
    get(key: Uint8Array): Promise<(v200.Call | undefined)>
    getAll(): Promise<v200.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV201 {
    get(key: Uint8Array): Promise<(v201.Call | undefined)>
    getAll(): Promise<v201.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v201.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v201.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v201.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v201.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v201.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV202 {
    get(key: Uint8Array): Promise<(v202.Call | undefined)>
    getAll(): Promise<v202.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v202.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v202.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v202.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v202.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v202.Call][]>
}

export class TipsReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV200(): TipsReasonsStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV200 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TipsTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV200(): TipsTipsStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV200 {
    get(key: Uint8Array): Promise<(v200.OpenTip | undefined)>
    getAll(): Promise<v200.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v200.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.OpenTip][]>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV200(): TreasuryProposalsStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV200 {
    get(key: number): Promise<(v200.Proposal | undefined)>
    getAll(): Promise<v200.Proposal[]>
    getMany(keys: number[]): Promise<(v200.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v200.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v200.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v200.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v200.Proposal][]>
}
