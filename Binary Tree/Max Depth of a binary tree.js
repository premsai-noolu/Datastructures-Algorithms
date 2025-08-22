//104. Maximum Depth of Binary Tree

var maxDepth = function (root) {
  //Top Down Approach
  if (!root) return 0;
  let maxDepth = 0;
  function traversal(curr, depth) {
    maxDepth = Math.max(maxDepth, depth);
    curr.left && traversal(curr.left, depth + 1);
    curr.right && traversal(curr.right, depth + 1);
  }
  traversal(root, 1);
  return maxDepth;

  //Bottom up approach
  if (!root) return 0;
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  return 1 + Math.max(leftMax, rightMax);
};
