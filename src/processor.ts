import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://ws-rpc.myriad.social',
        archive: lookupArchive('myriad', { release: 'FireSquid' }),
    })
    .setBlockRange({from: 0})
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

    .addEvent('Council.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Disapproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Closed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('TechnicalCommittee.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Disapproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Closed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)


    // .addEvent('Preimage.Noted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Preimage.Cleared', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Preimage.Requested', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    // .addEvent('Referenda.Submitted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.Killed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.TimedOut', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.DecisionDepositPlaced', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.DecisionStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.Confirmed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.ConfirmStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.ConfirmAborted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Referenda.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    // .addEvent('FellowshipReferenda.Submitted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.Killed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.TimedOut', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.DecisionDepositPlaced', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.DecisionStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.Confirmed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.ConfirmStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.ConfirmAborted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipReferenda.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('FellowshipCollective.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    // .addEvent('Scheduler.Scheduled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    // .addEvent('Scheduler.Dispatched', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    
    // .addCall('ConvictionVoting.vote', { data: { call: { origin: true, args: true, }, } } as const)
    // .addCall('ConvictionVoting.delegate', { data: { call: { origin: true, args: true, }, } } as const)
    // .addCall('ConvictionVoting.undelegate', { data: { call: { origin: true, args: true, }, } } as const)
    // .addCall('ConvictionVoting.remove_vote', { data: { call: { origin: true, args: true, }, } } as const)
    // .addCall('ConvictionVoting.remove_other_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.delegate', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.undelegate', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.remove_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.remove_other_vote', { data: { call: { origin: true, args: true, }, } } as const)

processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        for (let item of block.items) {
            if (item.kind === 'call') {
                // if (item.name == 'ConvictionVoting.vote'){
                //     await modules.referendumV2.extrinsics.handleConvictionVote(ctx, item, block.header)
                // }
                // if (item.name == 'ConvictionVoting.delegate'){
                //     await modules.referendumV2.extrinsics.handleDelegate(ctx, item, block.header)
                // }
                // if (item.name == 'ConvictionVoting.undelegate'){
                //     await modules.referendumV2.extrinsics.handleUndelegate(ctx, item, block.header)
                // }
                // if (item.name == 'ConvictionVoting.remove_vote'){
                //     await modules.referendumV2.extrinsics.handleRemoveVote(ctx, item, block.header)
                // }
                // if (item.name == 'ConvictionVoting.remove_other_vote'){
                //     await modules.referendumV2.extrinsics.handleRemoveOtherVote(ctx, item, block.header)
                // }
                if (item.name == 'Democracy.vote'){
                    await modules.democracy.extrinsics.handleVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.delegate'){
                    await modules.democracy.extrinsics.handleDelegate(ctx, item, block.header)
                }
                if (item.name == 'Democracy.undelegate'){
                    await modules.democracy.extrinsics.handleUndelegate(ctx, item, block.header)
                }
                if (item.name == 'Democracy.remove_vote'){
                    await modules.democracy.extrinsics.handleRemoveVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.remove_other_vote'){
                    await modules.democracy.extrinsics.handleRemoveOtherVote(ctx, item, block.header)
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
                if (item.name == 'Council.Proposed'){
                    await modules.council.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Council.Voted'){
                    await modules.council.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'Council.Closed'){
                    await modules.council.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'Council.Disapproved'){
                    await modules.council.events.handleDisapproved(ctx, item, block.header)
                }
                if (item.name == 'Council.Executed'){
                    await modules.council.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'Council.Approved'){
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
                if (item.name == 'Preimage.Noted'){
                    await modules.preimageV2.events.handlePreimageV2Noted(ctx, item, block.header)
                }
                if (item.name == 'Preimage.Cleared'){
                    await modules.preimageV2.events.handlePreimageV2Cleared(ctx, item, block.header)
                }
                if (item.name == 'Preimage.Requested'){
                    await modules.preimageV2.events.handlePreimageV2Requested(ctx, item, block.header)
                }
                // if (item.name == 'Referenda.Submitted'){
                //     await modules.referendumV2.events.handleSubmitted(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.Approved'){
                //     await modules.referendumV2.events.handleApproved(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.Cancelled'){
                //     await modules.referendumV2.events.handleCancelled(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.ConfirmAborted'){
                //     await modules.referendumV2.events.handleConfirmAborted(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.Confirmed'){
                //     await modules.referendumV2.events.handleConfirmed(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.ConfirmStarted'){
                //     await modules.referendumV2.events.handleConfirmStarted(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.DecisionDepositPlaced'){
                //     await modules.referendumV2.events.handleDecisionDepositPlaced(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.DecisionStarted'){
                //     await modules.referendumV2.events.handleDecisionStarted(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.Killed'){
                //     await modules.referendumV2.events.handleKilled(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.Rejected'){
                //     await modules.referendumV2.events.handleRejected(ctx, item, block.header)
                // }
                // if (item.name == 'Referenda.TimedOut'){
                //     await modules.referendumV2.events.handleTimedOut(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.Submitted'){
                //     await modules.fellowshipReferendum.events.handleSubmitted(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.Approved'){
                //     await modules.fellowshipReferendum.events.handleApproved(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.Cancelled'){
                //     await modules.fellowshipReferendum.events.handleCancelled(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.ConfirmAborted'){
                //     await modules.fellowshipReferendum.events.handleConfirmAborted(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.Confirmed'){
                //     await modules.fellowshipReferendum.events.handleConfirmed(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.ConfirmStarted'){
                //     await modules.fellowshipReferendum.events.handleConfirmStarted(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.DecisionDepositPlaced'){
                //     await modules.fellowshipReferendum.events.handleDecisionDepositPlaced(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.DecisionStarted'){
                //     await modules.fellowshipReferendum.events.handleDecisionStarted(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.Killed'){
                //     await modules.fellowshipReferendum.events.handleKilled(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.Rejected'){
                //     await modules.fellowshipReferendum.events.handleRejected(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipReferenda.TimedOut'){
                //     await modules.fellowshipReferendum.events.handleTimedOut(ctx, item, block.header)
                // }
                // if (item.name == 'FellowshipCollective.Voted'){
                //     await modules.fellowshipReferendum.events.handleFellowshipVotes(ctx, item, block.header)
                // }
                // if(item.name == 'Scheduler.Scheduled'){
                //     await modules.fellowshipReferendum.events.   (ctx, item, block.header)
                //     await modules.referendumV2.events.handleReferendumV2ExecutionSchedule(ctx, item, block.header)
                // }
                // if(item.name == 'Scheduler.Dispatched'){
                //     await modules.fellowshipReferendum.events.handleFellowshipExecution(ctx, item, block.header)
                //     await modules.referendumV2.events.handleReferendumV2Execution(ctx, item, block.header)
                // }
            }
        }
    }  
});
