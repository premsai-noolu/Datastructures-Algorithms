//121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = prices[i] - minPrice;
    maxProfit = Math.max(profit, maxProfit);
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
