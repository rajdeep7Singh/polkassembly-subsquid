// import { toHex } from '@subsquid/substrate-processor'
// import { EventHandlerContext } from '../../types/contexts'
// import { ProposalStatus, ProposalType } from '../../../model'
// import { updatePreimageStatus } from '../../utils/proposals'
// import { getPreimageUsedData } from './getters'

// export async function handlePreimageUsed(ctx: EventHandlerContext) {
//     const { hash } = getPreimageUsedData(ctx)

//     const hexHash = toHex(hash)

//     await updatePreimageStatus(ctx, hexHash, {
//         status: ProposalStatus.Used,
//     })
// }
