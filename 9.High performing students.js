/* You are given an array of objects representing a group of students, each with a name and an array of test scores. 
Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects 
containing only the students who have an average score above 90.
  Example 1:
   Input:  students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
];

   Output:  [ { name: 'Jack', average: 100 }  ]

  Example 2:
   Input:  students = [
  { name: "Tiger", scores: [90, 85, 92] },
  { name: "Robin", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 95] },
  { name: "Jack", scores: [40, 70, 80] }
];

   Output:  [ { name: 'Charlie', average: 93 } ]

  Example 3:
   Input:  students = [
  { name: "Alice", scores: [90, 95, 92] },
  { name: "Tiger", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Robin", scores: [90, 70, 100] }
];

   Output: [ { name: 'Alice', average: 92 } ]

  Example 4:
   Input:  students = [
  { name: "Robin", scores: [90, 95, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [80, 75, 85] },
  { name: "Jack", scores: [70, 80, 70] }
];

   Output:  [ { name: 'Robin', average: 92 } ]



*/

const getHighestStudentFunction = (students) => {
  const studentsWithAverageScore = [];
  students.map(student => {
    let studentWithAverage = {name : "", average: 0}
    studentWithAverage.name = student.name;
    let average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    studentWithAverage.average = Math.floor(average);
    studentsWithAverageScore.push(studentWithAverage);
  })

  return studentsWithAverageScore.filter(student =>  student.average > 90 )
}

const students = [
  { name: "Robin", scores: [90, 95, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [80, 75, 85] },
  { name: "Jack", scores: [70, 80, 70] }
];
const result = getHighestStudentFunction(students);
console.log(result);