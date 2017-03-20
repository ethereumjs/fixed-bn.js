const tape = require('tape')
const FixedBN = require('../')

tape('fix length tests', t => {
  let bn = new FixedBN.U256(9879879)
  let array = bn.toArray()
  t.equals(array.length, 32, 'toArray should produce the correct length')

  let width = bn.width
  t.equals(width, 256, 'should have correct lenght')

  let buffer = bn.toBuffer()
  t.equals(buffer.length, 32, 'toBuffer should produce the correct length')

  let fromBN = FixedBN.U256.fromBuffer(buffer)
  t.true(fromBN.eq(bn))

  let arrayLike = bn.toArrayLike(Buffer)
  t.equals(arrayLike.length, 32, 'toArrayLike should produce the correct length')

  bn = new FixedBN.U64(9879879)
  array = bn.toArray()
  t.equals(array.length, 8, 'toArray should produce the correct length')

  buffer = bn.toBuffer()
  t.equals(buffer.length, 8, 'toBuffer should produce the correct length')

  arrayLike = bn.toArrayLike(Buffer)
  t.equals(arrayLike.length, 8, 'toArrayLike should produce the correct length')

  const fromHex = new FixedBN.U64('0x5555555')
  t.equals(fromHex.toString(), '89478485', 'should handle hex strings')

  let threw = false
  try {
    threw = new FixedBN.U64('0x55555555555555555')
  } catch (e) {
    threw = true
  }

  t.ok(threw, 'should throw error whith invalid length')

  t.end()
})
