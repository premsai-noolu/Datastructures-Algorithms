//424. Longest Repeating Character Replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let map = {};
  map[s[0]] = 1;
  let maxWindow = 0;
  while (j < s.length) {
    if (isValidWindow(map, k)) {
      currentWindow = j - i + 1;
      maxWindow = Math.max(maxWindow, currentWindow);
      ++j;
      map[s[j]] = !map[s[j]] ? 1 : 1 + map[s[j]];
    } else {
      --map[s[i]];
      i++;
    }
  }
  return maxWindow;
};

var isValidWindow = function (map, k) {
  let maxCount = 0;
  let totalCount = 0;
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + 65);
    if (map[char]) {
      maxCount = Math.max(maxCount, map[char]);
      totalCount = totalCount + map[char];
    }
  }
  if (totalCount - maxCount <= k) {
    return true;
  } else {
    return false;
  }
};
