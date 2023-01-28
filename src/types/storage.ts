import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v40 from './v40'
import * as v47 from './v47'
import * as v52 from './v52'
import * as v155 from './v155'
import * as v159 from './v159'
import * as v200 from './v200'
import * as v300 from './v300'
import * as v400 from './v400'
import * as v501 from './v501'
import * as v600 from './v600'
import * as v701 from './v701'
import * as v800 from './v800'
import * as v900 from './v900'
import * as v1900 from './v1900'
import * as v2000 from './v2000'
import * as v2100 from './v2100'

export class BalancesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV40() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '17669917f628c38832645ae9b39d0bab5a99964e3446b9b2ef904cad2f4bd653'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV40(key: Uint8Array): Promise<v40.AccountData> {
    assert(this.isV40)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV40(keys: Uint8Array[]): Promise<(v40.AccountData)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV40(): Promise<(v40.AccountData)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total units issued in the system.
   */
  get isV40() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV40(): Promise<bigint> {
    assert(this.isV40)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class ConvictionVotingVotingForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  get isV1900() {
    return this._chain.getStorageItemTypeHash('ConvictionVoting', 'VotingFor') === '8c1164ab39d3c5f285bf12dfaebbe55282a793f2153b615f061f5e7f498039bd'
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  async getAsV1900(key1: Uint8Array, key2: number): Promise<v1900.Type_535> {
    assert(this.isV1900)
    return this._chain.getStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', key1, key2)
  }

  async getManyAsV1900(keys: [Uint8Array, number][]): Promise<(v1900.Type_535)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', keys)
  }

  async getAllAsV1900(): Promise<(v1900.Type_535)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ConvictionVoting', 'VotingFor') != null
  }
}

export class DemocracyPreimagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV40() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '4cfebf1c3ec4cbc591b367aceaef472ee18ccb1d7b4a188ca5284e65390f4835'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV40(key: Uint8Array): Promise<v40.PreimageStatus | undefined> {
    assert(this.isV40)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV40(keys: Uint8Array[]): Promise<(v40.PreimageStatus | undefined)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV40(): Promise<(v40.PreimageStatus)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV900(key: Uint8Array): Promise<v900.PreimageStatus | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV900(keys: Uint8Array[]): Promise<(v900.PreimageStatus | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV900(): Promise<(v900.PreimageStatus)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
  }
}

export class DemocracyPublicPropCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  get isV40() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV40(): Promise<number> {
    assert(this.isV40)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicPropCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') != null
  }
}

export class DemocracyPublicPropsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV40() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '50ae2b6d7ba179c0ff783cad2f9c19cbf1f250422f7e7b7cca7df80c63db8f09'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV40(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV40)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal.
   */
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === 'ce1d22fdfbf2ba6bbd40606fd5bbb2dd09374a075a2781ce2f2306ae8bc75205'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal.
   */
  async getAsV2000(): Promise<[number, v2000.Bounded, Uint8Array][]> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') != null
  }
}

export class DemocracyReferendumInfoOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV40() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV40(key: number): Promise<v40.ReferendumInfo | undefined> {
    assert(this.isV40)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV40(keys: number[]): Promise<(v40.ReferendumInfo | undefined)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV40(): Promise<(v40.ReferendumInfo)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV900(key: number): Promise<v900.ReferendumInfo | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV900(keys: number[]): Promise<(v900.ReferendumInfo | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV900(): Promise<(v900.ReferendumInfo)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV2000(key: number): Promise<v2000.ReferendumInfo | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV2000(keys: number[]): Promise<(v2000.ReferendumInfo | undefined)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV2000(): Promise<(v2000.ReferendumInfo)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class Instance1CollectiveMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV47() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV47(): Promise<Uint8Array[]> {
    assert(this.isV47)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') != null
  }
}

export class Instance1CollectiveProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV47() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV47(): Promise<number> {
    assert(this.isV47)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') != null
  }
}

export class Instance1CollectiveProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV47() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'df00f1359fed205d2f8d7002e4ed25c4b061941e9af5c1df164af552b57cbe96'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV47(key: Uint8Array): Promise<v47.Proposal | undefined> {
    assert(this.isV47)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV47(keys: Uint8Array[]): Promise<(v47.Proposal | undefined)[]> {
    assert(this.isV47)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV47(): Promise<(v47.Proposal)[]> {
    assert(this.isV47)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV52() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'b9507b1b0259974a4774ea3dc4d7803f90fabe2f8c675a6c98a5d2793216397f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV52(key: Uint8Array): Promise<v52.Proposal | undefined> {
    assert(this.isV52)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV52(keys: Uint8Array[]): Promise<(v52.Proposal | undefined)[]> {
    assert(this.isV52)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV52(): Promise<(v52.Proposal)[]> {
    assert(this.isV52)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV155() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '987d3b7c987e724c7182aaa4edfab5052e66b20d68bbe6c9371d1991779cc5e2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV155(key: Uint8Array): Promise<v155.Proposal | undefined> {
    assert(this.isV155)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV155(keys: Uint8Array[]): Promise<(v155.Proposal | undefined)[]> {
    assert(this.isV155)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV155(): Promise<(v155.Proposal)[]> {
    assert(this.isV155)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV159() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'bc6fa8abd6bc53c98e132bf440efc71dfdca80c261da9f1609d2f0b93053ca76'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV159(key: Uint8Array): Promise<v159.Proposal | undefined> {
    assert(this.isV159)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV159(keys: Uint8Array[]): Promise<(v159.Proposal | undefined)[]> {
    assert(this.isV159)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV159(): Promise<(v159.Proposal)[]> {
    assert(this.isV159)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV200() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '71a484eadcf429f3821dd2bbfecad198d59fc4b4bdb16ed6872068deff180686'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV200(key: Uint8Array): Promise<v200.Proposal | undefined> {
    assert(this.isV200)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV200(keys: Uint8Array[]): Promise<(v200.Proposal | undefined)[]> {
    assert(this.isV200)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV200(): Promise<(v200.Proposal)[]> {
    assert(this.isV200)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV300() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'bc6fa8abd6bc53c98e132bf440efc71dfdca80c261da9f1609d2f0b93053ca76'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV300(key: Uint8Array): Promise<v300.Proposal | undefined> {
    assert(this.isV300)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV300(keys: Uint8Array[]): Promise<(v300.Proposal | undefined)[]> {
    assert(this.isV300)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV300(): Promise<(v300.Proposal)[]> {
    assert(this.isV300)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV400() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '86162a837a9f55bfef8ff8ea8ade37a17584b7ce986382ec9648778a8d699f3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV400(key: Uint8Array): Promise<v400.Proposal | undefined> {
    assert(this.isV400)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV400(keys: Uint8Array[]): Promise<(v400.Proposal | undefined)[]> {
    assert(this.isV400)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV400(): Promise<(v400.Proposal)[]> {
    assert(this.isV400)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV501() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '0612a4503f438f02ce827fcd34e06685c2a1c94f6753276c6abc6418ff3c9c7e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV501(key: Uint8Array): Promise<v501.Proposal | undefined> {
    assert(this.isV501)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV501(keys: Uint8Array[]): Promise<(v501.Proposal | undefined)[]> {
    assert(this.isV501)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV501(): Promise<(v501.Proposal)[]> {
    assert(this.isV501)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV600() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '86162a837a9f55bfef8ff8ea8ade37a17584b7ce986382ec9648778a8d699f3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV600(key: Uint8Array): Promise<v600.Proposal | undefined> {
    assert(this.isV600)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV600(keys: Uint8Array[]): Promise<(v600.Proposal | undefined)[]> {
    assert(this.isV600)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV600(): Promise<(v600.Proposal)[]> {
    assert(this.isV600)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV701() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '231dba177933ddc279240214ee9e6189e166710f79990b05ff15cf2112c7ec0b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV701(key: Uint8Array): Promise<v701.Proposal | undefined> {
    assert(this.isV701)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV701(keys: Uint8Array[]): Promise<(v701.Proposal | undefined)[]> {
    assert(this.isV701)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV701(): Promise<(v701.Proposal)[]> {
    assert(this.isV701)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV800() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c52ae56c150664f69fe59775d21f44788b6b942efb8d1236f6daaef8f12c8fa5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV800(key: Uint8Array): Promise<v800.Proposal | undefined> {
    assert(this.isV800)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV800(keys: Uint8Array[]): Promise<(v800.Proposal | undefined)[]> {
    assert(this.isV800)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV800(): Promise<(v800.Proposal)[]> {
    assert(this.isV800)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') != null
  }
}

export class PreimagePreimageForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The preimages stored by this pallet.
   */
  get isV1900() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  The preimages stored by this pallet.
   */
  async getAsV1900(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1900)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV1900(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV1900(): Promise<(Uint8Array)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor')
  }

  get isV2000() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
  }

  async getAsV2000(key: [Uint8Array, number]): Promise<Uint8Array | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV2000(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV2000(): Promise<(Uint8Array)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') != null
  }
}

export class PreimageStatusForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The request status of a given hash.
   */
  get isV1900() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === 'a441b1aa6fac392c566cf52cbd4d9950e3c794632605a828429197db97e04949'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV1900(key: Uint8Array): Promise<v1900.RequestStatus | undefined> {
    assert(this.isV1900)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV1900(keys: Uint8Array[]): Promise<(v1900.RequestStatus | undefined)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV1900(): Promise<(v1900.RequestStatus)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor')
  }

  /**
   *  The request status of a given hash.
   */
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === '9a33bfa28cc58666dd8311814d92644200db23ab4156aa19d72d802536a0f95f'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV2000(key: Uint8Array): Promise<v2000.RequestStatus | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV2000(keys: Uint8Array[]): Promise<(v2000.RequestStatus | undefined)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV2000(): Promise<(v2000.RequestStatus)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') != null
  }
}

export class ReferendaReferendumInfoForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV1900() {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') === '0adda90d9f31e0c617a1e0f20edeb66fa8a049c4e0257d05a63b5b9d5e8cfa2d'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV1900(key: number): Promise<v1900.Type_547 | undefined> {
    assert(this.isV1900)
    return this._chain.getStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV1900(keys: number[]): Promise<(v1900.Type_547 | undefined)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV1900(): Promise<(v1900.Type_547)[]> {
    assert(this.isV1900)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor')
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') === 'aa29ea2df895480112bbe5e1e507c4798ac3c0752f2bb0cc4cd0fc997760c5e0'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV2000(key: number): Promise<v2000.Type_552 | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV2000(keys: number[]): Promise<(v2000.Type_552 | undefined)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV2000(): Promise<(v2000.Type_552)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor')
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV2100() {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') === 'cafd3daa38acd69064af51bb89370940feeb3b34dcfdefba590e61fc80ccb3f0'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV2100(key: number): Promise<v2100.Type_556 | undefined> {
    assert(this.isV2100)
    return this._chain.getStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV2100(keys: number[]): Promise<(v2100.Type_556 | undefined)[]> {
    assert(this.isV2100)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV2100(): Promise<(v2100.Type_556)[]> {
    assert(this.isV2100)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') != null
  }
}

export class SystemAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV40() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === 'a83a7372c51978aa017bd09db5672f3ea3957f0882455abd9726ac2b6d4b61dc'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV40(key: Uint8Array): Promise<v40.AccountInfo> {
    assert(this.isV40)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV40(keys: Uint8Array[]): Promise<(v40.AccountInfo)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV40(): Promise<(v40.AccountInfo)[]> {
    assert(this.isV40)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class TreasuryProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals that have been made.
   */
  get isV47() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '5809021f1759a617a0966e43472afb05550ea26070ada63315ba0f5aab3dcf85'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV47(key: number): Promise<v47.TreasuryProposal | undefined> {
    assert(this.isV47)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV47(keys: number[]): Promise<(v47.TreasuryProposal | undefined)[]> {
    assert(this.isV47)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  async getAllAsV47(): Promise<(v47.TreasuryProposal)[]> {
    assert(this.isV47)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
