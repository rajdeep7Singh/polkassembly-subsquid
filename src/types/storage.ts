import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v100 from './v100'
import * as v110 from './v110'
import * as v120 from './v120'
import * as v121 from './v121'
import * as v122 from './v122'

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
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV100(key: Uint8Array): Promise<v100.AccountData> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<(v100.AccountData)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV100(): Promise<(v100.AccountData)[]> {
    assert(this.isV100)
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
  get isV100() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV110(key: number): Promise<v110.Bounty | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV110(keys: number[]): Promise<(v110.Bounty | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(v110.Bounty)[]> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsV110(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyDescriptions', key)
  }

  async getManyAsV110(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(Uint8Array)[]> {
    assert(this.isV110)
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
   *  Child bounties that have been added.
   */
  get isV110() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBounties') === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
  }

  /**
   *  Child bounties that have been added.
   */
  async getAsV110(key1: number, key2: number): Promise<v110.ChildBounty | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildBounties', key1, key2)
  }

  async getManyAsV110(keys: [number, number][]): Promise<(v110.ChildBounty | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBounties', keys)
  }

  async getAllAsV110(): Promise<(v110.ChildBounty)[]> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each child-bounty.
   */
  async getAsV110(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions', key)
  }

  async getManyAsV110(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(Uint8Array)[]> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('ConvictionVoting', 'VotingFor') === 'f5718a9729b93e5dd0b421ab8274a5e99a7a8bced5ee0a817ed2c995cdfb78d0'
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  async getAsV110(key1: Uint8Array, key2: number): Promise<v110.Type_525> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', key1, key2)
  }

  async getManyAsV110(keys: [Uint8Array, number][]): Promise<(v110.Type_525)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', keys)
  }

  async getAllAsV110(): Promise<(v110.Type_525)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor')
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  get isV120() {
    return this._chain.getStorageItemTypeHash('ConvictionVoting', 'VotingFor') === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
  }

  /**
   *  All voting for a particular voter in a particular voting class. We store the balance for the
   *  number of votes that we have recorded.
   */
  async getAsV120(key1: Uint8Array, key2: number): Promise<v120.Type_524> {
    assert(this.isV120)
    return this._chain.getStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', key1, key2)
  }

  async getManyAsV120(keys: [Uint8Array, number][]): Promise<(v120.Type_524)[]> {
    assert(this.isV120)
    return this._chain.queryStorage(this.blockHash, 'ConvictionVoting', 'VotingFor', keys)
  }

  async getAllAsV120(): Promise<(v120.Type_524)[]> {
    assert(this.isV120)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV110(): Promise<Uint8Array[]> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV110(): Promise<number> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '78441815ac76e459affc495c64391f71e4d6c392b4aa90c535f29116897723f0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV110(key: Uint8Array): Promise<v110.Call | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV110(keys: Uint8Array[]): Promise<(v110.Call | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(v110.Call)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV120() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '731f39c0929844ed7f1b92e8cd2bc76b2b0c1ca34645f458f463f73491dd79b0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV120(key: Uint8Array): Promise<v120.Call | undefined> {
    assert(this.isV120)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV120(keys: Uint8Array[]): Promise<(v120.Call | undefined)[]> {
    assert(this.isV120)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV120(): Promise<(v120.Call)[]> {
    assert(this.isV120)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV121() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7b3c1c48d3491f764262d3c1253ca66611590f393beca5238a53c50225de2eed'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV121(key: Uint8Array): Promise<v121.Call | undefined> {
    assert(this.isV121)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV121(keys: Uint8Array[]): Promise<(v121.Call | undefined)[]> {
    assert(this.isV121)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV121(): Promise<(v121.Call)[]> {
    assert(this.isV121)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV122() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '6ab780eeeaa46eeff271bdcadb14d3ade3ac0c1ef94cbe86bf57884459113967'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV122(key: Uint8Array): Promise<v122.Call | undefined> {
    assert(this.isV122)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV122(keys: Uint8Array[]): Promise<(v122.Call | undefined)[]> {
    assert(this.isV122)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV122(): Promise<(v122.Call)[]> {
    assert(this.isV122)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV110(): Promise<number> {
    assert(this.isV110)
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
   *  The public proposals. Unsorted. The second item is the proposal.
   */
  get isV110() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal.
   */
  async getAsV110(): Promise<[number, v110.Bounded, Uint8Array][]> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV110(key: number): Promise<v110.ReferendumInfo | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV110(keys: number[]): Promise<(v110.ReferendumInfo | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(v110.ReferendumInfo)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class FellowshipReferendaReferendumInfoForStorage {
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
  get isV121() {
    return this._chain.getStorageItemTypeHash('FellowshipReferenda', 'ReferendumInfoFor') === '427ac3b5fe8caed78dc0d322d8206fcdbf35bd80153b4f1c8f18be5a087788da'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV121(key: number): Promise<v121.Type_527 | undefined> {
    assert(this.isV121)
    return this._chain.getStorage(this.blockHash, 'FellowshipReferenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV121(keys: number[]): Promise<(v121.Type_527 | undefined)[]> {
    assert(this.isV121)
    return this._chain.queryStorage(this.blockHash, 'FellowshipReferenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV121(): Promise<(v121.Type_527)[]> {
    assert(this.isV121)
    return this._chain.queryStorage(this.blockHash, 'FellowshipReferenda', 'ReferendumInfoFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FellowshipReferenda', 'ReferendumInfoFor') != null
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

  get isV110() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
  }

  async getAsV110(key: [Uint8Array, number]): Promise<Uint8Array | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV110(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(Uint8Array)[]> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV110(key: Uint8Array): Promise<v110.RequestStatus | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV110(keys: Uint8Array[]): Promise<(v110.RequestStatus | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(v110.RequestStatus)[]> {
    assert(this.isV110)
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') === '1888fbeed0ff991ba9df0d70e7ba23cdb1f0c40f8a5d0e038b2a29342260f2f3'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV110(key: number): Promise<v110.Type_508 | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV110(keys: number[]): Promise<(v110.Type_508 | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(v110.Type_508)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor')
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV120() {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') === 'ffb923d85fe7cb56aebfbf4eda7fd2f8742ac562aac14f40209876fd2166b369'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV120(key: number): Promise<v120.Type_507 | undefined> {
    assert(this.isV120)
    return this._chain.getStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV120(keys: number[]): Promise<(v120.Type_507 | undefined)[]> {
    assert(this.isV120)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV120(): Promise<(v120.Type_507)[]> {
    assert(this.isV120)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor')
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV121() {
    return this._chain.getStorageItemTypeHash('Referenda', 'ReferendumInfoFor') === '5c2b97a4144b35026ecdf3537be9c86f393d8bd15c277ae8669ae55ca09e42a1'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV121(key: number): Promise<v121.Type_504 | undefined> {
    assert(this.isV121)
    return this._chain.getStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', key)
  }

  async getManyAsV121(keys: number[]): Promise<(v121.Type_504 | undefined)[]> {
    assert(this.isV121)
    return this._chain.queryStorage(this.blockHash, 'Referenda', 'ReferendumInfoFor', keys.map(k => [k]))
  }

  async getAllAsV121(): Promise<(v121.Type_504)[]> {
    assert(this.isV121)
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
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV100(key: Uint8Array): Promise<v100.AccountInfo> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<(v100.AccountInfo)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV100(): Promise<(v100.AccountInfo)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '78441815ac76e459affc495c64391f71e4d6c392b4aa90c535f29116897723f0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV110(key: Uint8Array): Promise<v110.Call | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV110(keys: Uint8Array[]): Promise<(v110.Call | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(v110.Call)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV120() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '731f39c0929844ed7f1b92e8cd2bc76b2b0c1ca34645f458f463f73491dd79b0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV120(key: Uint8Array): Promise<v120.Call | undefined> {
    assert(this.isV120)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV120(keys: Uint8Array[]): Promise<(v120.Call | undefined)[]> {
    assert(this.isV120)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV120(): Promise<(v120.Call)[]> {
    assert(this.isV120)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV121() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7b3c1c48d3491f764262d3c1253ca66611590f393beca5238a53c50225de2eed'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV121(key: Uint8Array): Promise<v121.Call | undefined> {
    assert(this.isV121)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV121(keys: Uint8Array[]): Promise<(v121.Call | undefined)[]> {
    assert(this.isV121)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV121(): Promise<(v121.Call)[]> {
    assert(this.isV121)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV122() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '6ab780eeeaa46eeff271bdcadb14d3ade3ac0c1ef94cbe86bf57884459113967'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV122(key: Uint8Array): Promise<v122.Call | undefined> {
    assert(this.isV122)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV122(keys: Uint8Array[]): Promise<(v122.Call | undefined)[]> {
    assert(this.isV122)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV122(): Promise<(v122.Call)[]> {
    assert(this.isV122)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
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
  get isV110() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV110(key: number): Promise<v110.Proposal | undefined> {
    assert(this.isV110)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV110(keys: number[]): Promise<(v110.Proposal | undefined)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  async getAllAsV110(): Promise<(v110.Proposal)[]> {
    assert(this.isV110)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
