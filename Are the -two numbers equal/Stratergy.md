[Camparing numbers](https://edabit.com/challenge/QSnaSH5S3oxZkwcNc)

``` js
function isSameNum(num1, num2) {
	if (num1 === num2){
		return true;
	}else{
		return false;
	}
}
```

## Strategy

1.Compare num1 and num2 using the strict equality operator (===).
2.if they are equal, return true.
3.If they are not equal, return false.

## Implementation

This implementation follows the provided code strategy of using a simple if-else statement to compare the two numbers and returning true or false based on their equality.

## Possible Refactors

This strategy could also be implemented with these Implementation ...

1 .Using a Direct Return:
This refactor simplifies the function by directly returning the result of the comparison between num1 and num2, which is a boolean value indicating whether they are equal or not.

2.Ternary Operator:
The ternary operator is a compact way of expressing conditional statements. This refactor uses a ternary operator to return true if num1 is equal to num2, and false otherwise.

3.Implicit Return:
In JavaScript, functions with a single expression can be written in a more concise form using implicit return. This refactor directly returns the result of the comparison operation, as it already results in a boolean value.

4.Using Loose Equality:
This refactor uses loose equality (==) instead of strict equality (===). While this may work for certain cases, it's generally recommended to use strict equality to avoid unexpected behavior.

## References

   [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) 