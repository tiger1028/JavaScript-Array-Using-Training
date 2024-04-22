/* The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
  Example 1: 
   Input:  "George Raymond Richard Martin";
   Output: "GRRM"

   Example 2: 
   Input:  "Gentleman Tiger Sanai";
   Output: "GTS"

   Example 3: 
   Input:  "Domain Driven Design";
   Output: "DDD"

   Example 4: 
   Input:  "Software As A Service";
   Output: "SAAS"
*/

const abbreviateNameFunction = (input) => {
  const inputArray = input.split(" ");
  let output = "";
  inputArray.map(input => {
    output += input[0]
  })
  return output;
}

const input = "George Raymond Richard Martin";
const result = abbreviateNameFunction(input);
console.log(result);