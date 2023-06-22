import { Store } from '@subsquid/typeorm-store'
import { toJSON } from '@subsquid/util-internal-json'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
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
} from '../types/data'
import { randomUUID } from 'crypto'
import { ss58codec } from '../../common/tools'

type ProposalUpdateData = Partial<
    Omit<
        Proposal,
        'updatedAt' | 'updatedAtBlock' | 'endedAt' | 'endedAtBlock' | 'status' | 'voting' | 'statusHistory' | 'id'
    >
>

export async function updateProposalStatus(
    ctx: BatchContext<Store, unknown>,
    header: SubstrateBlock,
    index: number,
    type: IndexProposal,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: BatchContext<Store, unknown>,
    header: SubstrateBlock,
    hash: string,
    type: HashProposal,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: BatchContext<Store, unknown>,
    header: SubstrateBlock,
    hashOrIndex: string | number,
    type: ProposalType,
    options: {
        status: ProposalStatus
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
            block: proposal.updatedAtBlock,
            timestamp: proposal.updatedAt,
            status: proposal.status,
            proposal,
        })
    )
    await sendNotification(ctx, proposal, 'proposalStatusChanged')
}
async function getProposalId(store: Store, type: ProposalType) {
    const count = await store.count(Proposal, { where: { type } })
    
    return `${Buffer.from(type.toLowerCase()).toString('hex').slice(0, 8).padEnd(8, '0')}-${count
        .toString()
        .padStart(8, '0')}`
}

export async function createAllianceMotion(
    ctx: BatchContext<Store, unknown>,
    header: SubstrateBlock,
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
    ctx: BatchContext<Store, unknown>,
    header: SubstrateBlock,
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

export async function createPreimageV2( ctx: BatchContext<Store, unknown>, header: SubstrateBlock, data: PreimageData): Promise<Preimage> {
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

    return preimage
}

export async function createFellowshipReferendum( ctx: BatchContext<Store, unknown>, header: SubstrateBlock, data: FellowshipReferendumData, type: ProposalType): Promise<Proposal> {

    const { status, index, proposer, hash, tally, origin, trackNumber, submissionDeposit, submittedAt, enactmentAfter, enactmentAt, deciding, decisionDeposit } = data

    const id = await getProposalId(ctx.store, type)

    const preimage: any = await ctx.store.get(Preimage, {
        where: {
            hash: data.hash,
        },
        order: { createdAtBlock: 'DESC' },
    })

    let group = null;

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
    await sendNotification(ctx, proposal, 'newProposalCreated')
    return proposal
}

export async function updatePreimageStatusV2(
    ctx: BatchContext<Store, unknown>,
    header: SubstrateBlock,
    hash: string,
    options: {
        status: ProposalStatus
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

    await ctx.store.save(proposal)
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
export async function sendNotification(ctx: BatchContext<Store, unknown>, proposal: Proposal, trigger: String) {
    const { hash, type, index, proposer, curator, status, trackNumber } = proposal
    let statusName = null

    // if difference between proposal update time and current time > 10 mins return
    if(proposal.updatedAt && (new Date().getTime() - proposal.updatedAt.getTime()) > 600000){
        ctx.log.info(`Proposal ${index || hash} updated more than 10 mins ago, skipping notification`)
        return
    }

    if([ProposalStatus.Started, 
        ProposalStatus.Submitted, 
        ProposalStatus.Added, 
        ProposalStatus.Proposed, 
        ProposalStatus.Opened,
    ].includes(status)){
        statusName = 'submitted'
    }
    else if([ProposalStatus.Executed,
        ProposalStatus.Cancelled,
        ProposalStatus.Killed,
        ProposalStatus.Rejected,
        ProposalStatus.Executed,
        ProposalStatus.ExecutionFailed,
        ProposalStatus.Closed,
        ProposalStatus.Approved,
        ProposalStatus.Disapproved,
        ProposalStatus.Awarded,
        ProposalStatus.Claimed,
        ProposalStatus.NotPassed,
        ProposalStatus.Passed,
        ProposalStatus.Tabled,
        ProposalStatus.Retracted,
        ProposalStatus.Slashed,
        ProposalStatus.TimedOut,
    ].includes(status)){
        statusName = 'closed'
    }
    else if([ProposalStatus.Deciding,
        ProposalStatus.ConfirmStarted,
        ProposalStatus.ConfirmAborted,
    ].includes(status)){
        statusName = 'voting'
    }

    const notification = {
        trigger: trigger,
        args : {
            network: 'polkadot',
            postType: type,
            postId: String(index) || hash,
            proposerAddress: proposer || curator,
            statusType: statusName,
            track: String(trackNumber),
            statusName: status,
          }
    }

    if(!process.env.NOTIFICATION_API_KEY){
        ctx.log.error(`Notification Api Key not found`)
        return
    }

    ctx.log.info(`Sending notification with data ${JSON.stringify(notification)}`)

    const response = await fetch(NOTIFICATION_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.NOTIFICATION_API_KEY || '',
            'x-source': 'polkassembly'
        },
        body: JSON.stringify(notification),
    })

    ctx.log.info(`Notification response ${JSON.stringify(response)}`)
    if (response.status !== 200) {
        ctx.log.error(`Notification failed for proposal ${index || hash} with status ${response.status}`)
        return
    }
}