// import { ProposalStatus } from '../../../model'
// import { updatePreimageStatus } from '../../utils/proposals'
// import { getPreimageUsedData } from './getters'
// import { Store } from '@subsquid/typeorm-store'
// import { ProcessorContext, Event } from '../../../processor'

// export async function handlePreimageUsed(ctx: ProcessorContext<Store>,
//     item: Event,
//     header: any) {
//     const { hash } = getPreimageUsedData(item)
//     const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

//     await updatePreimageStatus(ctx, header, hash, extrinsicIndex, {
//         status: ProposalStatus.Used,
//     })
// }
