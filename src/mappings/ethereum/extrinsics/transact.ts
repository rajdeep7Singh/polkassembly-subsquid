// import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
// import { Store } from '@subsquid/typeorm-store'
// import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
// import { getTransaction } from '@subsquid/frontier'
// import { functions } from '../../../abi/convictionVoteAbi'
// import { handleConvictionVotesFromPrecompile } from '../../referendumV2/extrinsics/convictionVoting'
// import { handlePrecompileDelegate } from '../../referendumV2/extrinsics/delegate'
// import { handlePrecompileUndelegate } from '../../referendumV2/extrinsics/undelegate'
// import { handlePrecompiledRemoveVote } from '../../referendumV2/extrinsics/removeVote'
// import { handlePrecompileRemoveOtherVote } from '../../referendumV2/extrinsics/removeOtherVote'
// import { getOriginAccountId } from '../../../common/tools'

// export async function handlePrecompileTransaction(ctx: BatchContext<Store, unknown>,
//     item: CallItem<'Ethereum.transact', { call: { args: true; origin: true } }>,
//     header: SubstrateBlock) {
//     const tx = getTransaction(ctx, item.call)
//     const originAccountId = tx.from
//     let flag = false;
//     try {
//         const decoded = functions.voteYes.decode(tx.input)
//         if(decoded){
//             await handleConvictionVotesFromPrecompile(ctx, item.call, header, decoded, true, originAccountId)
//             flag = true
//         }
//     }
//     catch (e){
//         ctx.log.info(`Ethereum transaction looking for suitable decoder`)
//     }
//     if (!flag){
//         try{
//             const decoded = functions.voteNo.decode(tx.input)
//             if(decoded){
//                 flag = true
//                 await handleConvictionVotesFromPrecompile(ctx, item.call, header, decoded, true, originAccountId)
//                 flag = true
//             }
//         }
//         catch (e){
//             ctx.log.info(`Ethereum transaction looking for suitable decoder`)
//         }
//     }
//     if (!flag){
//         try{
//             const decoded = functions.delegate.decode(tx.input)
//             if(decoded){
//                 await handlePrecompileDelegate(ctx, item.call, header, decoded, originAccountId)
//                 flag = true

//             }
//         }
//         catch (e){
//             ctx.log.info(`Ethereum transaction looking for suitable decoder`)
//         }
//     }
//     if (!flag){
//         try{
//             const decoded = functions.undelegate.decode(tx.input)
//             if(decoded){
//                 flag = true
//                 await handlePrecompileUndelegate(ctx, item.call, header, decoded, originAccountId)
//             }
//         }
//         catch (e){
//             ctx.log.info(`Ethereum transaction looking for suitable decoder`)
//         }
//     }
//     if (!flag){
//         try{
//             const decoded = functions.removeVote.decode(tx.input)
//             if(decoded){
//                 await handlePrecompiledRemoveVote(ctx, item.call, header, decoded, originAccountId)
//                 flag = true
//             }
//         }
//         catch (e){
//             ctx.log.info(`Ethereum transaction looking for suitable decoder`)
//         }
//     }
//     if (!flag){
//         try{
//             const decoded = functions.removeOtherVote.decode(tx.input)
//             if(decoded){
//                 await handlePrecompileRemoveOtherVote(ctx, item.call, header, decoded, originAccountId)
//                 flag = true
//             }
//         }
//         catch (e){
//             ctx.log.info(`Ethereum transaction looking for suitable decoder`)
//         }
//     }
// }