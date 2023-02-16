import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { getTransaction } from '@subsquid/frontier'
import { functions as oldFunctions } from '../../../gov1AbiOld/moonbeamAbi'
import { functions } from '../../../gov1AbiNew/moonbeamAbi'
import { handlePrecompileVote } from '../../democracy/extrinsics/vote'
// import { handleConvictionVotesFromPrecompile } from '../../referendumV2/extrinsics/convictionVoting'
// import { handlePrecompileDelegate } from '../../referendumV2/extrinsics/delegate'
// import { handlePrecompileUndelegate } from '../../referendumV2/extrinsics/undelegate'
// import { handlePrecompiledRemoveVote } from '../../referendumV2/extrinsics/removeVote'
// import { handlePrecompileRemoveOtherVote } from '../../referendumV2/extrinsics/removeOtherVote'

export async function handlePrecompileTransaction(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Ethereum.transact', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    const tx = getTransaction(ctx, item.call)
    const originAccountId = tx.from
    const txnHash = tx.hash
    let flag = false;
    try {
        const decoded = oldFunctions.standard_vote.decode(tx.input)
        if(decoded){
            await handlePrecompileVote(ctx, item.call, header, decoded, originAccountId, txnHash)
            flag = true
        }
    }
    catch (e){
    }
    if (!flag){
        try{
            const decoded = functions.standardVote.decode(tx.input)
            if(decoded){
                await handlePrecompileVote(ctx, item.call, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    // if (!flag){
    //     try{
    //         const decoded = functions.voteNo.decode(tx.input)
    //         if(decoded){
    //             flag = true
    //             await handleConvictionVotesFromPrecompile(ctx, item.call, header, decoded, true, originAccountId)
    //             flag = true
    //         }
    //     }
    //     catch (e){
    //         ctx.log.info(`Ethereum transaction looking for suitable decoder`)
    //     }
    // }
    // if (!flag){
    //     try{
    //         const decoded = functions.delegate.decode(tx.input)
    //         if(decoded){
    //             await handlePrecompileDelegate(ctx, item.call, header, decoded, originAccountId)
    //             flag = true

    //         }
    //     }
    //     catch (e){
    //         ctx.log.info(`Ethereum transaction looking for suitable decoder`)
    //     }
    // }
    // if (!flag){
    //     try{
    //         const decoded = functions.undelegate.decode(tx.input)
    //         if(decoded){
    //             flag = true
    //             await handlePrecompileUndelegate(ctx, item.call, header, decoded, originAccountId)
    //         }
    //     }
    //     catch (e){
    //         ctx.log.info(`Ethereum transaction looking for suitable decoder`)
    //     }
    // }
    // if (!flag){
    //     try{
    //         const decoded = functions.removeVote.decode(tx.input)
    //         if(decoded){
    //             await handlePrecompiledRemoveVote(ctx, item.call, header, decoded, originAccountId)
    //             flag = true
    //         }
    //     }
    //     catch (e){
    //         ctx.log.info(`Ethereum transaction looking for suitable decoder`)
    //     }
    // }
    // if (!flag){
    //     try{
    //         const decoded = functions.removeOtherVote.decode(tx.input)
    //         if(decoded){
    //             await handlePrecompileRemoveOtherVote(ctx, item.call, header, decoded, originAccountId)
    //             flag = true
    //         }
    //     }
    //     catch (e){
    //         ctx.log.info(`Ethereum transaction looking for suitable decoder`)
    //     }
    // }
}