//94. Binary Tree Inorder Traversal

var inorderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }
  traversal(root);
  return ans;

  //Iterative approach
  let ans = [];
  let stack = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
};
