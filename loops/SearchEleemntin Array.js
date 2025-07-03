function SearchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

let arr = [10, 8, 40, 3, 7, 6];

console.log(SearchElement(arr, 40));
console.log(SearchElement(arr, 9));
