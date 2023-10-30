// import { BatchContext, SubstrateBlock, toHex } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
// import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { getTransaction } from '@subsquid/frontier'
// import { EthereumCurrentTransactionStatusesStorage } from '../../../types/storage'
import { functions } from '../../../abi/convictionVoteAbi'
import { handleConvictionVotesFromPrecompile } from '../../referendumV2/extrinsics/convictionVoting'
import { handlePrecompileDelegate } from '../../referendumV2/extrinsics/delegate'
import { handlePrecompileUndelegate } from '../../referendumV2/extrinsics/undelegate'
import { handlePrecompiledRemoveVote } from '../../referendumV2/extrinsics/removeVote'
import { handlePrecompileRemoveOtherVote } from '../../referendumV2/extrinsics/removeOtherVote'
import { Call, ProcessorContext } from '../../../processor'

// export async function handlePrecompileTransactionStorage(ctx: BatchContext<Store, unknown>, header: SubstrateBlock, txnHash: string) {
//     const storageData = new EthereumCurrentTransactionStatusesStorage(ctx, header)
//     console.log(`Storage data: ${JSON.stringify(storageData)}`)
//     if (!storageData) return

//     if (storageData.isV40){
//         const transactions = await storageData.asV40.get()
//         if (!transactions) return
//         console.log(`Transactions 1st version: ${JSON.stringify(transactions)}`)
//         for (const transaction of transactions){
//             const { transactionHash, logs, logsBloom } = transaction
//             if(toHex(transactionHash) === txnHash){
//                 return
//             }

//         }
//     }
//     else if (storageData.isV900){
//         const transactions = await storageData.asV900.get()
//         console.log(`Transactions 2nd version: ${JSON.stringify(transactions)}`)
//         if (!transactions) return
//         for (const transaction of transactions){
//             const { transactionHash, logs, logsBloom } = transaction
//             if(toHex(transactionHash) === txnHash){
//                 return
//             }

//         }

//     }
// }


export async function handlePrecompileTransaction(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!(item as any).success) return
    let tx;
    try{
        tx = getTransaction(item)
    }catch{
        console.log(`Error getting transaction ${header.height}, extrinsicIndex: ${item.extrinsicIndex}`)
        // process.exit(1)
    }
    if(!tx) return
    const originAccountId = tx.from
    const txnHash = tx.hash
    let flag = false;
    try {
        const decoded = functions.voteYes.decode(tx.input)
        if(decoded){
            await handleConvictionVotesFromPrecompile(ctx, item, header, decoded, true, originAccountId, txnHash)
            flag = true
        }
    }
    catch (e){
        // ctx.log.info(`Ethereum transaction looking for suitable decoder`)
    }
    if (!flag){
        try{
            const decoded = functions.voteNo.decode(tx.input)
            if(decoded){
                flag = true
                await handleConvictionVotesFromPrecompile(ctx, item, header, decoded, false, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
            // ctx.log.info(`Ethereum transaction looking for suitable decoder`)
        }
    }
    if (!flag){
        try{
            const decoded = functions.delegate.decode(tx.input)
            if(decoded){
                await handlePrecompileDelegate(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true

            }
        }
        catch (e){
            // ctx.log.info(`Ethereum transaction looking for suitable decoder`)
        }
    }
    if (!flag){
        try{
            const decoded = functions.undelegate.decode(tx.input)
            if(decoded){
                flag = true
                await handlePrecompileUndelegate(ctx, item, header, decoded, originAccountId, txnHash)
            }
        }
        catch (e){
            // ctx.log.info(`Ethereum transaction looking for suitable decoder`)
        }
    }
    if (!flag){
        try{
            const decoded = functions.removeVote.decode(tx.input)
            if(decoded){
                await handlePrecompiledRemoveVote(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
            // ctx.log.info(`Ethereum transaction looking for suitable decoder`)
        }
    }
    if (!flag){
        try{
            const decoded = functions.removeOtherVote.decode(tx.input)
            if(decoded){
                await handlePrecompileRemoveOtherVote(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
            // ctx.log.info(`Ethereum transaction looking for suitable decoder`)
        }
    }
}