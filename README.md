# strict-array-equals

[![npm](https://img.shields.io/npm/dt/strict-array-equals.svg)](https://www.npmjs.com/package/strict-array-equals) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)  [![Build Status](https://travis-ci.org/jacobwarduk/strict-array-equals.svg?branch=master)](https://travis-ci.org/jacobwarduk/strict-array-equals) [![codecov](https://codecov.io/gh/jacobwarduk/strict-array-equals/branch/master/graph/badge.svg)](https://codecov.io/gh/jacobwarduk/strict-array-equals)

Shallow check two arrays for strict equality

**Installation**

```
npm install --save strict-array-equals
```


**Usage**

```javascript
const strictArrayEquals = require('strict-array-equals');

strictArrayEquals(['a', 23], ['a', 23]);  // true
strictArrayEquals(['a', 23], [23, 'a']);  // false
strictArrayEquals(['a', 23], [42]); // false
```
