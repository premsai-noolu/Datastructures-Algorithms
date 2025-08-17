//3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let i = (j = 0);
  let n = s.length;
  let map = {};
  let maxwindow = 0;
  for (j = 0; j < n; j++) {
    if (map[s[j]] != undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }
    map[s[j]] = j;
    currentwindow = j - i + 1;
    maxwindow = Math.max(maxwindow, currentwindow);
  }
  return maxwindow;
};
