// Problem 12: Filter Numbers Greater Than a Value
//(([10, 20, 0, 49, 330, 393, 232, 383, 23]));// 49 er uporer value.
function filterGreaterNumbers(arr, value) {
  let filterdValues = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      filterdValues.push(arr[i]);
    }
  }
  return filterdValues;
}
console.log(filterGreaterNumbers([10, 50, 0, 49, 330, 393, 232, 383, 23], 49));
