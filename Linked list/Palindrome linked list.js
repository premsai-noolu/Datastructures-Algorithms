//234. Palindrome Linked List

//Approach 1 (not optimal)
var isPalindrome = function (head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] != arr[n - i - 1]) {
      return false;
    }
  }
  return true;
};

// Approach2 (Optimal)

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let curr = slow;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};
