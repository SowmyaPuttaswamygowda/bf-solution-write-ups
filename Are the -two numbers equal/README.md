# [Comparing of Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)


The isSameNum function is a simple utility function used to compare two numbers and determine if they are equal. It can be used in various scenarios where you need to compare numerical values for equality. Some common use cases for this function include:

Validation: In form validation or input processing, you might need to check if two numeric inputs are the same.

Conditionals: You might use it within conditional statements to execute certain code based on whether two numbers are equal or not.
 ```js

 # Syntax:
  function isSameNum(num1,num2) {
    //function body
  }
 ## Parameters:
 . num1 : The first number to compare.
 . num2 : The second number to compare.
  
  ## Return Value:
 . true :if num1 is equal to num2.
 . false :if num1 is equal to num2.

 ## Test Cases:
 console.log(isSameNum(5, 5));   // Output: true
  console.log(isSameNum(5, 10));  // Output: false
 console.log(isSameNum(-5, 5));  // Output: false
 console.log(isSameNum(0, 0));   // Output: true
 console.log(isSameNum(-3, -3)); // Output: true

 // refactored to use describe/it/expect 

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
```