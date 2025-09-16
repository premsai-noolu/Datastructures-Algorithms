//46. Permutations
//

var permute = function (nums) {
  let result = [];
  let n = nums.length;
  let backtrack = (path) => {
    if (path.length === n) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  };
  backtrack([]);
  return result;
};
