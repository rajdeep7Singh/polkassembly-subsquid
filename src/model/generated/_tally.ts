import assert from "assert"
import * as marshal from "./marshal"

export class Tally {
  private _ayes!: bigint | undefined | null
  private _nays!: bigint | undefined | null
  private _support!: bigint | undefined | null

  constructor(props?: Partial<Omit<Tally, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._ayes = json.ayes == null ? undefined : marshal.bigint.fromJSON(json.ayes)
      this._nays = json.nays == null ? undefined : marshal.bigint.fromJSON(json.nays)
      this._support = json.support == null ? undefined : marshal.bigint.fromJSON(json.support)
    }
  }

  get ayes(): bigint | undefined | null {
    return this._ayes
  }

  set ayes(value: bigint | undefined | null) {
    this._ayes = value
  }

  get nays(): bigint | undefined | null {
    return this._nays
  }

  set nays(value: bigint | undefined | null) {
    this._nays = value
  }

  get support(): bigint | undefined | null {
    return this._support
  }

  set support(value: bigint | undefined | null) {
    this._support = value
  }

  toJSON(): object {
    return {
      ayes: this.ayes == null ? undefined : marshal.bigint.toJSON(this.ayes),
      nays: this.nays == null ? undefined : marshal.bigint.toJSON(this.nays),
      support: this.support == null ? undefined : marshal.bigint.toJSON(this.support),
    }
  }
}
