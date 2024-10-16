import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type RequestStatus = RequestStatus_Requested | RequestStatus_Unrequested

export interface RequestStatus_Requested {
    __kind: 'Requested'
    maybeTicket?: ([AccountId32, HoldConsideration] | undefined)
    count: number
    maybeLen?: (number | undefined)
}

export interface RequestStatus_Unrequested {
    __kind: 'Unrequested'
    ticket: [AccountId32, HoldConsideration]
    len: number
}

export type HoldConsideration = bigint

export type AccountId32 = Bytes

export const RequestStatus: sts.Type<RequestStatus> = sts.closedEnum(() => {
    return  {
        Requested: sts.enumStruct({
            maybeTicket: sts.option(() => sts.tuple(() => [AccountId32, HoldConsideration])),
            count: sts.number(),
            maybeLen: sts.option(() => sts.number()),
        }),
        Unrequested: sts.enumStruct({
            ticket: sts.tuple(() => [AccountId32, HoldConsideration]),
            len: sts.number(),
        }),
    }
})

export const HoldConsideration = sts.bigint()

export const AccountId32 = sts.bytes()

export const H256 = sts.bytes()
