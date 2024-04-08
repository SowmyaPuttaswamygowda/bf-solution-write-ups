 
 # [Remix-1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

 ```js
 function isSameNum(num1, num2) {
    // Check if both arguments are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    // Check if inputs are not NaN
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Both inputs must be valid numbers.');
    }

    // Check if inputs are finite numbers
    if (!isFinite(num1) || !isFinite(num2)) {
        throw new Error('Both inputs must be finite numbers.');
    }
 }
  ```
 ```js
 function isSameNum(num1, num2) {
    let result;
    
    if (num1 === num2) {
        result = true;
    } else if (num1 !== num2) {
        result = false;
    }
    
    return result;
}
```

# Strategy:
. Input Validation: Both functions begin with input validation, ensuring that both num1 and num2 are numbers. If either of them is not a number, the function throws an error.

. Equality Check: After input validation, both functions proceed to check if num1 is equal to num2.

# Implementation:

1.Input Validation: Check if both num1 and num2 are numbers. If either of them is not a number, throw an error.
Equality Check: If both inputs are numbers, proceed to check if they are equal. Return true if they are equal, otherwise return false.


2.Equality Check: Perform the equality check directly using conditional statements. If num1 is equal to num2, set result to true. If not, set result to false.
Return: Return the value of result