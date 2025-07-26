//1903. Largest Odd Number in String

var largestOddNumber = function (num) {
  let s = num.length - 1;
  while (s >= 0) {
    if (Number(num[s]) % 2 == 1) {
      return num.substring(0, s + 1);
    }
    s--;
  }
  return "";
};
