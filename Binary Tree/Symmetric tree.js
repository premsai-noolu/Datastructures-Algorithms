//101. Symmetric Tree

var isSymmetric = function (root) {
  function isMirror(left, right) {
    if (!left && !right) return true;

    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }
  return isMirror(root.left, root.right);

  //Iterative approach
  let q = [root.left, root.right];
  while (q.length) {
    let p1 = q.shift();
    let p2 = q.shift();

    if (p1 == null && p2 == null) continue;
    if (p1 == null || p2 == null) return false;
    if (p1.val != p2.val) {
      return false;
    }
    q.push(p1.left, p2.right);
    q.push(p1.right, p2.left);
  }
  return true;
};
