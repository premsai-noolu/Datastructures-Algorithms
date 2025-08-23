//103. Binary Tree Zigzag Level Order Traversal

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  let level = 0;
  while (q.length) {
    let levelarr = [];
    let levelsize = q.length;
    for (let i = 0; i < levelsize; i++) {
      let curr = q.shift();
      if (level % 2 == 0) {
        levelarr.push(curr.val);
      } else {
        levelarr.unshift(curr.val);
      }
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    ans.push(levelarr);
    ++level;
  }
  return ans;
};
