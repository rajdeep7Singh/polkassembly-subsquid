import {sts, Result, Option, Bytes, BitSequence} from './support'

export type ReferendumIndex = number

export type ReferendumInfo = ReferendumInfo_Finished | ReferendumInfo_Ongoing

export interface ReferendumInfo_Finished {
    __kind: 'Finished'
    value: ReferendumInfoFinished
}

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export interface ReferendumStatus {
    end: BlockNumber
    proposalHash: Hash
    threshold: VoteThreshold
    delay: BlockNumber
    tally: Tally
}

export interface Tally {
    ayes: Balance
    nays: Balance
    turnout: Balance
}

export type VoteThreshold = VoteThreshold_SimpleMajority | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SuperMajorityApprove

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export type BlockNumber = number

export interface ReferendumInfoFinished {
    approved: boolean
    end: BlockNumber
}

export const ReferendumInfo: sts.Type<ReferendumInfo> = sts.closedEnum(() => {
    return  {
        Finished: ReferendumInfoFinished,
        Ongoing: ReferendumStatus,
    }
})

export const ReferendumStatus: sts.Type<ReferendumStatus> = sts.struct(() => {
    return  {
        end: BlockNumber,
        proposalHash: Hash,
        threshold: VoteThreshold,
        delay: BlockNumber,
        tally: Tally,
    }
})

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: Balance,
        nays: Balance,
        turnout: Balance,
    }
})

export const ReferendumInfoFinished: sts.Type<ReferendumInfoFinished> = sts.struct(() => {
    return  {
        approved: sts.boolean(),
        end: BlockNumber,
    }
})

export type PreimageStatus = PreimageStatus_Available | PreimageStatus_Missing

export interface PreimageStatus_Available {
    __kind: 'Available'
    value: PreimageStatusAvailable
}

export interface PreimageStatus_Missing {
    __kind: 'Missing'
    value: BlockNumber
}

export interface PreimageStatusAvailable {
    data: Bytes
    provider: AccountId
    deposit: Balance
    since: BlockNumber
    expiry?: (BlockNumber | undefined)
}

export const PreimageStatus: sts.Type<PreimageStatus> = sts.closedEnum(() => {
    return  {
        Available: PreimageStatusAvailable,
        Missing: BlockNumber,
    }
})

export const PreimageStatusAvailable: sts.Type<PreimageStatusAvailable> = sts.struct(() => {
    return  {
        data: sts.bytes(),
        provider: AccountId,
        deposit: Balance,
        since: BlockNumber,
        expiry: sts.option(() => BlockNumber),
    }
})

export type Hash = Bytes

export type PropIndex = number

export type AccountId = Bytes

export interface AccountData {
    free: Balance
    reserved: Balance
    miscFrozen: Balance
    feeFrozen: Balance
}

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: Balance,
        reserved: Balance,
        miscFrozen: Balance,
        feeFrozen: Balance,
    }
})

export type Balance = bigint

export const BalanceOf = sts.bigint()

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

export interface AccountVoteStandard {
    vote: Vote
    balance: Balance
}

export type Vote = number

export const AccountVoteSplit: sts.Type<AccountVoteSplit> = sts.struct(() => {
    return  {
        aye: Balance,
        nay: Balance,
    }
})

export interface AccountVoteSplit {
    aye: Balance
    nay: Balance
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

export const EthTransaction: sts.Type<EthTransaction> = sts.struct(() => {
    return  {
        nonce: sts.bigint(),
        gasPrice: sts.bigint(),
        gasLimit: sts.bigint(),
        action: EthTransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        signature: EthTransactionSignature,
    }
})

export const EthTransactionSignature: sts.Type<EthTransactionSignature> = sts.struct(() => {
    return  {
        v: sts.bigint(),
        r: H256,
        s: H256,
    }
})

export const H256 = sts.bytes()

export interface EthTransactionSignature {
    v: bigint
    r: H256
    s: H256
}

export type H256 = Bytes

export const EthTransactionAction: sts.Type<EthTransactionAction> = sts.closedEnum(() => {
    return  {
        Call: H160,
        Create: sts.unit(),
    }
})

export const H160 = sts.bytes()

export type EthTransactionAction = EthTransactionAction_Call | EthTransactionAction_Create

export interface EthTransactionAction_Call {
    __kind: 'Call'
    value: H160
}

export interface EthTransactionAction_Create {
    __kind: 'Create'
}

export type H160 = Bytes

export interface EthTransaction {
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: EthTransactionAction
    value: bigint
    input: Bytes
    signature: EthTransactionSignature
}

export const Hash = sts.bytes()

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export const ReferendumIndex = sts.number()

export const AccountId = sts.bytes()

export const Balance = sts.bigint()

export const PropIndex = sts.number()

export const DispatchResult = sts.result(() => sts.unit(), () => DispatchError)

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: DispatchErrorModule,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
        UnknownAsset: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_Overflow | TokenError_Underflow | TokenError_UnknownAsset | TokenError_WouldDie

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export const DispatchErrorModule: sts.Type<DispatchErrorModule> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.number(),
    }
})

export interface DispatchErrorModule {
    index: number
    error: number
}

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export const TaskAddress = sts.tuple(() => [BlockNumber, sts.number()])

export const BlockNumber = sts.number()
