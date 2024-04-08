import { lookupArchive } from '@subsquid/archive-registry'
import { BlockHeader, DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields, Event as _Event, Call as _Call, Extrinsic as _Extrinsic } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import assert from 'assert'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://kusama.rpc.robonomics.network/',
        archive: 'https://v2.archive.subsquid.io/network/robonomics',
    })
    .setBlockRange({ from: 0})
    .setFields({event: {}, call: { origin: true, success: true, error: true }, extrinsic: { hash: true, fee: true, tip: true }, block: { timestamp: true } })
    .addCall({
        name: [ 'ConvictionVoting.vote', 'ConvictionVoting.delegate', 'ConvictionVoting.undelegate', 'ConvictionVoting.remove_vote', 'ConvictionVoting.remove_other_vote', 'Democracy.vote',
        'Democracy.remove_vote', 'Democracy.remove_other_vote', 'Democracy.delegate', 'Democracy.undelegate', 'Treasury.accept_curator', 'Treasury.unassign_curator', 'Bounties.accept_curator',
        'Bounties.unassign_curator', 'Bounties.propose_curator', 'ChildBounties.propose_curator', 'ChildBounties.accept_curator', 'ChildBounties.unassign_curator', 'Tips.tip', 'Treasury.tip'
    ]
    })
    .addEvent({
        name: [ 'Referenda.Submitted', 'Referenda.DecisionDepositPlaced', 'Referenda.Rejected', 'Referenda.MetadataSet', 'Referenda.MetadataCleared',  'Referenda.TimedOut', 'Referenda.Approved', 'Referenda.DecisionStarted', 'Referenda.ConfirmStarted', 
        'Referenda.ConfirmAborted', 'Referenda.Killed', 'Referenda.Confirmed', 'Preimage.Requested', 'Preimage.Noted', 'Preimage.Cleared', 'Preimage.Cleared', 'Referenda.ConfirmStarted', 
        'Referenda.Cancelled', 'Democracy.Proposed', 'Democracy.Tabled', 'Democracy.Started', 'Democracy.Passed', 'Democracy.NotPassed', 'Democracy.Cancelled', 'Democracy.Executed', 
        'Democracy.PreimageNoted', 'Democracy.PreimageUsed', 'Democracy.PreimageInvalid', 'Democracy.PreimageMissing', 'Democracy.PreimageReaped', 'DemocracySeconded', 'Treasury.Proposed', 
        'Treasury.Awarded', 'Treasury.Rejected', 'Treasury.SpendApproved', 'Scheduler.Dispatched', 'Council.Proposed', 'Council.Approved', 'Council.Disapproved', 'Council.Closed', 'Council.Voted',
        'Council.Executed', 'TechnicalCommittee.Proposed', 'TechnicalCommittee.Approved', 'TechnicalCommittee.Disapproved', 'TechnicalCommittee.Closed', 'TechnicalCommittee.Voted', 'TechnicalCommittee.Executed',
        'Treasury.NewTip', 'Treasury.TipClosed', 'Treasury.TipRetracted', 'Treasury.BountyProposed', 'Treasury.BountyRejected', 'Treasury.BountyBecameActive', 'Treasury.BountyAwarded', 'Treasury.BountyClaimed',
        'Treasury.BountyCanceled', 'Treasury.BountyExtended', 'Tips.NewTip', 'Tips.TipClosed', 'Tips.TipRetracted', 'Tips.TipSlashed', 'Bounties.BountyProposed', 'Bounties.BountyRejected', 'Bounties.BountyBecameActive',
        'Bounties.BountyAwarded', 'Bounties.BountyClaimed', 'Bounties.BountyCanceled', 'Bounties.BountyExtended', 'ChildBounties.Added', 'ChildBounties.Awarded', 'ChildBounties.Claimed', 'ChildBounties.Canceled'
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
        for (let item of block.events) {
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
        }
    }
});


export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>