//230. Kth Smallest Element in a BST

var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;
  function traversal(curr) {
    curr.left && traversal(curr.left);
    --count;
    if (count == 0) {
      ans = curr.val;
    }
    curr.right && traversal(curr.right);
  }
  traversal(root);
  return ans;
};
