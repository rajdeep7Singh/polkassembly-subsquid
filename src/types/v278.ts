import {sts, Result, Option, Bytes, BitSequence} from './support'

export type Hash = Bytes

export type Proposal = Proposal_AuthorityDiscovery | Proposal_Authorship | Proposal_Babe | Proposal_Balances | Proposal_CereDDCModule | Proposal_ChainBridge | Proposal_Contracts | Proposal_Council | Proposal_DdcMetricsOffchainWorker | Proposal_Democracy | Proposal_Elections | Proposal_Erc20 | Proposal_Erc721 | Proposal_FinalityTracker | Proposal_Grandpa | Proposal_Identity | Proposal_ImOnline | Proposal_Indices | Proposal_Multisig | Proposal_Offences | Proposal_Proxy | Proposal_RandomnessCollectiveFlip | Proposal_Recovery | Proposal_Scheduler | Proposal_Session | Proposal_Society | Proposal_Staking | Proposal_Sudo | Proposal_System | Proposal_TechnicalCommittee | Proposal_TechnicalMembership | Proposal_Timestamp | Proposal_Treasury | Proposal_Utility | Proposal_Vesting

export interface Proposal_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Proposal_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Proposal_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_CereDDCModule {
    __kind: 'CereDDCModule'
    value: CereDDCModuleCall
}

export interface Proposal_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeCall
}

export interface Proposal_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Proposal_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Proposal_DdcMetricsOffchainWorker {
    __kind: 'DdcMetricsOffchainWorker'
    value: DdcMetricsOffchainWorkerCall
}

export interface Proposal_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Proposal_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Proposal_Erc20 {
    __kind: 'Erc20'
    value: Erc20Call
}

export interface Proposal_Erc721 {
    __kind: 'Erc721'
    value: Erc721Call
}

export interface Proposal_FinalityTracker {
    __kind: 'FinalityTracker'
    value: FinalityTrackerCall
}

export interface Proposal_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Proposal_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Proposal_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Proposal_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Proposal_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Proposal_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Proposal_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Proposal_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Proposal_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Proposal_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Proposal_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Proposal_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Proposal_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Proposal_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Proposal_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export type VestingCall = VestingCall_force_vested_transfer | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

/**
 *  Force a vested transfer.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `source`: The account whose funds should be transferred.
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 4 Reads, 4 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 *  # </weight>
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: LookupSource
    target: LookupSource
    schedule: VestingInfo
}

/**
 *  Unlock any vested funds of the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
 *  locked under this module.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 2 Reads, 2 Writes
 *      - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 *  Unlock any vested funds of a `target` account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account whose vested funds should be unlocked. Must have funds still
 *  locked under this module.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account
 *  # </weight>
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: LookupSource
}

/**
 *  Create a vested transfer.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: LookupSource
    schedule: VestingInfo
}

export interface VestingInfo {
    locked: Balance
    perBlock: Balance
    startingBlock: BlockNumber
}

export type BlockNumber = number

export type Balance = bigint

export type LookupSource = LookupSource_AccountId | LookupSource_Idx0 | LookupSource_Idx1 | LookupSource_Idx10 | LookupSource_Idx100 | LookupSource_Idx101 | LookupSource_Idx102 | LookupSource_Idx103 | LookupSource_Idx104 | LookupSource_Idx105 | LookupSource_Idx106 | LookupSource_Idx107 | LookupSource_Idx108 | LookupSource_Idx109 | LookupSource_Idx11 | LookupSource_Idx110 | LookupSource_Idx111 | LookupSource_Idx112 | LookupSource_Idx113 | LookupSource_Idx114 | LookupSource_Idx115 | LookupSource_Idx116 | LookupSource_Idx117 | LookupSource_Idx118 | LookupSource_Idx119 | LookupSource_Idx12 | LookupSource_Idx120 | LookupSource_Idx121 | LookupSource_Idx122 | LookupSource_Idx123 | LookupSource_Idx124 | LookupSource_Idx125 | LookupSource_Idx126 | LookupSource_Idx127 | LookupSource_Idx128 | LookupSource_Idx129 | LookupSource_Idx13 | LookupSource_Idx130 | LookupSource_Idx131 | LookupSource_Idx132 | LookupSource_Idx133 | LookupSource_Idx134 | LookupSource_Idx135 | LookupSource_Idx136 | LookupSource_Idx137 | LookupSource_Idx138 | LookupSource_Idx139 | LookupSource_Idx14 | LookupSource_Idx140 | LookupSource_Idx141 | LookupSource_Idx142 | LookupSource_Idx143 | LookupSource_Idx144 | LookupSource_Idx145 | LookupSource_Idx146 | LookupSource_Idx147 | LookupSource_Idx148 | LookupSource_Idx149 | LookupSource_Idx15 | LookupSource_Idx150 | LookupSource_Idx151 | LookupSource_Idx152 | LookupSource_Idx153 | LookupSource_Idx154 | LookupSource_Idx155 | LookupSource_Idx156 | LookupSource_Idx157 | LookupSource_Idx158 | LookupSource_Idx159 | LookupSource_Idx16 | LookupSource_Idx160 | LookupSource_Idx161 | LookupSource_Idx162 | LookupSource_Idx163 | LookupSource_Idx164 | LookupSource_Idx165 | LookupSource_Idx166 | LookupSource_Idx167 | LookupSource_Idx168 | LookupSource_Idx169 | LookupSource_Idx17 | LookupSource_Idx170 | LookupSource_Idx171 | LookupSource_Idx172 | LookupSource_Idx173 | LookupSource_Idx174 | LookupSource_Idx175 | LookupSource_Idx176 | LookupSource_Idx177 | LookupSource_Idx178 | LookupSource_Idx179 | LookupSource_Idx18 | LookupSource_Idx180 | LookupSource_Idx181 | LookupSource_Idx182 | LookupSource_Idx183 | LookupSource_Idx184 | LookupSource_Idx185 | LookupSource_Idx186 | LookupSource_Idx187 | LookupSource_Idx188 | LookupSource_Idx189 | LookupSource_Idx19 | LookupSource_Idx190 | LookupSource_Idx191 | LookupSource_Idx192 | LookupSource_Idx193 | LookupSource_Idx194 | LookupSource_Idx195 | LookupSource_Idx196 | LookupSource_Idx197 | LookupSource_Idx198 | LookupSource_Idx199 | LookupSource_Idx2 | LookupSource_Idx20 | LookupSource_Idx200 | LookupSource_Idx201 | LookupSource_Idx202 | LookupSource_Idx203 | LookupSource_Idx204 | LookupSource_Idx205 | LookupSource_Idx206 | LookupSource_Idx207 | LookupSource_Idx208 | LookupSource_Idx209 | LookupSource_Idx21 | LookupSource_Idx210 | LookupSource_Idx211 | LookupSource_Idx212 | LookupSource_Idx213 | LookupSource_Idx214 | LookupSource_Idx215 | LookupSource_Idx216 | LookupSource_Idx217 | LookupSource_Idx218 | LookupSource_Idx219 | LookupSource_Idx22 | LookupSource_Idx220 | LookupSource_Idx221 | LookupSource_Idx222 | LookupSource_Idx223 | LookupSource_Idx224 | LookupSource_Idx225 | LookupSource_Idx226 | LookupSource_Idx227 | LookupSource_Idx228 | LookupSource_Idx229 | LookupSource_Idx23 | LookupSource_Idx230 | LookupSource_Idx231 | LookupSource_Idx232 | LookupSource_Idx233 | LookupSource_Idx234 | LookupSource_Idx235 | LookupSource_Idx236 | LookupSource_Idx237 | LookupSource_Idx238 | LookupSource_Idx24 | LookupSource_Idx25 | LookupSource_Idx26 | LookupSource_Idx27 | LookupSource_Idx28 | LookupSource_Idx29 | LookupSource_Idx3 | LookupSource_Idx30 | LookupSource_Idx31 | LookupSource_Idx32 | LookupSource_Idx33 | LookupSource_Idx34 | LookupSource_Idx35 | LookupSource_Idx36 | LookupSource_Idx37 | LookupSource_Idx38 | LookupSource_Idx39 | LookupSource_Idx4 | LookupSource_Idx40 | LookupSource_Idx41 | LookupSource_Idx42 | LookupSource_Idx43 | LookupSource_Idx44 | LookupSource_Idx45 | LookupSource_Idx46 | LookupSource_Idx47 | LookupSource_Idx48 | LookupSource_Idx49 | LookupSource_Idx5 | LookupSource_Idx50 | LookupSource_Idx51 | LookupSource_Idx52 | LookupSource_Idx53 | LookupSource_Idx54 | LookupSource_Idx55 | LookupSource_Idx56 | LookupSource_Idx57 | LookupSource_Idx58 | LookupSource_Idx59 | LookupSource_Idx6 | LookupSource_Idx60 | LookupSource_Idx61 | LookupSource_Idx62 | LookupSource_Idx63 | LookupSource_Idx64 | LookupSource_Idx65 | LookupSource_Idx66 | LookupSource_Idx67 | LookupSource_Idx68 | LookupSource_Idx69 | LookupSource_Idx7 | LookupSource_Idx70 | LookupSource_Idx71 | LookupSource_Idx72 | LookupSource_Idx73 | LookupSource_Idx74 | LookupSource_Idx75 | LookupSource_Idx76 | LookupSource_Idx77 | LookupSource_Idx78 | LookupSource_Idx79 | LookupSource_Idx8 | LookupSource_Idx80 | LookupSource_Idx81 | LookupSource_Idx82 | LookupSource_Idx83 | LookupSource_Idx84 | LookupSource_Idx85 | LookupSource_Idx86 | LookupSource_Idx87 | LookupSource_Idx88 | LookupSource_Idx89 | LookupSource_Idx9 | LookupSource_Idx90 | LookupSource_Idx91 | LookupSource_Idx92 | LookupSource_Idx93 | LookupSource_Idx94 | LookupSource_Idx95 | LookupSource_Idx96 | LookupSource_Idx97 | LookupSource_Idx98 | LookupSource_Idx99 | LookupSource_IdxU16 | LookupSource_IdxU32 | LookupSource_IdxU64

export interface LookupSource_AccountId {
    __kind: 'AccountId'
    value: AccountId
}

export interface LookupSource_Idx0 {
    __kind: 'Idx0'
}

export interface LookupSource_Idx1 {
    __kind: 'Idx1'
}

export interface LookupSource_Idx10 {
    __kind: 'Idx10'
}

export interface LookupSource_Idx100 {
    __kind: 'Idx100'
}

export interface LookupSource_Idx101 {
    __kind: 'Idx101'
}

export interface LookupSource_Idx102 {
    __kind: 'Idx102'
}

export interface LookupSource_Idx103 {
    __kind: 'Idx103'
}

export interface LookupSource_Idx104 {
    __kind: 'Idx104'
}

export interface LookupSource_Idx105 {
    __kind: 'Idx105'
}

export interface LookupSource_Idx106 {
    __kind: 'Idx106'
}

export interface LookupSource_Idx107 {
    __kind: 'Idx107'
}

export interface LookupSource_Idx108 {
    __kind: 'Idx108'
}

export interface LookupSource_Idx109 {
    __kind: 'Idx109'
}

export interface LookupSource_Idx11 {
    __kind: 'Idx11'
}

export interface LookupSource_Idx110 {
    __kind: 'Idx110'
}

export interface LookupSource_Idx111 {
    __kind: 'Idx111'
}

export interface LookupSource_Idx112 {
    __kind: 'Idx112'
}

export interface LookupSource_Idx113 {
    __kind: 'Idx113'
}

export interface LookupSource_Idx114 {
    __kind: 'Idx114'
}

export interface LookupSource_Idx115 {
    __kind: 'Idx115'
}

export interface LookupSource_Idx116 {
    __kind: 'Idx116'
}

export interface LookupSource_Idx117 {
    __kind: 'Idx117'
}

export interface LookupSource_Idx118 {
    __kind: 'Idx118'
}

export interface LookupSource_Idx119 {
    __kind: 'Idx119'
}

export interface LookupSource_Idx12 {
    __kind: 'Idx12'
}

export interface LookupSource_Idx120 {
    __kind: 'Idx120'
}

export interface LookupSource_Idx121 {
    __kind: 'Idx121'
}

export interface LookupSource_Idx122 {
    __kind: 'Idx122'
}

export interface LookupSource_Idx123 {
    __kind: 'Idx123'
}

export interface LookupSource_Idx124 {
    __kind: 'Idx124'
}

export interface LookupSource_Idx125 {
    __kind: 'Idx125'
}

export interface LookupSource_Idx126 {
    __kind: 'Idx126'
}

export interface LookupSource_Idx127 {
    __kind: 'Idx127'
}

export interface LookupSource_Idx128 {
    __kind: 'Idx128'
}

export interface LookupSource_Idx129 {
    __kind: 'Idx129'
}

export interface LookupSource_Idx13 {
    __kind: 'Idx13'
}

export interface LookupSource_Idx130 {
    __kind: 'Idx130'
}

export interface LookupSource_Idx131 {
    __kind: 'Idx131'
}

export interface LookupSource_Idx132 {
    __kind: 'Idx132'
}

export interface LookupSource_Idx133 {
    __kind: 'Idx133'
}

export interface LookupSource_Idx134 {
    __kind: 'Idx134'
}

export interface LookupSource_Idx135 {
    __kind: 'Idx135'
}

export interface LookupSource_Idx136 {
    __kind: 'Idx136'
}

export interface LookupSource_Idx137 {
    __kind: 'Idx137'
}

export interface LookupSource_Idx138 {
    __kind: 'Idx138'
}

export interface LookupSource_Idx139 {
    __kind: 'Idx139'
}

export interface LookupSource_Idx14 {
    __kind: 'Idx14'
}

export interface LookupSource_Idx140 {
    __kind: 'Idx140'
}

export interface LookupSource_Idx141 {
    __kind: 'Idx141'
}

export interface LookupSource_Idx142 {
    __kind: 'Idx142'
}

export interface LookupSource_Idx143 {
    __kind: 'Idx143'
}

export interface LookupSource_Idx144 {
    __kind: 'Idx144'
}

export interface LookupSource_Idx145 {
    __kind: 'Idx145'
}

export interface LookupSource_Idx146 {
    __kind: 'Idx146'
}

export interface LookupSource_Idx147 {
    __kind: 'Idx147'
}

export interface LookupSource_Idx148 {
    __kind: 'Idx148'
}

export interface LookupSource_Idx149 {
    __kind: 'Idx149'
}

export interface LookupSource_Idx15 {
    __kind: 'Idx15'
}

export interface LookupSource_Idx150 {
    __kind: 'Idx150'
}

export interface LookupSource_Idx151 {
    __kind: 'Idx151'
}

export interface LookupSource_Idx152 {
    __kind: 'Idx152'
}

export interface LookupSource_Idx153 {
    __kind: 'Idx153'
}

export interface LookupSource_Idx154 {
    __kind: 'Idx154'
}

export interface LookupSource_Idx155 {
    __kind: 'Idx155'
}

export interface LookupSource_Idx156 {
    __kind: 'Idx156'
}

export interface LookupSource_Idx157 {
    __kind: 'Idx157'
}

export interface LookupSource_Idx158 {
    __kind: 'Idx158'
}

export interface LookupSource_Idx159 {
    __kind: 'Idx159'
}

export interface LookupSource_Idx16 {
    __kind: 'Idx16'
}

export interface LookupSource_Idx160 {
    __kind: 'Idx160'
}

export interface LookupSource_Idx161 {
    __kind: 'Idx161'
}

export interface LookupSource_Idx162 {
    __kind: 'Idx162'
}

export interface LookupSource_Idx163 {
    __kind: 'Idx163'
}

export interface LookupSource_Idx164 {
    __kind: 'Idx164'
}

export interface LookupSource_Idx165 {
    __kind: 'Idx165'
}

export interface LookupSource_Idx166 {
    __kind: 'Idx166'
}

export interface LookupSource_Idx167 {
    __kind: 'Idx167'
}

export interface LookupSource_Idx168 {
    __kind: 'Idx168'
}

export interface LookupSource_Idx169 {
    __kind: 'Idx169'
}

export interface LookupSource_Idx17 {
    __kind: 'Idx17'
}

export interface LookupSource_Idx170 {
    __kind: 'Idx170'
}

export interface LookupSource_Idx171 {
    __kind: 'Idx171'
}

export interface LookupSource_Idx172 {
    __kind: 'Idx172'
}

export interface LookupSource_Idx173 {
    __kind: 'Idx173'
}

export interface LookupSource_Idx174 {
    __kind: 'Idx174'
}

export interface LookupSource_Idx175 {
    __kind: 'Idx175'
}

export interface LookupSource_Idx176 {
    __kind: 'Idx176'
}

export interface LookupSource_Idx177 {
    __kind: 'Idx177'
}

export interface LookupSource_Idx178 {
    __kind: 'Idx178'
}

export interface LookupSource_Idx179 {
    __kind: 'Idx179'
}

export interface LookupSource_Idx18 {
    __kind: 'Idx18'
}

export interface LookupSource_Idx180 {
    __kind: 'Idx180'
}

export interface LookupSource_Idx181 {
    __kind: 'Idx181'
}

export interface LookupSource_Idx182 {
    __kind: 'Idx182'
}

export interface LookupSource_Idx183 {
    __kind: 'Idx183'
}

export interface LookupSource_Idx184 {
    __kind: 'Idx184'
}

export interface LookupSource_Idx185 {
    __kind: 'Idx185'
}

export interface LookupSource_Idx186 {
    __kind: 'Idx186'
}

export interface LookupSource_Idx187 {
    __kind: 'Idx187'
}

export interface LookupSource_Idx188 {
    __kind: 'Idx188'
}

export interface LookupSource_Idx189 {
    __kind: 'Idx189'
}

export interface LookupSource_Idx19 {
    __kind: 'Idx19'
}

export interface LookupSource_Idx190 {
    __kind: 'Idx190'
}

export interface LookupSource_Idx191 {
    __kind: 'Idx191'
}

export interface LookupSource_Idx192 {
    __kind: 'Idx192'
}

export interface LookupSource_Idx193 {
    __kind: 'Idx193'
}

export interface LookupSource_Idx194 {
    __kind: 'Idx194'
}

export interface LookupSource_Idx195 {
    __kind: 'Idx195'
}

export interface LookupSource_Idx196 {
    __kind: 'Idx196'
}

export interface LookupSource_Idx197 {
    __kind: 'Idx197'
}

export interface LookupSource_Idx198 {
    __kind: 'Idx198'
}

export interface LookupSource_Idx199 {
    __kind: 'Idx199'
}

export interface LookupSource_Idx2 {
    __kind: 'Idx2'
}

export interface LookupSource_Idx20 {
    __kind: 'Idx20'
}

export interface LookupSource_Idx200 {
    __kind: 'Idx200'
}

export interface LookupSource_Idx201 {
    __kind: 'Idx201'
}

export interface LookupSource_Idx202 {
    __kind: 'Idx202'
}

export interface LookupSource_Idx203 {
    __kind: 'Idx203'
}

export interface LookupSource_Idx204 {
    __kind: 'Idx204'
}

export interface LookupSource_Idx205 {
    __kind: 'Idx205'
}

export interface LookupSource_Idx206 {
    __kind: 'Idx206'
}

export interface LookupSource_Idx207 {
    __kind: 'Idx207'
}

export interface LookupSource_Idx208 {
    __kind: 'Idx208'
}

export interface LookupSource_Idx209 {
    __kind: 'Idx209'
}

export interface LookupSource_Idx21 {
    __kind: 'Idx21'
}

export interface LookupSource_Idx210 {
    __kind: 'Idx210'
}

export interface LookupSource_Idx211 {
    __kind: 'Idx211'
}

export interface LookupSource_Idx212 {
    __kind: 'Idx212'
}

export interface LookupSource_Idx213 {
    __kind: 'Idx213'
}

export interface LookupSource_Idx214 {
    __kind: 'Idx214'
}

export interface LookupSource_Idx215 {
    __kind: 'Idx215'
}

export interface LookupSource_Idx216 {
    __kind: 'Idx216'
}

export interface LookupSource_Idx217 {
    __kind: 'Idx217'
}

export interface LookupSource_Idx218 {
    __kind: 'Idx218'
}

export interface LookupSource_Idx219 {
    __kind: 'Idx219'
}

export interface LookupSource_Idx22 {
    __kind: 'Idx22'
}

export interface LookupSource_Idx220 {
    __kind: 'Idx220'
}

export interface LookupSource_Idx221 {
    __kind: 'Idx221'
}

export interface LookupSource_Idx222 {
    __kind: 'Idx222'
}

export interface LookupSource_Idx223 {
    __kind: 'Idx223'
}

export interface LookupSource_Idx224 {
    __kind: 'Idx224'
}

export interface LookupSource_Idx225 {
    __kind: 'Idx225'
}

export interface LookupSource_Idx226 {
    __kind: 'Idx226'
}

export interface LookupSource_Idx227 {
    __kind: 'Idx227'
}

export interface LookupSource_Idx228 {
    __kind: 'Idx228'
}

export interface LookupSource_Idx229 {
    __kind: 'Idx229'
}

export interface LookupSource_Idx23 {
    __kind: 'Idx23'
}

export interface LookupSource_Idx230 {
    __kind: 'Idx230'
}

export interface LookupSource_Idx231 {
    __kind: 'Idx231'
}

export interface LookupSource_Idx232 {
    __kind: 'Idx232'
}

export interface LookupSource_Idx233 {
    __kind: 'Idx233'
}

export interface LookupSource_Idx234 {
    __kind: 'Idx234'
}

export interface LookupSource_Idx235 {
    __kind: 'Idx235'
}

export interface LookupSource_Idx236 {
    __kind: 'Idx236'
}

export interface LookupSource_Idx237 {
    __kind: 'Idx237'
}

export interface LookupSource_Idx238 {
    __kind: 'Idx238'
}

export interface LookupSource_Idx24 {
    __kind: 'Idx24'
}

export interface LookupSource_Idx25 {
    __kind: 'Idx25'
}

export interface LookupSource_Idx26 {
    __kind: 'Idx26'
}

export interface LookupSource_Idx27 {
    __kind: 'Idx27'
}

export interface LookupSource_Idx28 {
    __kind: 'Idx28'
}

export interface LookupSource_Idx29 {
    __kind: 'Idx29'
}

export interface LookupSource_Idx3 {
    __kind: 'Idx3'
}

export interface LookupSource_Idx30 {
    __kind: 'Idx30'
}

export interface LookupSource_Idx31 {
    __kind: 'Idx31'
}

export interface LookupSource_Idx32 {
    __kind: 'Idx32'
}

export interface LookupSource_Idx33 {
    __kind: 'Idx33'
}

export interface LookupSource_Idx34 {
    __kind: 'Idx34'
}

export interface LookupSource_Idx35 {
    __kind: 'Idx35'
}

export interface LookupSource_Idx36 {
    __kind: 'Idx36'
}

export interface LookupSource_Idx37 {
    __kind: 'Idx37'
}

export interface LookupSource_Idx38 {
    __kind: 'Idx38'
}

export interface LookupSource_Idx39 {
    __kind: 'Idx39'
}

export interface LookupSource_Idx4 {
    __kind: 'Idx4'
}

export interface LookupSource_Idx40 {
    __kind: 'Idx40'
}

export interface LookupSource_Idx41 {
    __kind: 'Idx41'
}

export interface LookupSource_Idx42 {
    __kind: 'Idx42'
}

export interface LookupSource_Idx43 {
    __kind: 'Idx43'
}

export interface LookupSource_Idx44 {
    __kind: 'Idx44'
}

export interface LookupSource_Idx45 {
    __kind: 'Idx45'
}

export interface LookupSource_Idx46 {
    __kind: 'Idx46'
}

export interface LookupSource_Idx47 {
    __kind: 'Idx47'
}

export interface LookupSource_Idx48 {
    __kind: 'Idx48'
}

export interface LookupSource_Idx49 {
    __kind: 'Idx49'
}

export interface LookupSource_Idx5 {
    __kind: 'Idx5'
}

export interface LookupSource_Idx50 {
    __kind: 'Idx50'
}

export interface LookupSource_Idx51 {
    __kind: 'Idx51'
}

export interface LookupSource_Idx52 {
    __kind: 'Idx52'
}

export interface LookupSource_Idx53 {
    __kind: 'Idx53'
}

export interface LookupSource_Idx54 {
    __kind: 'Idx54'
}

export interface LookupSource_Idx55 {
    __kind: 'Idx55'
}

export interface LookupSource_Idx56 {
    __kind: 'Idx56'
}

export interface LookupSource_Idx57 {
    __kind: 'Idx57'
}

export interface LookupSource_Idx58 {
    __kind: 'Idx58'
}

export interface LookupSource_Idx59 {
    __kind: 'Idx59'
}

export interface LookupSource_Idx6 {
    __kind: 'Idx6'
}

export interface LookupSource_Idx60 {
    __kind: 'Idx60'
}

export interface LookupSource_Idx61 {
    __kind: 'Idx61'
}

export interface LookupSource_Idx62 {
    __kind: 'Idx62'
}

export interface LookupSource_Idx63 {
    __kind: 'Idx63'
}

export interface LookupSource_Idx64 {
    __kind: 'Idx64'
}

export interface LookupSource_Idx65 {
    __kind: 'Idx65'
}

export interface LookupSource_Idx66 {
    __kind: 'Idx66'
}

export interface LookupSource_Idx67 {
    __kind: 'Idx67'
}

export interface LookupSource_Idx68 {
    __kind: 'Idx68'
}

export interface LookupSource_Idx69 {
    __kind: 'Idx69'
}

export interface LookupSource_Idx7 {
    __kind: 'Idx7'
}

export interface LookupSource_Idx70 {
    __kind: 'Idx70'
}

export interface LookupSource_Idx71 {
    __kind: 'Idx71'
}

export interface LookupSource_Idx72 {
    __kind: 'Idx72'
}

export interface LookupSource_Idx73 {
    __kind: 'Idx73'
}

export interface LookupSource_Idx74 {
    __kind: 'Idx74'
}

export interface LookupSource_Idx75 {
    __kind: 'Idx75'
}

export interface LookupSource_Idx76 {
    __kind: 'Idx76'
}

export interface LookupSource_Idx77 {
    __kind: 'Idx77'
}

export interface LookupSource_Idx78 {
    __kind: 'Idx78'
}

export interface LookupSource_Idx79 {
    __kind: 'Idx79'
}

export interface LookupSource_Idx8 {
    __kind: 'Idx8'
}

export interface LookupSource_Idx80 {
    __kind: 'Idx80'
}

export interface LookupSource_Idx81 {
    __kind: 'Idx81'
}

export interface LookupSource_Idx82 {
    __kind: 'Idx82'
}

export interface LookupSource_Idx83 {
    __kind: 'Idx83'
}

export interface LookupSource_Idx84 {
    __kind: 'Idx84'
}

export interface LookupSource_Idx85 {
    __kind: 'Idx85'
}

export interface LookupSource_Idx86 {
    __kind: 'Idx86'
}

export interface LookupSource_Idx87 {
    __kind: 'Idx87'
}

export interface LookupSource_Idx88 {
    __kind: 'Idx88'
}

export interface LookupSource_Idx89 {
    __kind: 'Idx89'
}

export interface LookupSource_Idx9 {
    __kind: 'Idx9'
}

export interface LookupSource_Idx90 {
    __kind: 'Idx90'
}

export interface LookupSource_Idx91 {
    __kind: 'Idx91'
}

export interface LookupSource_Idx92 {
    __kind: 'Idx92'
}

export interface LookupSource_Idx93 {
    __kind: 'Idx93'
}

export interface LookupSource_Idx94 {
    __kind: 'Idx94'
}

export interface LookupSource_Idx95 {
    __kind: 'Idx95'
}

export interface LookupSource_Idx96 {
    __kind: 'Idx96'
}

export interface LookupSource_Idx97 {
    __kind: 'Idx97'
}

export interface LookupSource_Idx98 {
    __kind: 'Idx98'
}

export interface LookupSource_Idx99 {
    __kind: 'Idx99'
}

export interface LookupSource_IdxU16 {
    __kind: 'IdxU16'
    value: number
}

export interface LookupSource_IdxU32 {
    __kind: 'IdxU32'
    value: number
}

export interface LookupSource_IdxU64 {
    __kind: 'IdxU64'
    value: bigint
}

export type AccountId = Bytes

export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Type_42
}

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Trait::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Base weight: 14.39 + .987 * c µs
 *  - Plus the sum of the weights of the `calls`.
 *  - Plus one additional event. (repeat read/write)
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Type_42[]
}

export type Type_42 = Type_42_AuthorityDiscovery | Type_42_Authorship | Type_42_Babe | Type_42_Balances | Type_42_CereDDCModule | Type_42_ChainBridge | Type_42_Contracts | Type_42_Council | Type_42_DdcMetricsOffchainWorker | Type_42_Democracy | Type_42_Elections | Type_42_Erc20 | Type_42_Erc721 | Type_42_FinalityTracker | Type_42_Grandpa | Type_42_Identity | Type_42_ImOnline | Type_42_Indices | Type_42_Multisig | Type_42_Offences | Type_42_Proxy | Type_42_RandomnessCollectiveFlip | Type_42_Recovery | Type_42_Scheduler | Type_42_Session | Type_42_Society | Type_42_Staking | Type_42_Sudo | Type_42_System | Type_42_TechnicalCommittee | Type_42_TechnicalMembership | Type_42_Timestamp | Type_42_Treasury | Type_42_Utility | Type_42_Vesting

export interface Type_42_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Type_42_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_42_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Type_42_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_42_CereDDCModule {
    __kind: 'CereDDCModule'
    value: CereDDCModuleCall
}

export interface Type_42_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeCall
}

export interface Type_42_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Type_42_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Type_42_DdcMetricsOffchainWorker {
    __kind: 'DdcMetricsOffchainWorker'
    value: DdcMetricsOffchainWorkerCall
}

export interface Type_42_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Type_42_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Type_42_Erc20 {
    __kind: 'Erc20'
    value: Erc20Call
}

export interface Type_42_Erc721 {
    __kind: 'Erc721'
    value: Erc721Call
}

export interface Type_42_FinalityTracker {
    __kind: 'FinalityTracker'
    value: FinalityTrackerCall
}

export interface Type_42_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Type_42_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Type_42_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Type_42_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Type_42_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Type_42_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Type_42_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Type_42_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Type_42_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Type_42_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Type_42_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_42_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Type_42_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Type_42_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Type_42_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_42_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Type_42_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Type_42_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_42_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Type_42_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_42_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export type TreasuryCall = TreasuryCall_accept_curator | TreasuryCall_approve_bounty | TreasuryCall_approve_proposal | TreasuryCall_award_bounty | TreasuryCall_claim_bounty | TreasuryCall_close_bounty | TreasuryCall_close_tip | TreasuryCall_extend_bounty_expiry | TreasuryCall_propose_bounty | TreasuryCall_propose_curator | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_report_awesome | TreasuryCall_retract_tip | TreasuryCall_tip | TreasuryCall_tip_new | TreasuryCall_unassign_curator

/**
 *  Accept the curator role for a bounty.
 *  A deposit will be reserved from curator and refund upon successful payout.
 * 
 *  May only be called from the curator.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface TreasuryCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface TreasuryCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1).
 *  - DbReads: `Proposals`, `Approvals`
 *  - DbWrite: `Approvals`
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to award.
 *  - `beneficiary`: The beneficiary account whom will receive the payout.
 */
export interface TreasuryCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: LookupSource
}

/**
 *  Claim the payout from an awarded bounty after payout delay.
 * 
 *  The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to claim.
 */
export interface TreasuryCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
 *  the curator deposit will be unreserved if possible.
 * 
 *  Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 *  - `bounty_id`: Bounty ID to cancel.
 */
export interface TreasuryCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 *  Close and payout a tip.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  The tip identified by `hash` must have finished its countdown period.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`.
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  - DbReads: `Tips`, `Tippers`, `tip finder`
 *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 *  # </weight>
 */
export interface TreasuryCall_close_tip {
    __kind: 'close_tip'
    hash: Hash
}

/**
 *  Extend the expiry time of an active bounty.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to extend.
 *  - `remark`: additional information.
 */
export interface TreasuryCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 *  Propose a new bounty.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 *  or slashed when rejected.
 * 
 *  - `curator`: The curator account whom will manage this bounty.
 *  - `fee`: The curator fee.
 *  - `value`: The total payment amount of this bounty, curator fee included.
 *  - `description`: The description of this bounty.
 */
export interface TreasuryCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 *  Assign a curator to a funded bounty.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface TreasuryCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: LookupSource
    fee: bigint
}

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `ProposalCount`, `origin account`
 *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: LookupSource
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `Proposals`, `rejected proposer account`
 *  - DbWrites: `Proposals`, `rejected proposer account`
 *  # </weight>
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where `R` length of `reason`.
 *    - encoding and hashing of 'reason'
 *  - DbReads: `Reasons`, `Tips`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TreasuryCall_report_awesome {
    __kind: 'report_awesome'
    reason: Bytes
    who: AccountId
}

/**
 *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 *  If successful, the original deposit will be unreserved.
 * 
 *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 *  must have been reported by the signing account through `report_awesome` (and not
 *  through `tip_new`).
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  Emits `TipRetracted` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    - Depends on the length of `T::Hash` which is fixed.
 *  - DbReads: `Tips`, `origin account`
 *  - DbWrites: `Reasons`, `Tips`, `origin account`
 *  # </weight>
 */
export interface TreasuryCall_retract_tip {
    __kind: 'retract_tip'
    hash: Hash
}

/**
 *  Declare a tip value for an already-open tip.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *    account ID.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 *  has started.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`, insert tip and check closing,
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 * 
 *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *    is weighted as if almost full i.e of length `T-1`.
 *  - DbReads: `Tippers`, `Tips`
 *  - DbWrites: `Tips`
 *  # </weight>
 */
export interface TreasuryCall_tip {
    __kind: 'tip'
    hash: Hash
    tipValue: bigint
}

/**
 *  Give a tip for something new; no finder's fee will be taken.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *    - `O(T)`: decoding `Tipper` vec of length `T`
 *      `T` is charged as upper bound given by `ContainsLengthBound`.
 *      The actual cost depends on the implementation of `T::Tippers`.
 *    - `O(R)`: hashing and encoding of reason of length `R`
 *  - DbReads: `Tippers`, `Reasons`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TreasuryCall_tip_new {
    __kind: 'tip_new'
    reason: Bytes
    who: AccountId
    tipValue: bigint
}

/**
 *  Unassign curator from a bounty.
 * 
 *  This function can only be called by the `RejectOrigin` a signed origin.
 * 
 *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
 *  or inactive. As a result, we will slash the curator when possible.
 * 
 *  If the origin is the curator, we take this as a sign they are unable to do their job and
 *  they willingly give up. We could slash them, but for now we allow them to recover their
 *  deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 *  anyone in the community to call out that a curator is not doing their due diligence, and
 *  we should pick a new curator. In this case the curator should also be slashed.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface TreasuryCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(T)` where `T` complexity of `on_timestamp_set`
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set` `O(T)`.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: AccountId
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId[]
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: AccountId
    add: AccountId
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Hash
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Hash
    index: number
    approve: boolean
}

export type MemberCount = number

export type SystemCall = SystemCall_fill_block | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_set_changes_trie_config | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage | SystemCall_suicide

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: Perbill
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Key
    subkeys: number
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Key[]
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - Base Weight: 0.665 µs, independent of remark length.
 *  - No DB operations.
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig?: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: KeyValue[]
}

/**
 *  Kill the sending account, assuming there are no references outstanding and the composite
 *  data is equal to its default value.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage read and deletion.
 *  --------------------
 *  Base Weight: 8.626 µs
 *  No DB Read or Write operations because caller is already in overlay
 *  # </weight>
 */
export interface SystemCall_suicide {
    __kind: 'suicide'
}

export type KeyValue = [StorageKey, StorageData]

export type StorageData = Bytes

export type StorageKey = Bytes

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export type Key = Bytes

export type Perbill = number

export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: LookupSource
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Type_42
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
 *  a given account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: LookupSource
    call: Type_42
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 *  This function does not check the weight of the call, and instead allows the
 *  Sudo user to specify the weight of the call.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - The weight of this call is defined by the caller.
 *  # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Type_42
    weight: Weight
}

export type Weight = bigint

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_history_depth | StakingCall_set_invulnerables | StakingCall_set_payee | StakingCall_set_validator_count | StakingCall_submit_election_solution | StakingCall_submit_election_solution_unsigned | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
 *  ------------------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
 *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: LookupSource
    value: bigint
    payee: RewardDestination
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
 *  that can be added.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
 *  it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  - One DB entry.
 *  ------------
 *  DB Weight:
 *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
 *  - Write: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 *  Cancel enactment of a deferred slash.
 * 
 *  Can be called by the `T::SlashCancelOrigin`.
 * 
 *  Parameters: era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  Complexity: O(U + S)
 *  with U unapplied slashes weighted with U=1000
 *  and S is the number of slash indices to be canceled.
 *  - Read: Unapplied Slashes
 *  - Write: Unapplied Slashes
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: EraIndex
    slashIndices: number[]
}

/**
 *  Declare no desire to either validate or nominate.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  --------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger
 *  - Write: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  O(S) where S is the number of slashing spans to be removed
 *  Reads: Bonded, Slashing Spans, Account, Locks
 *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
 *  Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId
    numSlashingSpans: number
}

/**
 *  Increments the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 *  Declare the desire to nominate `targets` for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era. This can only be called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `targets` (N)
 *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
 *  - Both the reads and writes follow a similar pattern.
 *  ---------
 *  Weight: O(N)
 *  where N is the number of targets
 *  DB Weight:
 *  - Reads: Era Election Status, Ledger, Current Era
 *  - Writes: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: LookupSource[]
}

/**
 *  Pay out all the stakers behind a single validator for a single era.
 * 
 *  - `validator_stash` is the stash account of the validator. Their nominators, up to
 *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 *  - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 *  The origin of this call must be _Signed_. Any account can call this function, even if
 *  it is not one of the stakers.
 * 
 *  This can only be called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
 *  - Contains a limited number of reads and writes.
 *  -----------
 *  N is the Number of payouts for the validator (including the validator)
 *  Weight:
 *  - Reward Destination Staked: O(N)
 *  - Reward Destination Controller (Creating): O(N)
 *  DB Weight:
 *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
 *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
 *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
 *  - Write Each: System Account, Locks, Ledger (3 items)
 * 
 *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
 *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
 *  # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId
    era: EraIndex
}

/**
 *  Remove all data structure concerning a staker/stash once its balance is zero.
 *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
 *  and the target `stash` must have no funds left.
 * 
 *  This can be called from any origin.
 * 
 *  - `stash`: The stash account to reap. Its balance must be zero.
 * 
 *  # <weight>
 *  Complexity: O(S) where S is the number of slashing spans on the account.
 *  DB Weight:
 *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
 *  - Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId
    numSlashingSpans: number
}

/**
 *  Rebond a portion of the stash scheduled to be unlocked.
 * 
 *  The dispatch origin must be signed by the controller, and it can be only called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: O(L), where L is unlocking chunks
 *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
 *  - Storage changes: Can't increase storage, only decrease it.
 *  ---------------
 *  - DB Weight:
 *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
 *      - Writes: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 *  Scale up the ideal number of validators by a factor.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 *  (Re-)set the controller of a stash.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
 *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
 *  # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: LookupSource
}

/**
 *  Set `HistoryDepth` value. This function will delete any history information
 *  when `HistoryDepth` is reduced.
 * 
 *  Parameters:
 *  - `new_history_depth`: The new history depth you would like to set.
 *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
 *     This should report all the storage items that will be deleted by clearing old
 *     era history. Needed to report an accurate weight for the dispatch. Trusted by
 *     `Root` to report an accurate number.
 * 
 *  Origin must be root.
 * 
 *  # <weight>
 *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
 *  - Weight: O(E)
 *  - DB Weight:
 *      - Reads: Current Era, History Depth
 *      - Writes: History Depth
 *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
 *  # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
}

/**
 *  Set the validators who cannot be slashed (if any).
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - O(V)
 *  - Write: Invulnerables
 *  # </weight>
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId[]
}

/**
 *  (Re-)set the payment target for a controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ---------
 *  - Weight: O(1)
 *  - DB Weight:
 *      - Read: Ledger
 *      - Write: Payee
 *  # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 *  Sets the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  Write: Validator Count
 *  # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 *  Submit an election result to the chain. If the solution:
 * 
 *  1. is valid.
 *  2. has a better score than a potentially existing solution on chain.
 * 
 *  then, it will be _put_ on chain.
 * 
 *  A solution consists of two pieces of data:
 * 
 *  1. `winners`: a flat vector of all the winners of the round.
 *  2. `assignments`: the compact version of an assignment vector that encodes the edge
 *     weights.
 * 
 *  Both of which may be computed using _phragmen_, or any other algorithm.
 * 
 *  Additionally, the submitter must provide:
 * 
 *  - The `score` that they claim their solution has.
 * 
 *  Both validators and nominators will be represented by indices in the solution. The
 *  indices should respect the corresponding types ([`ValidatorIndex`] and
 *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
 *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
 *  solution to be rejected. These two storage items are set during the election window and
 *  may be used to determine the indices.
 * 
 *  A solution is valid if:
 * 
 *  0. It is submitted when [`EraElectionStatus`] is `Open`.
 *  1. Its claimed score is equal to the score computed on-chain.
 *  2. Presents the correct number of winners.
 *  3. All indexes must be value according to the snapshot vectors. All edge values must
 *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
 *     or billion).
 *  4. For each edge, all targets are actually nominated by the voter.
 *  5. Has correct self-votes.
 * 
 *  A solutions score is consisted of 3 parameters:
 * 
 *  1. `min { support.total }` for each support of a winner. This value should be maximized.
 *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
 *  3. `sum { support.total^2 }` for each support of a winner. This value should be
 *     minimized (to ensure less variance)
 * 
 *  # <weight>
 *  The transaction is assumed to be the longest path, a better solution.
 *    - Initial solution is almost the same.
 *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
 *  # </weight>
 */
export interface StakingCall_submit_election_solution {
    __kind: 'submit_election_solution'
    winners: ValidatorIndex[]
    compact: CompactAssignments
    score: ElectionScore
    era: EraIndex
    size: ElectionSize
}

/**
 *  Unsigned version of `submit_election_solution`.
 * 
 *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
 *  from the local node to be included. In other words, only the block author can include a
 *  transaction in the block.
 * 
 *  # <weight>
 *  See `crate::weight` module.
 *  # </weight>
 */
export interface StakingCall_submit_election_solution_unsigned {
    __kind: 'submit_election_solution_unsigned'
    winners: ValidatorIndex[]
    compact: CompactAssignments
    score: ElectionScore
    era: EraIndex
    size: ElectionSize
}

/**
 *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *  period ends. If this leaves an amount actively bonded less than
 *  T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *  the funds out of management ready for transfer.
 * 
 *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 *  to be called first to remove some of the chunks (if possible).
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Unbonded`.
 * 
 *  See also [`Call::withdraw_unbonded`].
 * 
 *  # <weight>
 *  - Independent of the arguments. Limited but potentially exploitable complexity.
 *  - Contains a limited number of reads.
 *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
 *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
 *    The only way to clean the aforementioned storage item is also user-controlled via
 *    `withdraw_unbonded`.
 *  - One DB entry.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
 *  - Write: Locks, Ledger, BalanceOf Stash,
 *  </weight>
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 *  Declare the desire to validate for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  -----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Era Election Status, Ledger
 *  - Write: Nominators, Validators
 *  # </weight>
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Withdrawn`.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
 *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
 *   indirectly user-controlled. See [`unbond`] for more detail.
 *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
 *  - Writes are limited to the `origin` account key.
 *  ---------------
 *  Complexity O(S) where S is the number of slashing spans to remove
 *  Update:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
 *  - Writes: [Origin Account], Locks, Ledger
 *  Kill:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
 *    Account], Locks, BalanceOf stash
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
 *    [Origin Account], Locks, BalanceOf stash.
 *  - Writes Each: SpanSlash * S
 *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

export interface ValidatorPrefs {
    commission: number
}

export interface ElectionSize {
    validators: number
    nominators: number
}

export type ElectionScore = bigint[]

export interface CompactAssignments {
    votes1: [NominatorIndexCompact, ValidatorIndexCompact][]
    votes2: [NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact][]
    votes3: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes4: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes5: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes6: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes7: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes8: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes9: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes10: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes11: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes12: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes13: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes14: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes15: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes16: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
}

export type CompactScoreCompact = [ValidatorIndexCompact, OffchainAccuracyCompact]

export type OffchainAccuracyCompact = number

export type ValidatorIndexCompact = number

export type NominatorIndexCompact = number

export type ValidatorIndex = number

export type Percent = number

export type EraIndex = number

export type RewardDestination = RewardDestination_Account | RewardDestination_Controller | RewardDestination_None | RewardDestination_Staked | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export type SocietyCall = SocietyCall_bid | SocietyCall_defender_vote | SocietyCall_found | SocietyCall_judge_suspended_candidate | SocietyCall_judge_suspended_member | SocietyCall_payout | SocietyCall_set_max_members | SocietyCall_unbid | SocietyCall_unfound | SocietyCall_unvouch | SocietyCall_vote | SocietyCall_vouch

/**
 *  A user outside of the society can make a bid for entry.
 * 
 *  Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
 *  when the bid becomes a member, or if the bid calls `unbid`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `value`: A one time payment the bid would like to receive when joining the society.
 * 
 *  # <weight>
 *  Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
 *  - Storage Reads:
 *  	- One storage read to check for suspended candidate. O(1)
 *  	- One storage read to check for suspended member. O(1)
 *  	- One storage read to retrieve all current bids. O(B)
 *  	- One storage read to retrieve all current candidates. O(C)
 *  	- One storage read to retrieve all members. O(M)
 *  - Storage Writes:
 *  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
 *  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
 *  - Notable Computation:
 *  	- O(B + C + log M) search to check user is not already a part of society.
 *  	- O(log B) search to insert the new bid sorted.
 *  - External Module Operations:
 *  	- One balance reserve operation. O(X)
 *  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
 *  - Events:
 *  	- One event for new bid.
 *  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
 * 
 *  Total Complexity: O(M + B + C + logM + logB + X)
 *  # </weight>
 */
export interface SocietyCall_bid {
    __kind: 'bid'
    value: BalanceOf
}

/**
 *  As a member, vote on the defender.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member.
 * 
 *  Parameters:
 *  - `approve`: A boolean which says if the candidate should be
 *  approved (`true`) or rejected (`false`).
 * 
 *  # <weight>
 *  - Key: M (len of members)
 *  - One storage read O(M) and O(log M) search to check user is a member.
 *  - One storage write to add vote to votes. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(M + logM)
 *  # </weight>
 */
export interface SocietyCall_defender_vote {
    __kind: 'defender_vote'
    approve: boolean
}

/**
 *  Found the society.
 * 
 *  This is done as a discrete action in order to allow for the
 *  module to be included into a running chain and can only be done once.
 * 
 *  The dispatch origin for this call must be from the _FounderSetOrigin_.
 * 
 *  Parameters:
 *  - `founder` - The first member and head of the newly founded society.
 *  - `max_members` - The initial max number of members for the society.
 *  - `rules` - The rules of this society concerning membership.
 * 
 *  # <weight>
 *  - Two storage mutates to set `Head` and `Founder`. O(1)
 *  - One storage write to add the first member to society. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(1)
 *  # </weight>
 */
export interface SocietyCall_found {
    __kind: 'found'
    founder: AccountId
    maxMembers: number
    rules: Bytes
}

/**
 *  Allow suspended judgement origin to make judgement on a suspended candidate.
 * 
 *  If the judgement is `Approve`, we add them to society as a member with the appropriate
 *  payment for joining society.
 * 
 *  If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
 *  to the society treasury, or we ban the voucher from vouching again.
 * 
 *  If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
 *  through the induction process again.
 * 
 *  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 * 
 *  Parameters:
 *  - `who` - The suspended candidate to be judged.
 *  - `judgement` - `Approve`, `Reject`, or `Rebid`.
 * 
 *  # <weight>
 *  Key: B (len of bids), M (len of members), X (balance action)
 *  - One storage read to check `who` is a suspended candidate.
 *  - One storage removal of the suspended candidate.
 *  - Approve Logic
 *  	- One storage read to get the available pot to pay users with. O(1)
 *  	- One storage write to update the available pot. O(1)
 *  	- One storage read to get the current block number. O(1)
 *  	- One storage read to get all members. O(M)
 *  	- Up to one unreserve currency action.
 *  	- Up to two new storage writes to payouts.
 *  	- Up to one storage write with O(log M) binary search to add a member to society.
 *  - Reject Logic
 *  	- Up to one repatriate reserved currency action. O(X)
 *  	- Up to one storage write to ban the vouching member from vouching again.
 *  - Rebid Logic
 *  	- Storage mutate with O(log B) binary search to place the user back into bids.
 *  - Up to one additional event if unvouch takes place.
 *  - One storage removal.
 *  - One event for the judgement.
 * 
 *  Total Complexity: O(M + logM + B + X)
 *  # </weight>
 */
export interface SocietyCall_judge_suspended_candidate {
    __kind: 'judge_suspended_candidate'
    who: AccountId
    judgement: SocietyJudgement
}

/**
 *  Allow suspension judgement origin to make judgement on a suspended member.
 * 
 *  If a suspended member is forgiven, we simply add them back as a member, not affecting
 *  any of the existing storage items for that member.
 * 
 *  If a suspended member is rejected, remove all associated storage items, including
 *  their payouts, and remove any vouched bids they currently have.
 * 
 *  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 * 
 *  Parameters:
 *  - `who` - The suspended member to be judged.
 *  - `forgive` - A boolean representing whether the suspension judgement origin
 *                forgives (`true`) or rejects (`false`) a suspended member.
 * 
 *  # <weight>
 *  Key: B (len of bids), M (len of members)
 *  - One storage read to check `who` is a suspended member. O(1)
 *  - Up to one storage write O(M) with O(log M) binary search to add a member back to society.
 *  - Up to 3 storage removals O(1) to clean up a removed member.
 *  - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
 *  - Up to one additional event if unvouch takes place.
 *  - One storage removal. O(1)
 *  - One event for the judgement.
 * 
 *  Total Complexity: O(M + logM + B)
 *  # </weight>
 */
export interface SocietyCall_judge_suspended_member {
    __kind: 'judge_suspended_member'
    who: AccountId
    forgive: boolean
}

/**
 *  Transfer the first matured payout for the sender and remove it from the records.
 * 
 *  NOTE: This extrinsic needs to be called multiple times to claim multiple matured payouts.
 * 
 *  Payment: The member will receive a payment equal to their first matured
 *  payout to their free balance.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member with
 *  payouts remaining.
 * 
 *  # <weight>
 *  Key: M (len of members), P (number of payouts for a particular member)
 *  - One storage read O(M) and O(log M) search to check signer is a member.
 *  - One storage read O(P) to get all payouts for a member.
 *  - One storage read O(1) to get the current block number.
 *  - One currency transfer call. O(X)
 *  - One storage write or removal to update the member's payouts. O(P)
 * 
 *  Total Complexity: O(M + logM + P + X)
 *  # </weight>
 */
export interface SocietyCall_payout {
    __kind: 'payout'
}

/**
 *  Allows root origin to change the maximum number of members in society.
 *  Max membership count must be greater than 1.
 * 
 *  The dispatch origin for this call must be from _ROOT_.
 * 
 *  Parameters:
 *  - `max` - The maximum number of members for the society.
 * 
 *  # <weight>
 *  - One storage write to update the max. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(1)
 *  # </weight>
 */
export interface SocietyCall_set_max_members {
    __kind: 'set_max_members'
    max: number
}

/**
 *  A bidder can remove their bid for entry into society.
 *  By doing so, they will have their candidate deposit returned or
 *  they will unvouch their voucher.
 * 
 *  Payment: The bid deposit is unreserved if the user made a bid.
 * 
 *  The dispatch origin for this call must be _Signed_ and a bidder.
 * 
 *  Parameters:
 *  - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
 * 
 *  # <weight>
 *  Key: B (len of bids), X (balance unreserve)
 *  - One storage read and write to retrieve and update the bids. O(B)
 *  - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(B + X)
 *  # </weight>
 */
export interface SocietyCall_unbid {
    __kind: 'unbid'
    pos: number
}

/**
 *  Annul the founding of the society.
 * 
 *  The dispatch origin for this call must be Signed, and the signing account must be both
 *  the `Founder` and the `Head`. This implies that it may only be done when there is one
 *  member.
 * 
 *  # <weight>
 *  - Two storage reads O(1).
 *  - Four storage removals O(1).
 *  - One event.
 * 
 *  Total Complexity: O(1)
 *  # </weight>
 */
export interface SocietyCall_unfound {
    __kind: 'unfound'
}

/**
 *  As a vouching member, unvouch a bid. This only works while vouched user is
 *  only a bidder (and not a candidate).
 * 
 *  The dispatch origin for this call must be _Signed_ and a vouching member.
 * 
 *  Parameters:
 *  - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
 * 
 *  # <weight>
 *  Key: B (len of bids)
 *  - One storage read O(1) to check the signer is a vouching member.
 *  - One storage mutate to retrieve and update the bids. O(B)
 *  - One vouching storage removal. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(B)
 *  # </weight>
 */
export interface SocietyCall_unvouch {
    __kind: 'unvouch'
    pos: number
}

/**
 *  As a member, vote on a candidate.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member.
 * 
 *  Parameters:
 *  - `candidate`: The candidate that the member would like to bid on.
 *  - `approve`: A boolean which says if the candidate should be
 *               approved (`true`) or rejected (`false`).
 * 
 *  # <weight>
 *  Key: C (len of candidates), M (len of members)
 *  - One storage read O(M) and O(log M) search to check user is a member.
 *  - One account lookup.
 *  - One storage read O(C) and O(C) search to check that user is a candidate.
 *  - One storage write to add vote to votes. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(M + logM + C)
 *  # </weight>
 */
export interface SocietyCall_vote {
    __kind: 'vote'
    candidate: LookupSource
    approve: boolean
}

/**
 *  As a member, vouch for someone to join society by placing a bid on their behalf.
 * 
 *  There is no deposit required to vouch for a new bid, but a member can only vouch for
 *  one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
 *  the suspension judgement origin, the member will be banned from vouching again.
 * 
 *  As a vouching member, you can claim a tip if the candidate is accepted. This tip will
 *  be paid as a portion of the reward the member will receive for joining the society.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member.
 * 
 *  Parameters:
 *  - `who`: The user who you would like to vouch for.
 *  - `value`: The total reward to be paid between you and the candidate if they become
 *  a member in the society.
 *  - `tip`: Your cut of the total `value` payout when the candidate is inducted into
 *  the society. Tips larger than `value` will be saturated upon payout.
 * 
 *  # <weight>
 *  Key: B (len of bids), C (len of candidates), M (len of members)
 *  - Storage Reads:
 *  	- One storage read to retrieve all members. O(M)
 *  	- One storage read to check member is not already vouching. O(1)
 *  	- One storage read to check for suspended candidate. O(1)
 *  	- One storage read to check for suspended member. O(1)
 *  	- One storage read to retrieve all current bids. O(B)
 *  	- One storage read to retrieve all current candidates. O(C)
 *  - Storage Writes:
 *  	- One storage write to insert vouching status to the member. O(1)
 *  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
 *  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
 *  - Notable Computation:
 *  	- O(log M) search to check sender is a member.
 *  	- O(B + C + log M) search to check user is not already a part of society.
 *  	- O(log B) search to insert the new bid sorted.
 *  - External Module Operations:
 *  	- One balance reserve operation. O(X)
 *  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
 *  - Events:
 *  	- One event for vouch.
 *  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
 * 
 *  Total Complexity: O(M + B + C + logM + logB + X)
 *  # </weight>
 */
export interface SocietyCall_vouch {
    __kind: 'vouch'
    who: AccountId
    value: BalanceOf
    tip: BalanceOf
}

export type SocietyJudgement = SocietyJudgement_Approve | SocietyJudgement_Rebid | SocietyJudgement_Reject

export interface SocietyJudgement_Approve {
    __kind: 'Approve'
}

export interface SocietyJudgement_Rebid {
    __kind: 'Rebid'
}

export interface SocietyJudgement_Reject {
    __kind: 'Reject'
}

export type BalanceOf = bigint

export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwnder`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: Keys
    proof: Bytes
}

export type Keys = [AccountId, AccountId, AccountId, AccountId]

export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 *  Cancel an anonymously scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.15 + 2.869 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: BlockNumber
    index: number
}

/**
 *  Cancel a named scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 24.91 + 2.907 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 *  Anonymously schedule a task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.29 + .126 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda
 *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_42
}

/**
 *  Anonymously schedule a task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_42
}

/**
 *  Schedule a named task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 29.6 + .159 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_42
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_42
}

export type Priority = number

export type Period = [BlockNumber, number]

export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_cancel_recovered | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_remove_recovery | RecoveryCall_set_recovered | RecoveryCall_vouch_recovery

/**
 *  Send a call through a recovered account.
 * 
 *  The dispatch origin for this call must be _Signed_ and registered to
 *  be able to make calls on behalf of the recovered account.
 * 
 *  Parameters:
 *  - `account`: The recovered account you want to make a call on-behalf-of.
 *  - `call`: The call you want to make with the recovered account.
 * 
 *  # <weight>
 *  - The weight of the `call` + 10,000.
 *  - One storage lookup to check account is recovered by `who`. O(1)
 *  # </weight>
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: AccountId
    call: Type_42
}

/**
 *  Cancel the ability to use `as_recovered` for `account`.
 * 
 *  The dispatch origin for this call must be _Signed_ and registered to
 *  be able to make calls on behalf of the recovered account.
 * 
 *  Parameters:
 *  - `account`: The recovered account you are able to call on-behalf-of.
 * 
 *  # <weight>
 *  - One storage mutation to check account is recovered by `who`. O(1)
 *  # </weight>
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: AccountId
}

/**
 *  Allow a successful rescuer to claim their recovered account.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a "rescuer"
 *  who has successfully completed the account recovery process: collected
 *  `threshold` or more vouches, waited `delay_period` blocks since initiation.
 * 
 *  Parameters:
 *  - `account`: The lost account that you want to claim has been successfully
 *    recovered by you.
 * 
 *  # <weight>
 *  Key: F (len of friends in config), V (len of vouching friends)
 *  - One storage read to get the recovery configuration. O(1), Codec O(F)
 *  - One storage read to get the active recovery process. O(1), Codec O(V)
 *  - One storage read to get the current block number. O(1)
 *  - One storage write. O(1), Codec O(V).
 *  - One event.
 * 
 *  Total Complexity: O(F + V)
 *  # </weight>
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: AccountId
}

/**
 *  As the controller of a recoverable account, close an active recovery
 *  process for your account.
 * 
 *  Payment: By calling this function, the recoverable account will receive
 *  the recovery deposit `RecoveryDeposit` placed by the rescuer.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a
 *  recoverable account with an active recovery process for it.
 * 
 *  Parameters:
 *  - `rescuer`: The account trying to rescue this recoverable account.
 * 
 *  # <weight>
 *  Key: V (len of vouching friends)
 *  - One storage read/remove to get the active recovery process. O(1), Codec O(V)
 *  - One balance call to repatriate reserved. O(X)
 *  - One event.
 * 
 *  Total Complexity: O(V + X)
 *  # </weight>
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: AccountId
}

/**
 *  Create a recovery configuration for your account. This makes your account recoverable.
 * 
 *  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
 *  will be reserved for storing the recovery configuration. This deposit is returned
 *  in full when the user calls `remove_recovery`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `friends`: A list of friends you trust to vouch for recovery attempts.
 *    Should be ordered and contain no duplicate values.
 *  - `threshold`: The number of friends that must vouch for a recovery attempt
 *    before the account can be recovered. Should be less than or equal to
 *    the length of the list of friends.
 *  - `delay_period`: The number of blocks after a recovery attempt is initialized
 *    that needs to pass before the account can be recovered.
 * 
 *  # <weight>
 *  - Key: F (len of friends)
 *  - One storage read to check that account is not already recoverable. O(1).
 *  - A check that the friends list is sorted and unique. O(F)
 *  - One currency reserve operation. O(X)
 *  - One storage write. O(1). Codec O(F).
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: AccountId[]
    threshold: number
    delayPeriod: BlockNumber
}

/**
 *  Initiate the process for recovering a recoverable account.
 * 
 *  Payment: `RecoveryDeposit` balance will be reserved for initiating the
 *  recovery process. This deposit will always be repatriated to the account
 *  trying to be recovered. See `close_recovery`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `account`: The lost account that you want to recover. This account
 *    needs to be recoverable (i.e. have a recovery configuration).
 * 
 *  # <weight>
 *  - One storage read to check that account is recoverable. O(F)
 *  - One storage read to check that this recovery process hasn't already started. O(1)
 *  - One currency reserve operation. O(X)
 *  - One storage read to get the current block number. O(1)
 *  - One storage write. O(1).
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: AccountId
}

/**
 *  Remove the recovery process for your account. Recovered accounts are still accessible.
 * 
 *  NOTE: The user must make sure to call `close_recovery` on all active
 *  recovery attempts before calling this function else it will fail.
 * 
 *  Payment: By calling this function the recoverable account will unreserve
 *  their recovery configuration deposit.
 *  (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a
 *  recoverable account (i.e. has a recovery configuration).
 * 
 *  # <weight>
 *  Key: F (len of friends)
 *  - One storage read to get the prefix iterator for active recoveries. O(1)
 *  - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
 *  - One balance call to unreserved. O(X)
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 *  Allow ROOT to bypass the recovery process and set an a rescuer account
 *  for a lost account directly.
 * 
 *  The dispatch origin for this call must be _ROOT_.
 * 
 *  Parameters:
 *  - `lost`: The "lost account" to be recovered.
 *  - `rescuer`: The "rescuer account" which can call as the lost account.
 * 
 *  # <weight>
 *  - One storage write O(1)
 *  - One event
 *  # </weight>
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: AccountId
    rescuer: AccountId
}

/**
 *  Allow a "friend" of a recoverable account to vouch for an active recovery
 *  process for that account.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a "friend"
 *  for the recoverable account.
 * 
 *  Parameters:
 *  - `lost`: The lost account that you want to recover.
 *  - `rescuer`: The account trying to rescue the lost account that you
 *    want to vouch for.
 * 
 *  The combination of these two parameters must point to an active recovery
 *  process.
 * 
 *  # <weight>
 *  Key: F (len of friends in config), V (len of vouching friends)
 *  - One storage read to get the recovery configuration. O(1), Codec O(F)
 *  - One storage read to get the active recovery process. O(1), Codec O(V)
 *  - One binary search to confirm caller is a friend. O(logF)
 *  - One binary search to confirm caller has not already vouched. O(logV)
 *  - One storage write. O(1), Codec O(V).
 *  - One event.
 * 
 *  Total Complexity: O(F + logF + V + logV)
 *  # </weight>
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: AccountId
    rescuer: AccountId
}

export type RandomnessCollectiveFlipCall = never

export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

/**
 *  Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to make a proxy.
 *  - `proxy_type`: The permissions allowed for this proxy account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: AccountId
    proxyType: ProxyType
    delay: BlockNumber
}

/**
 *  Publish the hash of a proxy-call that will be made in the future.
 * 
 *  This must be called some number of blocks before the corresponding `proxy` is attempted
 *  if the delay associated with the proxy relationship is greater than zero.
 * 
 *  No more than `MaxPending` announcements may be made at any one time.
 * 
 *  This will take a deposit of `AnnouncementDepositFactor` as well as
 *  `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: AccountId
    callHash: CallHashOf
}

/**
 *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 *  initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 *  Requires a `Signed` origin.
 * 
 *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
 *  new account. This will almost always be the most permissive `ProxyType` possible to
 *  allow for maximum flexibility.
 *  - `index`: A disambiguation index, in case this is called multiple times in the same
 *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 *  want to use `0`.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  Fails with `Duplicate` if this has already been called in this transaction, from the
 *  same sender, with the same parameters.
 * 
 *  Fails if there are insufficient funds to pay for deposit.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 *  TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
    __kind: 'anonymous'
    proxyType: ProxyType
    delay: BlockNumber
    index: number
}

/**
 *  Removes a previously spawned anonymous proxy.
 * 
 *  WARNING: **All access to this account will be lost.** Any funds held in it will be
 *  inaccessible.
 * 
 *  Requires a `Signed` origin, and the sender account must have been created by a call to
 *  `anonymous` with corresponding parameters.
 * 
 *  - `spawner`: The account that originally called `anonymous` to create this account.
 *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 *  - `proxy_type`: The proxy type originally passed to `anonymous`.
 *  - `height`: The height of the chain when the call to `anonymous` was processed.
 *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 *  Fails with `NoPermission` in case the caller is not a previously created anonymous
 *  account whose `anonymous` call has corresponding parameters.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_kill_anonymous {
    __kind: 'kill_anonymous'
    spawner: AccountId
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 *  Dispatch the given `call` from an account that the sender is authorised for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: AccountId
    forceProxyType?: (ProxyType | undefined)
    call: Type_42
}

/**
 *  Dispatch the given `call` from an account that the sender is authorised for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: AccountId
    real: AccountId
    forceProxyType?: (ProxyType | undefined)
    call: Type_42
}

/**
 *  Remove the given announcement of a delegate.
 * 
 *  May be called by a target (proxied) account to remove a call that one of their delegates
 *  (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `delegate`: The account that previously announced the call.
 *  - `call_hash`: The hash of the call to be made.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: AccountId
    callHash: CallHashOf
}

/**
 *  Remove a given announcement.
 * 
 *  May be called by a proxy account to remove a call they previously announced and return
 *  the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: AccountId
    callHash: CallHashOf
}

/**
 *  Unregister all proxy accounts for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
 *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 *  Unregister a proxy account for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to remove as a proxy.
 *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: AccountId
    proxyType: ProxyType
    delay: BlockNumber
}

export type CallHashOf = Bytes

export type ProxyType = ProxyType_Any | ProxyType_Governance | ProxyType_NonTransfer | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export type OffencesCall = never

export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  -------------------------------
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId[]
    maybeTimepoint?: (Timepoint | undefined)
    call: OpaqueCall
    storeCall: boolean
    maxWeight: Weight
}

/**
 *  Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `other_signatories`: The accounts (other than the sender) who are part of the
 *  multi-signature, but do not participate in the approval process.
 *  - `call`: The call to be executed.
 * 
 *  Result is equivalent to the dispatched result.
 * 
 *  # <weight>
 *  O(Z + C) where Z is the length of the call and C its execution weight.
 *  -------------------------------
 *  - DB Weight: None
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId[]
    call: Type_42
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 *  # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId[]
    timepoint: Timepoint
    callHash: Bytes
}

export type OpaqueCall = Bytes

export interface Timepoint {
    height: BlockNumber
    index: number
}

export type IndicesCall = IndicesCall_claim | IndicesCall_force_transfer | IndicesCall_free | IndicesCall_freeze | IndicesCall_transfer

/**
 *  Assign an previously unassigned index.
 * 
 *  Payment: `Deposit` is reserved from the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be claimed. This must not be in use.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: AccountIndex
}

/**
 *  Force an index to an account. This doesn't require a deposit. If the index is already
 *  held, then any deposit is reimbursed to its current owner.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `index`: the index to be (re-)assigned.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (original owner)
 *     - Writes: Indices Accounts, System Account (original owner)
 *  # </weight>
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: AccountId
    index: AccountIndex
    freeze: boolean
}

/**
 *  Free up an index owned by the sender.
 * 
 *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 *  - `index`: the index to be freed. This must be owned by the sender.
 * 
 *  Emits `IndexFreed` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: AccountIndex
}

/**
 *  Freeze an index so it will always point to the sender account. This consumes the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must have a
 *  non-frozen account `index`.
 * 
 *  - `index`: the index to be frozen in place.
 * 
 *  Emits `IndexFrozen` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one slash operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: AccountIndex
}

/**
 *  Assign an index already owned by the sender to another account. The balance reservation
 *  is effectively transferred to the new account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be re-assigned. This must be owned by the sender.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One transfer operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (recipient)
 *     - Writes: Indices Accounts, System Account (recipient)
 *  # </weight>
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: AccountId
    index: AccountIndex
}

export type AccountIndex = number

export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 *  # <weight>
 *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
 *    and E is length of `heartbeat.network_state.external_address`
 *    - `O(K)`: decoding of length `K`
 *    - `O(E)`: decoding/encoding of length `E`
 *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *    `ReceivedHeartbeats`
 *  - DbWrites: `ReceivedHeartbeats`
 *  # </weight>
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Signature
}

export type Signature = Bytes

export interface Heartbeat {
    blockNumber: BlockNumber
    networkState: OpaqueNetworkState
    sessionIndex: SessionIndex
    authorityIndex: AuthIndex
    validatorsLen: number
}

export type AuthIndex = number

export type SessionIndex = number

export interface OpaqueNetworkState {
    peerId: OpaquePeerId
    externalAddresses: OpaqueMultiaddr[]
}

export type OpaqueMultiaddr = Bytes

export type OpaquePeerId = Bytes

export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 *  Add a registrar to the system.
 * 
 *  The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 *  - `account`: the account of the registrar.
 * 
 *  Emits `RegistrarAdded` if successful.
 * 
 *  # <weight>
 *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 *  - One storage mutation (codec `O(R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: AccountId
}

/**
 *  Add the given account to the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Cancel a previous request.
 * 
 *  Payment: A previously reserved deposit is returned on success.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 *  Emits `JudgementUnrequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - One storage mutation `O(R + X)`.
 *  - One event
 *  # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: RegistrarIndex
}

/**
 *  Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 *  Payment: All reserved balances on the account are returned.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  Emits `IdentityCleared` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`
 *    - where `R` registrar-count (governance-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *    - where `X` additional-field-count (deposit-bounded and code-bounded).
 *  - One balance-unreserve operation.
 *  - `2` storage reads and `S + 2` storage deletions.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 *  Remove an account's identity and sub-account information and slash the deposits.
 * 
 *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 *  `Slash`. Verification request deposits are not returned; they should be cancelled
 *  manually using `cancel_request`.
 * 
 *  The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 * 
 *  Emits `IdentityKilled` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`.
 *  - One balance-reserve operation.
 *  - `S + 2` storage mutations.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: LookupSource
}

/**
 *  Provide a judgement for an account's identity.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `reg_index`.
 * 
 *  - `reg_index`: the index of the registrar whose judgement is being made.
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 *  Emits `JudgementGiven` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-transfer operation.
 *  - Up to one account-lookup operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: LookupSource
    judgement: IdentityJudgement
}

/**
 *  Remove the sender as a sub-account.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender (*not* the original depositor).
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  super-identity.
 * 
 *  NOTE: This should not normally be used, but is provided in the case that the non-
 *  controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 *  Remove the given account from the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: LookupSource
}

/**
 *  Alter the associated name of the given sub-account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Request a judgement from a registrar.
 * 
 *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 *  given.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is requested.
 *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 *  ```nocompile
 *  Self::registrars().get(reg_index).unwrap().fee
 *  ```
 * 
 *  Emits `JudgementRequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 *  Change the account associated with a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `new`: the new account ID.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: AccountId
}

/**
 *  Set the fee required for a judgement to be requested from a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fee`: the new fee.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 *  Set the field information for a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fields`: the fields that the registrar concerns themselves with.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 *  Set an account's identity information and reserve the appropriate deposit.
 * 
 *  If the account already has identity information, the deposit is taken as part payment
 *  for the new deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `info`: The identity information.
 * 
 *  Emits `IdentitySet` if successful.
 * 
 *  # <weight>
 *  - `O(X + X' + R)`
 *    - where `X` additional-field-count (deposit-bounded and code-bounded)
 *    - where `R` judgements-count (registrar-count-bounded)
 *  - One balance reserve operation.
 *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 *  Set the sub-accounts of the sender.
 * 
 *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  - `subs`: The identity's (new) sub-accounts.
 * 
 *  # <weight>
 *  - `O(P + S)`
 *    - where `P` old-subs-count (hard- and deposit-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *  - At most one balance operations.
 *  - DB:
 *    - `P + S` storage mutations (codec complexity `O(1)`)
 *    - One storage read (codec complexity `O(P)`).
 *    - One storage write (codec complexity `O(S)`).
 *    - One storage-exists (`IdentityOf::contains_key`).
 *  # </weight>
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId, Data][]
}

export interface IdentityInfo {
    additional: IdentityInfoAdditional[]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (H160 | undefined)
    image: Data
    twitter: Data
}

export type H160 = Bytes

export type IdentityInfoAdditional = [Data, Data]

export type IdentityJudgement = IdentityJudgement_Erroneous | IdentityJudgement_FeePaid | IdentityJudgement_KnownGood | IdentityJudgement_LowQuality | IdentityJudgement_OutOfDate | IdentityJudgement_Reasonable | IdentityJudgement_Unknown

export interface IdentityJudgement_Erroneous {
    __kind: 'Erroneous'
}

export interface IdentityJudgement_FeePaid {
    __kind: 'FeePaid'
    value: Balance
}

export interface IdentityJudgement_KnownGood {
    __kind: 'KnownGood'
}

export interface IdentityJudgement_LowQuality {
    __kind: 'LowQuality'
}

export interface IdentityJudgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface IdentityJudgement_Reasonable {
    __kind: 'Reasonable'
}

export interface IdentityJudgement_Unknown {
    __kind: 'Unknown'
}

export type RegistrarIndex = number

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: H256
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: H256
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: H256
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: H256
}

export type H256 = Bytes

export type GrandpaCall = GrandpaCall_note_stalled | GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned

/**
 *  Note that the current authority set of the GRANDPA finality gadget has
 *  stalled. This will trigger a forced authority set change at the beginning
 *  of the next session, to be enacted `delay` blocks after that. The delay
 *  should be high enough to safely assume that the block signalling the
 *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 *  will start the new authority set using the given finalized block as base.
 *  Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: BlockNumber
    bestFinalizedBlockNumber: BlockNumber
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

export interface KeyOwnerProof {
    session: SessionIndex
    trieNodes: Bytes[]
    validatorCount: ValidatorCount
}

export type ValidatorCount = number

export interface GrandpaEquivocationProof {
    setId: SetId
    equivocation: GrandpaEquivocation
}

export type GrandpaEquivocation = GrandpaEquivocation_Precommit | GrandpaEquivocation_Prevote

export interface GrandpaEquivocation_Precommit {
    __kind: 'Precommit'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Prevote {
    __kind: 'Prevote'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocationValue {
    roundNumber: bigint
    identity: AuthorityId
    first: [GrandpaPrevote, AuthoritySignature]
    second: [GrandpaPrevote, AuthoritySignature]
}

export type AuthoritySignature = Bytes

export interface GrandpaPrevote {
    targetHash: Hash
    targetNumber: BlockNumber
}

export type AuthorityId = Bytes

export type SetId = bigint

export type FinalityTrackerCall = FinalityTrackerCall_final_hint

/**
 *  Hint that the author of this block thinks the best finalized
 *  block is the given number.
 */
export interface FinalityTrackerCall_final_hint {
    __kind: 'final_hint'
    hint: number
}

export type Erc721Call = Erc721Call_burn | Erc721Call_mint | Erc721Call_transfer

/**
 *  Remove token from the system
 */
export interface Erc721Call_burn {
    __kind: 'burn'
    id: TokenId
}

/**
 *  Creates a new token with the given token ID and metadata, and gives ownership to owner
 */
export interface Erc721Call_mint {
    __kind: 'mint'
    owner: AccountId
    id: TokenId
    metadata: Bytes
}

/**
 *  Changes ownership of a token sender owns
 */
export interface Erc721Call_transfer {
    __kind: 'transfer'
    to: AccountId
    id: TokenId
}

export type TokenId = bigint

export type Erc20Call = Erc20Call_mint_erc721 | Erc20Call_remark | Erc20Call_transfer | Erc20Call_transfer_erc721 | Erc20Call_transfer_hash | Erc20Call_transfer_native

/**
 *  Allows the bridge to issue new erc721 tokens
 */
export interface Erc20Call_mint_erc721 {
    __kind: 'mint_erc721'
    recipient: AccountId
    id: bigint
    metadata: Bytes
}

/**
 *  This can be called by the bridge to demonstrate an arbitrary call from a proposal.
 */
export interface Erc20Call_remark {
    __kind: 'remark'
    hash: Hash
}

/**
 *  Executes a simple currency transfer using the bridge account as the source
 */
export interface Erc20Call_transfer {
    __kind: 'transfer'
    to: AccountId
    amount: BalanceOf
}

/**
 *  Transfer a non-fungible token (erc721) to a (whitelisted) destination chain.
 */
export interface Erc20Call_transfer_erc721 {
    __kind: 'transfer_erc721'
    recipient: Bytes
    tokenId: bigint
    destId: ChainId
}

/**
 *  Transfers an arbitrary hash to a (whitelisted) destination chain.
 */
export interface Erc20Call_transfer_hash {
    __kind: 'transfer_hash'
    hash: Hash
    destId: ChainId
}

/**
 *  Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
 */
export interface Erc20Call_transfer_native {
    __kind: 'transfer_native'
    amount: BalanceOf
    recipient: Bytes
    destId: ChainId
}

export type ChainId = number

export type ElectionsCall = ElectionsCall_remove_member | ElectionsCall_remove_voter | ElectionsCall_renounce_candidacy | ElectionsCall_report_defunct_voter | ElectionsCall_submit_candidacy | ElectionsCall_vote

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen election is started.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  If we have a replacement:
 *  	- Base weight: 50.93 µs
 *  	- State reads:
 *  		- RunnersUp.len()
 *  		- Members, RunnersUp (remove_and_replace_member)
 *  	- State writes:
 *  		- Members, RunnersUp (remove_and_replace_member)
 *  Else, since this is a root call and will go into phragmen, we assume full block for now.
 *  # </weight>
 */
export interface ElectionsCall_remove_member {
    __kind: 'remove_member'
    who: LookupSource
    hasReplacement: boolean
}

/**
 *  Remove `origin` as a voter. This removes the lock and returns the bond.
 * 
 *  # <weight>
 *  Base weight: 36.8 µs
 *  All state access is from do_remove_voter.
 *  State reads:
 *  	- Voting
 *  	- [AccountData(who)]
 *  State writes:
 *  	- Voting
 *  	- Locks
 *  	- [AccountData(who)]
 *  # </weight>
 */
export interface ElectionsCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 *  - `origin` is a candidate and not elected in any set. In this case, the bond is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner-up. In this case, the bond is unreserved, returned and
 *    origin is removed as a runner-up.
 *  - `origin` is a current member. In this case, the bond is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
 *  <weight>
 *  If a candidate is renouncing:
 *  	Base weight: 17.28 µs
 *  	Complexity of candidate_count: 0.235 µs
 *  	State reads:
 *  		- Candidates
 *  		- [AccountBalance(who) (unreserve)]
 *  	State writes:
 *  		- Candidates
 *  		- [AccountBalance(who) (unreserve)]
 *  If member is renouncing:
 *  	Base weight: 46.25 µs
 *  	State reads:
 *  		- Members, RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  	State writes:
 *  		- Members, RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  If runner is renouncing:
 *  	Base weight: 46.25 µs
 *  	State reads:
 *  		- RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  	State writes:
 *  		- RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  </weight>
 */
export interface ElectionsCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
 *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
 *  their bond is slashed.
 * 
 *  A defunct voter is defined to be:
 *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
 *      longer a candidate nor an active member or a runner-up.
 * 
 * 
 *  The origin must provide the number of current candidates and votes of the reported target
 *  for the purpose of accurate weight calculation.
 * 
 *  # <weight>
 *  No Base weight based on min square analysis.
 *  Complexity of candidate_count: 1.755 µs
 *  Complexity of vote_count: 18.51 µs
 *  State reads:
 *   	- Voting(reporter)
 *   	- Candidate.len()
 *   	- Voting(Target)
 *   	- Candidates, Members, RunnersUp (is_defunct_voter)
 *  State writes:
 *  	- Lock(reporter || target)
 *  	- [AccountBalance(reporter)] + AccountBalance(target)
 *  	- Voting(reporter || target)
 *  Note: the db access is worse with respect to db, which is when the report is correct.
 *  # </weight>
 */
export interface ElectionsCall_report_defunct_voter {
    __kind: 'report_defunct_voter'
    defunct: DefunctVoter
}

/**
 *  Submit oneself for candidacy.
 * 
 *  A candidate will either:
 *    - Lose at the end of the term and forfeit their deposit.
 *    - Win and become a member. Members will eventually get their stash back.
 *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
 *      removed.
 * 
 *  # <weight>
 *  Base weight = 33.33 µs
 *  Complexity of candidate_count: 0.375 µs
 *  State reads:
 *  	- Candidates
 *  	- Members
 *  	- RunnersUp
 *  	- [AccountBalance(who)]
 *  State writes:
 *  	- [AccountBalance(who)]
 *  	- Candidates
 *  # </weight>
 */
export interface ElectionsCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 *  Vote for a set of candidates for the upcoming round of election. This can be called to
 *  set the initial votes, or update already existing votes.
 * 
 *  Upon initial voting, `value` units of `who`'s balance is locked and a bond amount is
 *  reserved.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of possible candidates. Note that all current members and
 *      runners-up are also automatically candidates for the next round.
 * 
 *  It is the responsibility of the caller to not place all of their balance into the lock
 *  and keep some for further transactions.
 * 
 *  # <weight>
 *  Base weight: 47.93 µs
 *  State reads:
 *  	- Candidates.len() + Members.len() + RunnersUp.len()
 *  	- Voting (is_voter)
 *  	- Lock
 *  	- [AccountBalance(who) (unreserve + total_balance)]
 *  State writes:
 *  	- Voting
 *  	- Lock
 *  	- [AccountBalance(who) (unreserve -- only when creating a new voter)]
 *  # </weight>
 */
export interface ElectionsCall_vote {
    __kind: 'vote'
    votes: AccountId[]
    value: bigint
}

export interface DefunctVoter {
    who: AccountId
    voteCount: number
    candidateCount: number
}

export type Renouncing = Renouncing_Candidate | Renouncing_Member | Renouncing_RunnerUp

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export type DemocracyCall = DemocracyCall_cancel_queued | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_enact_proposal | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_propose | DemocracyCall_reap_preimage | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  # <weight>
 *  - `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 *  - Db reads: `scheduler lookup`, scheduler agenda`
 *  - Db writes: `scheduler lookup`, scheduler agenda`
 *  # </weight>
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: ReferendumIndex
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`.
 *  - Db writes: `ReferendumInfoOf`
 *  # </weight>
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - Db writes: `PublicProps`
 *  # </weight>
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 *  Delegate the voting power (with some given conviction) of the sending account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 * 
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 *  - Db reads: 3*`VotingOf`, `origin account locks`
 *  - Db writes: 3*`VotingOf`, `origin account locks`
 *  - Db reads per votes: `ReferendumInfoOf`
 *  - Db writes per votes: `ReferendumInfoOf`
 *  # </weight>
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: AccountId
    conviction: Conviction
    balance: BalanceOf
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`.
 *  - Db reads: `ReferendumInfoOf`, `Cancellations`
 *  - Db writes: `ReferendumInfoOf`, `Cancellations`
 *  # </weight>
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: ReferendumIndex
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Hash
    index: ReferendumIndex
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  # <weight>
 *  - Complexity `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 *  - Db reads: `NextExternal`, `Blacklist`
 *  - Db writes: `NextExternal`
 *  # </weight>
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: Hash
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db write: `NextExternal`
 *  # </weight>
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: Hash
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db write: `NextExternal`
 *  # </weight>
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: Hash
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  The dispatch of this call must be `FastTrackOrigin`.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `FastTrackVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 * 
 *  Emits `Started`.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db reads: `NextExternal`, `ReferendumCount`
 *  - Db writes: `NextExternal`, `ReferendumCount`, `ReferendumInfoOf`
 *  - Base Weight: 30.1 µs
 *  # </weight>
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Hash
    votingPeriod: BlockNumber
    delay: BlockNumber
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 *  the preimage has not been uploaded before and matches some imminent proposal,
 *  no fee is paid.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  # <weight>
 *  - Complexity: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 *  - Db reads: `Preimages`
 *  - Db writes: `Preimages`
 *  # </weight>
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Bytes
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  # <weight>
 *  - Complexity: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 *  - Db reads: `Preimages`
 *  - Db writes: `Preimages`
 *  # </weight>
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Bytes
}

/**
 *  Propose a sensitive action to be taken.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender must
 *  have funds to cover the deposit.
 * 
 *  - `proposal_hash`: The hash of the proposal preimage.
 *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 *  Emits `Proposed`.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db reads: `PublicPropCount`, `PublicProps`
 *  - Db writes: `PublicPropCount`, `PublicProps`, `DepositOf`
 *  # </weight>
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: Hash
    value: bigint
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proposal_hash`: The preimage hash of a proposal.
 *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
 *    Extrinsic is weighted according to this value with no refund.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 * 
 *  Emits `PreimageReaped`.
 * 
 *  # <weight>
 *  - Complexity: `O(D)` where D is length of proposal.
 *  - Db reads: `Preimages`, provider account data
 *  - Db writes: `Preimages` provider account data
 *  # </weight>
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: Hash
    proposalLenUpperBound: number
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If the `target` is equal to the signer, then this function is exactly equivalent to
 *  `remove_vote`. If not equal to the signer, then the vote must have expired,
 *  either because the referendum was cancelled, because the voter lost the referendum or
 *  because the conviction period is over.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account of the vote to be removed; this account must have voted for
 *    referendum `index`.
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  # <weight>
 *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`
 *  # </weight>
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: AccountId
    index: ReferendumIndex
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If:
 *  - the referendum was cancelled, or
 *  - the referendum is ongoing, or
 *  - the referendum has ended such that
 *    - the vote of the account was in opposition to the result; or
 *    - there was no conviction to the account's vote; or
 *    - the account made a split vote
 *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
 *  funds being available.
 * 
 *  If, however, the referendum has ended and:
 *  - it finished corresponding to the vote of the account, and
 *  - the account made a standard vote with conviction, and
 *  - the lock period of the conviction is not over
 *  ...then the lock will be aggregated into the overall account's lock, which may involve
 *  *overlocking* (where the two locks are combined into a single lock that is the maximum
 *  of both the amount locked and the time is it locked for).
 * 
 *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *  registered for referendum `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  # <weight>
 *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`
 *  # </weight>
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: ReferendumIndex
}

/**
 *  Signals agreement with a particular proposal.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender
 *  must have funds to cover the deposit, equal to the original deposit.
 * 
 *  - `proposal`: The index of the proposal to second.
 *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *    proposal. Extrinsic is weighted according to this value with no refund.
 * 
 *  # <weight>
 *  - Complexity: `O(S)` where S is the number of seconds a proposal already has.
 *  - Db reads: `DepositOf`
 *  - Db writes: `DepositOf`
 *  # </weight>
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
}

/**
 *  Undelegate the voting power of the sending account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be
 *  currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 *  - Db reads: 2*`VotingOf`
 *  - Db writes: 2*`VotingOf`
 *  - Db reads per votes: `ReferendumInfoOf`
 *  - Db writes per votes: `ReferendumInfoOf`
 *  # </weight>
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  # <weight>
 *  - Complexity `O(R)` with R number of vote of target.
 *  - Db reads: `VotingOf`, `balances locks`, `target account`
 *  - Db writes: `VotingOf`, `balances locks`, `target account`
 *  # </weight>
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: AccountId
}

/**
 *  Veto and blacklist the external proposal hash.
 * 
 *  The dispatch origin of this call must be `VetoOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 *  Emits `Vetoed`.
 * 
 *  # <weight>
 *  - Complexity: `O(V + log(V))` where V is number of `existing vetoers`
 *    Performs a binary search on `existing_vetoers` which should not be very large.
 *  - Db reads: `NextExternal`, `Blacklist`
 *  - Db writes: `NextExternal`, `Blacklist`
 *  # </weight>
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Hash
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `ref_index`: The index of the referendum to vote for.
 *  - `vote`: The vote configuration.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where R is the number of referendums the voter has voted on.
 *    weight is charged as if maximum votes.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `balances locks`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`, `balances locks`
 *  # </weight>
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    value: AccountVoteSplit
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    value: AccountVoteStandard
}

export interface AccountVoteStandard {
    vote: Vote
    balance: Balance
}

export type Vote = number

export interface AccountVoteSplit {
    aye: Balance
    nay: Balance
}

export type Conviction = Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x | Conviction_None

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

export interface Conviction_None {
    __kind: 'None'
}

export type ReferendumIndex = number

export type DdcMetricsOffchainWorkerCall = never

export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Hash
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Hash
    index: number
    approve: boolean
}

export type ContractsCall = ContractsCall_call | ContractsCall_claim_surcharge | ContractsCall_instantiate | ContractsCall_put_code | ContractsCall_update_schedule

/**
 *  Makes a call to an account, optionally transferring some balance.
 * 
 *  * If the account is a smart-contract account, the associated code will be
 *  executed and any value will be transferred.
 *  * If the account is a regular account, any value will be transferred.
 *  * If no account exists and the call value is not less than `existential_deposit`,
 *  a regular account will be created and any value will be transferred.
 */
export interface ContractsCall_call {
    __kind: 'call'
    dest: LookupSource
    value: bigint
    gasLimit: bigint
    data: Bytes
}

/**
 *  Allows block producers to claim a small reward for evicting a contract. If a block producer
 *  fails to do so, a regular users will be allowed to claim the reward.
 * 
 *  If contract is not evicted as a result of this call, no actions are taken and
 *  the sender is not eligible for the reward.
 */
export interface ContractsCall_claim_surcharge {
    __kind: 'claim_surcharge'
    dest: AccountId
    auxSender?: (AccountId | undefined)
}

/**
 *  Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance.
 * 
 *  Instantiation is executed as follows:
 * 
 *  - The destination address is computed based on the sender and hash of the code.
 *  - The smart-contract account is created at the computed address.
 *  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
 *    after the execution is saved as the `code` of the account. That code will be invoked
 *    upon any call received by this account.
 *  - The contract is initialized.
 */
export interface ContractsCall_instantiate {
    __kind: 'instantiate'
    endowment: bigint
    gasLimit: bigint
    codeHash: CodeHash
    data: Bytes
}

/**
 *  Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
 *  You can instantiate contracts only with stored code.
 */
export interface ContractsCall_put_code {
    __kind: 'put_code'
    code: Bytes
}

/**
 *  Updates the schedule for metering contracts.
 * 
 *  The schedule must have a greater version than the stored schedule.
 */
export interface ContractsCall_update_schedule {
    __kind: 'update_schedule'
    schedule: Schedule
}

export interface Schedule {
    version: number
    enablePrintln: boolean
    limits: Limits
    instructionWeights: InstructionWeights
    hostFnWeights: HostFnWeights
}

export interface HostFnWeights {
    caller: Weight
    address: Weight
    gasLeft: Weight
    balance: Weight
    valueTransferred: Weight
    minimumBalance: Weight
    tombstoneDeposit: Weight
    rentAllowance: Weight
    blockNumber: Weight
    now: Weight
    weightToFee: Weight
    gas: Weight
    input: Weight
    inputPerByte: Weight
    return: Weight
    returnPerByte: Weight
    terminate: Weight
    terminatePerCodeByte: Weight
    restoreTo: Weight
    restoreToPerCallerCodeByte: Weight
    restoreToPerTombstoneCodeByte: Weight
    restoreToPerDelta: Weight
    random: Weight
    depositEvent: Weight
    depositEventPerTopic: Weight
    depositEventPerByte: Weight
    setRentAllowance: Weight
    setStorage: Weight
    setStoragePerByte: Weight
    clearStorage: Weight
    getStorage: Weight
    getStoragePerByte: Weight
    transfer: Weight
    call: Weight
    callPerCodeByte: Weight
    callTransferSurcharge: Weight
    callPerInputByte: Weight
    callPerOutputByte: Weight
    instantiate: Weight
    instantiatePerCodeByte: Weight
    instantiatePerInputByte: Weight
    instantiatePerOutputByte: Weight
    instantiatePerSaltByte: Weight
    hashSha2256: Weight
    hashSha2256PerByte: Weight
    hashKeccak256: Weight
    hashKeccak256PerByte: Weight
    hashBlake2256: Weight
    hashBlake2256PerByte: Weight
    hashBlake2128: Weight
    hashBlake2128PerByte: Weight
    rentParams: Weight
}

export interface InstructionWeights {
    i64Const: number
    i64Load: number
    i64Store: number
    select: number
    rIf: number
    br: number
    brIf: number
    brIable: number
    brIablePerEntry: number
    call: number
    callIndirect: number
    callIndirectPerParam: number
    localGet: number
    localSet: number
    localTee: number
    globalGet: number
    globalSet: number
    memoryCurrent: number
    memoryGrow: number
    i64Clz: number
    i64Ctz: number
    i64Popcnt: number
    i64Eqz: number
    i64Extendsi32: number
    i64Extendui32: number
    i32Wrapi64: number
    i64Eq: number
    i64Ne: number
    i64Lts: number
    i64Ltu: number
    i64Gts: number
    i64Gtu: number
    i64Les: number
    i64Leu: number
    i64Ges: number
    i64Geu: number
    i64Add: number
    i64Sub: number
    i64Mul: number
    i64Divs: number
    i64Divu: number
    i64Rems: number
    i64Remu: number
    i64And: number
    i64Or: number
    i64Xor: number
    i64Shl: number
    i64Shrs: number
    i64Shru: number
    i64Rotl: number
    i64Rotr: number
}

export interface Limits {
    eventTopics: number
    stackHeight: number
    globals: number
    parameters: number
    memoryPages: number
    tableSize: number
    brTableSize: number
    subjectLen: number
}

export type CodeHash = Bytes

export type ChainBridgeCall = ChainBridgeCall_acknowledge_proposal | ChainBridgeCall_add_relayer | ChainBridgeCall_eval_vote_state | ChainBridgeCall_reject_proposal | ChainBridgeCall_remove_relayer | ChainBridgeCall_remove_resource | ChainBridgeCall_set_resource | ChainBridgeCall_set_threshold | ChainBridgeCall_whitelist_chain

/**
 *  Commits a vote in favour of the provided proposal.
 * 
 *  If a proposal with the given nonce and source chain ID does not already exist, it will
 *  be created with an initial vote in favour from the caller.
 * 
 *  # <weight>
 *  - weight of proposed call, regardless of whether execution is performed
 *  # </weight>
 */
export interface ChainBridgeCall_acknowledge_proposal {
    __kind: 'acknowledge_proposal'
    nonce: DepositNonce
    srcId: ChainId
    rId: ResourceId
    call: Proposal
}

/**
 *  Adds a new relayer to the relayer set.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_add_relayer {
    __kind: 'add_relayer'
    v: AccountId
}

/**
 *  Evaluate the state of a proposal given the current vote threshold.
 * 
 *  A proposal with enough votes will be either executed or cancelled, and the status
 *  will be updated accordingly.
 * 
 *  # <weight>
 *  - weight of proposed call, regardless of whether execution is performed
 *  # </weight>
 */
export interface ChainBridgeCall_eval_vote_state {
    __kind: 'eval_vote_state'
    nonce: DepositNonce
    srcId: ChainId
    prop: Proposal
}

/**
 *  Commits a vote against a provided proposal.
 * 
 *  # <weight>
 *  - Fixed, since execution of proposal should not be included
 *  # </weight>
 */
export interface ChainBridgeCall_reject_proposal {
    __kind: 'reject_proposal'
    nonce: DepositNonce
    srcId: ChainId
    rId: ResourceId
    call: Proposal
}

/**
 *  Removes an existing relayer from the set.
 * 
 *  # <weight>
 *  - O(1) lookup and removal
 *  # </weight>
 */
export interface ChainBridgeCall_remove_relayer {
    __kind: 'remove_relayer'
    v: AccountId
}

/**
 *  Removes a resource ID from the resource mapping.
 * 
 *  After this call, bridge transfers with the associated resource ID will
 *  be rejected.
 * 
 *  # <weight>
 *  - O(1) removal
 *  # </weight>
 */
export interface ChainBridgeCall_remove_resource {
    __kind: 'remove_resource'
    id: ResourceId
}

/**
 *  Stores a method name on chain under an associated resource ID.
 * 
 *  # <weight>
 *  - O(1) write
 *  # </weight>
 */
export interface ChainBridgeCall_set_resource {
    __kind: 'set_resource'
    id: ResourceId
    method: Bytes
}

/**
 *  Sets the vote threshold for proposals.
 * 
 *  This threshold is used to determine how many votes are required
 *  before a proposal is executed.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_set_threshold {
    __kind: 'set_threshold'
    threshold: number
}

/**
 *  Enables a chain ID as a source or destination for a bridge transfer.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_whitelist_chain {
    __kind: 'whitelist_chain'
    id: ChainId
}

export type ResourceId = Bytes

export type DepositNonce = bigint

export type CereDDCModuleCall = CereDDCModuleCall_send_data

export interface CereDDCModuleCall_send_data {
    __kind: 'send_data'
    sendTo: AccountId
    data: Bytes
}

export type BalancesCall = BalancesCall_force_transfer | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_keep_alive

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: LookupSource
    dest: LookupSource
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Module.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: LookupSource
    value: bigint
}

export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

export interface BabeEquivocationProof {
    offender: AuthorityId
    slotNumber: SlotNumber
    firstHeader: Header
    secondHeader: Header
}

export interface Header {
    parentHash: Hash
    number: number
    stateRoot: Hash
    extrinsicsRoot: Hash
    digest: Digest
}

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_ChangesTrieSignal | DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal | DigestItem_SealV0

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: AuthorityId[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Hash
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: Consensus
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: PreRuntime
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: Seal
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: SealV0
}

export type SealV0 = [bigint, Signature]

export type Seal = [ConsensusEngineId, Bytes]

export type PreRuntime = [ConsensusEngineId, Bytes]

export type Consensus = [ConsensusEngineId, Bytes]

export type ConsensusEngineId = Bytes

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value?: (ChangesTrieConfiguration | undefined)
}

export type SlotNumber = bigint

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export type AuthorityDiscoveryCall = never

export const Proposal: sts.Type<Proposal> = sts.closedEnum(() => {
    return  {
        AuthorityDiscovery: AuthorityDiscoveryCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        CereDDCModule: CereDDCModuleCall,
        ChainBridge: ChainBridgeCall,
        Contracts: ContractsCall,
        Council: CouncilCall,
        DdcMetricsOffchainWorker: DdcMetricsOffchainWorkerCall,
        Democracy: DemocracyCall,
        Elections: ElectionsCall,
        Erc20: Erc20Call,
        Erc721: Erc721Call,
        FinalityTracker: FinalityTrackerCall,
        Grandpa: GrandpaCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        Indices: IndicesCall,
        Multisig: MultisigCall,
        Offences: OffencesCall,
        Proxy: ProxyCall,
        RandomnessCollectiveFlip: RandomnessCollectiveFlipCall,
        Recovery: RecoveryCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Society: SocietyCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_vested_transfer: sts.enumStruct({
            source: LookupSource,
            target: LookupSource,
            schedule: VestingInfo,
        }),
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: LookupSource,
        }),
        vested_transfer: sts.enumStruct({
            target: LookupSource,
            schedule: VestingInfo,
        }),
    }
})

export const VestingInfo: sts.Type<VestingInfo> = sts.struct(() => {
    return  {
        locked: Balance,
        perBlock: Balance,
        startingBlock: BlockNumber,
    }
})

export const BlockNumber = sts.number()

export const Balance = sts.bigint()

export const LookupSource: sts.Type<LookupSource> = sts.closedEnum(() => {
    return  {
        AccountId: AccountId,
        Idx0: sts.unit(),
        Idx1: sts.unit(),
        Idx10: sts.unit(),
        Idx100: sts.unit(),
        Idx101: sts.unit(),
        Idx102: sts.unit(),
        Idx103: sts.unit(),
        Idx104: sts.unit(),
        Idx105: sts.unit(),
        Idx106: sts.unit(),
        Idx107: sts.unit(),
        Idx108: sts.unit(),
        Idx109: sts.unit(),
        Idx11: sts.unit(),
        Idx110: sts.unit(),
        Idx111: sts.unit(),
        Idx112: sts.unit(),
        Idx113: sts.unit(),
        Idx114: sts.unit(),
        Idx115: sts.unit(),
        Idx116: sts.unit(),
        Idx117: sts.unit(),
        Idx118: sts.unit(),
        Idx119: sts.unit(),
        Idx12: sts.unit(),
        Idx120: sts.unit(),
        Idx121: sts.unit(),
        Idx122: sts.unit(),
        Idx123: sts.unit(),
        Idx124: sts.unit(),
        Idx125: sts.unit(),
        Idx126: sts.unit(),
        Idx127: sts.unit(),
        Idx128: sts.unit(),
        Idx129: sts.unit(),
        Idx13: sts.unit(),
        Idx130: sts.unit(),
        Idx131: sts.unit(),
        Idx132: sts.unit(),
        Idx133: sts.unit(),
        Idx134: sts.unit(),
        Idx135: sts.unit(),
        Idx136: sts.unit(),
        Idx137: sts.unit(),
        Idx138: sts.unit(),
        Idx139: sts.unit(),
        Idx14: sts.unit(),
        Idx140: sts.unit(),
        Idx141: sts.unit(),
        Idx142: sts.unit(),
        Idx143: sts.unit(),
        Idx144: sts.unit(),
        Idx145: sts.unit(),
        Idx146: sts.unit(),
        Idx147: sts.unit(),
        Idx148: sts.unit(),
        Idx149: sts.unit(),
        Idx15: sts.unit(),
        Idx150: sts.unit(),
        Idx151: sts.unit(),
        Idx152: sts.unit(),
        Idx153: sts.unit(),
        Idx154: sts.unit(),
        Idx155: sts.unit(),
        Idx156: sts.unit(),
        Idx157: sts.unit(),
        Idx158: sts.unit(),
        Idx159: sts.unit(),
        Idx16: sts.unit(),
        Idx160: sts.unit(),
        Idx161: sts.unit(),
        Idx162: sts.unit(),
        Idx163: sts.unit(),
        Idx164: sts.unit(),
        Idx165: sts.unit(),
        Idx166: sts.unit(),
        Idx167: sts.unit(),
        Idx168: sts.unit(),
        Idx169: sts.unit(),
        Idx17: sts.unit(),
        Idx170: sts.unit(),
        Idx171: sts.unit(),
        Idx172: sts.unit(),
        Idx173: sts.unit(),
        Idx174: sts.unit(),
        Idx175: sts.unit(),
        Idx176: sts.unit(),
        Idx177: sts.unit(),
        Idx178: sts.unit(),
        Idx179: sts.unit(),
        Idx18: sts.unit(),
        Idx180: sts.unit(),
        Idx181: sts.unit(),
        Idx182: sts.unit(),
        Idx183: sts.unit(),
        Idx184: sts.unit(),
        Idx185: sts.unit(),
        Idx186: sts.unit(),
        Idx187: sts.unit(),
        Idx188: sts.unit(),
        Idx189: sts.unit(),
        Idx19: sts.unit(),
        Idx190: sts.unit(),
        Idx191: sts.unit(),
        Idx192: sts.unit(),
        Idx193: sts.unit(),
        Idx194: sts.unit(),
        Idx195: sts.unit(),
        Idx196: sts.unit(),
        Idx197: sts.unit(),
        Idx198: sts.unit(),
        Idx199: sts.unit(),
        Idx2: sts.unit(),
        Idx20: sts.unit(),
        Idx200: sts.unit(),
        Idx201: sts.unit(),
        Idx202: sts.unit(),
        Idx203: sts.unit(),
        Idx204: sts.unit(),
        Idx205: sts.unit(),
        Idx206: sts.unit(),
        Idx207: sts.unit(),
        Idx208: sts.unit(),
        Idx209: sts.unit(),
        Idx21: sts.unit(),
        Idx210: sts.unit(),
        Idx211: sts.unit(),
        Idx212: sts.unit(),
        Idx213: sts.unit(),
        Idx214: sts.unit(),
        Idx215: sts.unit(),
        Idx216: sts.unit(),
        Idx217: sts.unit(),
        Idx218: sts.unit(),
        Idx219: sts.unit(),
        Idx22: sts.unit(),
        Idx220: sts.unit(),
        Idx221: sts.unit(),
        Idx222: sts.unit(),
        Idx223: sts.unit(),
        Idx224: sts.unit(),
        Idx225: sts.unit(),
        Idx226: sts.unit(),
        Idx227: sts.unit(),
        Idx228: sts.unit(),
        Idx229: sts.unit(),
        Idx23: sts.unit(),
        Idx230: sts.unit(),
        Idx231: sts.unit(),
        Idx232: sts.unit(),
        Idx233: sts.unit(),
        Idx234: sts.unit(),
        Idx235: sts.unit(),
        Idx236: sts.unit(),
        Idx237: sts.unit(),
        Idx238: sts.unit(),
        Idx24: sts.unit(),
        Idx25: sts.unit(),
        Idx26: sts.unit(),
        Idx27: sts.unit(),
        Idx28: sts.unit(),
        Idx29: sts.unit(),
        Idx3: sts.unit(),
        Idx30: sts.unit(),
        Idx31: sts.unit(),
        Idx32: sts.unit(),
        Idx33: sts.unit(),
        Idx34: sts.unit(),
        Idx35: sts.unit(),
        Idx36: sts.unit(),
        Idx37: sts.unit(),
        Idx38: sts.unit(),
        Idx39: sts.unit(),
        Idx4: sts.unit(),
        Idx40: sts.unit(),
        Idx41: sts.unit(),
        Idx42: sts.unit(),
        Idx43: sts.unit(),
        Idx44: sts.unit(),
        Idx45: sts.unit(),
        Idx46: sts.unit(),
        Idx47: sts.unit(),
        Idx48: sts.unit(),
        Idx49: sts.unit(),
        Idx5: sts.unit(),
        Idx50: sts.unit(),
        Idx51: sts.unit(),
        Idx52: sts.unit(),
        Idx53: sts.unit(),
        Idx54: sts.unit(),
        Idx55: sts.unit(),
        Idx56: sts.unit(),
        Idx57: sts.unit(),
        Idx58: sts.unit(),
        Idx59: sts.unit(),
        Idx6: sts.unit(),
        Idx60: sts.unit(),
        Idx61: sts.unit(),
        Idx62: sts.unit(),
        Idx63: sts.unit(),
        Idx64: sts.unit(),
        Idx65: sts.unit(),
        Idx66: sts.unit(),
        Idx67: sts.unit(),
        Idx68: sts.unit(),
        Idx69: sts.unit(),
        Idx7: sts.unit(),
        Idx70: sts.unit(),
        Idx71: sts.unit(),
        Idx72: sts.unit(),
        Idx73: sts.unit(),
        Idx74: sts.unit(),
        Idx75: sts.unit(),
        Idx76: sts.unit(),
        Idx77: sts.unit(),
        Idx78: sts.unit(),
        Idx79: sts.unit(),
        Idx8: sts.unit(),
        Idx80: sts.unit(),
        Idx81: sts.unit(),
        Idx82: sts.unit(),
        Idx83: sts.unit(),
        Idx84: sts.unit(),
        Idx85: sts.unit(),
        Idx86: sts.unit(),
        Idx87: sts.unit(),
        Idx88: sts.unit(),
        Idx89: sts.unit(),
        Idx9: sts.unit(),
        Idx90: sts.unit(),
        Idx91: sts.unit(),
        Idx92: sts.unit(),
        Idx93: sts.unit(),
        Idx94: sts.unit(),
        Idx95: sts.unit(),
        Idx96: sts.unit(),
        Idx97: sts.unit(),
        Idx98: sts.unit(),
        Idx99: sts.unit(),
        IdxU16: sts.number(),
        IdxU32: sts.number(),
        IdxU64: sts.bigint(),
    }
})

export const AccountId = sts.bytes()

export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Type_42,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Type_42),
        }),
    }
})

export const Type_42: sts.Type<Type_42> = sts.closedEnum(() => {
    return  {
        AuthorityDiscovery: AuthorityDiscoveryCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        CereDDCModule: CereDDCModuleCall,
        ChainBridge: ChainBridgeCall,
        Contracts: ContractsCall,
        Council: CouncilCall,
        DdcMetricsOffchainWorker: DdcMetricsOffchainWorkerCall,
        Democracy: DemocracyCall,
        Elections: ElectionsCall,
        Erc20: Erc20Call,
        Erc721: Erc721Call,
        FinalityTracker: FinalityTrackerCall,
        Grandpa: GrandpaCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        Indices: IndicesCall,
        Multisig: MultisigCall,
        Offences: OffencesCall,
        Proxy: ProxyCall,
        RandomnessCollectiveFlip: RandomnessCollectiveFlipCall,
        Recovery: RecoveryCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Society: SocietyCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
        approve_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        award_bounty: sts.enumStruct({
            bountyId: sts.number(),
            beneficiary: LookupSource,
        }),
        claim_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        close_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        close_tip: sts.enumStruct({
            hash: Hash,
        }),
        extend_bounty_expiry: sts.enumStruct({
            bountyId: sts.number(),
            remark: sts.bytes(),
        }),
        propose_bounty: sts.enumStruct({
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        propose_curator: sts.enumStruct({
            bountyId: sts.number(),
            curator: LookupSource,
            fee: sts.bigint(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: LookupSource,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        report_awesome: sts.enumStruct({
            reason: sts.bytes(),
            who: AccountId,
        }),
        retract_tip: sts.enumStruct({
            hash: Hash,
        }),
        tip: sts.enumStruct({
            hash: Hash,
            tipValue: sts.bigint(),
        }),
        tip_new: sts.enumStruct({
            reason: sts.bytes(),
            who: AccountId,
            tipValue: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
    }
})

export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: AccountId,
        }),
        change_key: sts.enumStruct({
            new: AccountId,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: AccountId,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId),
        }),
        set_prime: sts.enumStruct({
            who: AccountId,
        }),
        swap_member: sts.enumStruct({
            remove: AccountId,
            add: AccountId,
        }),
    }
})

export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: Hash,
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const MemberCount = sts.number()

export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        fill_block: sts.enumStruct({
            ratio: Perbill,
        }),
        kill_prefix: sts.enumStruct({
            prefix: Key,
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => Key),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_changes_trie_config: sts.enumStruct({
            changesTrieConfig: sts.option(() => ChangesTrieConfiguration),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => KeyValue),
        }),
        suicide: sts.unit(),
    }
})

export const KeyValue = sts.tuple(() => [StorageKey, StorageData])

export const StorageData = sts.bytes()

export const StorageKey = sts.bytes()

export const ChangesTrieConfiguration: sts.Type<ChangesTrieConfiguration> = sts.struct(() => {
    return  {
        digestInterval: sts.number(),
        digestLevels: sts.number(),
    }
})

export const Key = sts.bytes()

export const Perbill = sts.number()

export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: LookupSource,
        }),
        sudo: sts.enumStruct({
            call: Type_42,
        }),
        sudo_as: sts.enumStruct({
            who: LookupSource,
            call: Type_42,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Type_42,
            weight: Weight,
        }),
    }
})

export const Weight = sts.bigint()

export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            controller: LookupSource,
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: EraIndex,
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => LookupSource),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId,
            era: EraIndex,
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.enumStruct({
            controller: LookupSource,
        }),
        set_history_depth: sts.enumStruct({
            newHistoryDepth: sts.number(),
            eraItemsDeleted: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId),
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        submit_election_solution: sts.enumStruct({
            winners: sts.array(() => ValidatorIndex),
            compact: CompactAssignments,
            score: ElectionScore,
            era: EraIndex,
            size: ElectionSize,
        }),
        submit_election_solution_unsigned: sts.enumStruct({
            winners: sts.array(() => ValidatorIndex),
            compact: CompactAssignments,
            score: ElectionScore,
            era: EraIndex,
            size: ElectionSize,
        }),
        unbond: sts.enumStruct({
            value: sts.bigint(),
        }),
        validate: sts.enumStruct({
            prefs: ValidatorPrefs,
        }),
        withdraw_unbonded: sts.enumStruct({
            numSlashingSpans: sts.number(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
    }
})

export const ElectionSize: sts.Type<ElectionSize> = sts.struct(() => {
    return  {
        validators: sts.number(),
        nominators: sts.number(),
    }
})

export const ElectionScore = sts.array(() => sts.bigint())

export const CompactAssignments: sts.Type<CompactAssignments> = sts.struct(() => {
    return  {
        votes1: sts.array(() => sts.tuple(() => [NominatorIndexCompact, ValidatorIndexCompact])),
        votes2: sts.array(() => sts.tuple(() => [NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact])),
        votes3: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes4: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes5: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes6: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes7: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes8: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes9: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes10: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes11: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes12: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes13: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes14: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes15: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes16: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
    }
})

export const CompactScoreCompact = sts.tuple(() => [ValidatorIndexCompact, OffchainAccuracyCompact])

export const OffchainAccuracyCompact = sts.number()

export const ValidatorIndexCompact = sts.number()

export const NominatorIndexCompact = sts.number()

export const ValidatorIndex = sts.number()

export const Percent = sts.number()

export const EraIndex = sts.number()

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        Account: AccountId,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

export const SocietyCall: sts.Type<SocietyCall> = sts.closedEnum(() => {
    return  {
        bid: sts.enumStruct({
            value: BalanceOf,
        }),
        defender_vote: sts.enumStruct({
            approve: sts.boolean(),
        }),
        found: sts.enumStruct({
            founder: AccountId,
            maxMembers: sts.number(),
            rules: sts.bytes(),
        }),
        judge_suspended_candidate: sts.enumStruct({
            who: AccountId,
            judgement: SocietyJudgement,
        }),
        judge_suspended_member: sts.enumStruct({
            who: AccountId,
            forgive: sts.boolean(),
        }),
        payout: sts.unit(),
        set_max_members: sts.enumStruct({
            max: sts.number(),
        }),
        unbid: sts.enumStruct({
            pos: sts.number(),
        }),
        unfound: sts.unit(),
        unvouch: sts.enumStruct({
            pos: sts.number(),
        }),
        vote: sts.enumStruct({
            candidate: LookupSource,
            approve: sts.boolean(),
        }),
        vouch: sts.enumStruct({
            who: AccountId,
            value: BalanceOf,
            tip: BalanceOf,
        }),
    }
})

export const SocietyJudgement: sts.Type<SocietyJudgement> = sts.closedEnum(() => {
    return  {
        Approve: sts.unit(),
        Rebid: sts.unit(),
        Reject: sts.unit(),
    }
})

export const BalanceOf = sts.bigint()

export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: Keys,
            proof: sts.bytes(),
        }),
    }
})

export const Keys = sts.tuple(() => [AccountId, AccountId, AccountId, AccountId])

export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: BlockNumber,
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_42,
        }),
        schedule_after: sts.enumStruct({
            after: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_42,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_42,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_42,
        }),
    }
})

export const Priority = sts.number()

export const Period = sts.tuple(() => [BlockNumber, sts.number()])

export const RecoveryCall: sts.Type<RecoveryCall> = sts.closedEnum(() => {
    return  {
        as_recovered: sts.enumStruct({
            account: AccountId,
            call: Type_42,
        }),
        cancel_recovered: sts.enumStruct({
            account: AccountId,
        }),
        claim_recovery: sts.enumStruct({
            account: AccountId,
        }),
        close_recovery: sts.enumStruct({
            rescuer: AccountId,
        }),
        create_recovery: sts.enumStruct({
            friends: sts.array(() => AccountId),
            threshold: sts.number(),
            delayPeriod: BlockNumber,
        }),
        initiate_recovery: sts.enumStruct({
            account: AccountId,
        }),
        remove_recovery: sts.unit(),
        set_recovered: sts.enumStruct({
            lost: AccountId,
            rescuer: AccountId,
        }),
        vouch_recovery: sts.enumStruct({
            lost: AccountId,
            rescuer: AccountId,
        }),
    }
})

export const RandomnessCollectiveFlipCall: sts.Type<RandomnessCollectiveFlipCall> = sts.closedEnum(() => {
    return  {
    }
})

export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: AccountId,
            proxyType: ProxyType,
            delay: BlockNumber,
        }),
        announce: sts.enumStruct({
            real: AccountId,
            callHash: CallHashOf,
        }),
        anonymous: sts.enumStruct({
            proxyType: ProxyType,
            delay: BlockNumber,
            index: sts.number(),
        }),
        kill_anonymous: sts.enumStruct({
            spawner: AccountId,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: AccountId,
            forceProxyType: sts.option(() => ProxyType),
            call: Type_42,
        }),
        proxy_announced: sts.enumStruct({
            delegate: AccountId,
            real: AccountId,
            forceProxyType: sts.option(() => ProxyType),
            call: Type_42,
        }),
        reject_announcement: sts.enumStruct({
            delegate: AccountId,
            callHash: CallHashOf,
        }),
        remove_announcement: sts.enumStruct({
            real: AccountId,
            callHash: CallHashOf,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: AccountId,
            proxyType: ProxyType,
            delay: BlockNumber,
        }),
    }
})

export const CallHashOf = sts.bytes()

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Governance: sts.unit(),
        NonTransfer: sts.unit(),
        Staking: sts.unit(),
    }
})

export const OffencesCall: sts.Type<OffencesCall> = sts.closedEnum(() => {
    return  {
    }
})

export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            maybeTimepoint: sts.option(() => Timepoint),
            call: OpaqueCall,
            storeCall: sts.boolean(),
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId),
            call: Type_42,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

export const OpaqueCall = sts.bytes()

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: BlockNumber,
        index: sts.number(),
    }
})

export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: AccountIndex,
        }),
        force_transfer: sts.enumStruct({
            new: AccountId,
            index: AccountIndex,
            freeze: sts.boolean(),
        }),
        free: sts.enumStruct({
            index: AccountIndex,
        }),
        freeze: sts.enumStruct({
            index: AccountIndex,
        }),
        transfer: sts.enumStruct({
            new: AccountId,
            index: AccountIndex,
        }),
    }
})

export const AccountIndex = sts.number()

export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return  {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: Signature,
        }),
    }
})

export const Signature = sts.bytes()

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return  {
        blockNumber: BlockNumber,
        networkState: OpaqueNetworkState,
        sessionIndex: SessionIndex,
        authorityIndex: AuthIndex,
        validatorsLen: sts.number(),
    }
})

export const AuthIndex = sts.number()

export const SessionIndex = sts.number()

export const OpaqueNetworkState: sts.Type<OpaqueNetworkState> = sts.struct(() => {
    return  {
        peerId: OpaquePeerId,
        externalAddresses: sts.array(() => OpaqueMultiaddr),
    }
})

export const OpaqueMultiaddr = sts.bytes()

export const OpaquePeerId = sts.bytes()

export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        add_registrar: sts.enumStruct({
            account: AccountId,
        }),
        add_sub: sts.enumStruct({
            sub: LookupSource,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: RegistrarIndex,
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: LookupSource,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: LookupSource,
            judgement: IdentityJudgement,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: LookupSource,
        }),
        rename_sub: sts.enumStruct({
            sub: LookupSource,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: AccountId,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: sts.bigint(),
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => IdentityInfoAdditional),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => H160),
        image: Data,
        twitter: Data,
    }
})

export const H160 = sts.bytes()

export const IdentityInfoAdditional = sts.tuple(() => [Data, Data])

export const IdentityJudgement: sts.Type<IdentityJudgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: Balance,
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export const RegistrarIndex = sts.number()

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: H256,
        Keccak256: H256,
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: H256,
        ShaThree256: H256,
    }
})

export const H256 = sts.bytes()

export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return  {
        note_stalled: sts.enumStruct({
            delay: BlockNumber,
            bestFinalizedBlockNumber: BlockNumber,
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: GrandpaEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: GrandpaEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
    }
})

export const KeyOwnerProof: sts.Type<KeyOwnerProof> = sts.struct(() => {
    return  {
        session: SessionIndex,
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: ValidatorCount,
    }
})

export const ValidatorCount = sts.number()

export const GrandpaEquivocationProof: sts.Type<GrandpaEquivocationProof> = sts.struct(() => {
    return  {
        setId: SetId,
        equivocation: GrandpaEquivocation,
    }
})

export const GrandpaEquivocation: sts.Type<GrandpaEquivocation> = sts.closedEnum(() => {
    return  {
        Precommit: GrandpaEquivocationValue,
        Prevote: GrandpaEquivocationValue,
    }
})

export const GrandpaEquivocationValue: sts.Type<GrandpaEquivocationValue> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: AuthorityId,
        first: sts.tuple(() => [GrandpaPrevote, AuthoritySignature]),
        second: sts.tuple(() => [GrandpaPrevote, AuthoritySignature]),
    }
})

export const AuthoritySignature = sts.bytes()

export const GrandpaPrevote: sts.Type<GrandpaPrevote> = sts.struct(() => {
    return  {
        targetHash: Hash,
        targetNumber: BlockNumber,
    }
})

export const AuthorityId = sts.bytes()

export const SetId = sts.bigint()

export const FinalityTrackerCall: sts.Type<FinalityTrackerCall> = sts.closedEnum(() => {
    return  {
        final_hint: sts.enumStruct({
            hint: sts.number(),
        }),
    }
})

export const Erc721Call: sts.Type<Erc721Call> = sts.closedEnum(() => {
    return  {
        burn: sts.enumStruct({
            id: TokenId,
        }),
        mint: sts.enumStruct({
            owner: AccountId,
            id: TokenId,
            metadata: sts.bytes(),
        }),
        transfer: sts.enumStruct({
            to: AccountId,
            id: TokenId,
        }),
    }
})

export const TokenId = sts.bigint()

export const Erc20Call: sts.Type<Erc20Call> = sts.closedEnum(() => {
    return  {
        mint_erc721: sts.enumStruct({
            recipient: AccountId,
            id: sts.bigint(),
            metadata: sts.bytes(),
        }),
        remark: sts.enumStruct({
            hash: Hash,
        }),
        transfer: sts.enumStruct({
            to: AccountId,
            amount: BalanceOf,
        }),
        transfer_erc721: sts.enumStruct({
            recipient: sts.bytes(),
            tokenId: sts.bigint(),
            destId: ChainId,
        }),
        transfer_hash: sts.enumStruct({
            hash: Hash,
            destId: ChainId,
        }),
        transfer_native: sts.enumStruct({
            amount: BalanceOf,
            recipient: sts.bytes(),
            destId: ChainId,
        }),
    }
})

export const ChainId = sts.number()

export const ElectionsCall: sts.Type<ElectionsCall> = sts.closedEnum(() => {
    return  {
        remove_member: sts.enumStruct({
            who: LookupSource,
            hasReplacement: sts.boolean(),
        }),
        remove_voter: sts.unit(),
        renounce_candidacy: sts.enumStruct({
            renouncing: Renouncing,
        }),
        report_defunct_voter: sts.enumStruct({
            defunct: DefunctVoter,
        }),
        submit_candidacy: sts.enumStruct({
            candidateCount: sts.number(),
        }),
        vote: sts.enumStruct({
            votes: sts.array(() => AccountId),
            value: sts.bigint(),
        }),
    }
})

export const DefunctVoter: sts.Type<DefunctVoter> = sts.struct(() => {
    return  {
        who: AccountId,
        voteCount: sts.number(),
        candidateCount: sts.number(),
    }
})

export const Renouncing: sts.Type<Renouncing> = sts.closedEnum(() => {
    return  {
        Candidate: sts.number(),
        Member: sts.unit(),
        RunnerUp: sts.unit(),
    }
})

export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        cancel_queued: sts.enumStruct({
            which: ReferendumIndex,
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: AccountId,
            conviction: Conviction,
            balance: BalanceOf,
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: ReferendumIndex,
        }),
        enact_proposal: sts.enumStruct({
            proposalHash: Hash,
            index: ReferendumIndex,
        }),
        external_propose: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_default: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_majority: sts.enumStruct({
            proposalHash: Hash,
        }),
        fast_track: sts.enumStruct({
            proposalHash: Hash,
            votingPeriod: BlockNumber,
            delay: BlockNumber,
        }),
        note_imminent_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_imminent_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        propose: sts.enumStruct({
            proposalHash: Hash,
            value: sts.bigint(),
        }),
        reap_preimage: sts.enumStruct({
            proposalHash: Hash,
            proposalLenUpperBound: sts.number(),
        }),
        remove_other_vote: sts.enumStruct({
            target: AccountId,
            index: ReferendumIndex,
        }),
        remove_vote: sts.enumStruct({
            index: ReferendumIndex,
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: AccountId,
        }),
        veto_external: sts.enumStruct({
            proposalHash: Hash,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: AccountVoteSplit,
        Standard: AccountVoteStandard,
    }
})

export const AccountVoteStandard: sts.Type<AccountVoteStandard> = sts.struct(() => {
    return  {
        vote: Vote,
        balance: Balance,
    }
})

export const Vote = sts.number()

export const AccountVoteSplit: sts.Type<AccountVoteSplit> = sts.struct(() => {
    return  {
        aye: Balance,
        nay: Balance,
    }
})

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return  {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

export const ReferendumIndex = sts.number()

export const DdcMetricsOffchainWorkerCall: sts.Type<DdcMetricsOffchainWorkerCall> = sts.closedEnum(() => {
    return  {
    }
})

export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: Hash,
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const ContractsCall: sts.Type<ContractsCall> = sts.closedEnum(() => {
    return  {
        call: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            data: sts.bytes(),
        }),
        claim_surcharge: sts.enumStruct({
            dest: AccountId,
            auxSender: sts.option(() => AccountId),
        }),
        instantiate: sts.enumStruct({
            endowment: sts.bigint(),
            gasLimit: sts.bigint(),
            codeHash: CodeHash,
            data: sts.bytes(),
        }),
        put_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        update_schedule: sts.enumStruct({
            schedule: Schedule,
        }),
    }
})

export const Schedule: sts.Type<Schedule> = sts.struct(() => {
    return  {
        version: sts.number(),
        enablePrintln: sts.boolean(),
        limits: Limits,
        instructionWeights: InstructionWeights,
        hostFnWeights: HostFnWeights,
    }
})

export const HostFnWeights: sts.Type<HostFnWeights> = sts.struct(() => {
    return  {
        caller: Weight,
        address: Weight,
        gasLeft: Weight,
        balance: Weight,
        valueTransferred: Weight,
        minimumBalance: Weight,
        tombstoneDeposit: Weight,
        rentAllowance: Weight,
        blockNumber: Weight,
        now: Weight,
        weightToFee: Weight,
        gas: Weight,
        input: Weight,
        inputPerByte: Weight,
        return: Weight,
        returnPerByte: Weight,
        terminate: Weight,
        terminatePerCodeByte: Weight,
        restoreTo: Weight,
        restoreToPerCallerCodeByte: Weight,
        restoreToPerTombstoneCodeByte: Weight,
        restoreToPerDelta: Weight,
        random: Weight,
        depositEvent: Weight,
        depositEventPerTopic: Weight,
        depositEventPerByte: Weight,
        setRentAllowance: Weight,
        setStorage: Weight,
        setStoragePerByte: Weight,
        clearStorage: Weight,
        getStorage: Weight,
        getStoragePerByte: Weight,
        transfer: Weight,
        call: Weight,
        callPerCodeByte: Weight,
        callTransferSurcharge: Weight,
        callPerInputByte: Weight,
        callPerOutputByte: Weight,
        instantiate: Weight,
        instantiatePerCodeByte: Weight,
        instantiatePerInputByte: Weight,
        instantiatePerOutputByte: Weight,
        instantiatePerSaltByte: Weight,
        hashSha2256: Weight,
        hashSha2256PerByte: Weight,
        hashKeccak256: Weight,
        hashKeccak256PerByte: Weight,
        hashBlake2256: Weight,
        hashBlake2256PerByte: Weight,
        hashBlake2128: Weight,
        hashBlake2128PerByte: Weight,
        rentParams: Weight,
    }
})

export const InstructionWeights: sts.Type<InstructionWeights> = sts.struct(() => {
    return  {
        i64Const: sts.number(),
        i64Load: sts.number(),
        i64Store: sts.number(),
        select: sts.number(),
        rIf: sts.number(),
        br: sts.number(),
        brIf: sts.number(),
        brIable: sts.number(),
        brIablePerEntry: sts.number(),
        call: sts.number(),
        callIndirect: sts.number(),
        callIndirectPerParam: sts.number(),
        localGet: sts.number(),
        localSet: sts.number(),
        localTee: sts.number(),
        globalGet: sts.number(),
        globalSet: sts.number(),
        memoryCurrent: sts.number(),
        memoryGrow: sts.number(),
        i64Clz: sts.number(),
        i64Ctz: sts.number(),
        i64Popcnt: sts.number(),
        i64Eqz: sts.number(),
        i64Extendsi32: sts.number(),
        i64Extendui32: sts.number(),
        i32Wrapi64: sts.number(),
        i64Eq: sts.number(),
        i64Ne: sts.number(),
        i64Lts: sts.number(),
        i64Ltu: sts.number(),
        i64Gts: sts.number(),
        i64Gtu: sts.number(),
        i64Les: sts.number(),
        i64Leu: sts.number(),
        i64Ges: sts.number(),
        i64Geu: sts.number(),
        i64Add: sts.number(),
        i64Sub: sts.number(),
        i64Mul: sts.number(),
        i64Divs: sts.number(),
        i64Divu: sts.number(),
        i64Rems: sts.number(),
        i64Remu: sts.number(),
        i64And: sts.number(),
        i64Or: sts.number(),
        i64Xor: sts.number(),
        i64Shl: sts.number(),
        i64Shrs: sts.number(),
        i64Shru: sts.number(),
        i64Rotl: sts.number(),
        i64Rotr: sts.number(),
    }
})

export const Limits: sts.Type<Limits> = sts.struct(() => {
    return  {
        eventTopics: sts.number(),
        stackHeight: sts.number(),
        globals: sts.number(),
        parameters: sts.number(),
        memoryPages: sts.number(),
        tableSize: sts.number(),
        brTableSize: sts.number(),
        subjectLen: sts.number(),
    }
})

export const CodeHash = sts.bytes()

export const ChainBridgeCall: sts.Type<ChainBridgeCall> = sts.closedEnum(() => {
    return  {
        acknowledge_proposal: sts.enumStruct({
            nonce: DepositNonce,
            srcId: ChainId,
            rId: ResourceId,
            call: Proposal,
        }),
        add_relayer: sts.enumStruct({
            v: AccountId,
        }),
        eval_vote_state: sts.enumStruct({
            nonce: DepositNonce,
            srcId: ChainId,
            prop: Proposal,
        }),
        reject_proposal: sts.enumStruct({
            nonce: DepositNonce,
            srcId: ChainId,
            rId: ResourceId,
            call: Proposal,
        }),
        remove_relayer: sts.enumStruct({
            v: AccountId,
        }),
        remove_resource: sts.enumStruct({
            id: ResourceId,
        }),
        set_resource: sts.enumStruct({
            id: ResourceId,
            method: sts.bytes(),
        }),
        set_threshold: sts.enumStruct({
            threshold: sts.number(),
        }),
        whitelist_chain: sts.enumStruct({
            id: ChainId,
        }),
    }
})

export const ResourceId = sts.bytes()

export const DepositNonce = sts.bigint()

export const CereDDCModuleCall: sts.Type<CereDDCModuleCall> = sts.closedEnum(() => {
    return  {
        send_data: sts.enumStruct({
            sendTo: AccountId,
            data: sts.bytes(),
        }),
    }
})

export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: LookupSource,
            dest: LookupSource,
            value: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: LookupSource,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
    }
})

export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return  {
        report_equivocation: sts.enumStruct({
            equivocationProof: BabeEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: BabeEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
    }
})

export const BabeEquivocationProof: sts.Type<BabeEquivocationProof> = sts.struct(() => {
    return  {
        offender: AuthorityId,
        slotNumber: SlotNumber,
        firstHeader: Header,
        secondHeader: Header,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: Hash,
        number: sts.number(),
        stateRoot: Hash,
        extrinsicsRoot: Hash,
        digest: Digest,
    }
})

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return  {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return  {
        AuthoritiesChange: sts.array(() => AuthorityId),
        ChangesTrieRoot: Hash,
        ChangesTrieSignal: ChangesTrieSignal,
        Consensus: Consensus,
        Other: sts.bytes(),
        PreRuntime: PreRuntime,
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: Seal,
        SealV0: SealV0,
    }
})

export const SealV0 = sts.tuple(() => [sts.bigint(), Signature])

export const Seal = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const PreRuntime = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const Consensus = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const ConsensusEngineId = sts.bytes()

export const ChangesTrieSignal: sts.Type<ChangesTrieSignal> = sts.closedEnum(() => {
    return  {
        NewConfiguration: sts.option(() => ChangesTrieConfiguration),
    }
})

export const SlotNumber = sts.bigint()

export const AuthorshipCall: sts.Type<AuthorshipCall> = sts.closedEnum(() => {
    return  {
        set_uncles: sts.enumStruct({
            newUncles: sts.array(() => Header),
        }),
    }
})

export const AuthorityDiscoveryCall: sts.Type<AuthorityDiscoveryCall> = sts.closedEnum(() => {
    return  {
    }
})

export const Hash = sts.bytes()
