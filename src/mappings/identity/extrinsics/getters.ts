import { toHex } from '@subsquid/substrate-processor'
import {  UnknownVersionError } from '../../../common/errors'
import { ss58codec, unwrapData } from '../../../common/tools'
import { 
    setIdentity, 
    setSubs, 
    provideJudgement, 
    addSub, 
    renameSub, 
    requestJudgement, 
    cancelRequest
 } from '../../../types/identity/calls'

interface SetIdentityData {
    display: string | null
    email: string | null
    twitter: string | null
    riot: string | null
    image: string | null
    web: string | null
    pgpFingerprint: string | null
    legal: string | null
    additional: {
        name: string | null
        value: string | null
    }[]
}

export function getSetIdentityData(itemCall: any): SetIdentityData {
    if(setIdentity.v5.is(itemCall)){
        const { info } = setIdentity.v5.decode(itemCall)
        return {
            web: unwrapData(info.web),
            display: unwrapData(info.display),
            legal: unwrapData(info.legal),
            email: unwrapData(info.email),
            image: unwrapData(info.image),
            pgpFingerprint: info.pgpFingerprint ?? null,
            riot: unwrapData(info.riot),
            twitter: unwrapData(info.twitter),
            additional: info.additional.map((a: any) => ({
                name: unwrapData(a[0])!,
                value: unwrapData(a[1]),
            })),
        }
    }
    else{
        throw new UnknownVersionError(itemCall.name)
    }
}

interface SetSubsData {
    subs: {
        id: string
        data: string | null
    }[]
}

export function getSetSubsData(itemCall: any): SetSubsData {
    if(setSubs.v5.is(itemCall)){
        const subs = setSubs.v5.decode(itemCall)
        return { 
            subs: subs.subs.map((item: any) => ({
                id: ss58codec.encode(item[0]),
                data: unwrapData(item[1])
            }))
        }
    }
    else{
        throw new UnknownVersionError(itemCall.name)
    }
}

interface AddSubData {
    sub: string | null
    name: string | null
}

export function getAddSubData(itemCall: any): AddSubData {
    if(addSub.v15.is(itemCall)){
        const sub = addSub.v15.decode(itemCall)
        return { 
            sub: ss58codec.encode(sub.sub),
            name: unwrapData(sub.data)
        }
    }
    else if(addSub.v28.is(itemCall)){
        const sub = addSub.v28.decode(itemCall)
        return { 
            sub: sub.sub.__kind != 'Index' ? ss58codec.encode(sub.sub.value) : null,
            name: unwrapData(sub.data)
        }
    }
    else if(addSub.v9110.is(itemCall)){
        const sub = addSub.v9110.decode(itemCall)
        return { 
            sub: sub.sub.__kind != 'Index' ? ss58codec.encode(sub.sub.value) : null,
            name: unwrapData(sub.data)
        }
    }
    else{
        throw new UnknownVersionError(itemCall.name)
    }
}

interface RenameSubData {
    sub: string | null
    name: string | null
}

export function getRenameSubData(itemCall: any): RenameSubData {
    if(renameSub.v15.is(itemCall)){
        const sub = renameSub.v15.decode(itemCall)
        return { 
            sub: ss58codec.encode(sub.sub),
            name: unwrapData(sub.data)
        }
    }
    else if(renameSub.v28.is(itemCall)){
        const sub = renameSub.v28.decode(itemCall)
        return { 
            sub: sub.sub.__kind != 'Index' ? ss58codec.encode(sub.sub.value) : null,
            name: unwrapData(sub.data)
        }
    }
    else if(renameSub.v9110.is(itemCall)){
        const sub = renameSub.v9110.decode(itemCall)
        return { 
            sub: sub.sub.__kind != 'Index' ? ss58codec.encode(sub.sub.value) : null,
            name: unwrapData(sub.data)
        }
    }
    else{
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getCancelRequestData(itemCall: any): number {
    if(cancelRequest.v5.is(itemCall)){
        const {regIndex} = cancelRequest.v5.decode(itemCall)
        return regIndex
    }
    else{
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getRequestJudgementData(itemCall: any): number {
    if(requestJudgement.v5.is(itemCall)){
        const {regIndex} = requestJudgement.v5.decode(itemCall)
        return regIndex
    }
    else{
        throw new UnknownVersionError(itemCall.name)
    }
}

interface ProvideJudgementData {
    regIndex: number
    target: string | null
    judgement: string
}

export function getProvideJudgementData(itemCall: any): ProvideJudgementData {
    if(provideJudgement.v5.is(itemCall)){
        const {regIndex, target, judgement} = provideJudgement.v5.decode(itemCall)
        return { 
            regIndex: regIndex,
            target: target,
            judgement: judgement.__kind
        }
    }
    else if(provideJudgement.v9110.is(itemCall)){
        const {regIndex, target, judgement} = provideJudgement.v9110.decode(itemCall)
        return { 
            regIndex: regIndex,
            target: target.__kind != 'Index' ? ss58codec.encode(target.value) : null,
            judgement: judgement.__kind
        }
    }
    else if(provideJudgement.v28.is(itemCall)){
        const {regIndex, target, judgement} = provideJudgement.v28.decode(itemCall)
        return { 
            regIndex: regIndex,
            target: target.__kind != 'Index' ? ss58codec.encode(target.value) : null,
            judgement: judgement.__kind
        }
    }
    else if(provideJudgement.v9300.is(itemCall)){
        const {regIndex, target, judgement} = provideJudgement.v9300.decode(itemCall)
        return { 
            regIndex: regIndex,
            target: target.__kind != 'Index' ? ss58codec.encode(target.value) : null,
            judgement: judgement.__kind
        }
    }
    else {
        throw new UnknownVersionError(itemCall.name)
    }
}