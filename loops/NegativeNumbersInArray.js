//Write a function that returns the number of negative numbers in an array.

function negativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

arr = [-1, 2, -9, 17, 4, -6, -45, 32];

let result = negativeNumbers(arr);
console.log(result);
