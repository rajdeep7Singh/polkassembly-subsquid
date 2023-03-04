import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v9290 from './v9290'
import * as v9360 from './v9360'
import * as v9370 from './v9370'

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
