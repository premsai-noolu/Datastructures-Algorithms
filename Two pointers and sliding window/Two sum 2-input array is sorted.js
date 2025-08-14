//167. Two Sum II - Input Array Is Sorted

var twoSum = function (arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum == target) {
      return [i + 1, j + 1];
    } else if (sum > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }
};
