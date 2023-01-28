import { toHex } from '@subsquid/substrate-processor'
import { FindOneOptions, Store } from '@subsquid/typeorm-store'
import { toJSON } from '@subsquid/util-internal-json'
import { Any } from 'typeorm'
import { MissingProposalRecordWarn } from '../../common/errors'
import { ss58codec } from '../../common/tools'
import {
    MotionThreshold,
    Preimage,
    PreimageV2,
    Proposal,
    ProposalStatus,
    ProposalType,
    ProposedCall,
    Tally,
    DecisionDeposit,
    SubmissionDeposit,
    Deciding,
    ReferendumThreshold,
    ReferendumThresholdType,
    StatusHistory,
    Tippers,
    ProposalGroup,
} from '../../model'
import { EventHandlerContext } from '../types/contexts'
import {
    BountyData,
    ChildBountyData,
    CouncilMotionData,
    DemocracyProposalData,
    HashProposal,
    IndexProposal,
    PreimageData,
    PreimageDataV2,
    ProposedCallData,
    ReferendumData,
    ReferendumDataV2,
    TechCommitteeMotionData,
    TipData,
    TreasuryData,
    DecisionDepositData,
    SubmissionDepositData,
    DecidingData,
    TallyData,
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
        ctx.log.warn(MissingProposalRecordWarn('Preimage', `with hash ${hash} not found`,))
        return
    }

    Object.assign(proposal, options.data)
    proposal.updatedAt = new Date(ctx.block.timestamp)
    proposal.updatedAtBlock = ctx.block.height
    proposal.status = options.status

    await ctx.store.save(proposal)
}

export async function updatePreimageStatusV2(
    ctx: EventHandlerContext,
    hash: string,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
) {
    const proposal = await ctx.store.get(PreimageV2, { where: { hash: hash } })

    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn('PreimageV2', `with hash ${hash} not found`,))
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

async function getOrCreateProposalGroup(
    ctx: EventHandlerContext,
    index: number,
    type: ProposalType,
    parentId: number,
    parentType: ProposalType
): Promise<ProposalGroup>
 {
    const condition: FindOneOptions<ProposalGroup>['where'] = {}
    switch (type) {
        case ProposalType.Bounty:
            condition.bountyIndex = index as number
            break
        case ProposalType.TreasuryProposal:
            condition.treasuryIndex = index as number
            break
        case ProposalType.Referendum:
            condition.referendumIndex = index as number
            break
        case ProposalType.DemocracyProposal:
            condition.democracyProposalIndex = index as number
            break
        case ProposalType.CouncilMotion:
            condition.councilMotionIndex = index as number
            break
        case ProposalType.TechCommitteeProposal:
            condition.techCommitteeProposalIndex = index as number
            break
        default:
            throw new Error(`Unknown proposal type ${type}`)
    }
    let link = await ctx.store.get(ProposalGroup, { where: condition })
    if(link){
        switch (parentType) {
            case ProposalType.Bounty:
                link.bountyIndex = parentId as number
                break
            case ProposalType.TreasuryProposal:
                link.treasuryIndex = parentId as number
                break
            case ProposalType.Referendum:
                link.referendumIndex = parentId as number
                break
            case ProposalType.DemocracyProposal:
                link.democracyProposalIndex = parentId as number
                break
            case ProposalType.CouncilMotion:
                link.councilMotionIndex = parentId as number
                break
            case ProposalType.TechCommitteeProposal:
                link.techCommitteeProposalIndex = parentId as number
                break
            default:
                throw new Error(`Unknown proposal type ${type}`)
        }
        await ctx.store.save(link)
    }
    if (!link) {
        const id = await ctx.store.count(ProposalGroup)
        link = new ProposalGroup({
            id: id.toString(),
        })
        switch (type) {
            case ProposalType.Bounty:
                link.bountyIndex = index as number
                break
            case ProposalType.TreasuryProposal:
                link.treasuryIndex = index as number
                break
            case ProposalType.Referendum:
                link.referendumIndex = index as number
                break
            case ProposalType.DemocracyProposal:
                link.democracyProposalIndex = index as number
                break
            case ProposalType.CouncilMotion:
                link.councilMotionIndex = index as number
                break
            case ProposalType.TechCommitteeProposal:
                link.techCommitteeProposalIndex = index as number
                break
            default:
                throw new Error(`Unknown proposal type ${type}`)
        }
        switch (parentType) {
            case ProposalType.Bounty:
                link.bountyIndex = parentId as number
                break
            case ProposalType.TreasuryProposal:
                link.treasuryIndex = parentId as number
                break
            case ProposalType.Referendum:
                link.referendumIndex = parentId as number
                break
            case ProposalType.DemocracyProposal:
                link.democracyProposalIndex = parentId as number
                break
            case ProposalType.CouncilMotion:
                link.councilMotionIndex = parentId as number
                break
            case ProposalType.TechCommitteeProposal:
                link.techCommitteeProposalIndex = parentId as number
                break
            default:
                throw new Error(`Unknown proposal type ${type}`)
        }
        await ctx.store.insert(link)
    }
    return link
}

async function getProposalId(store: Store, type: ProposalType) {
    const count = await store.count(Proposal, { where: { type } })
    
    if(type == ProposalType.ReferendumV2){
        return `${Buffer.from(type.toLowerCase()).toString('hex')}-${count
            .toString()
            .padStart(8, '0')}`
    }
    return `${Buffer.from(type.toLowerCase()).toString('hex').slice(0, 8).padEnd(8, '0')}-${count
        .toString()
        .padStart(8, '0')}`
}

async function getPreimageId(store: Store) {
    const count = await store.count(Preimage)

    return count.toString().padStart(8, '0')
}

async function getPreimageIdV2(store: Store) {
    const count = await store.count(PreimageV2)

    return count.toString().padStart(8, '0')
}

export async function createDemocracyProposal(
    ctx: EventHandlerContext,
    data: DemocracyProposalData
): Promise<Proposal> {
    const { index, hash, proposer, deposit, status } = data

    const type = ProposalType.DemocracyProposal

    const id = await getProposalId(ctx.store, type)

    const preimage = await ctx.store.get(Preimage, {
        where: {
            hash: hash,
            status: ProposalStatus.Noted,
        },
        order: {
            createdAtBlock: 'DESC'
        }
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
        updatedAt: new Date(ctx.block.timestamp),
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
    const { index, threshold, hash, status, end, delay } = data

    const type = ProposalType.Referendum

    let group: ProposalGroup | undefined

    const id = await getProposalId(ctx.store, type)

    const preimage = await ctx.store.get(Preimage, {
        where: {
            hash: hash,
            status: ProposalStatus.Noted,
        },
        order: {
            createdAtBlock: 'DESC'
        }
    })

    if(hash){
        const associatedProposal = await ctx.store.get(Proposal, {
            where: {
                hash: hash,
                status: ProposalStatus.Executed,
                type: ProposalType.CouncilMotion,
            },
            order: {
                createdAtBlock: 'DESC'
            }
        }) || await ctx.store.get(Proposal, {
            where: {
                hash: hash,
                status: ProposalStatus.Tabled,
                updatedAtBlock: ctx.block.height,
                type: ProposalType.DemocracyProposal,
            },
            order: {
                createdAtBlock: 'DESC'
            }
        }) || await ctx.store.get(Proposal, {
            where: {
                proposalArgumentHash: hash,
                status: ProposalStatus.Executed,
                type: ProposalType.CouncilMotion,
            },
            order: {
                createdAtBlock: 'DESC'
            }
        })
        if(associatedProposal && associatedProposal.index && associatedProposal.type){
            group = await getOrCreateProposalGroup(ctx, associatedProposal.index, associatedProposal.type as ProposalType, index, type)
            associatedProposal.group = group
            await ctx.store.save(associatedProposal)

        }
    }


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
        end: end,
        delay: delay,
        group: group,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
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
    const { index, status, threshold, hash, proposer, call } = data

    let group: ProposalGroup | undefined
    let preimage = null
    let hexHash = null;

    if (call.args){
        if(call.args['proposalHash']){
            hexHash = call.args['proposalHash'] as string
            preimage = await ctx.store.get(Preimage, {
                where: {
                    hash: hexHash,
                    status: ProposalStatus.Noted,
                },
                order: {
                    createdAtBlock: 'DESC'
                }
            })
        }
    }

    const id = await getProposalId(ctx.store, type)

    if (!preimage) {
        preimage = await ctx.store.get(Preimage, {
            where: {
                hash: hash,
                status: ProposalStatus.Noted,
            },
            order: {
                createdAtBlock: 'DESC'
            }
        })
    }

    if (call.args) {
        if (call.args['bountyId']) {
            const bountyIndex = call.args['bountyId'] as number
            group = await getOrCreateProposalGroup(ctx, bountyIndex, ProposalType.Bounty, index, type)
            const associatedBounty = await ctx.store.get(Proposal, {
                where: {
                    index: bountyIndex,
                    type: ProposalType.Bounty,
                },
                order: {
                    createdAtBlock: 'DESC'
                }
            })
            if (associatedBounty) {
                associatedBounty.group = group
                await ctx.store.save(associatedBounty)
            }
        } else if (call.args['proposalId'] || call.args['proposal_index'] || call.args['proposal_id']) {
            const proposalId = call.args['proposalId'] as number || call.args['proposal_index'] as number || call.args['proposal_id'] as number
            group = await getOrCreateProposalGroup(ctx, proposalId, ProposalType.TreasuryProposal, index, type)
            const associatedTreasuryProposal = await ctx.store.get(Proposal, {
                where: {
                    index: proposalId,
                    type: ProposalType.TreasuryProposal,
                },
                order: {
                    createdAtBlock: 'DESC'
                }
            })
            if (associatedTreasuryProposal) {
                associatedTreasuryProposal.group = group
                await ctx.store.save(associatedTreasuryProposal)
            }
        }
        else if (call.args['proposalHash'] && type === ProposalType.TechCommitteeProposal) {
            const motionHash = call.args['proposalHash'] as string
            const counciMotion = await ctx.store.get(Proposal, {
                where: {
                    hash: motionHash,
                    type: ProposalType.CouncilMotion,
                },
                order: {
                    createdAtBlock: 'DESC'
                }
            }) || await ctx.store.get(Proposal, {
                where: {
                    proposalArgumentHash: motionHash,
                    type: ProposalType.CouncilMotion,
                },
                order: {
                    createdAtBlock: 'DESC'
                }
            })
            if (counciMotion && counciMotion.index) {
                group = await getOrCreateProposalGroup(ctx, counciMotion.index, ProposalType.CouncilMotion, index, type)
                counciMotion.group = group
                await ctx.store.save(counciMotion)
            }
        }
    }

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
        proposalArguments: createProposedCall(call),
        proposalArgumentHash: hexHash,
        preimage,
        group: group,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
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
    const { status, hash, proposer, payee, deposit, reason } = data

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
        description: reason,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
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
    const { status, index, proposer, deposit, reward, curatorDeposit, description, fee } = data

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
        curatorDeposit,
        description,
        status,
        fee,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
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

export async function createChildBounty(ctx: EventHandlerContext, data: ChildBountyData): Promise<Proposal> {
    const { status, index, parentBountyIndex, curatorDeposit, reward, fee, description } = data

    const type = ProposalType.ChildBounty

    const id = await getProposalId(ctx.store, type)

    // const group = await getOrCreateProposalGroup(ctx, index, ProposalType.Bounty)

    const proposal = new Proposal({
        id,
        type,
        index,
        reward,
        status,
        description,
        fee,
        parentBountyIndex,
        curatorDeposit,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
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
        // group: group,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
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

    const preimage = new Preimage({
        id,
        hash,
        proposer,
        status,
        proposedCall: call ? createProposedCall(call) : null,
        section: section,
        method: method,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(preimage)

    const proposal = await ctx.store.get(Proposal, { where: { hash }, order: { createdAt: 'DESC' } })

    if (proposal && !proposal.preimage) {
        proposal.preimage = preimage
        await ctx.store.save(proposal)
    }

    return preimage
}

export async function createPreimageV2(ctx: EventHandlerContext, data: PreimageDataV2): Promise<PreimageV2> {
    const { status, hash, proposer, call, section, method, deposit, length } = data

    // const type = ProposalType.Preimage

    const id = await getPreimageIdV2(ctx.store)

    // const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const preimage = new PreimageV2({
        id,
        hash,
        proposer,
        status,
        proposedCall: call ? createProposedCall(call) : null,
        deposit,
        length,
        section: section,
        method: method,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(preimage)

    return preimage
}

export async function createReferendumV2(ctx: EventHandlerContext, data: ReferendumDataV2, type: ProposalType): Promise<Proposal> {

    const { status, index, proposer, hash, tally, origin, trackNumber, submissionDeposit, submittedAt, enactmentAfter, enactmentAt, deciding, decisionDeposit } = data

    const id = await getProposalId(ctx.store, type)

    const preimage = await ctx.store.get(PreimageV2, {
        where: {
            hash: data.hash,
            status: ProposalStatus.Unrequested,
        },
        order: { createdAtBlock: 'DESC' },
    })

    const subDeposit = {who: toHex(submissionDeposit.who), amount: submissionDeposit.amount}

    let decDeposit = undefined

    if (decisionDeposit) {
        decDeposit = {who: toHex(decisionDeposit.who), amount: decisionDeposit.amount}
    }

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        trackNumber,
        preimageV2: preimage,
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
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
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

function createProposedCall(data: ProposedCallData): ProposedCall {
    return new ProposedCall(toJSON(data))
}

export function createTally(data: TallyData): Tally {
    return new Tally(toJSON(data))
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