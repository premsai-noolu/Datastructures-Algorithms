//496. Next Greater Element I

var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let n = nums2.length;
  let map = {};
  map[nums2[n - 1]] = -1;
  stack.push(nums2[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      if (nums2[i] < stack[stack.length - 1]) {
        map[nums2[i]] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      map[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }
  return nums1.map((x) => map[x]);
};
