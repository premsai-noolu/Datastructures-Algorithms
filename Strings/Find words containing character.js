//2942. Find Words Containing Character

var findWordsContaining = function (words, x) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
};
