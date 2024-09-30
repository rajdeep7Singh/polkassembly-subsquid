export interface SetIdentityData {
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

export interface AddSubData {
    sub: string | null;
    name: string | null
}

export interface ProvideJudgementData {
    regIndex: number
    target: string | null
    judgement: string
}