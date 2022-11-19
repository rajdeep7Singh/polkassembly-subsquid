/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { BountiesBountiesStorage, BountiesBountyDescriptionsStorage, TreasuryBountiesStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface BountyStorageData {
    proposer: Uint8Array
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
    description?: Uint8Array
}

async function getBountyStorageData(ctx: BlockContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new BountiesBountiesStorage(ctx)
    let data: BountyStorageData | undefined = undefined;
    const bountyDescription = new BountiesBountyDescriptionsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        data =  await storage.getAsV9111(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }

    if(bountyDescription.isExists && bountyDescription.isV9111 && data){
        data['description'] = await bountyDescription.getAsV9111(index)
        return data
    }

    return data
}

async function getTreasuryStorageData(ctx: BlockContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new TreasuryBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV2025) {
        return await storage.getAsV2025(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBounties(ctx: BlockContext, index: number) {
    return (await getBountyStorageData(ctx, index)) || (await getTreasuryStorageData(ctx, index))
}
