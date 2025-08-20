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

  //Iterative approach using 2 stacks

  let s1 = [];
  let s2 = [];
  if (!root) return [];
  s1.push(root);
  while (s1.length) {
    curr = s1.pop();
    s2.push(curr);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  let ans = [];
  while (s2.length) {
    ans.push(s2.pop().val);
  }

  return ans;
};
