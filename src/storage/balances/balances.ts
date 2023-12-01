import { Store } from '@subsquid/typeorm-store'
import { Block, ProcessorContext} from '../../processor'


export async function getTotalIssuanceStorageData(ctx: ProcessorContext<Store>, block: Block): Promise<bigint> {
    try{
        const storageData = await block._runtime.getStorage(block.hash, 'Balances.TotalIssuance')
        return BigInt(storageData) || BigInt(0)
    }
    catch(e){
        return BigInt(0)
    
    }
}

export async function getTotalInactiveIssuanceStorageData(ctx: ProcessorContext<Store>, block: Block): Promise<bigint> {
    try{
        const storageData = await block._runtime.getStorage(block.hash, 'Balances.InactiveIssuance')
        return BigInt(storageData) || BigInt(0)
    }
    catch(e){
        return BigInt(0)
    
    }
}