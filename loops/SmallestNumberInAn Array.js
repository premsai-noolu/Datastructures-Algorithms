//Write a function that returns the smallest number in an array.

function SmallestNumber(arr) {
  let smallest = Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

arr = [12, 11, 56, 89, 2, 4, -7, -3];

let result = SmallestNumber(arr);
console.log(result);
