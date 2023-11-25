import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v9290 from './v9290'
import * as v9320 from './v9320'
import * as v9360 from './v9360'
import * as v9370 from './v9370'
import * as v9380 from './v9380'
import * as v9400 from './v9400'
import * as v9420 from './v9420'
import * as v1000000 from './v1000000'

export class AllianceAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Alliance'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The current IPFS CIDs of any announcements.
     */
    get isV9290(): boolean {
        return this.getTypeHash() === '40a34e8e412d3ee8fa7333e333dbcf97f051083f2455836df7dfd88f6b1429c7'
    }

    /**
     *  The current IPFS CIDs of any announcements.
     */
    get asV9290(): AllianceAnnouncementsStorageV9290 {
        assert(this.isV9290)
        return this as any
    }
}

/**
 *  The current IPFS CIDs of any announcements.
 */
export interface AllianceAnnouncementsStorageV9290 {
    get(): Promise<v9290.Cid[]>
}

export class AllianceUnscrupulousAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Alliance'
    }

    protected getName() {
        return 'UnscrupulousAccounts'
    }

    /**
     *  The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
     *  candidacy.
     */
    get isV9290(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
     *  candidacy.
     */
    get asV9290(): AllianceUnscrupulousAccountsStorageV9290 {
        assert(this.isV9290)
        return this as any
    }
}

/**
 *  The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
 *  candidacy.
 */
export interface AllianceUnscrupulousAccountsStorageV9290 {
    get(): Promise<Uint8Array[]>
}

export class AllianceUnscrupulousWebsitesStorage extends StorageBase {
    protected getPrefix() {
        return 'Alliance'
    }

    protected getName() {
        return 'UnscrupulousWebsites'
    }

    /**
     *  The current list of websites deemed unscrupulous.
     */
    get isV9290(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  The current list of websites deemed unscrupulous.
     */
    get asV9290(): AllianceUnscrupulousWebsitesStorageV9290 {
        assert(this.isV9290)
        return this as any
    }
}

/**
 *  The current list of websites deemed unscrupulous.
 */
export interface AllianceUnscrupulousWebsitesStorageV9290 {
    get(): Promise<Uint8Array[]>
}

export class AllianceMotionProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'AllianceMotion'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9290(): boolean {
        return this.getTypeHash() === '15ed80c7c5191973f0027e64d2f5742ff227231a7377129e998b42001551cacf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9290(): AllianceMotionProposalOfStorageV9290 {
        assert(this.isV9290)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'dd29c4ea6dfd05963b67ff9ac8e4e6c5dc6718707bb27544b76ae93e6f00ee40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9320(): AllianceMotionProposalOfStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9360(): boolean {
        return this.getTypeHash() === 'a4338f695077f7f1bfe2165e623595e2393e957fe491a3473ea6e8ce4bf563d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9360(): AllianceMotionProposalOfStorageV9360 {
        assert(this.isV9360)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '0c1826979d2d5cac5adfa58054d9d2b109d9b3775e8b3c6d236a081a008bbff6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): AllianceMotionProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9380(): boolean {
        return this.getTypeHash() === '33f21be9a0c60bd7d3a231cb63339808073c9f494d282bcaf569ee5061ada7d0'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9380(): AllianceMotionProposalOfStorageV9380 {
        assert(this.isV9380)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9400(): boolean {
        return this.getTypeHash() === '45f2d65df1f946b8c4402808faf58112cb5b513cf0258755a7784ab2eaad61a9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9400(): AllianceMotionProposalOfStorageV9400 {
        assert(this.isV9400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'f5f86f30cbddeb9ce525a3ff8cecc0624a2f7aca3ec9afb84264851e2a7baddd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9420(): AllianceMotionProposalOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1000000(): boolean {
        return this.getTypeHash() === 'c933e60d27f5ffab8b970255b5a64ac750f7acd646375ce0141d41dd299f5f5e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1000000(): AllianceMotionProposalOfStorageV1000000 {
        assert(this.isV1000000)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV9290 {
    get(key: Uint8Array): Promise<(v9290.Call | undefined)>
    getAll(): Promise<v9290.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9290.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9290.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9290.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9290.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9290.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.Call | undefined)>
    getAll(): Promise<v9320.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV9360 {
    get(key: Uint8Array): Promise<(v9360.Call | undefined)>
    getAll(): Promise<v9360.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9360.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9360.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9360.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9360.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9360.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV9380 {
    get(key: Uint8Array): Promise<(v9380.Call | undefined)>
    getAll(): Promise<v9380.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9380.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9380.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9380.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9380.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9380.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV9400 {
    get(key: Uint8Array): Promise<(v9400.Call | undefined)>
    getAll(): Promise<v9400.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9400.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9400.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9400.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9400.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9400.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV9420 {
    get(key: Uint8Array): Promise<(v9420.Call | undefined)>
    getAll(): Promise<v9420.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9420.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface AllianceMotionProposalOfStorageV1000000 {
    get(key: Uint8Array): Promise<(v1000000.Call | undefined)>
    getAll(): Promise<v1000000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1000000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000000.Call][]>
}

export class AllianceMotionProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'AllianceMotion'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV9290(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV9290(): AllianceMotionProposalsStorageV9290 {
        assert(this.isV9290)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface AllianceMotionProposalsStorageV9290 {
    get(): Promise<Uint8Array[]>
}

export class FellowshipReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '4553026b1224f5eb81c93072d4d04e418d01cb95934d61fdecf1f0d6e38b735e'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9420(): FellowshipReferendaReferendumInfoForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV1000000(): boolean {
        return this.getTypeHash() === '13a3761970dbaf05e4bf8b4b2bc5c5f958aeea7e59129ca75511f1ebdaaad6bf'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1000000(): FellowshipReferendaReferendumInfoForStorageV1000000 {
        assert(this.isV1000000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9420 {
    get(key: number): Promise<(v9420.ReferendumInfo | undefined)>
    getAll(): Promise<v9420.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9420.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9420.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV1000000 {
    get(key: number): Promise<(v1000000.ReferendumInfo | undefined)>
    getAll(): Promise<v1000000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1000000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1000000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1000000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1000000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1000000.ReferendumInfo][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV9420(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV9420(): PreimagePreimageForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

export interface PreimagePreimageForStorageV9420 {
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
    get isV9420(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9420(): PreimageStatusForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9420 {
    get(key: Uint8Array): Promise<(v9420.RequestStatus | undefined)>
    getAll(): Promise<v9420.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9420.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.RequestStatus][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '3d730b51afb86f8afc4d1792272e9cbb7b3a01b303f937dd941e093edc0e3aed'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9420(): SchedulerAgendaStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1000000(): boolean {
        return this.getTypeHash() === '6aa81ee51127b726607ca720a6a7e3af4800a92996f01b8fae83e18be6500081'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1000000(): SchedulerAgendaStorageV1000000 {
        assert(this.isV1000000)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9420 {
    get(key: number): Promise<(v9420.Scheduled | undefined)[]>
    getAll(): Promise<(v9420.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9420.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9420.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1000000 {
    get(key: number): Promise<(v1000000.Scheduled | undefined)[]>
    getAll(): Promise<(v1000000.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v1000000.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1000000.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1000000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1000000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1000000.Scheduled | undefined)[]][]>
}
