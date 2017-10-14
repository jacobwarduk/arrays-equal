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

	it('should return true when arrays are strictly equal (object inside array)', () => {
		expect(strictArrayEquals([{1: 'a'}, {2: 'b'}], [{1: 'a'}, {2: 'b'}])).toBe(true);
		expect(strictArrayEquals([{numbers: [1, 3, 5]}, {numbers: [2, 4, 6]}], [{numbers: [1, 3, 5]}, {numbers: [2, 4, 6]}])).toBe(true);
	});

	it('should return false when arrays are not strictly equal (object inside array)', () => {
		expect(strictArrayEquals([{1: 'a'}], [{1: 'b'}])).toBe(false);
		expect(strictArrayEquals([{numbers: [1, 3, 5]}, {numbers: [2, 4, 6]}], [{numbers: [1, 3, 5]}])).toBe(false);
	});

	it('should return true when arrays are strictly equal (object inside object)', () => {
		expect(strictArrayEquals([{1: {id: '1'}}], [{1: {id: '1'}}])).toBe(true);
		expect(strictArrayEquals([{numbers: {1: 1, 2: 2}}], [{numbers: {1: 1, 2: 2}}])).toBe(true);
	});

	it('should return false when arrays are not strictly equal (object inside object)', () => {
		expect(strictArrayEquals([{1: {id: '1'}}], [{1: {id: '2'}}])).toBe(false);
		expect(strictArrayEquals([{numbers: {1: 1, 2: 2}}], [{numbers: {1: 1}}])).toBe(false);
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
