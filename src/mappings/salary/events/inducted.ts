import { getMemberInductedIntoPaymasterData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { createMetaActions } from '../../utils/proposals'
import { ActivityType, SalaryCycle } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { getSalaryCycleData } from '../../../storage/salary/status'

export async function handleInducted(ctx: ProcessorContext<Store>, item: Event, header: Block) {
    const { who } = getMemberInductedIntoPaymasterData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    if(!who){
        return;
    }
    
    const salaryCycleStorage = await getSalaryCycleData(ctx, header)
    const salaryCycle = await ctx.store.get(SalaryCycle, {where: {cycleIndex: salaryCycleStorage?.cycleIndex}})
    const getCurrentRank = await header._runtime.getStorage(header.hash, 'FellowshipCollective.Members', who);

    await createMetaActions(ctx, header, extrinsicIndex, {
            who: ss58codec.encode(who),
            activityType: ActivityType.SalaryInduction,
            rank: getCurrentRank?.rank,
            showClaimButton: true
        }, salaryCycle
    )
}