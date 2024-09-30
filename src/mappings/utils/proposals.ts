import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '../../common/tools'

import {
    Identity,
    IdentitySub,
    Judgement,
    Account,
    IdentityAdditionalField,
    JudgementRequest,
    JudgementRequestStatus,
} from '../../model'
import {AddSubData, ProvideJudgementData, SetIdentityData} from '../types/data';
import { randomUUID } from 'crypto'
import { ProcessorContext } from '../../processor'

export async function clearIdentity(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, who: string) {
    const identity = await ctx.store.get(Identity, {
        where: {
            id: who,
        },
        relations: {
            subs: true,
        }
    })

    if(identity) {
        clearIdentityFields(identity)
        setCommonFields(identity, header, extrinsicIndex)
        removeSubs(identity, header, extrinsicIndex)

        await ctx.store.save(identity)
    }
}

export async function killIdentity(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, who: string) {
    const identity = await ctx.store.get(Identity, {
        where: {
            id: who,
        },
        relations: {
            subs: true,
        }
    })

    if(identity) {
        clearIdentityFields(identity)
        identity.isKilled = true
        setCommonFields(identity, header, extrinsicIndex)
        removeSubs(identity, header, extrinsicIndex)
        await ctx.store.save(identity)
    }
}

export async function removeSub(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, who: string) {
    const sub = await ctx.store.get(IdentitySub, {
        where: {
            id: who,
        },
    })
    if(sub) {
        sub.name = null
        sub.super = null
        setCommonFields(sub, header, extrinsicIndex)
        await ctx.store.save(sub)
    }
}

function removeSubs(identity: Identity, header: any, extrinsicIndex: string) {
    if (identity.subs && identity.subs.length > 0) {
        identity.subs.forEach(sub => {
            sub.name = null
            sub.super = null
            setCommonFields(sub, header, extrinsicIndex)
        })
    }
}

async function upsertAccount(ctx: ProcessorContext<Store>, header: any, origin: string) {
    let account = await ctx.store.get(Account, {
        where: {
            id: origin
        }
    })
    if(!account){
        account = new Account({
            id: origin,
            publicKey: ss58codec.decode(origin),
        })
        await ctx.store.insert(account)
    }
    return account
}

export async function setIdentity(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, origin: string, identityData: SetIdentityData) {
    const account = await upsertAccount(ctx, header, origin)
    let identity = await ctx.store.get(Identity, {
        where: {
            id: origin,
            account: {
                id: account.id,
            },
        },
        relations: {
            account: true,
        }
    })
    const addtional  = identityData.additional ? identityData.additional.map((a: any) => new IdentityAdditionalField(a)) : null
    if ('additional' in identityData) {
        delete (identityData as any).additional;
    }
    if (identity) {
        Object.assign(identity, identityData)
        identity.isKilled = false
        identity.additional = addtional
    } else {
        identity = new Identity({
            id: origin,
            account,
            ...identityData,
            isKilled: false,
            additional: addtional,
        })
    }
    identity.judgement = Judgement.Unknown
    setCommonFields(identity, header, extrinsicIndex)
    account.identity = identity
    await ctx.store.save(account)
    await ctx.store.upsert(identity)
}
async function upsertSubs(
    ctx: ProcessorContext<Store>, 
    header: any, 
    origin: string, 
    subs: Array<{sub: string | null, name: string | null}>, 
    isSetSubs: boolean
) {
    const identity = await ctx.store.get(Identity, {
        where: {
            id: origin,
        },
        relations: {
            subs: true,
        }
    })
    if (!identity) return

    const newSubs: IdentitySub[] = []

    for (const subData of subs) {
        if (!subData.sub) continue

        const account = await upsertAccount(ctx, header, subData.sub)
        
        let sub = identity.subs?.find(s => s.id === subData.sub)
        
        if (sub) {
            // Update existing sub
            sub.name = subData.name
        } else {
            // Create new sub
            sub = new IdentitySub({
                id: subData.sub,
                name: subData.name,
                super: identity,
                account: account,
            })
            newSubs.push(sub)
        }        
    }

    if (isSetSubs) {
        if (identity.subs) {
            identity.subs = identity.subs.filter(existingSub => 
                subs.some(newSub => newSub.sub === existingSub.id)
            )
        }
    }

    // Add new subs
    identity.subs = [...(identity.subs || []), ...newSubs]

    await ctx.store.save(identity)
}

export async function addSub(ctx: ProcessorContext<Store>, header: any, origin: string, data: AddSubData) {
    if(!data.sub) return
    await upsertSubs(ctx, header, origin, [data], false)
}

export async function setSubs(ctx: ProcessorContext<Store>, header: any, origin: string, data: any) {
    if (!data.subs) return
    await upsertSubs(ctx, header, origin, data.subs, true)
}

export async function renameSub(ctx: ProcessorContext<Store>, header: any, origin: string, data: AddSubData) {
    if(!data.sub) return
    const sub = await ctx.store.get(IdentitySub, {
        where: {
            id: data.sub,
        }
    })
    if(sub) {
        sub.name = data.name
        await ctx.store.save(sub)
    }
}

export async function cancelRequest(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, origin: string, data: number) {
    const identity = await ctx.store.get(Identity, {
        where: {
            id: origin,
        }
    })
    if(!identity) return
    const request = await ctx.store.get(JudgementRequest, {
        where: {
            registrarIndex: data,
            identity: {
                id: identity.id,
            },
        }
    })
    if(request) {
        setCommonFields(request, header, extrinsicIndex)
        request.status = JudgementRequestStatus.Cancelled
        await ctx.store.save(request)
    }
}

export async function requestJudgement(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, origin: string, data: number) {
    const identity = await ctx.store.get(Identity, {
        where: {
            id: origin,
        }
    })
    if(!identity) return
    const request = new JudgementRequest({
        id: randomUUID(),
        identity,
        registrarIndex: data,
        status: JudgementRequestStatus.Requested,
    })
    setCommonFields(request, header, extrinsicIndex)
    await ctx.store.insert(request)
}

export async function provideJudgement(ctx: ProcessorContext<Store>, header: any, extrinsicIndex: string, origin: string, data: ProvideJudgementData) {
    if(!data.target) return
    const identity = await ctx.store.get(Identity, {
        where: {
            id: data.target,
        }
    })
    if(!identity) return
    const request = await ctx.store.get(JudgementRequest, {
        where: {
            registrarIndex: data.regIndex,
            identity: {
                id: identity.id,
            },
            status: JudgementRequestStatus.Requested,
        }
    })
    if(request) {
        setCommonFields(request, header, extrinsicIndex)
        request.status = JudgementRequestStatus.Provided
        identity.judgement = data.judgement as Judgement
        await ctx.store.save(request)
        await ctx.store.save(identity)
    }
}

function setCommonFields(obj: any, header: any, extrinsicIndex: string) {
    const timestamp = new Date(header.timestamp)
    const blockHeight = header.height

    obj.updatedAt = timestamp
    obj.updatedAtBlock = blockHeight
    obj.createdAt = timestamp
    obj.createdAtBlock = blockHeight
    obj.extrinsicIndex = extrinsicIndex
}

function clearIdentityFields(identity: Identity) {
    identity.display = null
    identity.email = null
    identity.twitter = null
    identity.riot = null
    identity.image = null
    identity.web = null
    identity.pgpFingerprint = null
    identity.legal = null
    identity.additional = null
    identity.judgement = Judgement.Unknown
}