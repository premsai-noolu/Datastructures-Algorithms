//543. Diameter of Binary Tree

var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function maxdia(curr) {
    if (!curr) return 0;
    let leftmaxdepth = maxdia(curr.left);
    let rightmaxdepth = maxdia(curr.right);

    let currDiameter = leftmaxdepth + rightmaxdepth;
    maxDiameter = Math.max(maxDiameter, currDiameter);

    return 1 + Math.max(leftmaxdepth, rightmaxdepth);
  }
  maxdia(root);
  return maxDiameter;
};
