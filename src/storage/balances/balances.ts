import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'
import { inactiveIssuance, totalIssuance } from '../../types/balances/storage'
import { Block, ProcessorContext} from '../../processor'


export async function getTotalIssuanceStorageData(ctx: ProcessorContext<Store>, block: Block): Promise<bigint> {
    if (inactiveIssuance.v2201.is(block)) {
        return await inactiveIssuance.v2201.get(block) || BigInt(0)
    } else {
        throw new UnknownVersionError('Balances.InactiveIssuance')
    }
}

export async function getTotalInactiveIssuanceStorageData(ctx: ProcessorContext<Store>, block: Block): Promise<bigint> {
    if (totalIssuance.v40.is(block)) {
        return await totalIssuance.v40.get(block) || BigInt(0)
    } else {
        throw new UnknownVersionError('Balances.TotalIssuance')
    }
}