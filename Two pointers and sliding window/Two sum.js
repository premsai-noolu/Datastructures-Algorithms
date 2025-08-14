//1. Two Sum

var twoSum = function (nums, target) {
  let map = {};
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    let pairTofind = target - nums[i];
    if (map[pairTofind] && map[pairTofind] != i) {
      return [i, map[pairTofind]];
    }
  }
};
