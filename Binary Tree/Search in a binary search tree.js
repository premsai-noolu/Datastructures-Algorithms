//700. Search in a Binary Search Tree

var searchBST = function (root, val) {
  //Top down approach
  let ans = null;
  function traversal(curr) {
    if (curr.val === val) {
      ans = curr;
    } else {
      if (curr.val < val) {
        curr.right && traversal(curr.right);
      } else {
        curr.left && traversal(curr.left);
      }
    }
  }
  traversal(root);
  return ans;
};
