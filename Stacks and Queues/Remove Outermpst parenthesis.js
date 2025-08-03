//1021. Remove Outermost Parentheses

//Using stack
var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
};

// without using stack(Good approach)

var removeOuterParentheses = function (s) {
  let level = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      ++level;
      ans = ans + (level > 1 ? s[i] : "");
    } else {
      ans = ans + (level > 1 ? s[i] : "");
      --level;
    }
  }
  return ans;
};
