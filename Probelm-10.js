// Problem 10: Find the smallest Number in an Array
function findTheLSamallestNumber(arr) {
  let smallest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findTheLSamallestNumber([10, 20, 0, 49, 330, 393, 232, 383, 23]));
console.log(findTheLSamallestNumber([10, 20, 1, 49, 330, 393, 232, 383, 23]));
