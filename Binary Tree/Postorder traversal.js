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
};
