// Problem 9: Find the Largest Number in an Array
function findTheLargestNumber(arr) {
  let largest = arr[0]; //10
  for (i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findTheLargestNumber([10, 20, 30, 49, 330, 393, 232, 383, 23]));
