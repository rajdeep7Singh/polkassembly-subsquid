import assert from "assert"
import * as marshal from "./marshal"

export class FellowshipParams {
    private _activeSalary!: (bigint | undefined | null)[] | undefined | null
    private _passiveSalary!: (bigint | undefined | null)[] | undefined | null
    private _demotionPeriod!: (number | undefined | null)[] | undefined | null
    private _minPromotionPeriod!: (number | undefined | null)[] | undefined | null
    private _offboardTimeout!: number | undefined | null

    constructor(props?: Partial<Omit<FellowshipParams, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._activeSalary = json.activeSalary == null ? undefined : marshal.fromList(json.activeSalary, val => val == null ? undefined : marshal.bigint.fromJSON(val))
            this._passiveSalary = json.passiveSalary == null ? undefined : marshal.fromList(json.passiveSalary, val => val == null ? undefined : marshal.bigint.fromJSON(val))
            this._demotionPeriod = json.demotionPeriod == null ? undefined : marshal.fromList(json.demotionPeriod, val => val == null ? undefined : marshal.int.fromJSON(val))
            this._minPromotionPeriod = json.minPromotionPeriod == null ? undefined : marshal.fromList(json.minPromotionPeriod, val => val == null ? undefined : marshal.int.fromJSON(val))
            this._offboardTimeout = json.offboardTimeout == null ? undefined : marshal.int.fromJSON(json.offboardTimeout)
        }
    }

    get activeSalary(): (bigint | undefined | null)[] | undefined | null {
        return this._activeSalary
    }

    set activeSalary(value: (bigint | undefined | null)[] | undefined | null) {
        this._activeSalary = value
    }

    get passiveSalary(): (bigint | undefined | null)[] | undefined | null {
        return this._passiveSalary
    }

    set passiveSalary(value: (bigint | undefined | null)[] | undefined | null) {
        this._passiveSalary = value
    }

    get demotionPeriod(): (number | undefined | null)[] | undefined | null {
        return this._demotionPeriod
    }

    set demotionPeriod(value: (number | undefined | null)[] | undefined | null) {
        this._demotionPeriod = value
    }

    get minPromotionPeriod(): (number | undefined | null)[] | undefined | null {
        return this._minPromotionPeriod
    }

    set minPromotionPeriod(value: (number | undefined | null)[] | undefined | null) {
        this._minPromotionPeriod = value
    }

    get offboardTimeout(): number | undefined | null {
        return this._offboardTimeout
    }

    set offboardTimeout(value: number | undefined | null) {
        this._offboardTimeout = value
    }

    toJSON(): object {
        return {
            activeSalary: this.activeSalary == null ? undefined : this.activeSalary.map((val: any) => val == null ? undefined : marshal.bigint.toJSON(val)),
            passiveSalary: this.passiveSalary == null ? undefined : this.passiveSalary.map((val: any) => val == null ? undefined : marshal.bigint.toJSON(val)),
            demotionPeriod: this.demotionPeriod,
            minPromotionPeriod: this.minPromotionPeriod,
            offboardTimeout: this.offboardTimeout,
        }
    }
}
