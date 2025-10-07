//1094. Car Pooling

var carPooling = function (trips, capacity) {
  let loc = Array(1001).fill(0);
  for (let i = 0; i < trips.length; i++) {
    let [passengers, from, to] = trips[i];
    loc[from] = loc[from] + passengers;
    loc[to] = loc[to] - passengers;
  }

  let usedCapacity = 0;
  for (let i = 0; i < loc.length; i++) {
    usedCapacity = usedCapacity + loc[i];
    if (usedCapacity > capacity) {
      return false;
    }
  }
  return true;
};
