import type {Result, Option} from './support'

export type Call = Call_System | Call_Babe | Call_Timestamp | Call_Indices | Call_Balances | Call_Beefy | Call_Session | Call_Grandpa | Call_ImOnline | Call_Democracy | Call_Council | Call_TechnicalCommittee | Call_PhragmenElection | Call_TechnicalMembership | Call_Treasury | Call_Claims | Call_Utility | Call_Identity | Call_Society | Call_Recovery | Call_Vesting | Call_Scheduler | Call_Proxy | Call_Multisig | Call_Preimage | Call_Bounties | Call_ChildBounties | Call_Tips | Call_Nis | Call_NisCounterpartBalances | Call_Configuration | Call_ParasShared | Call_ParaInclusion | Call_ParaInherent | Call_Paras | Call_Initializer | Call_Hrmp | Call_ParasDisputes | Call_ParasSlashing | Call_MessageQueue | Call_OnDemandAssignmentProvider | Call_Registrar | Call_Slots | Call_Auctions | Call_Crowdloan | Call_XcmPallet | Call_ParasSudoWrapper | Call_AssignedSlots | Call_ValidatorManager | Call_StateTrieMigration | Call_Sudo

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Beefy {
    __kind: 'Beefy'
    value: BeefyCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_PhragmenElection {
    __kind: 'PhragmenElection'
    value: PhragmenElectionCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Call_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesCall
}

export interface Call_Tips {
    __kind: 'Tips'
    value: TipsCall
}

export interface Call_Nis {
    __kind: 'Nis'
    value: NisCall
}

export interface Call_NisCounterpartBalances {
    __kind: 'NisCounterpartBalances'
    value: NisCounterpartBalancesCall
}

export interface Call_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Call_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Call_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Call_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Call_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Call_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Call_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Call_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesCall
}

export interface Call_ParasSlashing {
    __kind: 'ParasSlashing'
    value: ParasSlashingCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_OnDemandAssignmentProvider {
    __kind: 'OnDemandAssignmentProvider'
    value: OnDemandAssignmentProviderCall
}

export interface Call_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Call_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Call_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Call_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

export interface Call_ParasSudoWrapper {
    __kind: 'ParasSudoWrapper'
    value: ParasSudoWrapperCall
}

export interface Call_AssignedSlots {
    __kind: 'AssignedSlots'
    value: AssignedSlotsCall
}

export interface Call_ValidatorManager {
    __kind: 'ValidatorManager'
    value: ValidatorManagerCall
}

export interface Call_StateTrieMigration {
    __kind: 'StateTrieMigration'
    value: StateTrieMigrationCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned | BabeCall_plan_config_change

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::plan_config_change`].
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

/**
 * See [`Pallet::claim`].
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: number
}

/**
 * See [`Pallet::transfer`].
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: MultiAddress
    index: number
}

/**
 * See [`Pallet::free`].
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: number
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: MultiAddress
    index: number
    freeze: boolean
}

/**
 * See [`Pallet::freeze`].
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_transfer_allow_death | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve | BalancesCall_upgrade_accounts | BalancesCall_force_set_balance

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: Uint8Array[]
}

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BeefyCall = BeefyCall_report_equivocation | BeefyCall_report_equivocation_unsigned | BeefyCall_set_new_genesis

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BeefyCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_257
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BeefyCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_257
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::set_new_genesis`].
 */
export interface BeefyCall_set_new_genesis {
    __kind: 'set_new_genesis'
    delayInBlocks: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
}

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 * See [`Pallet::report_equivocation`].
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_284
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_284
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::note_stalled`].
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * See [`Pallet::heartbeat`].
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_set_metadata

/**
 * See [`Pallet::propose`].
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * See [`Pallet::second`].
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * See [`Pallet::vote`].
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

/**
 * See [`Pallet::emergency_cancel`].
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * See [`Pallet::external_propose`].
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_majority`].
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_default`].
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * See [`Pallet::fast_track`].
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
}

/**
 * See [`Pallet::veto_external`].
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
}

/**
 * See [`Pallet::cancel_referendum`].
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * See [`Pallet::delegate`].
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::undelegate`].
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * See [`Pallet::clear_public_proposals`].
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * See [`Pallet::unlock`].
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * See [`Pallet::blacklist`].
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
}

/**
 * See [`Pallet::cancel_proposal`].
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash: (Uint8Array | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_disapprove_proposal | CouncilCall_close

/**
 * See [`Pallet::set_members`].
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 * See [`Pallet::execute`].
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::vote`].
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * See [`Pallet::close`].
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_close

/**
 * See [`Pallet::set_members`].
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 * See [`Pallet::execute`].
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::vote`].
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * See [`Pallet::close`].
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PhragmenElectionCall = PhragmenElectionCall_vote | PhragmenElectionCall_remove_voter | PhragmenElectionCall_submit_candidacy | PhragmenElectionCall_renounce_candidacy | PhragmenElectionCall_remove_member | PhragmenElectionCall_clean_defunct_voters

/**
 * See [`Pallet::vote`].
 */
export interface PhragmenElectionCall_vote {
    __kind: 'vote'
    votes: Uint8Array[]
    value: bigint
}

/**
 * See [`Pallet::remove_voter`].
 */
export interface PhragmenElectionCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 * See [`Pallet::submit_candidacy`].
 */
export interface PhragmenElectionCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 * See [`Pallet::renounce_candidacy`].
 */
export interface PhragmenElectionCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 * See [`Pallet::remove_member`].
 */
export interface PhragmenElectionCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    slashBond: boolean
    rerunElection: boolean
}

/**
 * See [`Pallet::clean_defunct_voters`].
 */
export interface PhragmenElectionCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 * See [`Pallet::add_member`].
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::remove_member`].
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * See [`Pallet::swap_member`].
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * See [`Pallet::reset_members`].
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 * See [`Pallet::change_key`].
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * See [`Pallet::set_prime`].
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * See [`Pallet::clear_prime`].
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_spend | TreasuryCall_remove_approval

/**
 * See [`Pallet::propose_spend`].
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_claim_attest | ClaimsCall_attest | ClaimsCall_move_claim

/**
 * See [`Pallet::claim`].
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: Uint8Array
    ethereumSignature: Uint8Array
}

/**
 * See [`Pallet::mint_claim`].
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: Uint8Array
    value: bigint
    vestingSchedule: ([bigint, bigint, number] | undefined)
    statement: (StatementKind | undefined)
}

/**
 * See [`Pallet::claim_attest`].
 */
export interface ClaimsCall_claim_attest {
    __kind: 'claim_attest'
    dest: Uint8Array
    ethereumSignature: Uint8Array
    statement: Uint8Array
}

/**
 * See [`Pallet::attest`].
 */
export interface ClaimsCall_attest {
    __kind: 'attest'
    statement: Uint8Array
}

/**
 * See [`Pallet::move_claim`].
 */
export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: Uint8Array
    new: Uint8Array
    maybePreclaim: (Uint8Array | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: Uint8Array
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SocietyCall = SocietyCall_bid | SocietyCall_unbid | SocietyCall_vouch | SocietyCall_unvouch | SocietyCall_vote | SocietyCall_defender_vote | SocietyCall_payout | SocietyCall_waive_repay | SocietyCall_found_society | SocietyCall_dissolve | SocietyCall_judge_suspended_member | SocietyCall_set_parameters | SocietyCall_punish_skeptic | SocietyCall_claim_membership | SocietyCall_bestow_membership | SocietyCall_kick_candidate | SocietyCall_resign_candidacy | SocietyCall_drop_candidate | SocietyCall_cleanup_candidacy | SocietyCall_cleanup_challenge

/**
 * See [`Pallet::bid`].
 */
export interface SocietyCall_bid {
    __kind: 'bid'
    value: bigint
}

/**
 * See [`Pallet::unbid`].
 */
export interface SocietyCall_unbid {
    __kind: 'unbid'
}

/**
 * See [`Pallet::vouch`].
 */
export interface SocietyCall_vouch {
    __kind: 'vouch'
    who: MultiAddress
    value: bigint
    tip: bigint
}

/**
 * See [`Pallet::unvouch`].
 */
export interface SocietyCall_unvouch {
    __kind: 'unvouch'
}

/**
 * See [`Pallet::vote`].
 */
export interface SocietyCall_vote {
    __kind: 'vote'
    candidate: MultiAddress
    approve: boolean
}

/**
 * See [`Pallet::defender_vote`].
 */
export interface SocietyCall_defender_vote {
    __kind: 'defender_vote'
    approve: boolean
}

/**
 * See [`Pallet::payout`].
 */
export interface SocietyCall_payout {
    __kind: 'payout'
}

/**
 * See [`Pallet::waive_repay`].
 */
export interface SocietyCall_waive_repay {
    __kind: 'waive_repay'
    amount: bigint
}

/**
 * See [`Pallet::found_society`].
 */
export interface SocietyCall_found_society {
    __kind: 'found_society'
    founder: MultiAddress
    maxMembers: number
    maxIntake: number
    maxStrikes: number
    candidateDeposit: bigint
    rules: Uint8Array
}

/**
 * See [`Pallet::dissolve`].
 */
export interface SocietyCall_dissolve {
    __kind: 'dissolve'
}

/**
 * See [`Pallet::judge_suspended_member`].
 */
export interface SocietyCall_judge_suspended_member {
    __kind: 'judge_suspended_member'
    who: MultiAddress
    forgive: boolean
}

/**
 * See [`Pallet::set_parameters`].
 */
export interface SocietyCall_set_parameters {
    __kind: 'set_parameters'
    maxMembers: number
    maxIntake: number
    maxStrikes: number
    candidateDeposit: bigint
}

/**
 * See [`Pallet::punish_skeptic`].
 */
export interface SocietyCall_punish_skeptic {
    __kind: 'punish_skeptic'
}

/**
 * See [`Pallet::claim_membership`].
 */
export interface SocietyCall_claim_membership {
    __kind: 'claim_membership'
}

/**
 * See [`Pallet::bestow_membership`].
 */
export interface SocietyCall_bestow_membership {
    __kind: 'bestow_membership'
    candidate: Uint8Array
}

/**
 * See [`Pallet::kick_candidate`].
 */
export interface SocietyCall_kick_candidate {
    __kind: 'kick_candidate'
    candidate: Uint8Array
}

/**
 * See [`Pallet::resign_candidacy`].
 */
export interface SocietyCall_resign_candidacy {
    __kind: 'resign_candidacy'
}

/**
 * See [`Pallet::drop_candidate`].
 */
export interface SocietyCall_drop_candidate {
    __kind: 'drop_candidate'
    candidate: Uint8Array
}

/**
 * See [`Pallet::cleanup_candidacy`].
 */
export interface SocietyCall_cleanup_candidacy {
    __kind: 'cleanup_candidacy'
    candidate: Uint8Array
    max: number
}

/**
 * See [`Pallet::cleanup_challenge`].
 */
export interface SocietyCall_cleanup_challenge {
    __kind: 'cleanup_challenge'
    challengeRound: number
    max: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_set_recovered | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_vouch_recovery | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_remove_recovery | RecoveryCall_cancel_recovered

/**
 * See [`Pallet::as_recovered`].
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: MultiAddress
    call: Call
}

/**
 * See [`Pallet::set_recovered`].
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: MultiAddress
    rescuer: MultiAddress
}

/**
 * See [`Pallet::create_recovery`].
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: Uint8Array[]
    threshold: number
    delayPeriod: number
}

/**
 * See [`Pallet::initiate_recovery`].
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: MultiAddress
}

/**
 * See [`Pallet::vouch_recovery`].
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: MultiAddress
    rescuer: MultiAddress
}

/**
 * See [`Pallet::claim_recovery`].
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: MultiAddress
}

/**
 * See [`Pallet::close_recovery`].
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: MultiAddress
}

/**
 * See [`Pallet::remove_recovery`].
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 * See [`Pallet::cancel_recovered`].
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_merge_schedules

/**
 * See [`Pallet::vest`].
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * See [`Pallet::vest_other`].
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * See [`Pallet::vested_transfer`].
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::force_vested_transfer`].
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::merge_schedules`].
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::schedule_named`].
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * See [`Pallet::proxy`].
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::add_proxy`].
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::remove_proxy`].
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::remove_proxies`].
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * See [`Pallet::create_pure`].
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * See [`Pallet::kill_pure`].
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 * See [`Pallet::announce`].
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::remove_announcement`].
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::reject_announcement`].
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::proxy_announced`].
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
}

/**
 * See [`Pallet::as_multi`].
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * See [`Pallet::approve_as_multi`].
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: Weight
}

/**
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage | PreimageCall_ensure_updated

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Uint8Array
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: Uint8Array
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: Uint8Array
}

/**
 * See [`Pallet::unrequest_preimage`].
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: Uint8Array
}

/**
 * See [`Pallet::ensure_updated`].
 */
export interface PreimageCall_ensure_updated {
    __kind: 'ensure_updated'
    hashes: Uint8Array[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 * See [`Pallet::propose_bounty`].
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Uint8Array
}

/**
 * See [`Pallet::approve_bounty`].
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * See [`Pallet::accept_curator`].
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * See [`Pallet::award_bounty`].
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_bounty`].
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * See [`Pallet::close_bounty`].
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * See [`Pallet::extend_bounty_expiry`].
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ChildBountiesCall = ChildBountiesCall_add_child_bounty | ChildBountiesCall_propose_curator | ChildBountiesCall_accept_curator | ChildBountiesCall_unassign_curator | ChildBountiesCall_award_child_bounty | ChildBountiesCall_claim_child_bounty | ChildBountiesCall_close_child_bounty

/**
 * See [`Pallet::add_child_bounty`].
 */
export interface ChildBountiesCall_add_child_bounty {
    __kind: 'add_child_bounty'
    parentBountyId: number
    value: bigint
    description: Uint8Array
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface ChildBountiesCall_propose_curator {
    __kind: 'propose_curator'
    parentBountyId: number
    childBountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::accept_curator`].
 */
export interface ChildBountiesCall_accept_curator {
    __kind: 'accept_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface ChildBountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::award_child_bounty`].
 */
export interface ChildBountiesCall_award_child_bounty {
    __kind: 'award_child_bounty'
    parentBountyId: number
    childBountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_child_bounty`].
 */
export interface ChildBountiesCall_claim_child_bounty {
    __kind: 'claim_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::close_child_bounty`].
 */
export interface ChildBountiesCall_close_child_bounty {
    __kind: 'close_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 * See [`Pallet::report_awesome`].
 */
export interface TipsCall_report_awesome {
    __kind: 'report_awesome'
    reason: Uint8Array
    who: MultiAddress
}

/**
 * See [`Pallet::retract_tip`].
 */
export interface TipsCall_retract_tip {
    __kind: 'retract_tip'
    hash: Uint8Array
}

/**
 * See [`Pallet::tip_new`].
 */
export interface TipsCall_tip_new {
    __kind: 'tip_new'
    reason: Uint8Array
    who: MultiAddress
    tipValue: bigint
}

/**
 * See [`Pallet::tip`].
 */
export interface TipsCall_tip {
    __kind: 'tip'
    hash: Uint8Array
    tipValue: bigint
}

/**
 * See [`Pallet::close_tip`].
 */
export interface TipsCall_close_tip {
    __kind: 'close_tip'
    hash: Uint8Array
}

/**
 * See [`Pallet::slash_tip`].
 */
export interface TipsCall_slash_tip {
    __kind: 'slash_tip'
    hash: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NisCall = NisCall_place_bid | NisCall_retract_bid | NisCall_fund_deficit | NisCall_thaw_private | NisCall_thaw_communal | NisCall_communify | NisCall_privatize

/**
 * See [`Pallet::place_bid`].
 */
export interface NisCall_place_bid {
    __kind: 'place_bid'
    amount: bigint
    duration: number
}

/**
 * See [`Pallet::retract_bid`].
 */
export interface NisCall_retract_bid {
    __kind: 'retract_bid'
    amount: bigint
    duration: number
}

/**
 * See [`Pallet::fund_deficit`].
 */
export interface NisCall_fund_deficit {
    __kind: 'fund_deficit'
}

/**
 * See [`Pallet::thaw_private`].
 */
export interface NisCall_thaw_private {
    __kind: 'thaw_private'
    index: number
    maybeProportion: (bigint | undefined)
}

/**
 * See [`Pallet::thaw_communal`].
 */
export interface NisCall_thaw_communal {
    __kind: 'thaw_communal'
    index: number
}

/**
 * See [`Pallet::communify`].
 */
export interface NisCall_communify {
    __kind: 'communify'
    index: number
}

/**
 * See [`Pallet::privatize`].
 */
export interface NisCall_privatize {
    __kind: 'privatize'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NisCounterpartBalancesCall = NisCounterpartBalancesCall_transfer_allow_death | NisCounterpartBalancesCall_force_transfer | NisCounterpartBalancesCall_transfer_keep_alive | NisCounterpartBalancesCall_transfer_all | NisCounterpartBalancesCall_force_unreserve | NisCounterpartBalancesCall_upgrade_accounts | NisCounterpartBalancesCall_force_set_balance

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface NisCounterpartBalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface NisCounterpartBalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface NisCounterpartBalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface NisCounterpartBalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface NisCounterpartBalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface NisCounterpartBalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: Uint8Array[]
}

/**
 * See [`Pallet::force_set_balance`].
 */
export interface NisCounterpartBalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConfigurationCall = ConfigurationCall_set_validation_upgrade_cooldown | ConfigurationCall_set_validation_upgrade_delay | ConfigurationCall_set_code_retention_period | ConfigurationCall_set_max_code_size | ConfigurationCall_set_max_pov_size | ConfigurationCall_set_max_head_data_size | ConfigurationCall_set_on_demand_cores | ConfigurationCall_set_on_demand_retries | ConfigurationCall_set_group_rotation_frequency | ConfigurationCall_set_paras_availability_period | ConfigurationCall_set_scheduling_lookahead | ConfigurationCall_set_max_validators_per_core | ConfigurationCall_set_max_validators | ConfigurationCall_set_dispute_period | ConfigurationCall_set_dispute_post_conclusion_acceptance_period | ConfigurationCall_set_no_show_slots | ConfigurationCall_set_n_delay_tranches | ConfigurationCall_set_zeroth_delay_tranche_width | ConfigurationCall_set_needed_approvals | ConfigurationCall_set_relay_vrf_modulo_samples | ConfigurationCall_set_max_upward_queue_count | ConfigurationCall_set_max_upward_queue_size | ConfigurationCall_set_max_downward_message_size | ConfigurationCall_set_max_upward_message_size | ConfigurationCall_set_max_upward_message_num_per_candidate | ConfigurationCall_set_hrmp_open_request_ttl | ConfigurationCall_set_hrmp_sender_deposit | ConfigurationCall_set_hrmp_recipient_deposit | ConfigurationCall_set_hrmp_channel_max_capacity | ConfigurationCall_set_hrmp_channel_max_total_size | ConfigurationCall_set_hrmp_max_parachain_inbound_channels | ConfigurationCall_set_hrmp_channel_max_message_size | ConfigurationCall_set_hrmp_max_parachain_outbound_channels | ConfigurationCall_set_hrmp_max_message_num_per_candidate | ConfigurationCall_set_pvf_voting_ttl | ConfigurationCall_set_minimum_validation_upgrade_delay | ConfigurationCall_set_bypass_consistency_check | ConfigurationCall_set_async_backing_params | ConfigurationCall_set_executor_params | ConfigurationCall_set_on_demand_base_fee | ConfigurationCall_set_on_demand_fee_variability | ConfigurationCall_set_on_demand_queue_max_size | ConfigurationCall_set_on_demand_target_queue_utilization | ConfigurationCall_set_on_demand_ttl | ConfigurationCall_set_minimum_backing_votes

/**
 * See [`Pallet::set_validation_upgrade_cooldown`].
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
    __kind: 'set_validation_upgrade_cooldown'
    new: number
}

/**
 * See [`Pallet::set_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_code_retention_period`].
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 * See [`Pallet::set_max_code_size`].
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 * See [`Pallet::set_max_pov_size`].
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 * See [`Pallet::set_max_head_data_size`].
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 * See [`Pallet::set_on_demand_cores`].
 */
export interface ConfigurationCall_set_on_demand_cores {
    __kind: 'set_on_demand_cores'
    new: number
}

/**
 * See [`Pallet::set_on_demand_retries`].
 */
export interface ConfigurationCall_set_on_demand_retries {
    __kind: 'set_on_demand_retries'
    new: number
}

/**
 * See [`Pallet::set_group_rotation_frequency`].
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 * See [`Pallet::set_paras_availability_period`].
 */
export interface ConfigurationCall_set_paras_availability_period {
    __kind: 'set_paras_availability_period'
    new: number
}

/**
 * See [`Pallet::set_scheduling_lookahead`].
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 * See [`Pallet::set_max_validators_per_core`].
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new: (number | undefined)
}

/**
 * See [`Pallet::set_max_validators`].
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new: (number | undefined)
}

/**
 * See [`Pallet::set_dispute_period`].
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 * See [`Pallet::set_dispute_post_conclusion_acceptance_period`].
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 * See [`Pallet::set_no_show_slots`].
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 * See [`Pallet::set_n_delay_tranches`].
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 * See [`Pallet::set_zeroth_delay_tranche_width`].
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

/**
 * See [`Pallet::set_needed_approvals`].
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 * See [`Pallet::set_relay_vrf_modulo_samples`].
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_count`].
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_size`].
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 * See [`Pallet::set_max_downward_message_size`].
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_size`].
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_hrmp_open_request_ttl`].
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 * See [`Pallet::set_hrmp_sender_deposit`].
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_hrmp_recipient_deposit`].
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_hrmp_channel_max_capacity`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_total_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_inbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_message_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_outbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_pvf_voting_ttl`].
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
    __kind: 'set_pvf_voting_ttl'
    new: number
}

/**
 * See [`Pallet::set_minimum_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
    __kind: 'set_minimum_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_bypass_consistency_check`].
 */
export interface ConfigurationCall_set_bypass_consistency_check {
    __kind: 'set_bypass_consistency_check'
    new: boolean
}

/**
 * See [`Pallet::set_async_backing_params`].
 */
export interface ConfigurationCall_set_async_backing_params {
    __kind: 'set_async_backing_params'
    new: V6AsyncBackingParams
}

/**
 * See [`Pallet::set_executor_params`].
 */
export interface ConfigurationCall_set_executor_params {
    __kind: 'set_executor_params'
    new: V6ExecutorParam[]
}

/**
 * See [`Pallet::set_on_demand_base_fee`].
 */
export interface ConfigurationCall_set_on_demand_base_fee {
    __kind: 'set_on_demand_base_fee'
    new: bigint
}

/**
 * See [`Pallet::set_on_demand_fee_variability`].
 */
export interface ConfigurationCall_set_on_demand_fee_variability {
    __kind: 'set_on_demand_fee_variability'
    new: number
}

/**
 * See [`Pallet::set_on_demand_queue_max_size`].
 */
export interface ConfigurationCall_set_on_demand_queue_max_size {
    __kind: 'set_on_demand_queue_max_size'
    new: number
}

/**
 * See [`Pallet::set_on_demand_target_queue_utilization`].
 */
export interface ConfigurationCall_set_on_demand_target_queue_utilization {
    __kind: 'set_on_demand_target_queue_utilization'
    new: number
}

/**
 * See [`Pallet::set_on_demand_ttl`].
 */
export interface ConfigurationCall_set_on_demand_ttl {
    __kind: 'set_on_demand_ttl'
    new: number
}

/**
 * See [`Pallet::set_minimum_backing_votes`].
 */
export interface ConfigurationCall_set_minimum_backing_votes {
    __kind: 'set_minimum_backing_votes'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSharedCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInclusionCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInherentCall = ParaInherentCall_enter

/**
 * See [`Pallet::enter`].
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: V6InherentData
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasCall = ParasCall_force_set_current_code | ParasCall_force_set_current_head | ParasCall_force_schedule_code_upgrade | ParasCall_force_note_new_head | ParasCall_force_queue_action | ParasCall_add_trusted_validation_code | ParasCall_poke_unused_validation_code | ParasCall_include_pvf_check_statement | ParasCall_force_set_most_recent_context

/**
 * See [`Pallet::force_set_current_code`].
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: number
    newCode: Uint8Array
}

/**
 * See [`Pallet::force_set_current_head`].
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: number
    newHead: Uint8Array
}

/**
 * See [`Pallet::force_schedule_code_upgrade`].
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: number
    newCode: Uint8Array
    relayParentNumber: number
}

/**
 * See [`Pallet::force_note_new_head`].
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: number
    newHead: Uint8Array
}

/**
 * See [`Pallet::force_queue_action`].
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: number
}

/**
 * See [`Pallet::add_trusted_validation_code`].
 */
export interface ParasCall_add_trusted_validation_code {
    __kind: 'add_trusted_validation_code'
    validationCode: Uint8Array
}

/**
 * See [`Pallet::poke_unused_validation_code`].
 */
export interface ParasCall_poke_unused_validation_code {
    __kind: 'poke_unused_validation_code'
    validationCodeHash: Uint8Array
}

/**
 * See [`Pallet::include_pvf_check_statement`].
 */
export interface ParasCall_include_pvf_check_statement {
    __kind: 'include_pvf_check_statement'
    stmt: V6PvfCheckStatement
    signature: Uint8Array
}

/**
 * See [`Pallet::force_set_most_recent_context`].
 */
export interface ParasCall_force_set_most_recent_context {
    __kind: 'force_set_most_recent_context'
    para: number
    context: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type InitializerCall = InitializerCall_force_approve

/**
 * See [`Pallet::force_approve`].
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type HrmpCall = HrmpCall_hrmp_init_open_channel | HrmpCall_hrmp_accept_open_channel | HrmpCall_hrmp_close_channel | HrmpCall_force_clean_hrmp | HrmpCall_force_process_hrmp_open | HrmpCall_force_process_hrmp_close | HrmpCall_hrmp_cancel_open_request | HrmpCall_force_open_hrmp_channel | HrmpCall_establish_system_channel | HrmpCall_poke_channel_deposits

/**
 * See [`Pallet::hrmp_init_open_channel`].
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: number
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * See [`Pallet::hrmp_accept_open_channel`].
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: number
}

/**
 * See [`Pallet::hrmp_close_channel`].
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 * See [`Pallet::force_clean_hrmp`].
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: number
    inbound: number
    outbound: number
}

/**
 * See [`Pallet::force_process_hrmp_open`].
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
    channels: number
}

/**
 * See [`Pallet::force_process_hrmp_close`].
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
    channels: number
}

/**
 * See [`Pallet::hrmp_cancel_open_request`].
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
    openRequests: number
}

/**
 * See [`Pallet::force_open_hrmp_channel`].
 */
export interface HrmpCall_force_open_hrmp_channel {
    __kind: 'force_open_hrmp_channel'
    sender: number
    recipient: number
    maxCapacity: number
    maxMessageSize: number
}

/**
 * See [`Pallet::establish_system_channel`].
 */
export interface HrmpCall_establish_system_channel {
    __kind: 'establish_system_channel'
    sender: number
    recipient: number
}

/**
 * See [`Pallet::poke_channel_deposits`].
 */
export interface HrmpCall_poke_channel_deposits {
    __kind: 'poke_channel_deposits'
    sender: number
    recipient: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze

/**
 * See [`Pallet::force_unfreeze`].
 */
export interface ParasDisputesCall_force_unfreeze {
    __kind: 'force_unfreeze'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSlashingCall = ParasSlashingCall_report_dispute_lost_unsigned

/**
 * See [`Pallet::report_dispute_lost_unsigned`].
 */
export interface ParasSlashingCall_report_dispute_lost_unsigned {
    __kind: 'report_dispute_lost_unsigned'
    disputeProof: V6DisputeProof
    keyOwnerProof: MembershipProof
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MessageQueueCall = MessageQueueCall_reap_page | MessageQueueCall_execute_overweight

/**
 * See [`Pallet::reap_page`].
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

/**
 * See [`Pallet::execute_overweight`].
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OnDemandAssignmentProviderCall = OnDemandAssignmentProviderCall_place_order_allow_death | OnDemandAssignmentProviderCall_place_order_keep_alive

/**
 * See [`Pallet::place_order_allow_death`].
 */
export interface OnDemandAssignmentProviderCall_place_order_allow_death {
    __kind: 'place_order_allow_death'
    maxAmount: bigint
    paraId: number
}

/**
 * See [`Pallet::place_order_keep_alive`].
 */
export interface OnDemandAssignmentProviderCall_place_order_keep_alive {
    __kind: 'place_order_keep_alive'
    maxAmount: bigint
    paraId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RegistrarCall = RegistrarCall_register | RegistrarCall_force_register | RegistrarCall_deregister | RegistrarCall_swap | RegistrarCall_remove_lock | RegistrarCall_reserve | RegistrarCall_add_lock | RegistrarCall_schedule_code_upgrade | RegistrarCall_set_current_head

/**
 * See [`Pallet::register`].
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 * See [`Pallet::force_register`].
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: Uint8Array
    deposit: bigint
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 * See [`Pallet::deregister`].
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: number
}

/**
 * See [`Pallet::swap`].
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: number
    other: number
}

/**
 * See [`Pallet::remove_lock`].
 */
export interface RegistrarCall_remove_lock {
    __kind: 'remove_lock'
    para: number
}

/**
 * See [`Pallet::reserve`].
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

/**
 * See [`Pallet::add_lock`].
 */
export interface RegistrarCall_add_lock {
    __kind: 'add_lock'
    para: number
}

/**
 * See [`Pallet::schedule_code_upgrade`].
 */
export interface RegistrarCall_schedule_code_upgrade {
    __kind: 'schedule_code_upgrade'
    para: number
    newCode: Uint8Array
}

/**
 * See [`Pallet::set_current_head`].
 */
export interface RegistrarCall_set_current_head {
    __kind: 'set_current_head'
    para: number
    newHead: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlotsCall = SlotsCall_force_lease | SlotsCall_clear_all_leases | SlotsCall_trigger_onboard

/**
 * See [`Pallet::force_lease`].
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: number
    leaser: Uint8Array
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 * See [`Pallet::clear_all_leases`].
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: number
}

/**
 * See [`Pallet::trigger_onboard`].
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AuctionsCall = AuctionsCall_new_auction | AuctionsCall_bid | AuctionsCall_cancel_auction

/**
 * See [`Pallet::new_auction`].
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

/**
 * See [`Pallet::bid`].
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 * See [`Pallet::cancel_auction`].
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CrowdloanCall = CrowdloanCall_create | CrowdloanCall_contribute | CrowdloanCall_withdraw | CrowdloanCall_refund | CrowdloanCall_dissolve | CrowdloanCall_edit | CrowdloanCall_add_memo | CrowdloanCall_poke | CrowdloanCall_contribute_all

/**
 * See [`Pallet::create`].
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 * See [`Pallet::contribute`].
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature: (MultiSignature | undefined)
}

/**
 * See [`Pallet::withdraw`].
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: Uint8Array
    index: number
}

/**
 * See [`Pallet::refund`].
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 * See [`Pallet::dissolve`].
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * See [`Pallet::edit`].
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 * See [`Pallet::add_memo`].
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: number
    memo: Uint8Array
}

/**
 * See [`Pallet::poke`].
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: number
}

/**
 * See [`Pallet::contribute_all`].
 */
export interface CrowdloanCall_contribute_all {
    __kind: 'contribute_all'
    index: number
    signature: (MultiSignature | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmPalletCall = XcmPalletCall_send | XcmPalletCall_teleport_assets | XcmPalletCall_reserve_transfer_assets | XcmPalletCall_execute | XcmPalletCall_force_xcm_version | XcmPalletCall_force_default_xcm_version | XcmPalletCall_force_subscribe_version_notify | XcmPalletCall_force_unsubscribe_version_notify | XcmPalletCall_limited_reserve_transfer_assets | XcmPalletCall_limited_teleport_assets | XcmPalletCall_force_suspension

/**
 * See [`Pallet::send`].
 */
export interface XcmPalletCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface XcmPalletCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::execute`].
 */
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: Type_457
    maxWeight: Weight
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface XcmPalletCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface XcmPalletCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface XcmPalletCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface XcmPalletCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
 */
export interface XcmPalletCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::limited_teleport_assets`].
 */
export interface XcmPalletCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface XcmPalletCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSudoWrapperCall = ParasSudoWrapperCall_sudo_schedule_para_initialize | ParasSudoWrapperCall_sudo_schedule_para_cleanup | ParasSudoWrapperCall_sudo_schedule_parathread_upgrade | ParasSudoWrapperCall_sudo_schedule_parachain_downgrade | ParasSudoWrapperCall_sudo_queue_downward_xcm | ParasSudoWrapperCall_sudo_establish_hrmp_channel

/**
 * See [`Pallet::sudo_schedule_para_initialize`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_initialize {
    __kind: 'sudo_schedule_para_initialize'
    id: number
    genesis: ParaGenesisArgs
}

/**
 * See [`Pallet::sudo_schedule_para_cleanup`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_cleanup {
    __kind: 'sudo_schedule_para_cleanup'
    id: number
}

/**
 * See [`Pallet::sudo_schedule_parathread_upgrade`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_parathread_upgrade {
    __kind: 'sudo_schedule_parathread_upgrade'
    id: number
}

/**
 * See [`Pallet::sudo_schedule_parachain_downgrade`].
 */
export interface ParasSudoWrapperCall_sudo_schedule_parachain_downgrade {
    __kind: 'sudo_schedule_parachain_downgrade'
    id: number
}

/**
 * See [`Pallet::sudo_queue_downward_xcm`].
 */
export interface ParasSudoWrapperCall_sudo_queue_downward_xcm {
    __kind: 'sudo_queue_downward_xcm'
    id: number
    xcm: VersionedXcm
}

/**
 * See [`Pallet::sudo_establish_hrmp_channel`].
 */
export interface ParasSudoWrapperCall_sudo_establish_hrmp_channel {
    __kind: 'sudo_establish_hrmp_channel'
    sender: number
    recipient: number
    maxCapacity: number
    maxMessageSize: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AssignedSlotsCall = AssignedSlotsCall_assign_perm_parachain_slot | AssignedSlotsCall_assign_temp_parachain_slot | AssignedSlotsCall_unassign_parachain_slot | AssignedSlotsCall_set_max_permanent_slots | AssignedSlotsCall_set_max_temporary_slots

/**
 * See [`Pallet::assign_perm_parachain_slot`].
 */
export interface AssignedSlotsCall_assign_perm_parachain_slot {
    __kind: 'assign_perm_parachain_slot'
    id: number
}

/**
 * See [`Pallet::assign_temp_parachain_slot`].
 */
export interface AssignedSlotsCall_assign_temp_parachain_slot {
    __kind: 'assign_temp_parachain_slot'
    id: number
    leasePeriodStart: SlotLeasePeriodStart
}

/**
 * See [`Pallet::unassign_parachain_slot`].
 */
export interface AssignedSlotsCall_unassign_parachain_slot {
    __kind: 'unassign_parachain_slot'
    id: number
}

/**
 * See [`Pallet::set_max_permanent_slots`].
 */
export interface AssignedSlotsCall_set_max_permanent_slots {
    __kind: 'set_max_permanent_slots'
    slots: number
}

/**
 * See [`Pallet::set_max_temporary_slots`].
 */
export interface AssignedSlotsCall_set_max_temporary_slots {
    __kind: 'set_max_temporary_slots'
    slots: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ValidatorManagerCall = ValidatorManagerCall_register_validators | ValidatorManagerCall_deregister_validators

/**
 * See [`Pallet::register_validators`].
 */
export interface ValidatorManagerCall_register_validators {
    __kind: 'register_validators'
    validators: Uint8Array[]
}

/**
 * See [`Pallet::deregister_validators`].
 */
export interface ValidatorManagerCall_deregister_validators {
    __kind: 'deregister_validators'
    validators: Uint8Array[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StateTrieMigrationCall = StateTrieMigrationCall_control_auto_migration | StateTrieMigrationCall_continue_migrate | StateTrieMigrationCall_migrate_custom_top | StateTrieMigrationCall_migrate_custom_child | StateTrieMigrationCall_set_signed_max_limits | StateTrieMigrationCall_force_set_progress

/**
 * See [`Pallet::control_auto_migration`].
 */
export interface StateTrieMigrationCall_control_auto_migration {
    __kind: 'control_auto_migration'
    maybeConfig: (MigrationLimits | undefined)
}

/**
 * See [`Pallet::continue_migrate`].
 */
export interface StateTrieMigrationCall_continue_migrate {
    __kind: 'continue_migrate'
    limits: MigrationLimits
    realSizeUpper: number
    witnessTask: MigrationTask
}

/**
 * See [`Pallet::migrate_custom_top`].
 */
export interface StateTrieMigrationCall_migrate_custom_top {
    __kind: 'migrate_custom_top'
    keys: Uint8Array[]
    witnessSize: number
}

/**
 * See [`Pallet::migrate_custom_child`].
 */
export interface StateTrieMigrationCall_migrate_custom_child {
    __kind: 'migrate_custom_child'
    root: Uint8Array
    childKeys: Uint8Array[]
    totalSize: number
}

/**
 * See [`Pallet::set_signed_max_limits`].
 */
export interface StateTrieMigrationCall_set_signed_max_limits {
    __kind: 'set_signed_max_limits'
    limits: MigrationLimits
}

/**
 * See [`Pallet::force_set_progress`].
 */
export interface StateTrieMigrationCall_force_set_progress {
    __kind: 'force_set_progress'
    progressTop: Progress
    progressChild: Progress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * See [`Pallet::sudo`].
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * See [`Pallet::sudo_unchecked_weight`].
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * See [`Pallet::set_key`].
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * See [`Pallet::sudo_as`].
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

export interface EquivocationProof {
    offender: Uint8Array
    slot: bigint
    firstHeader: Header
    secondHeader: Header
}

export interface MembershipProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface MultiAddress_Index {
    __kind: 'Index'
    value: null
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface Type_257 {
    first: VoteMessage
    second: VoteMessage
}

export interface SessionKeys {
    grandpa: Uint8Array
    babe: Uint8Array
    imOnline: Uint8Array
    paraValidator: Uint8Array
    paraAssignment: Uint8Array
    authorityDiscovery: Uint8Array
    beefy: Uint8Array
}

export interface Type_284 {
    setId: bigint
    equivocation: Equivocation
}

export interface Heartbeat {
    blockNumber: number
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: Uint8Array
}

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Uint8Array
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: Uint8Array
    len: number
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
    __kind: 'None'
}

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export type MetadataOwner = MetadataOwner_External | MetadataOwner_Proposal | MetadataOwner_Referendum

export interface MetadataOwner_External {
    __kind: 'External'
}

export interface MetadataOwner_Proposal {
    __kind: 'Proposal'
    value: number
}

export interface MetadataOwner_Referendum {
    __kind: 'Referendum'
    value: number
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export type StatementKind = StatementKind_Regular | StatementKind_Saft

export interface StatementKind_Regular {
    __kind: 'Regular'
}

export interface StatementKind_Saft {
    __kind: 'Saft'
}

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_ParachainsOrigin | OriginCaller_XcmPallet | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_325
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_326
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Origin
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_328
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: (Uint8Array | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Uint8Array
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Uint8Array
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Uint8Array
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Uint8Array
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Uint8Array
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Uint8Array
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Uint8Array
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Uint8Array
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Uint8Array
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Uint8Array
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Uint8Array
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Uint8Array
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Uint8Array
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Uint8Array
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Uint8Array
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Uint8Array
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Uint8Array
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Uint8Array
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Uint8Array
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Uint8Array
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Uint8Array
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Uint8Array
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Uint8Array
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Uint8Array
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Uint8Array
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Uint8Array
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Uint8Array
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Uint8Array
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Uint8Array
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Uint8Array
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Uint8Array
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Uint8Array
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Uint8Array
}

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Uint8Array
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Uint8Array
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Uint8Array
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Uint8Array
}

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_IdentityJudgement | ProxyType_CancelProxy | ProxyType_Auction | ProxyType_Society | ProxyType_OnDemandOrdering

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Auction {
    __kind: 'Auction'
}

export interface ProxyType_Society {
    __kind: 'Society'
}

export interface ProxyType_OnDemandOrdering {
    __kind: 'OnDemandOrdering'
}

export interface Timepoint {
    height: number
    index: number
}

export interface V6AsyncBackingParams {
    maxCandidateDepth: number
    allowedAncestryLen: number
}

export type V6ExecutorParam = V6ExecutorParam_MaxMemoryPages | V6ExecutorParam_StackLogicalMax | V6ExecutorParam_StackNativeMax | V6ExecutorParam_PrecheckingMaxMemory | V6ExecutorParam_PvfPrepTimeout | V6ExecutorParam_PvfExecTimeout | V6ExecutorParam_WasmExtBulkMemory

export interface V6ExecutorParam_MaxMemoryPages {
    __kind: 'MaxMemoryPages'
    value: number
}

export interface V6ExecutorParam_StackLogicalMax {
    __kind: 'StackLogicalMax'
    value: number
}

export interface V6ExecutorParam_StackNativeMax {
    __kind: 'StackNativeMax'
    value: number
}

export interface V6ExecutorParam_PrecheckingMaxMemory {
    __kind: 'PrecheckingMaxMemory'
    value: bigint
}

export interface V6ExecutorParam_PvfPrepTimeout {
    __kind: 'PvfPrepTimeout'
    value: [V6PvfPrepTimeoutKind, bigint]
}

export interface V6ExecutorParam_PvfExecTimeout {
    __kind: 'PvfExecTimeout'
    value: [V6PvfExecTimeoutKind, bigint]
}

export interface V6ExecutorParam_WasmExtBulkMemory {
    __kind: 'WasmExtBulkMemory'
}

export interface V6InherentData {
    bitfields: V6UncheckedSigned[]
    backedCandidates: V6BackedCandidate[]
    disputes: V6DisputeStatementSet[]
    parentHeader: Header
}

export interface V6PvfCheckStatement {
    accept: boolean
    subject: Uint8Array
    sessionIndex: number
    validatorIndex: number
}

export interface HrmpChannelId {
    sender: number
    recipient: number
}

export interface V6DisputeProof {
    timeSlot: V6DisputesTimeSlot
    kind: V6SlashingOffenceKind
    validatorIndex: number
    validatorId: Uint8Array
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Ump

export interface AggregateMessageOrigin_Ump {
    __kind: 'Ump'
    value: UmpQueueId
}

export type MultiSigner = MultiSigner_Ed25519 | MultiSigner_Sr25519 | MultiSigner_Ecdsa

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type MultiSignature = MultiSignature_Ed25519 | MultiSignature_Sr25519 | MultiSignature_Ecdsa

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export type Type_457 = Type_457_V2 | Type_457_V3

export interface Type_457_V2 {
    __kind: 'V2'
    value: Type_460[]
}

export interface Type_457_V3 {
    __kind: 'V3'
    value: Type_464[]
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface ParaGenesisArgs {
    genesisHead: Uint8Array
    validationCode: Uint8Array
    paraKind: boolean
}

export type SlotLeasePeriodStart = SlotLeasePeriodStart_Current | SlotLeasePeriodStart_Next

export interface SlotLeasePeriodStart_Current {
    __kind: 'Current'
}

export interface SlotLeasePeriodStart_Next {
    __kind: 'Next'
}

export interface MigrationLimits {
    size: number
    item: number
}

export interface MigrationTask {
    progressTop: Progress
    progressChild: Progress
    size: number
    topItems: number
    childItems: number
}

export type Progress = Progress_ToStart | Progress_LastKey | Progress_Complete

export interface Progress_ToStart {
    __kind: 'ToStart'
}

export interface Progress_LastKey {
    __kind: 'LastKey'
    value: Uint8Array
}

export interface Progress_Complete {
    __kind: 'Complete'
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export type AllowedSlots = AllowedSlots_PrimarySlots | AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export interface VoteMessage {
    commitment: Commitment
    id: Uint8Array
    signature: Uint8Array
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_286
}

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_291
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Type_325 = Type_325_Members | Type_325_Member | Type_325__Phantom

export interface Type_325_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_325_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_325__Phantom {
    __kind: '_Phantom'
}

export type Type_326 = Type_326_Members | Type_326_Member | Type_326__Phantom

export interface Type_326_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_326_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_326__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Parachain

export interface Origin_Parachain {
    __kind: 'Parachain'
    value: number
}

export type Type_328 = Type_328_Xcm | Type_328_Response

export interface Type_328_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export interface Type_328_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export type Void = never

export type V6PvfPrepTimeoutKind = V6PvfPrepTimeoutKind_Precheck | V6PvfPrepTimeoutKind_Lenient

export interface V6PvfPrepTimeoutKind_Precheck {
    __kind: 'Precheck'
}

export interface V6PvfPrepTimeoutKind_Lenient {
    __kind: 'Lenient'
}

export type V6PvfExecTimeoutKind = V6PvfExecTimeoutKind_Backing | V6PvfExecTimeoutKind_Approval

export interface V6PvfExecTimeoutKind_Backing {
    __kind: 'Backing'
}

export interface V6PvfExecTimeoutKind_Approval {
    __kind: 'Approval'
}

export interface V6UncheckedSigned {
    payload: Uint8Array
    validatorIndex: number
    signature: Uint8Array
}

export interface V6BackedCandidate {
    candidate: V6CommittedCandidateReceipt
    validityVotes: V6ValidityAttestation[]
    validatorIndices: Uint8Array
}

export interface V6DisputeStatementSet {
    candidateHash: Uint8Array
    session: number
    statements: [V6DisputeStatement, number, Uint8Array][]
}

export interface V6DisputesTimeSlot {
    sessionIndex: number
    candidateHash: Uint8Array
}

export type V6SlashingOffenceKind = V6SlashingOffenceKind_ForInvalid | V6SlashingOffenceKind_AgainstValid

export interface V6SlashingOffenceKind_ForInvalid {
    __kind: 'ForInvalid'
}

export interface V6SlashingOffenceKind_AgainstValid {
    __kind: 'AgainstValid'
}

export type UmpQueueId = UmpQueueId_Para

export interface UmpQueueId_Para {
    __kind: 'Para'
    value: number
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V3Instruction = V3Instruction_WithdrawAsset | V3Instruction_ReserveAssetDeposited | V3Instruction_ReceiveTeleportedAsset | V3Instruction_QueryResponse | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Transact | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_ClearOrigin | V3Instruction_DescendOrigin | V3Instruction_ReportError | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_ExchangeAsset | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_ReportHolding | V3Instruction_BuyExecution | V3Instruction_RefundSurplus | V3Instruction_SetErrorHandler | V3Instruction_SetAppendix | V3Instruction_ClearError | V3Instruction_ClaimAsset | V3Instruction_Trap | V3Instruction_SubscribeVersion | V3Instruction_UnsubscribeVersion | V3Instruction_BurnAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectOrigin | V3Instruction_ExpectError | V3Instruction_ExpectTransactStatus | V3Instruction_QueryPallet | V3Instruction_ExpectPallet | V3Instruction_ReportTransactStatus | V3Instruction_ClearTransactStatus | V3Instruction_UniversalOrigin | V3Instruction_ExportMessage | V3Instruction_LockAsset | V3Instruction_UnlockAsset | V3Instruction_NoteUnlockable | V3Instruction_RequestUnlock | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_ClearTopic | V3Instruction_AliasOrigin | V3Instruction_UnpaidExecution

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type Type_460 = Type_460_WithdrawAsset | Type_460_ReserveAssetDeposited | Type_460_ReceiveTeleportedAsset | Type_460_QueryResponse | Type_460_TransferAsset | Type_460_TransferReserveAsset | Type_460_Transact | Type_460_HrmpNewChannelOpenRequest | Type_460_HrmpChannelAccepted | Type_460_HrmpChannelClosing | Type_460_ClearOrigin | Type_460_DescendOrigin | Type_460_ReportError | Type_460_DepositAsset | Type_460_DepositReserveAsset | Type_460_ExchangeAsset | Type_460_InitiateReserveWithdraw | Type_460_InitiateTeleport | Type_460_QueryHolding | Type_460_BuyExecution | Type_460_RefundSurplus | Type_460_SetErrorHandler | Type_460_SetAppendix | Type_460_ClearError | Type_460_ClaimAsset | Type_460_Trap | Type_460_SubscribeVersion | Type_460_UnsubscribeVersion

export interface Type_460_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface Type_460_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_460_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_460_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_460_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_460_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_460_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_460_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_460_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_460_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_460_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_460_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_460_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_460_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_460_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_460_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_460_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_460_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_460_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_460_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_460_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_460_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_460[]
}

export interface Type_460_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_460[]
}

export interface Type_460_ClearError {
    __kind: 'ClearError'
}

export interface Type_460_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_460_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_460_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_460_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_464 = Type_464_WithdrawAsset | Type_464_ReserveAssetDeposited | Type_464_ReceiveTeleportedAsset | Type_464_QueryResponse | Type_464_TransferAsset | Type_464_TransferReserveAsset | Type_464_Transact | Type_464_HrmpNewChannelOpenRequest | Type_464_HrmpChannelAccepted | Type_464_HrmpChannelClosing | Type_464_ClearOrigin | Type_464_DescendOrigin | Type_464_ReportError | Type_464_DepositAsset | Type_464_DepositReserveAsset | Type_464_ExchangeAsset | Type_464_InitiateReserveWithdraw | Type_464_InitiateTeleport | Type_464_ReportHolding | Type_464_BuyExecution | Type_464_RefundSurplus | Type_464_SetErrorHandler | Type_464_SetAppendix | Type_464_ClearError | Type_464_ClaimAsset | Type_464_Trap | Type_464_SubscribeVersion | Type_464_UnsubscribeVersion | Type_464_BurnAsset | Type_464_ExpectAsset | Type_464_ExpectOrigin | Type_464_ExpectError | Type_464_ExpectTransactStatus | Type_464_QueryPallet | Type_464_ExpectPallet | Type_464_ReportTransactStatus | Type_464_ClearTransactStatus | Type_464_UniversalOrigin | Type_464_ExportMessage | Type_464_LockAsset | Type_464_UnlockAsset | Type_464_NoteUnlockable | Type_464_RequestUnlock | Type_464_SetFeesMode | Type_464_SetTopic | Type_464_ClearTopic | Type_464_AliasOrigin | Type_464_UnpaidExecution

export interface Type_464_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_464_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_464_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_464_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface Type_464_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_464_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_464_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface Type_464_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_464_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_464_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_464_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_464_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_464_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_464_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_464_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_464_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_464_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_464_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_464_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_464_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_464_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_464_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_464[]
}

export interface Type_464_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_464[]
}

export interface Type_464_ClearError {
    __kind: 'ClearError'
}

export interface Type_464_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_464_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_464_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_464_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_464_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_464_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_464_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface Type_464_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface Type_464_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_464_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface Type_464_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface Type_464_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_464_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_464_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_464_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_464_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_464_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_464_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_464_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_464_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_464_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface Type_464_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_464_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_464_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface Digest {
    logs: DigestItem[]
}

export interface Commitment {
    payload: [Uint8Array, Uint8Array][]
    blockNumber: number
    validatorSetId: bigint
}

export interface Type_286 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Prevote, Uint8Array]
    second: [Prevote, Uint8Array]
}

export interface Type_291 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Precommit, Uint8Array]
    second: [Precommit, Uint8Array]
}

export interface V6CommittedCandidateReceipt {
    descriptor: V6CandidateDescriptor
    commitments: V6CandidateCommitments
}

export type V6ValidityAttestation = V6ValidityAttestation_Implicit | V6ValidityAttestation_Explicit

export interface V6ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: Uint8Array
}

export interface V6ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: Uint8Array
}

export type V6DisputeStatement = V6DisputeStatement_Valid | V6DisputeStatement_Invalid

export interface V6DisputeStatement_Valid {
    __kind: 'Valid'
    value: V6ValidDisputeStatementKind
}

export interface V6DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V6InvalidDisputeStatementKind
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export type V3Response = V3Response_Null | V3Response_Assets | V3Response_ExecutionResult | V3Response_Version | V3Response_PalletsInfo | V3Response_DispatchResult

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V3Error] | undefined)
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3Error = V3Error_Overflow | V3Error_Unimplemented | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_BadOrigin | V3Error_InvalidLocation | V3Error_AssetNotFound | V3Error_FailedToTransactAsset | V3Error_NotWithdrawable | V3Error_LocationCannotHold | V3Error_ExceedsMaxMessageSize | V3Error_DestinationUnsupported | V3Error_Transport | V3Error_Unroutable | V3Error_UnknownClaim | V3Error_FailedToDecode | V3Error_MaxWeightInvalid | V3Error_NotHoldingFees | V3Error_TooExpensive | V3Error_Trap | V3Error_ExpectationFalse | V3Error_PalletNotFound | V3Error_NameMismatch | V3Error_VersionIncompatible | V3Error_HoldingWouldOverflow | V3Error_ExportError | V3Error_ReanchorFailed | V3Error_NoDeal | V3Error_FeesNotMet | V3Error_LockError | V3Error_NoPermission | V3Error_Unanchored | V3Error_NotDepositable | V3Error_UnhandledXcmVersion | V3Error_WeightLimitReached | V3Error_Barrier | V3Error_WeightNotComputable | V3Error_ExceedsStackLimit

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Success | V3MaybeErrorCode_Error | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Uint8Array
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Uint8Array
}

export type V3Junction = V3Junction_Parachain | V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_PalletInstance | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_OnlyChild | V3Junction_Plurality | V3Junction_GlobalConsensus

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network: (V3NetworkId | undefined)
    id: Uint8Array
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: (V3NetworkId | undefined)
    key: Uint8Array
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Uint8Array
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export type V3NetworkId = V3NetworkId_ByGenesis | V3NetworkId_ByFork | V3NetworkId_Polkadot | V3NetworkId_Kusama | V3NetworkId_Westend | V3NetworkId_Rococo | V3NetworkId_Wococo | V3NetworkId_Ethereum | V3NetworkId_BitcoinCore | V3NetworkId_BitcoinCash

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Uint8Array
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Uint8Array
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export type V2AssetId = V2AssetId_Concrete | V2AssetId_Abstract

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V3AssetId = V3AssetId_Concrete | V3AssetId_Abstract

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface Prevote {
    targetHash: Uint8Array
    targetNumber: number
}

export interface Precommit {
    targetHash: Uint8Array
    targetNumber: number
}

export interface V6CandidateDescriptor {
    paraId: number
    relayParent: Uint8Array
    collator: Uint8Array
    persistedValidationDataHash: Uint8Array
    povHash: Uint8Array
    erasureRoot: Uint8Array
    signature: Uint8Array
    paraHead: Uint8Array
    validationCodeHash: Uint8Array
}

export interface V6CandidateCommitments {
    upwardMessages: Uint8Array[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode: (Uint8Array | undefined)
    headData: Uint8Array
    processedDownwardMessages: number
    hrmpWatermark: number
}

export type V6ValidDisputeStatementKind = V6ValidDisputeStatementKind_Explicit | V6ValidDisputeStatementKind_BackingSeconded | V6ValidDisputeStatementKind_BackingValid | V6ValidDisputeStatementKind_ApprovalChecking

export interface V6ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export interface V6ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: Uint8Array
}

export interface V6ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: Uint8Array
}

export interface V6ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export type V6InvalidDisputeStatementKind = V6InvalidDisputeStatementKind_Explicit

export interface V6InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type V2Junction = V2Junction_Parachain | V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_PalletInstance | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_Plurality

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Uint8Array
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Uint8Array
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export interface V3PalletInfo {
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    major: number
    minor: number
    patch: number
}

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3BodyId = V3BodyId_Unit | V3BodyId_Moniker | V3BodyId_Index | V3BodyId_Executive | V3BodyId_Technical | V3BodyId_Legislative | V3BodyId_Judicial | V3BodyId_Defense | V3BodyId_Administration | V3BodyId_Treasury

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Uint8Array
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export type V3BodyPart = V3BodyPart_Voice | V3BodyPart_Members | V3BodyPart_Fraction | V3BodyPart_AtLeastProportion | V3BodyPart_MoreThanProportion

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V2AssetInstance = V2AssetInstance_Undefined | V2AssetInstance_Index | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Blob

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V3AssetInstance = V3AssetInstance_Undefined | V3AssetInstance_Index | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Array16 | V3AssetInstance_Array32

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface OutboundHrmpMessage {
    recipient: number
    data: Uint8Array
}

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Named | V2NetworkId_Polkadot | V2NetworkId_Kusama

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V2BodyId = V2BodyId_Unit | V2BodyId_Named | V2BodyId_Index | V2BodyId_Executive | V2BodyId_Technical | V2BodyId_Legislative | V2BodyId_Judicial | V2BodyId_Defense | V2BodyId_Administration | V2BodyId_Treasury

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export type V2BodyPart = V2BodyPart_Voice | V2BodyPart_Members | V2BodyPart_Fraction | V2BodyPart_AtLeastProportion | V2BodyPart_MoreThanProportion

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
