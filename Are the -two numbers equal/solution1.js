  'use strict';

  /**
   *Check a numbers are same or not 
   *
   * @param {number} num1 - the first number of parameter
   * @param {number} num2 -the second number of parameter
   * @returns giving boolean value true or false
   */
  
 
 export function isSameNum(num1, num2) {
	if (num1 === num2){
		return true;
	}else{
		return false;
	}
}
// Example usage:
console.log(isSameNum(5, 5));  // Output: true
console.log(isSameNum(5, 10)); // Output: false
console.log(isSameNum(-5, 5)); // Output: false