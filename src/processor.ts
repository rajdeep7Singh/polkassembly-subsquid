import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import assert from 'assert'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://rpc.parallel.fi',
        archive: 'https://parallel.archive.subsquid.io/graphql',
    })
    .setBlockRange({from: 0 })
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

    .addEvent('GeneralCouncil.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('GeneralCouncil.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('GeneralCouncil.Disapproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('GeneralCouncil.Closed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('GeneralCouncil.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('GeneralCouncil.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('TechnicalCommittee.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Disapproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Closed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Treasury.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.Awarded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.SpendApproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)


    .addEvent('Preimage.Noted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Cleared', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Requested', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Multisig.MultisigExecuted', { data: {  event: { args: true, extrinsic: { hash: true, } }, } } as const)

    // .addEvent('Scheduler.Scheduled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Scheduler.Dispatched', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)


    .addCall('Democracy.vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.remove_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.remove_other_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.delegate', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.undelegate', { data: { call: { origin: true, args: true, }, } } as const)

processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        let multisigOrigins = new Map<string, any>()
        for (let item of block.items) {
            let multisigAddress: string
            if (item.name == 'Multisig.MultisigExecuted') {
                if (Array.isArray(item.event.args)) {
                    assert(item.event.args.length >= 3)
                    multisigAddress = item.event.args[2]
                } else if (typeof item.event.args === 'object') {
                    assert('multisig' in item.event.args)
                    multisigAddress = item.event.args.multisig
                } else {
                    throw new Error('Unextpected case')
                }

                let extrinsicHash = item.event.extrinsic!.hash
                multisigOrigins.set(extrinsicHash, {
                    __kind: 'system',
                    value: {
                        __kind: 'Signed',
                        value: multisigAddress,
                    },
                })
            }
        }
        if (multisigOrigins.size > 0) {
            for (let item of block.items) {
                if (item.kind === 'call' && 'extrinsic' in item && 'origin' in item.call && item.call.origin == null) {
                    item.call.origin = multisigOrigins.get(item.extrinsic.hash)
                }
            }
        }
        for (let item of block.items) {
            if (item.kind === 'call') {
                if (item.name == 'Democracy.vote') {
                    await modules.democracy.extrinsics.handleVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.remove_vote') {
                    await modules.democracy.extrinsics.handleRemoveVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.remove_other_vote') {
                    await modules.democracy.extrinsics.handleRemoveOtherVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.delegate') {
                    await modules.democracy.extrinsics.handleDelegate(ctx, item, block.header)
                }
                if (item.name == 'Democracy.undelegate') {
                    await modules.democracy.extrinsics.handleUndelegate(ctx, item, block.header)
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
                if (item.name == 'GeneralCouncil.Proposed'){
                    await modules.council.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'GeneralCouncil.Voted'){
                    await modules.council.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'GeneralCouncil.Closed'){
                    await modules.council.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'GeneralCouncil.Disapproved'){
                    await modules.council.events.handleDisapproved(ctx, item, block.header)
                }
                if (item.name == 'GeneralCouncil.Executed'){
                    await modules.council.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'GeneralCouncil.Approved'){
                    await modules.council.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Proposed'){
                    await modules.techComittee.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Approved'){
                    await modules.techComittee.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Disapproved'){
                    await modules.techComittee.events.handleDisapproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Closed'){
                    await modules.techComittee.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Voted'){
                    await modules.techComittee.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Executed'){
                    await modules.techComittee.events.handleExecuted(ctx, item, block.header)
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
                // if(item.name == 'Scheduler.Scheduled'){
                //     await modules.fellowshipReferendum.events.   (ctx, item, block.header)
                //     await modules.referendumV2.events.handleReferendumV2ExecutionSchedule(ctx, item, block.header)
                // }
            }
        }
    }
});
