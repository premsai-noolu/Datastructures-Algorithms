//15. 3Sum

//second approach
var threeSum = function (arr) {
  let set = new Set();
  let ans;
  for (let i = 0; i < arr.length; i++) {
    let map = [];
    for (let j = i + 1; j < arr.length; j++) {
      ans = -(arr[i] + arr[j]);
      if (ans == -0) {
        ans = 0;
      }
      if (map.includes(ans)) {
        let triplet = [arr[i], arr[j], ans].sort((a, b) => a - b);
        set.add(triplet.join(","));
      }
      map.push(arr[j]);
    }
  }

  let tripletans = [];
  tripletans = [...set].map((x) => x.split(",").map((str) => Number(str)));
  console.log(set);
  return tripletans;
};

//Optimal approach (Striver solution)
var threeSum = function (arr) {
  arr.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        ans.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while (j < k && arr[j] == arr[j - 1]) j++;
        while (j < k && arr[k] == arr[k + 1]) k--;
      }
    }
  }
  return ans;
};
