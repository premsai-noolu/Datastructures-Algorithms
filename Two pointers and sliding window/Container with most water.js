//11. Container With Most Water

var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(maxArea, area);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return maxArea;
};
