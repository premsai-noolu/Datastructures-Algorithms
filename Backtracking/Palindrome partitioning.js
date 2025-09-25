//131. Palindrome Partitioning

var partition = function (s) {
  let result = [];
  let isPalindrome = (choice) => {
    let i = 0;
    let j = choice.length - 1;
    while (i < j) {
      if (choice[i] != choice[j]) return false;
      i++;
      j--;
    }
    return true;
  };
  let backtrack = (path, remainingString) => {
    if (!remainingString.length) {
      result.push([...path]);
      return;
    }
    for (let i = 1; i <= remainingString.length; i++) {
      let choice = remainingString.substring(0, i);
      if (!isPalindrome(choice)) continue;
      path.push(choice);
      backtrack(path, remainingString.substring(i));
      path.pop();
    }
  };
  backtrack([], s);
  return result;
};
