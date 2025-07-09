//1752. Check if Array Is Sorted and Rotated

var check = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count += 1;
    }
  }
  if (nums[nums.length - 1] > nums[0]) {
    count += 1;
  }
  if (count > 1) {
    return false;
  }
  return true;
};
