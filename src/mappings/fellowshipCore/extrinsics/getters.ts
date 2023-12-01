
import { UnknownVersionError } from '../../../common/errors'
import {
    submitEvidence,
} from '../../../types/fellowship-core/calls'

import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Call } from '../../../processor'
import { Wish } from '../../../types/v1000000'

interface evidenceSubmissionData {
    wish: string
    evidence: string
}


export function getEvidenceData(ctx: ProcessorContext<Store>, itemEvent: Call): evidenceSubmissionData {
    if (submitEvidence.v1000000.is(itemEvent)) {
        const {wish, evidence} = submitEvidence.v1000000.decode(itemEvent)
        return {
            wish: wish.__kind,
            evidence
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}