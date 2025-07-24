//125. Valid Palindrome

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
      reverse = s[i] + reverse;
    }
  }
  return filteredString === reverse;
};
