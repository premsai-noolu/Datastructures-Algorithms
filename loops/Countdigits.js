//Count the Number of Digits in an Integer

function countDigits(n) {
  if (n == 0) {
    return 1;
  }
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let number1 = 3452;
let number2 = -258974;
let number3 = 0;

console.log(countDigits(number1));
console.log(countDigits(number2));
console.log(countDigits(number3));
