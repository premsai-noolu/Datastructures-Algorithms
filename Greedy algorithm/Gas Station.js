//134. Gas Station

var canCompleteCircuit = function (gas, cost) {
  let currgain = 0;
  let totalgain = 0;
  let ans = 0;

  for (let i = 0; i < gas.length; i++) {
    gain = gas[i] - cost[i];
    currgain = currgain + gain;
    totalgain = totalgain + gain;
    if (currgain < 0) {
      ans = i + 1;
      currgain = 0;
    }
  }
  return totalgain >= 0 ? ans : -1;
};
