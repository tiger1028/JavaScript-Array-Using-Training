/* Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. 
You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. 
Words that have less than 4 letters aren't abbreviated, because that would just be odd. 
The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. 
There won't be any punctuation in the sentence. g2d l2k e6e

  Example 1:
   Input:  "Every developer likes to mix kubernetes and javascript"
   Output: "E3y d7r l3s to mix k8s and j8t"
   
  Example 2:
   Input:  "I 've participated in DevOps and FullStack"
   Output: "I 've p10d in D4s and F7k"

  Example 3:
   Input:  "Every developer must know about javascript"
   Output: "E3y d7r m2t k2w a3t j8t"

  Example 4:
   Input:  "Every developer know about css and html"
   Output: "E3y d7r k2w a3t css and h2l"

*/
const abbreviateSentenceFunction = (input) => {
  const inputArray = input.split(" ");
  let output = "";
  inputArray.map(input => {
    if (input.length >= 4) {
      temp = input[0].concat(input.length - 2, input[input.length - 1]);
      output += temp + " ";
    } else {
      output += input + " ";
    }
   
  })
  return output;
}

const input = "Every developer know about css and html";
const result = abbreviateSentenceFunction(input);
console.log(result);