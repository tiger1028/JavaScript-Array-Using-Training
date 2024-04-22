/* If the given input is a number, you should return the factorial of that number. 
The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
  Example 1:
   Input:  6
   Output: 720

  Example 2:
   Input:  10
   Output: 3628800

  Example 3:
   Input:  8
   Output: 40320

  Example 4:
   Input:  4
   Output: 24
*/

const calculateFactorialFunction = (input) => {
  
  const array = Array.from({ length: input }, (_, index) => index + 1);
  const output = array.reduce((factorial, value) => {
    return factorial * value;
  }, 1)
  return output;
}

const input = 4;
const result = calculateFactorialFunction(input);
console.log(result);

