//*Problem 5: Reverse a String
/* function reverseString(statement) {
  let reversedString = "";
  for (let i = statement.length - 1; i >= 0; i--) {
    reversedString += statement[i];
  }
  return reversedString;
}
console.log(reverseString("Rahat")); */

// Another Type:
function reverseString(statement) {
  return statement.split("").reverse("").join("");
}
console.log(reverseString("Rahat"));
