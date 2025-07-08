//485. Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  let n = nums.length;
  let currentSum = 0;
  let maximum = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      maximum = Math.max(currentSum, maximum);
      currentSum = 0;
    } else {
      currentSum += 1;
    }
  }
  return Math.max(currentSum, maximum);
};

console.log(findMaxConsecutiveOnes([0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1]));
