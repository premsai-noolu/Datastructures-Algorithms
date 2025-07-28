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

//Best approach

var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    let freq = Array(26).fill(0);
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      ++freq[index];
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + "#" + freq[k];
    }

    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }
  return [...Object.values(map)];
};
