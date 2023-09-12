import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v266 from './v266'
import * as v278 from './v278'
import * as v280 from './v280'
import * as v281 from './v281'
import * as v282 from './v282'
import * as v283 from './v283'
import * as v284 from './v284'
import * as v285 from './v285'
import * as v288 from './v288'
import * as v290 from './v290'
import * as v291 from './v291'
import * as v292 from './v292'
import * as v293 from './v293'
import * as v294 from './v294'
import * as v295 from './v295'
import * as v297 from './v297'
import * as v299 from './v299'
import * as v300 from './v300'
import * as v301 from './v301'
import * as v30500 from './v30500'
import * as v30800 from './v30800'
import * as v43000 from './v43000'
import * as v45000 from './v45000'
import * as v46000 from './v46000'
import * as v47000 from './v47000'

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
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get isV266(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get asV266(): BalancesAccountStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface BalancesAccountStorageV266 {
    get(key: Uint8Array): Promise<v266.AccountData>
    getAll(): Promise<v266.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v266.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v266.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v266.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v266.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v266.AccountData][]>
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
    get isV266(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV266(): BalancesTotalIssuanceStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV266 {
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
    get isV295(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV295(): BountiesBountiesStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV295 {
    get(key: number): Promise<(v295.Bounty | undefined)>
    getAll(): Promise<v295.Bounty[]>
    getMany(keys: number[]): Promise<(v295.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v295.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v295.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v295.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v295.Bounty][]>
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
    get isV295(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV295(): BountiesBountyDescriptionsStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV295 {
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

export class ChildBountiesChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBounties'
    }

    /**
     *  Child-bounties that have been added.
     */
    get isV299(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child-bounties that have been added.
     */
    get asV299(): ChildBountiesChildBountiesStorageV299 {
        assert(this.isV299)
        return this as any
    }
}

/**
 *  Child-bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV299 {
    get(key1: number, key2: number): Promise<(v299.ChildBounty | undefined)>
    getAll(): Promise<v299.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v299.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v299.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v299.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v299.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v299.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v299.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v299.ChildBounty][]>
}

export class ChildBountiesChildBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyDescriptions'
    }

    /**
     *  The description of each child-bounty.
     */
    get isV299(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV299(): ChildBountiesChildBountyDescriptionsStorageV299 {
        assert(this.isV299)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV299 {
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
    get isV295(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV295(): CouncilMembersStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV295 {
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
    get isV295(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV295(): CouncilProposalCountStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV295 {
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
    get isV295(): boolean {
        return this.getTypeHash() === '31982e1485a26743449d2308085e222543ad7997ecede1fc01673c07e62490a1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV295(): CouncilProposalOfStorageV295 {
        assert(this.isV295)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV297(): boolean {
        return this.getTypeHash() === '49b87cb6cd25ca53f3a62a5a07ba336fd786eb379aa09ac2d954dd8e3f0783ba'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV297(): CouncilProposalOfStorageV297 {
        assert(this.isV297)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV299(): boolean {
        return this.getTypeHash() === '15d3490b228cf4f2ba7c2b25e6dc937feb2da54a4fc14a3efc2bb9d856b7a6df'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV299(): CouncilProposalOfStorageV299 {
        assert(this.isV299)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV300(): boolean {
        return this.getTypeHash() === '4ba31f293dee8805c32df19195d43725102cbb92f1d16b5495f0992f8ef36392'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV300(): CouncilProposalOfStorageV300 {
        assert(this.isV300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV301(): boolean {
        return this.getTypeHash() === 'c8c72f2b03494bb79a25b83267695b67d8413d494580be9b7396ed51256d27f0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV301(): CouncilProposalOfStorageV301 {
        assert(this.isV301)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30500(): boolean {
        return this.getTypeHash() === '258c071db81f43b183cfebb04dd210d44fbe9f48d6a176c03206083784b5eabf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30500(): CouncilProposalOfStorageV30500 {
        assert(this.isV30500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30800(): boolean {
        return this.getTypeHash() === '91a0709dca498eaf01546ea5bc3e5a6ee86fdfdfce32b3c4881b017d1d696094'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30800(): CouncilProposalOfStorageV30800 {
        assert(this.isV30800)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43000(): boolean {
        return this.getTypeHash() === '5a3917aff6950360269d1a1c71607f18f6fccc8e8a504e2fcc9ab21cea59b8c5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43000(): CouncilProposalOfStorageV43000 {
        assert(this.isV43000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV45000(): boolean {
        return this.getTypeHash() === 'b6f6010e5662145d4de6b6a703854f8252b91743ca32188e1b716d99be0dbb69'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV45000(): CouncilProposalOfStorageV45000 {
        assert(this.isV45000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV46000(): boolean {
        return this.getTypeHash() === '1ad5c3739712cce8d6031e099e23dae24b9cfab9c7a15bab500c97bc60a9bdc7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV46000(): CouncilProposalOfStorageV46000 {
        assert(this.isV46000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV47000(): boolean {
        return this.getTypeHash() === '0f519614b1d9e8e5200c5479c81ed6e7028dba599f7383964cf94ef638e8490d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV47000(): CouncilProposalOfStorageV47000 {
        assert(this.isV47000)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV295 {
    get(key: Uint8Array): Promise<(v295.Call | undefined)>
    getAll(): Promise<v295.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v295.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v295.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v295.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v295.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v295.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV297 {
    get(key: Uint8Array): Promise<(v297.Call | undefined)>
    getAll(): Promise<v297.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v297.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v297.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v297.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v297.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v297.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV299 {
    get(key: Uint8Array): Promise<(v299.Call | undefined)>
    getAll(): Promise<v299.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v299.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v299.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v299.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v299.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v299.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV300 {
    get(key: Uint8Array): Promise<(v300.Call | undefined)>
    getAll(): Promise<v300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV301 {
    get(key: Uint8Array): Promise<(v301.Call | undefined)>
    getAll(): Promise<v301.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v301.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v301.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v301.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v301.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v301.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV30500 {
    get(key: Uint8Array): Promise<(v30500.Call | undefined)>
    getAll(): Promise<v30500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v30500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV30800 {
    get(key: Uint8Array): Promise<(v30800.Call | undefined)>
    getAll(): Promise<v30800.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v30800.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30800.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30800.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30800.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30800.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV43000 {
    get(key: Uint8Array): Promise<(v43000.Call | undefined)>
    getAll(): Promise<v43000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV45000 {
    get(key: Uint8Array): Promise<(v45000.Call | undefined)>
    getAll(): Promise<v45000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v45000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v45000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v45000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v45000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v45000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV46000 {
    get(key: Uint8Array): Promise<(v46000.Call | undefined)>
    getAll(): Promise<v46000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v46000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v46000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v46000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v46000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v46000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV47000 {
    get(key: Uint8Array): Promise<(v47000.Call | undefined)>
    getAll(): Promise<v47000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v47000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v47000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v47000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v47000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v47000.Call][]>
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
    get isV266(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV266(): DemocracyPreimagesStorageV266 {
        assert(this.isV266)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV295(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV295(): DemocracyPreimagesStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV266 {
    get(key: Uint8Array): Promise<(v266.PreimageStatus | undefined)>
    getAll(): Promise<v266.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v266.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v266.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v266.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v266.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v266.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV295 {
    get(key: Uint8Array): Promise<(v295.PreimageStatus | undefined)>
    getAll(): Promise<v295.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v295.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v295.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v295.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v295.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v295.PreimageStatus][]>
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
    get isV266(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV266(): DemocracyPublicPropCountStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV266 {
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
    get isV266(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV266(): DemocracyPublicPropsStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV266 {
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
    get isV266(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV266(): DemocracyReferendumInfoOfStorageV266 {
        assert(this.isV266)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV295(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV295(): DemocracyReferendumInfoOfStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV266 {
    get(key: number): Promise<(v266.ReferendumInfo | undefined)>
    getAll(): Promise<v266.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v266.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v266.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v266.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v266.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v266.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV295 {
    get(key: number): Promise<(v295.ReferendumInfo | undefined)>
    getAll(): Promise<v295.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v295.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v295.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v295.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v295.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v295.ReferendumInfo][]>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV266(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV266(): Instance1CollectiveMembersStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV266 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV266(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV266(): Instance1CollectiveProposalCountStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV266 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV266(): boolean {
        return this.getTypeHash() === '1cae89563e6eb150697382db4e901e9b172978ad1be1b4612110346de5b99b59'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV266(): Instance1CollectiveProposalOfStorageV266 {
        assert(this.isV266)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV278(): boolean {
        return this.getTypeHash() === '290e215fce3bc82f5db6821355c5f2d44b3ff17e5334c1b7ca6e540746ed7c2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV278(): Instance1CollectiveProposalOfStorageV278 {
        assert(this.isV278)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV280(): boolean {
        return this.getTypeHash() === '696ca6bce34ff4a632e2ba448dfd096cede399a2e8a34882a1b540bae8938490'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV280(): Instance1CollectiveProposalOfStorageV280 {
        assert(this.isV280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV281(): boolean {
        return this.getTypeHash() === '0745ebfbb76c490a12a3e565d9ffc6ab231cec788401114aec5084e28eb2bf53'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV281(): Instance1CollectiveProposalOfStorageV281 {
        assert(this.isV281)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV282(): boolean {
        return this.getTypeHash() === 'abc671ac6dbae1fed76d33be95a138fda596311f273df1a6d44390fbe6ecd066'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV282(): Instance1CollectiveProposalOfStorageV282 {
        assert(this.isV282)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV283(): boolean {
        return this.getTypeHash() === 'f96833e3662e6ee5d3c68fbbb8c311f96fe50a63828104e9e6600e025ae18008'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV283(): Instance1CollectiveProposalOfStorageV283 {
        assert(this.isV283)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV284(): boolean {
        return this.getTypeHash() === 'aa2bd0b31871293ce97605b5088c2fcce8a08ccdbe432daa07ccc20e2cd86c69'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV284(): Instance1CollectiveProposalOfStorageV284 {
        assert(this.isV284)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV285(): boolean {
        return this.getTypeHash() === 'b356a0a0ffd3e7a135bbbc9df3a2a6b5b9c7b6e7d199b4617579dea58b26955c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV285(): Instance1CollectiveProposalOfStorageV285 {
        assert(this.isV285)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV288(): boolean {
        return this.getTypeHash() === '4185ff3d3505fd3fb0324dae1bd8660fa8814199fb4fa181180712a7a0101d12'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV288(): Instance1CollectiveProposalOfStorageV288 {
        assert(this.isV288)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV290(): boolean {
        return this.getTypeHash() === '84f80ec048bcd60cc36f703f9761a8f629a7b1af688f69f13879e31e3ea17189'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV290(): Instance1CollectiveProposalOfStorageV290 {
        assert(this.isV290)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV291(): boolean {
        return this.getTypeHash() === '4b8aea5c45b08395df5c134c646d5666a4dd9ee734776dad589956e9ddf730e4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV291(): Instance1CollectiveProposalOfStorageV291 {
        assert(this.isV291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV292(): boolean {
        return this.getTypeHash() === 'a741d993afdb0d2ebbbd076a086529ccb17589498be66aa32fe723cfbfe4354b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV292(): Instance1CollectiveProposalOfStorageV292 {
        assert(this.isV292)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV293(): boolean {
        return this.getTypeHash() === '01dffffd9543366e2f29cf909e70e81751f6e5c11ae2930ffe4572e92b4f214b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV293(): Instance1CollectiveProposalOfStorageV293 {
        assert(this.isV293)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV294(): boolean {
        return this.getTypeHash() === '49db8c2659e4222196d167ae9a503d48826788bdb49a3ab0dda4f4a6e9456466'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV294(): Instance1CollectiveProposalOfStorageV294 {
        assert(this.isV294)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV266 {
    get(key: Uint8Array): Promise<(v266.Proposal | undefined)>
    getAll(): Promise<v266.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v266.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v266.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v266.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v266.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v266.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV278 {
    get(key: Uint8Array): Promise<(v278.Proposal | undefined)>
    getAll(): Promise<v278.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v278.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v278.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v278.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v278.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v278.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV280 {
    get(key: Uint8Array): Promise<(v280.Proposal | undefined)>
    getAll(): Promise<v280.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v280.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v280.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v280.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v280.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v280.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV281 {
    get(key: Uint8Array): Promise<(v281.Proposal | undefined)>
    getAll(): Promise<v281.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v281.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v281.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v281.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v281.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v281.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV282 {
    get(key: Uint8Array): Promise<(v282.Proposal | undefined)>
    getAll(): Promise<v282.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v282.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v282.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v282.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v282.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v282.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV283 {
    get(key: Uint8Array): Promise<(v283.Proposal | undefined)>
    getAll(): Promise<v283.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v283.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v283.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v283.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v283.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v283.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV284 {
    get(key: Uint8Array): Promise<(v284.Proposal | undefined)>
    getAll(): Promise<v284.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v284.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v284.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v284.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v284.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v284.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV285 {
    get(key: Uint8Array): Promise<(v285.Proposal | undefined)>
    getAll(): Promise<v285.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v285.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v285.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v285.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v285.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v285.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV288 {
    get(key: Uint8Array): Promise<(v288.Proposal | undefined)>
    getAll(): Promise<v288.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v288.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v288.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v288.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v288.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v288.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV290 {
    get(key: Uint8Array): Promise<(v290.Proposal | undefined)>
    getAll(): Promise<v290.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v290.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v290.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v290.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v290.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v290.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV291 {
    get(key: Uint8Array): Promise<(v291.Proposal | undefined)>
    getAll(): Promise<v291.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v291.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v291.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v291.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v291.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v291.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV292 {
    get(key: Uint8Array): Promise<(v292.Proposal | undefined)>
    getAll(): Promise<v292.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v292.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v292.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v292.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v292.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v292.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV293 {
    get(key: Uint8Array): Promise<(v293.Proposal | undefined)>
    getAll(): Promise<v293.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v293.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v293.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v293.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v293.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v293.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV294 {
    get(key: Uint8Array): Promise<(v294.Proposal | undefined)>
    getAll(): Promise<v294.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v294.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v294.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v294.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v294.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v294.Proposal][]>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV266(): boolean {
        return this.getTypeHash() === '1cae89563e6eb150697382db4e901e9b172978ad1be1b4612110346de5b99b59'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV266(): Instance2CollectiveProposalOfStorageV266 {
        assert(this.isV266)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV278(): boolean {
        return this.getTypeHash() === '290e215fce3bc82f5db6821355c5f2d44b3ff17e5334c1b7ca6e540746ed7c2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV278(): Instance2CollectiveProposalOfStorageV278 {
        assert(this.isV278)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV280(): boolean {
        return this.getTypeHash() === '696ca6bce34ff4a632e2ba448dfd096cede399a2e8a34882a1b540bae8938490'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV280(): Instance2CollectiveProposalOfStorageV280 {
        assert(this.isV280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV281(): boolean {
        return this.getTypeHash() === '0745ebfbb76c490a12a3e565d9ffc6ab231cec788401114aec5084e28eb2bf53'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV281(): Instance2CollectiveProposalOfStorageV281 {
        assert(this.isV281)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV282(): boolean {
        return this.getTypeHash() === 'abc671ac6dbae1fed76d33be95a138fda596311f273df1a6d44390fbe6ecd066'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV282(): Instance2CollectiveProposalOfStorageV282 {
        assert(this.isV282)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV283(): boolean {
        return this.getTypeHash() === 'f96833e3662e6ee5d3c68fbbb8c311f96fe50a63828104e9e6600e025ae18008'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV283(): Instance2CollectiveProposalOfStorageV283 {
        assert(this.isV283)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV284(): boolean {
        return this.getTypeHash() === 'aa2bd0b31871293ce97605b5088c2fcce8a08ccdbe432daa07ccc20e2cd86c69'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV284(): Instance2CollectiveProposalOfStorageV284 {
        assert(this.isV284)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV285(): boolean {
        return this.getTypeHash() === 'b356a0a0ffd3e7a135bbbc9df3a2a6b5b9c7b6e7d199b4617579dea58b26955c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV285(): Instance2CollectiveProposalOfStorageV285 {
        assert(this.isV285)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV288(): boolean {
        return this.getTypeHash() === '4185ff3d3505fd3fb0324dae1bd8660fa8814199fb4fa181180712a7a0101d12'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV288(): Instance2CollectiveProposalOfStorageV288 {
        assert(this.isV288)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV290(): boolean {
        return this.getTypeHash() === '84f80ec048bcd60cc36f703f9761a8f629a7b1af688f69f13879e31e3ea17189'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV290(): Instance2CollectiveProposalOfStorageV290 {
        assert(this.isV290)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV291(): boolean {
        return this.getTypeHash() === '4b8aea5c45b08395df5c134c646d5666a4dd9ee734776dad589956e9ddf730e4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV291(): Instance2CollectiveProposalOfStorageV291 {
        assert(this.isV291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV292(): boolean {
        return this.getTypeHash() === 'a741d993afdb0d2ebbbd076a086529ccb17589498be66aa32fe723cfbfe4354b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV292(): Instance2CollectiveProposalOfStorageV292 {
        assert(this.isV292)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV293(): boolean {
        return this.getTypeHash() === '01dffffd9543366e2f29cf909e70e81751f6e5c11ae2930ffe4572e92b4f214b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV293(): Instance2CollectiveProposalOfStorageV293 {
        assert(this.isV293)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV294(): boolean {
        return this.getTypeHash() === '49db8c2659e4222196d167ae9a503d48826788bdb49a3ab0dda4f4a6e9456466'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV294(): Instance2CollectiveProposalOfStorageV294 {
        assert(this.isV294)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV266 {
    get(key: Uint8Array): Promise<(v266.Proposal | undefined)>
    getAll(): Promise<v266.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v266.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v266.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v266.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v266.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v266.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV278 {
    get(key: Uint8Array): Promise<(v278.Proposal | undefined)>
    getAll(): Promise<v278.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v278.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v278.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v278.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v278.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v278.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV280 {
    get(key: Uint8Array): Promise<(v280.Proposal | undefined)>
    getAll(): Promise<v280.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v280.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v280.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v280.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v280.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v280.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV281 {
    get(key: Uint8Array): Promise<(v281.Proposal | undefined)>
    getAll(): Promise<v281.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v281.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v281.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v281.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v281.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v281.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV282 {
    get(key: Uint8Array): Promise<(v282.Proposal | undefined)>
    getAll(): Promise<v282.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v282.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v282.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v282.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v282.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v282.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV283 {
    get(key: Uint8Array): Promise<(v283.Proposal | undefined)>
    getAll(): Promise<v283.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v283.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v283.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v283.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v283.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v283.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV284 {
    get(key: Uint8Array): Promise<(v284.Proposal | undefined)>
    getAll(): Promise<v284.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v284.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v284.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v284.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v284.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v284.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV285 {
    get(key: Uint8Array): Promise<(v285.Proposal | undefined)>
    getAll(): Promise<v285.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v285.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v285.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v285.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v285.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v285.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV288 {
    get(key: Uint8Array): Promise<(v288.Proposal | undefined)>
    getAll(): Promise<v288.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v288.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v288.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v288.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v288.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v288.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV290 {
    get(key: Uint8Array): Promise<(v290.Proposal | undefined)>
    getAll(): Promise<v290.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v290.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v290.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v290.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v290.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v290.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV291 {
    get(key: Uint8Array): Promise<(v291.Proposal | undefined)>
    getAll(): Promise<v291.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v291.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v291.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v291.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v291.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v291.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV292 {
    get(key: Uint8Array): Promise<(v292.Proposal | undefined)>
    getAll(): Promise<v292.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v292.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v292.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v292.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v292.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v292.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV293 {
    get(key: Uint8Array): Promise<(v293.Proposal | undefined)>
    getAll(): Promise<v293.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v293.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v293.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v293.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v293.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v293.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV294 {
    get(key: Uint8Array): Promise<(v294.Proposal | undefined)>
    getAll(): Promise<v294.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v294.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v294.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v294.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v294.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v294.Proposal][]>
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
    get isV266(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV266(): SystemAccountStorageV266 {
        assert(this.isV266)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV282(): boolean {
        return this.getTypeHash() === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV282(): SystemAccountStorageV282 {
        assert(this.isV282)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV295(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV295(): SystemAccountStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV266 {
    get(key: Uint8Array): Promise<v266.AccountInfo>
    getAll(): Promise<v266.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v266.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v266.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v266.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v266.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v266.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV282 {
    get(key: Uint8Array): Promise<v282.AccountInfo>
    getAll(): Promise<v282.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v282.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v282.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v282.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v282.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v282.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV295 {
    get(key: Uint8Array): Promise<v295.AccountInfo>
    getAll(): Promise<v295.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v295.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v295.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v295.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v295.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v295.AccountInfo][]>
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
    get isV295(): boolean {
        return this.getTypeHash() === '31982e1485a26743449d2308085e222543ad7997ecede1fc01673c07e62490a1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV295(): TechnicalCommitteeProposalOfStorageV295 {
        assert(this.isV295)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV297(): boolean {
        return this.getTypeHash() === '49b87cb6cd25ca53f3a62a5a07ba336fd786eb379aa09ac2d954dd8e3f0783ba'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV297(): TechnicalCommitteeProposalOfStorageV297 {
        assert(this.isV297)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV299(): boolean {
        return this.getTypeHash() === '15d3490b228cf4f2ba7c2b25e6dc937feb2da54a4fc14a3efc2bb9d856b7a6df'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV299(): TechnicalCommitteeProposalOfStorageV299 {
        assert(this.isV299)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV300(): boolean {
        return this.getTypeHash() === '4ba31f293dee8805c32df19195d43725102cbb92f1d16b5495f0992f8ef36392'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV300(): TechnicalCommitteeProposalOfStorageV300 {
        assert(this.isV300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV301(): boolean {
        return this.getTypeHash() === 'c8c72f2b03494bb79a25b83267695b67d8413d494580be9b7396ed51256d27f0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV301(): TechnicalCommitteeProposalOfStorageV301 {
        assert(this.isV301)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30500(): boolean {
        return this.getTypeHash() === '258c071db81f43b183cfebb04dd210d44fbe9f48d6a176c03206083784b5eabf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30500(): TechnicalCommitteeProposalOfStorageV30500 {
        assert(this.isV30500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30800(): boolean {
        return this.getTypeHash() === '91a0709dca498eaf01546ea5bc3e5a6ee86fdfdfce32b3c4881b017d1d696094'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30800(): TechnicalCommitteeProposalOfStorageV30800 {
        assert(this.isV30800)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43000(): boolean {
        return this.getTypeHash() === '5a3917aff6950360269d1a1c71607f18f6fccc8e8a504e2fcc9ab21cea59b8c5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43000(): TechnicalCommitteeProposalOfStorageV43000 {
        assert(this.isV43000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV45000(): boolean {
        return this.getTypeHash() === 'b6f6010e5662145d4de6b6a703854f8252b91743ca32188e1b716d99be0dbb69'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV45000(): TechnicalCommitteeProposalOfStorageV45000 {
        assert(this.isV45000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV46000(): boolean {
        return this.getTypeHash() === '1ad5c3739712cce8d6031e099e23dae24b9cfab9c7a15bab500c97bc60a9bdc7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV46000(): TechnicalCommitteeProposalOfStorageV46000 {
        assert(this.isV46000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV47000(): boolean {
        return this.getTypeHash() === '0f519614b1d9e8e5200c5479c81ed6e7028dba599f7383964cf94ef638e8490d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV47000(): TechnicalCommitteeProposalOfStorageV47000 {
        assert(this.isV47000)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV295 {
    get(key: Uint8Array): Promise<(v295.Call | undefined)>
    getAll(): Promise<v295.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v295.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v295.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v295.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v295.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v295.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV297 {
    get(key: Uint8Array): Promise<(v297.Call | undefined)>
    getAll(): Promise<v297.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v297.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v297.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v297.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v297.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v297.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV299 {
    get(key: Uint8Array): Promise<(v299.Call | undefined)>
    getAll(): Promise<v299.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v299.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v299.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v299.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v299.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v299.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV300 {
    get(key: Uint8Array): Promise<(v300.Call | undefined)>
    getAll(): Promise<v300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV301 {
    get(key: Uint8Array): Promise<(v301.Call | undefined)>
    getAll(): Promise<v301.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v301.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v301.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v301.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v301.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v301.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV30500 {
    get(key: Uint8Array): Promise<(v30500.Call | undefined)>
    getAll(): Promise<v30500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v30500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV30800 {
    get(key: Uint8Array): Promise<(v30800.Call | undefined)>
    getAll(): Promise<v30800.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v30800.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30800.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30800.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30800.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30800.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV43000 {
    get(key: Uint8Array): Promise<(v43000.Call | undefined)>
    getAll(): Promise<v43000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV45000 {
    get(key: Uint8Array): Promise<(v45000.Call | undefined)>
    getAll(): Promise<v45000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v45000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v45000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v45000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v45000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v45000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV46000 {
    get(key: Uint8Array): Promise<(v46000.Call | undefined)>
    getAll(): Promise<v46000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v46000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v46000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v46000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v46000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v46000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV47000 {
    get(key: Uint8Array): Promise<(v47000.Call | undefined)>
    getAll(): Promise<v47000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v47000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v47000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v47000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v47000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v47000.Call][]>
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
    get isV295(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV295(): TipsReasonsStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV295 {
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
    get isV295(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV295(): TipsTipsStorageV295 {
        assert(this.isV295)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV295 {
    get(key: Uint8Array): Promise<(v295.OpenTip | undefined)>
    getAll(): Promise<v295.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v295.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v295.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v295.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v295.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v295.OpenTip][]>
}

export class TreasuryBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV266(): boolean {
        return this.getTypeHash() === 'e276510ea57efb7a40938452ef5d335bafe4cc416f094226131c0321c9bb6599'
    }

    /**
     *  Bounties that have been made.
     */
    get asV266(): TreasuryBountiesStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface TreasuryBountiesStorageV266 {
    get(key: number): Promise<(v266.Bounty | undefined)>
    getAll(): Promise<v266.Bounty[]>
    getMany(keys: number[]): Promise<(v266.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v266.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v266.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v266.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v266.Bounty][]>
}

export class TreasuryBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV266(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV266(): TreasuryBountyDescriptionsStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface TreasuryBountyDescriptionsStorageV266 {
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
    get isV266(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV266(): TreasuryProposalsStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV266 {
    get(key: number): Promise<(v266.TreasuryProposal | undefined)>
    getAll(): Promise<v266.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v266.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v266.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v266.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v266.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v266.TreasuryProposal][]>
}

export class TreasuryReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV266(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV266(): TreasuryReasonsStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TreasuryReasonsStorageV266 {
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

export class TreasuryTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV266(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV266(): TreasuryTipsStorageV266 {
        assert(this.isV266)
        return this as any
    }
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV266 {
    get(key: Uint8Array): Promise<(v266.OpenTip | undefined)>
    getAll(): Promise<v266.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v266.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v266.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v266.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v266.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v266.OpenTip][]>
}
