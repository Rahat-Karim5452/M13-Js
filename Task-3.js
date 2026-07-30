// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  // TODO: loop through each character, convert to number, and multiply
  for (i = 0; i < str.length; i++) {
    //console.log(str[i]);
    total = total * str[i];
  }
  return parseInt(total);
}

console.log(productOfDigits(123)); // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0
