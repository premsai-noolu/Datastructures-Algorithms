//572. Subtree of Another Tree

var isSubtree = function (root, subRoot) {
  let hashroot = serialize(root);
  let hashSubRoot = serialize(subRoot);

  return hashroot.includes(hashSubRoot);
};

let serialize = (root) => {
  let hash = "";
  let traversal = (curr) => {
    if (!curr) {
      hash = hash + "-#";
      return;
    }
    hash = hash + "-" + curr.val;
    traversal(curr.left);
    traversal(curr.right);
  };
  traversal(root);
  return hash;
};
