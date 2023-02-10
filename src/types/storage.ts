import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v49 from './v49'
import * as v53 from './v53'
import * as v155 from './v155'
import * as v159 from './v159'
import * as v200 from './v200'
import * as v400 from './v400'
import * as v501 from './v501'
import * as v600 from './v600'
import * as v701 from './v701'
import * as v900 from './v900'
import * as v2000 from './v2000'
import * as v2100 from './v2100'

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
    get isV49(): boolean {
        return this.getTypeHash() === '17669917f628c38832645ae9b39d0bab5a99964e3446b9b2ef904cad2f4bd653'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV49(): BalancesAccountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV49 {
    get(key: Uint8Array): Promise<v49.AccountData>
    getAll(): Promise<v49.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v49.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.AccountData][]>
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
    get isV49(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV49(): BalancesTotalIssuanceStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV49 {
    get(): Promise<bigint>
}

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV2100(): boolean {
        return this.getTypeHash() === '8c1164ab39d3c5f285bf12dfaebbe55282a793f2153b615f061f5e7f498039bd'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV2100(): ConvictionVotingVotingForStorageV2100 {
        assert(this.isV2100)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV2100 {
    get(key1: Uint8Array, key2: number): Promise<v2100.Type_468>
    getAll(): Promise<v2100.Type_468[]>
    getMany(keys: [Uint8Array, number][]): Promise<v2100.Type_468[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v2100.Type_468][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v2100.Type_468][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v2100.Type_468][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v2100.Type_468][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v2100.Type_468][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v2100.Type_468][]>
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
    get isV49(): boolean {
        return this.getTypeHash() === '4cfebf1c3ec4cbc591b367aceaef472ee18ccb1d7b4a188ca5284e65390f4835'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV49(): DemocracyPreimagesStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV900(): DemocracyPreimagesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV49 {
    get(key: Uint8Array): Promise<(v49.PreimageStatus | undefined)>
    getAll(): Promise<v49.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v49.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV900 {
    get(key: Uint8Array): Promise<(v900.PreimageStatus | undefined)>
    getAll(): Promise<v900.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v900.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
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
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV49(): DemocracyPublicPropCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV49 {
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
    get isV49(): boolean {
        return this.getTypeHash() === '50ae2b6d7ba179c0ff783cad2f9c19cbf1f250422f7e7b7cca7df80c63db8f09'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV49(): DemocracyPublicPropsStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ce1d22fdfbf2ba6bbd40606fd5bbb2dd09374a075a2781ce2f2306ae8bc75205'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV2000(): DemocracyPublicPropsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV49 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV2000 {
    get(): Promise<[number, v2000.Bounded, Uint8Array][]>
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
    get isV49(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV49(): DemocracyReferendumInfoOfStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV900(): DemocracyReferendumInfoOfStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV2000(): DemocracyReferendumInfoOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV49 {
    get(key: number): Promise<(v49.ReferendumInfo | undefined)>
    getAll(): Promise<v49.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v49.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v49.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v49.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v49.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v49.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV900 {
    get(key: number): Promise<(v900.ReferendumInfo | undefined)>
    getAll(): Promise<v900.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v900.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV2000 {
    get(key: number): Promise<(v2000.ReferendumInfo | undefined)>
    getAll(): Promise<v2000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v2000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
}

export class EthereumCurrentTransactionStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentTransactionStatuses'
    }

    /**
     *  The current transaction statuses.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '258bd41865de2f8cfa5372dc3a38af8b5110322e5098a04f50c36a5195a4c893'
    }

    /**
     *  The current transaction statuses.
     */
    get asV49(): EthereumCurrentTransactionStatusesStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The current transaction statuses.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'e42d9c1a7dbca2e4e0301367b0c021b885fe9bf9ce8eadadb8b48112a96cf49e'
    }

    /**
     *  The current transaction statuses.
     */
    get asV900(): EthereumCurrentTransactionStatusesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV49 {
    get(): Promise<(v49.EthTransactionStatus[] | undefined)>
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV900 {
    get(): Promise<(v900.TransactionStatus[] | undefined)>
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
    get isV49(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV49(): Instance1CollectiveMembersStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV49 {
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
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV49(): Instance1CollectiveProposalCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV49 {
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
    get isV49(): boolean {
        return this.getTypeHash() === '8ca82453861f38ca55a75abe2ddba8a95fc8c769166f39d8b6a7577f159816ae'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV49(): Instance1CollectiveProposalOfStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV53(): boolean {
        return this.getTypeHash() === '459a807b868907d27334e796710b62a9bf93cde9ce4991ebff0343c895735b36'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV53(): Instance1CollectiveProposalOfStorageV53 {
        assert(this.isV53)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '9651e3cff016716f006cb870ae8c3dbf96240c78b2c09797b4268040f4750a52'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV155(): Instance1CollectiveProposalOfStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV159(): boolean {
        return this.getTypeHash() === 'e40293bf8d996e7135981492cb05da389901df511b5e9d61a28f811bf5420623'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV159(): Instance1CollectiveProposalOfStorageV159 {
        assert(this.isV159)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '9890baa3b0a5fc391ea6df8c25e2360250c5fd7068c146834dff47e69d90c0d6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): Instance1CollectiveProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV400(): boolean {
        return this.getTypeHash() === '15a0e4b1bb8aa34e251f4b51240698d1d8809dcdfae76e69a989f63ff2e2f343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV400(): Instance1CollectiveProposalOfStorageV400 {
        assert(this.isV400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV501(): boolean {
        return this.getTypeHash() === '7ea473ab07ce006358199c6cc0efb0a7eb8e6761a5b9b605ad35bcd1df91119f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV501(): Instance1CollectiveProposalOfStorageV501 {
        assert(this.isV501)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === '15a0e4b1bb8aa34e251f4b51240698d1d8809dcdfae76e69a989f63ff2e2f343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): Instance1CollectiveProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV701(): boolean {
        return this.getTypeHash() === 'b867b08a01f2d55a9bec2d3367a3b089ee619970922048bd0b72a53a1aa06bf4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV701(): Instance1CollectiveProposalOfStorageV701 {
        assert(this.isV701)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV49 {
    get(key: Uint8Array): Promise<(v49.Proposal | undefined)>
    getAll(): Promise<v49.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV53 {
    get(key: Uint8Array): Promise<(v53.Proposal | undefined)>
    getAll(): Promise<v53.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v53.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v53.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v53.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v53.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v53.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV155 {
    get(key: Uint8Array): Promise<(v155.Proposal | undefined)>
    getAll(): Promise<v155.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v155.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV159 {
    get(key: Uint8Array): Promise<(v159.Proposal | undefined)>
    getAll(): Promise<v159.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v159.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV200 {
    get(key: Uint8Array): Promise<(v200.Proposal | undefined)>
    getAll(): Promise<v200.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV400 {
    get(key: Uint8Array): Promise<(v400.Proposal | undefined)>
    getAll(): Promise<v400.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v400.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV501 {
    get(key: Uint8Array): Promise<(v501.Proposal | undefined)>
    getAll(): Promise<v501.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v501.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Proposal | undefined)>
    getAll(): Promise<v600.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV701 {
    get(key: Uint8Array): Promise<(v701.Proposal | undefined)>
    getAll(): Promise<v701.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v701.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV2000(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV2000(): PreimagePreimageForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

export interface PreimagePreimageForStorageV2000 {
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
    get isV2000(): boolean {
        return this.getTypeHash() === '9a33bfa28cc58666dd8311814d92644200db23ab4156aa19d72d802536a0f95f'
    }

    /**
     *  The request status of a given hash.
     */
    get asV2000(): PreimageStatusForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.RequestStatus | undefined)>
    getAll(): Promise<v2000.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV2100(): boolean {
        return this.getTypeHash() === '27d80b8e86e69bb7510d934b39884be2471c46a1fd44c014d9e9c637062114ba'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV2100(): ReferendaReferendumInfoForStorageV2100 {
        assert(this.isV2100)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV2100 {
    get(key: number): Promise<(v2100.Type_480 | undefined)>
    getAll(): Promise<v2100.Type_480[]>
    getMany(keys: number[]): Promise<(v2100.Type_480 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2100.Type_480][]>
    getPairs(key: number): Promise<[k: number, v: v2100.Type_480][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2100.Type_480][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2100.Type_480][]>
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
    get isV49(): boolean {
        return this.getTypeHash() === 'a83a7372c51978aa017bd09db5672f3ea3957f0882455abd9726ac2b6d4b61dc'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV49(): SystemAccountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV49 {
    get(key: Uint8Array): Promise<v49.AccountInfo>
    getAll(): Promise<v49.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v49.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.AccountInfo][]>
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
    get isV49(): boolean {
        return this.getTypeHash() === '5809021f1759a617a0966e43472afb05550ea26070ada63315ba0f5aab3dcf85'
    }

    /**
     *  Proposals that have been made.
     */
    get asV49(): TreasuryProposalsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV49 {
    get(key: number): Promise<(v49.TreasuryProposal | undefined)>
    getAll(): Promise<v49.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v49.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v49.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v49.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v49.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v49.TreasuryProposal][]>
}
