# strict-array-equals

Shallow check two arrays for strict equality

**Usage**

```javascript
let strictArrayEquals = require('strict-array-equals');

strictArrayEquals(['a', 23], ['a', 23]);  // true
strictArrayEquals(['a', 23], [23, 'a']);  // false
strictArrayEquals(['a', 23], [42]); // false
```
