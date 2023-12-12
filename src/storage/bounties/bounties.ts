/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { bounties, bountyDescriptions } from '../../types/bounties/storage'
import { Block, ProcessorContext} from '../../processor'

import { Store } from '@subsquid/typeorm-store'

interface BountyStorageData {
    proposer: string
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
}

async function getBountyStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<BountyStorageData | undefined> {

    if (bounties.v40.is(block)) {
        return await bounties.v40.get(block, index)
    } else {
        throw new UnknownVersionError('Bounty.Bounties')
    }
}

export async function getBounties(ctx: ProcessorContext<Store>, index: number, block: any) {
    let bountyInfo =  (await getBountyStorageData(ctx, index, block))
    if(!bountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...bountyInfo,
        description
    }
}


async function getBountyDescriptionStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (bountyDescriptions.v40.is(block)) {
        return await bountyDescriptions.v40.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError('Bounties.BountyDescriptions')
    }
}

async function getDescription(ctx: ProcessorContext<Store>, index: number, block: any) {
    return (await getBountyDescriptionStorageData(ctx, index, block))
}