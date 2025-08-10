//153. Find Minimum in Rotated Sorted Array

var findMin = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  if (arr[l] <= arr[r]) {
    return arr[l];
  }

  while (l <= r) {
    if (arr[l] <= arr[r]) {
      return arr[l];
    }
    let m = Math.floor((l + r) / 2);

    if (arr[m] < arr[m - 1]) {
      return arr[m];
    }

    if (arr[l] > arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};
