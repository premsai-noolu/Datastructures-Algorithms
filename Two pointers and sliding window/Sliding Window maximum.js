//239. Sliding Window Maximum

var maxSlidingWindow = function (arr, k) {
  let i = (j = 0);
  let res = [];
  let q = [];

  while (j < arr.length) {
    while (q.length && arr[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(arr[j]);

    if (j >= k - 1) {
      res.push(q[0]);

      arr[i] == q[0] && q.shift();
      ++i;
    }
    ++j;
  }
  return res;
};
