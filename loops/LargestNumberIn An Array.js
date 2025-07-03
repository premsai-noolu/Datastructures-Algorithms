//Write a function that returns the largest number in an array.

function LargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

arr = [12, 11, 56, 89, 2, 4];

let result = LargestNumber(arr);
console.log(result);
