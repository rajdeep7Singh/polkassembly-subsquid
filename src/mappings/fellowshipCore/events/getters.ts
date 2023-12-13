import { UnknownVersionError } from '../../../common/errors'
import {  Event } from '../../../processor'
import {
    activeChanged, 
    demoted, 
    evidenceJudged, 
    imported,
    offboarded,
    inducted,
    paramsChanged
} from '../../../types/fellowship-core/events'
import { ParamsType } from '../../../types/collectivesV1000000'
interface activeChangedData {
    who: string
    isActive: boolean
}

export function getActiveChangedData(itemEvent: Event): activeChangedData  {
    if (activeChanged.collectivesV1000000.is(itemEvent)) {
        const { who, isActive } = activeChanged.collectivesV1000000.decode(itemEvent)
        return {
            who,
            isActive
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface demotedData {
    who: string
    toRank: number
}

export function getDemotedData(itemEvent: Event): demotedData  {
    if (demoted.collectivesV1000000.is(itemEvent)) {
        const { who, toRank } = demoted.collectivesV1000000.decode(itemEvent)
        return {
            who,
            toRank
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface offboardedData {
    who: string
}

export function getOffboardedData(itemEvent: Event): offboardedData  {
    if (offboarded.collectivesV1000000.is(itemEvent)) {
        const { who } = offboarded.collectivesV1000000.decode(itemEvent)
        return {
            who
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface offboardedData {
    who: string
}

export function getInductedData(itemEvent: Event): offboardedData  {
    if (inducted.collectivesV1000000.is(itemEvent)) {
        const { who } = inducted.collectivesV1000000.decode(itemEvent)
        return {
            who
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface importedData {
    who: string
    rank: number
}

export function getImportedData(itemEvent: Event): importedData  {
    if (imported.collectivesV1000000.is(itemEvent)) {
        const { who, rank } = imported.collectivesV1000000.decode(itemEvent)
        return {
            who,
            rank
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface evidenceJudgedData {
    who: string
    wish: string
    evidence: string
    oldRank: number
    newRank: number | undefined
}

export function getEvidenceJudgedData(itemEvent: Event): evidenceJudgedData  {
    if (evidenceJudged.collectivesV1000000.is(itemEvent)) {
        const { who, wish, evidence, oldRank, newRank } = evidenceJudged.collectivesV1000000.decode(itemEvent)
        return {
            who,
            wish: wish.__kind,
            evidence,
            oldRank,
            newRank
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getParamsChangedData(itemEvent: Event): ParamsType  {
    if (paramsChanged.collectivesV1000000.is(itemEvent)) { 
        const {params } = paramsChanged.collectivesV1000000.decode(itemEvent)
        return params

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
