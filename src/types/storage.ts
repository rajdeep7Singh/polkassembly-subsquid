import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v1020 from './v1020'
import * as v1022 from './v1022'
import * as v1024 from './v1024'
import * as v1027 from './v1027'
import * as v1029 from './v1029'
import * as v1030 from './v1030'
import * as v1031 from './v1031'
import * as v1032 from './v1032'
import * as v1038 from './v1038'
import * as v1039 from './v1039'
import * as v1040 from './v1040'
import * as v1042 from './v1042'
import * as v1050 from './v1050'
import * as v1054 from './v1054'
import * as v1055 from './v1055'
import * as v1058 from './v1058'
import * as v1062 from './v1062'
import * as v2005 from './v2005'
import * as v2007 from './v2007'
import * as v2011 from './v2011'
import * as v2013 from './v2013'
import * as v2015 from './v2015'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2024 from './v2024'
import * as v2025 from './v2025'
import * as v2026 from './v2026'
import * as v2028 from './v2028'
import * as v2029 from './v2029'
import * as v2030 from './v2030'
import * as v9010 from './v9010'
import * as v9030 from './v9030'
import * as v9040 from './v9040'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9111 from './v9111'
import * as v9122 from './v9122'
import * as v9130 from './v9130'
import * as v9160 from './v9160'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9220 from './v9220'
import * as v9230 from './v9230'
import * as v9250 from './v9250'
import * as v9271 from './v9271'
import * as v9291 from './v9291'
import * as v9300 from './v9300'
import * as v9320 from './v9320'
import * as v9340 from './v9340'

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
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.AccountData> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.AccountData)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.AccountData)[]> {
    assert(this.isV1050)
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class BountiesBountiesStorage {
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
   *  Bounties that have been made.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV9111(key: number): Promise<v9111.Bounty | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.Bounty | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Bounty)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
  }
}

export class BountiesBountyDescriptionsStorage {
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
   *  The description of each bounty.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsV9111(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyDescriptions', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(Uint8Array)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') != null
  }
}

export class ChildBountiesChildBountiesStorage {
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
   *  Child-bounties that have been added.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBounties') === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
  }

  /**
   *  Child-bounties that have been added.
   */
  async getAsV9190(key1: number, key2: number): Promise<v9190.ChildBounty | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildBounties', key1, key2)
  }

  async getManyAsV9190(keys: [number, number][]): Promise<(v9190.ChildBounty | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBounties', keys)
  }

  async getAllAsV9190(): Promise<(v9190.ChildBounty)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBounties') != null
  }
}

export class ChildBountiesChildBountyDescriptionsStorage {
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
   *  The description of each child-bounty.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each child-bounty.
   */
  async getAsV9190(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions', key)
  }

  async getManyAsV9190(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(Uint8Array)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBountyDescriptions') != null
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
  get isV9320() {
    return this._chain.getStorageItemTypeHash('ConvictionVoting', 'VotingFor') === 'f5718a9729b93e5dd0b421ab8274a5e99a7a8bced5ee0a817ed2c995cdfb78d0'
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  async getAsV9320(key1: Uint8Array, key2: number): Promise<v9320.Type_608> {
    assert(this.isV9320)
    return this._chain.getStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', key1, key2)
  }

  async getManyAsV9320(keys: [Uint8Array, number][]): Promise<(v9320.Type_608)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', keys)
  }

  async getAllAsV9320(): Promise<(v9320.Type_608)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor')
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  get isV9340() {
    return this._chain.getStorageItemTypeHash('ConvictionVoting', 'VotingFor') === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  async getAsV9340(key1: Uint8Array, key2: number): Promise<v9340.Type_608> {
    assert(this.isV9340)
    return this._chain.getStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', key1, key2)
  }

  async getManyAsV9340(keys: [Uint8Array, number][]): Promise<(v9340.Type_608)[]> {
    assert(this.isV9340)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', keys)
  }

  async getAllAsV9340(): Promise<(v9340.Type_608)[]> {
    assert(this.isV9340)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ConvictionVoting', 'VotingFor') != null
  }
}

export class CouncilMembersStorage {
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV9111(): Promise<Uint8Array[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Members') != null
  }
}

export class CouncilProposalCountStorage {
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV9111(): Promise<number> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') != null
  }
}

export class CouncilProposalOfStorage {
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Call | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Call)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9122() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9122(key: Uint8Array): Promise<v9122.Call | undefined> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9122(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9122(): Promise<(v9122.Call)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9130(key: Uint8Array): Promise<v9130.Call | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9130(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9130(): Promise<(v9130.Call)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9160(key: Uint8Array): Promise<v9160.Call | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.Call)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: Uint8Array): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9170(): Promise<(v9170.Call)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: Uint8Array): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<(v9180.Call)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: Uint8Array): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(v9190.Call)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: Uint8Array): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.Call)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9230(key: Uint8Array): Promise<v9230.Call | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9230(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(v9230.Call)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9250() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9250(key: Uint8Array): Promise<v9250.Call | undefined> {
    assert(this.isV9250)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9250(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9250(): Promise<(v9250.Call)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9271(key: Uint8Array): Promise<v9271.Call | undefined> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9271(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9271(): Promise<(v9271.Call)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9291() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '15ce1541499aecffbe2bf8eeafc64023633a5d282a468972bd6c44aa77b52ce3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9291(key: Uint8Array): Promise<v9291.Call | undefined> {
    assert(this.isV9291)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9291(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]> {
    assert(this.isV9291)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9291(): Promise<(v9291.Call)[]> {
    assert(this.isV9291)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9300() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '4489558a261f014c524a3fa533244e852a4234f4db9aba95f960d069aa1a2db7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9300(key: Uint8Array): Promise<v9300.Call | undefined> {
    assert(this.isV9300)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9300(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]> {
    assert(this.isV9300)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9300(): Promise<(v9300.Call)[]> {
    assert(this.isV9300)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9320() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'e264f3acf17bae2089248c1b5be4b79c3766ff552e8565a925e0bceaa16c973b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9320(key: Uint8Array): Promise<v9320.Call | undefined> {
    assert(this.isV9320)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9320(keys: Uint8Array[]): Promise<(v9320.Call | undefined)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9320(): Promise<(v9320.Call)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9340() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'bac834a064b49e90d7838a7a187b8909126f18547277b5d8053bc5274c87c1c7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9340(key: Uint8Array): Promise<v9340.Call | undefined> {
    assert(this.isV9340)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9340(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]> {
    assert(this.isV9340)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9340(): Promise<(v9340.Call)[]> {
    assert(this.isV9340)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
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
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '8d49bec84532cce5991ad4c420ddf4ab792644a27de5f8450488e36a6c1c40ef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1022(key: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint, number] | undefined> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1022(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint, number] | undefined)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV1022(): Promise<([Uint8Array, Uint8Array, bigint, number])[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.PreimageStatus | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<(v1058.PreimageStatus | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.PreimageStatus)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.PreimageStatus | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.PreimageStatus | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.PreimageStatus)[]> {
    assert(this.isV9111)
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
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
   *  The public proposals. Unsorted.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '73cb1a7c4424f713001c8416e3f33d8a4cff058377ae880f2cae103ae0ffec18'
  }

  /**
   *  The public proposals. Unsorted.
   */
  async getAsV1020(): Promise<[number, v1020.Proposal, Uint8Array][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV1022(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal.
   */
  get isV9320() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal.
   */
  async getAsV9320(): Promise<[number, v9320.Bounded, Uint8Array][]> {
    assert(this.isV9320)
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
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === 'b841a2a79796892945d8a9256375f0a9e422926b95cb3e85c8edae023ec07300'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV1020(key: number): Promise<v1020.Type_283 | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(v1020.Type_283 | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Type_283)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV1055(key: number): Promise<v1055.ReferendumInfo | undefined> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1055(keys: number[]): Promise<(v1055.ReferendumInfo | undefined)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV1055(): Promise<(v1055.ReferendumInfo)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV9111(key: number): Promise<v9111.ReferendumInfo | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.ReferendumInfo | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.ReferendumInfo)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV9320() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV9320(key: number): Promise<v9320.ReferendumInfo | undefined> {
    assert(this.isV9320)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV9320(keys: number[]): Promise<(v9320.ReferendumInfo | undefined)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV9320(): Promise<(v9320.ReferendumInfo)[]> {
    assert(this.isV9320)
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '988b54a69200501d1caa21231c09e8d115ce376b26e5cfe53b9efe6d1aa2353f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Proposal | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Proposal)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'dd07ea6860eb31afbcf979619a9f751f46be77411e9c22ab6d968f1cbb826975'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: Uint8Array): Promise<v1022.Proposal | undefined> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1022(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1022(): Promise<(v1022.Proposal)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'd1057f90e4da1f4375c8e1942f93abac694f8f1e3eb41ae19b49794a3cd7754c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: Uint8Array): Promise<v1024.Proposal | undefined> {
    assert(this.isV1024)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1024(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1024(): Promise<(v1024.Proposal)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '952306cf3b40b722e8a89f97348456e7288504655b1fef8f8848728064e020d6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: Uint8Array): Promise<v1027.Proposal | undefined> {
    assert(this.isV1027)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1027(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1027(): Promise<(v1027.Proposal)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c684ff44da66806df8f7b0311e8b461bcd53a6438c7321d8065c89376d754173'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: Uint8Array): Promise<v1029.Proposal | undefined> {
    assert(this.isV1029)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1029(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1029(): Promise<(v1029.Proposal)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a5dece5dab1ee986977b4658ed7c0dcc0ead6936604d3359ae5d56497127c435'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: Uint8Array): Promise<v1030.Proposal | undefined> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1030(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1030(): Promise<(v1030.Proposal)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '491d769f67c8b91e6c1892535c8a0d6726eac1c321ce672b23b722cea1b1ab46'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: Uint8Array): Promise<v1031.Proposal | undefined> {
    assert(this.isV1031)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1031(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1031(): Promise<(v1031.Proposal)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '3cec838f63976aa29bba710d21944d10bd6aaf418ca780e11fe2c2d0e628d629'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: Uint8Array): Promise<v1032.Proposal | undefined> {
    assert(this.isV1032)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1032(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1032(): Promise<(v1032.Proposal)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '6f242fd68c6cf6b13795cb7c87e22bc4d5cb344260c9c4976f712b389f1a72e5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.Proposal | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(v1038.Proposal)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '46ed4057a9e44696c823f53a2afcf45ec0e1319fff4b984ff2a78dac066632b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: Uint8Array): Promise<v1039.Proposal | undefined> {
    assert(this.isV1039)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1039(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1039(): Promise<(v1039.Proposal)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '09964938a6344ce4017f443d37b809998da5205b97ba32089dc34e25517d8727'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.Proposal | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(v1040.Proposal)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c5be77395b90894b0b9d89a8bfd40c3969fd90f48d12a513d31f62f19ba198b2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: Uint8Array): Promise<v1042.Proposal | undefined> {
    assert(this.isV1042)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1042(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1042(): Promise<(v1042.Proposal)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '75a26ba5a11378b5ec0d7e80a5150e53f1723bf825534c48ac8df88d46f8ad11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Proposal | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.Proposal)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ecb491dab152e949512780951867e171f6a72abd7ec8510103dcec7c8482218c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: Uint8Array): Promise<v1054.Proposal | undefined> {
    assert(this.isV1054)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1054(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1054(): Promise<(v1054.Proposal)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f76941917fe1c97effc3b54c45775b17c3dd7b8644e859888214965a3d2c1915'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: Uint8Array): Promise<v1055.Proposal | undefined> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1055(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1055(): Promise<(v1055.Proposal)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a40aebf7430950292287f9ba1ac41514aec633d7ce9c595b51922b2d00f766c4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.Proposal | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.Proposal)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f1964574c2acdf7657cebbec13992465e146c9c1d70a9ebfe5cb2c849e33a8fb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: Uint8Array): Promise<v1062.Proposal | undefined> {
    assert(this.isV1062)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1062(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1062(): Promise<(v1062.Proposal)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '59d62f9580ec29b948bb61b54782d0eb894f759082f4cd66b3d721cd51fc6eab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: Uint8Array): Promise<v2005.Proposal | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2005(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<(v2005.Proposal)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '9b8403a58da018e039e7d02e03c58751e5f3966f734c0a805247c8f819ebe6e6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: Uint8Array): Promise<v2007.Proposal | undefined> {
    assert(this.isV2007)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2007(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2007(): Promise<(v2007.Proposal)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '72ae96a40c2e115fd196fda8aba62965500743102911195e5db6bffe5c730a89'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: Uint8Array): Promise<v2011.Proposal | undefined> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2011(): Promise<(v2011.Proposal)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '646a7b14d2d0c7e0302ab7e697eb7a22ce351bc30f8ed014a36febdee8fd066c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.Proposal | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<(v2013.Proposal)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '49cb7fd61e09b6e09885d9254e3179527de1bb56a3bac4e41806540efa177504'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: Uint8Array): Promise<v2015.Proposal | undefined> {
    assert(this.isV2015)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2015(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2015(): Promise<(v2015.Proposal)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e940a02bab509e8f3c662c3743d99681461dc41eb7807d9f724137541d6d6888'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: Uint8Array): Promise<v2022.Proposal | undefined> {
    assert(this.isV2022)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2022(): Promise<(v2022.Proposal)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '28ae6082aa3659f3eb665b763906f5f43dfc25a261e76bc3bfaae2bf35809886'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: Uint8Array): Promise<v2023.Proposal | undefined> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2023(): Promise<(v2023.Proposal)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2024() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '30c3471266df7fa23a52dd4c3eee936e8a38a242733b19606a6d8434b8818044'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2024(key: Uint8Array): Promise<v2024.Proposal | undefined> {
    assert(this.isV2024)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2024(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2024(): Promise<(v2024.Proposal)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c6aa8f92b929d74aa84d6bc73ac4de7208eb9ea79b0633b7ece10545e71bc6bc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2025(key: Uint8Array): Promise<v2025.Proposal | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2025(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.Proposal)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2026() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8273b8a7016b06dcb65adf9f34a09480690bdb5cd14cc410c9b0899a03dd8f22'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2026(key: Uint8Array): Promise<v2026.Proposal | undefined> {
    assert(this.isV2026)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2026(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2026(): Promise<(v2026.Proposal)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '90dd79f7117af09c072af285850479432c5a99791d1cb8011e2307aefaf37418'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.Proposal | undefined> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.Proposal)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '9a9b6f49439518cb37672ca52b7e5cdb2843109031f61e24e5cf371f32c697a7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2029(key: Uint8Array): Promise<v2029.Proposal | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2029(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2029(): Promise<(v2029.Proposal)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '25b92df233c91ed77e0904a09051cb0985d8c95cc1fce890170e11c95ab35140'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2030(key: Uint8Array): Promise<v2030.Proposal | undefined> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2030(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2030(): Promise<(v2030.Proposal)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5bf6f4d6a582b79d1aee1559e4425bb7d7571ed6552fd0809e0e4b0dbbf14be1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9010(key: Uint8Array): Promise<v9010.Proposal | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9010(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.Proposal)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9030() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '267a1fbacfcf39c6f41faa7e15dafc885f811d4264d1b98fd4dedb06864a2336'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9030(key: Uint8Array): Promise<v9030.Proposal | undefined> {
    assert(this.isV9030)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9030(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9030(): Promise<(v9030.Proposal)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5972aac9112d1be3d00a2d2b08c3514aa87c25a026ecea82cc1e4313f6ab53fd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9040(key: Uint8Array): Promise<v9040.Proposal | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9040(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9040(): Promise<(v9040.Proposal)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '13cccf90ea77264605ec33f6f3b06b5c5099212f507d16348a4307e25e0037c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: Uint8Array): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9050(): Promise<(v9050.Proposal)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a06f31f28526e77b614a3b1ddf8bbed59ba55c22b665429e9747768d6a8dabcb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: Uint8Array): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9080(): Promise<(v9080.Proposal)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '56cdb3f333767ac0c8f3522af138085a5e74d4faaeea50fddc95031771c85058'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: Uint8Array): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9090(): Promise<(v9090.Proposal)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'eaae83c0de21b5d6a3d1072074b4bb2172d61801a9d623da700c1b0b85c82321'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: Uint8Array): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9100(): Promise<(v9100.Proposal)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') != null
  }
}

export class Instance2CollectiveProposalOfStorage {
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '988b54a69200501d1caa21231c09e8d115ce376b26e5cfe53b9efe6d1aa2353f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Proposal | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Proposal)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'dd07ea6860eb31afbcf979619a9f751f46be77411e9c22ab6d968f1cbb826975'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: Uint8Array): Promise<v1022.Proposal | undefined> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1022(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1022(): Promise<(v1022.Proposal)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'd1057f90e4da1f4375c8e1942f93abac694f8f1e3eb41ae19b49794a3cd7754c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: Uint8Array): Promise<v1024.Proposal | undefined> {
    assert(this.isV1024)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1024(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1024(): Promise<(v1024.Proposal)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '952306cf3b40b722e8a89f97348456e7288504655b1fef8f8848728064e020d6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: Uint8Array): Promise<v1027.Proposal | undefined> {
    assert(this.isV1027)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1027(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1027(): Promise<(v1027.Proposal)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c684ff44da66806df8f7b0311e8b461bcd53a6438c7321d8065c89376d754173'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: Uint8Array): Promise<v1029.Proposal | undefined> {
    assert(this.isV1029)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1029(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1029(): Promise<(v1029.Proposal)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a5dece5dab1ee986977b4658ed7c0dcc0ead6936604d3359ae5d56497127c435'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: Uint8Array): Promise<v1030.Proposal | undefined> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1030(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1030(): Promise<(v1030.Proposal)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '491d769f67c8b91e6c1892535c8a0d6726eac1c321ce672b23b722cea1b1ab46'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: Uint8Array): Promise<v1031.Proposal | undefined> {
    assert(this.isV1031)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1031(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1031(): Promise<(v1031.Proposal)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '3cec838f63976aa29bba710d21944d10bd6aaf418ca780e11fe2c2d0e628d629'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: Uint8Array): Promise<v1032.Proposal | undefined> {
    assert(this.isV1032)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1032(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1032(): Promise<(v1032.Proposal)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '6f242fd68c6cf6b13795cb7c87e22bc4d5cb344260c9c4976f712b389f1a72e5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.Proposal | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(v1038.Proposal)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '46ed4057a9e44696c823f53a2afcf45ec0e1319fff4b984ff2a78dac066632b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: Uint8Array): Promise<v1039.Proposal | undefined> {
    assert(this.isV1039)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1039(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1039(): Promise<(v1039.Proposal)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '09964938a6344ce4017f443d37b809998da5205b97ba32089dc34e25517d8727'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.Proposal | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(v1040.Proposal)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c5be77395b90894b0b9d89a8bfd40c3969fd90f48d12a513d31f62f19ba198b2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: Uint8Array): Promise<v1042.Proposal | undefined> {
    assert(this.isV1042)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1042(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1042(): Promise<(v1042.Proposal)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '75a26ba5a11378b5ec0d7e80a5150e53f1723bf825534c48ac8df88d46f8ad11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Proposal | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.Proposal)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ecb491dab152e949512780951867e171f6a72abd7ec8510103dcec7c8482218c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: Uint8Array): Promise<v1054.Proposal | undefined> {
    assert(this.isV1054)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1054(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1054(): Promise<(v1054.Proposal)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f76941917fe1c97effc3b54c45775b17c3dd7b8644e859888214965a3d2c1915'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: Uint8Array): Promise<v1055.Proposal | undefined> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1055(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1055(): Promise<(v1055.Proposal)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a40aebf7430950292287f9ba1ac41514aec633d7ce9c595b51922b2d00f766c4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.Proposal | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.Proposal)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f1964574c2acdf7657cebbec13992465e146c9c1d70a9ebfe5cb2c849e33a8fb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: Uint8Array): Promise<v1062.Proposal | undefined> {
    assert(this.isV1062)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1062(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1062(): Promise<(v1062.Proposal)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '59d62f9580ec29b948bb61b54782d0eb894f759082f4cd66b3d721cd51fc6eab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: Uint8Array): Promise<v2005.Proposal | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2005(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<(v2005.Proposal)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '9b8403a58da018e039e7d02e03c58751e5f3966f734c0a805247c8f819ebe6e6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: Uint8Array): Promise<v2007.Proposal | undefined> {
    assert(this.isV2007)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2007(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2007(): Promise<(v2007.Proposal)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '72ae96a40c2e115fd196fda8aba62965500743102911195e5db6bffe5c730a89'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: Uint8Array): Promise<v2011.Proposal | undefined> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2011(): Promise<(v2011.Proposal)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '646a7b14d2d0c7e0302ab7e697eb7a22ce351bc30f8ed014a36febdee8fd066c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.Proposal | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<(v2013.Proposal)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '49cb7fd61e09b6e09885d9254e3179527de1bb56a3bac4e41806540efa177504'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: Uint8Array): Promise<v2015.Proposal | undefined> {
    assert(this.isV2015)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2015(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2015(): Promise<(v2015.Proposal)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e940a02bab509e8f3c662c3743d99681461dc41eb7807d9f724137541d6d6888'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: Uint8Array): Promise<v2022.Proposal | undefined> {
    assert(this.isV2022)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2022(): Promise<(v2022.Proposal)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '28ae6082aa3659f3eb665b763906f5f43dfc25a261e76bc3bfaae2bf35809886'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: Uint8Array): Promise<v2023.Proposal | undefined> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2023(): Promise<(v2023.Proposal)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2024() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '30c3471266df7fa23a52dd4c3eee936e8a38a242733b19606a6d8434b8818044'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2024(key: Uint8Array): Promise<v2024.Proposal | undefined> {
    assert(this.isV2024)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2024(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2024(): Promise<(v2024.Proposal)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c6aa8f92b929d74aa84d6bc73ac4de7208eb9ea79b0633b7ece10545e71bc6bc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2025(key: Uint8Array): Promise<v2025.Proposal | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2025(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.Proposal)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2026() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8273b8a7016b06dcb65adf9f34a09480690bdb5cd14cc410c9b0899a03dd8f22'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2026(key: Uint8Array): Promise<v2026.Proposal | undefined> {
    assert(this.isV2026)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2026(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2026(): Promise<(v2026.Proposal)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '90dd79f7117af09c072af285850479432c5a99791d1cb8011e2307aefaf37418'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.Proposal | undefined> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.Proposal)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '9a9b6f49439518cb37672ca52b7e5cdb2843109031f61e24e5cf371f32c697a7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2029(key: Uint8Array): Promise<v2029.Proposal | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2029(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2029(): Promise<(v2029.Proposal)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '25b92df233c91ed77e0904a09051cb0985d8c95cc1fce890170e11c95ab35140'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2030(key: Uint8Array): Promise<v2030.Proposal | undefined> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2030(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2030(): Promise<(v2030.Proposal)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5bf6f4d6a582b79d1aee1559e4425bb7d7571ed6552fd0809e0e4b0dbbf14be1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9010(key: Uint8Array): Promise<v9010.Proposal | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9010(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.Proposal)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9030() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '267a1fbacfcf39c6f41faa7e15dafc885f811d4264d1b98fd4dedb06864a2336'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9030(key: Uint8Array): Promise<v9030.Proposal | undefined> {
    assert(this.isV9030)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9030(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9030(): Promise<(v9030.Proposal)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5972aac9112d1be3d00a2d2b08c3514aa87c25a026ecea82cc1e4313f6ab53fd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9040(key: Uint8Array): Promise<v9040.Proposal | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9040(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9040(): Promise<(v9040.Proposal)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '13cccf90ea77264605ec33f6f3b06b5c5099212f507d16348a4307e25e0037c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: Uint8Array): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9050(): Promise<(v9050.Proposal)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a06f31f28526e77b614a3b1ddf8bbed59ba55c22b665429e9747768d6a8dabcb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: Uint8Array): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9080(): Promise<(v9080.Proposal)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '56cdb3f333767ac0c8f3522af138085a5e74d4faaeea50fddc95031771c85058'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: Uint8Array): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9090(): Promise<(v9090.Proposal)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'eaae83c0de21b5d6a3d1072074b4bb2172d61801a9d623da700c1b0b85c82321'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: Uint8Array): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9100(): Promise<(v9100.Proposal)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
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
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  The preimages stored by this pallet.
   */
  async getAsV9160(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(Uint8Array)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor')
  }

  get isV9320() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
  }

  async getAsV9320(key: [Uint8Array, number]): Promise<Uint8Array | undefined> {
    assert(this.isV9320)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV9320(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV9320(): Promise<(Uint8Array)[]> {
    assert(this.isV9320)
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
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV9160(key: Uint8Array): Promise<v9160.RequestStatus | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(v9160.RequestStatus | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.RequestStatus)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor')
  }

  /**
   *  The request status of a given hash.
   */
  get isV9320() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV9320(key: Uint8Array): Promise<v9320.RequestStatus | undefined> {
    assert(this.isV9320)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV9320(keys: Uint8Array[]): Promise<(v9320.RequestStatus | undefined)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV9320(): Promise<(v9320.RequestStatus)[]> {
    assert(this.isV9320)
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
  get isV9320() {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') === '33899ab47ab8fe6857d9da2d98b7b7168468bb2627a189bdae062d9c5ad90e3a'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV9320(key: number): Promise<v9320.Type_620 | undefined> {
    assert(this.isV9320)
    return this._chain.getStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV9320(keys: number[]): Promise<(v9320.Type_620 | undefined)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV9320(): Promise<(v9320.Type_620)[]> {
    assert(this.isV9320)
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
  get isV1050() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.AccountInfo> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.AccountInfo)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.AccountInfo)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2025(key: Uint8Array): Promise<v2025.AccountInfo> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2025(keys: Uint8Array[]): Promise<(v2025.AccountInfo)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.AccountInfo)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.AccountInfo> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.AccountInfo)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.AccountInfo)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2030(key: Uint8Array): Promise<v2030.AccountInfo> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2030(keys: Uint8Array[]): Promise<(v2030.AccountInfo)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV2030(): Promise<(v2030.AccountInfo)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class SystemAccountNonceStorage {
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
   *  Extrinsics nonce for accounts.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'AccountNonce') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  Extrinsics nonce for accounts.
   */
  async getAsV1020(key: Uint8Array): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'AccountNonce', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'AccountNonce', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'AccountNonce')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AccountNonce') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Call | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Call)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9122() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9122(key: Uint8Array): Promise<v9122.Call | undefined> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9122(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9122(): Promise<(v9122.Call)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9130(key: Uint8Array): Promise<v9130.Call | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9130(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9130(): Promise<(v9130.Call)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9160(key: Uint8Array): Promise<v9160.Call | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.Call)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: Uint8Array): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9170(): Promise<(v9170.Call)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: Uint8Array): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<(v9180.Call)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: Uint8Array): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(v9190.Call)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: Uint8Array): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.Call)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9230(key: Uint8Array): Promise<v9230.Call | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9230(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(v9230.Call)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9250() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9250(key: Uint8Array): Promise<v9250.Call | undefined> {
    assert(this.isV9250)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9250(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9250(): Promise<(v9250.Call)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9271(key: Uint8Array): Promise<v9271.Call | undefined> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9271(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9271(): Promise<(v9271.Call)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9291() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '15ce1541499aecffbe2bf8eeafc64023633a5d282a468972bd6c44aa77b52ce3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9291(key: Uint8Array): Promise<v9291.Call | undefined> {
    assert(this.isV9291)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9291(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]> {
    assert(this.isV9291)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9291(): Promise<(v9291.Call)[]> {
    assert(this.isV9291)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9300() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '4489558a261f014c524a3fa533244e852a4234f4db9aba95f960d069aa1a2db7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9300(key: Uint8Array): Promise<v9300.Call | undefined> {
    assert(this.isV9300)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9300(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]> {
    assert(this.isV9300)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9300(): Promise<(v9300.Call)[]> {
    assert(this.isV9300)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9320() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'e264f3acf17bae2089248c1b5be4b79c3766ff552e8565a925e0bceaa16c973b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9320(key: Uint8Array): Promise<v9320.Call | undefined> {
    assert(this.isV9320)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9320(keys: Uint8Array[]): Promise<(v9320.Call | undefined)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9320(): Promise<(v9320.Call)[]> {
    assert(this.isV9320)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9340() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'bac834a064b49e90d7838a7a187b8909126f18547277b5d8053bc5274c87c1c7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9340(key: Uint8Array): Promise<v9340.Call | undefined> {
    assert(this.isV9340)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9340(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]> {
    assert(this.isV9340)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9340(): Promise<(v9340.Call)[]> {
    assert(this.isV9340)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
  }
}

export class TipsReasonsStorage {
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
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Tips', 'Reasons') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  async getAsV9111(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Reasons', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Reasons', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(Uint8Array)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Reasons')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Reasons') != null
  }
}

export class TipsTipsStorage {
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
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.OpenTip | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.OpenTip | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.OpenTip)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TreasuryBountiesStorage {
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
   *  Bounties that have been made.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV2025(key: number): Promise<v2025.Bounty | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Bounties', key)
  }

  async getManyAsV2025(keys: number[]): Promise<(v2025.Bounty | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.Bounty)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Bounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') != null
  }
}

export class TreasuryBountyDescriptionsStorage {
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
   *  The description of each bounty.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsV2025(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'BountyDescriptions', key)
  }

  async getManyAsV2025(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(Uint8Array)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'BountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyDescriptions') != null
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV1020(key: number): Promise<v1020.TreasuryProposal | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(v1020.TreasuryProposal | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.TreasuryProposal)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}

export class TreasuryReasonsStorage {
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
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Reasons') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  async getAsV1038(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Reasons', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Reasons', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(Uint8Array)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Reasons')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Reasons') != null
  }
}

export class TreasuryTipsStorage {
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
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.OpenTip | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(v1038.OpenTip | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(v1038.OpenTip)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips')
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.OpenTip | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV2013(keys: Uint8Array[]): Promise<(v2013.OpenTip | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<(v2013.OpenTip)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
