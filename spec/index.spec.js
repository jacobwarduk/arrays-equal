'use strict';

var strictArrayEquals = require('../index');

describe('strictArrayEquals', function() {
  it('should return true when arrays are strictly equal', function() {
    expect(strictArrayEquals(['a', 23], ['a', 23])).toBe(true);
  });

  it('should return false when arrays are not strictly equal', function() {
    expect(strictArrayEquals(['a', 23], [23, 'a'])).toBe(false);
    expect(strictArrayEquals(['a', 23], [42])).toBe(false);
  });
});
