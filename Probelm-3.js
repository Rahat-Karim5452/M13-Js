//Problem 3: Factorial of a Number
function factoralCount(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log("the factorial is: ", factoralCount(5));
console.log("the factorial is: ", factoralCount(20));
