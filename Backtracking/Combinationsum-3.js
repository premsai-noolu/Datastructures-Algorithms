//216. Combination Sum III

var combinationSum3 = function (k, n) {
  let result = [];
  let backtrack = (remainingSum, path, start) => {
    if (path.length == k) {
      if (remainingSum == 0) {
        result.push([...path]);
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(remainingSum - i, path, i + 1);
      path.pop();
    }
  };
  backtrack(n, [], 1);
  return result;
};
