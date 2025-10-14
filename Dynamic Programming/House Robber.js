//198. House Robber

var rob = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }

  let dp = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

//Approach using constant space

var rob = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }

  let p2 = nums[0];
  let p1 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let temp = p1;
    let curr = Math.max(p2 + nums[i], p1);
    p1 = curr;
    p2 = temp;
  }
  return p1;
};
