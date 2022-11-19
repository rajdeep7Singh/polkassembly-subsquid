/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { ChildBountiesChildBountiesStorage, ChildBountiesChildBountyDescriptionsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface ChildBountyBountyStorageData {
    value: bigint
    fee: bigint
    description?: string | Uint8Array
    parentBounty: number,
    curatorDeposit: bigint,
}

async function getChildBountyStorageData(ctx: BlockContext, index: number, parentBountyId: number): Promise<ChildBountyBountyStorageData | undefined> {
    const storage = new ChildBountiesChildBountiesStorage(ctx)
    const description = new ChildBountiesChildBountyDescriptionsStorage(ctx)
    let childBountyDescription = null;
    let data: ChildBountyBountyStorageData | undefined = undefined;

    if (!storage.isExists) return undefined

    if (storage.isV9190) {
        data = await storage.getAsV9190(parentBountyId, index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }

    if (description.isExists && description.isV9190){
        childBountyDescription = await description.getAsV9190(index);
    }
    if(childBountyDescription && data){
        data['description'] = childBountyDescription;
        return data;
    }

    return data

}

// async function getTreasuryStorageData(ctx: BlockContext, index: number): Promise<BountyStorageData | undefined> {
//     const storage = new TreasuryBountiesStorage(ctx)
//     if (!storage.isExists) return undefined

//     if (storage.isV2025) {
//         return await storage.getAsV2025(index)
//     } else {
//         throw new UnknownVersionError(storage.constructor.name)
//     }
// }

export async function getChildBounties(ctx: BlockContext, parentBountyId: number, index: number) {
    return (await getChildBountyStorageData(ctx, parentBountyId, index))
}
