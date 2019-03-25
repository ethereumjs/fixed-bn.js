const assert = require('assert')
const stripHexPrefix = require('strip-hex-prefix')
const isHexPrefixed = require('is-hex-prefixed')
import BN = require('bn.js')

export type Endianness = 'le' | 'be'

export class FixedWidthBN {
  _width: number
  _bn: BN
  _modulus: BN

  constructor(width: number, value: number = 0) {
    assert(width >= 1, 'Invalid width')
    assert(width % 8 === 0, 'Width should be divisible by 8')
    this._width = width
    this._bn = new BN(value)
    // 2 ** width
    // Used for taking modulo, e.g. after addMod, mulMod
    this._modulus = new BN(2).pow(new BN(this._width))
  }

  static fromBN(width: number, value: BN): FixedWidthBN {
    assert(BN.isBN(value), 'Value should be BN')
    assert(value.bitLength() <= width, 'Value exceeds width')
    assert(!value.isNeg(), 'Value should be positive')

    const n = new FixedWidthBN(width, 0)
    n._width = width
    n._bn = value

    return n
  }

  static fromString(width: number, value: string, base: number = 16): FixedWidthBN {
    assert(typeof value === 'string')
    if (isHexPrefixed(value)) {
      value = stripHexPrefix(value)
    }

    const bn = new BN(value, base)
    return FixedWidthBN.fromBN(width, bn)
  }

  static fromBuffer(width: number, value: Buffer, endian: Endianness = 'be'): FixedWidthBN {
    assert(Buffer.isBuffer(value))
    const bn = new BN(value, 10, endian)
    return FixedWidthBN.fromBN(width, bn)
  }

  get width(): number {
    return this._width
  }

  get modulus(): BN {
    return this._modulus
  }

  toBN(): BN {
    return this._bn
  }

  toBuffer(endian: Endianness = 'be'): Buffer {
    return this._bn.toBuffer(endian, this._width / 8)
  }

  toArray(endian: Endianness = 'be'): number[] {
    return this._bn.toArray(endian, this._width / 8)
  }

  toNumber(): number {
    assert(this._bn.bitLength() <= 53)
    return this._bn.toNumber()
  }

  toString(base: number = 16): string {
    // BN.toString accepts length as number of chars in output string
    // which is 2 for each byte, and hence: 2 * (bits / 8)
    return this._bn.toString(base, this._width / 4)
  }

  clone(): FixedWidthBN {
    const bn = this._bn.clone()
    return FixedWidthBN.fromBN(this._width, bn)
  }

  bitLength(): number {
    return this._bn.bitLength()
  }

  hasSameWidth(b: FixedWidthBN): boolean {
    return this._width === b._width
  }

  isEven(): boolean {
    return this._bn.isEven()
  }

  isOdd(): boolean {
    return this._bn.isOdd()
  }

  isZero(): boolean {
    return this._bn.isZero()
  }

  cmp(b: FixedWidthBN): number {
    assert(this.hasSameWidth(b))
    return this._bn.cmp(b._bn)
  }

  lt(b: FixedWidthBN): boolean {
    assert(this.hasSameWidth(b))
    return this._bn.lt(b._bn)
  }

  lte(b: FixedWidthBN): boolean {
    assert(this.hasSameWidth(b))
    return this._bn.lte(b._bn)
  }

  gt(b: FixedWidthBN): boolean {
    assert(this.hasSameWidth(b))
    return this._bn.gt(b._bn)
  }

  gte(b: FixedWidthBN): boolean {
    assert(this.hasSameWidth(b))
    return this._bn.gte(b._bn)
  }

  eq(b: FixedWidthBN): boolean {
    assert(this.hasSameWidth(b))
    return this._bn.eq(b._bn)
  }

  add(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.add(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  addMod(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.add(b._bn).mod(this.modulus)
    return FixedWidthBN.fromBN(this._width, c)
  }

  sub(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.sub(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  subMod(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.sub(b._bn).umod(this.modulus)
    return FixedWidthBN.fromBN(this._width, c)
  }

  mul(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.mul(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  mulMod(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.mul(b._bn).mod(this.modulus)
    return FixedWidthBN.fromBN(this._width, c)
  }

  sqr(): FixedWidthBN {
    const c = this._bn.sqr()
    return FixedWidthBN.fromBN(this._width, c)
  }

  sqrMod(): FixedWidthBN {
    const c = this._bn.sqr().mod(this.modulus)
    return FixedWidthBN.fromBN(this._width, c)
  }

  pow(b: FixedWidthBN): FixedWidthBN {
    const c = this._bn.pow(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  powMod(b: FixedWidthBN): FixedWidthBN {
    const c = this._bn.pow(b._bn).mod(this.modulus)
    return FixedWidthBN.fromBN(this._width, c)
  }

  div(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.div(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  divMod(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.div(b._bn).mod(this.modulus)
    return FixedWidthBN.fromBN(this._width, c)
  }

  or(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.or(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  and(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.and(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  xor(b: FixedWidthBN): FixedWidthBN {
    assert(this.hasSameWidth(b))
    const c = this._bn.xor(b._bn)
    return FixedWidthBN.fromBN(this._width, c)
  }

  shln(b: number): FixedWidthBN {
    const c = this._bn.shln(b)
    return FixedWidthBN.fromBN(this._width, c)
  }

  shrn(b: number): FixedWidthBN {
    const c = this._bn.shrn(b)
    return FixedWidthBN.fromBN(this._width, c)
  }
}
