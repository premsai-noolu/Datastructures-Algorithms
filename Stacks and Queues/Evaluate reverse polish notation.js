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

// another approach using map (we can go with above approach or this approach)

var evalRPN = function (tokens) {
  let stack = [];
  let map = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };
  for (let i = 0; i < tokens.length; i++) {
    if (map[tokens[i]]) {
      a = stack.pop();
      b = stack.pop();
      ans = map[tokens[i]](Number(a), Number(b));
      stack.push(ans);
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};
