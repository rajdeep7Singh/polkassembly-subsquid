import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus, enrichChildBountyWithStorageData } from '../../utils/proposals'
import { getChildBountyAwardedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleAwarded(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { parentIndex, childIndex, beneficiary } = getChildBountyAwardedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    // Try to enrich with storage data if not already available
    await enrichChildBountyWithStorageData(ctx, header, parentIndex, childIndex, extrinsicIndex)

    await updateProposalStatus(ctx, header, childIndex, ProposalType.ChildBounty, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
        },
    })
}