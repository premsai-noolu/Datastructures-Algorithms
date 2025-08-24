//1448. Count Good Nodes in Binary Tree

var goodNodes = function (root) {
  let ans = 0;
  function traversal(curr, maxSeenSoFar) {
    if (curr.val >= maxSeenSoFar) {
      ++ans;
    }
    let currMax = Math.max(curr.val, maxSeenSoFar);
    curr.left && traversal(curr.left, currMax);
    curr.right && traversal(curr.right, currMax);
  }
  traversal(root, -Infinity);
  return ans;
};
