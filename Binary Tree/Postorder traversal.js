//145. Binary Tree Postorder Traversal

var postorderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }
  traversal(root);
  return ans;

  //Iterative approach using 2 stacks

  let s1 = [];
  let s2 = [];
  if (!root) return [];
  s1.push(root);
  while (s1.length) {
    curr = s1.pop();
    s2.push(curr);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  let ans = [];
  while (s2.length) {
    ans.push(s2.pop().val);
  }

  return ans;

  //Iterative approach 2 (using one stack)
  let curr = root;
  let stack = [];
  let ans = [];
  let lastVisited = null;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    let peek = stack[stack.length - 1];
    if (peek.right && peek.right != lastVisited) {
      curr = peek.right;
    } else {
      ans.push(peek.val);
      lastVisited = stack.pop();
    }
  }
  return ans;
};
