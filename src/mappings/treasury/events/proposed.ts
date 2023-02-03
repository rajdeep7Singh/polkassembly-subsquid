/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTreasury } from '../../utils/proposals'
import { getProposedData, getSpendApprovedData } from './getters'
import { toHex } from '@subsquid/substrate-processor'

export async function handleProposed(ctx: EventHandlerContext) {
    const { index } = getProposedData(ctx)

    const storageData = await storage.treasury.getProposals(ctx, index)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TreasuryProposal, index))
        return
    }

    const { proposer, beneficiary, value, bond } = storageData

    await createTreasury(ctx, {
        index,
        proposer: toHex(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: toHex(beneficiary),
    })
}

export async function handleSpendApproved(ctx: EventHandlerContext) {
    const { proposalIndex, amount, beneficiary } = getSpendApprovedData(ctx)

    await createTreasury(ctx, {
        index: proposalIndex,
        proposer: ss58codec.encode(beneficiary),
        status: ProposalStatus.Approved,
        reward: amount,
        deposit: 0 as unknown as bigint,
        payee: ss58codec.encode(beneficiary),
    })
}