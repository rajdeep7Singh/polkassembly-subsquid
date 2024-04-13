import { BlockHeader, DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields, Event as _Event, Call as _Call, Extrinsic as _Extrinsic } from '@subsquid/substrate-processor'
import { lookupArchive } from '@subsquid/archive-registry'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import assert from 'assert'
import * as modules from './mappings'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://mainnet-rpc.polymesh.network',
        archive: 'https://v2.archive.subsquid.io/network/polymesh',
    })
    .setBlockRange({from: 0})
    .setFields({event: {}, call: { origin: true, success: true, error: true }, extrinsic: { hash: true, fee: true, tip: true }, block: { timestamp: true } })
    .setTypesBundle({
        "types": {
          "DispatchErrorModuleU8": {
            "index": "u8",
            "error": "u8"
          }
        },
        "versions": [
          {
            "minmax": [
              5004000,
              5004009
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null",
                  "NonFungible": "NonFungibleType"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]",
                  "FIGI": "[u8; 12]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "AssetMetadataName": "Text",
              "AssetMetadataValue": "Vec<u8>",
              "AssetMetadataLocalKey": "u64",
              "AssetMetadataGlobalKey": "u64",
              "AssetMetadataKey": {
                "_enum": {
                  "Global": "u64",
                  "Local": "u64"
                }
              },
              "AssetMetadataLockStatus": {
                "_enum": {
                  "Unlocked": "Null",
                  "Locked": "Null",
                  "LockedUntil": "Moment"
                }
              },
              "AssetMetadataValueDetail": {
                "expire": "Option<Moment>",
                "lock_status": "AssetMetadataLockStatus"
              },
              "AssetMetadataDescription": "Text",
              "AssetMetadataSpec": {
                "url": "Option<Url>",
                "description": "Option<AssetMetadataDescription>",
                "type_def": "Option<Vec<u8>>"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "key": "AccountId",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "H512"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "Option<AccountId>"
              },
              "KeyRecord": {
                "_enum": {
                  "PrimaryKey": "IdentityId",
                  "SecondaryKey": "(IdentityId, Permissions)",
                  "MultiSigSignerKey": "AccountId"
                }
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "[u8; 64]",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "CustomClaimTypeId": "u32",
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "CddId",
                  "Custom": "(CustomClaimTypeId, Option<Scope>)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null",
                  "Custom": "CustomClaimTypeId"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<IdentityId>",
                "nays": "Vec<IdentityId>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": "MultiSignature",
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)",
                  "RotatePrimaryKeyToSecondary": "Permissions"
                }
              },
              "AuthorizationNonce": "u64",
              "Percentage": "Permill",
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8; 32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetScope": {
                "_enum": {
                  "Ticker": "Ticker"
                }
              },
              "StatOpType": {
                "_enum": [
                  "Count",
                  "Balance"
                ]
              },
              "StatType": {
                "op": "StatOpType",
                "claim_issuer": "Option<(ClaimType, IdentityId)>"
              },
              "StatClaim": {
                "_enum": {
                  "Accredited": "bool",
                  "Affiliate": "bool",
                  "Jurisdiction": "Option<CountryCode>"
                }
              },
              "Stat1stKey": {
                "asset": "AssetScope",
                "stat_type": "StatType"
              },
              "Stat2ndKey": {
                "_enum": {
                  "NoClaimStat": "Null",
                  "Claim": "StatClaim"
                }
              },
              "StatUpdate": {
                "key2": "Stat2ndKey",
                "value": "Option<u128>"
              },
              "TransferCondition": {
                "_enum": {
                  "MaxInvestorCount": "u64",
                  "MaxInvestorOwnership": "Percentage",
                  "ClaimCount": "(StatClaim, IdentityId, u64, Option<u64>)",
                  "ClaimOwnership": "(StatClaim, IdentityId, Percentage, Percentage)"
                }
              },
              "AssetTransferCompliance": {
                "paused": "bool",
                "requirements": "Vec<TransferCondition>"
              },
              "TransferConditionExemptKey": {
                "asset": "AssetScope",
                "op": "StatOpType",
                "claim_type": "Option<ClaimType>"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "RpcDidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "RpcDidRecords": {
                "_enum": {
                  "Success": "RpcDidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null",
                  "RotatePrimaryKeyToSecondary": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber",
                  "SettleManual": "BlockNumber"
                }
              },
              "LegId": "u64",
              "InstructionId": "u64",
              "Instruction": {
                "instruction_id": "InstructionId",
                "venue_id": "VenueId",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "LegId",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "WeightPerClass": {
                "baseExtrinsic": "Weight",
                "maxExtrinsic": "Option<Weight>",
                "maxTotal": "Option<Weight>",
                "reserved": "Option<Weight>"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserId": "u64",
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "VenueId",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueId": "u64",
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "InitiateCorporateActionArgs": {
                "ticker": "Ticker",
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDateSpec>",
                "details": "CADetails",
                "targets": "Option<TargetIdentities>",
                "default_withholding_tax": "Option<Tax>",
                "withholding_tax": "Option<Vec<(IdentityId, Tax)>>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "transfer_condition_result": "Vec<TransferConditionResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferConditionResult": {
                "condition": "TransferCondition",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "Member": {
                "id": "IdentityId",
                "expiry_at": "Option<Moment>",
                "inactive_from": "Option<Moment>"
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              },
              "NFTId": "u64",
              "NFTs": {
                "ticker": "Ticker",
                "ids": "Vec<NFTId>"
              },
              "FungibleToken": {
                "ticker": "Ticker",
                "amount": "Balance"
              },
              "LegAsset": {
                "_enum": {
                  "Fungible": "FungibleToken",
                  "NonFungible": "NFTs"
                }
              },
              "LegV2": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "LegAsset"
              },
              "FundDescription": {
                "_enum": {
                  "Fungible": "FungibleToken",
                  "NonFungible": "NFTs"
                }
              },
              "Fund": {
                "description": "FundDescription",
                "memo": "Option<Memo>"
              },
              "NonFungibleType": {
                "_enum": {
                  "Derivative": "Null",
                  "FixedIncome": "Null",
                  "Invoice": "Null",
                  "Custom": "CustomAssetTypeId"
                }
              }
            }
          },
          {
            "minmax": [
              5003000,
              5003009
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null",
                  "NonFungible": "NonFungibleType"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]",
                  "FIGI": "[u8; 12]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "AssetMetadataName": "Text",
              "AssetMetadataValue": "Vec<u8>",
              "AssetMetadataLocalKey": "u64",
              "AssetMetadataGlobalKey": "u64",
              "AssetMetadataKey": {
                "_enum": {
                  "Global": "u64",
                  "Local": "u64"
                }
              },
              "AssetMetadataLockStatus": {
                "_enum": {
                  "Unlocked": "Null",
                  "Locked": "Null",
                  "LockedUntil": "Moment"
                }
              },
              "AssetMetadataValueDetail": {
                "expire": "Option<Moment>",
                "lock_status": "AssetMetadataLockStatus"
              },
              "AssetMetadataDescription": "Text",
              "AssetMetadataSpec": {
                "url": "Option<Url>",
                "description": "Option<AssetMetadataDescription>",
                "type_def": "Option<Vec<u8>>"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "key": "AccountId",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "H512"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "Option<AccountId>"
              },
              "KeyRecord": {
                "_enum": {
                  "PrimaryKey": "IdentityId",
                  "SecondaryKey": "(IdentityId, Permissions)",
                  "MultiSigSignerKey": "AccountId"
                }
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "[u8; 64]",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "CustomClaimTypeId": "u32",
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "CddId",
                  "Custom": "(CustomClaimTypeId, Option<Scope>)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null",
                  "Custom": "CustomClaimTypeId"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<IdentityId>",
                "nays": "Vec<IdentityId>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": "MultiSignature",
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)",
                  "RotatePrimaryKeyToSecondary": "Permissions"
                }
              },
              "AuthorizationNonce": "u64",
              "Percentage": "Permill",
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8; 32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetScope": {
                "_enum": {
                  "Ticker": "Ticker"
                }
              },
              "StatOpType": {
                "_enum": [
                  "Count",
                  "Balance"
                ]
              },
              "StatType": {
                "op": "StatOpType",
                "claim_issuer": "Option<(ClaimType, IdentityId)>"
              },
              "StatClaim": {
                "_enum": {
                  "Accredited": "bool",
                  "Affiliate": "bool",
                  "Jurisdiction": "Option<CountryCode>"
                }
              },
              "Stat1stKey": {
                "asset": "AssetScope",
                "stat_type": "StatType"
              },
              "Stat2ndKey": {
                "_enum": {
                  "NoClaimStat": "Null",
                  "Claim": "StatClaim"
                }
              },
              "StatUpdate": {
                "key2": "Stat2ndKey",
                "value": "Option<u128>"
              },
              "TransferCondition": {
                "_enum": {
                  "MaxInvestorCount": "u64",
                  "MaxInvestorOwnership": "Percentage",
                  "ClaimCount": "(StatClaim, IdentityId, u64, Option<u64>)",
                  "ClaimOwnership": "(StatClaim, IdentityId, Percentage, Percentage)"
                }
              },
              "AssetTransferCompliance": {
                "paused": "bool",
                "requirements": "Vec<TransferCondition>"
              },
              "TransferConditionExemptKey": {
                "asset": "AssetScope",
                "op": "StatOpType",
                "claim_type": "Option<ClaimType>"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "RpcDidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "RpcDidRecords": {
                "_enum": {
                  "Success": "RpcDidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null",
                  "RotatePrimaryKeyToSecondary": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber",
                  "SettleManual": "BlockNumber"
                }
              },
              "LegId": "u64",
              "InstructionId": "u64",
              "Instruction": {
                "instruction_id": "InstructionId",
                "venue_id": "VenueId",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "LegId",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "WeightPerClass": {
                "baseExtrinsic": "Weight",
                "maxExtrinsic": "Option<Weight>",
                "maxTotal": "Option<Weight>",
                "reserved": "Option<Weight>"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserId": "u64",
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "VenueId",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueId": "u64",
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "InitiateCorporateActionArgs": {
                "ticker": "Ticker",
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDateSpec>",
                "details": "CADetails",
                "targets": "Option<TargetIdentities>",
                "default_withholding_tax": "Option<Tax>",
                "withholding_tax": "Option<Vec<(IdentityId, Tax)>>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "transfer_condition_result": "Vec<TransferConditionResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferConditionResult": {
                "condition": "TransferCondition",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "Member": {
                "id": "IdentityId",
                "expiry_at": "Option<Moment>",
                "inactive_from": "Option<Moment>"
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              },
              "NFTId": "u64",
              "NFTs": {
                "ticker": "Ticker",
                "ids": "Vec<NFTId>"
              },
              "FungibleToken": {
                "ticker": "Ticker",
                "amount": "Balance"
              },
              "LegAsset": {
                "_enum": {
                  "Fungible": "FungibleToken",
                  "NonFungible": "NFTs"
                }
              },
              "LegV2": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "LegAsset"
              },
              "FundDescription": {
                "_enum": {
                  "Fungible": "FungibleToken",
                  "NonFungible": "NFTs"
                }
              },
              "Fund": {
                "description": "FundDescription",
                "memo": "Option<Memo>"
              },
              "NonFungibleType": {
                "_enum": {
                  "Derivative": "Null",
                  "FixedIncome": "Null",
                  "Invoice": "Null",
                  "Custom": "CustomAssetTypeId"
                }
              }
            }
          },
          {
            "minmax": [
              5002000,
              5002009
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]",
                  "FIGI": "[u8; 12]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "AssetMetadataName": "Text",
              "AssetMetadataValue": "Vec<u8>",
              "AssetMetadataLocalKey": "u64",
              "AssetMetadataGlobalKey": "u64",
              "AssetMetadataKey": {
                "_enum": {
                  "Global": "u64",
                  "Local": "u64"
                }
              },
              "AssetMetadataLockStatus": {
                "_enum": {
                  "Unlocked": "Null",
                  "Locked": "Null",
                  "LockedUntil": "Moment"
                }
              },
              "AssetMetadataValueDetail": {
                "expire": "Option<Moment>",
                "lock_status": "AssetMetadataLockStatus"
              },
              "AssetMetadataDescription": "Text",
              "AssetMetadataSpec": {
                "url": "Option<Url>",
                "description": "Option<AssetMetadataDescription>",
                "type_def": "Option<Vec<u8>>"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "key": "AccountId",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "H512"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "Option<AccountId>"
              },
              "KeyRecord": {
                "_enum": {
                  "PrimaryKey": "IdentityId",
                  "SecondaryKey": "(IdentityId, Permissions)",
                  "MultiSigSignerKey": "AccountId"
                }
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "[u8; 64]",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "CustomClaimTypeId": "u32",
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "CddId",
                  "Custom": "(CustomClaimTypeId, Option<Scope>)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null",
                  "Custom": "CustomClaimTypeId"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<IdentityId>",
                "nays": "Vec<IdentityId>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": "MultiSignature",
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)",
                  "RotatePrimaryKeyToSecondary": "Permissions"
                }
              },
              "AuthorizationNonce": "u64",
              "Percentage": "Permill",
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8; 32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetScope": {
                "_enum": {
                  "Ticker": "Ticker"
                }
              },
              "StatOpType": {
                "_enum": [
                  "Count",
                  "Balance"
                ]
              },
              "StatType": {
                "op": "StatOpType",
                "claim_issuer": "Option<(ClaimType, IdentityId)>"
              },
              "StatClaim": {
                "_enum": {
                  "Accredited": "bool",
                  "Affiliate": "bool",
                  "Jurisdiction": "Option<CountryCode>"
                }
              },
              "Stat1stKey": {
                "asset": "AssetScope",
                "stat_type": "StatType"
              },
              "Stat2ndKey": {
                "_enum": {
                  "NoClaimStat": "Null",
                  "Claim": "StatClaim"
                }
              },
              "StatUpdate": {
                "key2": "Stat2ndKey",
                "value": "Option<u128>"
              },
              "TransferCondition": {
                "_enum": {
                  "MaxInvestorCount": "u64",
                  "MaxInvestorOwnership": "Percentage",
                  "ClaimCount": "(StatClaim, IdentityId, u64, Option<u64>)",
                  "ClaimOwnership": "(StatClaim, IdentityId, Percentage, Percentage)"
                }
              },
              "AssetTransferCompliance": {
                "paused": "bool",
                "requirements": "Vec<TransferCondition>"
              },
              "TransferConditionExemptKey": {
                "asset": "AssetScope",
                "op": "StatOpType",
                "claim_type": "Option<ClaimType>"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "RpcDidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "RpcDidRecords": {
                "_enum": {
                  "Success": "RpcDidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null",
                  "RotatePrimaryKeyToSecondary": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber",
                  "SettleManual": "BlockNumber"
                }
              },
              "LegId": "u64",
              "InstructionId": "u64",
              "Instruction": {
                "instruction_id": "InstructionId",
                "venue_id": "VenueId",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "LegId",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "WeightPerClass": {
                "baseExtrinsic": "Weight",
                "maxExtrinsic": "Option<Weight>",
                "maxTotal": "Option<Weight>",
                "reserved": "Option<Weight>"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserId": "u64",
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "VenueId",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueId": "u64",
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "InitiateCorporateActionArgs": {
                "ticker": "Ticker",
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDateSpec>",
                "details": "CADetails",
                "targets": "Option<TargetIdentities>",
                "default_withholding_tax": "Option<Tax>",
                "withholding_tax": "Option<Vec<(IdentityId, Tax)>>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "transfer_condition_result": "Vec<TransferConditionResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferConditionResult": {
                "condition": "TransferCondition",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "Member": {
                "id": "IdentityId",
                "expiry_at": "Option<Moment>",
                "inactive_from": "Option<Moment>"
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              }
            }
          },
          {
            "minmax": [
              5001000,
              5001009
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]",
                  "FIGI": "[u8; 12]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "AssetMetadataName": "Text",
              "AssetMetadataValue": "Vec<u8>",
              "AssetMetadataLocalKey": "u64",
              "AssetMetadataGlobalKey": "u64",
              "AssetMetadataKey": {
                "_enum": {
                  "Global": "u64",
                  "Local": "u64"
                }
              },
              "AssetMetadataLockStatus": {
                "_enum": {
                  "Unlocked": "Null",
                  "Locked": "Null",
                  "LockedUntil": "Moment"
                }
              },
              "AssetMetadataValueDetail": {
                "expire": "Option<Moment>",
                "lock_status": "AssetMetadataLockStatus"
              },
              "AssetMetadataDescription": "Text",
              "AssetMetadataSpec": {
                "url": "Option<Url>",
                "description": "Option<AssetMetadataDescription>",
                "type_def": "Option<Vec<u8>>"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "key": "AccountId",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "H512"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "Option<AccountId>"
              },
              "KeyRecord": {
                "_enum": {
                  "PrimaryKey": "IdentityId",
                  "SecondaryKey": "(IdentityId, Permissions)",
                  "MultiSigSignerKey": "AccountId"
                }
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "[u8; 64]",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "(CddId)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<IdentityId>",
                "nays": "Vec<IdentityId>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": "MultiSignature",
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)",
                  "RotatePrimaryKeyToSecondary": "Permissions"
                }
              },
              "AuthorizationNonce": "u64",
              "Percentage": "Permill",
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8; 32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetScope": {
                "_enum": {
                  "Ticker": "Ticker"
                }
              },
              "StatOpType": {
                "_enum": [
                  "Count",
                  "Balance"
                ]
              },
              "StatType": {
                "op": "StatOpType",
                "claim_issuer": "Option<(ClaimType, IdentityId)>"
              },
              "StatClaim": {
                "_enum": {
                  "Accredited": "bool",
                  "Affiliate": "bool",
                  "Jurisdiction": "Option<CountryCode>"
                }
              },
              "Stat1stKey": {
                "asset": "AssetScope",
                "stat_type": "StatType"
              },
              "Stat2ndKey": {
                "_enum": {
                  "NoClaimStat": "Null",
                  "Claim": "StatClaim"
                }
              },
              "StatUpdate": {
                "key2": "Stat2ndKey",
                "value": "Option<u128>"
              },
              "TransferCondition": {
                "_enum": {
                  "MaxInvestorCount": "u64",
                  "MaxInvestorOwnership": "Percentage",
                  "ClaimCount": "(StatClaim, IdentityId, u64, Option<u64>)",
                  "ClaimOwnership": "(StatClaim, IdentityId, Percentage, Percentage)"
                }
              },
              "AssetTransferCompliance": {
                "paused": "bool",
                "requirements": "Vec<TransferCondition>"
              },
              "TransferConditionExemptKey": {
                "asset": "AssetScope",
                "op": "StatOpType",
                "claim_type": "Option<ClaimType>"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "RpcDidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "RpcDidRecords": {
                "_enum": {
                  "Success": "RpcDidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null",
                  "RotatePrimaryKeyToSecondary": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber"
                }
              },
              "LegId": "u64",
              "InstructionId": "u64",
              "Instruction": {
                "instruction_id": "InstructionId",
                "venue_id": "VenueId",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "LegId",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "WeightPerClass": {
                "baseExtrinsic": "Weight",
                "maxExtrinsic": "Option<Weight>",
                "maxTotal": "Option<Weight>",
                "reserved": "Option<Weight>"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserId": "u64",
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "VenueId",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueId": "u64",
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "ExtensionAttributes": {
                "usage_fee": "Balance",
                "version": "MetaVersion"
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "InitiateCorporateActionArgs": {
                "ticker": "Ticker",
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDateSpec>",
                "details": "CADetails",
                "targets": "Option<TargetIdentities>",
                "default_withholding_tax": "Option<Tax>",
                "withholding_tax": "Option<Vec<(IdentityId, Tax)>>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "transfer_condition_result": "Vec<TransferConditionResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferConditionResult": {
                "condition": "TransferCondition",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              }
            }
          },
          {
            "minmax": [
              5000000,
              5000009
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "AssetMetadataName": "Text",
              "AssetMetadataValue": "Vec<u8>",
              "AssetMetadataLocalKey": "u64",
              "AssetMetadataGlobalKey": "u64",
              "AssetMetadataKey": {
                "_enum": {
                  "Global": "u64",
                  "Local": "u64"
                }
              },
              "AssetMetadataLockStatus": {
                "_enum": {
                  "Unlocked": "Null",
                  "Locked": "Null",
                  "LockedUntil": "Moment"
                }
              },
              "AssetMetadataValueDetail": {
                "expire": "Option<Moment>",
                "lock_status": "AssetMetadataLockStatus"
              },
              "AssetMetadataDescription": "Text",
              "AssetMetadataSpec": {
                "url": "Option<Url>",
                "description": "Option<AssetMetadataDescription>",
                "type_def": "Option<Vec<u8>>"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "LegacyPalletPermissions": {
                "pallet_name": "PalletName",
                "total": "bool",
                "dispatchable_names": "Vec<DispatchableName>"
              },
              "LegacyPermissions": {
                "asset": "Option<Vec<Ticker>>",
                "extrinsic": "Option<Vec<LegacyPalletPermissions>>",
                "portfolio": "Option<Vec<PortfolioId>>"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "key": "AccountId",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "H512"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "Option<AccountId>"
              },
              "KeyRecord": {
                "_enum": {
                  "PrimaryKey": "IdentityId",
                  "SecondaryKey": "(IdentityId, Permissions)",
                  "MultiSigSignerKey": "AccountId"
                }
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": {
                "r": "CompressedRistretto",
                "s": "Scalar"
              },
              "CompressedRistretto": "[u8; 32]",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "(CddId)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<PolymeshPrimitivesConditionTrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<IdentityId>",
                "nays": "Vec<IdentityId>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "state": "ProposalState",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": "MultiSignature",
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)",
                  "RotatePrimaryKeyToSecondary": "Permissions"
                }
              },
              "SmartExtensionType": {
                "_enum": {
                  "TransferManager": "Null",
                  "Offerings": "Null",
                  "SmartWallet": "Null",
                  "Custom": "Vec<u8>"
                }
              },
              "SmartExtensionName": "Text",
              "SmartExtension": {
                "extension_type": "SmartExtensionType",
                "extension_name": "SmartExtensionName",
                "extension_id": "AccountId",
                "is_archive": "bool"
              },
              "MetaUrl": "Text",
              "MetaDescription": "Text",
              "MetaVersion": "u32",
              "ExtVersion": "u32",
              "TemplateMetadata": {
                "url": "Option<MetaUrl>",
                "se_type": "SmartExtensionType",
                "usage_fee": "Balance",
                "description": "MetaDescription",
                "version": "MetaVersion"
              },
              "TemplateDetails": {
                "instantiation_fee": "Balance",
                "owner": "IdentityId",
                "frozen": "bool"
              },
              "AuthorizationNonce": "u64",
              "Percentage": "Permill",
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8; 32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetScope": {
                "_enum": {
                  "Ticker": "Ticker"
                }
              },
              "StatOpType": {
                "_enum": [
                  "Count",
                  "Balance"
                ]
              },
              "StatType": {
                "op": "StatOpType",
                "claim_issuer": "Option<(ClaimType, IdentityId)>"
              },
              "StatClaim": {
                "_enum": {
                  "Accredited": "bool",
                  "Affiliate": "bool",
                  "Jurisdiction": "Option<CountryCode>"
                }
              },
              "Stat1stKey": {
                "asset": "AssetScope",
                "stat_type": "StatType"
              },
              "Stat2ndKey": {
                "_enum": {
                  "NoClaimStat": "Null",
                  "Claim": "StatClaim"
                }
              },
              "StatUpdate": {
                "key2": "Stat2ndKey",
                "value": "Option<u128>"
              },
              "TransferCondition": {
                "_enum": {
                  "MaxInvestorCount": "u64",
                  "MaxInvestorOwnership": "Percentage",
                  "ClaimCount": "(StatClaim, IdentityId, u64, Option<u64>)",
                  "ClaimOwnership": "(StatClaim, IdentityId, Percentage, Percentage)"
                }
              },
              "AssetTransferCompliance": {
                "paused": "bool",
                "requirements": "Vec<TransferCondition>"
              },
              "TransferConditionExemptKey": {
                "asset": "AssetScope",
                "op": "StatOpType",
                "claim_type": "Option<ClaimType>"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "RpcDidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "RpcDidRecords": {
                "_enum": {
                  "Success": "RpcDidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null",
                  "RotatePrimaryKeyToSecondary": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber"
                }
              },
              "LegId": "u64",
              "InstructionId": "u64",
              "Instruction": {
                "instruction_id": "InstructionId",
                "venue_id": "VenueId",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "LegId",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "WeightPerClass": {
                "baseExtrinsic": "Weight",
                "maxExtrinsic": "Option<Weight>",
                "maxTotal": "Option<Weight>",
                "reserved": "Option<Weight>"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserId": "u64",
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "VenueId",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueId": "u64",
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "ExtensionAttributes": {
                "usage_fee": "Balance",
                "version": "MetaVersion"
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "transfer_condition_result": "Vec<TransferConditionResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferConditionResult": {
                "condition": "TransferCondition",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              }
            }
          },
          {
            "minmax": [
              3010,
              3019
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "LegacyPalletPermissions": {
                "pallet_name": "PalletName",
                "total": "bool",
                "dispatchable_names": "Vec<DispatchableName>"
              },
              "LegacyPermissions": {
                "asset": "Option<Vec<Ticker>>",
                "extrinsic": "Option<Vec<LegacyPalletPermissions>>",
                "portfolio": "Option<Vec<PortfolioId>>"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "signer": "Signatory",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "Signature"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "Signature",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "(CddId)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<IdentityId>",
                "nays": "Vec<IdentityId>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "state": "ProposalState",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": {
                "_enum": {
                  "Ed25519": "H512",
                  "Sr25519": "H512",
                  "Ecdsa": "H512"
                }
              },
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)",
                  "RotatePrimaryKeyToSecondary": "Permissions"
                }
              },
              "SmartExtensionType": {
                "_enum": {
                  "TransferManager": "Null",
                  "Offerings": "Null",
                  "SmartWallet": "Null",
                  "Custom": "Vec<u8>"
                }
              },
              "SmartExtensionName": "Text",
              "SmartExtension": {
                "extension_type": "SmartExtensionType",
                "extension_name": "SmartExtensionName",
                "extension_id": "AccountId",
                "is_archive": "bool"
              },
              "MetaUrl": "Text",
              "MetaDescription": "Text",
              "MetaVersion": "u32",
              "ExtVersion": "u32",
              "TemplateMetadata": {
                "url": "Option<MetaUrl>",
                "se_type": "SmartExtensionType",
                "usage_fee": "Balance",
                "description": "MetaDescription",
                "version": "MetaVersion"
              },
              "TemplateDetails": {
                "instantiation_fee": "Balance",
                "owner": "IdentityId",
                "frozen": "bool"
              },
              "AuthorizationNonce": "u64",
              "Counter": "u64",
              "Percentage": "Permill",
              "TransferManager": {
                "_enum": {
                  "CountTransferManager": "Counter",
                  "PercentageTransferManager": "Percentage"
                }
              },
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8;32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "DidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "DidRecords": {
                "_enum": {
                  "Success": "DidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null",
                  "RotatePrimaryKeyToSecondary": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber"
                }
              },
              "LegId": "u64",
              "InstructionId": "u64",
              "Instruction": {
                "instruction_id": "InstructionId",
                "venue_id": "VenueId",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "LegId",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserId": "u64",
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "VenueId",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueId": "u64",
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "ExtensionAttributes": {
                "usage_fee": "Balance",
                "version": "MetaVersion"
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "statistics_result": "Vec<TransferManagerResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferManagerResult": {
                "tm": "TransferManager",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              },
              "DispatchErrorModule": "DispatchErrorModuleU8"
            }
          },
          {
            "minmax": [
              3002,
              3002
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "LegacyPalletPermissions": {
                "pallet_name": "PalletName",
                "total": "bool",
                "dispatchable_names": "Vec<DispatchableName>"
              },
              "LegacyPermissions": {
                "asset": "Option<Vec<Ticker>>",
                "extrinsic": "Option<Vec<LegacyPalletPermissions>>",
                "portfolio": "Option<Vec<PortfolioId>>"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "signer": "Signatory",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "Signature"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "Signature",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "(CddId)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<IdentityId>",
                "nays": "Vec<IdentityId>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "state": "ProposalState",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": {
                "_enum": {
                  "Ed25519": "H512",
                  "Sr25519": "H512",
                  "Ecdsa": "H512"
                }
              },
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)",
                  "RotatePrimaryKeyToSecondary": "Permissions"
                }
              },
              "SmartExtensionType": {
                "_enum": {
                  "TransferManager": "Null",
                  "Offerings": "Null",
                  "SmartWallet": "Null",
                  "Custom": "Vec<u8>"
                }
              },
              "SmartExtensionName": "Text",
              "SmartExtension": {
                "extension_type": "SmartExtensionType",
                "extension_name": "SmartExtensionName",
                "extension_id": "AccountId",
                "is_archive": "bool"
              },
              "MetaUrl": "Text",
              "MetaDescription": "Text",
              "MetaVersion": "u32",
              "ExtVersion": "u32",
              "TemplateMetadata": {
                "url": "Option<MetaUrl>",
                "se_type": "SmartExtensionType",
                "usage_fee": "Balance",
                "description": "MetaDescription",
                "version": "MetaVersion"
              },
              "TemplateDetails": {
                "instantiation_fee": "Balance",
                "owner": "IdentityId",
                "frozen": "bool"
              },
              "AuthorizationNonce": "u64",
              "Counter": "u64",
              "Percentage": "Permill",
              "TransferManager": {
                "_enum": {
                  "CountTransferManager": "Counter",
                  "PercentageTransferManager": "Percentage"
                }
              },
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8;32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "DidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "DidRecords": {
                "_enum": {
                  "Success": "DidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null",
                  "RotatePrimaryKeyToSecondary": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber"
                }
              },
              "LegId": "u64",
              "InstructionId": "u64",
              "Instruction": {
                "instruction_id": "InstructionId",
                "venue_id": "VenueId",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "LegId",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserId": "u64",
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "VenueId",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueId": "u64",
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "ExtensionAttributes": {
                "usage_fee": "Balance",
                "version": "MetaVersion"
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "statistics_result": "Vec<TransferManagerResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferManagerResult": {
                "tm": "TransferManager",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              },
              "DispatchErrorModule": "DispatchErrorModuleU8"
            }
          },
          {
            "minmax": [
              3003,
              3003
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "LegacyPalletPermissions": {
                "pallet_name": "PalletName",
                "total": "bool",
                "dispatchable_names": "Vec<DispatchableName>"
              },
              "LegacyPermissions": {
                "asset": "Option<Vec<Ticker>>",
                "extrinsic": "Option<Vec<LegacyPalletPermissions>>",
                "portfolio": "Option<Vec<PortfolioId>>"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "signer": "Signatory",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "Signature"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "Signature",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "(CddId)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<(IdentityId, Balance)>",
                "nays": "Vec<(IdentityId, Balance)>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "state": "ProposalState",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": {
                "_enum": {
                  "Ed25519": "H512",
                  "Sr25519": "H512",
                  "Ecdsa": "H512"
                }
              },
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)"
                }
              },
              "SmartExtensionType": {
                "_enum": {
                  "TransferManager": "Null",
                  "Offerings": "Null",
                  "SmartWallet": "Null",
                  "Custom": "Vec<u8>"
                }
              },
              "SmartExtensionName": "Text",
              "SmartExtension": {
                "extension_type": "SmartExtensionType",
                "extension_name": "SmartExtensionName",
                "extension_id": "AccountId",
                "is_archive": "bool"
              },
              "MetaUrl": "Text",
              "MetaDescription": "Text",
              "MetaVersion": "u32",
              "ExtVersion": "u32",
              "TemplateMetadata": {
                "url": "Option<MetaUrl>",
                "se_type": "SmartExtensionType",
                "usage_fee": "Balance",
                "description": "MetaDescription",
                "version": "MetaVersion"
              },
              "TemplateDetails": {
                "instantiation_fee": "Balance",
                "owner": "IdentityId",
                "frozen": "bool"
              },
              "AuthorizationNonce": "u64",
              "Counter": "u64",
              "Percentage": "Permill",
              "TransferManager": {
                "_enum": {
                  "CountTransferManager": "Counter",
                  "PercentageTransferManager": "Percentage"
                }
              },
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8;32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "DidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "DidRecords": {
                "_enum": {
                  "Success": "DidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber"
                }
              },
              "Instruction": {
                "instruction_id": "u64",
                "venue_id": "u64",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "u64",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "u64",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "ExtensionAttributes": {
                "usage_fee": "Balance",
                "version": "MetaVersion"
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "statistics_result": "Vec<TransferManagerResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferManagerResult": {
                "tm": "TransferManager",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              },
              "DispatchErrorModule": "DispatchErrorModuleU8"
            }
          },
          {
            "minmax": [
              3000,
              3001
            ],
            "types": {
              "Address": "MultiAddress",
              "LookupSource": "MultiAddress",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "IdentityId": "[u8; 32]",
              "EventDid": "IdentityId",
              "EventCounts": "Vec<u32>",
              "ErrorAt": "(u32, DispatchError)",
              "InvestorUid": "[u8; 16]",
              "Ticker": "[u8; 12]",
              "CddId": "[u8; 32]",
              "ScopeId": "[u8; 32]",
              "PosRatio": "(u32, u32)",
              "DocumentId": "u32",
              "DocumentName": "Text",
              "DocumentUri": "Text",
              "DocumentHash": {
                "_enum": {
                  "None": "Null",
                  "H512": "[u8; 64]",
                  "H384": "[u8; 48]",
                  "H320": "[u8; 40]",
                  "H256": "[u8; 32]",
                  "H224": "[u8; 28]",
                  "H192": "[u8; 24]",
                  "H160": "[u8; 20]",
                  "H128": "[u8; 16]"
                }
              },
              "DocumentType": "Text",
              "Document": {
                "uri": "DocumentUri",
                "content_hash": "DocumentHash",
                "name": "DocumentName",
                "doc_type": "Option<DocumentType>",
                "filing_date": "Option<Moment>"
              },
              "Version": "u8",
              "CustomAssetTypeId": "u32",
              "AssetType": {
                "_enum": {
                  "EquityCommon": "Null",
                  "EquityPreferred": "Null",
                  "Commodity": "Null",
                  "FixedIncome": "Null",
                  "REIT": "Null",
                  "Fund": "Null",
                  "RevenueShareAgreement": "Null",
                  "StructuredProduct": "Null",
                  "Derivative": "Null",
                  "Custom": "CustomAssetTypeId",
                  "StableCoin": "Null"
                }
              },
              "AssetIdentifier": {
                "_enum": {
                  "CUSIP": "[u8; 9]",
                  "CINS": "[u8; 9]",
                  "ISIN": "[u8; 12]",
                  "LEI": "[u8; 20]"
                }
              },
              "AssetOwnershipRelation": {
                "_enum": {
                  "NotOwned": "Null",
                  "TickerOwned": "Null",
                  "AssetOwned": "Null"
                }
              },
              "AssetName": "Text",
              "FundingRoundName": "Text",
              "VenueDetails": "Text",
              "SecurityToken": {
                "total_supply": "Balance",
                "owner_did": "IdentityId",
                "divisible": "bool",
                "asset_type": "AssetType"
              },
              "PalletName": "Text",
              "DispatchableName": "Text",
              "AssetPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<Ticker>",
                  "Except": "Vec<Ticker>"
                }
              },
              "PortfolioPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PortfolioId>",
                  "Except": "Vec<PortfolioId>"
                }
              },
              "DispatchableNames": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<DispatchableName>",
                  "Except": "Vec<DispatchableName>"
                }
              },
              "PalletPermissions": {
                "pallet_name": "PalletName",
                "dispatchable_names": "DispatchableNames"
              },
              "ExtrinsicPermissions": {
                "_enum": {
                  "Whole": "Null",
                  "These": "Vec<PalletPermissions>",
                  "Except": "Vec<PalletPermissions>"
                }
              },
              "Permissions": {
                "asset": "AssetPermissions",
                "extrinsic": "ExtrinsicPermissions",
                "portfolio": "PortfolioPermissions"
              },
              "LegacyPalletPermissions": {
                "pallet_name": "PalletName",
                "total": "bool",
                "dispatchable_names": "Vec<DispatchableName>"
              },
              "LegacyPermissions": {
                "asset": "Option<Vec<Ticker>>",
                "extrinsic": "Option<Vec<LegacyPalletPermissions>>",
                "portfolio": "Option<Vec<PortfolioId>>"
              },
              "Signatory": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Account": "AccountId"
                }
              },
              "SecondaryKey": {
                "signer": "Signatory",
                "permissions": "Permissions"
              },
              "SecondaryKeyWithAuth": {
                "secondary_key": "SecondaryKey",
                "auth_signature": "Signature"
              },
              "Subsidy": {
                "paying_key": "AccountId",
                "remaining": "Balance"
              },
              "IdentityRole": {
                "_enum": [
                  "Issuer",
                  "SimpleTokenIssuer",
                  "Validator",
                  "ClaimIssuer",
                  "Investor",
                  "NodeRunner",
                  "PM",
                  "CDDAMLClaimIssuer",
                  "AccreditedInvestorClaimIssuer",
                  "VerifiedIdentityClaimIssuer"
                ]
              },
              "PreAuthorizedKeyInfo": {
                "target_id": "IdentityId",
                "secondary_key": "SecondaryKey"
              },
              "DidRecord": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "KeyIdentityData": {
                "identity": "IdentityId",
                "permissions": "Option<Permissions>"
              },
              "CountryCode": {
                "_enum": [
                  "AF",
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "VG",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "KH",
                  "CM",
                  "CA",
                  "CV",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "HK",
                  "MO",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CU",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IR",
                  "IQ",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "KP",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MK",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "AN",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SK",
                  "SI",
                  "SB",
                  "SO",
                  "ZA",
                  "GS",
                  "SS",
                  "ES",
                  "LK",
                  "SD",
                  "SR",
                  "SJ",
                  "SZ",
                  "SE",
                  "CH",
                  "SY",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VI",
                  "WF",
                  "EH",
                  "YE",
                  "ZM",
                  "ZW",
                  "BQ",
                  "CW",
                  "SX"
                ]
              },
              "Scope": {
                "_enum": {
                  "Identity": "IdentityId",
                  "Ticker": "Ticker",
                  "Custom": "Vec<u8>"
                }
              },
              "InvestorZKProofData": "Signature",
              "Scalar": "[u8; 32]",
              "RistrettoPoint": "[u8; 32]",
              "ZkProofData": {
                "challenge_responses": "[Scalar; 2]",
                "subtract_expressions_res": "RistrettoPoint",
                "blinded_scope_did_hash": "RistrettoPoint"
              },
              "ScopeClaimProof": {
                "proof_scope_id_wellformed": "Signature",
                "proof_scope_id_cdd_id_match": "ZkProofData",
                "scope_id": "RistrettoPoint"
              },
              "Claim": {
                "_enum": {
                  "Accredited": "Scope",
                  "Affiliate": "Scope",
                  "BuyLockup": "Scope",
                  "SellLockup": "Scope",
                  "CustomerDueDiligence": "CddId",
                  "KnowYourCustomer": "Scope",
                  "Jurisdiction": "(CountryCode, Scope)",
                  "Exempted": "Scope",
                  "Blocked": "Scope",
                  "InvestorUniqueness": "(Scope, ScopeId, CddId)",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "(CddId)"
                }
              },
              "ClaimType": {
                "_enum": {
                  "Accredited": "Null",
                  "Affiliate": "Null",
                  "BuyLockup": "Null",
                  "SellLockup": "Null",
                  "CustomerDueDiligence": "Null",
                  "KnowYourCustomer": "Null",
                  "Jurisdiction": "Null",
                  "Exempted": "Null",
                  "Blocked": "Null",
                  "InvestorUniqueness": "Null",
                  "NoData": "Null",
                  "InvestorUniquenessV2": "Null"
                }
              },
              "IdentityClaim": {
                "claim_issuer": "IdentityId",
                "issuance_date": "Moment",
                "last_update_date": "Moment",
                "expiry": "Option<Moment>",
                "claim": "Claim"
              },
              "ComplianceRequirement": {
                "sender_conditions": "Vec<Condition>",
                "receiver_conditions": "Vec<Condition>",
                "id": "u32"
              },
              "ComplianceRequirementResult": {
                "sender_conditions": "Vec<ConditionResult>",
                "receiver_conditions": "Vec<ConditionResult>",
                "id": "u32",
                "result": "bool"
              },
              "ConditionType": {
                "_enum": {
                  "IsPresent": "Claim",
                  "IsAbsent": "Claim",
                  "IsAnyOf": "Vec<Claim>",
                  "IsNoneOf": "Vec<Claim>",
                  "IsIdentity": "TargetIdentity"
                }
              },
              "TrustedFor": {
                "_enum": {
                  "Any": "Null",
                  "Specific": "Vec<ClaimType>"
                }
              },
              "TrustedIssuer": {
                "issuer": "IdentityId",
                "trusted_for": "TrustedFor"
              },
              "Condition": {
                "condition_type": "ConditionType",
                "issuers": "Vec<TrustedIssuer>"
              },
              "ConditionResult": {
                "condition": "Condition",
                "result": "bool"
              },
              "TargetIdAuthorization": {
                "target_id": "IdentityId",
                "nonce": "u64",
                "expires_at": "Moment"
              },
              "TickerRegistration": {
                "owner": "IdentityId",
                "expiry": "Option<Moment>"
              },
              "TickerRegistrationConfig": {
                "max_ticker_length": "u8",
                "registration_length": "Option<Moment>"
              },
              "ClassicTickerRegistration": {
                "eth_owner": "EthereumAddress",
                "is_created": "bool"
              },
              "ClassicTickerImport": {
                "eth_owner": "EthereumAddress",
                "ticker": "Ticker",
                "is_contract": "bool",
                "is_created": "bool"
              },
              "EthereumAddress": "[u8; 20]",
              "EcdsaSignature": "[u8; 65]",
              "MotionTitle": "Text",
              "MotionInfoLink": "Text",
              "ChoiceTitle": "Text",
              "Motion": {
                "title": "MotionTitle",
                "info_link": "MotionInfoLink",
                "choices": "Vec<ChoiceTitle>"
              },
              "BallotTitle": "Text",
              "BallotMeta": {
                "title": "BallotTitle",
                "motions": "Vec<Motion>"
              },
              "BallotTimeRange": {
                "start": "Moment",
                "end": "Moment"
              },
              "BallotVote": {
                "power": "Balance",
                "fallback": "Option<u16>"
              },
              "MaybeBlock": {
                "_enum": {
                  "Some": "BlockNumber",
                  "None": "Null"
                }
              },
              "Url": "Text",
              "PipDescription": "Text",
              "PipsMetadata": {
                "id": "PipId",
                "url": "Option<Url>",
                "description": "Option<PipDescription>",
                "created_at": "BlockNumber",
                "transaction_version": "u32",
                "expiry": "MaybeBlock"
              },
              "Proposer": {
                "_enum": {
                  "Community": "AccountId",
                  "Committee": "Committee"
                }
              },
              "Committee": {
                "_enum": {
                  "Technical": "Null",
                  "Upgrade": "Null"
                }
              },
              "SkippedCount": "u8",
              "SnapshottedPip": {
                "id": "PipId",
                "weight": "(bool, Balance)"
              },
              "SnapshotId": "u32",
              "SnapshotMetadata": {
                "created_at": "BlockNumber",
                "made_by": "AccountId",
                "id": "SnapshotId"
              },
              "SnapshotResult": {
                "_enum": {
                  "Approve": "Null",
                  "Reject": "Null",
                  "Skip": "Null"
                }
              },
              "Beneficiary": {
                "id": "IdentityId",
                "amount": "Balance"
              },
              "DepositInfo": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "PolymeshVotes": {
                "index": "u32",
                "ayes": "Vec<(IdentityId, Balance)>",
                "nays": "Vec<(IdentityId, Balance)>",
                "expiry": "MaybeBlock"
              },
              "PipId": "u32",
              "ProposalState": {
                "_enum": [
                  "Pending",
                  "Rejected",
                  "Scheduled",
                  "Failed",
                  "Executed",
                  "Expired"
                ]
              },
              "Pip": {
                "id": "PipId",
                "proposal": "Call",
                "state": "ProposalState",
                "proposer": "Proposer"
              },
              "ProposalData": {
                "_enum": {
                  "Hash": "Hash",
                  "Proposal": "Vec<u8>"
                }
              },
              "OffChainSignature": {
                "_enum": {
                  "Ed25519": "H512",
                  "Sr25519": "H512",
                  "Ecdsa": "H512"
                }
              },
              "Authorization": {
                "authorization_data": "AuthorizationData",
                "authorized_by": "IdentityId",
                "expiry": "Option<Moment>",
                "auth_id": "u64"
              },
              "AuthorizationData": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "IdentityId",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Ticker",
                  "AddMultiSigSigner": "AccountId",
                  "TransferAssetOwnership": "Ticker",
                  "JoinIdentity": "Permissions",
                  "PortfolioCustody": "PortfolioId",
                  "BecomeAgent": "(Ticker, AgentGroup)",
                  "AddRelayerPayingKey": "(AccountId, AccountId, Balance)"
                }
              },
              "SmartExtensionType": {
                "_enum": {
                  "TransferManager": "Null",
                  "Offerings": "Null",
                  "SmartWallet": "Null",
                  "Custom": "Vec<u8>"
                }
              },
              "SmartExtensionName": "Text",
              "SmartExtension": {
                "extension_type": "SmartExtensionType",
                "extension_name": "SmartExtensionName",
                "extension_id": "AccountId",
                "is_archive": "bool"
              },
              "MetaUrl": "Text",
              "MetaDescription": "Text",
              "MetaVersion": "u32",
              "ExtVersion": "u32",
              "TemplateMetadata": {
                "url": "Option<MetaUrl>",
                "se_type": "SmartExtensionType",
                "usage_fee": "Balance",
                "description": "MetaDescription",
                "version": "MetaVersion"
              },
              "TemplateDetails": {
                "instantiation_fee": "Balance",
                "owner": "IdentityId",
                "frozen": "bool"
              },
              "AuthorizationNonce": "u64",
              "Counter": "u64",
              "Percentage": "Permill",
              "TransferManager": {
                "_enum": {
                  "CountTransferManager": "Counter",
                  "PercentageTransferManager": "Percentage"
                }
              },
              "RestrictionResult": {
                "_enum": [
                  "Valid",
                  "Invalid",
                  "ForceValid"
                ]
              },
              "Memo": "[u8;32]",
              "BridgeTx": {
                "nonce": "u32",
                "recipient": "AccountId",
                "amount": "Balance",
                "tx_hash": "H256"
              },
              "AssetCompliance": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirement>"
              },
              "AssetComplianceResult": {
                "paused": "bool",
                "requirements": "Vec<ComplianceRequirementResult>",
                "result": "bool"
              },
              "Claim1stKey": {
                "target": "IdentityId",
                "claim_type": "ClaimType"
              },
              "Claim2ndKey": {
                "issuer": "IdentityId",
                "scope": "Option<Scope>"
              },
              "InactiveMember": {
                "id": "IdentityId",
                "deactivated_at": "Moment",
                "expiry": "Option<Moment>"
              },
              "VotingResult": {
                "ayes_count": "u32",
                "ayes_stake": "Balance",
                "nays_count": "u32",
                "nays_stake": "Balance"
              },
              "ProtocolOp": {
                "_enum": [
                  "AssetRegisterTicker",
                  "AssetIssue",
                  "AssetAddDocuments",
                  "AssetCreateAsset",
                  "CheckpointCreateSchedule",
                  "ComplianceManagerAddComplianceRequirement",
                  "IdentityCddRegisterDid",
                  "IdentityAddClaim",
                  "IdentityAddSecondaryKeysWithAuthorization",
                  "PipsPropose",
                  "ContractsPutCode",
                  "CorporateBallotAttachBallot",
                  "CapitalDistributionDistribute"
                ]
              },
              "CddStatus": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "AssetDidResult": {
                "_enum": {
                  "Ok": "IdentityId",
                  "Err": "Vec<u8>"
                }
              },
              "DidRecordsSuccess": {
                "primary_key": "AccountId",
                "secondary_keys": "Vec<SecondaryKey>"
              },
              "DidRecords": {
                "_enum": {
                  "Success": "DidRecordsSuccess",
                  "IdNotFound": "Vec<u8>"
                }
              },
              "VoteCountProposalFound": {
                "ayes": "u64",
                "nays": "u64"
              },
              "VoteCount": {
                "_enum": {
                  "ProposalFound": "VoteCountProposalFound",
                  "ProposalNotFound": "Null"
                }
              },
              "Vote": "(bool, Balance)",
              "VoteByPip": {
                "pip": "PipId",
                "vote": "Vote"
              },
              "BridgeTxDetail": {
                "amount": "Balance",
                "status": "BridgeTxStatus",
                "execution_block": "BlockNumber",
                "tx_hash": "H256"
              },
              "BridgeTxStatus": {
                "_enum": {
                  "Absent": "Null",
                  "Pending": "u8",
                  "Frozen": "Null",
                  "Timelocked": "Null",
                  "Handled": "Null"
                }
              },
              "HandledTxStatus": {
                "_enum": {
                  "Success": "Null",
                  "Error": "Text"
                }
              },
              "CappedFee": "u64",
              "CanTransferResult": {
                "_enum": {
                  "Ok": "u8",
                  "Err": "Vec<u8>"
                }
              },
              "AuthorizationType": {
                "_enum": {
                  "AttestPrimaryKeyRotation": "Null",
                  "RotatePrimaryKey": "Null",
                  "TransferTicker": "Null",
                  "AddMultiSigSigner": "Null",
                  "TransferAssetOwnership": "Null",
                  "JoinIdentity": "Null",
                  "PortfolioCustody": "Null",
                  "BecomeAgent": "Null",
                  "AddRelayerPayingKey": "Null"
                }
              },
              "ProposalDetails": {
                "approvals": "u64",
                "rejections": "u64",
                "status": "ProposalStatus",
                "expiry": "Option<Moment>",
                "auto_close": "bool"
              },
              "ProposalStatus": {
                "_enum": {
                  "Invalid": "Null",
                  "ActiveOrExpired": "Null",
                  "ExecutionSuccessful": "Null",
                  "ExecutionFailed": "Null",
                  "Rejected": "Null"
                }
              },
              "DidStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Exists": "Null",
                  "CddVerified": "Null"
                }
              },
              "PortfolioName": "Text",
              "PortfolioNumber": "u64",
              "PortfolioKind": {
                "_enum": {
                  "Default": "Null",
                  "User": "PortfolioNumber"
                }
              },
              "PortfolioId": {
                "did": "IdentityId",
                "kind": "PortfolioKind"
              },
              "Moment": "u64",
              "CalendarUnit": {
                "_enum": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week",
                  "Month",
                  "Year"
                ]
              },
              "CalendarPeriod": {
                "unit": "CalendarUnit",
                "amount": "u64"
              },
              "CheckpointSchedule": {
                "start": "Moment",
                "period": "CalendarPeriod"
              },
              "CheckpointId": "u64",
              "ScheduleId": "u64",
              "StoredSchedule": {
                "schedule": "CheckpointSchedule",
                "id": "ScheduleId",
                "at": "Moment",
                "remaining": "u32"
              },
              "ScheduleSpec": {
                "start": "Option<Moment>",
                "period": "CalendarPeriod",
                "remaining": "u32"
              },
              "InstructionStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Failed": "Null"
                }
              },
              "LegStatus": {
                "_enum": {
                  "PendingTokenLock": "Null",
                  "ExecutionPending": "Null",
                  "ExecutionToBeSkipped": "(AccountId, u64)"
                }
              },
              "AffirmationStatus": {
                "_enum": {
                  "Unknown": "Null",
                  "Pending": "Null",
                  "Affirmed": "Null"
                }
              },
              "SettlementType": {
                "_enum": {
                  "SettleOnAffirmation": "Null",
                  "SettleOnBlock": "BlockNumber"
                }
              },
              "Instruction": {
                "instruction_id": "u64",
                "venue_id": "u64",
                "status": "InstructionStatus",
                "settlement_type": "SettlementType",
                "created_at": "Option<Moment>",
                "trade_date": "Option<Moment>",
                "value_date": "Option<Moment>"
              },
              "Leg": {
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "Venue": {
                "creator": "IdentityId",
                "venue_type": "VenueType"
              },
              "Receipt": {
                "receipt_uid": "u64",
                "from": "PortfolioId",
                "to": "PortfolioId",
                "asset": "Ticker",
                "amount": "Balance"
              },
              "ReceiptMetadata": "Text",
              "ReceiptDetails": {
                "receipt_uid": "u64",
                "leg_id": "u64",
                "signer": "AccountId",
                "signature": "OffChainSignature",
                "metadata": "ReceiptMetadata"
              },
              "UniqueCall": {
                "nonce": "u64",
                "call": "Call"
              },
              "MovePortfolioItem": {
                "ticker": "Ticker",
                "amount": "Balance",
                "memo": "Option<Memo>"
              },
              "WeightToFeeCoefficient": {
                "coeffInteger": "Balance",
                "coeffFrac": "Perbill",
                "negative": "bool",
                "degree": "u8"
              },
              "TargetIdentity": {
                "_enum": {
                  "ExternalAgent": "Null",
                  "Specific": "IdentityId"
                }
              },
              "FundraiserName": "Text",
              "FundraiserStatus": {
                "_enum": [
                  "Live",
                  "Frozen",
                  "Closed",
                  "ClosedEarly"
                ]
              },
              "FundraiserTier": {
                "total": "Balance",
                "price": "Balance",
                "remaining": "Balance"
              },
              "Fundraiser": {
                "creator": "IdentityId",
                "offering_portfolio": "PortfolioId",
                "offering_asset": "Ticker",
                "raising_portfolio": "PortfolioId",
                "raising_asset": "Ticker",
                "tiers": "Vec<FundraiserTier>",
                "venue_id": "u64",
                "start": "Moment",
                "end": "Option<Moment>",
                "status": "FundraiserStatus",
                "minimum_investment": "Balance"
              },
              "VenueType": {
                "_enum": [
                  "Other",
                  "Distribution",
                  "Sto",
                  "Exchange"
                ]
              },
              "ExtensionAttributes": {
                "usage_fee": "Balance",
                "version": "MetaVersion"
              },
              "Tax": "Permill",
              "TargetIdentities": {
                "identities": "Vec<IdentityId>",
                "treatment": "TargetTreatment"
              },
              "TargetTreatment": {
                "_enum": [
                  "Include",
                  "Exclude"
                ]
              },
              "CAKind": {
                "_enum": [
                  "PredictableBenefit",
                  "UnpredictableBenefit",
                  "IssuerNotice",
                  "Reorganization",
                  "Other"
                ]
              },
              "CADetails": "Text",
              "CACheckpoint": {
                "_enum": {
                  "Scheduled": "(ScheduleId, u64)",
                  "Existing": "CheckpointId"
                }
              },
              "RecordDate": {
                "date": "Moment",
                "checkpoint": "CACheckpoint"
              },
              "RecordDateSpec": {
                "_enum": {
                  "Scheduled": "Moment",
                  "ExistingSchedule": "ScheduleId",
                  "Existing": "CheckpointId"
                }
              },
              "CorporateAction": {
                "kind": "CAKind",
                "decl_date": "Moment",
                "record_date": "Option<RecordDate>",
                "targets": "TargetIdentities",
                "default_withholding_tax": "Tax",
                "withholding_tax": "Vec<(IdentityId, Tax)>"
              },
              "LocalCAId": "u32",
              "CAId": {
                "ticker": "Ticker",
                "local_id": "LocalCAId"
              },
              "Distribution": {
                "from": "PortfolioId",
                "currency": "Ticker",
                "per_share": "Balance",
                "amount": "Balance",
                "remaining": "Balance",
                "reclaimed": "bool",
                "payment_at": "Moment",
                "expires_at": "Option<Moment>"
              },
              "SlashingSwitch": {
                "_enum": [
                  "Validator",
                  "ValidatorAndNominator",
                  "None"
                ]
              },
              "PriceTier": {
                "total": "Balance",
                "price": "Balance"
              },
              "PermissionedIdentityPrefs": {
                "intended_count": "u32",
                "running_count": "u32"
              },
              "GranularCanTransferResult": {
                "invalid_granularity": "bool",
                "self_transfer": "bool",
                "invalid_receiver_cdd": "bool",
                "invalid_sender_cdd": "bool",
                "missing_scope_claim": "bool",
                "receiver_custodian_error": "bool",
                "sender_custodian_error": "bool",
                "sender_insufficient_balance": "bool",
                "portfolio_validity_result": "PortfolioValidityResult",
                "asset_frozen": "bool",
                "statistics_result": "Vec<TransferManagerResult>",
                "compliance_result": "AssetComplianceResult",
                "result": "bool"
              },
              "PortfolioValidityResult": {
                "receiver_is_same_portfolio": "bool",
                "sender_portfolio_does_not_exist": "bool",
                "receiver_portfolio_does_not_exist": "bool",
                "sender_insufficient_balance": "bool",
                "result": "bool"
              },
              "TransferManagerResult": {
                "tm": "TransferManager",
                "result": "bool"
              },
              "AGId": "u32",
              "AgentGroup": {
                "_enum": {
                  "Full": "Null",
                  "Custom": "AGId",
                  "ExceptMeta": "Null",
                  "PolymeshV1CAA": "Null",
                  "PolymeshV1PIA": "Null"
                }
              },
              "ItnRewardStatus": {
                "_enum": {
                  "Unclaimed": "Balance",
                  "Claimed": "Null"
                }
              },
              "DispatchErrorModule": "DispatchErrorModuleU8"
            }
          },
          {
            "minmax": [
              2021,
              2023
            ],
            "types": {
              "AccountInfo": "AccountInfoWithRefCount",
              "Address": "IndicesLookupSource",
              "LookupSource": "IndicesLookupSource"
            }
          }
        ],
        "signedExtensions": {
          "StoreCallMetadata": "Null"
        }
      })
    .addEvent({
      name: [ 'Pips.ProposalCreated', 'PolymeshCommittee.Proposed', 'PolymeshCommittee.Voted', 'PolymeshCommittee.VoteRetracted', 'Pips.ProposalStateUpdated',  
      'Pips.PipSkipped', 'Pips.PipClosed', 'Pips.Voted', 'PolymeshCommittee.FinalVotes'
  ],
      call: true,
      extrinsic: true
  })

processor.run(new TypeormDatabase(), async (ctx: any) => {
  for (let block of ctx.blocks) {
      for (let item of block.events) {
        if (item.name == 'Pips.ProposalCreated'){
            await modules.pip.events.handleProposed(ctx, item, block.header)
        }
        // if (item.name == 'PolymeshCommittee.Proposed'){
        //   await modules.pip.events.handlePolymeshCommitteeProposed(ctx, item, block.header)
        // }
        if (item.name == 'Pips.ProposalStateUpdated'){
            await modules.pip.events.handleStatusChange(ctx, item, block.header)
        }
        if (item.name == 'Pips.PipSkipped'){
            await modules.pip.events.handlePipSkipped(ctx, item, block.header)
        }
        if (item.name == 'PolymeshCommittee.VoteRetracted'){
            await modules.pip.events.handleVoteRetracted(ctx, item, block.header)
        }                
        if (item.name == 'PolymeshCommittee.Voted'){
            await modules.pip.events.handleVote(ctx, item, block.header)
        }      
        if (item.name == 'Pips.Voted'){
        await modules.pip.events.handleCommunityVote(ctx, item, block.header)
        }
        if (item.name == 'PolymeshCommittee.FinalVotes'){
        await modules.pip.events.handlePolymeshCommitteefinalVotesData(ctx, item, block.header)
        }
      }
  }
});

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>