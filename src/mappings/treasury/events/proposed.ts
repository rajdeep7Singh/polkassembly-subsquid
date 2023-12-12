/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTreasury } from '../../utils/proposals'
import { getProposedData, getSpendApprovedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getProposedData(ctx, item)

    const storageData = await storage.treasury.getProposals(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TreasuryProposal, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const { proposer, beneficiary, value, bond } = storageData

    await createTreasury(ctx, header, {
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: ss58codec.encode(beneficiary),
        extrinsicIndex
    })
}

export async function handleSpendApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { proposalIndex, amount, beneficiary } = getSpendApprovedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await createTreasury(ctx, header, {
        index: proposalIndex,
        proposer: ss58codec.encode(beneficiary),
        status: ProposalStatus.Approved,
        reward: amount,
        deposit: 0 as unknown as bigint,
        payee: ss58codec.encode(beneficiary),
        extrinsicIndex
    })
}