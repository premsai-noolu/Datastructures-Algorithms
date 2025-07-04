//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function (x) {
  let xCopy = x;
  x = Math.abs(x);
  let reverse = 0;
  while (x > 0) {
    let rem = x % 10;
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
  }
  let limit = Math.pow(2, 31);
  if (reverse < -limit || reverse > limit - 1) {
    return 0;
  }
  return xCopy < 0 ? -reverse : reverse;
};

console.log(reverse(14562));
console.log(reverse(-123));
