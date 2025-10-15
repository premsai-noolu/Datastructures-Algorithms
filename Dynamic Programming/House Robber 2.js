var rob = function (nums) {
  let n = nums.length;
  if (n == 1) {
    return nums[0];
  }
  var roberhelp = function (start, end) {
    let p1 = (p2 = 0);
    for (let i = start; i <= end; i++) {
      curr = Math.max(nums[i] + p2, p1);
      let temp = p1;
      p1 = curr;
      p2 = temp;
    }
    return p1;
  };
  return Math.max(roberhelp(0, n - 2), roberhelp(1, n - 1));
};
