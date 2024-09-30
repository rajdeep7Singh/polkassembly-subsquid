import { Event } from '../../../processor'
import { ss58codec } from '../../../common/tools'
import { identityCleared, identityKilled, subIdentityRemoved, subIdentityRevoked } from '../../../types/identity/events'
import {UnknownVersionError} from '../../../common/errors';

export function getIdentityClearedData(item: Event) {
    if (identityCleared.v5.is(item)) {
        const [who, deposit] = identityCleared.v5.decode(item)
        return { who: ss58codec.encode(who), deposit }
    }else if (identityCleared.v9140.is(item)) {
        const { who, deposit } = identityCleared.v9140.decode(item)
        return { who: ss58codec.encode(who), deposit }
    } else {
        throw new UnknownVersionError(item.name)
    }
}

export function getIdentityKilledData(item: Event) {
    if (identityKilled.v5.is(item)) {
        const [who, deposit] = identityKilled.v5.decode(item)
        return { who: ss58codec.encode(who), deposit }
    } else if (identityKilled.v9140.is(item)) {
        const { who, deposit } = identityKilled.v9140.decode(item)
        return { who: ss58codec.encode(who), deposit }
    } else {
        throw new UnknownVersionError(item.name)
    }
}

export function getIdentitySubRemovedData(item: Event) {
    if (subIdentityRemoved.v15.is(item)) {
        const [who, deposit] = subIdentityRemoved.v15.decode(item)
        return { who: ss58codec.encode(who), deposit }
    } else if (subIdentityRemoved.v9140.is(item)) {
        const { sub, main, deposit } = subIdentityRemoved.v9140.decode(item)
        return { main: ss58codec.encode(main), who: ss58codec.encode(sub), deposit }
    } else {
        throw new UnknownVersionError(item.name)
    }
}

export function getIdentitySubRevokedData(item: Event) {
    if (subIdentityRevoked.v15.is(item)) {
        const [who, deposit] = subIdentityRevoked.v15.decode(item)
        return { who: ss58codec.encode(who), deposit }
    } else if (subIdentityRevoked.v9140.is(item)) {
        const { sub, main, deposit } = subIdentityRevoked.v9140.decode(item)
        return { main: ss58codec.encode(main), who: ss58codec.encode(sub), deposit }
    } else {
        throw new UnknownVersionError(item.name)
    }
}
