/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { bounties, bountyDescriptions } from '../../types/bounties/storage'
import { bounties as TreasuryBountiesStorage, bountyDescriptions as  TreasuryBountyDescriptionsStorage} from '../../types/treasury/storage'

import { Store } from '@subsquid/typeorm-store'

interface BountyStorageData {
    proposer: string
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
}

async function getBountyStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<BountyStorageData | undefined> {
    
    if (bounties.v283.is(block)) {
        return await bounties.v283.get(block, index)
    }else if (bounties.v295.is(block)) {
        return await bounties.v295.get(block, index)
    }else {
        throw new UnknownVersionError("Bounty.Bounties")
    }
}

async function getTreasuryStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<BountyStorageData | undefined> {

    if (TreasuryBountiesStorage.v266.is(block)) {
        return await TreasuryBountiesStorage.v266.get(block, index)
    }else {
        throw new UnknownVersionError("Bounty.Bountie")
    }
}

export async function getBounties(ctx: ProcessorContext<Store>, index: number, block: any) {
    let bountyInfo;
    try{
        bountyInfo = await getBountyStorageData(ctx, index, block)
    }catch {
        bountyInfo = await getTreasuryStorageData(ctx, index, block)
    }
    if(!bountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...bountyInfo,
        description
    }
}

async function getBountyDescriptionStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (bountyDescriptions.v295.is(block)) {
        return await bountyDescriptions.v295.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Bounties.descriptions")
    }
}

async function getTreasuryDescriptionStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (TreasuryBountyDescriptionsStorage.v266.is(block)) {
        return await TreasuryBountyDescriptionsStorage.v266.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("TreasuryBounties.descriptions")
    }
}

async function getDescription(ctx: ProcessorContext<Store>, index: number, block: any) {
    try {
        return await getBountyDescriptionStorageData(ctx, index, block)
    }catch {
        await getTreasuryDescriptionStorageData(ctx, index, block)
    }
}