/* Square the value of every element in the array. Presume that you will only get numbers in the input array.
  Example 1:
   Input:  [1,2,3,4,5]  
   Output: [1,4,9,16,25]

  Example 2:
   Input:  [2,5,6,8,10]  
   Output: [4,25,36,64,100]

  Example 3:
   Input:  [10,5,3,15,2]  
   Output: [100,25,9,225,4]

  Example 4:
   Input:  [5,3,2,1,0]  
   Output: [25,9,4,1,0]
*/

const squareFunction = (inputArray) => {
  const outputArray = [];
  inputArray.map(input => {
    outputArray.push(input * input)
  })
  return outputArray;
}

const inputArray = [1, 2, 3, 4, 5];
const result = squareFunction(inputArray);
console.log(result);