/* global describe expect it */
'use strict';

const strictArrayEquals = require('../index');

describe('strictArrayEquals', () => {
	it('should return true when arrays are strictly equal', () => {
		expect(strictArrayEquals(['a', 23], ['a', 23])).toBe(true);
		expect(strictArrayEquals([true, Function.prototype], [true, Function.prototype])).toBe(true);
	});

	it('should return false when arrays are not strictly equal', () => {
		expect(strictArrayEquals(['a', 23], [23, 'a'])).toBe(false);
		expect(strictArrayEquals(['a', 23], [42])).toBe(false);
	});

	it('should return false when only one array is provided as an argument', () => {
		expect(strictArrayEquals(['a', 23])).toBe(false);
	});

	it('should return false when no arguments are provided', () => {
		expect(strictArrayEquals()).toBe(false);
	});

	it('should return false when either argument is not an array', () => {
		expect(strictArrayEquals(['a', 23], {})).toBe(false);
		expect(strictArrayEquals(['a', 23], () => {})).toBe(false);
		expect(strictArrayEquals(['a', 23], null)).toBe(false);
		expect(strictArrayEquals('a string', ['a', 23])).toBe(false);
		expect(strictArrayEquals(23, ['a', 23])).toBe(false);
		expect(strictArrayEquals(null, null)).toBe(false);
	});
});
