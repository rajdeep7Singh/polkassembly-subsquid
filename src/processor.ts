import { BlockHeader, DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields, Event as _Event, Call as _Call, Extrinsic as _Extrinsic } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import assert from 'assert'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://rpc.ibp.network/kusama',
        archive: 'https://v2.archive.subsquid.io/network/kusama',
    })
    .setBlockRange({ from: 0})
    .setFields({event: {}, call: { origin: true, success: true, error: true }, extrinsic: { hash: true, fee: true, tip: true }, block: { timestamp: true } })
    .addCall({
        name: [
            'Identity.set_identity',
            'Identity.set_subs',
            'Identity.provide_judgement',
            'Identity.add_sub',
            'Identity.rename_sub',
            'Identity.request_judgement',
            'Identity.cancel_request',
        ]
    })
    .addEvent({
        name: [
            'Identity.IdentityCleared',
            'Identity.IdentityKilled',
            'Identity.SubIdentityRemoved',
            'Identity.SubIdentityRevoked',
        ],
        call: true,
        extrinsic: true
    })

processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        let multisigOrigins = new Map<string, any>()
        for (let item of block.events) {
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
            for (let item of block.calls) {
                if (item.kind === 'call' && 'extrinsic' in item && 'origin' in item.call && item.origin == null) {
                    item.origin = multisigOrigins.get(item.extrinsic.hash)
                }
            }
        }
        for (let item of block.calls) {
            if (item.name == 'Identity.set_identity') {
                await modules.identity.extrinsics.handleSetIdentity(ctx, item, block.header)
            }
            if (item.name == 'Identity.rename_sub') {
                await modules.identity.extrinsics.handleRenameSub(ctx, item, block.header)
            }
            if (item.name == 'Identity.add_sub') {
                await modules.identity.extrinsics.handleAddSub(ctx, item, block.header)
            }
            if (item.name == 'Identity.set_subs') {
                await modules.identity.extrinsics.handleSetSubs(ctx, item, block.header)
            }
            if (item.name == 'Identity.cancel_request') {
                await modules.identity.extrinsics.handleCancelRequest(ctx, item, block.header)
            }
            if (item.name == 'Identity.provide_judgement') {
                await modules.identity.extrinsics.handleProvideJudgement(ctx, item, block.header)
            }
            if (item.name == 'Identity.request_judgement') {
                await modules.identity.extrinsics.handleRequestJudgement(ctx, item, block.header)
            }
        }
        for (let item of block.events) {
            if (item.name == 'Identity.IdentityCleared'){
                await modules.identity.events.handleIdentityCleared(ctx, item, block.header)
            }
            if (item.name == 'Identity.SubRemoved'){
                await modules.identity.events.handleIdentitySubRemoved(ctx, item, block.header)
            }
            if (item.name == 'Identity.SubRevoked'){
                await modules.identity.events.handleIdentitySubRevoked(ctx, item, block.header)
            }
            if (item.name == 'Identity.IdentityKilled'){
                await modules.identity.events.handleIdentityKilled(ctx, item, block.header)
            }
        }
    }
});


export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>