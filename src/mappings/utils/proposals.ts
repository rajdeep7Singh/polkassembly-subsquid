import { Store } from '@subsquid/typeorm-store'
import { toJSON } from '@subsquid/util-internal-json'
import { ProcessorContext } from '../../processor'
import { calls } from '../../types'
import { MissingProposalRecordWarn } from '../../common/errors'
import { NOTIFICATION_URL } from '../../consts/consts'
import fetch from 'node-fetch'

import {
    MotionThreshold,
    Proposal,
    ProposalStatus,
    ProposalType,
    Tally,
    StatusHistory,
    Announcements,
    AnnouncementType,
    ProposedCall,
    Preimage,
    Deciding,
    DecisionDeposit,
    SubmissionDeposit,
    Activity,
    ActivityType,
    SalaryCycle,
    Payout,
    MetaActions,
    Vote,
} from '../../model'
import {
    AnnouncementsData,
    AllianceMotionData,
    HashProposal,
    IndexProposal,
    TallyData,
    ProposedCallData,
    FellowshipReferendumData,
    DecidingData,
    DecisionDepositData,
    PreimageData,
    SubmissionDepositData,
    SalaryCycleData,
    MetaActionsData,
    SalaryPayoutData
} from '../types/data'
import { randomUUID } from 'crypto'
import { ss58codec } from '../../common/tools'
import { getActivityCount, getMetaActionsCount, getSalaryPayoutCount } from './votes'
import { decodeHex } from '@subsquid/substrate-processor'

type ProposalUpdateData = Partial<
    Omit<
        Proposal,
        'updatedAt' | 'updatedAtBlock' | 'endedAt' | 'endedAtBlock' | 'status' | 'voting' | 'statusHistory' | 'id'
    >
>

export async function updateProposalStatus(
    ctx: ProcessorContext<Store>,
    header: any,
    index: number,
    type: IndexProposal,
    options: {
        status: ProposalStatus
        extrinsicIndex?: string
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: ProcessorContext<Store>,
    header: any,
    hash: string,
    type: HashProposal,
    options: {
        status: ProposalStatus
        extrinsicIndex?: string
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: ProcessorContext<Store>,
    header: any,
    hashOrIndex: string | number,
    type: ProposalType,
    options: {
        status: ProposalStatus
        extrinsicIndex?: string
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void> {
    const proposal = await ctx.store.get(Proposal, {
        where:
            typeof hashOrIndex === 'string'
                ? {
                      hash: hashOrIndex,
                      type,
                  }
                : {
                      index: hashOrIndex,
                      type,
                  },
        order: {
            id: 'DESC',
        },
    })

    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(type, hashOrIndex))
        return
    }

    Object.assign(proposal, options.data)
    proposal.updatedAt = new Date(header.timestamp)
    proposal.updatedAtBlock = header.height
    proposal.status = options.status

    if (options.isEnded) {
        proposal.endedAtBlock = proposal.updatedAtBlock
        proposal.endedAt = proposal.updatedAt
    }

    await ctx.store.save(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: proposal.updatedAtBlock ? proposal.updatedAtBlock : undefined,
            timestamp: proposal.updatedAt,
            status: proposal.status,
            extrinsicIndex: options?.extrinsicIndex,
            proposal,
        })
    )
    await createExecutedReferendumsActivity(ctx, header, proposal, type)
    await sendNotification(ctx, proposal, 'proposalStatusChanged')
}

async function createExecutedReferendumsActivity(ctx: ProcessorContext<Store>, header: any, proposal: Proposal, type: ProposalType) {
    if(proposal.status == ProposalStatus.Executed && proposal && proposal.index != null && proposal.index != undefined && type == ProposalType.FellowshipReferendum){
        const activities = await ctx.store.find(Activity, {
            where: {
                proposal: {
                    index: proposal.index,
                    type
                }
            }
        })
        if (activities && activities.length > 0) {
            const activityTypeArray = []
            for (let i = 0; i < activities.length; i++) {
                let activityType
                switch (activities[i].type) {
                    case ActivityType.InductionRequest:
                        activityType = ActivityType.Inducted
                        break;
                    case ActivityType.DemotionRequest:
                        activityType = ActivityType.Demoted
                        break;
                    case ActivityType.PromotionRequest:
                        activityType = ActivityType.Promoted
                        break;
                    case ActivityType.RetentionRequest:
                        activityType = ActivityType.Retained
                        break;
                    default:
                        break;
                }
                if (activityType) {
                    activityTypeArray.push({
                        activityType,
                        who: activities[i]?.who || ""
                    })
                }
            }
            if (activityTypeArray) {
                await createActivity(ctx, header, {
                    activityTypeArray,
                    proposal
                })
            }
        }
    }
}

async function getProposalId(store: Store, type: ProposalType) {
    const count = await store.count(Proposal, { where: { type } })
    
    return `${Buffer.from(type.toLowerCase()).toString('hex').slice(0, 8).padEnd(8, '0')}-${count
        .toString()
        .padStart(8, '0')}`
}

export async function createAllianceMotion(
    ctx: ProcessorContext<Store>,
    header: any,
    data: AllianceMotionData
): Promise<Proposal> {
    const { index, hash, proposer, threshold, status, callData } = data

    const type = ProposalType.AllianceMotion
    let digest = null
    const id = await getProposalId(ctx.store, type)

    if(callData){
        if(callData.args && callData.args.announcement){
            const announcement: any = callData.args.announcement
            digest = announcement.hash?.digest
        }
    }

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        digest,
        proposer,
        threshold: new MotionThreshold({
            value: threshold,
        }),
        status,
        callData: callData ? createProposedCall(callData) : null,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
        updatedAt: new Date(header.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export function createTally(data: TallyData): Tally {
    return new Tally(toJSON(data))
}

export async function createAnnouncements(
    ctx: ProcessorContext<Store>,
    header: any,
    data: AnnouncementsData,
    type?: AnnouncementType | null
): Promise<Announcements> {
    const { hash, code, codec, version, announcement, cid } = data

    const associatedMotoion = await ctx.store.get(Proposal, {
        where: {
            type: ProposalType.AllianceMotion,
            digest: hash,
        },
        order: {
            createdAtBlock: 'DESC',
        },
    })

    const announcementRow = new Announcements({
        id: randomUUID(),
        hash,
        code,
        codec,
        version,
        digest: hash,
        proposer: associatedMotoion ? associatedMotoion.proposer : null,
        announcement: toJSON(announcement),
        type,
        cid,
        status: ProposalStatus.Announced,
        proposal: associatedMotoion ? associatedMotoion : null,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
        updatedAt: new Date(header.timestamp),
        updatedAtBlock: header.height,
    })
    await ctx.store.insert(announcementRow)

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: announcementRow.createdAtBlock,
            timestamp: announcementRow.createdAt,
            status: announcementRow.status,
            announcement: announcementRow,
        })
    )

    if(associatedMotoion){
        associatedMotoion.announcement = announcementRow
        await ctx.store.save(associatedMotoion)

    }
    return announcementRow
}

async function getPreimageId(store: Store) {
    const count = await store.count(Preimage)

    return count.toString().padStart(8, '0')
}

export async function createPreimageV2( ctx: ProcessorContext<Store>, header: any, data: PreimageData): Promise<Preimage> {
    const { status, hash, proposer, call, section, method, deposit, length } = data

    // const type = ProposalType.Preimage

    const id = await getPreimageId(ctx.store)

    // const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const preimage = new Preimage({
        id,
        hash,
        proposer,
        status,
        proposedCall: call ? createProposedCall(call) : null,
        deposit,
        length,
        section: section,
        method: method,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
        updatedAt: new Date(header.timestamp),
    })

    await ctx.store.insert(preimage)

    const associatedProposal = await ctx.store.get(Proposal, { where: { hash, type: ProposalType.FellowshipReferendum }, order: { createdAt: 'DESC' } })

    if(associatedProposal && !associatedProposal.preimage) {
        associatedProposal.preimage = preimage
        await ctx.store.save(associatedProposal)
    }

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: header.height,
            timestamp: new Date(header.timestamp),
            status: status,
            extrinsicIndex: data.extrinsicIndex,
            preimage,
        })
    )

    return preimage
}

export function activityTypesBasedOnCalls(callName: string, args: any): ActivityType {
    switch (callName) {
        case calls.fellowshipCore.promote.name:
        case calls.fellowshipCollective.promoteMember.name:
            return ActivityType.PromotionRequest
        case calls.fellowshipCore.approve.name:
            return ActivityType.RetentionRequest
        case calls.fellowshipCollective.demoteMember.name:
        case calls.fellowshipCore.bump.name:
            return ActivityType.DemotionRequest
        case calls.fellowshipCollective.addMember.name:
        case calls.fellowshipCore.induct.name:
            return ActivityType.InductionRequest
        case calls.system.remark.name:
        case calls.system.remarkWithEvent.name:
            const remarkDecoded = decodeHex(args?.remark as string)?.toString()
            if(remarkDecoded?.includes('RFC_APPROVE') || remarkDecoded?.includes('RFC_REJECT') || remarkDecoded?.includes('APPROVE_RFC') || remarkDecoded?.includes('REJECT_RFC')){
                return ActivityType.RFC
            }
        default:
            return ActivityType.GeneralProposal
    }
}

export function getAcitivtTypeFromPreimage(call: ProposedCallData): {activityType: ActivityType, who: string}[] {
    const { section, method, args } = call
    const batchCalls = args?.calls
    const result = []
    if (batchCalls && Array.isArray(batchCalls)) {
        for (let i = 0; i < batchCalls.length; i++){
            const section = batchCalls[i].__kind
            const method = batchCalls[i].value.__kind
            const callName = `${section}.${method}`
            const activityType = activityTypesBasedOnCalls(callName, batchCalls[i].value)
            result.push({
                activityType,
                who: batchCalls[i]?.value?.who?.__kind == 'Id' ? ss58codec.encode(batchCalls[i]?.value?.who?.value) as string : ""
            })
        }
    } else {
        const callName = `${section}.${method}`
        const activityType = activityTypesBasedOnCalls(callName, args)
        let who = (args?.who as any)?.value || args?.who
        result.push({
            activityType,
            who: who ? ss58codec.encode(who as string) : ""
        })
    }
    return result
}

export async function createFellowshipReferendum( ctx: ProcessorContext<Store>, header: any, data: FellowshipReferendumData, type: ProposalType): Promise<Proposal> {

    const { status, index, proposer, hash, tally, origin, trackNumber, submissionDeposit, submittedAt, enactmentAfter, enactmentAt, deciding, decisionDeposit } = data

    const id = await getProposalId(ctx.store, type)

    const preimage: any = await ctx.store.get(Preimage, {
        where: {
            hash: data.hash,
        },
        order: { createdAtBlock: 'DESC' },
    })

    let activityType;

    if(preimage) {
        activityType = getAcitivtTypeFromPreimage(preimage.proposedCall)
    }

    if(!activityType || activityType?.length == 0){
        activityType = [{
            activityType: ActivityType.GeneralProposal,
            who: proposer
        }]
    }
    const subDeposit = {who: ss58codec.encode(submissionDeposit.who), amount: submissionDeposit.amount}

    let decDeposit = undefined

    if (decisionDeposit) {
        decDeposit = {who: ss58codec.encode(decisionDeposit.who), amount: decisionDeposit.amount}
    }

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        trackNumber,
        preimage: preimage,
        status,
        proposer,
        tally: tally ? createTally(tally) : undefined,
        origin,
        submissionDeposit: subDeposit ? createSubmissionDeposit(subDeposit) : undefined,
        submittedAtBlock: submittedAt,
        enactmentAfterBlock: enactmentAfter,
        enactmentAtBlock: enactmentAt,
        deciding: deciding ? createDeciding(deciding) : undefined,
        decisionDeposit: decDeposit ? createDecisionDeposit(decDeposit) : undefined,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
        updatedAt: new Date(header.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    await createActivity(ctx, header, {
        activityTypeArray: activityType,
        proposal: proposal
    })

    await sendNotification(ctx, proposal, 'newProposalCreated')
    return proposal
}

export async function updatePreimageStatusV2(
    ctx: ProcessorContext<Store>,
    header: any,
    hash: string,
    options: {
        status: ProposalStatus
        extrinsicIndex?: string
        isEnded?: boolean
        data?: ProposalUpdateData
    }
) {
    const proposal = await ctx.store.get(Preimage, { where: { hash: hash }, order: {createdAtBlock: 'DESC'}})

    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn('PreimageV2', `with hash ${hash} not found`,))
        return
    }

    Object.assign(proposal, options.data)
    proposal.updatedAt = new Date(header.timestamp)
    proposal.updatedAtBlock = header.height
    proposal.status = options.status

    await ctx.store.insert(
        new StatusHistory({
            id: randomUUID(),
            block: proposal.updatedAtBlock || undefined,
            timestamp: proposal.updatedAt,
            status: proposal.status,
            extrinsicIndex: options?.extrinsicIndex,
            preimage: proposal,
        })
    )

    await ctx.store.save(proposal)
}

export async function createSalaryCycleData(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, data: SalaryCycleData) {
    const { cycleIndex, cycleStart, totalRegistrations, totalUnregisteredPaid, budget } = data

    const salaryCycleObject = new SalaryCycle({
        id: String(cycleIndex),
        cycleIndex,
        cycleStart,
        totalRegistrations,
        totalUnregisteredPaid,
        budget,
        extrinsicIndex,
        cycleStartDatetime: new Date(header.timestamp)
    })

    await ctx.store.insert(salaryCycleObject)

    await createActivity(ctx, header, {
        activityType: ActivityType.CycleStarted,
        salaryCycle: salaryCycleObject
    })
}

export async function createMetaActions(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, data: MetaActionsData, salaryCycle?: SalaryCycle) {
    const { who, isActive, evidence, wish, activityType, amount, toRank, rank, evidenceJudged, showClaimButton } = data
    const id = await getMetaActionsCount(ctx)
    if(activityType == ActivityType.EvidenceJudged){
        const evidenceJudgedObject = await ctx.store.get(MetaActions, {where: {who, evidenceJudged: false, wish: wish, evidence: evidence}})
        if(evidenceJudgedObject){
            evidenceJudgedObject.evidenceJudged = true
            await ctx.store.save(evidenceJudgedObject)
        }
    }
    else{
        const metaActionsObject = new MetaActions({
            id: String(id),
            who,
            isActive,
            amount,
            extrinsicIndex,
            evidence,
            toRank,
            evidenceJudged: evidenceJudged || false,
            rank,
            showClaimButton,
            wish,
            createdAtBlock: header.height,
            createdAt: new Date(header.height)
        })

        await ctx.store.insert(metaActionsObject)

        await createActivity(ctx, header, {
            who,
            activityType: activityType,
            otherActions: metaActionsObject,
            salaryCycle
        })
    }
}

export async function createSalaryPayouts(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, data: SalaryPayoutData) {
    const { who, beneficiary, amount, id, salaryCycle, rank } = data
    const payoutId = await getSalaryPayoutCount(ctx)

    const payoutObject = new Payout({
        id: String(payoutId),
        cycleIndex: salaryCycle,
        who,
        rank,
        beneficiary,
        extrinsicIndex,
        amount,
        createdAtBlock: header.height,
        createdAt: new Date(header.height)
    })

    await ctx.store.insert(payoutObject)

    await createActivity(ctx, header, {
        who,
        activityType: ActivityType.Payout,
        payout: payoutObject
    })
}

export async function createActivity (
    ctx: ProcessorContext<Store>,
    header: any,
    data: {
        activityType: ActivityType
        proposal?: Proposal
        announcement?: Announcements
        who?: string
        salaryCycle?: SalaryCycle
        payout?: Payout
        otherActions?: MetaActions
        vote?: Vote
    }| {
        activityTypeArray: { activityType: ActivityType, who: string }[]
        proposal?: Proposal
        who?: string
        announcement?: Announcements
        salaryCycle?: SalaryCycle
        payout?: Payout
        otherActions?: MetaActions
        vote?: Vote
    }
) {
    const res: Activity[] = []
    if ('activityTypeArray' in data) {
        for (let i = 0; i < data.activityTypeArray.length; i++){
            const id = await getActivityCount(ctx)
            const act = data.activityTypeArray[i]
            res.push(new Activity({
                id: String(id),
                type: act.activityType,
                proposal: data.proposal,
                who: act.who,
                createdAt: new Date(header.timestamp),
                createdAtBlock: header.height

            }))
        }
    } else {
        const id = await getActivityCount(ctx)
        res.push(
            new Activity({
                id: String(id),
                type: data.activityType,
                who: data.who,
                proposal: data.proposal,
                announcement: data.announcement,
                salaryCycle: data.salaryCycle,
                payout: data.payout,
                otherActions: data.otherActions,
                vote: data.vote,
                createdAt: new Date(header.timestamp),
                createdAtBlock: header.height
            })
        )
    }
    await ctx.store.insert(res)
}

function createProposedCall(data: ProposedCallData): ProposedCall {
    return new ProposedCall(toJSON(data))
}

export function createDeciding(data: DecidingData): Deciding {
    return new Deciding(toJSON(data))
}

export function createDecisionDeposit(data: DecisionDepositData): DecisionDeposit {
    return new DecisionDeposit(toJSON(data))
}

export function createSubmissionDeposit(data: SubmissionDepositData): SubmissionDeposit {
    return new SubmissionDeposit(toJSON(data))
}
export async function sendNotification(ctx: ProcessorContext<Store>, proposal: Proposal, trigger: String) {
    const { hash, type, index, proposer, curator, status, trackNumber } = proposal
    let statusName = null

    // if difference between proposal update time and current time > 10 mins return
    return
    // if(proposal.updatedAt && (new Date().getTime() - proposal.updatedAt.getTime()) > 600000){
    //     ctx.log.info(`Proposal ${index || hash} updated more than 10 mins ago, skipping notification`)
    //     return
    // }

    // if([ProposalStatus.Started, 
    //     ProposalStatus.Submitted, 
    //     ProposalStatus.Added, 
    //     ProposalStatus.Proposed, 
    //     ProposalStatus.Opened,
    // ].includes(status)){
    //     statusName = 'submitted'
    // }
    // else if([ProposalStatus.Executed,
    //     ProposalStatus.Cancelled,
    //     ProposalStatus.Killed,
    //     ProposalStatus.Rejected,
    //     ProposalStatus.Executed,
    //     ProposalStatus.ExecutionFailed,
    //     ProposalStatus.Closed,
    //     ProposalStatus.Approved,
    //     ProposalStatus.Disapproved,
    //     ProposalStatus.Awarded,
    //     ProposalStatus.Claimed,
    //     ProposalStatus.NotPassed,
    //     ProposalStatus.Passed,
    //     ProposalStatus.Tabled,
    //     ProposalStatus.Retracted,
    //     ProposalStatus.Slashed,
    //     ProposalStatus.TimedOut,
    // ].includes(status)){
    //     statusName = 'closed'
    // }
    // else if([ProposalStatus.Deciding,
    //     ProposalStatus.ConfirmStarted,
    //     ProposalStatus.ConfirmAborted,
    // ].includes(status)){
    //     statusName = 'voting'
    // }

    // const notification = {
    //     trigger: trigger,
    //     args : {
    //         network: 'polkadot',
    //         postType: type,
    //         postId: String(index),
    //         proposerAddress: proposer || curator,
    //         statusType: statusName,
    //         track: String(trackNumber),
    //         statusName: status,
    //       }
    // }

    // if(!process.env.NOTIFICATION_API_KEY){
    //     ctx.log.error(`Notification Api Key not found`)
    //     return
    // }

    // ctx.log.info(`Sending notification with data ${JSON.stringify(notification)}`)

    // const response = await fetch(NOTIFICATION_URL, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'x-api-key': process.env.NOTIFICATION_API_KEY || '',
    //         'x-source': 'polkassembly'
    //     },
    //     body: JSON.stringify(notification),
    // })

    // ctx.log.info(`Notification response ${JSON.stringify(response)}`)
    // if (response.status !== 200) {
    //     ctx.log.error(`Notification failed for proposal ${index || hash} with status ${response.status}`)
    //     return
    // }
}