import { UnknownVersionError } from '../../../common/errors'
import {  Event } from '../../../processor'
import {
    activeChanged, 
    demoted, 
    evidenceJudged, 
    imported,
    offboarded,
    inducted
} from '../../../types/fellowship-core/events'


interface activeChangedData {
    who: string
    isActive: boolean
}

export function getActiveChangedData(itemEvent: Event): activeChangedData  {
    if (activeChanged.v1000000.is(itemEvent)) {
        const { who, isActive } = activeChanged.v1000000.decode(itemEvent)
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
    if (demoted.v1000000.is(itemEvent)) {
        const { who, toRank } = demoted.v1000000.decode(itemEvent)
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
    if (offboarded.v1000000.is(itemEvent)) {
        const { who } = offboarded.v1000000.decode(itemEvent)
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
    if (inducted.v1000000.is(itemEvent)) {
        const { who } = inducted.v1000000.decode(itemEvent)
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
    if (imported.v1000000.is(itemEvent)) {
        const { who, rank } = imported.v1000000.decode(itemEvent)
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
    if (evidenceJudged.v1000000.is(itemEvent)) {
        const { who, wish, evidence, oldRank, newRank } = evidenceJudged.v1000000.decode(itemEvent)
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

