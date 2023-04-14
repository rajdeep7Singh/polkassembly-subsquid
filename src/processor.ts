import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://polkadot-collectives-rpc.polkadot.io',
        archive: 'https://collectives.archive.subsquid.io/graphql',
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
            }
        }
    }  
});
