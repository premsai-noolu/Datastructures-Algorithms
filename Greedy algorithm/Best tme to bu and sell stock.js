//122. Best Time to Buy and Sell Stock II

var maxProfit = function (prices) {
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      ans += prices[i] - prices[i - 1];
    }
  }
  return ans;
};
