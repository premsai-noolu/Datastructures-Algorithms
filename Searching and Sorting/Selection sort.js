let arr = [7, 1, 5, 9, 3, 8, 4];

function selectionsort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let mini = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
  }
  return arr;
}

let result = selectionsort(arr);
console.log(result);
