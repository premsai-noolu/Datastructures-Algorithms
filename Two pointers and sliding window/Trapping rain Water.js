//42. Trapping Rain Water

var trap = function (height) {
  let n = height.length;
  let maxL = [];
  let maxR = [];
  maxL[0] = height[0];
  maxR[n - 1] = height[n - 1];
  for (let i = 1; i < height.length; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
    maxR[n - 1 - i] = Math.max(maxR[n - i], height[n - 1 - i]);
  }
  let ans = 0;
  let waterTrapped;
  for (let i = 0; i < height.length; i++) {
    waterTrapped = Math.min(maxL[i], maxR[i]) - height[i];
    ans = ans + Math.max(waterTrapped, 0);
  }
  return ans;
};
