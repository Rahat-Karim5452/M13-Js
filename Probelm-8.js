//Problem 8: Count character in a Sentence.
/* function countWords(str) {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count;
}
console.log(countWords("rahat karim zishan")); */

// Another Process:
function countWords(str) {
  let count = 1; //*Cause first word er age space thake na.
  return str.trim().split(" ").length; //!trim string er upor kaj kore tai age trim dibe pore split
}
console.log(countWords("rahat karim zishan"));
