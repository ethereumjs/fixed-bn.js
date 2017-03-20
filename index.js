const stripHexPrefix = require('strip-hex-prefix')
const isHexPrefixed = require('is-hex-prefixed')
const BN = require('bn.js')

/**
 * A factory that produces BN.js constructors for a given width
 * @param {Integer} maxWidth the max length in bits that the bn.js instance can handle
 * @param {Integer} minWidth the min length in bits that the bn.js instance can handle
 * @return {bn.js} returns a bn.js constuctor that that is constained to `maxWidth` and `minWidth`
 */
const factory = module.exports = function factory (maxWidth, minWidth = 0) {
  class FixWidth extends BN {
    constructor (value) {
      // bn.js still doesn't support hex prefixes...
      if ((typeof value === 'string') && isHexPrefixed(value)) {
        super(stripHexPrefix(value), 16)
      } else {
        super(value, 10)
      }
      if (this.bitLength() > maxWidth) {
        throw Error(`number must be less then ${maxWidth} bits`)
      }

      if (this.byteLength() < minWidth) {
        throw new Error(`number must be more then ${minWidth} bits`)
      }
      this._maxWidth = maxWidth
      this._minWidth = minWidth
    }

    /**
     * retuns Max Width
     * @returns {integer}
     */
    get maxWidth () {
      return this._maxWidth
    }

    /**
     * retuns Min Width
     * @returns {integer}
     */
    get minWidth () {
      return this._minWidth
    }

    // This assumes Uint8Array in LSB (WASM code)
    toBuffer (endian = 'be') {
      return super.toBuffer(endian, this._maxWidth / 8)
    }

    toArray (endian) {
      return super.toArray(endian, this._maxWidth / 8)
    }

    toArrayLike (type, endian) {
      return super.toArrayLike(type, endian, this._maxWidth / 8)
    }
  }

  // This assumes Uint8Array in LSB (WASM code)
  FixWidth.fromBuffer = (value, endian = 'be') => {
    return new FixWidth(value, 16, endian)
  }

  return FixWidth
}

factory.U256 = factory(256)
factory.U160 = factory(160)
factory.U128 = factory(128)
factory.U64 = factory(64)
factory.Address = factory(160, 160)
