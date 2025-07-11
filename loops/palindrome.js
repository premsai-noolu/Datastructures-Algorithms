//Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let xCopy = x;
  let reverse = 0;
  while (x > 0) {
    let rem = x % 10;
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
  }
  return reverse === xCopy;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1443441));
