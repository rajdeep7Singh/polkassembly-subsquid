import { Store } from '@subsquid/typeorm-store'
import { getTransaction } from '@subsquid/frontier'
import { functions } from '../../../abi/convictionVoteAbi'
import { functions as oldFunctions } from '../../../gov1AbiOld/moonbeamAbi'
import { functions as newFunctions } from '../../../gov1AbiNew/moonbeamAbi'
import { handleConvictionVotesFromPrecompile } from '../../referendumV2/extrinsics/convictionVoting'
import { handlePrecompileDelegate } from '../../referendumV2/extrinsics/delegate'
import { handlePrecompileUndelegate } from '../../referendumV2/extrinsics/undelegate'
import { handlePrecompiledRemoveVote } from '../../referendumV2/extrinsics/removeVote'
import { handlePrecompileRemoveOtherVote } from '../../referendumV2/extrinsics/removeOtherVote'
import { Call, ProcessorContext } from '../../../processor'
import { handleDemocracyVotesFromPrecompile } from '../../democracy/extrinsics/democracyVote'
import { handleDemocracyPrecompileDelegate } from '../../democracy/extrinsics/delegate'
import { handleDemocracyPrecompileUndelegate } from '../../democracy/extrinsics/undelegate'
import { handleDemocracyPrecompiledRemoveVote } from '../../democracy/extrinsics/removeVote'

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
        const decoded = newFunctions.standardVote.decode(tx.input)
        if(decoded){
            await handleDemocracyVotesFromPrecompile(ctx, item, header, decoded, originAccountId, txnHash)
            flag = true
        }
    }
    catch (e){
    }
    if(!flag){
        try {
            const decoded = oldFunctions.standard_vote.decode(tx.input)
            if(decoded){
                await handleDemocracyVotesFromPrecompile(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    if(!flag){
        try {
            const decoded = newFunctions.delegate.decode(tx.input)
            if(decoded){
                await handleDemocracyPrecompileDelegate(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    if(!flag){
        try {
            const decoded = oldFunctions.delegate.decode(tx.input)
            if(decoded){
                await handleDemocracyPrecompileDelegate(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    if(!flag){
        try {
            const decoded = newFunctions.unDelegate.decode(tx.input)
            if(decoded){
                await handleDemocracyPrecompileUndelegate(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    if(!flag){
        try {
            const decoded = oldFunctions.un_delegate.decode(tx.input)
            if(decoded){
                await handleDemocracyPrecompileUndelegate(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    if(!flag){
        try {
            const decoded = newFunctions.removeVote.decode(tx.input)
            if(decoded){
                await handleDemocracyPrecompiledRemoveVote(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    if(!flag){
        try {
            const decoded = oldFunctions.remove_vote.decode(tx.input)
            if(decoded){
                await handleDemocracyPrecompiledRemoveVote(ctx, item, header, decoded, originAccountId, txnHash)
                flag = true
            }
        }
        catch (e){
        }
    }
    if(!flag){
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