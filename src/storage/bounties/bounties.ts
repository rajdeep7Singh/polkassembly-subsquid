/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { BountiesBountiesStorage, BountiesBountyDescriptionsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface BountyStorageData {
    proposer: Uint8Array
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
}

async function getBountyStorageData(ctx: BlockContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new BountiesBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV110) {
        return await storage.getAsV110(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBounties(ctx: BlockContext, index: number) {
    let bountyInfo =  (await getBountyStorageData(ctx, index))
    if(!bountyInfo) return undefined;
    let description = await getDescription(ctx, index).then((r) => r || '');
    return {
        ...bountyInfo,
        description
    }
}


async function getBountyDescriptionStorageData(ctx: BlockContext, index: number): Promise<string | undefined> {
    const storage = new BountiesBountyDescriptionsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV110) {
        return await storage.getAsV110(index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getDescription(ctx: BlockContext, index: number) {
    return (await getBountyDescriptionStorageData(ctx, index))
}