/* You are given an array of objects representing a collection of employees, each with a name, salary, and department. 
Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array 
of objects containing only the departments that have an average salary above 65000.

 Example 1:
   Input:  employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

   Output:  [
  { department: 'HR', average: 71666 }
]

 Example 2:
   Input:  employees = [
  { name: "John", salary: 100000, department: "IT" },
  { name: "Jane", salary: 100000, department: "HR" },
  { name: "Bob", salary: 65000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 50000, department: "HR" },
  { name: "David", salary: 60000, department: "IT" },
];

   Output:  [
  { department: 'IT', salary: 72500 },
  { department: 'HR', salary: 75000 }
]

Example 3:
   Input:  employees = [
  { name: "John", salary: 60000, department: "FullStack" },
  { name: "Jane", salary: 80000, department: "AI" },
  { name: "Bob", salary: 75000, department: "DevOps" },
  { name: "Sophie", salary: 85000, department: "FullStack" },
  { name: "Mike", salary: 65000, department: "DevOps" },
  { name: "Emily", salary: 50000, department: "FullStack" },
  { name: "David", salary: 100000, department: "AI" },
];

   Output:  [
  { department: 'AI', salary: 90000 },
  { department: 'DevOps', salary: 70000 }
]

Example 4:
   Input:  employees = [
  { name: "John", salary: 60000, department: "System Design" },
  { name: "Jane", salary: 70000, department: "Mobile" },
  { name: "Bob", salary: 45000, department: "UI/UX" },
  { name: "Sophie", salary: 85000, department: "System Design" },
  { name: "Mike", salary: 35000, department: "UI/UX" },
  { name: "Emily", salary: 60000, department: "System Design" },
  { name: "David", salary: 80000, department: "Mobile" },
];

   Output:  [
  { department: 'System Design', salary: 68333 },
  { department: 'Mobile', salary: 75000 }
]
*/

const getHighSalaryDepartmentFuction = (employees) => {
  const departmentSalaryArray = [];
  const departments = [];
  employees.map(employee => {
    if (departments.indexOf(employee.department) == -1)
      departments.push(employee.department);
  })

  departments.map(department => {
    let departmentAverageSalary = {department: "", salary: 0};
    const filteredArray = employees.filter(employee => employee.department == department);
    const average = filteredArray.reduce((sum, employee) => {
      return sum + employee.salary;
    }, 0) / filteredArray.length;

    departmentAverageSalary.department = department;
    departmentAverageSalary.salary = Math.floor(average);
    departmentSalaryArray.push(departmentAverageSalary);
  })
  return departmentSalaryArray.filter(department=> department.salary > 65000 )
}

const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];
const result = getHighSalaryDepartmentFuction(employees);
console.log(result);
