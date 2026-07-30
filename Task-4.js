// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array
// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).
function getOddNumbers(n) {
  let odds = [];
  let allNumbers = [];
  let str = n.toString();
  for (i = 1; i <= n; i++) {
    let getNumbers = i;
    let arrNumbers = allNumbers.push(i);
    if (arrNumbers % 2 !== 0) {
      odds.push(arrNumbers);
    }
  }
  return odds;
}

console.log(getOddNumbers(100));
// Expected: [1, 3, 5, 7, 9]
