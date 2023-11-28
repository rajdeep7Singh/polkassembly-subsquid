import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v172 from './v172'
import * as v176 from './v176'
import * as v177 from './v177'
import * as v181 from './v181'
import * as v182 from './v182'
import * as v184 from './v184'
import * as v185 from './v185'
import * as v186 from './v186'
import * as v187 from './v187'
import * as v188 from './v188'
import * as v190 from './v190'
import * as v191 from './v191'
import * as v192 from './v192'
import * as v193 from './v193'
import * as v194 from './v194'
import * as v195 from './v195'
import * as v196 from './v196'
import * as v198 from './v198'
import * as v200 from './v200'
import * as v201 from './v201'

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
    get isV172(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV172(): BalancesAccountStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV172 {
    get(key: Uint8Array): Promise<v172.AccountData>
    getAll(): Promise<v172.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v172.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v172.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v172.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v172.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v172.AccountData][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV196(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV196(): BalancesInactiveIssuanceStorageV196 {
        assert(this.isV196)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV196 {
    get(): Promise<bigint>
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
    get isV172(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV172(): BalancesTotalIssuanceStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV172 {
    get(): Promise<bigint>
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
    get isV172(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV172(): DemocracyPreimagesStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV172 {
    get(key: Uint8Array): Promise<(v172.PreimageStatus | undefined)>
    getAll(): Promise<v172.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v172.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v172.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v172.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v172.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v172.PreimageStatus][]>
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
    get isV172(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV172(): DemocracyPublicPropCountStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV172 {
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
    get isV172(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV172(): DemocracyPublicPropsStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV194(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV194(): DemocracyPublicPropsStorageV194 {
        assert(this.isV194)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV172 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV194 {
    get(): Promise<[number, v194.Bounded, Uint8Array][]>
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
    get isV172(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV172(): DemocracyReferendumInfoOfStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV194(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV194(): DemocracyReferendumInfoOfStorageV194 {
        assert(this.isV194)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV172 {
    get(key: number): Promise<(v172.ReferendumInfo | undefined)>
    getAll(): Promise<v172.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v172.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v172.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v172.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v172.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v172.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV194 {
    get(key: number): Promise<(v194.ReferendumInfo | undefined)>
    getAll(): Promise<v194.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v194.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v194.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v194.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v194.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v194.ReferendumInfo][]>
}

export class GeneralCouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'GeneralCouncil'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV172(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV172(): GeneralCouncilMembersStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface GeneralCouncilMembersStorageV172 {
    get(): Promise<Uint8Array[]>
}

export class GeneralCouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'GeneralCouncil'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV172(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV172(): GeneralCouncilProposalCountStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface GeneralCouncilProposalCountStorageV172 {
    get(): Promise<number>
}

export class GeneralCouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'GeneralCouncil'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV172(): boolean {
        return this.getTypeHash() === 'e2aa1d755aa2af83ea6c6f3e6f5906a585f5b2372f5becf6aa058188f742cba2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV172(): GeneralCouncilProposalOfStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV176(): boolean {
        return this.getTypeHash() === '18fa61738daaf4da6b0120609e2a05efa3db7d5e88cef9010162cc0d3a72ba0a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV176(): GeneralCouncilProposalOfStorageV176 {
        assert(this.isV176)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV177(): boolean {
        return this.getTypeHash() === '2208283b84da0d263dec4c8906fa6202a5fa863984c4d1bc91f8736f432d3cc5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV177(): GeneralCouncilProposalOfStorageV177 {
        assert(this.isV177)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV181(): boolean {
        return this.getTypeHash() === '0212f56b49fbab6abbaf63c6cfb099aa875525be6ddf98e2078c7d67cacb679a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV181(): GeneralCouncilProposalOfStorageV181 {
        assert(this.isV181)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV182(): boolean {
        return this.getTypeHash() === '5b56ff708935c8f61a9896a6667ed940de3c1ff83fdcb90c04bee0ee7c1c2b08'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV182(): GeneralCouncilProposalOfStorageV182 {
        assert(this.isV182)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV184(): boolean {
        return this.getTypeHash() === '9745d6da5feb443a82c170d95f624eca271c22e61ddc24b206d282c4a00ef214'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV184(): GeneralCouncilProposalOfStorageV184 {
        assert(this.isV184)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV185(): boolean {
        return this.getTypeHash() === 'c23ac41727f5f53125def1e159a8d0964e27e2e6b6d93920025564185a402d36'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV185(): GeneralCouncilProposalOfStorageV185 {
        assert(this.isV185)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV186(): boolean {
        return this.getTypeHash() === 'b3108f04ff1d1a36db6597c8d1f6690ffaad2af6f3537036764547a6b3c184e5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV186(): GeneralCouncilProposalOfStorageV186 {
        assert(this.isV186)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV187(): boolean {
        return this.getTypeHash() === 'f16c303dd0b3e919fb1da9dd5cb88cbf84060e76d1002fb3a02cc85b8fe42b53'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV187(): GeneralCouncilProposalOfStorageV187 {
        assert(this.isV187)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV188(): boolean {
        return this.getTypeHash() === '84041f76779faa4a1729c54517ae441368b12e1271461018af3bf67ce4d36565'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV188(): GeneralCouncilProposalOfStorageV188 {
        assert(this.isV188)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV190(): boolean {
        return this.getTypeHash() === '90c18a4d2ca67dca00d3afa9285cdb32e25ee172a27f157061067ff196b7415f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV190(): GeneralCouncilProposalOfStorageV190 {
        assert(this.isV190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV191(): boolean {
        return this.getTypeHash() === '8b803f9fb9d62a22dfb21d5690a4dbf36f8898dcc550b222f56cd213b6201163'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV191(): GeneralCouncilProposalOfStorageV191 {
        assert(this.isV191)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV192(): boolean {
        return this.getTypeHash() === '0dd2fea31e3c9b7ba1acd1073aeef1a6284c71c567b492232013b2ca651c7178'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV192(): GeneralCouncilProposalOfStorageV192 {
        assert(this.isV192)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV193(): boolean {
        return this.getTypeHash() === '007cd9709c445c0bd17f7444011861bd6a323d5783f8b15459b3d0710c4e9c66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV193(): GeneralCouncilProposalOfStorageV193 {
        assert(this.isV193)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV194(): boolean {
        return this.getTypeHash() === 'a6197e3a72494af4306027bd606eabf0faf472f8ecacdeaba229fe9907574e01'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV194(): GeneralCouncilProposalOfStorageV194 {
        assert(this.isV194)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV195(): boolean {
        return this.getTypeHash() === '97364bc6708a7064aec4a156eb7fe346bed49b69a59b9f8b8299efd8c4223c7f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV195(): GeneralCouncilProposalOfStorageV195 {
        assert(this.isV195)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV196(): boolean {
        return this.getTypeHash() === '0ff59b5185b616fefa9d943a28d8415d279ab2cc3237e6d5a3c472dc5ac55139'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV196(): GeneralCouncilProposalOfStorageV196 {
        assert(this.isV196)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV198(): boolean {
        return this.getTypeHash() === '83b376479493cbe810d3dea91c3095cfa2a5cec74c79887bcb112b6ed07459c8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV198(): GeneralCouncilProposalOfStorageV198 {
        assert(this.isV198)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '883adab9883d975c93624d48b3a1e0b546cb32abad8525c15149686083e2d965'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): GeneralCouncilProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV201(): boolean {
        return this.getTypeHash() === '3ae63f09656e5b09de649b653a6d370f81c81a54bf239c5ce565f28b468ef9d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV201(): GeneralCouncilProposalOfStorageV201 {
        assert(this.isV201)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV172 {
    get(key: Uint8Array): Promise<(v172.Call | undefined)>
    getAll(): Promise<v172.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v172.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV176 {
    get(key: Uint8Array): Promise<(v176.Call | undefined)>
    getAll(): Promise<v176.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v176.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v176.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v176.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v176.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v176.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV177 {
    get(key: Uint8Array): Promise<(v177.Call | undefined)>
    getAll(): Promise<v177.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v177.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v177.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v177.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v177.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v177.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV181 {
    get(key: Uint8Array): Promise<(v181.Call | undefined)>
    getAll(): Promise<v181.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v181.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v181.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v181.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v181.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v181.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV182 {
    get(key: Uint8Array): Promise<(v182.Call | undefined)>
    getAll(): Promise<v182.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v182.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v182.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v182.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v182.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v182.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV184 {
    get(key: Uint8Array): Promise<(v184.Call | undefined)>
    getAll(): Promise<v184.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v184.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v184.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v184.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v184.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v184.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV185 {
    get(key: Uint8Array): Promise<(v185.Call | undefined)>
    getAll(): Promise<v185.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v185.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v185.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v185.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v185.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v185.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV186 {
    get(key: Uint8Array): Promise<(v186.Call | undefined)>
    getAll(): Promise<v186.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v186.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v186.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v186.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v186.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v186.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV187 {
    get(key: Uint8Array): Promise<(v187.Call | undefined)>
    getAll(): Promise<v187.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v187.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v187.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v187.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v187.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v187.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV188 {
    get(key: Uint8Array): Promise<(v188.Call | undefined)>
    getAll(): Promise<v188.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v188.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v188.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v188.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v188.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v188.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV190 {
    get(key: Uint8Array): Promise<(v190.Call | undefined)>
    getAll(): Promise<v190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV191 {
    get(key: Uint8Array): Promise<(v191.Call | undefined)>
    getAll(): Promise<v191.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v191.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v191.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v191.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v191.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v191.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV192 {
    get(key: Uint8Array): Promise<(v192.Call | undefined)>
    getAll(): Promise<v192.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v192.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v192.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v192.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v192.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v192.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV193 {
    get(key: Uint8Array): Promise<(v193.Call | undefined)>
    getAll(): Promise<v193.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v193.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v193.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v193.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v193.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v193.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV194 {
    get(key: Uint8Array): Promise<(v194.Call | undefined)>
    getAll(): Promise<v194.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v194.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v194.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v194.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v194.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v194.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV195 {
    get(key: Uint8Array): Promise<(v195.Call | undefined)>
    getAll(): Promise<v195.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v195.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v195.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v195.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v195.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v195.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV196 {
    get(key: Uint8Array): Promise<(v196.Call | undefined)>
    getAll(): Promise<v196.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v196.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v196.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v196.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v196.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v196.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV198 {
    get(key: Uint8Array): Promise<(v198.Call | undefined)>
    getAll(): Promise<v198.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v198.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v198.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v198.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v198.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v198.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface GeneralCouncilProposalOfStorageV200 {
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
export interface GeneralCouncilProposalOfStorageV201 {
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

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV177(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV177(): PreimagePreimageForStorageV177 {
        assert(this.isV177)
        return this as any
    }

    get isV194(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV194(): PreimagePreimageForStorageV194 {
        assert(this.isV194)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV177 {
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

export interface PreimagePreimageForStorageV194 {
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
    get isV177(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV177(): PreimageStatusForStorageV177 {
        assert(this.isV177)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV194(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV194(): PreimageStatusForStorageV194 {
        assert(this.isV194)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV177 {
    get(key: Uint8Array): Promise<(v177.RequestStatus | undefined)>
    getAll(): Promise<v177.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v177.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v177.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v177.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v177.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v177.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV194 {
    get(key: Uint8Array): Promise<(v194.RequestStatus | undefined)>
    getAll(): Promise<v194.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v194.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v194.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v194.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v194.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v194.RequestStatus][]>
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
    get isV172(): boolean {
        return this.getTypeHash() === '31b48c9d5a1bb51460d2a63882a801ece4ef0901befc6cdeaf286879cfd4779b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV172(): SchedulerAgendaStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV176(): boolean {
        return this.getTypeHash() === 'a86aef6303aba049312125fee1b6240a2e0da8c6414125892643d039b3c10ca7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV176(): SchedulerAgendaStorageV176 {
        assert(this.isV176)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV177(): boolean {
        return this.getTypeHash() === 'e12828d001214dc8b68560d211af68d22efcece8fa9908d99db02dead6113857'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV177(): SchedulerAgendaStorageV177 {
        assert(this.isV177)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV181(): boolean {
        return this.getTypeHash() === '46c42a1c6725f1fd499d3e814cf117ae1d48e15bd189f1b745083e09b9797cba'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV181(): SchedulerAgendaStorageV181 {
        assert(this.isV181)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV182(): boolean {
        return this.getTypeHash() === '329d37dcc1571e4f2bd08d20a5b98972542e797b93c154d9dcd50fd3410ccf8a'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV182(): SchedulerAgendaStorageV182 {
        assert(this.isV182)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV184(): boolean {
        return this.getTypeHash() === 'a01d37f4fc51b951f43547db16a171675e0e0f4bfa867022dbee1fa741720273'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV184(): SchedulerAgendaStorageV184 {
        assert(this.isV184)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV185(): boolean {
        return this.getTypeHash() === '6040ebed975646946a73b4dc919b92f98d44eec6999ef627ffc7d3a299b5674e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV185(): SchedulerAgendaStorageV185 {
        assert(this.isV185)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV186(): boolean {
        return this.getTypeHash() === '5c8d527360d44201f3a30e7f0d689d7809eaefd21322c376f4191821a40450d3'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV186(): SchedulerAgendaStorageV186 {
        assert(this.isV186)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV187(): boolean {
        return this.getTypeHash() === '56b8feb1642cf5a2cbf3f12d169c5a325f9b1871e8c964d8d6ef36f0e1cd654f'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV187(): SchedulerAgendaStorageV187 {
        assert(this.isV187)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV188(): boolean {
        return this.getTypeHash() === '665f0b56ede478d8bdf9c040123a77d568f3ea5acd29de8ed8cc0fc47c780575'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV188(): SchedulerAgendaStorageV188 {
        assert(this.isV188)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV190(): boolean {
        return this.getTypeHash() === 'ef7d9ec1c4a077ae98e0818cd6daab97d2c33167618c256bf80785f30f885f6a'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV190(): SchedulerAgendaStorageV190 {
        assert(this.isV190)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV191(): boolean {
        return this.getTypeHash() === '6563e14ef0c2cff2c1d8396466dcf88d1ca15dd42ed38cdfbbfe0084ad60670d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV191(): SchedulerAgendaStorageV191 {
        assert(this.isV191)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV192(): boolean {
        return this.getTypeHash() === '18b22c7547b876282bc10d6f4a9b978cf9a75cdcdddcae4468d8be24f9548783'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV192(): SchedulerAgendaStorageV192 {
        assert(this.isV192)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV193(): boolean {
        return this.getTypeHash() === 'c07edb40dd06c96299e441c6824e9a532bfff5b8f0b20488793559c5d40c3e88'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV193(): SchedulerAgendaStorageV193 {
        assert(this.isV193)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV194(): boolean {
        return this.getTypeHash() === '2a32687d5715fa5afd3b4805580af9af62ba1ff5b8f1cc4536016194c6d62134'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV194(): SchedulerAgendaStorageV194 {
        assert(this.isV194)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV195(): boolean {
        return this.getTypeHash() === '11f914e6bac244eeaba3b73d0ce68c6d334ad2669bdaf322cd72f1319e500268'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV195(): SchedulerAgendaStorageV195 {
        assert(this.isV195)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV198(): boolean {
        return this.getTypeHash() === 'db44e0965221f4a608ff89965a6ac2af91a0cd19e43278597b2aef7a1d26ffaf'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV198(): SchedulerAgendaStorageV198 {
        assert(this.isV198)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV200(): boolean {
        return this.getTypeHash() === 'dd90f786e29c32c8086677bce0b642b883b7be6b24e5d4c92148184d5a3535f1'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV200(): SchedulerAgendaStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV172 {
    get(key: number): Promise<(v172.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v172.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v172.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v172.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v172.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v172.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v172.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV176 {
    get(key: number): Promise<(v176.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v176.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v176.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v176.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v176.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v176.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v176.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV177 {
    get(key: number): Promise<(v177.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v177.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v177.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v177.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v177.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v177.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v177.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV181 {
    get(key: number): Promise<(v181.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v181.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v181.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v181.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v181.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v181.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v181.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV182 {
    get(key: number): Promise<(v182.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v182.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v182.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v182.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v182.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v182.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v182.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV184 {
    get(key: number): Promise<(v184.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v184.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v184.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v184.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v184.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v184.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v184.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV185 {
    get(key: number): Promise<(v185.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v185.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v185.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v185.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v185.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v185.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v185.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV186 {
    get(key: number): Promise<(v186.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v186.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v186.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v186.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v186.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v186.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v186.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV187 {
    get(key: number): Promise<(v187.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v187.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v187.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v187.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v187.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v187.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v187.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV188 {
    get(key: number): Promise<(v188.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v188.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v188.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v188.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v188.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v188.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v188.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV190 {
    get(key: number): Promise<(v190.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v190.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v190.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v190.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v190.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v190.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v190.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV191 {
    get(key: number): Promise<(v191.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v191.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v191.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v191.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v191.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v191.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v191.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV192 {
    get(key: number): Promise<(v192.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v192.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v192.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v192.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v192.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v192.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v192.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV193 {
    get(key: number): Promise<(v193.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v193.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v193.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v193.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v193.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v193.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v193.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV194 {
    get(key: number): Promise<(v194.Scheduled | undefined)[]>
    getAll(): Promise<(v194.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v194.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v194.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v194.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v194.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v194.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV195 {
    get(key: number): Promise<(v195.Scheduled | undefined)[]>
    getAll(): Promise<(v195.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v195.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v195.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v195.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v195.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v195.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV198 {
    get(key: number): Promise<(v198.Scheduled | undefined)[]>
    getAll(): Promise<(v198.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v198.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v198.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v198.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v198.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v198.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV200 {
    get(key: number): Promise<(v200.Scheduled | undefined)[]>
    getAll(): Promise<(v200.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v200.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v200.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v200.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v200.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v200.Scheduled | undefined)[]][]>
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
    get isV172(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV172(): SystemAccountStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV172 {
    get(key: Uint8Array): Promise<v172.AccountInfo>
    getAll(): Promise<v172.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v172.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v172.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v172.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v172.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v172.AccountInfo][]>
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
    get isV172(): boolean {
        return this.getTypeHash() === 'e2aa1d755aa2af83ea6c6f3e6f5906a585f5b2372f5becf6aa058188f742cba2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV172(): TechnicalCommitteeProposalOfStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV176(): boolean {
        return this.getTypeHash() === '18fa61738daaf4da6b0120609e2a05efa3db7d5e88cef9010162cc0d3a72ba0a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV176(): TechnicalCommitteeProposalOfStorageV176 {
        assert(this.isV176)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV177(): boolean {
        return this.getTypeHash() === '2208283b84da0d263dec4c8906fa6202a5fa863984c4d1bc91f8736f432d3cc5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV177(): TechnicalCommitteeProposalOfStorageV177 {
        assert(this.isV177)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV181(): boolean {
        return this.getTypeHash() === '0212f56b49fbab6abbaf63c6cfb099aa875525be6ddf98e2078c7d67cacb679a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV181(): TechnicalCommitteeProposalOfStorageV181 {
        assert(this.isV181)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV182(): boolean {
        return this.getTypeHash() === '5b56ff708935c8f61a9896a6667ed940de3c1ff83fdcb90c04bee0ee7c1c2b08'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV182(): TechnicalCommitteeProposalOfStorageV182 {
        assert(this.isV182)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV184(): boolean {
        return this.getTypeHash() === '9745d6da5feb443a82c170d95f624eca271c22e61ddc24b206d282c4a00ef214'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV184(): TechnicalCommitteeProposalOfStorageV184 {
        assert(this.isV184)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV185(): boolean {
        return this.getTypeHash() === 'c23ac41727f5f53125def1e159a8d0964e27e2e6b6d93920025564185a402d36'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV185(): TechnicalCommitteeProposalOfStorageV185 {
        assert(this.isV185)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV186(): boolean {
        return this.getTypeHash() === 'b3108f04ff1d1a36db6597c8d1f6690ffaad2af6f3537036764547a6b3c184e5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV186(): TechnicalCommitteeProposalOfStorageV186 {
        assert(this.isV186)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV187(): boolean {
        return this.getTypeHash() === 'f16c303dd0b3e919fb1da9dd5cb88cbf84060e76d1002fb3a02cc85b8fe42b53'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV187(): TechnicalCommitteeProposalOfStorageV187 {
        assert(this.isV187)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV188(): boolean {
        return this.getTypeHash() === '84041f76779faa4a1729c54517ae441368b12e1271461018af3bf67ce4d36565'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV188(): TechnicalCommitteeProposalOfStorageV188 {
        assert(this.isV188)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV190(): boolean {
        return this.getTypeHash() === '90c18a4d2ca67dca00d3afa9285cdb32e25ee172a27f157061067ff196b7415f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV190(): TechnicalCommitteeProposalOfStorageV190 {
        assert(this.isV190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV191(): boolean {
        return this.getTypeHash() === '8b803f9fb9d62a22dfb21d5690a4dbf36f8898dcc550b222f56cd213b6201163'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV191(): TechnicalCommitteeProposalOfStorageV191 {
        assert(this.isV191)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV192(): boolean {
        return this.getTypeHash() === '0dd2fea31e3c9b7ba1acd1073aeef1a6284c71c567b492232013b2ca651c7178'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV192(): TechnicalCommitteeProposalOfStorageV192 {
        assert(this.isV192)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV193(): boolean {
        return this.getTypeHash() === '007cd9709c445c0bd17f7444011861bd6a323d5783f8b15459b3d0710c4e9c66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV193(): TechnicalCommitteeProposalOfStorageV193 {
        assert(this.isV193)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV194(): boolean {
        return this.getTypeHash() === 'a6197e3a72494af4306027bd606eabf0faf472f8ecacdeaba229fe9907574e01'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV194(): TechnicalCommitteeProposalOfStorageV194 {
        assert(this.isV194)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV195(): boolean {
        return this.getTypeHash() === '97364bc6708a7064aec4a156eb7fe346bed49b69a59b9f8b8299efd8c4223c7f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV195(): TechnicalCommitteeProposalOfStorageV195 {
        assert(this.isV195)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV196(): boolean {
        return this.getTypeHash() === '0ff59b5185b616fefa9d943a28d8415d279ab2cc3237e6d5a3c472dc5ac55139'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV196(): TechnicalCommitteeProposalOfStorageV196 {
        assert(this.isV196)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV198(): boolean {
        return this.getTypeHash() === '83b376479493cbe810d3dea91c3095cfa2a5cec74c79887bcb112b6ed07459c8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV198(): TechnicalCommitteeProposalOfStorageV198 {
        assert(this.isV198)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '883adab9883d975c93624d48b3a1e0b546cb32abad8525c15149686083e2d965'
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
        return this.getTypeHash() === '3ae63f09656e5b09de649b653a6d370f81c81a54bf239c5ce565f28b468ef9d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV201(): TechnicalCommitteeProposalOfStorageV201 {
        assert(this.isV201)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV172 {
    get(key: Uint8Array): Promise<(v172.Call | undefined)>
    getAll(): Promise<v172.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v172.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV176 {
    get(key: Uint8Array): Promise<(v176.Call | undefined)>
    getAll(): Promise<v176.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v176.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v176.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v176.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v176.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v176.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV177 {
    get(key: Uint8Array): Promise<(v177.Call | undefined)>
    getAll(): Promise<v177.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v177.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v177.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v177.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v177.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v177.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV181 {
    get(key: Uint8Array): Promise<(v181.Call | undefined)>
    getAll(): Promise<v181.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v181.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v181.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v181.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v181.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v181.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV182 {
    get(key: Uint8Array): Promise<(v182.Call | undefined)>
    getAll(): Promise<v182.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v182.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v182.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v182.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v182.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v182.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV184 {
    get(key: Uint8Array): Promise<(v184.Call | undefined)>
    getAll(): Promise<v184.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v184.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v184.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v184.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v184.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v184.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV185 {
    get(key: Uint8Array): Promise<(v185.Call | undefined)>
    getAll(): Promise<v185.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v185.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v185.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v185.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v185.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v185.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV186 {
    get(key: Uint8Array): Promise<(v186.Call | undefined)>
    getAll(): Promise<v186.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v186.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v186.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v186.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v186.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v186.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV187 {
    get(key: Uint8Array): Promise<(v187.Call | undefined)>
    getAll(): Promise<v187.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v187.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v187.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v187.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v187.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v187.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV188 {
    get(key: Uint8Array): Promise<(v188.Call | undefined)>
    getAll(): Promise<v188.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v188.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v188.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v188.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v188.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v188.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV190 {
    get(key: Uint8Array): Promise<(v190.Call | undefined)>
    getAll(): Promise<v190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV191 {
    get(key: Uint8Array): Promise<(v191.Call | undefined)>
    getAll(): Promise<v191.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v191.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v191.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v191.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v191.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v191.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV192 {
    get(key: Uint8Array): Promise<(v192.Call | undefined)>
    getAll(): Promise<v192.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v192.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v192.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v192.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v192.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v192.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV193 {
    get(key: Uint8Array): Promise<(v193.Call | undefined)>
    getAll(): Promise<v193.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v193.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v193.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v193.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v193.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v193.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV194 {
    get(key: Uint8Array): Promise<(v194.Call | undefined)>
    getAll(): Promise<v194.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v194.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v194.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v194.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v194.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v194.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV195 {
    get(key: Uint8Array): Promise<(v195.Call | undefined)>
    getAll(): Promise<v195.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v195.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v195.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v195.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v195.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v195.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV196 {
    get(key: Uint8Array): Promise<(v196.Call | undefined)>
    getAll(): Promise<v196.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v196.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v196.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v196.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v196.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v196.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV198 {
    get(key: Uint8Array): Promise<(v198.Call | undefined)>
    getAll(): Promise<v198.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v198.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v198.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v198.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v198.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v198.Call][]>
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
    get isV172(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV172(): TreasuryProposalsStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV172 {
    get(key: number): Promise<(v172.Proposal | undefined)>
    getAll(): Promise<v172.Proposal[]>
    getMany(keys: number[]): Promise<(v172.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v172.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v172.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v172.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v172.Proposal][]>
}
