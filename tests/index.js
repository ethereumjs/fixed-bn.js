const tape = require('tape')
const BN = require('bn.js')
const FixedBN = require('../')

tape('fix length tests', t => {
  let bn = new FixedBN.U256(9879879)
  let array = bn.toArray()
  t.equals(array.length, 32, 'toArray should produce the correct length')

  t.ok(FixedBN.U256.isFixBN(bn), 'should detect that bn is a fixed bn')
  t.ok(FixedBN.U256.isSameWidth(bn), 'should detect that bn is the same length')

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

  threw = false
  try {
    threw = new FixedBN.Address('0x55555555555555555')
  } catch (e) {
    threw = true
  }

  t.ok(threw, 'should throw error whith invalid length')
  t.end()
})

tape('toBN', t => {
  const a = new FixedBN.U256(9)
  const b = a.toBN()
  t.equal(typeof b.maxWidth, 'undefined')
  t.end()
})

tape('ops', t => {
  t.test('op should return FixedBN', st => {
    const a = new FixedBN.U256(53)
    const b = new FixedBN.U256(7)
    const c = a.add(b)
    st.equal(c.maxWidth, 256, 'add result should have same width')
    st.end()
  })

  t.test('add should not overflow width', st => {
    const max = new BN(2).pow(new BN(256)).subn(1)
    const a = new FixedBN.U256('0x' + max.toString('hex'))
    const b = new FixedBN.U256(1)
    const c = a.add(b)
    st.equal(c.maxWidth, 256)
    st.deepEqual(c.toString('hex'), new FixedBN.U256(1).toString('hex'))
    st.end()
  })
})
