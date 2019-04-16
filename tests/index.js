const tape = require('tape')
const FixedBN = require('../dist')

tape('fix length tests', t => {
  let bn = FixedBN.U256.fromNumber(9879879)
  let array = bn.toArray()
  t.equals(array.length, 32, 'toArray should produce the correct length')

  let maxWidth = bn.maxWidth
  t.equals(maxWidth, 256, 'should have correct lenght')

  let minWidth = bn.minWidth
  t.equals(minWidth, 0, 'should have correct lenght')

  let buffer = bn.toBuffer()
  t.equals(buffer.length, 32, 'toBuffer should produce the correct length')

  let fromBN = FixedBN.U256.fromBuffer(buffer)
  t.true(fromBN.eq(bn))

  let arrayLike = bn.toArrayLike(Buffer)
  t.equals(arrayLike.length, 32, 'toArrayLike should produce the correct length')

  bn = FixedBN.U64.fromNumber(9879879)
  array = bn.toArray()
  t.equals(array.length, 8, 'toArray should produce the correct length')

  buffer = bn.toBuffer()
  t.equals(buffer.length, 8, 'toBuffer should produce the correct length')

  arrayLike = bn.toArrayLike(Buffer)
  t.equals(arrayLike.length, 8, 'toArrayLike should produce the correct length')

  const fromHex = FixedBN.U64.fromString('0x5555555')
  t.equals(fromHex.toString(), '89478485', 'should handle hex strings')

  let threw = false
  try {
    threw = FixedBN.U64.fromString('0x55555555555555555')
  } catch (e) {
    threw = true
  }

  t.ok(threw, 'should throw error whith invalid length')

  threw = false
  try {
    threw = FixedBN.Address.fromString('0x55555555555555555')
  } catch (e) {
    threw = true
  }

  t.ok(threw, 'should throw error whith invalid length')
  t.end()
})
