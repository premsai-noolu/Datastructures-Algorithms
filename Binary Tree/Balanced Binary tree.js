//110. Balanced Binary Tree

var isBalanced = function (root) {
  if (!root) return true;
  let ans = true;
  function calculateHeight(curr) {
    if (!curr) return 0;
    let leftHeight = calculateHeight(curr.left);
    let rightHeight = calculateHeight(curr.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  }
  calculateHeight(root);
  return ans;
};
