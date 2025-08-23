//112. Path Sum

var hasPathSum = function (root, targetSum) {
  //Top down approach
  // if(!root) return false
  // let ans=false
  // function traversal(curr,sum){
  //     let newsum=sum+curr.val
  //     if(!curr.left && ! curr.right){
  //         if(newsum==targetSum){
  //             ans= ans || true
  //         }
  //     }
  //     curr.left && traversal(curr.left,newsum)
  //     curr.right && traversal(curr.right,newsum)

  // }
  // traversal(root,0)
  // return ans

  //Bottom up Approach
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val == targetSum;
  }
  let leftpathsum = hasPathSum(root.left, targetSum - root.val);
  let rightpathsum = hasPathSum(root.right, targetSum - root.val);
  return leftpathsum || rightpathsum;
};
