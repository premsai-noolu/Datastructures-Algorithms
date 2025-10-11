//509. Fibonacci Number

// let dp={}
// var fib = function(n) {
//     if(n<=1){
//         return n
//     }

//     if(!dp[n]){
//         dp[n]=fib(n-1)+fib(n-2)
//     }

//     return dp[n]
// };

let dp = [0, 1];
var fib = function (n) {
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
