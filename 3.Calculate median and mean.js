/* Calculate the mean and median values of the number elements from the input array.
  Example 1:
   Input:  [12, 46, 32, 64]
   Output: { mean: 38.5, median: 39 }

  Example 2:
   Input:  [15, 18, -10, 40, 20, -40]
   Output: { mean: 7.166666666666667, median: 16.5 }

  Example 3:
   Input:  [40, 20, -14, 2, 5, 10]
   Output: { mean: 10.5, median: 7.5 }

  Example 4:
   Input:  [0, -10, 10, 12, 9, -3, -5]
   Output: { mean: 1.8571428571428572, median: 0 }
*/

const calculateMeanAndMedianFunction = (inputArray) => {
  const output = { mean: 0, median: 0 };
  const length = inputArray.length;
  output.mean = inputArray.reduce((sum, value) => {
    return sum + value;
  }, 0)/length;
  inputArray.sort(function (a, b) { return a - b });
  if (length % 2 == 1) output.median = inputArray[(length + 1) / 2 - 1 ];
  else output.median = (inputArray[length / 2 - 1] + inputArray[length / 2]) / 2; 
  return output;
}

const inputArray = [12, 46, 32, 64];
const result = calculateMeanAndMedianFunction(inputArray);
console.log(result);