//124. Binary Tree Maximum Path Sum

var maxPathSum = function (root) {
  let maxpathsum = -Infinity;
  function traversal(curr) {
    if (!curr) return 0;
    let leftpathsum = Math.max(0, traversal(curr.left));
    let rightpathsum = Math.max(0, traversal(curr.right));

    currSum = curr.val + leftpathsum + rightpathsum;
    maxpathsum = Math.max(maxpathsum, currSum);

    return curr.val + Math.max(leftpathsum, rightpathsum);
  }
  traversal(root);
  return maxpathsum;
};
