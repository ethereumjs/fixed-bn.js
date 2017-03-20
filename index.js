const ethUtil = require('ethjs-util')
const BN = require('bn.js')

const factory = module.exports = function factory (width) {
  class FixWidth extends BN {
    constructor (value) {
      // bn.js still doesn't support hex prefixes...
      if ((typeof value === 'string') && ethUtil.isHexPrefixed(value)) {
        super(ethUtil.stripHexPrefix(value), 16)
      } else {
        super(value, 10)
      }
      if (this.bitLength() > width) {
        throw Error(`number must be less then ${width} bits`)
      }
      this._width = width
    }

    get width () {
      return this._width
    }

    // This assumes Uint8Array in LSB (WASM code)
    toBuffer (endian = 'be') {
      return super.toBuffer(endian, this._width / 8)
    }

    toArray (endian) {
      return super.toArray(endian, this._width / 8)
    }

    toArrayLike (type, endian) {
      return super.toArrayLike(type, endian, this._width / 8)
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
