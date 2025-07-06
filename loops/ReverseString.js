//344. Reverse String

var reverseString = function (s) {
  let length = s.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = s[i];
    s[i] = s[length - (i + 1)];
    s[length - (i + 1)] = temp;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
