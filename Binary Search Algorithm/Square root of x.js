//69. Sqrt(x)

var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (m ** 2 == x) {
      return m;
    } else if (x < m ** 2) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return r;
};
