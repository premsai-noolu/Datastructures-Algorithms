//567. Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashS1 = Array(26).fill(0);
  let hashS2 = Array(26).fill(0);

  let window_length = s1.length;

  for (let i = 0; i < window_length; i++) {
    ++hashS1[s1.charCodeAt(i) - 97];
    ++hashS2[s2.charCodeAt(i) - 97];
  }
  let i = 0;
  let j = window_length - 1;

  while (j < s2.length) {
    if (isValidPermu(hashS1, hashS2)) {
      return true;
    } else {
      --hashS2[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashS2[s2.charCodeAt(j) - 97];
    }
  }
  return false;
};

var isValidPermu = function (hashS1, hashS2) {
  for (let i = 0; i < 26; i++) {
    if (hashS1[i] != hashS2[i]) {
      return false;
    }
  }
  return true;
};
