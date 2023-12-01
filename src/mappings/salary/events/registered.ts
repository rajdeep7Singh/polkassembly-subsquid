import { getMemberRegisteredIntoSalaryCycleData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { createMetaActions } from '../../utils/proposals'
import { Activity, ActivityType, SalaryCycle } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { getSalaryCycleData } from '../../../storage/salary/status'

export async function handleRegistered(ctx: ProcessorContext<Store>, item: Event, header: Block) {
    const { who, amount } = getMemberRegisteredIntoSalaryCycleData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    if(!who){
        return;
    }

    const salaryCycleStorage = await getSalaryCycleData(ctx, header)
    const salaryCycle = await ctx.store.get(SalaryCycle, {where: {cycleIndex: salaryCycleStorage?.cycleIndex}})
    const getCurrentRank = await header._runtime.getStorage(header.hash, 'FellowshipCollective.Members', who);

    const getInductionActivity = await ctx.store.get(Activity, {where: {who, salaryCycle: {cycleIndex: salaryCycle?.cycleIndex}, type: ActivityType.SalaryInduction},
            relations: {
            otherActions: true
        }
    })
    if(getInductionActivity && getInductionActivity?.otherActions){
        getInductionActivity.otherActions.showClaimButton = false
        await ctx.store.save(getInductionActivity)
    }

    await createMetaActions(ctx, header, extrinsicIndex, {
            who: ss58codec.encode(who),
            amount,
            activityType: ActivityType.Registration,
            showClaimButton: true,
            rank: getCurrentRank?.rank
        }, salaryCycle
    )
}