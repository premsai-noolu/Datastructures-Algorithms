//102. Binary Tree Level Order Traversal

var levelOrder = function (root) {
  if (!root) return [];
  let curr = root;
  let q = [root];
  let ans = [];
  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      curr = q.shift();
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      levelArr.push(curr.val);
    }
    ans.push(levelArr);
    console.log(ans);
  }
  return ans;

  //Recursive Solution
  if (!root) return [];
  let ans = [];
  function traversal(curr, level) {
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr.val);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }
  traversal(root, 0);
  return ans;
};
