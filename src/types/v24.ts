import type {Result, Option} from './support'

export type Call = Call_System | Call_ParachainSystem | Call_Timestamp | Call_Preimage | Call_Democracy | Call_Scheduler | Call_Utility | Call_Balances | Call_Council | Call_TechnicalCommittee | Call_Treasury | Call_Authorship | Call_CollatorSelection | Call_Session | Call_Multisig | Call_TimeRelease | Call_Msa | Call_Messages | Call_Schemas

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_TimeRelease {
    __kind: 'TimeRelease'
    value: TimeReleaseCall
}

export interface Call_Msa {
    __kind: 'Msa'
    value: MsaCall
}

export interface Call_Messages {
    __kind: 'Messages'
    value: MessagesCall
}

export interface Call_Schemas {
    __kind: 'Schemas'
    value: SchemasCall
}

export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
}

export type TimestampCall = TimestampCall_set

export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Uint8Array
}

export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: Uint8Array
}

export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: Uint8Array
}

export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: Uint8Array
}

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
}

export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
}

export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
}

export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    newFree: bigint
    newReserved: bigint
}

export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close_old_weight | CouncilCall_disapprove_proposal | CouncilCall_close

export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

export interface CouncilCall_close_old_weight {
    __kind: 'close_old_weight'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close_old_weight | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_close

export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

export interface TechnicalCommitteeCall_close_old_weight {
    __kind: 'close_old_weight'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_spend | TreasuryCall_remove_approval

export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

export type AuthorshipCall = AuthorshipCall_set_uncles

export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: Uint8Array[]
}

export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
}

export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
}

export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: Weight
}

export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

export type TimeReleaseCall = TimeReleaseCall_claim | TimeReleaseCall_transfer | TimeReleaseCall_update_release_schedules | TimeReleaseCall_claim_for

export interface TimeReleaseCall_claim {
    __kind: 'claim'
}

export interface TimeReleaseCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    schedule: ReleaseSchedule
}

export interface TimeReleaseCall_update_release_schedules {
    __kind: 'update_release_schedules'
    who: MultiAddress
    releaseSchedules: ReleaseSchedule[]
}

export interface TimeReleaseCall_claim_for {
    __kind: 'claim_for'
    dest: MultiAddress
}

export type MsaCall = MsaCall_create | MsaCall_create_sponsored_account_with_delegation | MsaCall_create_provider | MsaCall_grant_delegation | MsaCall_revoke_delegation_by_delegator | MsaCall_add_public_key_to_msa | MsaCall_delete_msa_public_key | MsaCall_revoke_delegation_by_provider | MsaCall_revoke_schema_permissions | MsaCall_retire_msa | MsaCall_propose_to_be_provider | MsaCall_create_provider_via_governance

export interface MsaCall_create {
    __kind: 'create'
}

export interface MsaCall_create_sponsored_account_with_delegation {
    __kind: 'create_sponsored_account_with_delegation'
    delegatorKey: Uint8Array
    proof: MultiSignature
    addProviderPayload: AddProvider
}

export interface MsaCall_create_provider {
    __kind: 'create_provider'
    providerName: Uint8Array
}

export interface MsaCall_grant_delegation {
    __kind: 'grant_delegation'
    delegatorKey: Uint8Array
    proof: MultiSignature
    addProviderPayload: AddProvider
}

export interface MsaCall_revoke_delegation_by_delegator {
    __kind: 'revoke_delegation_by_delegator'
    providerMsaId: bigint
}

export interface MsaCall_add_public_key_to_msa {
    __kind: 'add_public_key_to_msa'
    msaOwnerPublicKey: Uint8Array
    msaOwnerProof: MultiSignature
    newKeyOwnerProof: MultiSignature
    addKeyPayload: AddKeyData
}

export interface MsaCall_delete_msa_public_key {
    __kind: 'delete_msa_public_key'
    publicKeyToDelete: Uint8Array
}

export interface MsaCall_revoke_delegation_by_provider {
    __kind: 'revoke_delegation_by_provider'
    delegator: bigint
}

export interface MsaCall_revoke_schema_permissions {
    __kind: 'revoke_schema_permissions'
    providerMsaId: bigint
    schemaIds: number[]
}

export interface MsaCall_retire_msa {
    __kind: 'retire_msa'
}

export interface MsaCall_propose_to_be_provider {
    __kind: 'propose_to_be_provider'
    providerName: Uint8Array
}

export interface MsaCall_create_provider_via_governance {
    __kind: 'create_provider_via_governance'
    providerKey: Uint8Array
    providerName: Uint8Array
}

export type MessagesCall = MessagesCall_add_ipfs_message | MessagesCall_add_onchain_message

export interface MessagesCall_add_ipfs_message {
    __kind: 'add_ipfs_message'
    schemaId: number
    cid: Uint8Array
    payloadLength: number
}

export interface MessagesCall_add_onchain_message {
    __kind: 'add_onchain_message'
    onBehalfOf: (bigint | undefined)
    schemaId: number
    payload: Uint8Array
}

export type SchemasCall = SchemasCall_create_schema | SchemasCall_set_max_schema_model_bytes | SchemasCall_propose_to_create_schema | SchemasCall_create_schema_via_governance

export interface SchemasCall_create_schema {
    __kind: 'create_schema'
    model: Uint8Array
    modelType: ModelType
    payloadLocation: PayloadLocation
}

export interface SchemasCall_set_max_schema_model_bytes {
    __kind: 'set_max_schema_model_bytes'
    maxSize: number
}

export interface SchemasCall_propose_to_create_schema {
    __kind: 'propose_to_create_schema'
    model: Uint8Array
    modelType: ModelType
    payloadLocation: PayloadLocation
}

export interface SchemasCall_create_schema_via_governance {
    __kind: 'create_schema_via_governance'
    creatorKey: Uint8Array
    model: Uint8Array
    modelType: ModelType
    payloadLocation: PayloadLocation
}

export interface ParachainInherentData {
    validationData: V2PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
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

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_138
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_139
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export interface SessionKeys {
    aura: Uint8Array
}

export interface Timepoint {
    height: number
    index: number
}

export interface ReleaseSchedule {
    start: number
    period: number
    periodCount: number
    perPeriod: bigint
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

export interface AddProvider {
    authorizedMsaId: bigint
    schemaIds: number[]
    expiration: number
}

export interface AddKeyData {
    msaId: bigint
    expiration: number
    newPublicKey: Uint8Array
}

export type ModelType = ModelType_AvroBinary | ModelType_Parquet

export interface ModelType_AvroBinary {
    __kind: 'AvroBinary'
}

export interface ModelType_Parquet {
    __kind: 'Parquet'
}

export type PayloadLocation = PayloadLocation_OnChain | PayloadLocation_IPFS

export interface PayloadLocation_OnChain {
    __kind: 'OnChain'
}

export interface PayloadLocation_IPFS {
    __kind: 'IPFS'
}

export interface V2PersistedValidationData {
    parentHead: Uint8Array
    relayParentNumber: number
    relayParentStorageRoot: Uint8Array
    maxPovSize: number
}

export interface StorageProof {
    trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Uint8Array
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Uint8Array
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

export type Type_138 = Type_138_Members | Type_138_Member | Type_138__Phantom

export interface Type_138_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_138_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_138__Phantom {
    __kind: '_Phantom'
}

export type Type_139 = Type_139_Members | Type_139_Member | Type_139__Phantom

export interface Type_139_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_139_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_139__Phantom {
    __kind: '_Phantom'
}

export type Void = never

export interface Digest {
    logs: DigestItem[]
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
