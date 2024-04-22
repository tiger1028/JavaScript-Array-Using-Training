/* Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. 
The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
  Example 1:
   Input:  const input = [
                ["a", "b", "c"],
                ["c", "d", "f"],
                ["d", "f", "g"],
             ];

   Output:  { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1}
  Example 2:
   Input:  const input = [
                ["a", "b", "c"],
                ["a", "d", "c"],
                ["a", "f", "d"],
             ];

   Output:  { a: 3, b: 1, c: 2, d: 2, f: 1 }
  Example 3:
   Input:  const input = [
                ["a", "c", "c"],
                ["c", "d", "g"],
                ["d", "f", "g"],
             ];

   Output:  { a: 1, c: 3, d: 2, g: 2, f: 1 }
  Example 4:
   Input:  const input = [
                ["b", "b", "c"],
                ["c", "d", "d"],
                ["d", "e", "g"],
             ];

   Output: { b: 2, c: 2, d: 3, e: 1, g: 1 }

*/

const countOccurencesFunction = (inputArray) => {
  let countArray = {};
  inputArray.flat().map(arr => {
    if (countArray[arr]) {
      countArray[arr]++;
    }
    else countArray[arr] = 1;
  });
  return countArray;
}

const inputArray = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const result = countOccurencesFunction(inputArray);
console.log(result);