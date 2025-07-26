//14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  let s = strs[0];
  let x = 0;
  while (x < s.length) {
    let charac = s[x];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][x] != charac || x == strs[i].length) {
        return s.substring(0, x);
      }
    }
    x++;
  }
  return s;
};
