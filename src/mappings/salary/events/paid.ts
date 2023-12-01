import { getMemberPayoutData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { createSalaryPayouts } from '../../utils/proposals'
import { Activity, ActivityType, SalaryCycle } from '../../../model'
import { getSalaryCycleData } from '../../../storage/salary/status'
import { ss58codec } from '../../../common/tools'
import { In } from 'typeorm'

export async function handlePaid(ctx: ProcessorContext<Store>, item: Event, header: Block) {
    const { who, beneficiary, amount, id } = getMemberPayoutData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    if(!who){
        return;
    }
    const salaryCycleStorage = await getSalaryCycleData(ctx, header)
    const salaryCycle = await ctx.store.get(SalaryCycle, {where: {cycleIndex: salaryCycleStorage?.cycleIndex}})

    const getCurrentRank = await header._runtime.getStorage(header.hash, 'FellowshipCollective.Members', who);

    const getInductionActivity = await ctx.store.find(Activity, {where: {who, salaryCycle: { cycleIndex: salaryCycle?.cycleIndex }, type: In([ActivityType.SalaryInduction, ActivityType.Registration])},
            relations: {
            otherActions: true
        }
    })
    if(getInductionActivity && getInductionActivity?.length > 0){
        for(let i = 0; i < getInductionActivity.length; i++){
            const meta = getInductionActivity[i]?.otherActions
            if(meta){
                meta.showClaimButton = false
            }
        }
        await ctx.store.save(getInductionActivity)
    }

    await createSalaryPayouts(ctx, header, extrinsicIndex, {
        who: ss58codec.encode(who),
        amount,
        beneficiary,
        salaryCycle,
        rank: getCurrentRank?.rank,
        id
    })
}