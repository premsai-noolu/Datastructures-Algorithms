//49. Group Anagrams

var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let a = strs[i].split("").sort().join("");
    if (!map[a]) {
      map[a] = [strs[i]];
    } else {
      map[a].push(strs[i]);
    }
  }

  //return Object.values(map)
  let ans = [];
  for (const value of map.values()) {
    ans.push(value);
  }
  return ans;
};
