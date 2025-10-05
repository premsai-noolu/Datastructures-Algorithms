//621. Task Scheduler

var leastInterval = function (tasks, n) {
  let map = {};
  for (let i = 0; i < tasks.length; i++) {
    if (!map[tasks[i]]) {
      map[tasks[i]] = 1;
    } else {
      ++map[tasks[i]];
    }
  }
  let maxi = 0;
  for (let value of Object.values(map)) {
    if (value > maxi) {
      maxi = value;
    }
  }

  let count = 0;
  for (let value of Object.values(map)) {
    if (value == maxi) {
      ++count;
    }
  }

  let cycles = (n + 1) * (maxi - 1) + count;
  return Math.max(tasks.length, cycles);
};
