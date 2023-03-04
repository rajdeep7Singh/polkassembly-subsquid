import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
// import * as modules from './mappings'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://polkadot-collectives-rpc.polkadot.io',
        archive: lookupArchive('collectives', { release: 'FireSquid' }),
    })
    .setBlockRange({from: 0})
    .addEvent('Democracy.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Tabled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    
processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        for (let item of block.items) {
            // if (item.kind === 'call') {
            //     if (item.name == 'ConvictionVoting.vote'){
            //         await modules.referendumV2.extrinsics.handleConvictionVote(ctx, item, block.header)
            //     }
            // }
            // if (item.kind === 'event'){
            //     if (item.name == 'Democracy.Proposed'){
            //         await modules.democracy.events.handleProposed(ctx, item, block.header)
            //     }
            //     if (item.name == 'Democracy.Tabled'){
            //         await modules.democracy.events.handleTabled(ctx, item, block.header)
            //     }
            //     if (item.name == 'Democracy.Started'){
            //         await modules.democracy.events.handleStarted(ctx, item, block.header)
            //     }
            //     if (item.name == 'Democracy.Passed'){
            //         await modules.democracy.events.handlePassed(ctx, item, block.header)
            //     }
            //     if (item.name == 'Democracy.NotPassed'){
            //         await modules.democracy.events.handleNotPassed(ctx, item, block.header)
            //     }
            // }
        }
    }  
});
