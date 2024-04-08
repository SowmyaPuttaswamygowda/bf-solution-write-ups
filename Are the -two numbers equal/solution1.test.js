'use strict';

import {isSameNum} from './solution1.js';
// Describe block to group your tests
describe('isSameNum function', function() {
    // Test case 1
    it('should return true if two numbers are equal', function() {
        // Assertion using 'expect'
        expect(isSameNum(5, 5)).toEqual(true);
    });
    // Test case 2
    it('should return false if two numbers are not equal', function() {
        // Assertion using 'expect'
        expect(isSameNum(5, 10)).toEqual(false);
    });
});