/* Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
  Example 1:
   Input:  const input = [
    { name: "John", age: 13},
    { name: "Mark", age: 56},
    { name: "Rachel", age: 45},
    { name: "Nate", age: 67},
    { name: "Jennifer", age: 65}
  ];
   Output: [13, 67, 54]

  Example 2:
   Input:  const input = [
    { name: "Tiger", age: 13},
    { name: "Sanai", age: 80},
    { name: "Tom", age: 10},
    { name: "Robin", age: 67},
    { name: "Wiliam", age: 65}
  ];
   Output: [10, 80, 70]

  Example 3:
   Input:  const input = [
    { name: "Sanai", age: 20},
    { name: "Mark", age: 56},
    { name: "Tom", age: 45},
    { name: "Nate", age: 67},
    { name: "Tiger", age: 70}
  ];
   Output: [ 20, 70, 50 ]

  Example 4:
   Input:  const input = [
    { name: "Sanai", age: 13},
    { name: "Lion", age: 56},
    { name: "Panda", age: 45},
    { name: "Thomas", age: 67},
    { name: "Jennifer", age: 2}
  ];
   Output: [ 2, 67, 65 ]
*/

const getRespectiveAgeFunction = (inputArray) => {
  let ageArray = [];
  const length = inputArray.length;
  inputArray.map(input => {
    ageArray.push(input.age)
  })
  ageArray.sort(function (a, b) { return a - b });
  return [ageArray[0], ageArray[length - 1], ageArray[length - 1] - ageArray[0]];
}

const input = [
  { name: "Sanai", age: 13},
  { name: "Lion", age: 56},
  { name: "Panda", age: 45},
  { name: "Thomas", age: 67},
  { name: "Jennifer", age: 2}
];
const result = getRespectiveAgeFunction(input);
console.log(result);