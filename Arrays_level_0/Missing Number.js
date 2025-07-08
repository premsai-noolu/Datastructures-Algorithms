//268. Missing Number

var missingNumber = function (nums) {
  //Approach 1
  // nums.sort((a,b) => a-b)
  // if (nums[0] !== 0){
  //     return 0;
  // }
  // for (let i=1;i<nums.length;i++){
  //     if (nums[i] != nums[i-1]+1){
  //         return nums[i-1]+1
  //     }
  // }
  // return nums.length

  //Optimal approach
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let calsum = 0;
  for (let i = 0; i < n; i++) {
    calsum = calsum + nums[i];
  }
  return sum - calsum;
};
