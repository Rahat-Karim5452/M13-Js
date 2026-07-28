//Problem 2: Sum of a Range of Number  1 to N
function sumOfRange(starting, ending) {
  let i = "";
  let sum = 0;
  let total = "";
  for (i = starting; i <= ending; i++) {
    sum += i;
  }
  return (total = sum);
}
console.log("The total vlaues is: ", sumOfRange(1, 7));
