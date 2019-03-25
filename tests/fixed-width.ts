import * as tape from 'tape'
import BN = require('bn.js')
import { FixedWidthBN } from '../src'

tape('Constructor', (t: tape.Test) => {
  t.test('should instantiate from number', (st: tape.Test) => {
    const n = new FixedWidthBN(256, 5)
    st.equal(n.width, 256)
    st.equal(n.toNumber(), 5)
    st.end()
  })

  t.test('should not construct with invalid width', (st: tape.Test) => {
    st.throws(() => new FixedWidthBN(255, 5))
    st.end()
  })
})

tape('Comparison', (t: tape.Test) => {
  t.test('should compare two same width BNs', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 21)
    const b = new FixedWidthBN(64, 20)
    st.equal(a.lt(b), false)
    st.equal(a.lte(b), false)
    st.equal(a.gt(b), true)
    st.equal(a.gte(b), true)
    st.equal(a.eq(b), false)
    st.end()
  })

  t.test('should throw on comparing BNs with varying width', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 21)
    const b = new FixedWidthBN(56, 20)
    st.throws(() => a.lt(b))
    st.throws(() => a.lte(b))
    st.throws(() => a.gt(b))
    st.throws(() => a.gte(b))
    st.throws(() => a.eq(b))
    st.end()
  })
})

tape('Add', (t: tape.Test) => {
  t.test('should add two same width numbers', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 101)
    const b = new FixedWidthBN(64, 73)
    const c = a.add(b)
    st.equal(c.width, 64)
    st.equal(c.toNumber(), 174)
    // Ensure a and b haven't changed
    st.equal(a.toNumber(), 101)
    st.equal(b.toNumber(), 73)
    st.end()
  })

  t.test('should throw when add overflows', (st: tape.Test) => {
    const a = FixedWidthBN.fromString(64, 'fffffffffffffffe')
    const b = new FixedWidthBN(64, 2)
    st.throws(() => a.add(b))
    st.end()
  })

  t.test('should wrap when addMod overflows', (st: tape.Test) => {
    const a = FixedWidthBN.fromString(64, 'fffffffffffffffe')
    const b = new FixedWidthBN(64, 3)
    const c = a.addMod(b)
    st.equal(c.width, 64)
    st.equal(c.toNumber(), 1)
    st.end()
  })
})

tape('Sub', (t: tape.Test) => {
  t.test('should sub two same width numbers', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 101)
    const b = new FixedWidthBN(64, 73)
    const c = a.sub(b)
    st.equal(c.width, 64)
    st.equal(c.toNumber(), 101 - 73)
    // Ensure a and b haven't changed
    st.equal(a.toNumber(), 101)
    st.equal(b.toNumber(), 73)
    st.end()
  })

  t.test('should throw sub underflows', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 2)
    const b = new FixedWidthBN(64, 3)
    st.throws(() => a.sub(b))
    st.end()
  })

  t.test('should wrap when subMod underflows', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 2)
    const b = new FixedWidthBN(64, 3)
    const c = a.subMod(b)
    st.equal(c.width, 64)
    st.equal(c.toString(), 'ffffffffffffffff')
    st.end()
  })
})

tape('Mul', (t: tape.Test) => {
  t.test('should mul two same width numbers', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 101)
    const b = new FixedWidthBN(64, 73)
    const c = a.mul(b)
    st.equal(c.width, 64)
    st.equal(c.toNumber(), 7373)
    // Ensure a and b haven't changed
    st.equal(a.toNumber(), 101)
    st.equal(b.toNumber(), 73)
    st.end()
  })

  t.test('should throw when mul overflows', (st: tape.Test) => {
    const a = FixedWidthBN.fromString(64, '8000000000000008')
    const b = new FixedWidthBN(64, 2)
    st.throws(() => a.mul(b))
    st.end()
  })

  t.test('should wrap when addMod overflows', (st: tape.Test) => {
    const a = FixedWidthBN.fromString(64, '8000000000000008')
    const b = new FixedWidthBN(64, 2)
    const c = a.mulMod(b)
    st.equal(c.width, 64)
    st.equal(c.toString(), '0000000000000010')
    st.end()
  })
})

tape('Sqr', (t: tape.Test) => {
  t.test('should sqr number', (st: tape.Test) => {
    const a = new FixedWidthBN(64, 8)
    const c = a.sqr()
    st.equal(c.width, 64)
    st.equal(c.toNumber(), 64)
    st.equal(a.toNumber(), 8)
    st.end()
  })

  t.test('should throw when sqr overflows', (st: tape.Test) => {
    const a = FixedWidthBN.fromString(64, '100000000') // 2 ** 32
    st.throws(() => a.sqr())
    st.end()
  })

  t.test('should wrap when sqrMod overflows', (st: tape.Test) => {
    const a = FixedWidthBN.fromString(64, '100000000')
    const c = a.sqrMod()
    st.equal(c.width, 64)
    st.true(c.isZero())
    st.end()
  })
})
