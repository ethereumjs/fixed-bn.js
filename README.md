# SYNOPSIS 
[![NPM Package](https://img.shields.io/npm/v/fixed-bn.js.svg?style=flat-square)](https://www.npmjs.org/package/fixed-bn.js)
[![Build Status](https://img.shields.io/travis/ewasm/fixed-bn.js.svg?branch=master&style=flat-square)](https://travis-ci.org/ewasm/fixed-bn.js)
[![Coverage Status](https://img.shields.io/coveralls/ewasm/fixed-bn.js.svg?style=flat-square)](https://coveralls.io/r/ewasm/fixed-bn.js)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

a bn.js factory wrapper that constrains numbers to a fixed width

# USAGE
```javascript
const FixedBN = require('fixed-bn.js')

// there are some built in sizes `U64`, `U128`, `U160`, `U256`
const bnNum = new FixedBN.U64('0x5555555')
// use normal bn.js methods
bnNum.iaddn(55)

// toBuffer and toArray allways produces a fixed length result
bnNum.toBuffer()
// <Buffer 00 00 00 00 05 55 55 55>

// you can also create an arbitary fixed lenght bn
// max bit lenght is 199 bits and min length is 2 bits
cont I199 = FixedBN(199, 2) 
const newBnNum = new I99(390248)
```

# API
Since this module extends [BN.js](https://github.com/indutny/bn.js/) it has the methods as it does plus a few extras.


## factory

[./index.js:10-66](https://github.com/ewasm/fixedBN/blob/cdbb5a7fb3507ed1328eba122a9da9cbe141c4ae/./index.js#L10-L66 "Source code on GitHub")

A factory that produces BN.js constructors for a given width

**Parameters**

-   `maxWidth` **Integer** the max length in bits that the bn.js instance can handle
-   `minWidth` **Integer** the min length in bits that the bn.js instance can handle

Returns **bn.js** returns a bn.js constuctor that that is constained to `maxWidth` and `minWidth`

## builtin length
the factory has the following builtins
- `FixedBN.U64`
- `FixedBN.U128`
- `FixedBN.U160`
- `FixedBN.U256`

## bn.js instance
Each instance has the following additional methods

## maxWidth

[./index.js:34-36](https://github.com/ewasm/fixedBN/blob/cdbb5a7fb3507ed1328eba122a9da9cbe141c4ae/./index.js#L34-L36 "Source code on GitHub")

retuns Max Width

Returns **integer** 

## minWidth

[./index.js:42-44](https://github.com/ewasm/fixedBN/blob/cdbb5a7fb3507ed1328eba122a9da9cbe141c4ae/./index.js#L42-L44 "Source code on GitHub")

retuns Min Width

Returns **integer** 


# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
