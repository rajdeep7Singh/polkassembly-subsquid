import { FindOneOptions, Store } from '@subsquid/typeorm-store'
import { toJSON } from '@subsquid/util-internal-json'
import { MissingProposalRecordWarn } from '../../common/errors'
import {
    MotionThreshold,
    Preimage,
    Proposal,
    ProposalStatus,
    ProposalType,
    ProposedCall,
    ReferendumThreshold,
    ReferendumThresholdType,
    StatusHistory,
} from '../../model'
import { EventHandlerContext } from '../types/contexts'
import {
    BountyData,
    CouncilMotionData,
    DemocracyProposalData,
    HashProposal,
    IndexProposal,
    PreimageData,
    ProposedCallData,
    ReferendumData,
    TechCommitteeMotionData,
    TipData,
    TreasuryData,
} from '../types/data'

type ProposalUpdateData = Partial<
    Omit<
        Proposal,
        'updatedAt' | 'updatedAtBlock' | 'endedAt' | 'endedAtBlock' | 'status' | 'voting' | 'statusHistory' | 'id'
    >
>

export async function updatePreimageStatus(
    ctx: EventHandlerContext,
    hash: string,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
) {
    const proposal = await ctx.store.get(Preimage, { where: { hash: hash } })

    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn( 'Preimage', `Preimage with hash ${hash} not found`,))
        return
    }

    Object.assign(proposal, options.data)
    proposal.updatedAt = new Date(ctx.block.timestamp)
    proposal.updatedAtBlock = ctx.block.height
    proposal.status = options.status

    await ctx.store.save(proposal)
}

export async function updateProposalStatus(
    ctx: EventHandlerContext,
    index: number,
    type: IndexProposal,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: EventHandlerContext,
    hash: string,
    type: HashProposal,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: EventHandlerContext,
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
    proposal.updatedAt = new Date(ctx.block.timestamp)
    proposal.updatedAtBlock = ctx.block.height
    proposal.status = options.status

    if (options.isEnded) {
        proposal.endedAtBlock = proposal.updatedAtBlock
        proposal.endedAt = proposal.updatedAt
    }

    await ctx.store.save(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
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

async function getPreimageId(store: Store) {
    const count = await store.count(Preimage)

    return count.toString().padStart(8, '0')
}

export async function createDemocracyProposal(
    ctx: EventHandlerContext,
    data: DemocracyProposalData
): Promise<Proposal> {
    const { index, hash, proposer, deposit, status } = data

    const type = ProposalType.DemocracyProposal

    const id = await getProposalId(ctx.store, type)

    // const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const preimage = await ctx.store.get(Preimage, {
        where: {
            hash: hash,
            status: ProposalStatus.Noted,
        },
    })

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        proposer,
        deposit,
        status,
        preimage,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createReferendum(ctx: EventHandlerContext, data: ReferendumData): Promise<Proposal> {
    const { index, threshold, hash, status } = data

    const type = ProposalType.Referendum

    const id = await getProposalId(ctx.store, type)

    const preimage = await ctx.store.get(Preimage, {
        where: {
            hash: hash,
            status: ProposalStatus.Noted,
        },
    })

    // const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        threshold: new ReferendumThreshold({
            type: threshold as ReferendumThresholdType,
        }),
        preimage,
        status,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createCoucilMotion(
    ctx: EventHandlerContext,
    data: CouncilMotionData,
    type: ProposalType.CouncilMotion | ProposalType.TechCommitteeProposal = ProposalType.CouncilMotion
): Promise<Proposal> {
    const { index, status, threshold, hash, proposer } = data

    // let group: ProposalGroup | undefined

    const id = await getProposalId(ctx.store, type)

    const preimage = await ctx.store.get(Preimage, {
        where: {
            hash: hash,
            status: ProposalStatus.Noted,
        },
    })

    // if (call.args) {
    //     if (call.args['proposalHash']) {
    //         const hexHash = call.args['proposalHash'] as string
            // group = await getOrCreateProposalGroup(ctx, hexHash, ProposalType.Preimage)
    //     } else if (call.args['bountyId']) {
    //         const index = call.args['bountyId'] as number
    //         // group = await getOrCreateProposalGroup(ctx, index, ProposalType.Bounty)
    //     } else if (call.args['proposalId']) {
    //         const index = call.args['proposalId'] as number
    //         // group = await getOrCreateProposalGroup(ctx, index, ProposalType.TreasuryProposal)
    //     }
    // }

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        proposer,
        status,
        threshold: new MotionThreshold({
            value: threshold,
        }),
        preimage,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createTechCommitteeMotion(
    ctx: EventHandlerContext,
    data: TechCommitteeMotionData
): Promise<Proposal> {
    return await createCoucilMotion(ctx, data, ProposalType.TechCommitteeProposal)
}

export async function createTip(ctx: EventHandlerContext, data: TipData): Promise<Proposal> {
    const { status, hash, proposer, payee, deposit } = data

    const type = ProposalType.Tip

    const id = await getProposalId(ctx.store, type)

    const proposal = new Proposal({
        id,
        type,
        hash,
        proposer,
        payee,
        deposit,
        status,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createBounty(ctx: EventHandlerContext, data: BountyData): Promise<Proposal> {
    const { status, index, proposer, deposit, reward } = data

    const type = ProposalType.Bounty

    const id = await getProposalId(ctx.store, type)

    // const group = await getOrCreateProposalGroup(ctx, index, ProposalType.Bounty)

    const proposal = new Proposal({
        id,
        type,
        index,
        proposer,
        deposit,
        reward,
        status,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        // group,
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createTreasury(ctx: EventHandlerContext, data: TreasuryData): Promise<Proposal> {
    const { status, index, proposer, deposit, reward, payee } = data

    const type = ProposalType.TreasuryProposal

    const id = await getProposalId(ctx.store, type)

    // const group = await getOrCreateProposalGroup(ctx, index, ProposalType.TreasuryProposal)

    const proposal = new Proposal({
        id,
        type,
        index,
        proposer,
        deposit,
        reward,
        status,
        payee,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createPreimage(ctx: EventHandlerContext, data: PreimageData): Promise<Preimage> {
    const { status, hash, proposer, call, section, method } = data

    // const type = ProposalType.Preimage

    const id = await getPreimageId(ctx.store)

    // const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const proposal = new Preimage({
        id,
        hash,
        proposer,
        status,
        proposedCall: call ? createProposedCall(call) : null,
        section: section,
        method: method,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(proposal)

    return proposal
}

function createProposedCall(data: ProposedCallData): ProposedCall {
    return new ProposedCall(toJSON(data))
}
