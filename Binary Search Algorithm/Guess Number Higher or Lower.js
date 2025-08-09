//374. Guess Number Higher or Lower

var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let ans = guess(m);
    if (ans == 0) {
      return m;
    } else if (ans == -1) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};
