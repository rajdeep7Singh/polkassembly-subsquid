import { Store } from '@subsquid/typeorm-store'
import { toJSON } from '@subsquid/util-internal-json'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { MissingProposalRecordWarn } from '../../common/errors'
import { ss58codec } from '../../common/tools'

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
} from '../../model'
import {
    AnnouncementsData,
    AllianceMotionData,
    HashProposal,
    IndexProposal,
    TallyData,
    ProposedCallData,
} from '../types/data'
import { randomUUID } from 'crypto'

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
        }
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
        proposal: associatedMotoion ? associatedMotoion : null,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
        updatedAt: new Date(header.timestamp),
        updatedAtBlock: header.height,
    })
    await ctx.store.insert(announcementRow)
    if(associatedMotoion){
        associatedMotoion.announcement = announcementRow
        await ctx.store.save(associatedMotoion)
    }
    return announcementRow
}

function createProposedCall(data: ProposedCallData): ProposedCall {
    return new ProposedCall(toJSON(data))
}