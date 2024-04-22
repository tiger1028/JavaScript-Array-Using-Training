/* If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
  Example 1:
   Input:  [1, -4, 12, 0, -3, 29, -150]
   Output: 42

  Example 2:
   Input:  [-5, -4, -1, 0, -3, -29, -150]
   Output: 0

  Example 3:
   Input:  []
   Output: 0

  Example 4:
   Input:  [10, -40, 15, 20, -3, 50, -150]
   Output: 95
*/

const sumPositiveValuesFunction = (inputArray) => {
  const sum = inputArray.reduce((sum, value) => {
    if (value > 0)  sum += value;
    return sum;
  }, 0)
  return sum;
}

const inputArray = [1, -4, 12, 0, -3, 29, -150];
const result = sumPositiveValuesFunction(inputArray);
console.log(result);