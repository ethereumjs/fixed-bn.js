[fixed-bn.js](../README.md) > [FixedWidthBN](../classes/fixedwidthbn.md)

# Class: FixedWidthBN

A [BN](https://github.com/indutny/bn.js) wrapper that limits numbers to a fixed width. The width should be a factor of 8, and the number is limited to be only unsigned currently.

## Hierarchy

**FixedWidthBN**

## Index

### Constructors

* [constructor](fixedwidthbn.md#constructor)

### Properties

* [_bn](fixedwidthbn.md#_bn)
* [_modulus](fixedwidthbn.md#_modulus)
* [_width](fixedwidthbn.md#_width)

### Accessors

* [modulus](fixedwidthbn.md#modulus)
* [width](fixedwidthbn.md#width)

### Methods

* [add](fixedwidthbn.md#add)
* [addMod](fixedwidthbn.md#addmod)
* [and](fixedwidthbn.md#and)
* [bitLength](fixedwidthbn.md#bitlength)
* [clone](fixedwidthbn.md#clone)
* [cmp](fixedwidthbn.md#cmp)
* [div](fixedwidthbn.md#div)
* [eq](fixedwidthbn.md#eq)
* [gt](fixedwidthbn.md#gt)
* [gte](fixedwidthbn.md#gte)
* [hasSameWidth](fixedwidthbn.md#hassamewidth)
* [isEven](fixedwidthbn.md#iseven)
* [isOdd](fixedwidthbn.md#isodd)
* [isZero](fixedwidthbn.md#iszero)
* [lt](fixedwidthbn.md#lt)
* [lte](fixedwidthbn.md#lte)
* [mul](fixedwidthbn.md#mul)
* [mulMod](fixedwidthbn.md#mulmod)
* [or](fixedwidthbn.md#or)
* [pow](fixedwidthbn.md#pow)
* [powMod](fixedwidthbn.md#powmod)
* [shln](fixedwidthbn.md#shln)
* [shrn](fixedwidthbn.md#shrn)
* [sqr](fixedwidthbn.md#sqr)
* [sqrMod](fixedwidthbn.md#sqrmod)
* [sub](fixedwidthbn.md#sub)
* [subMod](fixedwidthbn.md#submod)
* [toArray](fixedwidthbn.md#toarray)
* [toBN](fixedwidthbn.md#tobn)
* [toBuffer](fixedwidthbn.md#tobuffer)
* [toNumber](fixedwidthbn.md#tonumber)
* [toString](fixedwidthbn.md#tostring)
* [xor](fixedwidthbn.md#xor)
* [fromBN](fixedwidthbn.md#frombn)
* [fromBuffer](fixedwidthbn.md#frombuffer)
* [fromString](fixedwidthbn.md#fromstring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FixedWidthBN**(width: *`number`*, value?: *`number`*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:16](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L16)*

Instantiate a FixedWidthBN given width and a number value.

*__throws__*: if width < 1

*__throws__*: if width % 8 !== 0

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| width | `number` | - |  Width of number in number of bits |
| `Default value` value | `number` | 0 |  Value |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___

## Properties

<a id="_bn"></a>

###  _bn

**● _bn**: *`BN`*

*Defined in [fixed-width.ts:15](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L15)*

___
<a id="_modulus"></a>

###  _modulus

**● _modulus**: *`BN`*

*Defined in [fixed-width.ts:16](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L16)*

___
<a id="_width"></a>

###  _width

**● _width**: *`number`*

*Defined in [fixed-width.ts:14](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L14)*

___

## Accessors

<a id="modulus"></a>

###  modulus

**get modulus**(): `BN`

*Defined in [fixed-width.ts:96](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L96)*

**Returns:** `BN`

___
<a id="width"></a>

###  width

**get width**(): `number`

*Defined in [fixed-width.ts:92](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L92)*

Width of number in number of bits. Note that this doesn't necessarily equate the current bit length of the number.

**Returns:** `number`

___

## Methods

<a id="add"></a>

###  add

▸ **add**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:251](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L251)*

Returns a new FixedWidthBN computed from adding value with `b`.

*__throws__*: if `b` has a different width

*__throws__*: if add overflows the width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="addmod"></a>

###  addMod

▸ **addMod**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:263](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L263)*

Returns a new FixedWidthBN computed from adding value with `b`. It wraps the result on overflow.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="and"></a>

###  and

▸ **and**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:384](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L384)*

Returns a new FixedWidthBN computed from applying a bitwise and.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="bitlength"></a>

###  bitLength

▸ **bitLength**(): `number`

*Defined in [fixed-width.ts:153](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L153)*

Returns bit length of value.

**Returns:** `number`

___
<a id="clone"></a>

###  clone

▸ **clone**(): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:145](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L145)*

Clones value.

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="cmp"></a>

###  cmp

▸ **cmp**(b: *[FixedWidthBN](fixedwidthbn.md)*): `number`

*Defined in [fixed-width.ts:190](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L190)*

Compares numbers and returns -1 (a < b), 0 (a == b) or 1 (a > b).

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Value to be compared against |

**Returns:** `number`

___
<a id="div"></a>

###  div

▸ **div**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:362](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L362)*

Returns a new FixedWidthBN computed from dividing value by `b`.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Divisor |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="eq"></a>

###  eq

▸ **eq**(b: *[FixedWidthBN](fixedwidthbn.md)*): `boolean`

*Defined in [fixed-width.ts:240](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L240)*

Returns true if value is equal to `b`.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Value to be compared against |

**Returns:** `boolean`

___
<a id="gt"></a>

###  gt

▸ **gt**(b: *[FixedWidthBN](fixedwidthbn.md)*): `boolean`

*Defined in [fixed-width.ts:220](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L220)*

Returns true if value is greated than `b`.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Value to be compared against |

**Returns:** `boolean`

___
<a id="gte"></a>

###  gte

▸ **gte**(b: *[FixedWidthBN](fixedwidthbn.md)*): `boolean`

*Defined in [fixed-width.ts:230](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L230)*

Returns true if value is greated than or equal to `b`.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Value to be compared against |

**Returns:** `boolean`

___
<a id="hassamewidth"></a>

###  hasSameWidth

▸ **hasSameWidth**(b: *[FixedWidthBN](fixedwidthbn.md)*): `boolean`

*Defined in [fixed-width.ts:160](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L160)*

Returns true if `b` has same width (not bit length) as value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |

**Returns:** `boolean`

___
<a id="iseven"></a>

###  isEven

▸ **isEven**(): `boolean`

*Defined in [fixed-width.ts:167](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L167)*

Returns true if number is even.

**Returns:** `boolean`

___
<a id="isodd"></a>

###  isOdd

▸ **isOdd**(): `boolean`

*Defined in [fixed-width.ts:174](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L174)*

Returns true if number is odd.

**Returns:** `boolean`

___
<a id="iszero"></a>

###  isZero

▸ **isZero**(): `boolean`

*Defined in [fixed-width.ts:181](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L181)*

Returns true if number is zero.

**Returns:** `boolean`

___
<a id="lt"></a>

###  lt

▸ **lt**(b: *[FixedWidthBN](fixedwidthbn.md)*): `boolean`

*Defined in [fixed-width.ts:200](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L200)*

Returns true if value is less than `b`.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Value to be compared against |

**Returns:** `boolean`

___
<a id="lte"></a>

###  lte

▸ **lte**(b: *[FixedWidthBN](fixedwidthbn.md)*): `boolean`

*Defined in [fixed-width.ts:210](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L210)*

Returns true if value is less than or equal to `b`.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Value to be compared against |

**Returns:** `boolean`

___
<a id="mul"></a>

###  mul

▸ **mul**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:299](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L299)*

Returns a new FixedWidthBN computed from multiplying value with `b`.

*__throws__*: if `b` has a different width

*__throws__*: if mul overflows

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="mulmod"></a>

###  mulMod

▸ **mulMod**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:311](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L311)*

Returns a new FixedWidthBN computed from multiplying value with `b`. It wraps the result on overflow.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="or"></a>

###  or

▸ **or**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:373](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L373)*

Returns a new FixedWidthBN computed from applying a bitwise or.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="pow"></a>

###  pow

▸ **pow**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:341](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L341)*

Returns a new FixedWidthBN computed from raising value to power of `b`.

*__throws__*: if `b` has a different width

*__throws__*: if pow overflows

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Exponent |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="powmod"></a>

###  powMod

▸ **powMod**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:352](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L352)*

Returns a new FixedWidthBN computed from raising value to power of `b`. It wraps the result on overflow.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Exponent |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="shln"></a>

###  shln

▸ **shln**(b: *`number`*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:406](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L406)*

Returns a new FixedWidthBN computed from shifting value to left by a number of bits.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | `number` |  Number of bits to shift |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="shrn"></a>

###  shrn

▸ **shrn**(b: *`number`*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:416](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L416)*

Returns a new FixedWidthBN computed from shifting value to right by a number of bits.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | `number` |  Number of bits to shift |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="sqr"></a>

###  sqr

▸ **sqr**(): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:321](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L321)*

Returns a new FixedWidthBN computed from multiplying value with itself (square of value).

*__throws__*: if sqr overflows

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="sqrmod"></a>

###  sqrMod

▸ **sqrMod**(): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:330](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L330)*

Returns a new FixedWidthBN computed from multiplying value with itself (square of value). It wraps the result on overflow.

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="sub"></a>

###  sub

▸ **sub**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:275](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L275)*

Returns a new FixedWidthBN computed from subtracting value from `b`.

*__throws__*: if `b` has a different width

*__throws__*: if sub underflows

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="submod"></a>

###  subMod

▸ **subMod**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:287](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L287)*

Returns a new FixedWidthBN computed from subtracting value from `b`. It wraps the result on underflow, e.g. if width is 8, `2 - 3 == 255`.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(endian?: *[Endianness](../#endianness)*): `number`[]

*Defined in [fixed-width.ts:119](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L119)*

Returns number as an array.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` endian | [Endianness](../#endianness) | &quot;be&quot; |  Endianness |

**Returns:** `number`[]

___
<a id="tobn"></a>

###  toBN

▸ **toBN**(): `BN`

*Defined in [fixed-width.ts:103](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L103)*

Returns a normal BN from the FixedWidthBN.

**Returns:** `BN`

___
<a id="tobuffer"></a>

###  toBuffer

▸ **toBuffer**(endian?: *[Endianness](../#endianness)*): `Buffer`

*Defined in [fixed-width.ts:111](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L111)*

Returns number as a Buffer.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` endian | [Endianness](../#endianness) | &quot;be&quot; |  Endianness |

**Returns:** `Buffer`

___
<a id="tonumber"></a>

###  toNumber

▸ **toNumber**(): `number`

*Defined in [fixed-width.ts:127](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L127)*

Returns value as a Javascript number (limited to 53 bits).

*__throws__*: if bit length of value is larger than 53

**Returns:** `number`

___
<a id="tostring"></a>

###  toString

▸ **toString**(base?: *`number`*): `string`

*Defined in [fixed-width.ts:136](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L136)*

Returns value encoded as a string (without `0x` prefix for base 16).

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` base | `number` | 16 |  Base for encoding (e.g. 16 for hex) |

**Returns:** `string`

___
<a id="xor"></a>

###  xor

▸ **xor**(b: *[FixedWidthBN](fixedwidthbn.md)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:395](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L395)*

Returns a new FixedWidthBN computed from applying a bitwise xor.

*__throws__*: if `b` has a different width

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| b | [FixedWidthBN](fixedwidthbn.md) |  Second operand |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="frombn"></a>

### `<Static>` fromBN

▸ **fromBN**(width: *`number`*, value: *`BN`*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:43](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L43)*

Instantiates from a BN object.

*__throws__*: if value is not a BN

*__throws__*: if BN value is larger than the given width

*__throws__*: if value is negative

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| width | `number` |  Width in number of bits |
| value | `BN` |  Value |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="frombuffer"></a>

### `<Static>` fromBuffer

▸ **fromBuffer**(width: *`number`*, value: *`Buffer`*, endian?: *[Endianness](../#endianness)*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:82](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L82)*

Instantiates from a buffer.

*__throws__*: if vlaue is not a buffer

*__throws__*: if value is larger than given width

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| width | `number` | - |  Width in number of bits |
| value | `Buffer` | - |  Value |
| `Default value` endian | [Endianness](../#endianness) | &quot;be&quot; |  Endianness of number |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___
<a id="fromstring"></a>

### `<Static>` fromString

▸ **fromString**(width: *`number`*, value: *`string`*, base?: *`number`*): [FixedWidthBN](fixedwidthbn.md)

*Defined in [fixed-width.ts:64](https://github.com/ewasm/fixed-bn.js/blob/master/src/fixed-width.ts#L64)*

Instantiates from a string. It strips `0x` from beginning of strings.

*__throws__*: if value is not a string

*__throws__*: if value is larger than the given width

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| width | `number` | - |  Width in number of bits |
| value | `string` | - |  Encoded value |
| `Default value` base | `number` | 16 |  Base in which number is encoded |

**Returns:** [FixedWidthBN](fixedwidthbn.md)

___

