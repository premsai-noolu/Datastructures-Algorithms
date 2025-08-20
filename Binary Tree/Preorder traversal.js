//144. Binary Tree Preorder Traversal

var preorderTraversal = function (root) {
  //recursive approach
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return ans;

  //Iterative approach
  let stack = [];
  let ans = [];
  if (!root) return [];
  stack.push(root);
  while (stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }
  return ans;
};
