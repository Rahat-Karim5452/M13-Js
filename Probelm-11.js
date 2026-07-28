//problem 11: sum and Avg of an array.
function findSumAndAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return [sum, avg];
}
console.log(findSumAndAvg([10, 20, 0, 49, 330, 393, 232, 383, 23]));
console.log(findSumAndAvg([10, 20, 1, 49, 330, 393, 232, 383, 23]));
