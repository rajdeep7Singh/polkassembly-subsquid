
import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import { getTransaction } from '@subsquid/frontier'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://wss.api.moonbase.moonbeam.network',
        archive: lookupArchive('moonbase', { release: 'FireSquid' }),
    })
    .setBlockRange({from: 3709340, to: 3709340})
    .addEvent('Democracy.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Tabled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Started', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Passed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.NotPassed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Seconded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageNoted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageUsed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageInvalid', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageMissing', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageReaped', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Ethereum.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Treasury.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.Awarded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.SpendApproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Preimage.Noted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Cleared', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Requested', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Referenda.Submitted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Killed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.TimedOut', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.DecisionDepositPlaced', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.DecisionStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Confirmed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.ConfirmStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.ConfirmAborted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Scheduler.Dispatched', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addCall('ConvictionVoting.vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.delegate', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.undelegate', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.remove_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.remove_other_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.vote', { data: { call: { origin: true, args: true, }, } } as const)

    .addEthereumTransaction('0x0000000000000000000000000000000000000812')

    processor.run(new TypeormDatabase(), async (ctx: any) => {
        for (let block of ctx.blocks) {
            const recievedTxns: Record<string, any> = {};
            const executedTxns: Record<string, boolean> = {};
            for (let item of block.items) {
                if (item.kind === 'call') {
                    if (item.name == 'ConvictionVoting.vote'){
                        await modules.referendumV2.extrinsics.handleConvictionVote(ctx, item, block.header)
                    }
                    if (item.name == 'ConvictionVoting.delegate'){
                        await modules.referendumV2.extrinsics.handleDelegate(ctx, item, block.header)
                    }
                    if (item.name == 'ConvictionVoting.undelegate'){
                        await modules.referendumV2.extrinsics.handleUndelegate(ctx, item, block.header)
                    }
                    if (item.name == 'ConvictionVoting.remove_vote'){
                        await modules.referendumV2.extrinsics.handleRemoveVote(ctx, item, block.header)
                    }
                    if (item.name == 'ConvictionVoting.remove_other_vote'){
                        await modules.referendumV2.extrinsics.handleRemoveOtherVote(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.vote'){
                        await modules.democracy.extrinsics.handleVote(ctx, item, block.header)
                    }
                    if(item.name == 'Ethereum.transact'){
                        const tx = getTransaction(ctx, item.call)
                        const hash = tx.hash
                        recievedTxns[hash] = [item, block.header]
                        // await modules.ethereum.extrinsics.handlePrecompileTransaction(ctx, item, block.header)
                    }
                }
                if (item.kind === 'event'){
                    if (item.name == 'Democracy.Proposed'){
                        await modules.democracy.events.handleProposed(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.Tabled'){
                        await modules.democracy.events.handleTabled(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.Started'){
                        await modules.democracy.events.handleStarted(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.Passed'){
                        await modules.democracy.events.handlePassed(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.NotPassed'){
                        await modules.democracy.events.handleNotPassed(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.Cancelled'){
                        await modules.democracy.events.handleCancelled(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.Executed'){
                        await modules.democracy.events.handleExecuted(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.Seconded'){
                        await modules.democracy.events.handleDemocracySeconds(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.PreimageNoted'){
                        await modules.democracy.events.handlePreimageNoted(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.PreimageUsed'){
                        await modules.democracy.events.handlePreimageUsed(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.PreimageInvalid'){
                        await modules.democracy.events.handlePreimageInvalid(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.PreimageMissing'){
                        await modules.democracy.events.handlePreimageMissing(ctx, item, block.header)
                    }
                    if (item.name == 'Democracy.PreimageReaped'){
                        await modules.democracy.events.handlePreimageReaped(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.Proposed'){
                        await modules.treasury.events.handleProposed(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.Awarded'){
                        await modules.treasury.events.handleAwarded(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.Rejected'){
                        await modules.treasury.events.handleRejected(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.SpendApproved'){
                        await modules.treasury.events.handleSpendApproved(ctx, item, block.header)
                    }
                    if (item.name == 'Preimage.Noted'){
                        await modules.preimageV2.events.handlePreimageV2Noted(ctx, item, block.header)
                    }
                    if (item.name == 'Preimage.Cleared'){
                        await modules.preimageV2.events.handlePreimageV2Cleared(ctx, item, block.header)
                    }
                    if (item.name == 'Preimage.Requested'){
                        await modules.preimageV2.events.handlePreimageV2Requested(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.Submitted'){
                        await modules.referendumV2.events.handleSubmitted(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.Approved'){
                        await modules.referendumV2.events.handleApproved(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.Cancelled'){
                        await modules.referendumV2.events.handleCancelled(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.ConfirmAborted'){
                        await modules.referendumV2.events.handleConfirmAborted(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.Confirmed'){
                        await modules.referendumV2.events.handleConfirmed(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.ConfirmStarted'){
                        await modules.referendumV2.events.handleConfirmStarted(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.DecisionDepositPlaced'){
                        await modules.referendumV2.events.handleDecisionDepositPlaced(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.DecisionStarted'){
                        await modules.referendumV2.events.handleDecisionStarted(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.Killed'){
                        await modules.referendumV2.events.handleKilled(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.Rejected'){
                        await modules.referendumV2.events.handleRejected(ctx, item, block.header)
                    }
                    if (item.name == 'Referenda.TimedOut'){
                        await modules.referendumV2.events.handleTimedOut(ctx, item, block.header)
                    }
                    if(item.name == 'Scheduler.Dispatched'){
                        await modules.referendumV2.events.handleReferendumV2Execution(ctx, item, block.header)
                    }
                    if (item.name === "Ethereum.Executed") {
                        const txHash = item?.event?.args?.transactionHash;
                        executedTxns[txHash] = true;
                        // await modules.ethereum.events.handleExecuted(ctx, item, block.header)
                    }
                }
            }
            for (let hash in recievedTxns){
                if(executedTxns[hash]){
                    if(recievedTxns[hash] && recievedTxns[hash][0] && recievedTxns[hash][1]){
                        await modules.ethereum.extrinsics.handlePrecompileTransaction(ctx, recievedTxns[hash][0], recievedTxns[hash][1])
                    }
                }
            }
        }  
    });
