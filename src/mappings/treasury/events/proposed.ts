/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTreasury } from '../../utils/proposals'
import { getProposedData, getSpendApprovedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getProposedData(item)

    const storageData = await storage.treasury.getProposals(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TreasuryProposal, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    const { proposer, beneficiary, value, bond } = storageData

    await createTreasury(ctx, header, extrinsicIndex, {
        index,
        proposer: proposer,
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: beneficiary,
    })
}

export async function handleSpendApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { proposalIndex, amount, beneficiary } = getSpendApprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await createTreasury(ctx, header, extrinsicIndex, {
        index: proposalIndex,
        proposer: beneficiary,
        status: ProposalStatus.Approved,
        reward: amount,
        deposit: 0 as unknown as bigint,
        payee: beneficiary,
    })
}