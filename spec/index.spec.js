'use strict';

var strictArrayEquals = require('../index');

describe('strictArrayEquals', function() {
  it('should return true when arrays are strictly equal', function() {
    expect(strictArrayEquals(['a', 23], ['a', 23])).toBe(true)
    expect(strictArrayEquals([true, Function.prototype], [true, Function.prototype])).toBe(true);
  });

  it('should return false when arrays are not strictly equal', function() {
    expect(strictArrayEquals(['a', 23], [23, 'a'])).toBe(false);
    expect(strictArrayEquals(['a', 23], [42])).toBe(false);
  });

  it('should return false when only one array is provided as an argument', function() {
    expect(strictArrayEquals(['a', 23])).toBe(false);
  });

  it('should return false when no arguments are provided', function() {
    expect(strictArrayEquals()).toBe(false);
  });

  it('should return false when either argument is not an array', function() {
    expect(strictArrayEquals(['a', 23], {})).toBe(false);
    expect(strictArrayEquals(['a', 23], function() {})).toBe(false);
    expect(strictArrayEquals(['a', 23], null)).toBe(false);
    expect(strictArrayEquals('a string', ['a', 23])).toBe(false);
    expect(strictArrayEquals(23, ['a', 23])).toBe(false);
    expect(strictArrayEquals(null, null)).toBe(false);
  });
});
