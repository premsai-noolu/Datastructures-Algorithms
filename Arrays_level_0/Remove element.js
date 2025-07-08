//27. Remove Element

var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};

console.log(removeElement([3, 2, 2, 3, 1, 4, 5, 3], 3));
