//455. Assign Cookies

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (s[j] >= g[i]) {
      ++i;
    }
    ++j;
  }
  return i;
};
