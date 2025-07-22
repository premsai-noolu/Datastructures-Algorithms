//1221. Split a String in Balanced Strings

//Approach 1
var balancedStringSplit = function (s) {
  let balancedStrings = 0;
  let letterL = 0;
  let letterR = 0;
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      letterL += 1;
    } else {
      letterR += 1;
    }
    if (letterL === letterR) {
      balancedStrings += 1;
      letterL = 0;
      letterR = 0;
    }
  }
  return balancedStrings;
};

//Approach2 (using only one pointer - Good approach)

var balancedStringSplit = function (s) {
  // Approach 1
  let balancedStrings = 0;
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      temp += 1;
    } else {
      temp -= 1;
    }
    if (temp === 0) {
      balancedStrings += 1;
    }
  }
  return balancedStrings;
};
