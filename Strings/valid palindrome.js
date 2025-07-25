//125. Valid Palindrome

//approach
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
    }
  }
  reverse = filteredString.split("").reverse().join("");
  return filteredString === reverse;
};

//approach 1
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

//approach 2

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt()) ||
      (s[i].charCodeAt() >= "0".charCodeAt() &&
        s[i].charCodeAt() >= "9".charCodeAt())
    ) {
      filteredString = filteredString + s[i];
      reverse = s[i] + reverse;
    }
  }
  return filteredString === reverse;
};
