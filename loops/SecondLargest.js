//Write a function secondLargest(arr) that returns the second largest distinct number in an array.

function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

arr = [10, 20, 5, 20, 20, 6, 12];
console.log(secondLargest(arr));
