//150. Evaluate Reverse Polish Notation

var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "*" ||
      tokens[i] === "/"
    ) {
      a = stack.pop();
      b = stack.pop();
      ans = Math.trunc(eval(`${b} ${tokens[i]} ${a}`));
      stack.push(ans);
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};
