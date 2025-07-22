//3541. Find Most Frequent Vowel and Consonant

var maxFreqSum = function (s) {
  const dict = {};
  for (let char of s) {
    if (dict[char]) {
      dict[char] += 1;
    } else {
      dict[char] = 1;
    }
  }

  let maxvowel = 0;
  let maxconsonant = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  let mapKeys = Object.keys(dict);
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      maxvowel = Math.max(maxvowel, dict[mapKeys[i]]);
    } else {
      maxconsonant = Math.max(maxconsonant, dict[mapKeys[i]]);
    }
  }
  return maxvowel + maxconsonant;
};
