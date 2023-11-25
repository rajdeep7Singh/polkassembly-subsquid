import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://westend-collectives-rpc.polkadot.io',
        archive: 'https://westend-collectives.archive.subsquid.io/graphql',
    })
    .setBlockRange({from: 0})
    .addEvent('AllianceMotion.Disapproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('AllianceMotion.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('AllianceMotion.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('AllianceMotion.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('AllianceMotion.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('AllianceMotion.Closed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Alliance.Announced', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Alliance.AnnouncementRemoved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Alliance.UnscrupulousItemAdded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Alliance.UnscrupulousItemRemoved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    
    .addEvent('Preimage.Noted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Cleared', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Requested', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('FellowshipReferenda.Submitted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Killed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.TimedOut', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.DecisionDepositPlaced', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.DecisionStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Confirmed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.ConfirmStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.ConfirmAborted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.MetadataSet', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.MetadataCleared', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipCollective.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Scheduler.Dispatched', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    
processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        for (let item of block.items) {
            if (item.kind === 'event'){
                if (item.name == 'AllianceMotion.Proposed'){
                    await modules.allianceMotion.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'AllianceMotion.Voted'){
                    await modules.allianceMotion.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'AllianceMotion.Closed'){
                    await modules.allianceMotion.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'AllianceMotion.Executed'){
                    await modules.allianceMotion.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'AllianceMotion.DisApproved'){
                    await modules.allianceMotion.events.handleDisApproved(ctx, item, block.header)
                }
                if (item.name == 'AllianceMotion.Approved'){
                    await modules.allianceMotion.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'Alliance.Announced'){
                    await modules.alliance.events.handleAnnounced(ctx, item, block.header)
                }
                if (item.name == 'Alliance.AnnouncementRemoved'){
                    await modules.alliance.events.handleAnnouncementRemoved(ctx, item, block.header)
                }
                if (item.name == 'Alliance.UnscrupulousItemAdded'){
                    await modules.alliance.events.handleUnscrupulousItemAdded(ctx, item, block.header)
                }
                if (item.name == 'Alliance.UnscrupulousItemRemoved'){
                    await modules.alliance.events.handleUnscrupulousItemRemoved(ctx, item, block.header)
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
                if (item.name == 'FellowshipReferenda.Submitted'){
                    await modules.fellowshipReferendum.events.handleSubmitted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Approved'){
                    await modules.fellowshipReferendum.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Cancelled'){
                    await modules.fellowshipReferendum.events.handleCancelled(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.ConfirmAborted'){
                    await modules.fellowshipReferendum.events.handleConfirmAborted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Confirmed'){
                    await modules.fellowshipReferendum.events.handleConfirmed(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.ConfirmStarted'){
                    await modules.fellowshipReferendum.events.handleConfirmStarted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.DecisionDepositPlaced'){
                    await modules.fellowshipReferendum.events.handleDecisionDepositPlaced(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.DecisionStarted'){
                    await modules.fellowshipReferendum.events.handleDecisionStarted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Killed'){
                    await modules.fellowshipReferendum.events.handleKilled(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Rejected'){
                    await modules.fellowshipReferendum.events.handleRejected(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.TimedOut'){
                    await modules.fellowshipReferendum.events.handleTimedOut(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.MetadataSet'){
                    await modules.fellowshipReferendum.events.handleMetadataSet(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.MetadataCleared'){
                    await modules.fellowshipReferendum.events.handleMetadataCleared(ctx, item, block.header)
                }
                if (item.name == 'FellowshipCollective.Voted'){
                    await modules.fellowshipReferendum.events.handleFellowshipVotes(ctx, item, block.header)
                }
                if(item.name == 'Scheduler.Dispatched'){
                    await modules.fellowshipReferendum.events.handleFellowshipExecution(ctx, item, block.header)
                }
            }
        }
    }  
});
