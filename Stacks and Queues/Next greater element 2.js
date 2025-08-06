//503. Next Greater Element II

//first approach
var nextGreaterElements = function (nums) {
  let arr = [...nums, ...nums];

  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0);
  stack.push(arr[n - 1]);
  ans[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= top) {
        stack.pop();
      } else {
        ans[i] = top;
        break;
      }
    }
    if (stack.length == 0) {
      ans[i] = -1;
    }
    stack.push(arr[i]);
  }
  return ans.slice(0, nums.length);
};

//second approach

var nextGreaterElements = function (nums) {
  let stack = [];

  let n = nums.length;
  let arr = Array(n).fill(-1);
  stack.push(nums[n - 1]);
  arr[n - 1] = -1;
  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (nums[i % n] < top) {
        arr[i % n] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(nums[i % n]);
  }
  return arr;
};
