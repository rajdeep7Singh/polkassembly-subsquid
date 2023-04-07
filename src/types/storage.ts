import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v3 from './v3'
import * as v14 from './v14'
import * as v21 from './v21'
import * as v22 from './v22'
import * as v26 from './v26'
import * as v28 from './v28'
import * as v29 from './v29'

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
    get isV3(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV3(): BalancesAccountStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV3 {
    get(key: Uint8Array): Promise<v3.AccountData>
    getAll(): Promise<v3.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v3.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.AccountData][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV3(): BalancesTotalIssuanceStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV3 {
    get(): Promise<bigint>
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
    get isV21(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV21(): CouncilMembersStorageV21 {
        assert(this.isV21)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV21 {
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
    get isV21(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV21(): CouncilProposalCountStorageV21 {
        assert(this.isV21)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV21 {
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
    get isV21(): boolean {
        return this.getTypeHash() === '6e2eab7f494a403effbe674494346902afb15a5429e85a1a8ad9485fdd6cab15'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV21(): CouncilProposalOfStorageV21 {
        assert(this.isV21)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV22(): boolean {
        return this.getTypeHash() === 'ca93b6eaa844ae2a23c2319550517acc3cb52d8fec00d166df0aac60bffdcc7a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV22(): CouncilProposalOfStorageV22 {
        assert(this.isV22)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV26(): boolean {
        return this.getTypeHash() === 'bdcb556466506f02355f5e36e7aa48119462122fc4b71d94bb629b98155b30e2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV26(): CouncilProposalOfStorageV26 {
        assert(this.isV26)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '40b96b6fd004d2722a0cdb631592816642df26a3ee39263773901fe3c5c1d636'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV28(): CouncilProposalOfStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'e97a13d9f797501c7904ca5c5c53c06684a17dac9844887af229718053c4bfdf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV29(): CouncilProposalOfStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV21 {
    get(key: Uint8Array): Promise<(v21.Call | undefined)>
    getAll(): Promise<v21.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v21.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV22 {
    get(key: Uint8Array): Promise<(v22.Call | undefined)>
    getAll(): Promise<v22.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v22.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v22.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v22.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v22.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v22.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV26 {
    get(key: Uint8Array): Promise<(v26.Call | undefined)>
    getAll(): Promise<v26.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v26.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v26.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v26.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v26.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v26.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV28 {
    get(key: Uint8Array): Promise<(v28.Call | undefined)>
    getAll(): Promise<v28.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v28.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV29 {
    get(key: Uint8Array): Promise<(v29.Call | undefined)>
    getAll(): Promise<v29.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v29.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v29.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v29.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v29.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v29.Call][]>
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
    get isV21(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV21(): DemocracyPreimagesStorageV21 {
        assert(this.isV21)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV21 {
    get(key: Uint8Array): Promise<(v21.PreimageStatus | undefined)>
    getAll(): Promise<v21.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v21.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v21.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v21.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v21.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v21.PreimageStatus][]>
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
    get isV21(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV21(): DemocracyPublicPropCountStorageV21 {
        assert(this.isV21)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV21 {
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
    get isV21(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV21(): DemocracyPublicPropsStorageV21 {
        assert(this.isV21)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV28(): DemocracyPublicPropsStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV21 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV28 {
    get(): Promise<[number, v28.Bounded, Uint8Array][]>
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
    get isV21(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV21(): DemocracyReferendumInfoOfStorageV21 {
        assert(this.isV21)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV28(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV28(): DemocracyReferendumInfoOfStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV21 {
    get(key: number): Promise<(v21.ReferendumInfo | undefined)>
    getAll(): Promise<v21.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v21.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v21.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v21.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v21.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v21.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV28 {
    get(key: number): Promise<(v28.ReferendumInfo | undefined)>
    getAll(): Promise<v28.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v28.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v28.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v28.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v28.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v28.ReferendumInfo][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV28(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV28(): PreimagePreimageForStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

export interface PreimagePreimageForStorageV28 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV28(): PreimageStatusForStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV28 {
    get(key: Uint8Array): Promise<(v28.RequestStatus | undefined)>
    getAll(): Promise<v28.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v28.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.RequestStatus][]>
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
    get isV3(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV3(): SystemAccountStorageV3 {
        assert(this.isV3)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV3 {
    get(key: Uint8Array): Promise<v3.AccountInfo>
    getAll(): Promise<v3.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v3.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v3.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v3.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v3.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v3.AccountInfo][]>
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
    get isV21(): boolean {
        return this.getTypeHash() === '6e2eab7f494a403effbe674494346902afb15a5429e85a1a8ad9485fdd6cab15'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV21(): TechnicalCommitteeProposalOfStorageV21 {
        assert(this.isV21)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV22(): boolean {
        return this.getTypeHash() === 'ca93b6eaa844ae2a23c2319550517acc3cb52d8fec00d166df0aac60bffdcc7a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV22(): TechnicalCommitteeProposalOfStorageV22 {
        assert(this.isV22)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV26(): boolean {
        return this.getTypeHash() === 'bdcb556466506f02355f5e36e7aa48119462122fc4b71d94bb629b98155b30e2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV26(): TechnicalCommitteeProposalOfStorageV26 {
        assert(this.isV26)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '40b96b6fd004d2722a0cdb631592816642df26a3ee39263773901fe3c5c1d636'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV28(): TechnicalCommitteeProposalOfStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'e97a13d9f797501c7904ca5c5c53c06684a17dac9844887af229718053c4bfdf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV29(): TechnicalCommitteeProposalOfStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV21 {
    get(key: Uint8Array): Promise<(v21.Call | undefined)>
    getAll(): Promise<v21.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v21.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v21.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV22 {
    get(key: Uint8Array): Promise<(v22.Call | undefined)>
    getAll(): Promise<v22.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v22.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v22.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v22.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v22.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v22.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV26 {
    get(key: Uint8Array): Promise<(v26.Call | undefined)>
    getAll(): Promise<v26.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v26.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v26.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v26.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v26.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v26.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV28 {
    get(key: Uint8Array): Promise<(v28.Call | undefined)>
    getAll(): Promise<v28.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v28.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV29 {
    get(key: Uint8Array): Promise<(v29.Call | undefined)>
    getAll(): Promise<v29.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v29.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v29.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v29.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v29.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v29.Call][]>
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
    get isV14(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV14(): TreasuryProposalsStorageV14 {
        assert(this.isV14)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV14 {
    get(key: number): Promise<(v14.Proposal | undefined)>
    getAll(): Promise<v14.Proposal[]>
    getMany(keys: number[]): Promise<(v14.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v14.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v14.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v14.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v14.Proposal][]>
}
